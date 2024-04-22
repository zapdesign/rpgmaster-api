export class UserPayload {
    sub: string
    email: string
    name: string
    iat?: number
    exp?: number
}

export class PlayerPayload {
    id: string
    email: string
    name: string
    project_id: string
    iat?: number
    exp?: number
}