import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export function Provider({ logoUrl }: { logoUrl: string }) {
  return (
    <Wrapper>
      <img src={logoUrl} alt='Logo' width='100px' />
    </Wrapper>
  );
}
