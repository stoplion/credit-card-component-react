import { Label, Logo, Mask } from '.';

import { NameAndNumber } from './NameAndNumber';
import { Provider } from './Provider';
import { config } from '../../styles/config';
import { formatCCNumbers } from '../../utils/formatCCNumbers';
import styled from 'styled-components';

type CardProps = {
  logoUrl: string;
  fullName: string;
  expiry: string;
  cvv: string;
  providerLogo: string;
  isMasked: boolean;
  number: string;
  // provider: string;
  // meta: string;
};

const Container = styled.div`
  width: 480px;
  height: 298px;
  border: 1px solid ${config.colors.lightGrey};
  display: flex;
  border-radius: 16px;
  padding: 1.65rem;
  flex-direction: column;
  justify-content: space-between;
`;

export function CardComponent({
  cvv,
  expiry,
  fullName,
  isMasked,
  logoUrl,
  number,
  providerLogo,
}: CardProps) {
  return (
    <Container>
      <Logo>
        <img src={logoUrl} alt='Logo' height='27px' />
      </Logo>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          <NameAndNumber
            number={formatCCNumbers(number)}
            fullName={fullName}
            isMasked={isMasked}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              flexGrow: 1,
              gridGap: '2.5rem',
            }}
          >
            <div>
              <Label>Expires</Label>
              <Mask isMasked={isMasked}>{expiry}</Mask>
            </div>
            <div>
              <Label>CVV</Label>
              <Mask isMasked={isMasked}>{cvv}</Mask>
            </div>
          </div>
        </div>

        <Provider logoUrl={providerLogo} />
      </div>
    </Container>
  );
}
