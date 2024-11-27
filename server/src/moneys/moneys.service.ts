import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMoneyDto } from './dto/create-money.dto';
import { Money } from './money.model';

@Injectable()
export class MoneysService {
    constructor(@InjectModel(Money) private moneyRepository: typeof Money) {}

    async createMoney(dto: CreateMoneyDto) {
        const money = await this.moneyRepository.create(dto);
        return money;
    }

    async getAllMoney(dto: CreateMoneyDto) {
        const money = await this.moneyRepository.findAll({include: {all: true}});
        return money;
    }

    async getMoneyByName(name: string) {
        const money = await this.moneyRepository.findOne({where: {name}});
        return money
    }


}
