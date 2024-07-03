import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  createPartnerUser(data: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.PARTNER],
      },
    });
  }

  createCommonUser(data: CreateUserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.USER],
      },
    });
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
  findByEmail(email: string) {
    if (!email) {
      throw new Error("Email must be provided");
    }
    return this.prismaService.user.findUnique({
      where: {
        email: email 
      },
    });
  }
 /* async findByIdd(id: number) {
    const idNumber = parseInt(id, 10);
    return await this.prismaService.user.findUnique({
      where: {
        id: id
        ...(typeof id === 'number'
          ? { id: id }
          : { email: id }),
      },
    })
  }*/
 /*findOne(idOrEmail: number | string) {
    return this.prismaService.user.findFirst({
      where: {
        ...(typeof idOrEmail === 'number'
          ? { id: idOrEmail }
          : { email: idOrEmail }),
      },
    });
  } */
    async findById(id: string) { // Function now accepts a string 'id'
      // Convert the string ID to a number using parseInt with radix (base 10)
      const numericId = parseInt(id, 10);
      // Check if conversion was successful (returns NaN for non-numeric strings)
      if (isNaN(numericId)) {
        throw new Error('Invalid user ID format. Please provide a valid numeric ID.');
      }
    
      // Use the converted numeric ID for the Prisma query
      return await this.prismaService.user.findUnique({
        where: { id: numericId },
      });
    }
}
