import { ApiProperty } from "@nestjs/swagger"

export class AddRoleDto {
    @ApiProperty({example: 'USER', description: 'Value Роли'})
    readonly value: string
    @ApiProperty({example: 1, description: 'id пользователя'})
    readonly userId: number
}