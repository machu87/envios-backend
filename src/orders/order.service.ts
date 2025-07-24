import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: any) {
    return this.prisma.order.create({ data: { ...dto, userId } });
  }

  async findAll(filters: any) {
    return this.prisma.order.findMany({
      where: { customerName: { contains: filters.customerName || '' } },
      orderBy: { createdAt: 'desc' },
    });
  }

  async exportCSV() {
    const orders = await this.findAll({});
    const rows = orders.map(o => `${o.customerName},${o.customerPhone},${o.customerAddress}`);
    return `Cliente,Teléfono,Dirección
${rows.join('
')}`;
  }
}