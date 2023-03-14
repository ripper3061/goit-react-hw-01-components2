import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 320px;
  margin: 20px auto;
  background-color: #f5f5dc;

  border-radius: 5px;
  box-shadow: 0px 1px 5px 3px rgba(203, 203, 203, 0.98);
`;

export const Description = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  width: 120px;

  border-radius: 50%;
  background-color: #fff;
`;

export const UserName = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: #767676;
`;

export const Location = styled.p`
  margin: 0;
  color: #767676;
`;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0px;
  justify-content: space-between;

  background-color: #f9f9ae;
  list-style: none;
  border-top: 2px solid #e2e2e2;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: calc((100% - 0px) / 3);
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ItemLabel = styled.span`
  font-size: 14px;
  color: #767676;
`;
export const ItemQuantity = styled.span`
  font-weight: 700;
`;
