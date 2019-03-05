import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import { Card, CardBody } from 'reactstrap';

const LiveCasino = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <HeaderBar />
      <div style={{ height: 160 }} />
      <Card className="bg-dark p-0 rounded">
        <CardBody className="p-3">
          <div
            className="box"
            style={{ backgroundImage: `url(${require('./img/1.png')})` }}
          >
            <div className="card-content">
              <div className="title">AG旗舰厅</div>
              <div className="sub">百家乐大赛指定游戏厅</div>
              <div className="desc">
                赌王争霸，抢夺千万大奖
                <br />
                每周三晚上八点准时开赛
              </div>
            </div>
          </div>
          <div
            className="box"
            style={{ backgroundImage: `url(${require('./img/2.png')})` }}
          >
            <div className="card-content">
              <div className="title">波音厅</div>
              <div className="sub">奢华百家乐，美女如云</div>
              <div className="desc">
                赌王争霸，抢夺千万大奖
                <br />
                每周三晚上八点准时开赛
              </div>
            </div>
          </div>
          <div
            className="box"
            style={{ backgroundImage: `url(${require('./img/3.png')})` }}
          >
            <div className="card-content">
              <div className="title">All Bet厅</div>
              <div className="sub">精选最佳真人娱乐投注平台</div>
              <div className="desc">
                赌王争霸，抢夺千万大奖
                <br />
                每周三晚上八点准时开赛
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default LiveCasino;

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${require('./img/bg.png')});
  }
`;

const Wrapper = styled.div`
  .box {
    height: 112px;
    display: flex;
    align-items: center;
    color: white;
    background-position: 0 0;
    background-size: cover;
    position: relative;
    margin-bottom: 0.5rem;
    .card-content {
      flex-grow: 1;
      margin-left: 1.2rem;
    }
    .title {
      color: #d8c898;
    }
    .sub {
      font-size: 12px;
      color: var(--gray);
      margin-bottom: 5px;
    }
    .desc {
      font-size: 10px;
    }
  }
`;
