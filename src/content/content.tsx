import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.createElement('div');
const header = document.getElementById('TicketHeader').childNodes[1];
header.appendChild(container);

ReactDOM.render(<App />, container);
