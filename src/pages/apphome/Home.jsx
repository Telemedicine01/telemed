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
import smilingdoc from '../../assets/images/smilingdoc.jpeg';
import hospitalBuilding from '../../assets/images/smilingdoc.jpeg';
import waitingArea from '../../assets/images/smilingdoc.jpeg';
import labTech from '../../assets/images/smilingdoc.jpeg';
import surgeryTeam from '../../assets/images/smilingdoc.jpeg';

function Home() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-screen bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gray-900 opacity-90 z-0">
          <img 
            src={hospitalBuilding} 
            alt="City Hospital" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16 xl:p-24 relative z-10">
          <div className="flex items-center mb-4">
            <Building className="w-6 h-6 text-teal-400 mr-2" />
            <span className="text-teal-400 font-medium">LOVE HOSPITAL</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Exceptional Care <br />
            <span className="text-teal-300">Where You Matter Most</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            As the region's leading healthcare provider, we combine cutting-edge medicine with compassionate care.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/find-a-doctor" 
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-all duration-300"
            >
              Find a Specialist
            </Link>
          </div>
        </div>

      </section>

      {/* Hospital Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "250+", label: "Specialist Physicians" },
              { number: "50+", label: "Medical Departments" },
              { number: "24/7", label: "Emergency Care" },
              { number: "95%", label: "Patient Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Medical Specialties</h2>
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive care across all major medical disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cardiology",
                description: "Advanced heart care and cardiovascular treatments",
                icon: <HeartPulse className="w-8 h-8 text-teal-500" />
              },
              {
                title: "Oncology",
                description: "Comprehensive cancer diagnosis and therapy",
                icon: <Activity className="w-8 h-8 text-teal-500" />
              },
              {
                title: "Neurology",
                description: "Expert care for brain and nervous system disorders",
                icon: <ClipboardCheck className="w-8 h-8 text-teal-500" />
              },
              {
                title: "Orthopedics",
                description: "Musculoskeletal system and sports medicine",
                icon: <Stethoscope className="w-8 h-8 text-teal-500" />
              },
              {
                title: "Pediatrics",
                description: "Specialized care for infants, children, and adolescents",
                icon: <User className="w-8 h-8 text-teal-500" />
              },
              {
                title: "Women's Health",
                description: "Comprehensive care for women at all life stages",
                icon: <Shield className="w-8 h-8 text-teal-500" />
              }
            ].map((specialty, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-4">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
                <Link 
                  to={`/specialties/${specialty.title.toLowerCase()}`} 
                  className="inline-flex items-center mt-4 text-teal-500 hover:text-teal-600 font-medium text-sm"
                >
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <img 
              src={waitingArea} 
              alt="Hospital waiting area" 
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Hospital Services</h2>
            <div className="w-16 h-1 bg-teal-500 mb-6"></div>
            <p className="text-lg text-gray-600 mb-8">
              City Hospital offers a complete range of medical services from routine checkups to complex surgical procedures.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <ClipboardCheck className="w-6 h-6 text-teal-500" />,
                  title: "Diagnostic Services",
                  description: "State-of-the-art imaging and laboratory testing"
                },
                {
                  icon: <Clock className="w-6 h-6 text-teal-500" />,
                  title: "24/7 Emergency Care",
                  description: "Immediate treatment for urgent medical conditions"
                },
                {
                  icon: <HeartPulse className="w-6 h-6 text-teal-500" />,
                  title: "Surgical Excellence",
                  description: "Advanced operating theaters and recovery units"
                },
                {
                  icon: <Award className="w-6 h-6 text-teal-500" />,
                  title: "Rehabilitation",
                  description: "Specialized programs for recovery and wellness"
                }
              ].map((service, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Health Assistant Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left Column - Illustration */}
      <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
        <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center">
            <Bot className="w-8 h-8 text-white" />
          </div>
          
          {/* Chatbot UI Mockup */}
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-800 flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="p-4 space-y-3 h-64">
              {/* Bot message */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-r-lg rounded-bl-lg">
                  <p className="text-white text-sm">Hello! I'm Love Hospital's AI assistant. How can I help you today?</p>
                </div>
              </div>
              
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-teal-600 px-4 py-2 rounded-l-lg rounded-br-lg max-w-xs">
                  <p className="text-white text-sm">What are your cardiology department hours?</p>
                </div>
              </div>
              
              {/* Bot response */}
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-r-lg rounded-bl-lg">
                  <p className="text-white text-sm">Our cardiology department is open Monday-Friday from 8am-6pm. Would you like me to connect you with a specialist?</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 p-3 bg-gray-800">
              <div className="flex items-center bg-gray-700 rounded-full px-4 py-2">
                <MessageCircle className="w-5 h-5 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">Type your health question...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Column - Content */}
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
            to="/chatbot" 
            className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300"
          >
            Try Our Health Assistant
          </Link>
          <Link 
            to="/ai-disclaimer" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            Learn About AI Limitations
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
                name: "Dr. Sarah Chen",
                specialty: "Cardiology",
                image: smilingdoc
              },
              {
                name: "Dr. Michael Rodriguez",
                specialty: "Neurology",
                image: labTech
              },
              {
                name: "Dr. Priya Patel",
                specialty: "Oncology",
                image: surgeryTeam
              }
            ].map((doctor, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-teal-500 mb-4">{doctor.specialty}</p>
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
              to="/our-doctors" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              Meet All Our Specialists
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Exceptional Patient Experience</h2>
              <div className="w-16 h-1 bg-teal-500 mb-6"></div>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <MapPin className="w-6 h-6 text-teal-500" />,
                    title: "Convenient Locations",
                    description: "Multiple facilities across the region for easy access to care"
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-teal-500" />,
                    title: "Easy Scheduling",
                    description: "Book appointments online or by phone with our specialists"
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-teal-500" />,
                    title: "Patient Privacy",
                    description: "Strict confidentiality and secure medical records"
                  },
                  {
                    icon: <Bot className="w-6 h-6 text-teal-500" />,
                    title: "Virtual Assistant",
                    description: "24/7 chatbot for general health questions when doctors aren't available"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <img 
                  src={hospitalBuilding} 
                  alt="City Hospital campus" 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="relative -mt-16 p-8">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Plan Your Visit</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">MAIN CAMPUS</h4>
                        <p className="text-gray-900">123 Medical Center Drive</p>
                        <p className="text-gray-900">Cityville, ST 12345</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">PHONE</h4>
                        <p className="text-gray-900">(555) 123-4567</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">HOURS</h4>
                        <p className="text-gray-900">24/7 Emergency Department</p>
                        <p className="text-gray-900">M-F 8:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                    <Link 
                      to="/locations" 
                      className="inline-flex items-center mt-6 text-teal-500 hover:text-teal-600 font-medium"
                    >
                      All locations and hours <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safe Support Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Left Column - Content */}
      <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
        <div className="inline-flex items-center px-4 py-2 bg-pink-50 rounded-full mb-4">
          <Shield className="w-5 h-5 text-pink-400 mr-2" />
          <span className="text-pink-400 font-medium text-sm">CONFIDENTIAL SUPPORT</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Safe Space for Sexual Abuse Support
        </h2>
        <div className="w-16 h-1 bg-pink-400 mb-6"></div>
        
        <p className="text-lg text-gray-600 mb-6">
          Our specially trained counselors provide compassionate, judgment-free support for survivors of sexual violence. You have the right to be heard, believed, and supported.
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
            to="/sexual-abuse-support" 
            className="inline-flex items-center justify-center px-6 py-3 bg-pink-700 hover:bg-pink-900 text-white font-medium rounded-lg transition-all duration-300"
          >
            Speak with a Specialist
          </Link>
          <Link 
            to="/resources" 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            View Resources
          </Link>
        </div>
      </div>
      
      {/* Right Column - Visual */}
      <div className="lg:w-1/2">
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
              <Lock className="w-5 h-5 text-pink-300" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Your Privacy Matters</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-pink-50 rounded-lg">
              <p className="text-pink-800 font-medium">Anonymous Option Available</p>
              <p className="text-gray-600 text-sm mt-1">
                You can speak with our counselors without providing your name or personal details.
              </p>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-900 font-medium">What to Expect:</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No judgment, only support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>You control what information to share</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Help available regardless of when the abuse occurred</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
              <p className="text-blue-800 text-sm">
                <strong>Immediate Help:</strong> If you're in immediate danger, please call 911 or your local emergency number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Health Is Our Priority</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Trust City Hospital for exceptional medical care from our team of specialists.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/appointmentS" 
              className="inline-block px-8 py-3 bg-white hover:bg-gray-100 text-teal-600 font-medium rounded-lg shadow-md transition-all duration-300"
            >
              Book an Appointment
            </Link>
          
          </div>
        </div>
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        body {
          background-color: #f9fafb;
        }
      `}</style>
    </div>
  );
}

export default Home;