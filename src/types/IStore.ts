/** @desc `/api/store/v1/elasticStore/${storeId}` */
export type IStore = {
  abAddress: boolean;
  acceptedPayments: string;
  active: boolean;
  allowBillToShipToUS: boolean;
  averageValue: number | null;
  averageWeight: number | null;
  billingEnabled: boolean;
  billingType: string | null;
  clientPaysAnnually: boolean;
  commissionedSalesRepresentative: string | null;
  /** @param compass === false is a legacy checkout store */
  compass: boolean;
  countries: string | null;
  ctpCode: string | null;
  defaultCountryOfOrigin: string;
  defaultHarmonizedCode: string;
  defaultItemDescription: string | null;
  defaultPrepayDutyTax: boolean;
  enableAbTestUsdOnly: boolean;
  enableCheckoutNotes: boolean;
  enablePromoCodes: boolean;
  enableRadioLandedCostAbTest: boolean;
  externalConfirmationPageURL: string | null;
  footerHtml: null;
  forceEnableLandedRadios: boolean;
  fps: boolean;
  gdprAgeOfConsent?: number;
  gdprContactPage?: string;
  gdprLevel?: string;
  gdprMarketingRetentionLength?: number;
  gdprPrivacyControllerEmail?: string;
  gdprPrivacyControllerName?: string;
  goLiveDate: number | null;
  googleAnalyticsProfileId: string | null;
  id: number;
  igWeightFactor: number;
  implementationPhase: boolean;
  industry: string | null;
  interpayMerchantId: string | null;
  ionEmail: string | null;
  landedCostProfileId: number;
  logoUrl: string | null;
  merchantFromAddress: string | null;
  merchantNotificationMethod: string | null;
  myUpsDefaultShipperNumber: string | null;
  name: string;
  onboardingExperienceComment: null;
  orderId: number | null;
  payType: string;
  positiveOnboardingExperience: null;
  pricingModelId: number;
  sendCancellationEmail: boolean;
  sendConfirmEmail: boolean;
  sendShippedEmail: boolean;
  servicesPassword: string;
  shoppingCartPlatform: string;
  statementDay: string;
  statementEodExempt: boolean;
  statementFeeMinimum: number;
  statementFlatFee: null;
  statementFrequencyDaysMinimum: number;
  statementMinimum: number;
  statementType: string;
  storeId: number;
  subDomainName: string;
  test: boolean;
  updated_at: number;
  usdOnly: boolean;
  usesOwnDutyTax: boolean;
  usesOwnPaymentAccounts: boolean;
  vendorUrl: string;
};
