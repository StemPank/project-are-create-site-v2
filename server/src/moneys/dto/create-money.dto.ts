import { ApiProperty } from "@nestjs/swagger";


export class CreateMoneyDto {
    @ApiProperty({example: 'BTCUSDT', description: 'Имя символа'})
    readonly name: string;
    @ApiProperty({example: 'Bitcoin', description: 'Описание символа'})
    readonly descript: string;
    @ApiProperty({example: 'BINANCE', description: 'Биржа'})
    readonly rialto: string;
}