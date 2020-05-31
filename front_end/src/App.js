import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

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
      nombres : e.target.value
    })

  }
  handleSubmit = e => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("productos", this.productos);
    const url = "http://localhost:81/preubaReact/back_end/";
    Axios.post(url, formData)
      .then(res => console.log(res.data))
      .catch(err=>console.log(err));
    console.log(this);
  }

  render() {
    return (
      <div  >
        <h1> Productos en REACT</h1 >
        <div> 
          <input className="form-control" type="text" id="nombre" placeholder="Nombre Producto" onChange={this.handleAdd} ></input>
          <input className="form-control" type="text" id="referencia" placeholder="Referencia Producto"  onChange={this.handleAdd}></input>
          <input className="form-control" type="text" id="precio" placeholder="Precio Producto"  onChange={this.handleAdd}></input>
          <input className="form-control" type="text" id="peso" placeholder="Peso Producto" onChange={this.handleAdd}></input>
          <input className="form-control" type="text" id="categoria" placeholder="Categoria Producto" onChange={this.handleAdd}></input>
          <input className="form-control" type="text" id="stock" placeholder="Stock Producto"  onChange={this.handleAdd}></input>   
          <button className="btn btn-success" id="submit" type="button" onClick={this.handleSubmit}>Crear Productos</button>
        </div >
      </div>
    );
  }
}
export default App;
