// Style your components here
import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'roboto';
`
export const DivContainer = styled.div`
  background-color: white;
  font-family: 'roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`
export const LabelEl = styled.label`
  color: #7e858e;
`
export const InputEl = styled.input`
  border: 1px solid #7e858e;
  padding: 8px;
  font-weight: 500;
  color: #7e858e;
  background-color: white;
  width: 300px;
  margin-top: 7px;
  border-radius: 4px;
  outline: none;
  margin-bottom: 20px;
`

export const SelectEl = styled.select`
  width: 300px;
  border: 1px solid #7e858e;
  padding: 8px;
  font-weight: 500;
  color: #1e293b;
  font-weight: 500;
  background-color: white;
  width: 300px;
  margin-top: 7px;
  border-radius: 4px;
  outline: none;
  margin-bottom: 20px;
`
export const ButtonEl = styled.button`
  background-color: #0b69ff;
  padding: 10px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  width: 120px;
`
export const FormEl = styled.form`
  width: 50%;
`
export const DivContainer2 = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  justify-content: center;
  width: 100%;
`
export const Div3 = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  width: 40%;
  height: 86%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  font-family: 'roboto';
`
export const Pel = styled.p`
  font-size: ${props => props.font}px;
`
