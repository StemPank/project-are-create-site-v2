import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class DeleteUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @IsString({message: `Должно быть строкой`})
    @IsEmail({}, {message:`Некорректный email`})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'пароль'})
    @IsString({message: `Должно быть строкой`})
    readonly password: string;
}