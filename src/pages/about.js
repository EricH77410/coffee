import React from "react"
import { graphql } from "gatsby"

import BackgroundSection from '../components/globals/BackgroundSection'

import Layout from "../components/layout"
import Info from '../components/Home/Info'

import SEO from "../components/seo"

const AboutPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundSection 
        img={data.img.childImageSharp.fluid}
        title="About us"
        styleClass="about-background"
      >
  
        </BackgroundSection>
        <Info />
    </Layout>
  )
}

export const query = graphql`
{
  img: file(relativePath:{ eq:"about-background.jpeg"}){
    childImageSharp{
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
