import type {
  AdapterContext,
  PaymentGatwayAdapter,
  CaptureRequest,
  CreditRequest,
  GatewayAuthorizationRequest,
  GatewayAuthorizeResponse,
  GatewayCaptureResponse,
  GatewayCreditResponse,
  GatewayDebitResponse,
  GatewayGetGiftCardBalanceRequest,
  GatewayGetGiftCardBalanceResponse,
  GatewayGiftCardCreateRequest,
  GatewayGiftCardCreateResponse,
  GatewayVoidResponse,
  Logger,
  AuthorizeIdKeyNameResponse,
  GatewayInteraction,
  ValidateResponse,
} from '@kibocommerce/kibo-paymentgateway-hosting'
import type { CustomAdapterSettings } from './types'
export class CustomGatewayAdapter implements PaymentGatwayAdapter {
  context: AdapterContext
  logger: Logger
  settings?: CustomAdapterSettings
  constructor(context: AdapterContext, logger: Logger, settings?: CustomAdapterSettings) {
    this.context = context
    this.logger = logger
    this.settings = settings
  }
  async authorize(request: GatewayAuthorizationRequest): Promise<GatewayAuthorizeResponse> {
    return {
      authCode: 'NOTCAPTURED',
      responseCode: 'food',
      responseText: ' Not Captured via CustomGatewayAdapter',
      isDeclined: true,
    }
  }
  async authorizeWithToken(
    request: GatewayAuthorizationRequest
  ): Promise<GatewayAuthorizeResponse> {
    throw new Error('Method not implemented.')
  }
  async capture(request: CaptureRequest): Promise<GatewayCaptureResponse> {
    return {
      authCode: 'NOTCAPTURED',
      responseCode: 'food',
      responseText: ' Not Captured via CustomGatewayAdapter',
      isDeclined: true,
    }
  }
  async credit(request: CreditRequest): Promise<GatewayCreditResponse> {
    throw new Error('Method not implemented.')
  }
  async void(request: CaptureRequest): Promise<GatewayVoidResponse> {
    throw new Error('Method not implemented.')
  }
  async authorizeAndCapture(request: GatewayAuthorizationRequest): Promise<GatewayDebitResponse> {
    return {
      authCode: 'NOTCAPTURED',
      responseCode: 'food',
      responseText: ' Not Captured via CustomGatewayAdapter',
      isDeclined: true,
    }
  }
  async authorizeAndCaptureWithToken(
    request: GatewayAuthorizationRequest
  ): Promise<GatewayDebitResponse> {
    throw new Error('Method not implemented.')
  }
  async createGiftCard(
    request: GatewayGiftCardCreateResponse
  ): Promise<GatewayGiftCardCreateRequest> {
    throw new Error('Method not implemented.')
  }
  async getBalance(
    request: GatewayGetGiftCardBalanceRequest
  ): Promise<GatewayGetGiftCardBalanceResponse> {
    throw new Error('Method not implemented.')
  }
  async validateAuthTransaction(request: GatewayInteraction): Promise<ValidateResponse> {
    throw new Error('Method not implemented.')
  }
  async getAuthorizationIDKeyName(): Promise<AuthorizeIdKeyNameResponse> {
    throw new Error('Method not implemented.')
  }
}
