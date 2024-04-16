import React, { Component, createContext } from 'react';
import { rowData } from "./Component/appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        AllData: rowData
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{ ...this.state }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
