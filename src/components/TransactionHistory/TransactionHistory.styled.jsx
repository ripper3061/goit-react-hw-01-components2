import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 20px auto;
  border-spacing: 0;
`;
export const TableHead = styled.thead`
  font-size: 18px;
  background-color: #f5f5dc;
`;
export const TableString = styled.tr`
  height: 30px;
  text-align: center;
  border: 1px solid rgb(50, 50, 50);

  :nth-of-type(2n) {
    background-color: rgb(225, 224, 223);
  }
`;
export const TableHeader = styled.th`
  height: 30px;
  border: 1px solid rgb(50, 50, 50);
  text-transform: uppercase;
`;
export const TableBody = styled.tbody``;

export const TableData = styled.td`
  width: 140px;
  height: 30px;
  border: 1px solid rgb(50, 50, 50);
  text-transform: capitalize;
`;
