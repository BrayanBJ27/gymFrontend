import React from "react";

interface Reservation {
  id: number;
  machineName: string;
  userName: string;
  startTime: string;
  endTime: string;
}

interface ReservationListProps {
  reservations: Reservation[];
  onUpdateReservation: () => void;
}

const ReservationList: React.FC<ReservationListProps> = ({ reservations, onUpdateReservation }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id} className="mb-2 p-2 border">
            <p>Machine Name: {reservation.machineName}</p>
            <p>User Name: {reservation.userName}</p>
            <p>Start Time: {new Date(reservation.startTime).toLocaleString()}</p>
            <p>End Time: {new Date(reservation.endTime).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
