import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeaderValues } from './types';
import Header from '../../components/Header'
import { getHeaderInfo } from '../../api/HeaderApi';
import { parseDate } from '../../utils/date';
import DropdownInput from '../../components/DropdownInput';
import { useTheme } from '../../theme/hooks';

interface DataProps {
  align: string;
}

interface TextProps {
  fontSize?: string;
}

interface ContainerProps {
  color: string;
  width: string;
}

const HeaderContainer: React.FC = () => {
  const theme = useTheme();
  const [header, setHeader] = useState<HeaderValues>();

  useEffect(() => {
    getHeaderInfo().then(value => {
      setHeader(value)
    })
  }, [setHeader])
  console.log({ header })
  return (

    <Header>
      {header &&
        (
          <>
            <Container
              color={theme.typography.light}
              width={"70%"}
            >
              <Title fontSize={theme.typography.title.size}>
                {header.type} #{header.id} - {header.title}
              </Title>
              <TableContainer>
                <Table>
                  <Row>
                    <TitleData align="right">Nome</TitleData>
                    <Data align="left">{header.collaborator.name}</Data>
                  </Row>
                  <Row>
                    <TitleData align="right">E-mail</TitleData>
                    <Data align="left">{header.collaborator.email}</Data>
                  </Row>
                  <Row>
                    <TitleData align="right">Justificativa</TitleData>
                    <Data align="left">{header.justification}</Data>
                  </Row>
                  <Row>
                    <TitleData align="right">Finalidade</TitleData>
                    <Data align="left">{header.purpose}</Data>
                  </Row>
                  <Row>
                    <TitleData align="right">Projeto</TitleData>
                    <Data align="left">{header.project.title}</Data>
                  </Row>
                  <Row>
                    <TitleData align="right">Data</TitleData>
                    <Data align="left">{parseDate(header.accountabilityExtraInfo.eventDate)}</Data>
                  </Row>
                  <Row>
                    <TitleData align="right">Quantidade</TitleData>
                    <Data align="left">{header.accountabilityExtraInfo.amountOfPeople > 1 ? 'pessoas' : 'pessoa'} </Data>
                  </Row>
                  <Row>
                    <TitleData align="right">Inclui café da manhã</TitleData>
                    <Data align="left">{header.accountabilityExtraInfo.budgetForBreakfast}</Data>
                  </Row>
                </Table>
              </TableContainer>
            </Container>
            <Container
              color={theme.typography.light}
              width={"30%"}
            >
              <BoxContainer>
                <TableContainer>
                  <Row>
                    <TitleData align="left">Atribuir analista</TitleData>
                  </Row>
                  <Row>
                    <Data align="left">
                      <DropdownInput value="test" />
                    </Data>
                  </Row>
                  <Row>
                    <TitleData align="left">Centro de Custo</TitleData>
                  </Row>
                  <Row>
                    <Data align="left"> {header.costCenters.map(center => {
                      return `${center.percentage}% -  ${center.reviser.name}`
                    })}</Data>
                  </Row>
                </TableContainer>
              </BoxContainer>
            </Container>
          </>
        )
      }
    </Header>
  )
}

const Container = styled.div<ContainerProps>`
   display: flex;
   flex-direction: column;
   color: ${props => props.color};
   width: ${props => props.width};
`

const TableContainer = styled.div`
  display: grid;
`

const Table = styled.table`
    width: 300px;
`

const Row = styled.tr`
      padding: 0 20px 5px 0;
      font-size: 14px;
`

const Data = styled.td<DataProps>`
      width: 70%;
      font-size: 14px;
      text-align: ${props => props.align};
      font-weight: 500;
`

const TitleData = styled(Data)`
      width: 30%;
      padding: 0 20px 5px 0;
      text-align: ${props => props.align};
      font-weight: 300;
`

const Title = styled.h2<TextProps>`
    margin-bottom: 15px;
    margin-left: 5px;
    font-size: ${props => props.fontSize};
    text-align: start;
`

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
  height: 160px;
  border-left: 3px solid #fff;
  padding: 15px;
`

export default HeaderContainer;