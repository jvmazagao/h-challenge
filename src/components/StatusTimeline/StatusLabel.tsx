import React from 'react';
import StatusCard from '../StatusCard';
import {useTheme} from '../../theme/hooks'
import styled from 'styled-components';

interface Props {
    status: string;
}

enum Status {
    PENDDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

const StatusTimeline: React.FC<Props> = ({status}) => {
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

    return (
        <StatusCard color={color} bg={bg} >
            <StatusContent color={color} theme={theme}>
                {content}
            </StatusContent> 
        </StatusCard>
    )
}

const StatusContent = styled.span`
    font-size: 14px;
`

export default StatusTimeline;