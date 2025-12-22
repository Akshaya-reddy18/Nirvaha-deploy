import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { BACKEND_CONFIG } from "../config/backend";


interface Companion {
  _id: string;
  name: string;
  gender: "male" | "female" | "other";
  specialization: string;
  availability: string;
  description?: string;
  rating?: number;
  image?: string;
  whatsapp?: string;
  location?: string;
}

export default function CompanionPage() {
  // Requests modal state
  const [showRequestsModal, setShowRequestsModal] = useState(false);
  const [requests, setRequests] = useState<any[]>([]);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const [errorRequests, setErrorRequests] = useState("");
  const [reviewRequest, setReviewRequest] = useState<any | null>(null);
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewError, setReviewError] = useState("");

  // Fetch companion registration requests
  const fetchRequests = async () => {
    setLoadingRequests(true);
    setErrorRequests("");
    try {
      const res = await axios.get(`${BACKEND_CONFIG.API_BASE_URL}/api/companion-requests`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setErrorRequests("Failed to fetch requests.");
    } finally {
      setLoadingRequests(false);
    }
  };
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState({
    name: "",
    gender: "male",
    specialization: "",
    availability: "",
    description: "",
    image: "",
    whatsapp: "",
    location: ""
  });
  const [addLoading, setAddLoading] = useState(false);
  const [addError, setAddError] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    _id: "",
    name: "",
    gender: "male",
    specialization: "",
    availability: "",
    description: "",
    image: "",
    whatsapp: "",
    location: ""
  });
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState("");
  const token = localStorage.getItem("token");

  const fetchCompanions = async () => {
    try {
      const res = await axios.get(`${BACKEND_CONFIG.API_BASE_URL}/api/companions?search=${search}`);
      setCompanions(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching companions:", error);
      setCompanions([]);
    }
  };

  useEffect(() => {
    fetchCompanions();
  }, [search]);

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`${BACKEND_CONFIG.API_BASE_URL}/api/companions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCompanions();
    } catch (error) {
      console.error("Error deleting companion:", error);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Companion Management</h1>
        <div className="flex gap-3 w-full sm:w-auto">
          <Button 
            onClick={() => setShowAddModal(true)}
            className="flex-1 sm:flex-none"
          >
            ➕ Add Companion
          </Button>
          <Button 
            variant="outline" 
            onClick={() => { setShowRequestsModal(true); fetchRequests(); }}
            className="flex-1 sm:flex-none"
          >
            📋 Requests
          </Button>
        </div>
      </div>
    

      <Input
        placeholder="Search companions..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companions.length > 0 ? (
          companions.map((comp) => (
            <div key={comp._id} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 border border-teal-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{comp.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{comp.name}</h3>
                  <p className="text-teal-600 font-semibold text-sm mb-2">{comp.gender}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <svg className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
                    <span className="text-sm font-medium text-yellow-700">{comp.rating || ''}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2"/></svg>
                    <span>{comp.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2"/></svg>
                    <span>Specialization: {comp.specialization}</span>
                  </div>
                  {comp.location && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 10-5.657 5.657l4.243 4.243a8 8 0 0011.314-11.314l-4.243-4.243a4 4 0 00-5.657 5.657l4.243 4.243z"/></svg>
                      <span>{comp.location}</span>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{comp.description}</p>
              </div>
              <div className="flex gap-3 mt-4">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setEditForm({
                      _id: comp._id,
                      name: comp.name || "",
                      gender: comp.gender || "male",
                      specialization: comp.specialization || "",
                      availability: comp.availability || "",
                      description: comp.description || "",
                      image: comp.image || "",
                      whatsapp: comp.whatsapp || "",
                      location: comp.location || ""
                    });
                    setShowEditModal(true);
                    setEditError("");
                  }}
                  className="flex-1"
                >
                  ✏️ Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(comp._id)}
                  className="flex-1"
                >
                  🗑️ Delete
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No companions found.</p>
        )}
      </div>

      {/* Add Companion Modal */}
      {showAddModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', padding: '1.5rem', width: '100%', maxWidth: '400px', position: 'relative' }}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              onClick={() => { setShowAddModal(false); setAddError(""); }}
            >
              ✕
            </Button>
            <h2 className="text-lg font-bold mb-4">Add Companion</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setAddLoading(true);
                setAddError("");
                try {
                  await axios.post(`${BACKEND_CONFIG.API_BASE_URL}/api/companions`, addForm, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowAddModal(false);
                  setAddForm({ name: "", gender: "male", specialization: "", availability: "", description: "", image: "", whatsapp: "", location: "" });
                  fetchCompanions();
                } catch (err) {
                  setAddError("Failed to add companion. Please check details and try again.");
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
                <label className="block text-sm font-medium mb-1">Whatsapp</label>
                <Input
                  value={addForm.whatsapp}
                  onChange={e => setAddForm(f => ({ ...f, whatsapp: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  value={addForm.gender}
                  onChange={e => setAddForm(f => ({ ...f, gender: e.target.value as Companion["gender"] }))}
                  className="w-full border rounded px-2 py-1"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                <label className="block text-sm font-medium mb-1">Availability</label>
                <Input
                  value={addForm.availability}
                  onChange={e => setAddForm(f => ({ ...f, availability: e.target.value }))}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1">Location</label>
                <Input
                  value={addForm.location}
                  onChange={e => setAddForm(f => ({ ...f, location: e.target.value }))}
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
                <label className="block text-sm font-medium mb-1">Image URL or Emoji</label>
                <Input
                  value={addForm.image}
                  onChange={e => setAddForm(f => ({ ...f, image: e.target.value }))}
                />
              </div>
              {addError && <div className="text-red-500 text-sm mb-2">{addError}</div>}
              <Button type="submit" disabled={addLoading} className="w-full mt-4">
                {addLoading ? "⏳ Adding..." : "➕ Add Companion"}
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Edit Companion Modal */}
      {/* Requests Modal */}
      {showRequestsModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', padding: '1.5rem', width: '100%', maxWidth: '500px', position: 'relative' }}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              onClick={() => setShowRequestsModal(false)}
            >
              ✕
            </Button>
            <h2 className="text-lg font-bold mb-4">Companion Registration Requests</h2>
            {loadingRequests ? (
              <p>Loading requests...</p>
            ) : errorRequests ? (
              <p className="text-red-500">{errorRequests}</p>
            ) : requests.length === 0 ? (
              <p className="text-gray-500">No requests found.</p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {requests.map((req, idx) => (
                  <div key={req._id || idx} className="border rounded-lg p-4 bg-gray-50 flex flex-col gap-2">
                    <div className="font-semibold text-purple-700">{req.name}</div>
                    <div className="text-sm text-gray-600">Email: {req.email}</div>
                    <div className="text-sm">Gender: {req.gender}</div>
                    <div className="text-sm">Specialization: {req.specialization}</div>
                    <div className="text-sm">Availability: {req.availability}</div>
                    <div className="text-sm">Description: {req.description}</div>
                    <div className="text-sm">WhatsApp: {req.whatsapp}</div>
                    <div className="text-xs text-gray-400 mt-1">Request ID: {req._id}</div>
                    <Button 
                      className="mt-3 w-full"
                      onClick={async () => {
                        setReviewLoading(true);
                        setReviewError("");
                        try {
                          const res = await axios.get(`${BACKEND_CONFIG.API_BASE_URL}/api/companion-requests/${req._id}`, {
                            headers: { Authorization: `Bearer ${token}` },
                          });
                          setReviewRequest(res.data);
                        } catch (err) {
                          setReviewError("Failed to load request details.");
                        } finally {
                          setReviewLoading(false);
                        }
                      }}
                      disabled={reviewLoading}
                    >
                      {reviewLoading ? "Loading..." : "👁️ Review"}
                    </Button>
                  </div>
                ))}
      {/* Review Request Modal */}
      {reviewRequest && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', padding: '2rem', width: '100%', maxWidth: '500px', position: 'relative' }}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              onClick={() => setReviewRequest(null)}
            >
              ✕
            </Button>
            <h2 className="text-lg font-bold mb-4">Review Companion Request</h2>
            <div className="space-y-2 mb-4">
              <div><span className="font-semibold">Name:</span> {reviewRequest.name}</div>
              <div><span className="font-semibold">Email:</span> {reviewRequest.email}</div>
              <div><span className="font-semibold">Gender:</span> {reviewRequest.gender}</div>
              <div><span className="font-semibold">Specialization:</span> {reviewRequest.specialization}</div>
              <div><span className="font-semibold">Availability:</span> {reviewRequest.availability}</div>
              <div><span className="font-semibold">Description:</span> {reviewRequest.description}</div>
              <div><span className="font-semibold">Status:</span> {reviewRequest.status}</div>
              <div><span className="font-semibold">Request ID:</span> {reviewRequest._id}</div>
            </div>
            {reviewError && <div className="text-red-500 mb-2">{reviewError}</div>}
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-green-600 hover:bg-green-700"
                disabled={reviewLoading}
                onClick={async () => {
                  setReviewLoading(true);
                  setReviewError("");
                  try {
                    await axios.post(`${BACKEND_CONFIG.API_BASE_URL}/api/companion-requests/${reviewRequest._id}/accept`, {}, {
                      headers: { Authorization: `Bearer ${token}` },
                    });
                    setReviewRequest(null);
                    fetchRequests();
                    fetchCompanions();
                  } catch (err) {
                    setReviewError("Failed to accept request.");
                  } finally {
                    setReviewLoading(false);
                  }
                }}
              >
                ✅ Accept
              </Button>
              <Button
                variant="destructive"
                className="flex-1"
                disabled={reviewLoading}
                onClick={async () => {
                  setReviewLoading(true);
                  setReviewError("");
                  try {
                    await axios.post(`${BACKEND_CONFIG.API_BASE_URL}/api/companion-requests/${reviewRequest._id}/reject`, {}, {
                      headers: { Authorization: `Bearer ${token}` },
                    });
                    setReviewRequest(null);
                    fetchRequests();
                  } catch (err) {
                    setReviewError("Failed to reject request.");
                  } finally {
                    setReviewLoading(false);
                  }
                }}
              >
                ❌ Reject
              </Button>
            </div>
          </div>
        </div>
      )}
              </div>
            )}
          </div>
        </div>
      )}
      {showEditModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: 'white', borderRadius: '0.75rem', boxShadow: '0 2px 16px rgba(0,0,0,0.15)', padding: '1.5rem', width: '100%', maxWidth: '400px', position: 'relative' }}>
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-8 w-8 p-0 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              onClick={() => { setShowEditModal(false); setEditError(""); }}
            >
              ✕
            </Button>
            <h2 className="text-lg font-bold mb-4">Edit Companion</h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setEditLoading(true);
                setEditError("");
                // Ensure all required fields are strings and trimmed
                const payload = {
                  name: String(editForm.name).trim(),
                  gender: String(editForm.gender).trim(),
                  specialization: String(editForm.specialization).trim(),
                  availability: String(editForm.availability).trim(),
                  description: editForm.description ? String(editForm.description).trim() : "",
                  image: editForm.image ? String(editForm.image).trim() : "",
                };
                try {
                  await axios.put(`${BACKEND_CONFIG.API_BASE_URL}/api/companions/${editForm._id}`, payload, {
                    headers: { Authorization: `Bearer ${token}` },
                  });
                  setShowEditModal(false);
                  setEditForm({ _id: "", name: "", gender: "male", specialization: "", availability: "", description: "", image: "", whatsapp: "", location: "" });
                  fetchCompanions();
                } catch (err) {
                  setEditError("Failed to update companion. Please check details and try again.");
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
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  value={editForm.gender}
                  onChange={e => setEditForm(f => ({ ...f, gender: e.target.value as Companion["gender"] }))}
                  className="w-full border rounded px-2 py-1"
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
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
                <label className="block text-sm font-medium mb-1">Availability</label>
                <Input
                  value={editForm.availability}
                  onChange={e => setEditForm(f => ({ ...f, availability: e.target.value }))}
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
                <label className="block text-sm font-medium mb-1">Image URL or Emoji</label>
                <Input
                  value={editForm.image}
                  onChange={e => setEditForm(f => ({ ...f, image: e.target.value }))}
                />
              </div>
              {editError && <div className="text-red-500 text-sm mb-2">{editError}</div>}
              <Button type="submit" disabled={editLoading} className="w-full mt-4">
                {editLoading ? "⏳ Saving..." : "💾 Save Changes"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
