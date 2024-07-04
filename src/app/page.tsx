"use client";

import React, { useState, useEffect } from "react";
import AddReservation from "./components/AddReservation";
import ReservationList from "./components/ReservationList";
import axios from "axios";

interface Reservation {
  id: number;
  machineName: string;
  userName: string;
  startTime: string;
  endTime: string;
}

const Home: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const fetchReservations = async () => {
    try {
      const response = await axios.get("http://localhost:8083/reservations");
      setReservations(response.data);
    } catch (error) {
      console.error("Error fetching reservations:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
      <br/>
        <h1 className="text-3xl font-bold">Gym Machine Reservation Management</h1>
      </div>
      <br/>
      <AddReservation onAddReservation={fetchReservations} />
      <ReservationList reservations={reservations} onUpdateReservation={fetchReservations} />
    </div>
  );
};

export default Home;
