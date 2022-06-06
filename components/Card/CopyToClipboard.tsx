import reactToString from 'react-to-string';
import styled from 'styled-components';
import { useState } from 'react';

interface NumberButton {
  showHover: boolean;
}

const NumberButton = styled.button<NumberButton>`
  background: white;
  border: none;
  padding: 5px;
  margin-left: -5px;
  height: 2rem;
  font-size: ${(props) => (props.showHover ? '.95rem' : '1.1rem')};
  border-radius: 10px;
  &:hover {
    background: ${(props) => (props.showHover ? '#fff' : '#fafafa')};
  }
`;

export function CopyToClipboard({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (copied) return;
    const innerText = reactToString(children);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
    await navigator.clipboard.writeText(innerText);
    setCopied(true);
  };

  return (
    <NumberButton showHover={copied} onClick={handleClick}>
      {copied ? 'copied!' : children}
    </NumberButton>
  );
}
