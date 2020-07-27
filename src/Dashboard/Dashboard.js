import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Footer from '../Footer/Footer'

export default class Dashboard extends Component {


    render() {
        return (
            <div className="dashboard">

                <body>

                    <header class="bg-primary py-5 mb-5">
                        <div class="container h-100">
                            <div class="row h-100 align-items-center">
                                <div class="col-lg-12">
                                    <h1 class="display-4 text-white mt-5 mb-2">SmartPantry</h1>
                                    <p class="lead mb-5 text-white-50">The easiest way to keep track of your groceries.</p>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div class="container">

                        <div class="row">
                            <div class="col-md-8 mb-5">
                                <h2>What We Do</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deserunt neque tempore recusandae animi soluta quasi? Asperiores rem dolore eaque vel, porro, soluta unde debitis aliquam laboriosam. Repellat explicabo, maiores!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis optio neque consectetur consequatur magni in nisi, natus beatae quidem quam odit commodi ducimus totam eum, alias, adipisci nesciunt voluptate. Voluptatum.</p>
                                <a class="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a>
                            </div>
                            <div class="col-md-4 mb-5">
                                <h2>Contact Us</h2>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque sequi doloribus totam ut praesentium aut.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <div class="card h-100">
                                    <img class="card-img-top" src="https://placehold.it/300x200" alt="" />
                                    <div class="card-body">
                                        <h4 class="card-title">Card title</h4>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                                    </div>
                                    <div class="card-footer">
                                        <a href="#" class="btn btn-primary">Find Out More!</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                    <Footer />


                    <script src="vendor/jquery/jquery.min.js"></script>
                    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

                </body>

            </div>
        )
    }
}
