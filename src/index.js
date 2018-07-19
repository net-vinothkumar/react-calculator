import React from 'react';
import ReactDOM from 'react-dom';

import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// ReactDOM.render(<p><h1>Calculator</h1><div id='calc-contain'>
//         <form name="calculator">
//             <input type="text" name="answer" /><br></br>
//                 <input type="button" value=" 1 " onclick="calculator.answer.value += '1'" />
//                 <input type="button" value=" 2 " onclick="calculator.answer.value += '2'" />
//                 <input type="button" value=" 3 " onclick="calculator.answer.value += '3'" />
//             <input type="button" value=" + " onclick="calculator.answer.value += '+'" /><br></br>
//
//                 <input type="button" value=" 4 " onclick="calculator.answer.value += '4'" />
//                 <input type="button" value=" 5 " onclick="calculator.answer.value += '5'" />
//                 <input type="button" value=" 6 " onclick="calculator.answer.value += '6'" />
//                 <input type="button" value=" - " onclick="calculator.answer.value += '-'" /><br></br>
//             <input type="button" value=" 7 " onclick="calculator.answer.value += '7'" />
//             <input type="button" value=" 8 " onclick="calculator.answer.value += '8'" />
//             <input type="button" value=" 9 " onclick="calculator.answer.value += '9'" />
//             <input type="button" value=" x " onclick="calculator.answer.value += '*'" /><br></br>
//         <input type="button" value=" c " onclick="calculator.answer.value = ''" />
//         <input type="button" value=" 0 " onclick="calculator.answer.value += '0'" />
//         <input type="button" value=" = " onclick="calculator.answer.value = eval(calculator.answer.value)" />
//         <input type="button" value=" / " onclick="calculator.answer.value += '/'" /></form></div></p>, document.getElementById('root'));

