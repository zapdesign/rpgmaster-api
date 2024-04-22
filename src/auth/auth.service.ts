import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { User } from 'src/users/entities/user.entity';
import { UserPayload } from './model/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './model/UserToken';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
        ){}
    
    login(user: User): UserToken {
        
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name
        }

        const jwtToken = this.jwtService.sign(payload)

        return {
            acess_token: jwtToken
        }

    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findByEmail(email)

        if(user){
            const isPassValid = await bcrypt.compare(password, user.password)

            if(isPassValid){
                return {
                    ...user,
                    password: undefined
                }
            }
        }

        throw new Error("Email or password provide is incorrect.")
        
    }
    
}
