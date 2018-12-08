import React, { useState } from 'react';
import { setConfig } from 'react-hot-loader';
import { Grid, Image, Rail, Segment , Divider, Container } from 'semantic-ui-react';

setConfig({ pureSFC: true });

const titleStyle = {
  border: '5px solid white',
  margin: '10px 20px',
  width: '80%',
}

const romanjiStyle = {

}

function VivreCardTitle(props) {
  return (
    <Container textAlign='center' style={titleStyle}>
      <div>{props.name.kanji}</div>
      <Divider horizontal>
        <div style={romanjiStyle}>{props.name.romanji} </div>
      </Divider>
    </Container> 
  );
}

const numberStyle = {
  fontSize: '60px',
  padding: '0',
  margin: '60px -240px 0 0'
}

function VivreCardNumber(props) {
  return (
    <div style={numberStyle}>
      {props.number}
    </div>
  );
}

const cardStyle = {
  background: 'red',
  maxWidth: '600px',
  textAlign: 'center',
  borderRadius: '5px',
}
function VivreCard({ character }) {
  return (
    <Grid className="vivre-card" style={cardStyle}>
      <Grid.Row>
        <Grid.Column width={14}>
          <VivreCardTitle name={character.name}/>
          <Rail internal attached position='right'>
            <VivreCardNumber number={character.number} />
          </Rail>
        </Grid.Column>
      </Grid.Row>
       
    </Grid>
  );
}

export default VivreCard;


