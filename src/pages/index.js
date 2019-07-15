import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../components/globals/BackgroundSection'

import Layout from "../components/layout"
import Info from '../components/Home/Info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/ProductList'
import Contact from '../components/Home/Contact'

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection 
        img={data.img.childImageSharp.fluid}
        title="Regular Coffee"
        styleClass="default-background"
      >  
        </BackgroundSection>
        <Info/>
        <Menu items={data.menu.edges}/>
        <Products />
        <Contact />
    </Layout>
  )
}

export const query = graphql`
{
  img: file(relativePath:{ eq:"default-background.jpeg"}){
    childImageSharp{
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

  menu:allContentfulCoffeeItem {
    edges {
      node {
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:50, height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
