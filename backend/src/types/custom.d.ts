import "express"

export type UserPayload = {
    id: string;
}

declare global {
    namespace Express {
        export interface Request {
            user?: UserPayload
        }
    }
}