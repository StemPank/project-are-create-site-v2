// import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Money } from "./money.model";


@Table({tableName: `kline`, createdAt: false, updatedAt: false})
export class Kline extends Model<Kline> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER})
    open_time: number;

    @Column({type: DataType.FLOAT})
    price_open: number;

    @Column({type: DataType.FLOAT})
    price_high: number;

    @Column({type: DataType.FLOAT})
    price_low: number;

    @Column({type: DataType.FLOAT})
    price_close: number;

    @Column({type: DataType.FLOAT})
    volume: number;

    @ForeignKey(() => Money)
    @Column({type: DataType.INTEGER})
    money_id: number;

    @BelongsTo(() => Money)
    money: Money;

}