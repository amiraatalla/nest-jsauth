import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login(res: any, createAuthDto: CreateAuthDto): Promise<Response>;
    register(res: any, createUserDto: CreateUserDto): Promise<Response>;
}
