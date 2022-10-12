import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #6ad174;
  width: 90%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 15px;

  p {
    margin: 0;
    color: #fff;
    font-weight: 700;
  }
`;

export const PhotoWraper = styled.div`
  width: 20%;
  margin-right: 10px;

  img {
    width: 100%;
    border-radius: 50%;
    border: 1px solid #ff000080;
    max-width: 75px;
  }
`;

export const InfoContainer = styled.div`
  width: 80%;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p:nth-child(1) {
    width: 100%;
  }
`;

export const DataContainer = styled.div`
  text-align: center;
  margin: 10px 0;

  p {
    width: 100%;

    &:nth-child(1) {
      font-size: 20px;
    }

    &:nth-child(2) {
      font-size: 12px;
      opacity: 80%;
    }
  }
`;
