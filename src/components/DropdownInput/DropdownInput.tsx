import React from 'react';
import styled from 'styled-components';
interface Props {
  value: string;
}

const DropdownInput: React.FC<Props> = ({ value }) => {
  return (
    <Container>
      <form>
        <Input value={value}>
          <option defaultValue="Analista 1">Analista 1</option>
          <option value="Analista 2">Analista 2</option>
          <option value="Analista 3">Analista 3</option>
        </Input>
      </form>
    </Container>
  )
}

const Container = styled.div`
  width: 300px;
  margin-bottom:  20px;
`

const Input = styled.select`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: #51c1c3;

  .select {
    color: #51c1c3;
  }
`


export default DropdownInput;