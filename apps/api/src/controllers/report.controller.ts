import { responseError } from '@/helper/ResponseError';
import { IPropsReport, reportSalesServices } from '@/services/report.service';
import { Request, Response } from 'express';
export class SalesReportController {
  async getReportByProperty(req: Request, res: Response) {
    const tenant_id = req.user?.id!;

    try {
      const data = await reportSalesServices.getReportByProperty({
        tenant_id,
      });
      res.status(200).send(data);
    } catch (error) {
      console.log(error);

      responseError(res, error);
    }
  }
}
