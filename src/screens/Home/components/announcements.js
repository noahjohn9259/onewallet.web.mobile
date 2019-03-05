import React, { memo } from 'react';
import styled from 'styled-components';

/* eslint-disable jsx-a11y/no-distracting-elements */

export default memo(function announcements() {
  return (
    <Wrapper>
      <img src={require('../img/audio.png')} className="mr-2" alt="" />{' '}
      <marquee behavior="" direction="">
        亞洲盃小組賽,第二輪（中國VS菲律賓）於20191月11日
      </marquee>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: 50px;
  font-size: 12px;
  color: #001f38;
  line-height: 100%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
