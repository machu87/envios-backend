@Post("register")
async register(@Body() dto: RegisterDto) {
  return this.authService.register(dto);
}

@Post("login")
async login(@Body() dto: LoginDto) {
  return this.authService.login(dto);
}