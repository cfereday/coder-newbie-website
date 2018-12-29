import React, { Component } from 'react';
import { Link } from 'gatsby'

class Bootcamps extends Component {
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
          Bootcamps to learn to code
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
                <Link to="/bootcamps/d-a-ch"> Germany/Austria/Switzerland </Link>
                <Link to="/bootcamps/israel"> Israel </Link>
                <Link to="/bootcamps/uk"> United Kingdom </Link>
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

export default Bootcamps
