import { NextApiRequest, NextApiResponse } from 'next';
import { matchVendorToBuyer } from '../../services/aiService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { vendorProfile, buyerProfile } = req.body;

  try {
    const matchResult = await matchVendorToBuyer(vendorProfile, buyerProfile);
    res.status(200).json({ matchResult });
  } catch (error) {
    res.status(500).json({ error: 'Error matching vendor and buyer' });
  }
}
