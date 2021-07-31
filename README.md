# NestJS-Issue
The issue being seen here is that NestJS doesn't generate the dist files correctly or take in the latest changes into account


## Reproduction Steps
1. `cd` into the `api-gateway-nest` project
2. Start the app `nest start --watch`
3. Generate module `nest generate module auth`
4. Generate controller `nest generate controller`
5. Generate module `nest generate module common`
6. In `auth.module.ts`, replace the contents with below:

```
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

```

7. Change the logging statement in `main.ts`
Your changes shouldn't be reflected and if `dist` folder is deleted, the app won't be able to recreate all the files needed to start it back up.

8. Delete the `common` and `auth` folders
9. Make another change to the logging statement in the `main.ts` file and your changes should be reflected