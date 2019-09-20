import { Module } from '@nestjs/common';
import AppController from './app.controller';
import AppService from './app.service';
import InvoicesController from './invoices/invoices.controller';
import InvoicesService from './invoices/invoices.service';

@Module({
    imports: [],
    controllers: [ AppController, InvoicesController ],
    providers: [ AppService, InvoicesService ],
})

class AppModule {}

export default AppModule;
