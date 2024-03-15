import type { NextRequest } from 'next/server';

export const getUserToken = (req: NextRequest): string | null => {
  const IGuserCookie = req.cookies.get('IGuser')?.value;

  const origin = req.headers.get('origin') || '';

  if (origin.includes('storybook')) {
    return req.headers.get('authorization') || null;
  }
  if (!IGuserCookie) {
    console.error(
      `Missing IGuser cookie from the following request: ${req.url}`
    );
  }
  return IGuserCookie || null;
};
