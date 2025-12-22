import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

interface Product {
  _id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  stock?: number;
}

export default function AdminMarketplacePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    stock: 0
  });
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
    category: "",
    stock: 0
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState("");
  const token = localStorage.getItem("token");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/products?search=${search}`);
      setProducts(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Marketplace Admin</h1>
        <Button onClick={() => setShowAddModal(true)}>+ Add Product</Button>
      </div>

      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.length > 0 ? (
          products.map((prod) => (
            <Card key={prod._id} className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="font-bold">{prod.name}</h2>
                <p>{prod.description}</p>
                <p>Price: ₹{prod.price}</p>
                <p>Category: {prod.category}</p>
                <p>Stock: {prod.stock}</p>
                {prod.image && <img src={prod.image} alt="Product" className="w-16 h-16 rounded object-cover" />}
                <div className="flex gap-2 mt-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setEditForm({
                        _id: prod._id,
                        name: prod.name || "",
                        description: prod.description || "",
                        price: prod.price || 0,
                        image: prod.image || "",
                        category: prod.category || "",
                        stock: prod.stock || 0
                      });
                      setShowEditModal(true);
                      setEditError("");
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(prod._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No products found.</p>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', padding: '1.5rem', width: '100%', maxWidth: '400px', position: 'relative' }}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => { setShowAddModal(false); setAddError(""); }}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add Product</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setAddLoading(true);
                setAddError("");
                try {
                  await axios.post("http://localhost:5000/api/products", addForm, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowAddModal(false);
                  setAddForm({ name: "", description: "", price: 0, image: "", category: "", stock: 0 });
                  fetchProducts();
                } catch (err) {
                  setAddError("Failed to add product. Please check details and try again.");
                } finally {
                  setAddLoading(false);
                }
              }}
            >
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={addForm.name}
                  onChange={e => setAddForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Description</label>
                <Input
                  value={addForm.description}
                  onChange={e => setAddForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Price</label>
                <Input
                  type="number"
                  value={addForm.price}
                  onChange={e => setAddForm(f => ({ ...f, price: Number(e.target.value) }))}
                  required
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Category</label>
                <Input
                  value={addForm.category}
                  onChange={e => setAddForm(f => ({ ...f, category: e.target.value }))}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Stock</label>
                <Input
                  type="number"
                  value={addForm.stock}
                  onChange={e => setAddForm(f => ({ ...f, stock: Number(e.target.value) }))}
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input
                  value={addForm.image}
                  onChange={e => setAddForm(f => ({ ...f, image: e.target.value }))}
                />
              </div>
              {addError && <div className="text-red-500 text-sm mb-2">{addError}</div>}
              <Button type="submit" disabled={addLoading} className="w-full">
                {addLoading ? "Adding..." : "Add Product"}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', padding: '1.5rem', width: '100%', maxWidth: '400px', position: 'relative' }}>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => { setShowEditModal(false); setEditError(""); }}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Edit Product</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setEditLoading(true);
                setEditError("");
                try {
                  await axios.put(`http://localhost:5000/api/products/${editForm._id}`, editForm, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowEditModal(false);
                  setEditForm({ _id: "", name: "", description: "", price: 0, image: "", category: "", stock: 0 });
                  fetchProducts();
                } catch (err) {
                  setEditError("Failed to update product. Please check details and try again.");
                } finally {
                  setEditLoading(false);
                }
              }}
            >
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={editForm.name}
                  onChange={e => setEditForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Description</label>
                <Input
                  value={editForm.description}
                  onChange={e => setEditForm(f => ({ ...f, description: e.target.value }))}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Price</label>
                <Input
                  type="number"
                  value={editForm.price}
                  onChange={e => setEditForm(f => ({ ...f, price: Number(e.target.value) }))}
                  required
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Category</label>
                <Input
                  value={editForm.category}
                  onChange={e => setEditForm(f => ({ ...f, category: e.target.value }))}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Stock</label>
                <Input
                  type="number"
                  value={editForm.stock}
                  onChange={e => setEditForm(f => ({ ...f, stock: Number(e.target.value) }))}
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input
                  value={editForm.image}
                  onChange={e => setEditForm(f => ({ ...f, image: e.target.value }))}
                />
              </div>
              {editError && <div className="text-red-500 text-sm mb-2">{editError}</div>}
              <Button type="submit" disabled={editLoading} className="w-full">
                {editLoading ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
