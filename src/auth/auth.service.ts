import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signUp(dto: SignUpDto) {
    // generate hashed password
    const hash = (await argon2.hash(dto.password)).trim();
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hash,
          name: dto.name,
          phoneNumber: dto.phoneNumber,
        },
      });
      return this.signToken(user.id);
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002')
          throw new ForbiddenException('Credential taken');
      }
      throw e;
    }
  }

  async signIn(dto: SignInDto) {
    // if user not exist throw exception
    const user = await this.prisma.user
      .findUniqueOrThrow({
        where: {
          email: dto.email,
        },
      })
      .catch(() => {
        throw new ForbiddenException('Credential not found');
      });
    // compare password with hashed
    const pwMatched = await argon2.verify(user.password, dto.password);
    if (!pwMatched) {
      throw new ForbiddenException('Credential not found');
    }
    return this.signToken(user.id);
  }

  private async signToken(userId: string) {
    const payload = {
      sub: userId,
    };
    const token = await this.jwt.signAsync(payload, {
      secret: this.config.get('JWT_SECRET'),
      expiresIn: this.config.get('JWT_EXPIRES_IN'),
    });
    return {
      access_token: token,
    };
  }
}
