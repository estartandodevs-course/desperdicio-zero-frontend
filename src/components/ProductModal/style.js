import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    color: #635858;

    svg {
      color: #00ff88;
      font-size: 20px;
    }
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const CheckSimbolContainer = styled.div`
  color: #a1dd62;
  font-size: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const CloseModal = styled.div`
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
    margin: 0 30px 0 10px;
    color: #00ff88;
    font-size: 20px;
  }
`;
