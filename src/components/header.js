import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ''
    };

    console.log(props);
  }
  inputChange(event) {
    this.setState({ keywords: event.target.value });
    this.props.newsSearch(event.target.value);
  }
  render() {
    return (
      <header>
        <div
          className="logo"
          onClick={() => {
            console.log('clicked');
          }}
        >
          Logo
        </div>
        <input onChange={this.inputChange.bind(this)} />
      </header>
    );
  }
}

export default Header;
