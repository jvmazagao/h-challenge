import React from 'react';
import styled from 'styled-components';
import {useTheme} from '../../theme/hooks/index'

interface Props {
    children: React.ReactNode;
}

interface ContainerProps {
    color: string
}

const AttachmentButton: React.FC<Props> = ({children}) => {
    const theme = useTheme();
    return (
        <Container color={theme.details.color}>{children}</Container>
    )
}

const Container = styled.div<ContainerProps>`
    width: 101px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: ${props => props.color}

`

export default AttachmentButton;