import React, { useEffect, useState } from 'react';
import {useTheme} from '../../theme/hooks'
import styled from 'styled-components';

interface Props {
    status: string;
}

interface ContainerProps {
    color: string;
    bg: string;
}

enum Status {
    PENDDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

const StatusLabel: React.FC<Props> = ({status}) => {
    const theme = useTheme();
    let color;
    let content;
    let bg;

    switch(status) {
        case Status.PENDDING:
            content = 'Pendente';
            color = theme.status.pendding;
            bg = theme.background.gray;
            break;
        case Status.APPROVED:
            content = 'Aprovado';
            color = theme.status.approved;
            bg = theme.background.approved;
            break;
        case Status.REJECTED:
            content = 'Rejeitado';
            color = theme.status.rejected;
            bg = theme.background.rejected;
            break;

    }

    console.log(status)
    return (
        <CardLabel color={color} bg={bg} >
            <StatusContent color={color} theme={theme}>
                {content}
            </StatusContent> 
        </CardLabel>
    )
}

const CardLabel = styled.div<ContainerProps>`
    width: 85px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bg};
`

const StatusContent = styled.span`
    font-size: 14px;
`

export default StatusLabel;