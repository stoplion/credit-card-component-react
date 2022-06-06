import { Mask } from './Mask';
import { NameAndNumber } from './NameAndNumber';
import { Provider } from './Provider';
import { config } from '../../styles/config';
import styled from 'styled-components';

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

const Logo = styled.div``;

const Meta = styled.div``;

const Label = styled.div`
  color: ${config.colors.medGrey};
  font-size: 0.85rem;
  padding-bottom: 0.7rem;
`;

export const ProviderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const NumberWrapper = styled.div`
  padding-bottom: 3rem;
`;

export const MonoSpaced = styled.div`
  font-family: 'Roboto Mono', monospace;
`;

export { Container, Logo, NameAndNumber, Meta, Label, Mask, Provider };
