import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #a8e063 0%, #4ec15a 100%);
  height: 60px;

  svg:nth-child(1) {
    position: absolute;
    left: 21px;
    color: #fff;
  }

  svg:nth-child(2) {
    width: 45%;
  }
`;
