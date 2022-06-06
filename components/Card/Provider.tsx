import { ProviderWrapper } from './elements';

export function Provider({ logoUrl }: { logoUrl: string }) {
  return (
    <ProviderWrapper>
      <img src={logoUrl} alt='Logo' width='100px' />
    </ProviderWrapper>
  );
}
