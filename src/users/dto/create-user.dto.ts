import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "example@exp.com", description: "Почта" })
  @IsEmail({}, { message: "Некорректный email" })
  @IsString({ message: "Должно быть строкой" })
  readonly email: string;
  @ApiProperty({ example: "qwerty", description: "Пароль" })
  @Length(4, 16, { message: "Не меньше 4 и не больше 16" })
  @IsString({ message: "Должно быть строкой" })
  readonly password: string;
}
