import { Request } from "express";
import { Player } from "src/player/entities/player.entity";
import { User } from "src/users/entities/user.entity";

export interface AuthRequest extends Request {
    user: User
}
export interface AuthRequestPlayer extends Request {
    player: Player
}