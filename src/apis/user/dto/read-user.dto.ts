import { Role } from 'src/apis/role/entities/role.entity';

export class ReadUserDto {
	id: number;
	username: string;
	fullname: string;
	createdAt: Date;
	updatedAt: Date;
	roles: Role[];
}
