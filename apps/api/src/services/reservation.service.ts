import axios from 'axios';

export const createPaymentLink = async (orderId: string,totalPrice: number,) => {
  const data = {
    transaction_details: {
      order_id: `ORDERID-${orderId}`,
      gross_amount: totalPrice,
    },
    expiry: {
      unit: 'minutes',
      duration: 120,
    },
  };
  const midTrans = await axios.post(
    'https://app.sandbox.midtrans.com/snap/v1/transactions',
    data,
    {
      headers: {
        Authorization: `Basic ${process.env.MIDTRANS_SERVER_KEY}`,
      },
    },
  );
  const midTransData = await midTrans.data;
  return midTransData;
};
