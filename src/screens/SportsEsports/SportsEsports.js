import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import HeaderBar from '../../components/HeaderBar';
import { Card, CardBody } from 'reactstrap';

const SportsEsports = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <HeaderBar />
      <div style={{ height: 120 }} />
      <Card className="bg-dark p-0 rounded">
        <CardBody className="p-3">
          <div className="games">
            <div
              className="box"
              style={{ backgroundImage: `url(${require('./img/1.png')})` }}
            >
              <div className="card-content">
                <div className="title">188bet体育</div>
                <div className="sub">188bet</div>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${require('./img/2.png')})` }}
            >
              <div className="card-content">
                <div className="title">CMD368体育</div>
                <div className="sub">CMD368</div>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${require('./img/3.png')})` }}
            >
              <div className="card-content">
                <div className="title">IBCbet体育</div>
                <div className="sub">IBCbet</div>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${require('./img/4.png')})` }}
            >
              <div className="card-content">
                <div className="title">IM体育</div>
                <div className="sub">Imsport</div>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${require('./img/5.png')})` }}
            >
              <div className="card-content">
                <div className="title">188bet体育</div>
                <div className="sub">188bet</div>
              </div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: `url(${require('./img/6.png')})` }}
            >
              <div className="card-content">
                <div className="title">CMD368体育</div>
                <div className="sub">CMD368</div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Wrapper>
  );
};

export default SportsEsports;

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${require('./img/bg.png')});
  }
`;

const Wrapper = styled.div`
  .card {
    border-radius: 30px 30px 0px 0px !important;
  }
  .games {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.75rem;
    > div {
      height: 169px;
      display: flex;
      align-items: center;
      color: white;
      background-position: 0 0;
      background-size: cover;
      position: relative;
      .card-content {
        flex-grow: 1;
        margin-left: 1.2rem;
        color: #f4c225;
        /* position: relative; */
        padding-bottom: 6px;
        position: absolute;
        bottom: 20px;
        &:after {
          content: '';
          background-color: #f4c225;
          position: absolute;
          bottom: 0;
          width: 27px;
          height: 2px;
          z-index: 2;
        }
      }
      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .sub {
        font-size: 10px;
      }
    }
  }
`;
