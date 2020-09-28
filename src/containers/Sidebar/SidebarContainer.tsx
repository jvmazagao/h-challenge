import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getSidebarValues } from '../../api/Sidebar/SidebarApi';
import { SidebarItem } from './types';
import StatusSidebar from '../../components/StatusSidebar';
import MoneyStatement from '../../components/MoneyStatement';
import { formatCurrency } from '../../utils/currency';

const SidebarContainer = () => {
    const [sidebarItems, setSideBarItems] = useState<Array<SidebarItem>>([]);

    useEffect(() => {
        getSidebarValues().then(items => {
            setSideBarItems(items)
        })
    }, [setSideBarItems]);
    
    return (
        <Sidebar>
            { sidebarItems && sidebarItems.map(item => (
                <>
                    <StatusSidebar status={item.accountabilityStatus} />
                    <Line>
                        <ReceiptValue>VALOR A RECEBER</ReceiptValue>
                        <Value>{formatCurrency(item.declared, item.currency.code)}</Value>
                    </Line>
                    <MoneyStatement
                        received={item.received}
                        declared={item.declared}
                        currencyDeclared={item.currency.code}
                    />
                    <>
                        <ExtractTitle>Extrato</ExtractTitle>
                        <ExtractContainer>
                            <Table>
                                <Row>
                                    <Title>Descrição</Title>
                                    <Title>Valor</Title>
                                </Row>
                                <Row>
                                    <Data>Despesas Declaradas</Data>
                                    <Data>{formatCurrency(item.declared, item.currency.code)}</Data>
                                </Row>
                                <Row>
                                    <Title>Despesas Declaradas pelo Trooper</Title>
                                </Row>
                            </Table>
                        </ExtractContainer>
                    </>
                </>
            ))}
        </Sidebar>
    )
}


const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    position: absolute;
    right: 0;
    top: 0;
    width: 330px;
    min-height: 125vh;
    background-color: #fff;
    padding-top: 20px;
`

const ReceiptValue = styled.span`
    color: #6b7480;
    font-size: 12px;
`

const Value = styled.h1`
    color: #053d4e;
    font-size: 24px;
`

const Line = styled.div`
    border-bottom: 1px solid rgb(107, 116, 128, 0.25);
    width: 180px;
`

const ExtractContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgb(107, 116, 128, 0.25);
`
const ExtractTitle = styled.span`
    color: #353a40;
    font-size: 16px;
    font-weight: bold;
`

const Title = styled.td`
    font-size: 12px;
    color: #053d4e;
    text-align: start;
`

const Table = styled.table`
    margin: 10px 20px 20px 20px;
`

const Row = styled.tr`
      padding: 0 20px 5px 0;
`

const Data = styled.td`
      width: 60%;
      font-size: 14px;
      text-align: left;
      font-weight: 500;
`

export default SidebarContainer;