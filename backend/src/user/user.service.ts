import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const { email, password } = dto;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await this.userRepository.create({
      email,
      password: hashPassword,
      salt,
    });
    const role = await this.roleService.getRoleByValue('admin');

    if (role) await user.$set('roles', [role.id]);

    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });

    return users;
  }

  async getUserByAuthEmail(email: string) {
    const user = await this.userRepository.findOne({
      raw: true,
      where: { email },
    });

    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      raw: true,
      where: { email },
      attributes: { exclude: ['password', 'salt', 'updatedAt', 'createdAt'] },
    });

    return user;
  }
}
