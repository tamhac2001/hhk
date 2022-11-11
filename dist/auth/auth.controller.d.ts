import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';
export declare class AuthController {
    private service;
    constructor(service: AuthService);
    signUp(dto: SignUpDto): Promise<{
        access_token: string;
    }>;
    signIn(dto: SignInDto): Promise<{
        access_token: string;
    }>;
}
