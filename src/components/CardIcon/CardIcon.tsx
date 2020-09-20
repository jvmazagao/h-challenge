import React, {useState} from 'react';
import styled from 'styled-components';
import {FaUtensils, FaConciergeBell, FaMoneyCheck, FaDiaspora} from 'react-icons/fa'

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
const CardIcon: React.FC<Props> = ({type}) => {
    const factoryIcon = (type: string) => {
        switch(type) {
            case CardType.CREATED: 
                return <FaMoneyCheck />
            case CardType.HOTEL:
                return <FaConciergeBell color="#0f68bd"/>
            case CardType.SUBMMITED:
                return <FaMoneyCheck color="#03a046"/>
            case CardType.EVALUATING:
                return <FaDiaspora />
            case CardType.FOOD: 
                return <FaUtensils />
        }
    }

    return (
        <ContainerIcon>{factoryIcon(type)}</ContainerIcon>
    )
}

const ContainerIcon = styled.div`
    height: 59px;
    width: 59px;
    background-color: white;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default CardIcon;