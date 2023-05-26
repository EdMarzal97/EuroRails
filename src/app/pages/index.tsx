import { useState, useEffect } from 'react';

type Schedule = {
  id: number;
  trainNumber: string;
  departureTime: string;
  arrivalTime: string;
  station: string;
};

const API_URL = 'https://example.com/api/trains'; // Replace with the actual API URL

const HomePage: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setSchedules(data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Train Schedules</h1>
      <ul className="grid gap-4">
        {schedules.map((schedule) => (
          <li key={schedule.id} className="bg-white p-4 shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xl font-bold">{schedule.trainNumber}</span>
              <span>{schedule.station}</span>
            </div>
            <div>
              <span className="mr-2">Departure: {schedule.departureTime}</span>
              <span>Arrival: {schedule.arrivalTime}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
