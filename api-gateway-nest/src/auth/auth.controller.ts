import { Controller, Logger, Post, Request, UseGuards, UseInterceptors } from '@nestjs/common';;
import EmailLogin from '@auth/email-login.model';
import UsernameLogin from '@auth/username-login.model';

@Controller('auth')
export class AuthController {
    private readonly logger = new Logger(AuthController.name);
    
    constructor() {}

    //@UseInterceptors(AuthInterceptor)
    /*@UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }*/

    //@UseInterceptors(LoginInterceptor)
    @Post('login')
    async login(loginCreds: UsernameLogin | UsernameLogin) {
        return '';//this.authService.loginUser(loginCreds);
    }

}
