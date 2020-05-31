import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  productos = {
    id: '',
    nombre: '',
    referencia: '',
    precio: 0,
    peso: 0,
    categoria: '',
    stock: 0,
    fecha_creacion: '',
    fecha_ultima_venta: ''
  };
  handleAdd = async e => {
    await this.setState({
      text: e.target.value
    })

  }
  handleSubmit = e => {
    console.log(this);
  }

  render() {
    return (
      <div  >
        <h1> Productos en REACT</h1 >
        <div> <input className="form-control" type="text" id="nombre" placeholder="Nombre Producto" value={this.productos.nombre} onChange={this.handleAdd} ></input>
          <input className="form-control" type="text" id="referencia" placeholder="Referencia Producto" value={this.productos.referencia} onChange={this.handleAdd}></input>
          <button className="btn btn-success" id="submit" type="button" onSubmit={this.handleSubmit}>Crear Productos</button>
        </div >
      </div>
    );
  }
}
export default App;
