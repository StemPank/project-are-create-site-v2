import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { DeleteUserDto } from './dto/delete-user.dto';


@Injectable()
export class UsersService {
    
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue(`ADMIN`)
        await user.$set(`roles`, [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers() {
        const users = await this.userRepository.findAll({include: {all: true}});
        return users;
    }

    async getUsersByEmail(email: string) {
        const users = await this.userRepository.findOne({where: {email}, include: {all: true}});
        return users;
    }

    async addRole(dto: AddRoleDto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }

    async destroyUser(dto: DeleteUserDto) {
        const user = await this.getUsersByEmail(dto.email);
        if (user) {
            const dismissal = await user.destroy();
            return {message: `Пользователь удален`};
        }
        throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);

    }
}