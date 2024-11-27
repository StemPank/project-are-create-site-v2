import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Kline } from "./klines.model";
import { Summary } from "./summary-klines-and-sumbols.model";

interface MoneyCreationAttrs {
    name: string;
    descript: string;
    rialto: string;
}

@Table({tableName: `money`})
export class Money extends Model<Money, MoneyCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'USDT', description: 'Имя символа'})
    @Column({type: DataType.STRING})
    name: string;

    @ApiProperty({example: 'Описание валюты ...', description: 'Описание'})
    @Column({type: DataType.STRING})
    descript: string;

    @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    @Column({type: DataType.STRING})
    rialto: string;

    @HasMany(() => Kline)
    klines: Kline[];

    @HasMany(() => Summary)
    summarys: Summary[];
}