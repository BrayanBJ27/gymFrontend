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
      await axios.post("http://localhost:8081/reservations", {
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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block">Machine Name:</label>
        <input
          type="text"
          value={machineName}
          onChange={(e) => setMachineName(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">User Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">Start Time:</label>
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block">End Time:</label>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border p-1 w-full"
          required
        />
      </div>
      <button type="submit" className="bg-green-500 text-white p-2">
        Add Reservation
      </button>
    </form>
  );
};

export default AddReservation;
