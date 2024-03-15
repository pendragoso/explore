import { type ReactNode, forwardRef } from 'react';
import NextLink, { type LinkProps } from 'next/link';

type Props = {
  children: ReactNode;
  className?: string;
} & LinkProps;

export const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, href, ...nextLinkProps }, ref) => {
    if (!href.toString().startsWith('/')) {
      throw new Error(
        `The href is not absolute ${href}. Please add a '/' to the beginning.`
      );
    }
    return (
      /** @desc we are allowing this for the third-party props  */
      // eslint-disable-next-line react/jsx-props-no-spreading
      <NextLink ref={ref} href={href} {...nextLinkProps}>
        {children}
      </NextLink>
    );
  }
);
