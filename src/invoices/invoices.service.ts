import { Injectable } from '@nestjs/common';
import { Invoice } from './invoice.model';

function date(): Date {
    return new Date();
}
function num(): number {
    return Math.round(Math.random() * 1000);
}
function generateInvoice(id: number): Invoice {
    return {
        id,
        voucherId: '',
        companyId: '',

        makerId: num(),
        marketId: num(),
        takerId: num(),

        dueDate: date(),
        paymentDueDate: date(),
        isPaid: false,

        currency: '',
        amount: num(),

        created: date(),

        // Eligibility
        isReserved: false,
        isPastDue: false,
        makerExcluded: false,
        makerExcludedForToday: false,
        takerExcluded: false,
        takerExcludedForToday: false,
        isIneligibleEp: false,
        isIneligibleAr: false,

        // Adjustment
        transactionType: 1,

        // Marketplace
        isInCashPool: false,
        isAwarded: false,
        isPendingClear: false,
        isCleared: false,
    };
}

@Injectable()
class InvoicesService {
    listInvoices(): Invoice[] {
        return [ generateInvoice(1) ];
    }
}

export default InvoicesService;
