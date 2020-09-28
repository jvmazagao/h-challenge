import React from 'react';
import styled from 'styled-components';
import {useTheme} from '../../theme/hooks/index'
import {Props, ContainerProps} from './types';


const AttachmentButton: React.FC<Props> = ({children, url}) => {
    const theme = useTheme();
    
    const downloadFile = (url: string) => {
        window.open(url);
    }

    return (
        <Container onClick={() => downloadFile(url)} color={theme.details.color}>{children}</Container>
    )
}

const Container = styled.div<ContainerProps>`
    width: 101px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${props => props.color};
    cursor: pointer;
`

export default AttachmentButton;