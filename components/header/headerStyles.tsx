import { Container } from '../ui/container';
import styled from 'styled-components';

export const HeaderStyle = styled(Container)`
  padding-top: 18px;
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const HeaderLogoStyle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spaceMap.xxl}px;
`;

export const HeaderActionsStyle = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
`;
