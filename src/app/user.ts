export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    dateCreated: Date;
    dateLastSignedin: Date;
    role: number;
}
