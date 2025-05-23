import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  const [emergencyContactRelationship, setemergencyContactRelationship] = useState("");
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Basic validation
      if (!email || !password || !confirmPassword || !role) {
        throw new Error("Please complete all required fields");
      }
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      let userData = {
        name,
        email,
        password,
        role,
        phoneNumber,
        address
      };

      if (role === "patient") {
        userData = {
          ...userData,
          dateOfBirth: dateofbirth,
          gender,
          bloodType: bloodtype,
          emergencyContact: {
            name: emergencyContactName,
            relationship: emergencyContactRelationship,
            phoneNumber: emergencyContactNumber
          },
          medicalInfo: {
            primaryPhysician,
            allergies,
            currentMedication,
            chronicConditions
          },
          insuranceInfo: {
            primaryInsurance,
            insuranceId
          }
        };
      } else if (role === "doctor") {
        userData = {
          ...userData,
          medicalLicense,
          officeNumber,
          professionalTitle,
          bio,
          specialties,
          availability
        };
      }

      const response = await axios.post(
        "https://telemedicine-api-09u5.onrender.com/users/register", 
        userData
      );

      console.log("Signup successful:", response.data);
      
      // Redirect to login page after successful signup
      navigate("/login", { 
        state: { 
          successMessage: "Registration successful! Please log in." 
        } 
      });

    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Signup failed. Please try again.");
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError(error.message || "An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of the component code remains the same ...
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
                <label className="block text-teal-700 font-medium mb-2">
                  Select Role
                </label>
                <select
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="">Choose your role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 - Personal Information */}
        {step === 2 && (
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Personal Information ({role === "doctor" ? "Doctor" : "Patient"})
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    <label className="block text-teal-700 font-medium mb-2">
                      Date of Birth
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                <div>
                  <label className="block text-teal-700 font-medium mb-2">
                    Medical License Number
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={medicalLicense}
                    onChange={(e) => setMedicalLicense(e.target.value)}
                    placeholder="Enter your license number"
                    required
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3 - Contact Information */}
        {step === 3 && (
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setphoneNumber(e.target.value)}
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Address
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Your full address"
                  required
                />
              </div>

              {role === "doctor" && (
                <div>
                  <label className="block text-teal-700 font-medium mb-2">
                    Office Number
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="tel"
                    value={officeNumber}
                    onChange={(e) => setOfficeNumber(e.target.value)}
                    placeholder="Your office phone number"
                  />
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 4 - Additional Information */}
        {step === 4 && (
          <div className="mb-4">
            {role === "patient" ? (
              <>
                <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
                  Emergency Contact
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-teal-700 font-medium mb-2">
                      Emergency Contact Name
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="text"
                      value={emergencyContactName}
                      onChange={(e) => setemergencyContactName(e.target.value)}
                      placeholder="Full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-teal-700 font-medium mb-2">
                      Relationship
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="text"
                      value={emergencyContactRelationship}
                      onChange={(e) => setemergencyContactRelationship(e.target.value)}
                      placeholder="Relationship to you"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-teal-700 font-medium mb-2">
                      Emergency Contact Phone
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="tel"
                      value={emergencyContactNumber}
                      onChange={(e) => setemergencyContactNumber(e.target.value)}
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
                  Professional Profile
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-teal-700 font-medium mb-2">
                      Professional Title
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="text"
                      value={professionalTitle}
                      onChange={(e) => setProfessionalTitle(e.target.value)}
                      placeholder="e.g. Cardiologist, Pediatrician"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-teal-700 font-medium mb-2">
                      Bio
                    </label>
                    <textarea
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about your professional background"
                      rows="4"
                    />
                  </div>

                  <div>
                    <SpecialtiesInput
                      specialties={specialties}
                      setSpecialties={setSpecialties}
                    />
                  </div>

                  <div>
                    <label className="block text-teal-700 font-medium mb-2">
                      Availability
                    </label>
                    <input
                      className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="text"
                      value={availability}
                      onChange={(e) => setAvailability(e.target.value)}
                      placeholder="e.g. Mon-Fri 9am-5pm"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Step 5 - Medical Information (Patient only) */}
        {step === 5 && role === "patient" && (
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Medical Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Primary Care Physician
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={primaryPhysician}
                  onChange={(e) => setPrimaryPhysician(e.target.value)}
                  placeholder="Doctor's name"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Allergies
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  placeholder="List any allergies"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Current Medications
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={currentMedication}
                  onChange={(e) => setCurrentMedication(e.target.value)}
                  placeholder="List current medications"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Chronic Conditions
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={chronicConditions}
                  onChange={(e) => setChronicConditions(e.target.value)}
                  placeholder="List any chronic conditions"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 6 - Insurance Information (Patient only) */}
        {step === 6 && role === "patient" && (
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-teal-700 text-center mb-6">
              Insurance Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Primary Insurance Provider
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={primaryInsurance}
                  onChange={(e) => setPrimaryInsurance(e.target.value)}
                  placeholder="Insurance company name"
                />
              </div>

              <div>
                <label className="block text-teal-700 font-medium mb-2">
                  Insurance ID Number
                </label>
                <input
                  className="w-full px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  type="text"
                  value={insuranceId}
                  onChange={(e) => setInsuranceId(e.target.value)}
                  placeholder="Your insurance ID"
                />
              </div>
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button
              onClick={handlePreviousStep}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded transition duration-200"
              disabled={isLoading}
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
              disabled={isLoading}
              type="button"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition duration-200"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;