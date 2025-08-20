export declare class UserService {
    users: {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
    }[];
    getAllUsers(): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
    }[];
    getUserById(id: number): {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
    };
    createUser(user: {
        id: number;
        name: string;
        age: number;
        gender: string;
        isMerried: boolean;
        email: string;
    }): void;
}
