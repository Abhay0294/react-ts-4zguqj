import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ButtonCounter from './Components/useEffect_useMemo';
import StateMaintain from './Components/useEffect_useMemo_2';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <ButtonCounter /> */}
    <StateMaintain />
  </StrictMode>
);
