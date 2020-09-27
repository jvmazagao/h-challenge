import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../theme/hooks'
import { FaUtensils, FaConciergeBell, FaMoneyCheck, FaDiaspora } from 'react-icons/fa';
import { parseDate } from '../../utils/date';
enum CardType {
    FOOD = 'utensils',
    HOTEL = 'concierge-bell',
    CREATED = 'check-created',
    SUBMMITED = 'check-submitted',
    EVALUATING = 'diaspora',
}

interface Props {
    type: string;
    date: number;
}

interface ContainerIconProps {
    color: string;
    bg?: string;
}
const CardIcon: React.FC<Props> = ({ type, date }) => {
    const theme = useTheme();
    let icon: React.ReactNode;
    let color: string = theme.typography.dark;
    let bg: string = theme.card.timeline;
    switch (type) {
        case CardType.CREATED:
            icon = <FaMoneyCheck />
            color = theme.typography.dark;
            bg = theme.card.bg.blue;
            break
        case CardType.HOTEL:
            icon = <FaConciergeBell />
            color = theme.icons.hotel;
            bg = theme.card.bg.gray;
            break
        case CardType.SUBMMITED:
            icon = <FaMoneyCheck />
            color = theme.status.approved
            bg = theme.card.bg.green;
            break
        case CardType.EVALUATING:
            icon = <FaDiaspora />
            color = theme.typography.dark;
            bg = theme.card.bg.blue;
            break
        case CardType.FOOD:
            icon = <FaUtensils />
            color = theme.typography.dark;
            bg = theme.card.bg.blue;
            break
        default:
            color = theme.typography.dark;
    }


    return (
        <Container>
            <ContainerIcon color={color} bg={bg}>
                {icon}
            </ContainerIcon>
            <DateContent>
                {parseDate(date)}
            </DateContent>
        </Container>

    )
}

const ContainerIcon = styled.div<ContainerIconProps>`
    height: 59px;
    width: 59px;
    background-color: ${props => props.bg};
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const DateContent = styled.span`
    margin-top: 10px;
    font-size: 12px;
    color: #545b64;
`

export default CardIcon;