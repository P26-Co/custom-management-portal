import { User } from '../user/user.types';

export interface Token {
    token: string;
    role: string;
    user: User;
}
