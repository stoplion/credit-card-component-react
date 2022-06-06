export function formatCCNumbers(number: string) {
  const formattedNumber = number
    .split('')
    .map((char, index) => {
      if (index % 4 === 0 && index !== 0) {
        return `  ${char}`;
      }

      return char;
    })
    .join('');

  return formattedNumber;
}
