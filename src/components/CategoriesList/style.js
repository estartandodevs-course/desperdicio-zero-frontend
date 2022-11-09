import styled from 'styled-components';

export const MenuContainer = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 15px;
`;

export const MenuItem = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  border: 1px solid #a1dd62;
  border-radius: 28px;
  padding: 10px 0;
  margin: 20px;

  p {
    margin: 0;
  }

  svg {
    height: 40px;
    width: 40px;
    margin: 0 30px 0 10px;
  }
`;

export const Icon = styled.img`
  height: 40px;
  margin-left: 20px;
  margin-right: 20px;
`;
