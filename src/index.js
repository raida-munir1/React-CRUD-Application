// import ReactDOM from 'react-dom';
// import React from 'react';

// import Counter from './components/counterComponent';

//const element = <h1>Hi i am Raida</h1>
//ReactDOM.render(<Counter />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/reset.css'; // Import reset styles for Ant Design (if needed)
//import 'antd/dist/antd.css'; // Import Ant Design styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

