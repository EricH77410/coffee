import React, { Component } from 'react'

import Title from '../globals/Title'

import MenuItem from '../globals/MenuItem'

const getCategories = (items) => {
    let tempItems = items.map(item => {         
        return item.node.category
    })
    let tempCat = new Set(tempItems)
    let categories = Array.from(tempCat)
    categories = ['all',...categories]
    return categories
}

export default class Menu extends Component {
  
    state = {
        items: this.props.items,
        coffeeItems: this.props.items,
        categories: getCategories(this.props.items)
    }
    
    handleFilter = (cat) => {
        let tempItems = [...this.state.items]
        if (cat === 'all') {
            this.setState(() => {
                return {coffeeItems: tempItems}
            })
        } else {
            let items = tempItems.filter( ({node}) => node.category===cat )
            this.setState(() => {
                return {coffeeItems: items}
            })
        }
    }

    render() {
        if (this.state.items.length>0) {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                        {/* Categories */}
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-center">
                                { this.state.categories.map((cat, ind) => {
                                    return ( <button type="button" className="btn btn-yellow text-capitalize m-3" key={ind} onClick={() => this.handleFilter(cat)}>
                                        {cat}
                                    </button> )
                                }) }
                            </div>
                        </div>
                        {/* Items */}
                        <div className="row ">
                                {this.state.coffeeItems.map(({ node }) => {
                                    return (
                                        <MenuItem item={node} key={node.id}/>
                                    )
                                })}
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <section className="menu py-5">
                    <div className="container">
                        <Title title="best of our menu"/>
                        <div className="row">
                            <div className="col-10 sol-sm-6 mx-auto text-center text-capitalize">
                                <h1>there are no items to display</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
