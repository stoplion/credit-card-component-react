import { MonoSpaced } from '.';
// import { formatCCNumbers } from '../../utils/formatCCNumbers';

export function Mask({
  isMasked,
  children,
}: {
  isMasked: boolean;
  children: string;
}) {
  if (isMasked) {
    const maskedChars = children
      .split('')
      .map(() => {
        return '•';
      })
      .join('');

    return <MonoSpaced>{maskedChars}</MonoSpaced>;
  }

  return <MonoSpaced>{children}</MonoSpaced>;
}
