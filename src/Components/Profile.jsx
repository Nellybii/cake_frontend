import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";

const UserProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    description: "",
    imageUrl: "", 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    if (formData.imageUrl) {
      formDataToSend.append("imageUrl", formData.imageUrl);
    } else {
      formDataToSend.append("file", formData.selectedFile);
    }

    formDataToSend.append("name", formData.name);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("description", formData.description);

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User profile data submitted successfully:", data);
        
      } else {
        throw new Error("Failed to submit user profile data");
      }
    } catch (error) {
      console.error("Error:", error.message);
      
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, selectedFile: file });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <Card style={{ width: "18rem" }}>
        <form onSubmit={handleSubmit}>
          <Card.Img
            variant="top"
            src={
              formData.imageUrl
                ? formData.imageUrl
                : formData.selectedFile
                ? URL.createObjectURL(formData.selectedFile)
                : "holder.js/10px18"
            }
            style={{ maxWidth: "100%", maxHeight: "200px", objectFit: "cover" }}
            className="rounded"
          />
          <div>
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              placeholder="Enter Image URL"
              value={formData.imageUrl}
              onChange={(e) =>
                setFormData({ ...formData, imageUrl: e.target.value })
              }
            />
          </div>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </Card>
    </Container>
  );
};

export default UserProfileForm;
