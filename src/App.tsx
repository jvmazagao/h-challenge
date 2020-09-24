import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { getTimelineInfo } from './api/TimelineApi';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components';
import CardIcon from './components/CardIcon';
import StatusLabel from './components/StatusLabel/StatusLabel';
import AttachmentButton from './components/AttachmentButton';
import HeaderContainer from './containers/Header'
import Dashboard from './pages/Dashboard';

function App() {
  const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   getHeaderInfo().then(value => {
  //     setInfo(value);
  //   })
  // },[setInfo])

  // useEffect(() => {
  //   getTimelineInfo().then(value => {
  //     setInfo(value);
  //   })
  // }, [setInfo])

  // console.log({info})
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard>
          <HeaderContainer />
        </Dashboard>
      </div>
    </ThemeProvider>

  );
}

export default App;
