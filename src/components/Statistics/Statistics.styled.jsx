import styled from '@emotion/styled';
import { getRandomHexColor } from '../utils/utils';

export const StatisticsSection = styled.section`
  width: 320px;
  margin: 20px auto;

  box-shadow: 0px 1px 5px 3px rgba(203, 203, 203, 0.98);
`;
export const Title = styled.h2`
  margin: 0;
  padding: 0;
  padding-top: 40px;
  padding-bottom: 40px;

  text-align: center;
  text-transform: uppercase;
  color: #767676;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  list-style: none;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  flex-basis: calc((100% - 0px) / 4);

  background-color: ${getRandomHexColor};
`;
export const ItemLabel = styled.span`
  font-size: 14px;
`;
export const ItemPercentage = styled.span`
  font-size: 20px;
`;
