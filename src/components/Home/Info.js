import React from 'react'
import { Link } from 'gatsby'

import Title from '../globals/Title'

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story"/>
                <div className="row">
                    <div className="col-10 colsm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ipsam, praesentium eaque maiores libero fugiat assumenda minus, illum quidem quaerat vero? Ipsum ratione fuga numquam maiores tenetur consequatur voluptate quos, itaque perspiciatis aperiam repellendus aut atque eius cumque quidem sequi, earum corporis quo dolorem magnam. Numquam praesentium placeat ad cumque.
                        </p>
                        <Link to="/about">
                            <button className="btn text-uppercase btn-yellow">About page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info
