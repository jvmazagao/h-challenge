import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { getTimelineInfo } from './api/TimelineApi';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import HeaderContainer from './containers/Header'
import TimelineContainer from './containers/Timeline'
import Dashboard from './pages/Dashboard';
import SidebarContainer from './containers/Sidebar'

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard>
          <HeaderContainer />
          <TimelineContainer />
          <SidebarContainer />
        </Dashboard>
      </div>
    </ThemeProvider>

  );
}

export default App;
