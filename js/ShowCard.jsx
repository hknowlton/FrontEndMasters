import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 5px solid navy;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: scroll;
  color: grey;
  height: 250px;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
  height: 250px;
`;

const ShowCard = props => (
  <Wrapper>
    <Image alt={`${props.title} Show Poster`} src={`/public/img/posters/${props.poster}`} />
    <div>
      <h3>{props.title}</h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
