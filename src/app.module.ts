import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';
// import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb+srv://users:users@auth.4o4so.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/auth'
    ),
    UserModule,
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
