import React, { CSSProperties, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import data from './constant';
import { LocationOn, InvertColors, InvertColorsOff } from '@material-ui/icons/index';
import Description from '@material-ui/icons/Description';
import { Divider, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import themes from './theme';
import { Mode, useLightSwitch } from 'use-light-switch';

const defaultDarkMode = false;

function App() {
  const browserMode = useLightSwitch();
  const browserModeIsDark = browserMode === Mode.Dark;

  const [ isDark, setIsDark ] = useState(browserModeIsDark ?? defaultDarkMode);
  const theme = createMuiTheme(isDark ? themes.dark : themes.light);

  const nameStyle: CSSProperties = {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
  };

  let linkRowContent = data.links.map((o) => 
    <Button target="_blank" size="large" variant="text" color="default" href={o.link}>
      <FontAwesomeIcon icon={o.icon} size="3x" />
    </Button>
  );

  let cvRowContent = data.resume.map((o) => 
    <Button target="_blank" variant="contained" color="primary" href={o.link} startIcon={<Description />}>
      {o.text}
    </Button>
  );
  
  let socialRowContent = data.socials.map((o) => 
    <Button target="_blank" size="large" variant="text" color="default" href={o.link}>
      <FontAwesomeIcon icon={o.icon} size="lg" />
    </Button>
  );

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="top-row">
          <IconButton size="small" onClick={toggleTheme}>
            {isDark ? <InvertColorsOff /> : <InvertColors />}
          </IconButton>
        </div>
        <div className="content">
          <h1 className="name" style={nameStyle}>{data.name}</h1>
          <div className="subtitle">
            <div>{data.title}</div>
            <div>
              <div className="icon"><LocationOn fontSize="small" /></div>
              {data.location}
            </div>
          </div>
          <div className="cv-row">{cvRowContent}</div>
          <div className="divider"><Divider /></div>
          <div className="link-row">{linkRowContent}</div>
          <div className="social-row">{socialRowContent}</div>
        </div>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
