import React, { useState } from 'react';
import styled from 'styled-components';
import {useTheme} from '../../theme/hooks'
import { FaUtensils, FaConciergeBell, FaMoneyCheck, FaDiaspora } from 'react-icons/fa';

enum CardType {
    FOOD = 'utensils',
    HOTEL = 'concierge-bell',
    CREATED = 'check-created',
    SUBMMITED = 'check-submitted',
    EVALUATING = 'diaspora',
}

interface Props {
    type: CardType;
}

interface ContainerIconProps {
    color: string;
}
const CardIcon: React.FC<Props> = ({ type }) => {
    const theme = useTheme();
    let icon: React.ReactNode;
    let color: string = theme.typography.dark;
    switch (type) {
        case CardType.CREATED:
            icon = <FaMoneyCheck />
            break
        case CardType.HOTEL:
            icon = <FaConciergeBell/>
            color = theme.icons.hotel
            break
        case CardType.SUBMMITED:
            icon = <FaMoneyCheck />
            color = theme.status.approved
            break
        case CardType.EVALUATING:
            icon = <FaDiaspora />
            break
        case CardType.FOOD:
            icon = <FaUtensils />
            break
        default:
            color = theme.typography.dark;

    }


    return (
        <ContainerIcon color={color}>{icon}</ContainerIcon>
    )
}

const ContainerIcon = styled.div<ContainerIconProps>`
    height: 59px;
    width: 59px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default CardIcon;