import React from 'react';
import { 
  Stethoscope,
  Clock,
  Shield,
  DollarSign,
  Calendar,
  Video,
  MessageSquare,
  User,
  ArrowRight,
  CheckCircle,
  Building,
  Award,
  Briefcase,
  FileText,
  Phone,
  Mail,
  MapPin,
  PieChart,
  Heart,
  Activity
} from 'lucide-react';

const DocHome = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header/Navigation would go here */}
      
      {/* Hero Section - Updated with more sophisticated design */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-800 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h5 className="text-emerald-200 font-medium mb-2">Love Hospital Virtual Care</h5>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Extend Your Practice Beyond Hospital Walls</h1>
              <p className="text-xl mb-8 text-emerald-100 max-w-lg">
                Join our hospital's elite team of physicians providing world-class care through our secure telehealth platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-emerald-700 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-all">
                  <User className="mr-2 h-5 w-5" /> Provider Portal
                </button>
                <button className="bg-emerald-700 text-white hover:bg-emerald-800 px-6 py-3 rounded-md font-medium text-lg flex items-center justify-center transition-all">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-emerald-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-teal-400 rounded-full opacity-20"></div>
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Doctor using telehealth platform"
                  className="rounded-lg shadow-2xl max-w-md w-full relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Stats */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6">
            <p className="text-4xl font-bold text-emerald-700 mb-2">250+</p>
            <p className="text-gray-600">Staff Physicians</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-emerald-700 mb-2">40k+</p>
            <p className="text-gray-600">Patients Annually</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-emerald-700 mb-2">32</p>
            <p className="text-gray-600">Specialties</p>
          </div>
          <div className="p-6">
            <p className="text-4xl font-bold text-emerald-700 mb-2">98%</p>
            <p className="text-gray-600">Patient Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Why Join Section - Redesigned */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-emerald-600 font-medium mb-2">FOR OUR PHYSICIANS</h5>
            <h2 className="text-3xl font-bold mb-4">Why Join Our Telehealth Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Love Hospital provides our physicians with cutting-edge technology to deliver exceptional care remotely.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Stethoscope className="text-emerald-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expand Your Practice</h3>
              <p className="text-gray-600">
                Leverage Love Hospital's reputation while reaching patients who cannot visit in person.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Clock className="text-emerald-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                Supplement your hospital hours with flexible telehealth sessions from home or your office.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <DollarSign className="text-emerald-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Additional Revenue</h3>
              <p className="text-gray-600">
                Generate supplemental income through our competitive compensation structure.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Shield className="text-emerald-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Our hospital-grade secure platform meets all compliance requirements and protects sensitive data.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Calendar className="text-emerald-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-gray-600">
                Fully integrated with Love Hospital's EMR system for smooth patient management.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all border-t-4 border-emerald-500">
              <div className="bg-emerald-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building className="text-emerald-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Institutional Support</h3>
              <p className="text-gray-600">
                Full technical, administrative, and clinical support from Love Hospital's staff.
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
              <div className="bg-emerald-100 absolute -top-6 -left-6 w-48 h-48 rounded-full z-0"></div>
              <img 
                src="/api/placeholder/500/600" 
                alt="Love Hospital Building"
                className="rounded-lg shadow-xl relative z-10"
              />
              <div className="bg-teal-100 absolute -bottom-6 -right-6 w-32 h-32 rounded-full z-0"></div>
            </div>
            <div className="md:w-1/2">
              <h5 className="text-emerald-600 font-medium mb-3">ABOUT Love HOSPITAL</h5>
              <h2 className="text-3xl font-bold mb-6">A Legacy of Excellence in Healthcare</h2>
              <p className="text-gray-700 mb-6">
                For over 50 years, Love Hospital has been at the forefront of medical innovation and patient care. 
                Our state-of-the-art facilities and world-class medical team ensure that patients receive the highest 
                quality of care available.
              </p>
              <p className="text-gray-700 mb-8">
                Our telehealth initiative extends our exceptional care beyond physical boundaries, allowing 
                our talented physicians to reach more patients while maintaining the same standards of excellence.
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                <div className="flex items-center">
                  <Award className="text-emerald-600 mr-3 h-5 w-5" />
                  <span>Top-Rated Hospital</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-emerald-600 mr-3 h-5 w-5" />
                  <span>Patient-Centered Care</span>
                </div>
                <div className="flex items-center">
                  <Activity className="text-emerald-600 mr-3 h-5 w-5" />
                  <span>Advanced Technology</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="text-emerald-600 mr-3 h-5 w-5" />
                  <span>Research Institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Updated */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-emerald-600 font-medium mb-2">GETTING STARTED</h5>
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our hospital's telehealth network in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-emerald-700 text-2xl font-bold">1</span>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-emerald-200 -z-10 transform -translate-x-10"></div>
              <h3 className="text-xl font-semibold mb-3">Apply</h3>
              <p className="text-gray-600">
                Complete our simple application process for Memorial Hospital physicians.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-emerald-700 text-2xl font-bold">2</span>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-emerald-200 -z-10 transform -translate-x-10"></div>
              <h3 className="text-xl font-semibold mb-3">Onboarding</h3>
              <p className="text-gray-600">
                Complete platform training and telehealth best practices certification.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center relative">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-emerald-700 text-2xl font-bold">3</span>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-emerald-200 -z-10 transform -translate-x-10"></div>
              <h3 className="text-xl font-semibold mb-3">Set Schedule</h3>
              <p className="text-gray-600">
                Define your availability and integrate with your hospital schedule.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-emerald-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Practicing</h3>
              <p className="text-gray-600">
                Begin seeing patients through our secure hospital telehealth platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Physicians Section - New */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h5 className="text-emerald-600 font-medium mb-2">OUR TELEHEALTH TEAM</h5>
            <h2 className="text-3xl font-bold mb-4">Featured Physicians</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our leading doctors who are pioneering telehealth at Memorial Hospital
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Physician 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src="/api/placeholder/400/300" 
                alt="Dr. Melissa Warner"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Melissa Warner</h3>
                <p className="text-emerald-600 mb-3">Cardiology, Department Chief</p>
                <p className="text-gray-600 mb-4">
                  Leading our virtual cardiac care program with over 15 years of experience at Memorial Hospital.
                </p>
                <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-800 transition-colors">
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Physician 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src="/api/placeholder/400/300" 
                alt="Dr. James Chen"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. James Chen</h3>
                <p className="text-emerald-600 mb-3">Neurology</p>
                <p className="text-gray-600 mb-4">
                  Specializing in remote neurological consultations and follow-ups using advanced diagnostic tools.
                </p>
                <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-800 transition-colors">
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Physician 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img 
                src="/api/placeholder/400/300" 
                alt="Dr. Sophia Rodriguez"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Sophia Rodriguez</h3>
                <p className="text-emerald-600 mb-3">Pediatrics</p>
                <p className="text-gray-600 mb-4">
                  Pioneering virtual pediatric care with a focus on making telehealth accessible for children.
                </p>
                <button className="text-emerald-600 font-medium flex items-center hover:text-emerald-800 transition-colors">
                  View Profile <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-white border border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-md font-medium flex items-center mx-auto transition-all">
              View All Physicians <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h5 className="text-emerald-600 font-medium mb-2">PHYSICIAN EXPERIENCES</h5>
            <h2 className="text-3xl font-bold mb-4">What Our Doctors Are Saying</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from Memorial Hospital physicians about their telehealth experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-100 rounded-bl-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 pt-4">
                "As the Chief of Cardiology, I was skeptical about telehealth, but our hospital's platform has allowed me to monitor post-operative patients more effectively and reduce readmission rates."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Dr. Robert Thomson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Robert Thomson</h4>
                  <p className="text-sm text-emerald-600">Cardiology</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-100 rounded-bl-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 pt-4">
                "The integration with our hospital EMR system makes telehealth consultations seamless. I can provide the same quality of psychiatric care while balancing my hospital rounds."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Dr. Alisha Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Alisha Patel</h4>
                  <p className="text-sm text-emerald-600">Psychiatry</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm relative">
              <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-100 rounded-bl-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 pt-4">
                "Memorial's telehealth platform allows me to provide follow-up care to surgical patients without them needing to travel. The secure image sharing feature is particularly valuable."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="/api/placeholder/100/100" 
                    alt="Dr. Marcus Williams"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Dr. Marcus Williams</h4>
                  <p className="text-sm text-emerald-600">Orthopedic Surgery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase - New */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
              <h5 className="text-emerald-600 font-medium mb-2">ADVANCED PLATFORM</h5>
              <h2 className="text-3xl font-bold mb-6">Hospital-Grade Technology</h2>
              <p className="text-gray-700 mb-6">
                Our telehealth platform was designed specifically for Memorial Hospital's high standards of patient care and security.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-emerald-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <Video className="text-emerald-600 h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">4K Video Consultations</h3>
                    <p className="text-gray-600">
                      Ultra-high definition video for detailed patient assessments and clinical observations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-emerald-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <FileText className="text-emerald-600 h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">EMR Integration</h3>
                    <p className="text-gray-600">
                      Seamless connection with Memorial Hospital's electronic medical records system.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-emerald-100 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      <PieChart className="text-emerald-600 h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                    <p className="text-gray-600">
                      Track patient outcomes and practice metrics with our intuitive reporting tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-4">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Telehealth Platform Interface"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Updated */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-700 to-emerald-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h5 className="text-emerald-200 font-medium mb-2">JOIN OUR TEAM</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Patient Care?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join Memorial Hospital's elite telehealth physician network and help us redefine healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
              <User className="mr-2" /> Sign Up Now
            </button>
            <button className="border-2 border-white text-white hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center">
              Learn More <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
        </div>
      </section>
   
      

     
    </div>
  );
};

export default DocHome;