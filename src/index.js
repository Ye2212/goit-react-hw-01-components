import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';



ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.querySelector("#root")
  );

// const elem1 = React.createElement('span', { children: 'Hello,' })
// const elem1 = <span>Hello,</span>
// const elem2 = React.createElement('span', { children: 'World' })
// const elem2 = <span>World</span>
// const element = React.createElement('div', {
//    a: 5,
//   b:10, 
//   children: [elem1, ' ', elem2],
//  });

// const jsxElement = <div>
//   {elem1}
//   {elem2}
//   </div>;
// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.querySelector('#root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
