import { NestFactory } from '@nestjs/core';
import AppModule from './app.module';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function bootstrap(): Promise<any> {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
