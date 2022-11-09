import styled, { css } from 'styled-components';

export const NavBarContainer = styled.nav`
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
`;

export const MenuOptionWraper = styled.div`
  width: 10%;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #00ff88;
  }

  ${props =>
    props.isSelected &&
    css`
      border-bottom: 5px solid #00ff88;
      border-radius: 10%;
    `}
`;
