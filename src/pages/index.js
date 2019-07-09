import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundSection from '../components/globals/BackgroundSection'

import Layout from "../components/layout"
import Info from '../components/Home/Info'

import SEO from "../components/seo"

const IndexPage = ({data}) => {
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
}
`

export default IndexPage
