import { Controller, Get } from '@nestjs/common';
import { Invoice } from './invoice.model';
import InvoicesService from './invoices.service';

@Controller('invoices')
class InvoicesController {
    constructor(private readonly invoicesService: InvoicesService) {}

    @Get()
    listInvoices(): Invoice[] {
        return this.invoicesService.listInvoices();
    }
}

export default InvoicesController;
