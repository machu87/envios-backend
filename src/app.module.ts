import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { OrderService } from './orders/order.service';
import { OrderController } from './orders/order.controller';
import { PrismaService } from './prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'super-secret-jwt',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController, OrderController],
  providers: [AuthService, OrderService, PrismaService, JwtStrategy],
})
export class AppModule {}