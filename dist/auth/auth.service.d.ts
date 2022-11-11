import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto';
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signUp(dto: SignUpDto): Promise<{
        access_token: string;
    }>;
    signIn(dto: SignInDto): Promise<{
        access_token: string;
    }>;
    private signToken;
}
