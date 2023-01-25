import styled from 'styled-components';

export const StackedBlockStyles = styled.div`
  background-color: #181818;
  position: relative;
  padding: 30px 0;
  border-radius: 26px;
  border: 2px solid #191919;
  box-sizing: border-box;
  padding-bottom: 20px;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: #181818;
    border: 2px solid #191919;
    border-radius: 30px;
  }

  &::before {
    top: 12px;
    bottom: -12px;
    left: -12px;
    right: 12px;
    z-index: -1;
  }
`;
