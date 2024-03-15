import type { NextApiRequest } from 'next';
import { NextRequest } from 'next/server';

export const isNextApiRequest = (
  req: NextApiRequest | NextRequest
): req is NextApiRequest => !(req instanceof NextRequest);
