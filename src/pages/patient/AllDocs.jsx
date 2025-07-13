import React from "react";
import { User, Search, Briefcase, Award, Heart, Star } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

const AllDocs = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://telemedicine-api-09u5.onrender.com/doctors"
        );
        const data = await response.json();
        setDoctors(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Our Medical Team</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center space-x-4">
                <img
                  src={doctor.image || "/api/placeholder/150/150"}
                  alt={doctor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-bold">{doctor.name}</h2>
                  <p className="text-gray-500">{doctor.specialty}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < doctor.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllDocs;
