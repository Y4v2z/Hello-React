import React from "react";

import ProductList from "./ProductList";
import NewProduct from "./NewProduct";
import Header from "./Header";
import SelectedProductList from "./SelectedProductList";
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    name: "Iphone 15",
                    price: 50000,
                    image: "1.jpg"
                },
                {
                    name: "Iphone 16",
                    price: 60000,
                    image: "2.jpg"
                },
                {
                    name: "Iphone 17",
                    price: 70000,
                    image: "3.jpg"
                }
            ],
            selectedProducts: [
                {
                    name: "Iphone 17",
                    price: 70000,
                    image: "3.jpg"
                }

            ]
        }
    }
    componentDidMount() {
        const selectedProducts = JSON.parse(localStorage.getItem("selectedProducts"));
        if (selectedProducts) {
            this.setState({
                selectedProducts: selectedProducts
            })
        }
    }
    componentDidUpdate() {
        const json_str = JSON.stringify(this.state.selectedProducts);
        localStorage.setItem("selectedProducts", json_str);
    }
    selectProduct = (product) => {
        this.setState((prevState) => {
            return { selectedProducts: prevState.selectedProducts.concat(product) }
        })
    }
    saveProduct = (product) => {
        this.setState((prevState) => {
            return { products: prevState.products.concat(product) }
        })

    }

    render() {
        return (
            <div className="container mt-3">
                <Header selectedProducts={this.state.selectedProducts} />
                <div className="row mt-3">
                    <div className="col-4">
                        <NewProduct saveProduct={this.saveProduct} />
                    </div>
                    <div className="col-4">
                        <ProductList products={this.state.products} selectProduct={this.saveProduct} />
                    </div>
                    <div className="col-4"></div>
                    <SelectedProductList products={this.state.selectedProducts} />
                </div>
            </div>
        )
    }
}
export default App;

