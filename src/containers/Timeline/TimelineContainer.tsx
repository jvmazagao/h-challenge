import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaReceipt } from 'react-icons/fa';
import { getTimelineInfo } from '../../api/Timeline/TimelineApi';
import Card from '../../components/Card';
import CardIcon from '../../components/CardIcon';
import StatusTimeline from '../../components/StatusTimeline';
import AttachmentButton from '../../components/AttachmentButton';
import { useTheme } from '../../theme/hooks';
import { CardValues } from './type';

interface CardTimelineProps {
    color: string;
}

interface DataProps {
    align: string;
}

const TimelineContainer: React.FC = () => {
    const theme = useTheme();
    const [cards, setCards] = useState<Array<CardValues>>([]);
    useEffect(() => {
        getTimelineInfo().then(cards => {
            setCards(cards);
        })
    }, [setCards]);

    //todo: fix the tbody and thead to be more readable.
    //todo: fix the link for download/open another tab for receipt view.
    return (
        <>
            {cards && cards.map(
                (card: CardValues) => (
                    <Container>
                        <CardTimeline color={theme.card.timeline}>
                            <CardIcon type={card.expenseTypeIcon} date={card.cardDate} />
                            <Table>
                                <Row>
                                    <DataTitle align="left">
                                        Tipo
                                        </DataTitle>
                                    <Data align="left">
                                        {card.cardType}
                                    </Data>
                                    <DataReference align="left">
                                        {card.expenseId}
                                    </DataReference>
                                </Row>

                                <Row>
                                    {card.amountSpent && card.amountTotal && (
                                        <>
                                            <DataTitle align="left">
                                                Valor
                                        </DataTitle>
                                            <Data align="left">
                                                {card.currencyCode} {card.amountSpent}
                                            </Data>
                                            <DataReference align="left">
                                                Valor da nota: {card.currencySymbol}{card.currencyCode} {card.amountTotal}
                                            </DataReference>
                                        </>
                                    )}
                                </Row>
                                <Row>
                                    {card.status && (
                                        <>
                                            <DataTitle align='left'>
                                                Status
                                        </DataTitle>
                                            <Data align='center'>
                                                <StatusTimeline status={card.status} />
                                            </Data>
                                        </>
                                    )
                                    }
                                </Row>

                                <Row>

                                    {card.resourceUrl && (
                                        <Data align='left'>
                                            <AttachmentButton url={card.resourceUrl}>
                                                <FaReceipt /> <Receipt> Ver recibo </Receipt>
                                            </AttachmentButton>
                                        </Data>
                                    )}
                                </Row>

                            </Table>

                        </CardTimeline>
                    </Container>))
            }
        </>
    )
}

const Container = styled.div`
    padding-top: 24px;
    padding-right: 0;
`;

const CardTimeline = styled(Card) <CardTimelineProps>`
    width: 1255px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    height: 133px;
    background-color: ${props => props.color};
`

const Table = styled.table`
    display: grid;
    grid-template-columns: repeat(4,25%);
    padding-left: 30px;
    padding-right: 50px;
    align-items: center;
    width: 100%;
`

const Row = styled.tr`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    font-size: 14px;
`

const Data = styled.td<DataProps>`
    padding: 5px;
    width: 70%;
    font-size: 18px;
    text-align: ${props => props.align};
    font-weight: 500;
`

const DataTitle = styled(Data)`
    font-size: 12px;
    color: #d0d3d6;
`

const DataReference = styled(Data)`
    color: #d0d3d9;
    font-size: 12px;
`

const Receipt = styled.span`
    margin-left: 5px;
`

export default TimelineContainer;