import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.model';
import { JwtService } from '@nestjs/jwt';
import { addMinutes, getUnixTime } from 'date-fns';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<Partial<User>> {
    const user = await this.usersService.getUserByAuthEmail(email);
    const hashPassword = await bcrypt.hash(password, user.salt);

    if (user && user.password === hashPassword) {
      const { password, salt, ...result } = user;
      return result;
    }
    return null;
  }

  async signIn(user: User) {
    const payload = { email: user.email, sub: user.id };
    const currentTime = Date.now();
    const expires = getUnixTime(addMinutes(currentTime, 0.25));
    return {
      access_token: this.jwtService.sign(payload),
      expires,
    };
  }
}
