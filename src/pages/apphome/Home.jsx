import React from 'react';
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Calendar,
  HeartPulse,
  Shield,
  Stethoscope,
  User,
  Check,
  Ear,
  Lock,
  MessageCircle,
  Bot,
  Building,
  ClipboardCheck,
  Clock,
  MapPin,
  Phone,
  Award,
  Activity
} from 'lucide-react';
import logo from "../../assets/images/logo.png"
import heroImage from '../../assets/images/logo.png';
import hospitalBuilding from '../../assets/images/hospital.jpeg';
import waitingArea from '../../assets/images/lobby.png';
import labTech from '../../assets/images/smilingdoc4.jpeg';
import surgeryTeam from '../../assets/images/docgrp.jpeg';
import femaleDoctor from '../../assets/images/smilingdoc.jpeg';
import smilingdoc from '../../assets/images/smilingdoc2.png';
import counseling from '../../assets/images/smilingdoc3.png';
import aiAssistant from '../../assets/images/ai.png';
import logo2 from '../../assets/images/logo2.png';
import smilingdoc5 from '../../assets/images/smilingdoc5.jpeg';


function Home() {

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-800 to-teal-600 text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="flex items-center justify-center mb-6">
                <img src={logo2} alt="LoveHealth"  className="h-30 w-auto  flex items-center justify-center bg-white/50 rounded-3xl" />
                {/* <span className="text-teal-200 font-medium text-lg">LOVE HOSPITAL</span> */}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Compassionate Care <br />
                <span className="text-teal-200">When You Need It Most</span>
              </h1>
              <p className="text-xl text-teal-100 mb-8 max-w-lg">
                Bridging the gap between patients and doctors with LoveHealth - your partner in health and healing.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/signup" 
                  className="px-8 py-3 bg-white hover:bg-teal-50 text-teal-700 font-medium rounded-lg shadow-md transition-all duration-300 text-center"
                >
                  Create Your Account
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-3 border-2 border-white hover:bg-white 
                  hover:text-teal-700 hover:bg-opacity-10 font-medium rounded-lg transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src={femaleDoctor} 
                alt="Doctor with patient" 
                className="rounded-xl shadow-xl border-4 border-white border-opacity-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "120+", label: "Expert Physicians", icon: <Stethoscope className="w-8 h-8 mx-auto mb-2 text-teal-500" /> },
              { number: "24/7", label: "Emergency Care", icon: <Clock className="w-8 h-8 mx-auto mb-2 text-teal-500" /> },
              { number: "98%", label: "Patient Satisfaction", icon: <HeartPulse className="w-8 h-8 mx-auto mb-2 text-teal-500" /> },
              { number: "Free", label: "Abuse Support", icon: <Shield className="w-8 h-8 mx-auto mb-2 text-teal-500" /> }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all">
                <div className="flex justify-center">{stat.icon}</div>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How LoveHealth Helps You</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connecting you with healthcare services when and how you need them
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Doctor Articles",
                description: "Access informative health content written by our specialists",
                icon: <ClipboardCheck className="w-8 h-8 text-teal-500" />,
                link: "/patient/feed"
              },
              {
                title: "Appointments",
                description: "Book in-person or virtual consultations with ease",
                icon: <Calendar className="w-8 h-8 text-teal-500" />,
                link: "/login"
              },
              {
                title: "AI Health Assistant",
                description: "Get immediate answers to general health questions",
                icon: <Bot className="w-8 h-8 text-teal-500" />,
                link: "/chatbox"
              },
              {
                title: "Medical Records",
                description: "Access your health information securely online",
                icon: <Lock className="w-8 h-8 text-teal-500" />,
                link: "/login"
              },
              {
                title: "Support Programs",
                description: "Specialized care for survivors of sexual abuse",
                icon: <Shield className="w-8 h-8 text-teal-500" />,
                link: "/anonymous"
              },
              {
                title: "Emergency Contacts",
                description: "Immediate help when you need it most",
                icon: <Phone className="w-8 h-8 text-teal-500" />,
                link: "/contact"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center mt-auto text-teal-500 hover:text-teal-600 font-medium text-sm"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Health Assistant Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <img 
                src={aiAssistant} 
                alt="AI Health Assistant" 
                className="rounded-xl shadow-md w-full bg-gradient-to-r from-teal-600 to-teal-800"
              />
            </div>
            
            <div className="lg:w-1/2">
              <div className="inline-flex items-center px-4 py-2 bg-teal-50 rounded-full mb-4">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-2">
                  <Bot className="w-3 h-3 text-white" />
                </div>
                <span className="text-teal-600 font-medium text-sm">AI HEALTH ASSISTANT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">24/7 Virtual Health Support</h2>
              <div className="w-16 h-1 bg-teal-500 mb-6"></div>
              
              <p className="text-lg text-gray-600 mb-6">
                Our AI health assistant provides immediate answers to general medical questions when our physicians aren't available.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Get answers to common health questions",
                  "Find department hours and services",
                  "Triage non-emergency symptoms",
                  "Medication information",
                  "Hospital navigation assistance",
                  "Completely confidential"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Link 
                  to="/chatbox" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Try Our Health Assistant
                </Link>
             
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Our AI assistant doesn't replace professional medical advice. For emergencies, please call 911 or visit our emergency department.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Experts</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Board-certified physicians dedicated to your health and wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Samuel Tsar",
                specialty: "Cardiology",
                image: smilingdoc,
                bio: "Specializing in preventive cardiology and heart health education."
              },
              {
                name: "Dr. Michael Richards",
                specialty: "Neurology",
                image: labTech,
                bio: "Expert in neurological disorders and innovative treatments."
              },
              {
                name: "Dr. Patience Parker",
                specialty: "Oncology",
                image: smilingdoc5,
                bio: "Compassionate cancer care with personalized treatment plans."
              }
            ].map((doctor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-teal-500 mb-3">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
                  <Link 
                    to={`/doctors/${doctor.name.replace(' ', '-').toLowerCase()}`} 
                    className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-teal-500"
                  >
                    View profile <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/patient/alldocs" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              Meet All Our Specialists
            </Link>
          </div>
        </div>
      </section>

      {/* Safe Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-pink-50 rounded-full mb-4">
                <Shield className="w-5 h-5 text-pink-400 mr-2" />
                <span className="text-pink-400 font-medium text-sm">CONFIDENTIAL SUPPORT</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Safe Space for Sexual Abuse & Sexual Health Support 
              </h2>
              <div className="w-16 h-1 bg-pink-400 mb-6"></div>
              
              <p className="text-lg text-gray-600 mb-6">
                Love Hospital provides free, compassionate support for survivors of sexual violence through our specialized program. Our trained counselors offer judgment-free assistance ensuring a safe and private way to access help. We also offer confidential sexual health consultations for those who prefer to avoid face-to-face discussions. 
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Completely confidential conversations",
                  "Option to remain anonymous",
                  "Trauma-informed specialists",
                  "No pressure to report (unless minor)",
                  "Help understanding your options",
                  "Connection to local resources"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Link 
                  to="/anonymous" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-all duration-300 shadow-md"
                >
                  Speak with a Specialist
                </Link>
            
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-700 text-sm">
                  <strong>Remember:</strong> You are not alone. Healing is possible, and we're here to support you every step of the way.
                </p>
              </div>
            </div>
            
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">You Have Rights</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Right to be treated with dignity and respect</span>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Health Journey Starts Here</h2>
            <p className="text-xl text-teal-100 mb-8">
              Whether you need immediate care, ongoing treatment, or compassionate support, Love Hospital is here for you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/signup" 
                className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-teal-600 font-medium rounded-lg shadow-md transition-all duration-300"
              >
                Book an Appointment
              </Link>
              <Link 
                to="/contact" 
                className="inline-block px-8 py-3 border-2 border-white hover:bg-white hover:bg-opacity-10 font-medium rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;