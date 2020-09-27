import React, { useEffect, useState } from 'react';
import StatusCard from '../StatusCard';
import {useTheme} from '../../theme/hooks';
import {Props, Status as StatusFactory} from './types';

import styled from 'styled-components';

const StatusSidebar: React.FC<Props> = ({status}) => {
    const theme = useTheme();
    let color: string = theme.default.text;
    let bg: string = theme.default.bg;
    let content: string = status;

    switch(status){
        case StatusFactory.OPEN:
            color = theme.default.text;
            bg = theme.card.bg.gray;
            content = 'Aguardando financeiro';
            break;
        default:
            color = theme.typography.label;
            bg = theme.card.bg.gray;
            content = status;
            break;
    }

    return (
            <Status color={color} bg={bg}>
                <StatusTitle>Status</StatusTitle>
                <StatusValue>{content}</StatusValue>
            </Status>
    )
}

const Status = styled(StatusCard)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 86px;
    margin: 10px 0px;
`

const StatusTitle = styled.span`
    font-size: 14px;
    color: #053d4e;
    text-align: start;
`

const StatusValue = styled.h2`
    padding-top: 5px;
    font-size: 17px;
    font-weight: 400px;
`

export default StatusSidebar;