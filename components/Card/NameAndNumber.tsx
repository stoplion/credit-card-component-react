import { Label, NumberWrapper } from './elements';

import { Mask } from './Mask';

export function NameAndNumber({
  fullName,
  maskInput,
}: {
  fullName: string;
  maskInput: boolean;
}) {
  return (
    <NumberWrapper>
      <Label>{fullName}</Label>
      <Mask characters='4124214091289090' maskInput={maskInput} />
    </NumberWrapper>
  );
}
