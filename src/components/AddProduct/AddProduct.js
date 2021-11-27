import React, { useState } from 'react';
import { Form, Button, FloatingLabel, Card } from 'react-bootstrap';
import axios from "axios";


const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [imageURL, setImageURL] = useState(null);

  const handleBlur = (e) => {
    const newData = { ...product };
    newData[e.target.name] = e.target.value;
    setProduct(newData);
    console.log(newData);
  };

  const handleSubmit = (e) => {
    const formData = {
      category: product.category,
      name: product.name,
      lowestBid: product.lowestBid,
      expired: product.expired,
      details: product.details,
      imageURL: imageURL,
    };

    fetch("https://serene-savannah-96392.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          alert("Product Added successfully!");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    e.preventDefault();
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "b86c0ab7beeb42c384775d3b62a113c0");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="w-75 mx-auto mt-3">
      <h1 className="text-center">Add Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Category</Form.Label>
          <Form.Control type="text" placeholder="Product Category" name="category" onBlur={handleBlur} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Product Name" name="name" onBlur={handleBlur} />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Choose an image file</Form.Label>
          <Form.Control type="file" name="image"
            onChange={handleImageUpload} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Lowest bid price</Form.Label>
          <Form.Control type="digit" placeholder="Lowest bid" name="lowestBid" onBlur={handleBlur} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Bid expiry date</Form.Label>
          <Form.Control type="date" placeholder="Bid expired" name="expired" onBlur={handleBlur} />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="Products details">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
            name="details"
            onBlur={handleBlur}
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