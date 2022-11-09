import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #2ae073;
  margin: 0 2.5%;
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 3% 4%;
`;

export const FormWrapper = styled.form`
  width: 94%;
  background-color: #fff;
  border-radius: 20px;
  padding: 3%;

  button {
    margin: 40px auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  padding: 0 10px;
  border: 1px solid #a1dd62;
  margin-bottom: 20px;

  svg {
    max-width: 30px;
  }
`;

export const InputWrapper = styled.input`
  border: 0;
  width: 80%;
  height: 30px;
  font-family: 'Open Sans', sans-serif;
  color: #635858;

  &::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    opacity: 0;
    position: absolute;
    left: 0;
    width: 100%;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #635858;
  }
`;

export const SelectWrapper = styled.select`
  width: 100%;
  color: #635858;
  border: 0;
  height: 30px;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: 'Open Sans', sans-serif;

  &:focus {
    outline: none;
  }
`;

export const DateInputWrapper = styled.input`
  border: 0;
  width: 80%;
  height: 30px;
  font-family: 'Open Sans', sans-serif;
  color: #635858;
  position: relative;

  &:focus {
    outline: none;
  }

  &::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    -webkit-appearance: none;
    opacity: 0;
    position: absolute;
    left: 0;
    width: 100%;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  width: 70%;
  margin: 0 15%;
  border: 1px solid #a1dd62;
  border-radius: 26px;
`;

export const CounterButton = styled.div`
  border: 0;
  height: 100%;
  background: transparent;
  font-size: 30px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  display: flex;
  align-items: center;
`;

export const Counter = styled.input`
  border: 0;
  height: 100%;
  text-align: center;
  background: transparent;
  font-size: 40px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
  width: 50%;

  &:focus {
    outline: none;
    &::-webkit-inner-spin-button,
    ::-webkit-calendar-picker-indicator {
      -webkit-appearance: none;
      opacity: 0;
      position: absolute;
      left: 0;
      width: 100%;
    }
  }
`;

export const Icon = styled.img`
  height: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
