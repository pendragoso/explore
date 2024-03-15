import { useRouter } from 'next/router';

import { NavigationItem } from '@zonos/amino/components/layout/NavigationGroup';

import { Link } from 'src/components/ui/Link';
import { useFeature } from 'src/hooks/useFeature';

export const FeatureAspectsLink = () => {
  const { pathname } = useRouter();
  const showFeature = useFeature('feature_aspect');

  if (showFeature) {
    return (
      <Link href="/feature-aspects">
        <NavigationItem
          content="Feature aspects"
          isActive={pathname.includes('/feature-aspects')}
        />
      </Link>
    );
  }
  return null;
};
