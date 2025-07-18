import React from "react";
import {
  Stethoscope,
  Clock,
  Shield,
  Calendar,
  Video,
  User,
  ArrowRight,
  Building,
  Award,
  Activity,
  HeartPulse,
  Clipboard,
  Phone,
  MapPin,
  CheckCircle,
  Star,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import Chatbox from "../../components/Chatbox";
import patphone from "../../assets/images/patphone.jpeg"
import hospital from "../../assets/images/hospital.jpeg"
import smilingpat from "../../assets/images/smilingpat.jpeg"
import counseling from "../../assets/images/docnbaby.png"


const PatHome = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h5 className="text-emerald-200 font-medium mb-2">
                Love Hospital Patient Portal
              </h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Exceptional Care, Wherever You Are
              </h1>
              <p className="text-xl mb-8 text-emerald-100 max-w-lg">
                Access world-class healthcare from the comfort of your home
                through our secure telehealth platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
             <Link to="/login">
                <button className="bg-white text-teal-700 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium text-lg flex items-center justify-center transition-all">
                  <User className="mr-2 h-5 w-5" /> Patient Login
                </button>
                
             </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-teal-400 rounded-full opacity-20"></div>
                <img
                  src={patphone}
                  alt="Patient using telehealth platform"
                  className="rounded-lg shadow-2xl max-w-md w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Calendar className="text-teal-600 h-6 w-6" />
            </div>
            <p className="text-gray-700 font-medium">Book Appointment</p>
          </div>
          <div className="p-4">
            <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Clipboard className="text-teal-600 h-6 w-6" />
            </div>
            <p className="text-gray-700 font-medium">Medical Records</p>
          </div>
          <div className="p-4">
            <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <Phone className="text-teal-600 h-6 w-6" />
            </div>
            <p className="text-gray-700 font-medium">Video Visit</p>
          </div>
          <div className="p-4">
            <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <MapPin className="text-teal-600 h-6 w-6" />
            </div>
            <p className="text-gray-700 font-medium">Find Locations</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-teal-600 font-medium mb-2">
              YOUR HEALTH COMES FIRST
            </h5>
            <h2 className="text-3xl font-bold mb-4">
              Why Patients Choose Love Hospital
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exceptional care and convenience at every step of your healthcare
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-teal-500">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Clock className="text-teal-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Same-Day Appointments
              </h3>
              <p className="text-gray-600">
                Get timely access to our specialists with convenient in-person
                and virtual visit options.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-teal-500">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <HeartPulse className="text-teal-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Top-Rated Specialists
              </h3>
              <p className="text-gray-600">
                Our physicians are leaders in their fields, providing the
                highest quality of care.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-teal-500">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="text-teal-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Telehealth</h3>
              <p className="text-gray-600">
                Private, HIPAA-compliant virtual visits with your trusted
                healthcare providers.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-teal-500">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building className="text-teal-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                State-of-the-Art Facilities
              </h3>
              <p className="text-gray-600">
                Cutting-edge technology and comfortable environments for your
                care.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-teal-500">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <CheckCircle className="text-teal-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Coordinated Care</h3>
              <p className="text-gray-600">
                Seamless communication between your care team for better health
                outcomes.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-teal-500">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Star className="text-teal-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Patient-Centered Approach
              </h3>
              <p className="text-gray-600">
                Your needs and preferences are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Showcase */}
      <section className="py-20 px-4 bg-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-center md:gap-16">
            <div className="md:w-1/2 relative mb-12 md:mb-0">
              <div className="bg-teal-100 absolute -top-6 -left-6 w-48 h-48 rounded-full z-0"></div>
              <img
                src={hospital}
                alt="Love Hospital Building"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="bg-emerald-100 absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0"></div>
            </div>
            <div className="md:w-1/2">
              <h5 className="text-teal-600 font-medium mb-3">
                ABOUT LOVE HOSPITAL
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                A Tradition of Excellence in Patient Care
              </h2>
              <p className="text-gray-700 mb-6">
                For over 50 years, Love Hospital has been the trusted healthcare
                provider in our community. Our patient-first philosophy and
                commitment to innovation ensure you receive the highest quality
                care available.
              </p>
              <p className="text-gray-700 mb-8">
                Our telehealth services bring this same standard of excellence
                directly to you, making specialized care more accessible than
                ever before.
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-center">
                  <Award className="text-teal-600 mr-3 h-5 w-5" />
                  <span>Top-Rated Hospital</span>
                </div>
                <div className="flex items-center">
                  <Activity className="text-teal-600 mr-3 h-5 w-5" />
                  <span>Advanced Technology</span>
                </div>
                <div className="flex items-center">
                  <User className="text-teal-600 mr-3 h-5 w-5" />
                  <span>Patient-Centered Care</span>
                </div>
                <div className="flex items-center">
                  <HeartPulse className="text-teal-600 mr-3 h-5 w-5" />
                  <span>Comprehensive Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-teal-600 font-medium mb-2">GETTING STARTED</h5>
            <h2 className="text-3xl font-bold mb-4">How Telehealth Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access Love Hospital's specialists from home in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-teal-700 text-2xl font-bold">1</span>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-teal-200 -z-10 transform -translate-x-10"></div>
              <h3 className="text-xl font-semibold mb-3">Schedule</h3>
              <p className="text-gray-600">
                Book your virtual visit online or through our patient portal.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-teal-700 text-2xl font-bold">2</span>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-teal-200 -z-10 transform -translate-x-10"></div>
              <h3 className="text-xl font-semibold mb-3">Connect</h3>
              <p className="text-gray-600">
                Receive a secure link and join your visit from any device.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-teal-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Care</h3>
              <p className="text-gray-600">
                Meet with your Love Hospital provider and receive expert care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-teal-600 font-medium mb-2">OUR SERVICES</h5>
            <h2 className="text-3xl font-bold mb-4">
              Specialized Care Available Virtually
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many of our specialty services can be accessed through telehealth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <HeartPulse className="text-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Cardiology Follow-ups
                </h3>
                <p className="text-gray-600 mb-4">
                  Remote monitoring and consultations for heart conditions with
                  our cardiac specialists.
                </p>
                <button className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Stethoscope className="text-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Primary Care</h3>
                <p className="text-gray-600 mb-4">
                  Routine check-ups, medication management, and general health
                  consultations.
                </p>
                <button className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-6">
                <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Clipboard className="text-teal-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mental Health</h3>
                <p className="text-gray-600 mb-4">
                  Confidential therapy sessions and psychiatric consultations
                  from home.
                </p>
                <button className="text-teal-600 font-medium flex items-center hover:text-teal-800 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium flex items-center mx-auto transition-all">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
              <h5 className="text-teal-600 font-medium mb-2">
                PATIENT-FRIENDLY TECHNOLOGY
              </h5>
              <h2 className="text-3xl font-bold mb-6">
                Easy-to-Use Telehealth Platform
              </h2>
              <p className="text-gray-700 mb-6">
                Our patient portal and telehealth system was designed for
                simplicity and accessibility, so you can focus on your health
                rather than technology.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <Video className="text-teal-600 h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      One-Click Visits
                    </h3>
                    <p className="text-gray-600">
                      Join your appointment with a single click - no downloads
                      or complicated setups.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <Clipboard className="text-teal-600 h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Medical Records Access
                    </h3>
                    <p className="text-gray-600">
                      View test results, medications, and visit summaries in one
                      secure place.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <Phone className="text-teal-600 h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Mobile Friendly
                    </h3>
                    <p className="text-gray-600">
                      Access your care team from smartphones, tablets, or
                      computers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-4">
                <img
                  src={smilingpat}
                  alt="Patient Portal Interface"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chatbot Toggle Button */}
        <Chatbox />
        <button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="bg-teal-600 hover:bg-teal-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center"
        >
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <span className="ml-2 font-medium">Health Assistant</span>
        </button>
      </div>

      <section>
        <div>
          <div>
            <div className="lg:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={counseling}
                  alt="Counseling session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
                <div className="relative p-8 mt-32">
                  <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      You Have Rights
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          Right to be treated with dignity and respect
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Right to privacy and confidentiality</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Right to make your own decisions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Right to access support services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section*/}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h5 className="text-emerald-200 font-medium mb-2">
            READY TO GET STARTED?
          </h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Love Hospital Difference
          </h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join thousands of patients who trust us for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
              <User className="mr-2" /> Sign Up Now
            </button>
            <button className="border-2 border-white text-white hover:bg-teal-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
              Learn More <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatHome;
