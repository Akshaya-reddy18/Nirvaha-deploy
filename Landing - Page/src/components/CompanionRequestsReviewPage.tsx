import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface CompanionRequest {
  _id: string;
  name: string;
  email: string;
  gender: string;
  experience: string;
  availability: string;
  description?: string;
  image?: string;
  status: string;
  reviewedBy?: string;
  reviewedAt?: string;
}

export default function CompanionRequestsReviewPage() {
  const [requests, setRequests] = useState<CompanionRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<CompanionRequest | null>(null);
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const token = localStorage.getItem("token");

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/companion-requests", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setRequests([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleReview = async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/companion-requests/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectedRequest(res.data);
    } catch (err) {
      setSelectedRequest(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async () => {
    if (!selectedRequest) return;
    setActionLoading(true);
    try {
      await axios.post(`http://localhost:5000/api/companion-requests/${selectedRequest._id}/accept`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectedRequest(null);
      fetchRequests();
    } catch (err) {}
    setActionLoading(false);
  };

  const handleReject = async () => {
    if (!selectedRequest) return;
    setActionLoading(true);
    try {
      await axios.post(`http://localhost:5000/api/companion-requests/${selectedRequest._id}/reject`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectedRequest(null);
      fetchRequests();
    } catch (err) {}
    setActionLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Companion Registration Requests</h1>
      {loading ? (
        <p>Loading...</p>
      ) : selectedRequest ? (
        <Card className="shadow-lg max-w-lg mx-auto">
          <CardContent className="p-6">
            <h2 className="font-bold text-lg mb-2">{selectedRequest.name}</h2>
            <p><b>Email:</b> {selectedRequest.email}</p>
            <p><b>Gender:</b> {selectedRequest.gender}</p>
            <p><b>Experience:</b> {selectedRequest.experience}</p>
            <p><b>Availability:</b> {selectedRequest.availability}</p>
            <p><b>Description:</b> {selectedRequest.description}</p>
            {selectedRequest.image && <img src={selectedRequest.image} alt="Companion" className="w-16 h-16 rounded-full object-cover my-2" />}
            <div className="flex gap-4 mt-6">
              <Button onClick={handleAccept} disabled={actionLoading} className="bg-green-600 text-white">Accept</Button>
              <Button onClick={handleReject} disabled={actionLoading} className="bg-red-600 text-white">Reject</Button>
              <Button onClick={() => setSelectedRequest(null)} className="bg-gray-300">Back</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {requests.length > 0 ? (
            requests.map((req) => (
              <Card key={req._id} className="shadow-lg cursor-pointer" onClick={() => handleReview(req._id)}>
                <CardContent className="p-4">
                  <h2 className="font-bold">{req.name}</h2>
                  <p>{req.email}</p>
                  <p>Status: <span className={`font-semibold ${req.status === "pending" ? "text-yellow-600" : req.status === "accepted" ? "text-green-600" : "text-red-600"}`}>{req.status}</span></p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-gray-500">No requests found.</p>
          )}
        </div>
      )}
    </div>
  );
}
