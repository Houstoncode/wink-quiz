import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Role]), RolesModule],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
