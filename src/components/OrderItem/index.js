import React, { Component } from 'react';

export default class OrderItem extends Component {
  render() {
      const { shop, product, price, picture, ifCommented} = this.props.data;
    return (
        <div>
            <div className="orderItem">
            </div>
        </div>
    );
  }
}
