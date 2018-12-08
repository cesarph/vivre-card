import React from 'react';
import { Link, graphql } from 'gatsby';
import 'semantic-ui-css/semantic.min.css';

import Layout from '../components/layout';
import VivreCard from '../components/VivreCard';

const IndexPage = ({ data }) => (
  <Layout>
    <Link to="/page-2/">Go to page 2</Link>
    { 
      data.allCharactersJson.edges.map(({ node }, i) => (
        <VivreCard character={node}/>
      )) 
    }
    
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