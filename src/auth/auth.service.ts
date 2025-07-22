async register(dto: RegisterDto) {
  const hashed = await bcrypt.hash(dto.password, 10);
  const user = await this.prisma.user.create({ data: { ...dto, password: hashed } });
  return { message: "User created" };
}

async login(dto: LoginDto) {
  const user = await this.prisma.user.findUnique({ where: { email: dto.email } });
  if (!user || !(await bcrypt.compare(dto.password, user.password))) {
    throw new UnauthorizedException();
  }
  const payload = { sub: user.id };
  return { token: this.jwt.sign(payload) };
}