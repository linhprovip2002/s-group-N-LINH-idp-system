import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database';
import { UserProviders } from './users.providers';
import { UsersService } from './users.service';

@Module({
  imports: [DatabaseModule],
  providers: [...UserProviders, UsersService],
  controllers: [],
})
export class UsersModule {}
