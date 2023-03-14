import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  padding: 5px;
  margin: 0;
  margin-bottom: 10px;
  list-style: none;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 3px rgba(203, 203, 203, 0.98);
`;

export const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin-left: 20px;
  margin-right: 30px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  display: block;
  margin-right: 30px;
`;

export const Name = styled.p`
  font-size: 20px;
`;
