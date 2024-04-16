import React, {Component} from 'react';
import {ProductConsumer} from "../Context";
import {Table, Button} from "react-bootstrap";

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <h3>CRUD Operations</h3>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <Table size= {'sm'} variant = {'dark'} striped border={2} hover>
                                <tbody>
                                <tr>
                                    <th>Title</th>
                                    <th>Information</th>
                                    <th>Price</th>
                                    <th>Company</th>
                                    <th>Actions</th>
                                </tr>
                                {value.AllData.map((product, index) => {
                                    return (
                                        <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                                            <td>{product.name}</td>
                                            <td>{product.info}</td>
                                            <td>{product.price}</td>
                                            <td>{product.company}</td>
                                            <td><Button
                                                size="sm"
                                                variant="primary"
                                                color={'yellow'}
                                                onClick={() => { value.onEdit(product.id) }}
                                            >
                                                Edit
                                            </Button> | <Button
                                                size="sm"
                                                variant="danger"
                                                onClick={() => { value.onDelete(product.id) }}
                                            >
                                                Delete
                                            </Button> </td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </Table>
                        )
                    }}
                </ProductConsumer>
            </div>
        );
    }
}

