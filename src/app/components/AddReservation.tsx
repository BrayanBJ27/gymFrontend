"use client";

import React, { useState } from "react";
import axios from "axios";

interface AddReservationProps {
  onAddReservation: () => void;
}

const AddReservation: React.FC<AddReservationProps> = ({ onAddReservation }) => {
  const [machineName, setMachineName] = useState("");
  const [userName, setUserName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://3.142.244.153:8088/reservations", {
        machineName,
        userName,
        startTime,
        endTime,
      });
      onAddReservation();
      setMachineName("");
      setUserName("");
      setStartTime("");
      setEndTime("");
    } catch (error) {
      console.error("Error adding reservation:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <div className="form-group">
        <label>Machine Name:</label>
        <input
          type="text"
          value={machineName}
          onChange={(e) => setMachineName(e.target.value)}
          placeholder="Machine Name"
          className="border p-2"
          required
        />
      </div>
      <div className="form-group">
        <label>User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
          className="border p-2"
          required
        />
      </div>
      <div className="form-group">
        <label>Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Start time"
          className="border p-2"
          required
        />
      </div>
      <div className="form-group">
        <label>End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="End time"
          className="border p-2"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-1">
        Add Reservation
      </button>
    </form>
  );
};

export default AddReservation;
