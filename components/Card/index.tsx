import { CardComponent } from './CardComponent';
import { CopyToClipboard } from './CopyToClipboard';
import { Mask } from './Mask';
import { NameAndNumber } from './NameAndNumber';
import { Provider } from './Provider';
import { config } from '../../styles/config';
import styled from 'styled-components';

const Logo = styled.div``;

const Label = styled.div`
  color: ${config.colors.medGrey};
  font-size: 0.85rem;
  padding-bottom: 0.7rem;
`;

const MonoSpaced = styled.div`
  font-family: 'Roboto Mono', monospace;
`;

export {
  CopyToClipboard,
  CardComponent,
  Logo,
  NameAndNumber,
  Label,
  Mask,
  Provider,
  MonoSpaced,
};
