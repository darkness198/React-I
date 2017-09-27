/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import { render } from 'react-dom';
import TodoList from './TodoList';

require('!style-loader!css-loader!sass-loader!./index.scss');

const App = () => (
  <div>
    <TodoList />
  </div>
);
ReactDom.render(<App />, document.getElementById('root'));
