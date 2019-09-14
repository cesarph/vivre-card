import React from 'react';
import Konva from 'konva';
import { Link, graphql } from 'gatsby';
import { Stage } from 'react-konva';
import 'semantic-ui-css/semantic.min.css';

import Layout from '../components/layout';
import CardBackground from '../vivre-card/components/CardBackground';
import CardTitle from '../vivre-card/components/CardTitle';
import CardTab from '../vivre-card/components/CardTab';
import CardNumber from '../vivre-card/components/CardNumber';

const colors = {
  primary: '#cc0000',
  secondary: 'white',
  extra: 'yellow',
}
const tabsCount = [0, 1, 2, 3, 4, 5, 6]
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
      {
        tabsCount.map(i => <CardTab colors={colors} y={300 + 55 * i} />)
      }
      <CardNumber colors={colors} />
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