import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

interface Hr {
  _id: string;
  name: string;
  email: string;
  department: string;
  experience?: string;
  location?: string;
  phone?: string;
  image?: string;
}

export default function AdminHRPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState<Hr>({
    _id: "",
    name: "",
    email: "",
    department: "",
    experience: "",
    location: "",
    phone: "",
    image: ""
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState("");
  const [hrs, setHrs] = useState<Hr[]>([]);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState<Omit<Hr, "_id">>({
    name: "",
    email: "",
    department: "",
    experience: "",
    location: "",
    phone: "",
    image: ""
  });
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState("");
  const token = localStorage.getItem("token");

  const fetchHrs = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/hr?search=${search}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setHrs(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching HRs:", error);
      setHrs([]);
    }
  };

  useEffect(() => {
    fetchHrs();
  }, [search]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/hr/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchHrs();
    } catch (error) {
      console.error("Error deleting HR:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">HR Management</h1>
        <Button onClick={() => setShowAddModal(true)}>+ Add HR</Button>
      </div>

      <Input
        placeholder="Search HRs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hrs.length > 0 ? (
          hrs.map((hr) => (
            <Card key={hr._id} className="shadow-lg">
              <CardContent className="p-4">
                <h2 className="font-bold">{hr.name}</h2>
                <p>{hr.department}</p>
                <p>{hr.email}</p>
                <p>{hr.phone}</p>
                <div className="flex gap-2 mt-2">
                  <Button
                    size="sm"
                    onClick={() => {
                      setEditForm({
                        _id: hr._id,
                        name: hr.name || "",
                        email: hr.email || "",
                        department: hr.department || "",
                        experience: hr.experience || "",
                        location: hr.location || "",
                        phone: hr.phone || "",
                        image: hr.image || ""
                      });
                      setShowEditModal(true);
                      setEditError("");
                    }}
                  >
                    Edit
                  </Button>

                  {/* Edit HR Modal */}
                  {showEditModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center item-start pt-20 z-50">
                      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md ">
                        <button
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                          onClick={() => {
                            setShowEditModal(false);
                            setEditError("");
                          }}
                        >
                          &times;
                        </button>
                        <h2 className="text-lg font-bold mb-4">Edit HR</h2>
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            setEditLoading(true);
                            setEditError("");
                            try {
                              await axios.put(
                                `http://localhost:5000/api/hr/${editForm._id}`,
                                editForm,
                                {
                                  headers: { Authorization: `Bearer ${token}` },
                                }
                              );
                              setShowEditModal(false);
                              setEditForm({
                                _id: "",
                                name: "",
                                email: "",
                                department: "",
                                experience: "",
                                location: "",
                                phone: "",
                                image: ""
                              });
                              fetchHrs();
                            } catch (err) {
                              setEditError(
                                "Failed to update HR. Please check details and try again."
                              );
                            } finally {
                              setEditLoading(false);
                            }
                          }}
                        >
                          {[
                            "name",
                            "email",
                            "department",
                            "experience",
                            "location",
                            "phone",
                            "image",
                          ].map((field) => (
                            <div className="mb-3" key={field}>
                              <label className="block text-sm font-medium mb-1">
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                              </label>
                              <Input
                                type={field === "email" ? "email" : "text"}
                                value={(editForm as any)[field]}
                                onChange={(e) =>
                                  setEditForm((f) => ({
                                    ...f,
                                    [field]: e.target.value,
                                  }))
                                }
                                required={["name", "email", "department"].includes(field)}
                              />
                            </div>
                          ))}
                          {editError && (
                            <div className="text-red-500 text-sm mb-2">
                              {editError}
                            </div>
                          )}
                          <Button
                            type="submit"
                            disabled={editLoading}
                            className="w-full"
                          >
                            {editLoading ? "Saving..." : "Save Changes"}
                          </Button>
                        </form>
                      </div>
                    </div>
                  )}

                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(hr._id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-gray-500">No HRs found.</p>
        )}
      </div>

      {/* Add HR Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center item-start pt-80 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md ">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => {
                setShowAddModal(false);
                setAddError("");
              }}
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Add HR</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setAddLoading(true);
                setAddError("");
                try {
                  await axios.post("http://localhost:5000/api/hr", addForm, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowAddModal(false);
                  setAddForm({
                    name: "",
                    email: "",
                    department: "",
                    experience: "",
                    location: "",
                    phone: "",
                    image: ""
                  });
                  fetchHrs();
                } catch (err) {
                  setAddError(
                    "Failed to add HR. Please check details and try again."
                  );
                } finally {
                  setAddLoading(false);
                }
              }}
            >
              {[
                "name",
                "email",
                "department",
                "experience",
                "location",
                "phone",
                "image",
              ].map((field) => (
                <div className="mb-3" key={field}>
                  <label className="block text-sm font-medium mb-1">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <Input
                    type={field === "email" ? "email" : "text"}
                    value={(addForm as any)[field]}
                    onChange={(e) =>
                      setAddForm((f) => ({ ...f, [field]: e.target.value }))
                    }
                    required={["name", "email", "department"].includes(field)}
                  />
                </div>
              ))}
              {addError && (
                <div className="text-red-500 text-sm mb-2">{addError}</div>
              )}
              <Button type="submit" disabled={addLoading} className="w-full">
                {addLoading ? "Adding..." : "Add HR"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
