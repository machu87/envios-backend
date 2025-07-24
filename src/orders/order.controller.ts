import { Controller, Post, Get, Body, Query, Req, Res, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { Request, Response } from 'express';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req: Request, @Body() dto: any) {
    return this.orderService.create((req as any).user.userId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() filters: any) {
    return this.orderService.findAll(filters);
  }

  @UseGuards(JwtAuthGuard)
  @Get('export')
  async exportCSV(@Res() res: Response) {
    const csv = await this.orderService.exportCSV();
    res.header('Content-Type', 'text/csv');
    res.attachment('ordenes.csv');
    res.send(csv);
  }
}