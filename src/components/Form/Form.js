import React, { Component } from 'react';
import './Form.css';
import {MyConsumer} from '../myContext';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      dish:'Dish-VACIO',
      address:'Address-VACIO',
      dist:'Dist-VACIO',
      precio:'Price-VACIO',
    };
    this.handleChangeDish=this.handleChangeDish.bind(this)
    this.handleChangeAddress=this.handleChangeAddress.bind(this)
    this.handleChangeDist=this.handleChangeDist.bind(this)
    this.handleChangePrice=this.handleChangePrice.bind(this)
  }

handleChangeDish(event){
  let dish=event.target.value;
  console.log(dish);
  this.setState({dish: dish})
}
handleChangeAddress(event){
  let address=event.target.value;
  console.log(address);
  this.setState({address: address})
}
handleChangeDist(event){
  let dist=event.target.value;
  console.log(dist);
  this.setState({dist: dist})
}
handleChangePrice(event){
  let price=event.target.value;
  console.log(price);
  this.setState({price: price})
}

  render() {
    return (
      <MyConsumer>
        {(cont)=>(
           <form
            onSubmit=
               {(e)=>
                 {
                 e.preventDefault()
                cont.changeDish(this.state.dish)
                cont.changeAddress(this.state.address)
                cont.changeDist(this.state.dist)
                cont.changePrice(this.state.price)
                 }
               }>
              <label>Que quieres comer:</label><br/>
              <input type="text" name="dish" onChange={this.handleChangeDish}/><br/>

              <label>Dónde estás:</label><br/>
              <input type="text" name="address" onChange={this.handleChangeAddress}/><br/>

              <label>A que distancia estás:</label><br/>
              <input type="text" name="dist" onChange={this.handleChangeDist}/><br/>

              <label>De que rango de precio:</label><br/>
              <input type="text" name="price" onChange={this.handleChangePrice}/><br/>

              <input type="submit" value="enviar"/>
            </form>
          )
        }
     </MyConsumer>
    );
  }
}

export default Form;