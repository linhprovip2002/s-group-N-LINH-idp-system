import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { Permission } from './entities/permission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleService } from 'src/apis/role/role.service';
import { Role } from 'src/apis/role/entities/role.entity';
import { RoleModule } from 'src/apis/role/role.module';
import { User } from 'src/apis/user/entities/user.entity';
import { UserModule } from 'src/apis/user/user.module';
@Module({
  imports: [
    RoleModule,
    UserModule,
    TypeOrmModule.forFeature([Permission, Role, User]),
  ],
  controllers: [PermissionController],
  providers: [PermissionService, RoleService],
  exports: [PermissionService],
})
export class PermissionModule {}
