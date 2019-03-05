import React, { PureComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

class HeaderBar extends PureComponent {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { location } = this.props;
    const { pathname } = location;
    return (
      <Wrapper>
        <Navbar expand="md" className="py-0">
          <NavbarToggler onClick={this.toggle} className="p-0">
            <img src={require('../img/icon-burger.png')} alt="" />
          </NavbarToggler>
          <NavbarBrand href="/">
            <img src={require('../img/logo.png')} alt="" />
          </NavbarBrand>
          <div className="d-flex align-items-center">
            <img src={require('../img/star.png')} className="mr-2" alt="" />
            歡迎,player
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">关于我们</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">如何存款</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">如何取款</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">常见问题</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">联络我们</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Nav className="main">
          <NavItem active={pathname === '/'}>
            <Link to="/" className="nav-link">
              首页
            </Link>
          </NavItem>
          <NavItem active={pathname === '/sports-esports'}>
            <Link to="/sports-esports" className="nav-link">
              体育电竞
            </Link>
          </NavItem>
          <NavItem active={pathname === '/live-casino'}>
            <Link to="/live-casino" className="nav-link">
              真人娱乐
            </Link>
          </NavItem>
          <NavItem>
            <Link to="#target" className="nav-link">
              彩票投注
            </Link>
          </NavItem>
          <NavItem>
            <Link to="#target" className="nav-link">
              电子游艺
            </Link>
          </NavItem>
        </Nav>
      </Wrapper>
    );
  }
}

export default withRouter(HeaderBar);

const Wrapper = styled.div`
  .main {
    a {
      font-size: 12px;
    }
    .active {
      a {
        color: var(--warning);
      }
    }
  }
  .navbar-toggler {
    /* background-color: white; */
    color: rgba(255, 255, 255, 1);
    border: none;
  }
  .navbar {
    color: white;
    background-color: transparent;
    position: relative;
    min-height: 41px;
    font-size: 12px;
  }
  .navbar-brand {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: var(--dark);
    padding: 0.5rem 0.75rem;
  }
  a {
    color: white;
  }
`;
