import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
interface Doctor {
  _id: string;
  name: string;
  email: string;
  specialization: string;
  experience?: string;
  description?: string;
  image?: string;
}

export default function DoctorPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    email: "",
    specialization: "",
    experience: "",
    description: "",
    image: ""
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState({
    name: "",
    email: "",
    specialization: "",
    experience: "",
    description: "",
    image: ""
  });
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState("");
  const token = localStorage.getItem("token");

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/doctors?search=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDoctors(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setDoctors([]);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [search]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/doctors/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchDoctors();
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Doctor Management</h1>
        <Button onClick={() => setShowAddModal(true)}>+ Add Doctor</Button>
      </div>

      <Input
        placeholder="Search doctors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.length > 0 ? (
          doctors.map((doc) => (
            <Card key={doc._id} className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="font-bold">{doc.name}</h2>
                <p>{doc.specialization}</p>
                <p>{doc.email}</p>
                <div className="flex gap-2 mt-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setEditForm({
                        _id: doc._id,
                        name: doc.name || "",
                        email: doc.email || "",
                        specialization: doc.specialization || "",
                        experience: doc.experience || "",
                        description: doc.description || "",
                        image: doc.image || ""
                      });
                      setShowEditModal(true);
                      setEditError("");
                    }}
                  >
                    Edit
                  </Button>
      {/* Edit Doctor Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => { setShowEditModal(false); setEditError(""); }}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Edit Doctor</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setEditLoading(true);
                setEditError("");
                try {
                  await axios.put(`http://localhost:5000/api/doctors/${editForm._id}`, editForm, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowEditModal(false);
                  setEditForm({ _id: "", name: "", email: "", specialization: "", experience: "", description: "", image: "" });
                  fetchDoctors();
                } catch (err) {
                  setEditError("Failed to update doctor. Please check details and try again.");
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
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  value={editForm.email}
                  onChange={e => setEditForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Specialization</label>
                <Input
                  value={editForm.specialization}
                  onChange={e => setEditForm(f => ({ ...f, specialization: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Experience</label>
                <Input
                  value={editForm.experience}
                  onChange={e => setEditForm(f => ({ ...f, experience: e.target.value }))}
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
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(doc._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No doctors found.</p>
        )}
      </div>

      {/* Add Doctor Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => { setShowAddModal(false); setAddError(""); }}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add Doctor</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setAddLoading(true);
                setAddError("");
                try {
                  await axios.post("http://localhost:5000/api/doctors", addForm, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowAddModal(false);
                  setAddForm({ name: "", email: "", specialization: "", experience: "", description: "", image: "" });
                  fetchDoctors();
                } catch (err) {
                  setAddError("Failed to add doctor. Please check details and try again.");
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
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  value={addForm.email}
                  onChange={e => setAddForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Specialization</label>
                <Input
                  value={addForm.specialization}
                  onChange={e => setAddForm(f => ({ ...f, specialization: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Experience</label>
                <Input
                  value={addForm.experience}
                  onChange={e => setAddForm(f => ({ ...f, experience: e.target.value }))}
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
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <Input
                  value={addForm.image}
                  onChange={e => setAddForm(f => ({ ...f, image: e.target.value }))}
                />
              </div>
              {addError && <div className="text-red-500 text-sm mb-2">{addError}</div>}
              <Button type="submit" disabled={addLoading} className="w-full">
                {addLoading ? "Adding..." : "Add Doctor"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
