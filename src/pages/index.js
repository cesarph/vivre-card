import React from 'react';
import Konva from 'konva';
import { Link, graphql } from 'gatsby';
import { Stage } from 'react-konva';
import 'semantic-ui-css/semantic.min.css';

import Layout from '../components/layout';
import CardBackground from '../vivre-card/components/CardBackground';
import CardTitle from '../vivre-card/components/CardTitle';

const colors = {
  primary: '#cc0000',
  secondary: 'white',
  extra: 'yellow',
}

const IndexPage = ({ data }) => (
  <Layout>
    {/* { 
      data.allCharactersJson.edges.map(({ node }, i) => (
        <VivreCard character={node}/>
      )) 
    } */}
    <Stage width={window.innerWidth} height={1000}>
      <CardBackground colors={colors} />
      <CardTitle colors={colors} />
    </Stage>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
      allCharactersJson {
       edges {
         node {
           name {
             kanji
             romanji
           }
           number
           crew {
             flagURL
             affilation
             position
           }
         }
       }
     }
  }
`;