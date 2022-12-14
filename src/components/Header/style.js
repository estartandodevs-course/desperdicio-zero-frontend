import styled from 'styled-components';

export const HeaderContainer = styled.div`
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #a8e063 0%, #4ec15a 100%);
  height: 60px;
  width: 100%;

  svg {
    width: 45%;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;
