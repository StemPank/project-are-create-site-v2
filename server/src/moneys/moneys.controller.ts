import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MoneysService } from './moneys.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { Roles } from 'src/auth/roles-auth.decorator';
// import { RolesGuard } from 'src/auth/roles.guard';
import { Money } from './money.model';
import { CreateMoneyDto } from './dto/create-money.dto';

@ApiTags(`Символ`)
@Controller('moneys')
export class MoneysController {
    constructor(private moneyService: MoneysService) {}

    @ApiOperation({summary: 'Добавить символ'})
    @ApiResponse({status: 200, type: [Money]})
    // @Roles(`ADMIN`)
    // @UseGuards(RolesGuard)
    @Post()
    create(@Body() moneyDto: CreateMoneyDto) {
        return this.moneyService.createMoney(moneyDto);
    }

    @ApiOperation({summary: 'Просмотреть символ'})
    @ApiResponse({status: 200, type: [Money]})
    // @Roles(`ADMIN`)
    // @UseGuards(RolesGuard)
    @Get()
    getAll(@Body() moneyDto: CreateMoneyDto) {
        return this.moneyService.getAllMoney(moneyDto);
    }
}

