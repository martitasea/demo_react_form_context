import React, { Component } from 'react';
import './Header.css';
import {MyConsumer} from '../myContext';

class Header extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  render() {
    return(
    <MyConsumer>
      {(cont)=>
        {
          return(
          <header>
            <h1>Hola, "{cont.dish}{cont.address}{cont.dist}{cont.price}"</h1>
            <p>(Entre comillas el contexto)</p>
          </header>
          )
        }
      }
    </MyConsumer>
    )
  }
}

export default Header;