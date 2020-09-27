import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme/hooks';
import { FiArrowUpCircle, FiArrowDownCircle } from 'react-icons/fi';
import { formatCurrency } from '../../utils/currency';
interface Props {
    declared: number;
    received: number;
    currencyDeclared: string;
}
const MoneyStatement: React.FC<Props> = ({ declared, received, currencyDeclared }) => {
    const theme = useTheme();
    return (
        <Container>
            <ContainerRow>
            <FiArrowUpCircle size='36px' color={theme.card.bg.mediumGray} />

            <ReceiptContainer>
                <StatusTitle>Gastou</StatusTitle>
                <StatusValue>{formatCurrency(declared, currencyDeclared)}</StatusValue>
            </ReceiptContainer>
            </ContainerRow>
            

            <Line />
            <ContainerRow>
                <FiArrowDownCircle size='36px' color={theme.card.bg.mediumGray} />
                <ReceiptContainer>
                    <StatusTitle>Recebeu</StatusTitle>
                    <StatusValue>{formatCurrency(received, 'BRL')}</StatusValue>
                </ReceiptContainer>
            </ContainerRow>


        </Container>
    );

}

const Container = styled.div`
    width: 90%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ContainerRow = styled.div`
    width: 45%;
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
`
const ReceiptContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 7px;
`
const StatusTitle = styled.span`
    font-size: 10px;
    color: #053d4e;
    text-align: start;
`
const Line = styled.div`
    border-left: 1px solid rgb(107, 116, 128, 0.25);
`

const StatusValue = styled.span`
    font-size: 12px;
    font-weight: 400px;
`

export default MoneyStatement;