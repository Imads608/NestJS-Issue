# NestJS-Issue
The issue being seen here is that NestJS doesn't generate the dist files correctly or take in the latest changes into account

## Environment
- Node Version: `14.8.0`
- Nest Version: `8.0.2`
- Running on MacOS Big Sur 11.4

## Reproduction Steps
1. `cd` into the `api-gateway-nest` project
2. Install dependencies `npm install`
3. Create `.env` file with contents
```
APPLICATION_PORT=3015
USER_MICROSERVICE_PORT=3012
AUTH_MICROSERVICE_PORT=3011
```

5. Start the app `nest start --watch`
6. Generate module `nest generate module auth`
7. Generate controller `nest generate controller`
8. Generate module `nest generate module common`
9. In `auth.controller.ts`, replace the contents with below:

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

8. Delete the `common` and `auth` folders and remove the imports in `app.module.ts`
9. Make another change to the logging statement in the `main.ts` file and your changes should be reflected
