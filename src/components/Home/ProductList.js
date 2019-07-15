import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

import Title from '../globals/Title'
import Product from './Product'

const getProducts = graphql` { products: allContentfulCoffeeProduct {
    edges {
      node {
        id
        title
        price
        image {
          fluid(maxWidth:426){
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }}`

const ProductList = () => {
    return (
        <StaticQuery query={getProducts} render={data => {
            return ( 
                <section className="py-5">
                    <div className="container">
                        <Title title="our products"/>
                        <div className="row">
                            {data.products.edges.map( ({node:product}) => {
                                return <Product key={product.id} product={product}/>
                            })}
                        </div>
                    </div>
                </section>
             )
        }}/>
    )
}

export default ProductList
