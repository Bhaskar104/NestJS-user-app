import { ApiProperty } from "@nestjs/swagger";

export class CreateUSerDto {

    @ApiProperty()
    name: string;
}