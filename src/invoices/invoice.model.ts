export interface Invoice {

    readonly id: number;
    readonly invoiceId?: string;
    readonly voucherId: string;
    readonly companyId: string;

    readonly makerId: number; // Ref
    readonly marketId: number; // Ref
    readonly takerId: number; // Ref

    readonly dueDate: Date;
    readonly paymentDueDate: Date; // Is this or dueDate calculated?
    readonly isPaid: boolean;

    readonly currency: string;
    readonly amount: number;
    readonly vatAmount?: number;

    readonly created: Date;
    readonly updated?: Date;

    // ESLAP
    readonly eslapId?: number; // Ref
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly eslap?: any;

    // Eligibility
    readonly isReserved: boolean;
    readonly isPastDue: boolean;
    readonly makerExcluded: boolean;
    readonly makerExcludedForToday: boolean;
    readonly takerExcluded: boolean;
    readonly takerExcludedForToday: boolean;
    readonly isIneligibleEp: boolean;
    readonly isIneligibleAr: boolean;

    // Adjustment
    readonly adjustmentAmount?: number;
    readonly transactionType: number; // Does this come through on the invoice?

    readonly adjInvoiceId?: string; // Ref
    readonly fundingPartnerUuid?: string; // Ref
    readonly filesetConfigurationId?: number; // Ref

    // Marketplace
    readonly isInCashPool: boolean;
    readonly isAwarded: boolean;
    readonly minDiscount?: number;
    readonly blendedReturnAmount?: number;
    readonly daysPaidEarly?: number;
    readonly discountedAmount?: number;
    readonly earn?: number;

    readonly cashPoolSettingsUuid?: string; // Ref

    // Clear
    readonly clearedDate?: Date;
    readonly isPendingClear: boolean;
    readonly isCleared: boolean;
    readonly makerMarketClearId?: number; // Ref
    readonly takerMarketClearId?: number; // Ref

}
