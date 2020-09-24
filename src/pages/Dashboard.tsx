import React from 'react';
import styled from 'styled-components';
import {useTheme} from '../theme/hooks/index'
interface Props {
    children: React.ReactNode;
}

interface DashboardContainer {
    bg: string;
}
const Dashboard: React.FC<Props> = ({children}) => {
    const theme = useTheme();

    return (
        <Container bg={theme.dashboard.bg}>
            {children}
        </Container>
    )
}

const Container = styled.div<DashboardContainer>`
    background-color: ${props => props.bg};
    min-height: 100vh;
    padding-top: 48px;
    padding-left: 220px; 
`
export default Dashboard;