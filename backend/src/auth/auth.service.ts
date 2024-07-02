import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt-payload.interface';
import { compare } from 'bcrypt';

const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
   /* Função Old
    const user = await this.userService.findOne(data.email);
   if (!user || !bcrypt.compareSync(data.password, user.password)) {
      throw new Error('Invalid credentials');
    }
    const { password, ...result } = user; */
    const user = await this.validateUser(data);
    const payload = {
      username: user.email,
      sub: {
        name: user.name, 
      }, 
    }; 
    
    return {
      user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '20s',
          secret: '123456',
         // secret: process.env.jwtSecretKey,
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: '123456',
          //secret: process.env.jwtRefreshTokenKey,
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME), 
      }
    };
  }
  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (user && (await compare(dto.password, user.password))){
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException(); 
  }
 /* FUNÇÃO OLD
  async validateuser(payload: JwtPayload): Promise<any> {
    return this.userService.findOne(payload.sub)
  }
  async validateToken(token: string): Promise<boolean> {
    try {
      const payload = this.jwtService.verify<JwtPayload>(token, { secret: '123456' });
      const user = await this.validadeUser(payload);
      return !!user;
    } catch (error) {
      return false;
    }
  }  */
  async refreshToken(user: any) {
    const payload = {
      username: user.username,
      sub: user.sub
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '20s',
        secret: '123456'
        //secret: process.env.jwtSecretKey,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: '123456'
       // secret: process.env.jwtRefreshTokenKey,
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME), 
    }; 
  }
}
