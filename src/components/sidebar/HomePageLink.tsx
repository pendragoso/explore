import { useRouter } from 'next/router';

import { NavigationItem } from '@zonos/amino/components/layout/NavigationGroup';

import { Link } from 'src/components/ui/Link';

export const HomePageLink = () => {
  const { pathname } = useRouter();
  return (
    <Link href="/">
      <NavigationItem
        content="Home"
        isActive={
          pathname === '/' ||
          pathname.includes('/deployed-instance/') ||
          pathname.includes('/draft-instance/')
        }
      />
    </Link>
  );
};
