import React from 'react';
import styled from 'styled-components';
import {useTheme} from '../theme/hooks/index'
interface Props {
    children: React.ReactNode;
}

interface BreadcrumbProps {
    color: string;
}

interface DashboardContainer {
    bg: string;
}
const Dashboard: React.FC<Props> = ({children}) => {
    const theme = useTheme();
    //todo: finish the breadcrumb component to handle steps and change the color of "/".
    return (
        <Container bg={theme.dashboard.bgGreen}>
            <WhiteContainer  bg={theme.dashboard.bgLight}>
                <BreadcrumbContainer>
                    <Breadcrumb color={theme.details.color}> Dashboard / QuickOps / Current </Breadcrumb>
                </BreadcrumbContainer>
                {children}
            </WhiteContainer>
        </Container>
    )
}

const Container = styled.div<DashboardContainer>`
    background-color: ${props => props.bg};
    min-height: 100vh;
    padding-top: 48px;
    padding-left: 28vh; 
`

const WhiteContainer = styled.div<DashboardContainer>`
    background-color: ${props => props.bg};
    min-height: 100vh;
    padding-top: 12px;
    padding-left: 28px; 
`

const BreadcrumbContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    background-color: none;
    padding: 0 0 36px 49px;
`
const Breadcrumb = styled.h2<BreadcrumbProps>`
    color: ${props => props.color};
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
`
export default Dashboard;