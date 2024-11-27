// import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Money } from "./money.model";


@Table({tableName: `summary`, createdAt: false, updatedAt: false})
export class Summary extends Model<Summary> {
    // @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    // @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    @Column({type: DataType.FLOAT})
    price: number;

    // @ApiProperty({example: 'Описание валюты ...', description: 'Описание'})
    @Column({type: DataType.FLOAT})
    volatile_p: number;

    // @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    @Column({type: DataType.FLOAT})
    volatile_m: number;

    // @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    @Column({type: DataType.FLOAT})
    volume: number;

    // @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    @Column({type: DataType.STRING})
    exchange: string;

    // @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    @Column({type: DataType.STRING})
    interval: string;

    @ForeignKey(() => Money)
    @Column({type: DataType.INTEGER})
    money_id: number;

    @BelongsTo(() => Money)
    money: Money;
}