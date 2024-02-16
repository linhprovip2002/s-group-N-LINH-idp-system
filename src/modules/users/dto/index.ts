export class UserDto {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
export class UserLoginDto {
  username: string;
  password: string;
}
export class UserRegisterDto {
  username: string;
  email: string;
  password: string;
}
export class UserUpdateDto {
  username: string;
  email: string;
  password: string;
}
export class UserResponseDto {
  id: number;
  username: string;
  email: string;
  created_at: Date;
  updated_at: Date;
}
export class CreateUserDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
