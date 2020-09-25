import React from 'react';
import styled from 'styled-components'
import {HeaderProps} from './types'
import Card from '../Card'

const Header: React.FC<HeaderProps> = ({children}) => {
    return (

            <CardHeader>
                {children}
            </CardHeader>

    )
}

const CardHeader = styled(Card)`
    display: flex;
    height: 300px;
    background-image: linear-gradient(to right, #00d7ce 3%, #00c5fc);
    padding: 25px 38px 18px 48px;
    flex-direction: row;
`

export default Header;