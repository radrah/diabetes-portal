import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Amplify from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from '@aws-amplify/ui-react';
// import awsExports from "./aws-exports";
import {BrowserRouter} from 'react-router-dom'
import Themes from "./themes";
import { ThemeProvider } from "@material-ui/styles";

// Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <AmplifyProvider>
    <ThemeProvider theme={Themes.default}>
      <App />
    </ThemeProvider>
  </AmplifyProvider>
</React.StrictMode>
);


