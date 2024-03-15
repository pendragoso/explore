import { useRouter } from 'next/router';

import {
  NavigationGroup,
  NavigationItem,
} from '@zonos/amino/components/layout/NavigationGroup';

import { Link } from 'src/components/ui/Link';
import { useFeature } from 'src/hooks/useFeature';

export const SchemaValidatorLink = () => {
  const { pathname } = useRouter();
  const showFeature = useFeature('feature_aspect');
  if (!showFeature) {
    return null;
  }
  return (
    <NavigationGroup
      collapsed={!pathname.includes('/schema-validator')}
      content={
        <Link href="/schema-validator/deployed">
          <NavigationItem content="Schema validator" />
        </Link>
      }
    >
      <Link href="/schema-validator/deployed">
        <NavigationItem
          content="Deployed"
          isActive={pathname.includes('/schema-validator/deployed')}
        />
      </Link>
      <Link href="/schema-validator/draft">
        <NavigationItem
          content="Draft"
          isActive={pathname.includes('/schema-validator/draft')}
        />
      </Link>
    </NavigationGroup>
  );
};
