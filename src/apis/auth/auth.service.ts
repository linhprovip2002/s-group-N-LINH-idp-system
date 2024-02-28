import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/apis/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user: User | undefined =
      await this.usersService.findOneByUsername(username);
    const passwordValid = await bcrypt.compare(password, user?.password);
    if (!passwordValid) {
      throw new UnauthorizedException();
    }
    const payload = {
      id: user?.id,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
