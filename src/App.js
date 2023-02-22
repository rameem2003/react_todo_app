import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import Plan from './Plan';

class App extends Component {
  state = {
    items:[],
    text : ""
  }
  handleChange = e => {
    this.setState({text: e.target.value})
  }

  handle = e => {
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text]
      this.setState({items:items, text : ""})
    }
  }

  dataDelete = id => {
    console.log("DELETE", id);
    const oldItem = [...this.state.items];
    console.log("Old Items", oldItem);
    const items = oldItem.filter((element, i) => {
      return i !== id
    })
    console.log("New items", items);
    this.setState({items : items})
  }
  render() {
    return (
      <div>
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-sm-6 mx-auto shadow-lg">
              <h1 className="text-center text-white p-3">Todo App</h1>

              <div className="row">
                <div className="col-9">
                  <input type="text" value={this.state.text} onChange={this.handleChange} className='form-control' name="" id="" placeholder='Add your work.....'/>
                </div>
                <div className="col-2">
                  <button className='btn btn-warning px-3 font-weight-bold' onClick={this.handle}>Add</button>
                </div>

                <div className="container-fluid">
                  <ul className="list-unstyled row m-1">
                    {
                      this.state.items.map((item, index) => {
                        return <Plan value={item} kay={index} id={index} sendData = {this.dataDelete} />
                      })
                    }
                  </ul>
                </div>

                <div className="container-fluid">
                  <p className='text-center text-white'>Developed By Mahmood Hassan Rameem</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
