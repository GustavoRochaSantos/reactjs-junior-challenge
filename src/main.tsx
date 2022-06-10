import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./component/App";
import { ChakraProvider } from '@chakra-ui/react';
import store from "./redux/store";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
      <ChakraProvider>
          <App />
      </ChakraProvider>
      </Provider>
  </React.StrictMode>
)
