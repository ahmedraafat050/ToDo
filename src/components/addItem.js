import React, { Component } from 'react';

export default class addItem extends Component {
  state = {
    name: '',
    age: ''
  }
  addNewItem = (e) => {
    this.setState({[e.target.id] : e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.displayItem(this.state)
    this.setState({
      name:'',
      age:''
    })
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit= {this.handleSubmit}>
        <div className="row">
          <input id='name' className="col-6 border-0 border-end text-center" type='text' placeholder='Inter name' onChange={this.addNewItem} value={this.state.name}/>
          <input id='age' className="col-3 border-0 text-center" type='number' placeholder='Inter age' onChange={this.addNewItem} value={this.state.age}/>
          <input className=' col-3 border-0 bg-primary text-white px-5 py-3' value='Add' type="submit" />
        </div>
        </form>
      </div>
    )
  }
}
