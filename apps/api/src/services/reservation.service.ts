import { midTransLink } from '@/helper/fetchingMidtrans';

export const createPaymentLink = async (
  orderId: string,
  totalPrice: number,
) => {
  const data = {
    transaction_details: {
      order_id: `ORDERID-${orderId}`,
      gross_amount: totalPrice,
    },
    expiry: {
      unit: 'minutes',
      duration: 60,
    },
  };

  const midTransData = await midTransLink(data);
  return midTransData;
};
