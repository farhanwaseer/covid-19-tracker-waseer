import React , {Fragment} from 'react';
import ReactDOM from 'react-dom'
import App from './App.js';

const element = React.createElement('div', null, 'FARHAN WASEER');
console.log(element)

const odList = React.createElement('ol', { className: 'odList '}, 
           React.createElement('li', null, 'Amir'),
           React.createElement('li', null, 'Irfan'),
           React.createElement('li', null, 'Muneeb')


)

const odCities = ['Karachi', 'lahore', 'Faisalabad', 'Abbottabad'];
const odcitie = React.createElement('ol', null, 
    odCities.map((city, idx) => React.createElement('li', {key: idx}, city)) 
)

ReactDOM.render(
    <Fragment>
         <App />
         {element}
         <div>
             karachi
         </div>
         <div>
             lahore
         </div>
         {odList}
         {odcitie}
    </Fragment>   

, document.getElementById("root"));
