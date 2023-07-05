 import { Injectable } from '@nestjs/common';
import { CreateUSerDto } from './dtos/create.users.dto';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {

    users: User[] = [{id: '0', name: 'Bhaskar'}]

    getAllUsers(): User[]{
        return this.users;
    }

    getUserById(id: string):User{
        return this.users.find(user => user.id == id);
    }

    createUser(dto: CreateUSerDto):User{
        const newUser = {id: Date.now().toString(), ...dto};
        this.users.push(newUser);
        return newUser;
    }

}