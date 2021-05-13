import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div>
        <div key={this.props.id}>
          <h3>{this.props.username}</h3>
          <h3>
            {this.props.curtidas} curtidas / {this.props.comentarios}{" "}
            comentarios
          </h3>
        </div>
        <hr />
      </div>
    );
  }
}

export default Feed;
