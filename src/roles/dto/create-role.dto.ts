import { ApiProperty } from "@nestjs/swagger"

export class CreateRoleDto {
    @ApiProperty({example: 'ADMIN', description: 'Название ролей'})
    readonly value: string
    @ApiProperty({example: 'Администратор', description: 'Описание ролей'})
    readonly description: string
}