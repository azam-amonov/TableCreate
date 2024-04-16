import React, {Component} from 'react';
import {rowData} from "./Component/appData";

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        AllData: rowData,
        id : '',
        name : '',
        info : '',
        company : '',
        updateEdit : []
    }

    getRecord = (id) => {
        return this.state.AllData.find(item => item.id === id);
    }
    onEdit = (id) => {
        const tempProduct = this.state.AllData;
        const index = tempProduct.indexOf(this.getRecord(id));
        const selectRecord = tempProduct[index];
        this.setState({
            id : selectRecord['id'],
            name : selectRecord['name'],
            info : selectRecord['info'],
            price : selectRecord['price'],
            company : selectRecord['company'],
        })
    }
    updateValue = (e, test) => {
        if (test === 'name') {
            this.state.name = e.target.value;
        }
        if (test === 'info') {
            this.state.info = e.target.value;
        }        
        if (test === 'price') {
            this.state.price = e.target.value;
        }        
        if (test === 'company') {
            this.state.company = e.target.value;
        }
        const tempArr  = [this.state.id, this.state.name, this.state.info, this.state.price, this.state.company];
        this.setState({
            updateEdit : tempArr
        })
    }
    
    onSave = (id) => {
        if (id !== ''){
            const SavedRecord = this.state.AllData;
            const index = SavedRecord.indexOf(this.getRecord(id));
            const Record = SavedRecord[index];
            Record['title'] = this.state.updateEdit[1];
            Record['info'] = this.state.updateEdit[2];
            Record['price'] = this.state.updateEdit[3];
            Record['company'] = this.state.updateEdit[4];
            this.setState({
                AllData: [...this.state.AllData],
                id : "", name : "", info : "", price : "", company : ""
            })
        } 
    }
    render() {
        return (
            <ProductContext.Provider 
                value={{ ...this.state, 
                    onEdit : this.onEdit,
                    updateValue : this.updateValue,
                    onSave : this.onSave,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
