import { MonoSpaced } from './elements';
import { formatCCNumbers } from './formatCCNumbers';

export function Mask({
  characters,
  maskInput,
}: {
  characters: string;
  maskInput: boolean;
}) {
  if (maskInput) {
    const maskedChars = characters
      .split('')
      .map(() => {
        return '•';
      })
      .join('');

    return <MonoSpaced>{formatCCNumbers(maskedChars)}</MonoSpaced>;
  }

  return <MonoSpaced>{formatCCNumbers(characters)}</MonoSpaced>;
}
