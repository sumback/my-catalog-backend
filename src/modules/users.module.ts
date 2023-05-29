import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { UsersController } from '@/controllers/users.controller';
import { UsersService } from '@/services/users.service';

@Module({
  controllers: [UsersController],
  imports: [HttpModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
