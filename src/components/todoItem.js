import React, { Component } from "react";

export default class todoItem extends Component {
  render() {
    let { items, deleteItem } = this.props;
    let length = items.length;
    let ListView = length ? (
      items.map((item) => {
        return (
          <div key={item.id} className="row">
            <span className="col-6 d-flex justify-content-center align-items-center py-2 px-5 bg-white text-primary border-bottom fs-5">
              {item.name}
            </span>
            <span className="col-3 d-flex justify-content-center align-items-center py-2 px-5 bg-white text-primary border-bottom fs-5">
              {item.age}
            </span>
            <span
              className="col-3 d-flex justify-content-center align-items-center py-2 px-5 bg-white text-danger border-bottom fs-3 fw-light cursor"
              onClick={() => deleteItem(item.id)}
            >
              &times;
            </span>
          </div>
        );
      })
    ) : (
      <div className="row">
        <div className="col-12 text-center px-5 py-4 px-5 bg-light text-primary fs-5">
          There is not items to display
        </div>
      </div>
    );

    return (
      <div className="container">
        <div className="row">
          <span className="col-6 d-flex justify-content-center align-items-center py-3 px-5 bg-primary text-white border-end fs-3 fw-bold">
            Name
          </span>
          <span className="col-3 d-flex justify-content-center align-items-center py-3 px-5 bg-primary text-white border-end fs-3 fw-bold">
            Age
          </span>
          <span className="col-3 d-flex justify-content-center align-items-center py-3 px-5 bg-primary text-white fs-3 fw-bold">
            Action
          </span>
        </div>
        <div>{ListView}</div>
      </div>
    );
  }
}
