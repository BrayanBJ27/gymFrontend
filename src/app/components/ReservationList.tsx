"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

interface Reservation {
  id: number;
  machineName: string;
  userName: string;
  startTime: string | null;
  endTime: string | null;
}

interface ReservationListProps {
  reservations: Reservation[];
  onUpdateReservation: () => void;
}

const ReservationList: React.FC<ReservationListProps> = ({ reservations, onUpdateReservation }) => {
  const [editingReservation, setEditingReservation] = useState<Reservation | null>(null);
  const [newMachineName, setNewMachineName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newStartTime, setNewStartTime] = useState<string | null>(null);
  const [newEndTime, setNewEndTime] = useState<string | null>(null);

  const handleEdit = (reservation: Reservation) => {
    setEditingReservation(reservation);
    setNewMachineName(reservation.machineName);
    setNewUserName(reservation.userName);
    setNewStartTime(reservation.startTime ? reservation.startTime.slice(0, 16) : null);
    setNewEndTime(reservation.endTime ? reservation.endTime.slice(0, 16) : null);
  };

  const handleSave = async (reservation: Reservation) => {
    try {
      await axios.put(`http://localhost:8090/reservations/${reservation.id}`, {
        machineName: newMachineName,
        userName: newUserName,
        startTime: newStartTime,
        endTime: newEndTime,
      });
      setEditingReservation(null);
      onUpdateReservation();
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  return (
    <div>
      <br/>
      <div className="flex justify-center">
        <h2 className="text-2xl font-bold mb-4">Reservations</h2>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border py-2">Machine Name</th>
            <th className="border py-2">User Name</th>
            <th className="border py-2">Start Time</th>
            <th className="border py-2">End Time</th>
            <th className=" border py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="border px-4 py-2">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="text"
                    value={newMachineName}
                    onChange={(e) => setNewMachineName(e.target.value)}
                    className="border p-2"
                  />
                ) : (
                  reservation.machineName
                )}
              </td>
              <td className="border px-4 py-2">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="border p-2"
                  />
                ) : (
                  reservation.userName
                )}
              </td>
              <td className="border px-4 py-2">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="datetime-local"
                    value={newStartTime || ""}
                    onChange={(e) => setNewStartTime(e.target.value)}
                    className="border p-2"
                  />
                ) : (
                  reservation.startTime ? new Date(reservation.startTime).toLocaleString() : "N/A"
                )}
              </td>
              <td className="border px-4 py-2">
                {editingReservation?.id === reservation.id ? (
                  <input
                    type="datetime-local"
                    value={newEndTime || ""}
                    onChange={(e) => setNewEndTime(e.target.value)}
                    className="border p-2"
                  />
                ) : (
                  reservation.endTime ? new Date(reservation.endTime).toLocaleString() : "N/A"
                )}
              </td>
              <td className="border px-4 py-2">
                {editingReservation?.id === reservation.id ? (
                  <button
                    onClick={() => handleSave(reservation)}
                    className="bg-blue-500 text-white p-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(reservation)}
                    className="bg-yellow-500 text-white p-2"
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
