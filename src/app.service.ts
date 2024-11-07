import { Injectable } from '@nestjs/common';
import { apiSummaryHtml } from './api-summary.html';

@Injectable()
export class AppService {
  getHello(): string {
    return apiSummaryHtml;
  }
}
