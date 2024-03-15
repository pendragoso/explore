import { useEffect } from 'react';

import { useTheme } from '@graphiql/react';

import { useAminoTheme } from '@zonos/amino/utils/hooks/useAminoTheme';

export const ThemeMatcher = () => {
  const { aminoTheme } = useAminoTheme();
  const { setTheme: setGraphiqlTheme } = useTheme();

  useEffect(() => {
    const newGraphiqlTheme = aminoTheme === 'day' ? 'light' : 'dark';
    setGraphiqlTheme(newGraphiqlTheme);
  }, [aminoTheme, setGraphiqlTheme]);

  return null;
};
