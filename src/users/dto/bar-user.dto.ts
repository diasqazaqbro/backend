import { ApiProperty } from "@nestjs/swagger"

export class BanUserDto {
    @ApiProperty({example: 'Долбоеб', description: 'Причина Бана'})
    readonly banReason: string
    @ApiProperty({example: 1, description: 'id пользователя'})
    readonly userId: number
}