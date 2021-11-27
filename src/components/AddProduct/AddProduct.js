import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';

const AddProduct = () => {
    return (
       <div className="w-75 mx-auto mt-3">
           <h1 className="text-center">Add Product</h1>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Product Category</Form.Label>
                <Form.Control type="text" placeholder="Product Category" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Product Name" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lowest bid price</Form.Label>
                <Form.Control type="digit" placeholder="Lowest bid" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Bid expiry date</Form.Label>
                <Form.Control type="date" placeholder="Bid expired" />
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Products details">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>

            <br />

            <div className="text-center">
                <Button className="px-5 py-2" variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
       </div>
    );
};

export default AddProduct;