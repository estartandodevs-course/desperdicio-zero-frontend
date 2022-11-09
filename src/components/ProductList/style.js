import styled, { css } from 'styled-components';

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
`;

export const CardContainer = styled.div`
  width: 94%;
  display: flex;
  background: #efefef;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: #6f6f6f;
  padding: 10px 0;
  position: relative;

  svg:nth-last-child(1) {
    position: absolute;
    bottom: 2%;
    right: 2%;
    font-size: 20px;
  }

  ${props =>
    props.isActive &&
    css`
      box-shadow: none;
      border-radius: 15px 15px 0 0;
    `}
`;

export const CardLeftWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  svg {
    width: 53px;
    height: 53px;
    background-color: #fff;
    padding: 4px;
    border-radius: 15px;
  }

  p {
    width: 100%;
    text-align: center;
    margin: 0;
    font-size: 24px;
  }
`;

export const CardRightWrapper = styled.div`
  flex: 2.5;
`;

export const ProductName = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
`;

export const ProductDates = styled.div`
  width: 100%;

  p {
    margin: 0;
  }
`;

export const EditContainer = styled.div`
  padding: 10px 0;
  width: 94%;
  border-radius: 0 0 15px 15px;
  background: #efefef;

  ${props =>
    !props.isActive &&
    css`
      display: none;
    `}
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const SelectWrapper = styled.select`
  width: 100%;
  height: 42px;
  border: 0;
  border-radius: 21px;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: none;
  }
`;

export const SelectName = styled.div`
  border-radius: 21px;
  width: 90%;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  background-color: #fff;
  border: 1px solid #a1dd62;
  margin-bottom: 10px;

  p {
    font-weight: 600;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  border: 1px solid #ff0000;
  font-family: 'Open Sans', sans-serif;
  height: 30px;
  border-radius: 15px;
  width: 35%;
`;

export const UpdateButton = styled.button`
  background-color: #fff;
  border: 2px solid #a1dd62;
  font-family: 'Open Sans', sans-serif;
  height: 30px;
  border-radius: 15px;
  width: 35%;
`;
