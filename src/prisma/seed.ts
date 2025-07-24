
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('admin123', 10);
  const user = await prisma.user.upsert({
    where: { email: 'admin@mail.com' },
    update: {},
    create: { email: 'admin@mail.com', password },
  });

  await prisma.order.create({
    data: {
      customerName: 'Juan Pérez',
      customerPhone: '1234567890',
      customerAddress: 'Calle Falsa 123',
      packages: [
        { name: 'Caja A', weight: '2kg', quantity: 1 },
        { name: 'Bolsa B', weight: '1.5kg', quantity: 2 },
      ],
      userId: user.id,
    },
  });

  console.log('Seed completed.');
}

main().finally(() => prisma.$disconnect());
