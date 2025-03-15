// BookEdit.jsx
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function BookEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: '', price: '', categoryId: '' });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3004/books/${id}`).then((res) => setForm(res.data));
    axios.get('http://localhost:3004/categories').then((res) => setCategories(res.data));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/books/${id}`, form);
    alert('Book updated successfully!');
    navigate('/books');
  };

  return (
    <div className="container">
      <h1>Edit Book</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={form.price} onChange={handleChange} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Select name="categoryId" value={form.categoryId} onChange={handleChange} required>
            <option value="">Select category...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
}
