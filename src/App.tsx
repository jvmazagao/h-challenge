import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { getTimelineInfo } from './api/TimelineApi';
import { theme } from './theme/theme';
import { ThemeProvider } from 'styled-components'
import CardIcon from './components/CardIcon';
import StatusLabel from './components/StatusLabel/StatusLabel'

function App() {
  const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   getHeaderInfo().then(value => {
  //     setInfo(value);
  //   })
  // },[setInfo])

  useEffect(() => {
    getTimelineInfo().then(value => {
      setInfo(value);
    })
  }, [setInfo])

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header>
          {info.map((value: any) => <StatusLabel key={String(value.id)} status={value.status}/>)}
        </Header>
      </div>
    </ThemeProvider>

  );
}

export default App;
