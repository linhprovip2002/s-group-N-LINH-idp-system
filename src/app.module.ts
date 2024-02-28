import { ApiModule } from '@apis/api.module';
import { LoggerMiddleware } from 'src/common/middlewares/logger.middleware';
import { ConfigModule } from '@modules/configs';
import { DatabaseModule } from '@modules/database';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule, DatabaseModule, ApiModule],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
