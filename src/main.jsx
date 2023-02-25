import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// const store = createStore(() => ({
//   birds: [
//     {
//       name: 'robin',
//       views: 1
//     }
//   ]
// }));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      {/* <Provider store={store}> */}
        <App/>
      {/* </Provider> */}
    </React.StrictMode>,
)
