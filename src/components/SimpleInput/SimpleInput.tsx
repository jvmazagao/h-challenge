import React, {SyntheticEvent} from 'react';
import styled from 'styled-components';
import {Props} from './types';

const SimpleInput: React.FC<Props> = ({ value, setValue, placeholder='Digite aqui' }) => {

  const handleChange = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setValue(target.value)
  }
  return (
    <Container>
        <Input value={value} placeholder={placeholder} onChange={(e: SyntheticEvent) => handleChange(e)}/>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  margin-bottom:  20px;
`

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: #51c1c3;

  .select {
    color: #51c1c3;
  }

  :focus {
    outline: none;
  }
`


export default SimpleInput;