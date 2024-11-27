import { Module } from '@nestjs/common';
import { MoneysController } from './moneys.controller';
import { MoneysService } from './moneys.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Money } from './money.model';
import { Kline } from './klines.model';
import { Summary } from './summary-klines-and-sumbols.model';

@Module({
  controllers: [MoneysController],
  providers: [MoneysService],
  imports: [
    SequelizeModule.forFeature([Money, Kline, Summary])
],
})
export class MoneysModule {}
