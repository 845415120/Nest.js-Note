import { Controller, Get } from '@nestjs/common';

// 3000/user/findAll
@Controller('user')
export class UserController {
  @Get('/findAll')
  findAll(): string {
    return 'hello world';
  }
}

//nest g co 生成请求
