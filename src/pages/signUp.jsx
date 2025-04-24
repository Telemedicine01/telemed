import React, { useState } from "react";
import SpecialtiesInput from "../components/doctorsSpecialties";

function SignUp() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [gender, setGender] = useState("");
  const [bloodtype, setBloodType] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [emergencyContactName, setemergencyContactName] = useState("");
  const [emergencyContactRelationship, setemergencyContactRelationship] =
    useState("");
  const [emergencyContactNumber, setemergencyContactNumber] = useState("");
  const [primaryPhysician, setPrimaryPhysician] = useState("");
  const [allergies, setAllergies] = useState("");
  const [currentMedication, setCurrentMedication] = useState("");
  const [chronicConditions, setChronicConditions] = useState("");
  const [primaryInsurance, setPrimaryInsurance] = useState("");
  const [insuranceId, setInsuranceId] = useState("");
  const [specialties, setSpecialties] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
  };

  //   if (
  //     !name ||
  //     !email ||
  //     !password ||
  //     !confirmPassword ||
  //     !role ||
  //     !dateofbirth ||
  //     !gender ||
  //     !bloodtype ||
  //     !phoneNumber ||
  //     !address ||
  //     !emergencyContactName ||
  //     !emergencyContactNumber ||
  //     !emergencyContactRelationship ||
  //     !primaryPhysician ||
  //     !allergies ||
  //     !currentMedication ||
  //     !chronicConditions ||
  //     !primaryInsurance ||
  //     !insuranceId
  //   ) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match.");
  //     return;
  //   }

  //   // Replace this with actual sign-up logic (API call, Firebase, etc.)
  //   console.log("Creating account with:", { name, email, password, role });
  // };

  const handleNextStep = () => {
    if (step === 1) {
      if (!email || !password || !confirmPassword) {
        alert("Please complete Step 1");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
    }

    // Add similar validation for each step as needed
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50 px-4">
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div>
        {" "}
        {step === 1 && (
          <div className="mb-4" id="step1">
            <h2 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Create Account
            </h2>

            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
            />

            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter your password"
              required
            />

            <label className="block text-teal-700 font-medium mb-1 mt-4 flex items-center gap-2">
              Select Role
            </label>
            <select
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Choose your role</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>
        )}
        {step === 2 && (
          <div className="mb-4" id="step2">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Personal Information ({role === "doctor" ? "Doctor" : "Patient"})
            </h3>

            {/* Shared Fields */}
            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />

            {role === "patient" && (
              <>
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Date of Birth
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="date"
                  value={dateofbirth}
                  onChange={(e) => setDateofbirth(e.target.value)}
                  required
                />

                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Gender
                </label>
                <select
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select your Gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>

                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Blood Type
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={bloodtype}
                  onChange={(e) => setBloodType(e.target.value)}
                  placeholder="Your Blood Type"
                />
              </>
            )}

            {role === "doctor" && (
              <>
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Medical License Number
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  placeholder="Enter your license number"
                />
              </>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="mb-4" id="step3">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Contact Information
            </h3>
            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              placeholder="Your Number"
              required
            />{" "}
            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Address
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Your Address"
              required
            />{" "}
            {role === "doctor" && (
              <>
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Office Number
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  placeholder="Enter your office number"
                />
              </>
            )}
          </div>
        )}
        {step === 4 && (
          <div className="mb-4" id="step3">
            {role === "patient" && (
              <>
                <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
                  Emergency Contact
                </h3>
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Name
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={emergencyContactName}
                  onChange={(e) => setemergencyContactName(e.target.value)}
                  placeholder="Your emergency contact"
                  required
                />{" "}
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Relationship
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={emergencyContactRelationship}
                  onChange={(e) =>
                    setemergencyContactRelationship(e.target.value)
                  }
                  placeholder="relationship"
                  required
                />{" "}
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Phone Number
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={emergencyContactNumber}
                  onChange={(e) => setemergencyContactNumber(e.target.value)}
                  placeholder="Emergency Contact Number"
                  required
                />
              </>
            )}
            {role === "doctor" && (
              <>
                <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
                  Professional Profile
                </h3>
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Professional Title
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  placeholder="Enter your office number"
                />
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Bio
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  placeholder="Enter your office number"
                />

                <SpecialtiesInput
                  specialties={specialties}
                  setSpecialties={setSpecialties}
                />
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Availability
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  placeholder="Enter your Available hours"
                />
              </>
            )}
          </div>
        )}
        {step === 5 && (
          <div className="mb-4" id="step5">
            {role === "patient" && (
              <>
                <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
                  Medical Information
                </h3>
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Primary Care Physician
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={primaryPhysician}
                  onChange={(e) => setPrimaryPhysician(e.target.value)}
                  placeholder="Your Primary Care Physician"
                  required
                />{" "}
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Allergies
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  placeholder="Allergies"
                  required
                />{" "}
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Current Medication
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={currentMedication}
                  onChange={(e) => setCurrentMedication(e.target.value)}
                  placeholder="Your Current Medication"
                  required
                />
                <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Chronic Conditions
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={chronicConditions}
                  onChange={(e) => setChronicConditions(e.target.value)}
                  placeholder="Your chronic conditions"
                  required
                />
              </>
            )}
          </div>
        )}
        {step === 6 && (
          <div className="mb-4" id="step6">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Insurance Information
            </h3>
            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Primary Insurance
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              value={primaryInsurance}
              onChange={(e) => setPrimaryInsurance(e.target.value)}
              placeholder="Your primary Insurance"
              required
            />{" "}
            <label className="block text-teal-700 font-medium mb-1 flex items-center gap-2">
              Insurance ID
            </label>
            <input
              className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              type="text"
              value={insuranceId}
              onChange={(e) => setInsuranceId(e.target.value)}
              placeholder="relationship"
              required
            />{" "}
          </div>
        )}
        {!(step === 4 && role === "doctor") && (
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={handlePreviousStep}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded"
              >
                Back
              </button>
            )}
            {step < 6 && (
              <button
                onClick={handleNextStep}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded"
              >
                Next
              </button>
            )}
            {step === 6 && (
              <button
                type="submit"
                className="px-4 py-2 bg-teal-600 text-white rounded"
              >
                Sign Up
              </button>
            )}
          </div>
        )}
        {step === 4 && role === "doctor" && (
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousStep}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
