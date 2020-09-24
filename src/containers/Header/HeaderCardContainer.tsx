import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeaderValues } from './types';
import Header from '../../components/Header'
import { getHeaderInfo } from '../../api/HeaderApi';
import { parseDate } from '../../utils/date';
import DropdownInput from '../../components/DropdownInput';

interface ContentProps {
  color: string,
  fontSize: string,
  fontWeight: number,
}

const HeaderContainer: React.FC = () => {
  const [header, setHeader] = useState<HeaderValues>();

  useEffect(() => {
    getHeaderInfo().then(value => {
      setHeader(value)
    })
  }, [setHeader])
  console.log({ header })
  return (

    <Header>
      <Container>
        {header &&
          (
            <>
              <GridColumn>
                <Line
                  style={{marginBottom: '15px'}}
                >
                  <Label
                    color={'#fff'}
                    fontSize={'30px'}
                    fontWeight={500}
                  >{header.type} #{header.id} - {header.title}
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Nome:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    >{header.collaborator.name}
                    </Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    E-mail:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    >{header.collaborator.email}
                    </Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Justificativa:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    > {header.justification}</Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Finalidade:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    > {header.purpose}</Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Data:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    > {parseDate(header.accountabilityExtraInfo.eventDate)}</Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Justificativa:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    > {header.justification}</Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Quantidade:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    > {header.accountabilityExtraInfo.amountOfPeople} pessoas</Title>
                  </Label>
                </Line>
                <Line>
                  <Label
                    color={'#fff'}
                    fontSize={'18px'}
                    fontWeight={300}
                  >
                    Inclui café da manha:
                <Title
                      color={'#fff'}
                      fontSize={'18px'}
                      fontWeight={500}
                    > {header.accountabilityExtraInfo.budgetForBreakfast}</Title>
                  </Label>
                </Line>
              </GridColumn>
              <GridColumn>
                <Box>
                  <Colunm>
                    <Line>
                      <Title
                        color={'#fff'}
                        fontSize={'18px'}
                        fontWeight={300}>
                        Atribuir analista
                      </Title>
                      <DropdownInput value="analyst"/>
                    </Line>
                    <Line>
                      <Title
                        color={'#fff'}
                        fontSize={'18px'}
                        fontWeight={300}
                      >
                      Centro de custo
                      </Title>
                      <Label
                        color={'#fff'}
                        fontSize={'18px'}
                        fontWeight={500}
                      >
                        {header.costCenters.map(center => {
                          return `${center.percentage}% -  ${center.reviser.name}`
                        })}
                      </Label>
                    </Line>


                  </Colunm>
                </Box>
              </GridColumn>
            </>
          )
        }
      </Container>

    </Header>
  )
}

const Label = styled.span<ContentProps>`
    font-size: ${props => props.fontSize};
    line-height: 20px;
    font-weight: ${props => props.fontWeight};
    color: ${props => props.color};
`
const Title = styled(Label)`
  text-align: start
`

const Line = styled.div`
  display: grid;
  grid-template-rows: 30px;
  justify-content: flex-start;
`
const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  display: grid;
  grid-template-columns: 800px 300px;
`

const GridColumn = styled.div`
  
`

const Colunm = styled.div`
  padding-left: 20px;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  height: 200px;
  border-left: 3px solid #fff;
`

export default HeaderContainer;