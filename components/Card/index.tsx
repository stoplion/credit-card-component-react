import { Container, Label, Logo, Meta } from './elements';

import { NameAndNumber } from './NameAndNumber';
import { Provider } from './Provider';

/* eslint-disable @next/next/no-img-element */

type CardProps = {
  logoUrl: string;
  fullName: string;
  expiry: string;
  cvv: string;
  providerLogo: string;
  // provider: string;
  // number: string;
  // meta: string;
};

export function Card({
  logoUrl,
  fullName,
  expiry,
  cvv,
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
          <NameAndNumber fullName={fullName} maskInput={false} />

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
              <Meta>{expiry}</Meta>
            </div>
            <div>
              <Label>CVV</Label>
              <Meta>{cvv}</Meta>
            </div>
          </div>
        </div>

        <Provider logoUrl={providerLogo} />
      </div>
    </Container>
  );
}
