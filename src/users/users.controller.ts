import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUSerDto } from './dtos/create.users.dto';
import { User } from './entities/users.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get('getAll')
    getAllUsers():User[] {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string):User {
        return this.userService.getUserById(id);
    }

    @ApiCreatedResponse({type: User})
    @Post('createUser')
    createUser(@Body() user: CreateUSerDto): User {
        return this.userService.createUser(user);
    }
}
