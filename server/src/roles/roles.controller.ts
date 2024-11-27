import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { User } from 'src/users/user.model';

@ApiTags(`Роль`)
@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService) {}

    @ApiOperation({summary: 'Добавить роль'})
    @ApiResponse({status: 200, type: [User]})
    @Roles(`ADMIN`)
    @UseGuards(RolesGuard)
    @Post()
    create(@Body() roleDto: CreateRoleDto) {
        return this.roleService.createRole(roleDto);
    }

    @ApiOperation({summary: 'Просмотреть роль'})
    @ApiResponse({status: 200, type: [User]})
    @Roles(`ADMIN`)
    @UseGuards(RolesGuard)
    @Get(`/:value`)
    getRoleByValue(@Param(`value`) value: string) {
        return this.roleService.getRoleByValue(value);
    }
}
