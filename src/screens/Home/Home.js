import React, { Component } from 'react';
import { Card, CardBody, Nav, NavItem } from 'reactstrap';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from 'components/HeaderBar';
import { Link } from 'react-router-dom';

import Announcements from './components/announcements';

export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <HeaderBar />
        <div style={{ height: 241 }} />
        <Card className="bg-dark p-0 rounded">
          <CardBody className="p-3">
            <Nav className="mb-2 d-flex justify-content-between">
              <NavItem>
                <a href="#target" className="text-center">
                  <small>中心钱包</small>
                  <div className="d-flex align-items-end mb-0 mt-1">
                    <span className="text-warning lead currency ">0.00</span>
                    <small>元</small>
                  </div>
                </a>
              </NavItem>
              <NavItem>
                <a href="#target" className="text-center">
                  <div>
                    <img src={require('./img/icon-deposit.png')} alt="" />
                  </div>
                  <small>存款</small>
                </a>
              </NavItem>
              <NavItem>
                <a href="#target" className="text-center">
                  <div>
                    <img src={require('./img/icon-transfer.png')} alt="" />
                  </div>
                  <small>转帐</small>
                </a>
              </NavItem>
              <NavItem>
                <a href="#target" className="text-center">
                  <div>
                    <img src={require('./img/icon-withdrawal.png')} alt="" />
                  </div>
                  <small>取款</small>
                </a>
              </NavItem>
              <NavItem>
                <a href="#target" className="text-center">
                  <div>
                    <img src={require('./img/icon-offer.png')} alt="" />
                  </div>
                  <small>优惠</small>
                </a>
              </NavItem>
            </Nav>
            <Announcements />
            <div className="games">
              <div
                className="box"
                style={{ backgroundImage: `url(${require('./img/1.png')})` }}
              >
                <Link to="/live-casino" />
                <div className="card-content">
                  <span>真人娱乐</span>
                  <small>Livecasino</small>
                </div>
              </div>
              <div
                className="box"
                style={{ backgroundImage: `url(${require('./img/2.png')})` }}
              >
                <div className="card-content">
                  <span>电子游艺</span>
                  <small>Slot Games</small>
                </div>
              </div>
              <div
                className="box box-2"
                style={{ backgroundImage: `url(${require('./img/3.png')})` }}
              >
                <Link to="/sports-esports" />
                <div className="card-content align-items-center">
                  <span className="d-inline mr-3">体育电竞</span>
                  <small className="d-inline">Sports &amp; Esports</small>
                </div>
              </div>
              <div
                className="box"
                style={{ backgroundImage: `url(${require('./img/4.png')})` }}
              >
                <div className="card-content">
                  <span>彩票投注</span>
                  <small>Lottery</small>
                </div>
              </div>
              <div
                className="box"
                style={{ backgroundImage: `url(${require('./img/5.png')})` }}
              >
                <div className="card-content">
                  <span>棋牌游戏</span>
                  <small>Chess Games</small>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <GlobalStyles />
      </Wrapper>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${require('./img/bg.png')});
  }
`;

const Wrapper = styled.div`
  .games {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.75rem;
    > div {
      height: 74px;
      display: flex;
      align-items: center;
      color: white;
      background-position: 0 0;
      background-size: cover;
      position: relative;
      a {
        z-index: 2;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
      &.box-2 {
        grid-column: 1/3;
      }
      span {
        font-size: 12px;
        display: block;
      }
      small {
        display: block;
        font-size: 8px;
      }
      .card-content {
        flex-grow: 1;
        margin-left: 1.2rem;
      }
    }
  }
  a {
    color: white;
    small {
      display: block;
    }
    &:hover {
      text-decoration: none;
    }
    div {
      margin-bottom: 0.25rem;
      line-height: 100%;
    }
  }
  small {
    font-size: 12px;
  }
`;
