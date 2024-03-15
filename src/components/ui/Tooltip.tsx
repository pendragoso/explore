import dynamic from 'next/dynamic';

export const Tooltip = dynamic(async () => {
  // eslint-disable-next-line import/no-internal-modules
  const mod = await import('@zonos/amino/components/tooltip/Tooltip');
  return mod.Tooltip;
});
