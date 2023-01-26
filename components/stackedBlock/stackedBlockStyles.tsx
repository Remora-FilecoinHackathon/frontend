import styled from 'styled-components';

export const StackedBlockStyles = styled.div`
  display: flex;
  background-color: #181818;
  color: #e4e4e4;
  position: relative;
  padding: 20px 0;
  margin-bottom: 15px;
  border-radius: 25px;
  border: 1px solid #353535;
  box-sizing: border-box;
  padding-bottom: 20px;
  cursor: pointer;
  justify-content: space-between;
  align-items: flex-end;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background-color: #373737;
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
