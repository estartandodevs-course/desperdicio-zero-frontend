import styled from 'styled-components';

export const CounterContainer = styled.div`
  background-color: #cc2e2e;
  border-radius: 15px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 25px 0;
  padding: 10px 5px 5px 5px;

  p:nth-child(1) {
    width: 100%;
    text-align: center;
    margin: 0%;
  }

  p:nth-last-child(1) {
    font-size: 34px;
    margin: 10px;
    font-weight: 700;
  }
`;
