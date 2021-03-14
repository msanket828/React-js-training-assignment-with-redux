import React, { Fragment } from 'react';
import { computeHeadingLevel } from '@testing-library/react';
// import Data from './Data';
import Data from '../data/products'
import Welcome from './Welcome';
import ProductList from './ProductList'
import AddProduct from './AddProduct'
import { addProduct, loadProducts } from '../redux/actions'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCurrentNav: 'welcome',
            // products: []
        }
    }


    componentDidMount() {
        // let RefVariable = Data;
        // this.setState({
        //     products: RefVariable
        // })
        // this.props.addProduct({ productId: 23, productName: 'Ps2', imageUrl: 'https://images.unsplash.com/photo-1591196702597-062a87208fed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', productCode: 'ps-340', starRating: '4.5', description: 'supersmooth GFX effects and gaming experience', price: 30.2 })
        // this.props.dispatch(loadProducts())
        this.props.loadProducts();
    }

    // to make active particular link wrote below fn
    handleClick = (a) => {
        this.setState({
            showCurrentNav: a
        })
        console.log('you clik on ' + a);
    }

    //to add product and added to current state
    addProduct = (product) => {
        console.log(product);
        this.props.addProduct(product);
        // debugger;
        // this.setState(state => ({
        //     products: state.products.concat([product])
        // }))
    }


    render() {
        console.log('inside main: ', this.props);
        return (
            <Fragment >
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                        <a className="navbar-brand" href="#"> Navbar </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span> </button >
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="#"
                                    onClick={() => this.handleClick('welcome')} >
                                    Welcome <span className="sr-only"> (current) </span></a> </li>
                                <li className="nav-item"><a className="nav-link" href="#" onClick={() => this.handleClick('addProduct')}> AddProduct </a></li>
                                <li className="nav-item">
                                    <a className="nav-link"
                                        href="#"
                                        onClick={
                                            () => this.handleClick('productList')
                                        } > ProductList </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {
                        this.state.showCurrentNav === "welcome" && (
                            <Welcome />
                        )
                    } {
                        this.state.showCurrentNav === "addProduct" && (
                            <AddProduct onAddProduct={
                                (addedProduct) => {
                                    this.addProduct(addedProduct)
                                }
                            }
                                {...this.props}

                            />
                        )
                    }


                    {
                        this.state.showCurrentNav === "productList" && (
                            <ProductList
                                // realProduct={this.state.products}
                                realProduct={this.props}
                                handleClick={this.handleClick}
                            />
                        )
                    }
                </div>
            </Fragment >
        )
    }
}

export default Main;