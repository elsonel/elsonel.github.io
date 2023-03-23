import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { Theme } from './UI/utility/themes/Theme';
import './index.css';
import { App } from './App';
import { Loader } from './Loader';
import {
  GlobalBackground,
  GlobalScrollHide,
} from './UI/utility/styles/GlobalStyles';

// This has to be first to render first
const rootLoader = createRoot(document.getElementById('root-loader')!);
rootLoader.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <Loader />
    </ThemeProvider>
  </StrictMode>
);

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalBackground />
      <GlobalScrollHide />
      <App />
    </ThemeProvider>
  </StrictMode>
);
