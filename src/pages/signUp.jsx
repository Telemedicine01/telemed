import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpecialtiesInput from "../components/doctorsSpecialties";
import logo from "../assets/images/logo.png";

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
  const [medicalLicense, setMedicalLicense] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");
  const [professionalTitle, setProfessionalTitle] = useState("");
  const [bio, setBio] = useState("");
  const [availability, setAvailability] = useState("");
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step === 1) {
      if (!email || !password || !confirmPassword || !role) {
        setError("Please complete all fields in Step 1");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }
    setError("");
    setStep((prev) => prev + 1);
  };

  const handlePreviousStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-teal-50 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
        {/* Logo at the top linking to home */}
        <div className="flex justify-center mb-6">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-16 cursor-pointer" 
            onClick={() => navigate("/")}
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}

        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4, 5, 6].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber ? "bg-teal-600 text-white" : "bg-gray-200"
                }`}
              >
                {stepNumber}
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-600">
            Step {step} of {role === "doctor" ? 4 : 6}
          </div>
        </div>

        {/* Form steps */}
        {step === 1 && (
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Create Account
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  I am a:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`p-4 border rounded-lg flex items-center justify-center ${
                      role === "patient"
                        ? "border-teal-600 bg-teal-50 text-teal-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setRole("patient")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Patient
                  </button>
                  <button
                    type="button"
                    className={`p-4 border rounded-lg flex items-center justify-center ${
                      role === "doctor"
                        ? "border-teal-600 bg-teal-50 text-teal-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setRole("doctor")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Doctor
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 - Personal Information */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required
              />
            </div>

            {role === "patient" && (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Date of Birth
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="date"
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-teal-700 font-medium mb-2">
                    Gender
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-teal-700 font-medium mb-2">
                    Blood Type
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={bloodtype}
                    onChange={(e) => setBloodType(e.target.value)}
                  >
                    <option value="">Select blood type</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
              </>
            )}

            {role === "doctor" && (
              <>
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
            <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
            <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
                  Professional Title
                </label>
                <input
                  className="w-full px-3 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  placeholder="Enter your office number"
                />
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
                <label className="text-teal-700 font-medium mb-1 flex items-center gap-2">
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
            <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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
            <label className=" text-teal-700 font-medium mb-1 flex items-center gap-2">
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

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={handlePreviousStep}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded transition duration-200"
              type="button"
            >
              Back
            </button>
          ) : (
            <div></div> // Empty div to maintain space
          )}

          {step < (role === "doctor" ? 4 : 6) ? (
            <button
              onClick={handleNextStep}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition duration-200"
              type="button"
            >
              Next
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition duration-200"
              type="submit"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;