import { Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    const user = await this.userService.findOne(data.email);
    if (!user || !bcrypt.compareSync(data.password, user.password)) {
      throw new Error('Invalid credentials');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign(result),
    };
  }
  async validateUser(payload: JwtPayload): Promise<any> {
    return this.userService.findOne(payload.sub)
  }
  async validateToken(token: string): Promise<boolean> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(token, { secret: '123456' });
      const user = await this.validateUser(payload);
      return !!user;
    } catch (error) {
      return false;
    }
  }
}
