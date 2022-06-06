import { CopyToClipboard, Label } from '.';

import { Mask } from './Mask';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 3rem;
`;

export function NameAndNumber({
  fullName,
  isMasked,
  number,
}: {
  fullName: string;
  number: string;
  isMasked: boolean;
}) {
  return (
    <Wrapper>
      <Label>{fullName}</Label>
      <CopyToClipboard>
        <Mask isMasked={isMasked}>{number}</Mask>
      </CopyToClipboard>
    </Wrapper>
  );
}
