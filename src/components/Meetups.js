import React, { Component } from 'react';
import { Link } from 'gatsby'

class Meetups extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Meetups to learn to code
        </button>

        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <Link to="/meetups/d-a-ch"> Germany/Austria/Switzerland </Link><br/>
                <Link to="/meetups/uk"> United Kingdom </Link><br/>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default Meetups
