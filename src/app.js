import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

////////////////////////////////////
// OLD AND NEW CLASS SYNTAX (ES6)

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi. My name is ${this.name}.`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// //
// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     // ***
//     return `Hi. My name is ${this.name}.`;
//   };
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());

// /*  **** We don't break the binding here, because arrow function don't bind their own 'this' value', They're just going to use whatever this is in scope and for arrow functions on class properties. That is the class instance itself*/
