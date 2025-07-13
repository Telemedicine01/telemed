import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import SpecialtiesInput from "../components/doctorsSpecialties";
import logo from "../assets/images/logo.png";
import docnbaby from "../assets/images/docnbaby.png";

// Mock API for testing when real API is unavailable
const mockApi = {
  register: (userData) => {
    return new Promise((resolve, reject) => {
      // Simulate network delay
      setTimeout(() => {
        // Check if email already exists in localStorage
        const existingUsers = JSON.parse(
          localStorage.getItem("mockUsers") || "[]"
        );
        const emailExists = existingUsers.some(
          (user) => user.email === userData.email
        );

        if (emailExists) {
          reject({
            response: {
              data: {
                message:
                  "Email already registered. Please use a different email.",
              },
            },
          });
        } else {
          // Add new user to mock database
          existingUsers.push(userData);
          localStorage.setItem("mockUsers", JSON.stringify(existingUsers));

          resolve({
            data: {
              user: userData,
              token:
                "mock-jwt-token-" + Math.random().toString(36).substring(2),
            },
          });
        }
      }, 800); // Simulate network delay
    });
  },
};

function SignUp() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [useRealApi, setUseRealApi] = useState(true);
  const navigate = useNavigate();

  // Check API availability on component mount
  useEffect(() => {
    const checkApiAvailability = async () => {
      try {
        await axios.get(
          "https://telemedicine-api-09u5.onrender.com/health-check",
          { timeout: 3000 }
        );
        setUseRealApi(true);
      } catch (error) {
        console.log("Using mock API due to connection issues");
        setUseRealApi(false);
      }
    };

    checkApiAvailability();
  }, []);

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
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      };

      if (role === "patient") {
        userData = {
          ...userData,
          username: username,
          email: email,
           password: password,
           confirmPassword: password,
           dateOfBirth: dateofbirth  ,
           gender: gender,
           bloodType: bloodtype,
           Address: address,
           emergencyContact: {
             name: emergencyContactName,
             relationship: emergencyContactRelationship,
             phoneNumber: emergencyContactNumber
           },
           primaryCarePhysician: primaryPhysician,
           allergies: allergies,
           CurrentMedication : currentMedication,
           chronicConditions: chronicConditions,
           insurance: {
             provider: primaryInsurance,
             insuranceId: insuranceId
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
          availability,
        };
      }

      let response;

      if (useRealApi) {
        response = await axios.post(
          "https://telemedicine-api-09u5.onrender.com/users/register",
          userData
        );
      } else {
        // Use mock API when real API is unavailable
        response = await mockApi.register(userData);
      }

      console.log("Signup successful:", response.data);

      setSuccessMessage("Registration successful! Redirecting to login...");

      // Redirect to login page after short delay
      setTimeout(() => {
        navigate("/login", {
          state: {
            successMessage: "Registration successful! Please log in.",
          },
        });
      }, 2000);
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message || "Signup failed. Please try again."
        );
      } else if (error.request) {
        setError("No response from server. Please try again later.");
      } else {
        setError(error.message || "An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

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

  const maxSteps = role === "doctor" ? 4 : 6;

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image Background */}
      <div
        className="hidden lg:flex w-1/2 items-center justify-center p-12 relative"
        style={{
          backgroundImage: `url(${docnbaby})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold mb-6 ">Your Health, Connected</h1>
          <p className="text-xl mb-8">
            Join our telemedicine platform and experience healthcare from the
            comfort of your home.
          </p>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-teal-500 rounded-full p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>24/7 access to healthcare professionals</span>
            </div>
            <div className="flex items-center">
              <div className="bg-teal-500 rounded-full p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Secure and confidential consultations</span>
            </div>
            <div className="flex items-center">
              <div className="bg-teal-500 rounded-full p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>Prescription management and refills</span>
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-teal-200">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold underline">
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Form column */}
      <div className="w-full lg:w-1/2 py-8 px-4 sm:px-6 lg:px-12 overflow-y-auto">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="LoveHealth Logo" className="h-12 mb-2" />
          <h2 className="text-2xl font-bold">
            {" "}
            Create your LoveHealth account
          </h2>

          <p className="text-gray-600">
            Step {step} of {maxSteps} -{" "}
            {role
              ? role === "doctor"
                ? "Doctor Registration"
                : "Patient Registration"
              : "Account Setup"}
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              {successMessage}
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              {error}
            </div>
          )}

          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-teal-600 rounded-full transition-all duration-300"
                style={{ width: `${(step / maxSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Form steps */}
          <form onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Username
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your username"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Gender
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          required
                        >
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Blood Type
                        </label>
                        <select
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          value={bloodtype}
                          onChange={(e) => setBloodType(e.target.value)}
                        >
                          <option value="">Select</option>
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
                    </div>
                  </>
                )}

                {role === "doctor" && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Medical License Number
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="text"
                      value={medicalLicense}
                      onChange={(e) => setMedicalLicense(e.target.value)}
                      placeholder="Enter your license number"
                      required
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 3 - Contact Information */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                    placeholder="Your phone number"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Address
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Your full address"
                    required
                  />
                </div>

                {role === "doctor" && (
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Office Number
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      type="tel"
                      value={officeNumber}
                      onChange={(e) => setOfficeNumber(e.target.value)}
                      placeholder="Your office phone number"
                    />
                  </div>
                )}
              </div>
            )}

            {/* Step 4 - Additional Information */}
            {step === 4 && (
              <div className="space-y-6">
                {role === "patient" ? (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Emergency Contact
                    </h3>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Contact Name
                      </label>
                      <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        type="text"
                        value={emergencyContactName}
                        onChange={(e) =>
                          setemergencyContactName(e.target.value)
                        }
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Relationship
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          type="text"
                          value={emergencyContactRelationship}
                          onChange={(e) =>
                            setemergencyContactRelationship(e.target.value)
                          }
                          placeholder="Relationship to you"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                          type="tel"
                          value={emergencyContactNumber}
                          onChange={(e) =>
                            setemergencyContactNumber(e.target.value)
                          }
                          placeholder="Phone number"
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Professional Profile
                    </h3>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Professional Title
                      </label>
                      <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        type="text"
                        value={professionalTitle}
                        onChange={(e) => setProfessionalTitle(e.target.value)}
                        placeholder="e.g. Cardiologist, Pediatrician"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Bio
                      </label>
                      <textarea
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us about your professional background"
                        rows="3"
                      />
                    </div>

                    <div>
                      <SpecialtiesInput
                        specialties={specialties}
                        setSpecialties={setSpecialties}
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Availability
                      </label>
                      <input
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        type="text"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                        placeholder="e.g. Mon-Fri 9am-5pm"
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Step 5 - Medical Information (Patient only) */}
            {step === 5 && role === "patient" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Medical Information
                </h3>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Primary Care Physician
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={primaryPhysician}
                    onChange={(e) => setPrimaryPhysician(e.target.value)}
                    placeholder="Doctor's name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Allergies
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={allergies}
                    onChange={(e) => setAllergies(e.target.value)}
                    placeholder="List any allergies, or type 'None'"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Current Medications
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={currentMedication}
                    onChange={(e) => setCurrentMedication(e.target.value)}
                    placeholder="List current medications, or type 'None'"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Chronic Conditions
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={chronicConditions}
                    onChange={(e) => setChronicConditions(e.target.value)}
                    placeholder="List any chronic conditions, or type 'None'"
                  />
                </div>
              </div>
            )}

            {/* Step 6 - Insurance Information (Patient only) */}
            {step === 6 && role === "patient" && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Insurance Information
                </h3>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Primary Insurance Provider
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={primaryInsurance}
                    onChange={(e) => setPrimaryInsurance(e.target.value)}
                    placeholder="Insurance company name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Insurance ID Number
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    type="text"
                    value={insuranceId}
                    onChange={(e) => setInsuranceId(e.target.value)}
                    placeholder="Your insurance ID"
                  />
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex space-x-4">
              {step > 1 && (
                <button
                  onClick={handlePreviousStep}
                  className="flex items-center justify-center w-1/3 px-4 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-200"
                  disabled={isLoading}
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Back
                </button>
              )}

              <button
                onClick={step < maxSteps ? handleNextStep : handleSubmit}
                className={`flex items-center justify-center ${
                  step > 1 ? "w-2/3" : "w-full"
                } px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-200`}
                disabled={isLoading}
                type="button"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    {step < maxSteps ? (
                      <>
                        Continue
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        Complete Registration
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </>
                    )}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Bottom section - mobile only */}
          <div className="mt-8 pt-6 border-t border-gray-200 lg:hidden">
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-teal-600">
                Sign in
              </Link>
            </p>
          </div>

          {/* Dashboard links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-gray-600 mb-4">
              After registration, you'll be directed to:
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/doc/docdash"
                className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md text-teal-600 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
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
                Doctor Dashboard
              </Link>
              <Link
                to="/pat/patdash"
                className="flex items-center justify-center px-4 py-2 bg-white border border-gray-300 rounded-md text-teal-600 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
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
                Patient Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
