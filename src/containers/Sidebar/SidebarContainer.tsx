import React from 'react';
import styled from 'styled-components';

const SidebarContainer = () => {
    return (
        <Sidebar>
            Sidebar;
        </Sidebar>
    )
}


const Sidebar = styled.div`
    margin-top: 90px;
    position: absolute;
    right: 0;
    top: 0;
    width: 330px;
    min-height: 125vh;
    background-color: #fff;
`
export default SidebarContainer;