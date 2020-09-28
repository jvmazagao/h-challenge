import styled from 'styled-components';
interface ContainerProps {
    color: string;
    bg: string;
}

export const StatusCard = styled.div<ContainerProps>`
    width: 85px;
    height: 24px;
    border-radius: 12px;
    border: 1px solid ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bg};
`
