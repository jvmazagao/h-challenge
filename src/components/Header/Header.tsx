import React from 'react';
import styled from 'styled-components'
import {HeaderProps} from './types'
import Card from '../Card'

const Header: React.FC<HeaderProps> = ({children}) => {
    return (
        <div>
            <CardHeader>
                {children}
            </CardHeader>
        </div>
    )
}

const CardHeader = styled(Card)`
    height: 226px;
    background-image: linear-gradient(to right, #00d7ce 3%, #00c5fc);
`

export default Header;