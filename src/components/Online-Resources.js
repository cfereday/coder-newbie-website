import React, { Component } from 'react';
import { Link } from 'gatsby'

class OnlineResources extends Component {
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
          Online resources to learn to code
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
                <Link to="/online-resources/free-ebooks"> Free ebooks </Link> <br/>
                <Link to="/online-resources/learn-to-code-resources"> Learn to code resources </Link><br/>
                <Link to="/online-resources/podcasts"> Podcasts </Link><br/>
                <Link to="/online-resources/tech-tests-and-interviews"> Tech tests and interviews </Link><br/>
                <Link to="/online-resources/try-before-you-buy"> Try before you buy</Link><br/>
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

export default OnlineResources
