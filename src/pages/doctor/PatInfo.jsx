import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clipboard,
  Shield,
  Activity,
  Pill,
  AlertCircle,
  Edit,
  Save,
  X,
  Plus,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const PatInfo = () => {
  const [editingConditions, setEditingConditions] = React.useState(false);
  const [conditions, setConditions] = React.useState([
  ]);
  const [newCondition, setNewCondition] = React.useState({
    name: "",
    date: "",
    notes: ""
  });
  const [expandedCondition, setExpandedCondition] = React.useState(null);

  const handleAddCondition = () => {
    if (newCondition.name.trim()) {
      setConditions([
        ...conditions,
        {
          id: Date.now(),
          name: newCondition.name,
          date: newCondition.date || new Date().toISOString().split('T')[0],
          notes: newCondition.notes
        }
      ]);
      setNewCondition({ name: "", date: "", notes: "" });
    }
  };

  const handleRemoveCondition = (id) => {
    setConditions(conditions.filter(condition => condition.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
    <div className="bg-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-20 h-20 rounded-full bg-teal-300 overflow-hidden border-4 border-white shadow-lg">
            <img
              src="/api/placeholder/150/150"
              alt="Patient profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Patient Name</h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 text-teal-200 mr-1" />
                <span className="text-sm text-teal-100">DOB: --/--/---- (-- yrs)</span>
              </div>
              <div className="flex items-center">
                <Clipboard className="w-4 h-4 text-teal-200 mr-1" />
                <span className="text-sm text-teal-100">MRN: --------</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-teal-200 mr-1" />
                <span className="text-sm text-teal-100">Blood Type: --</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">patient@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800">000 000 0000</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-gray-800">123 Street, City, Country</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-gray-800">Contact Name</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Relationship</p>
                <p className="text-gray-800">Relationship</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-800">000 000 0000</p>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Allergies</h2>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full">
                <AlertCircle className="w-4 h-4 mr-1" />
                <span className="text-sm">Allergy</span>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Medications</h2>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                <Pill className="w-4 h-4 mr-1" />
                <span className="text-sm">Medication</span>
              </div>
            </div>
          </div>
        </div>
  
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-between items-center border-b border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900">Medical Conditions</h2>
              <button
                className="flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm"
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Conditions
              </button>
            </div>
  
            <div className="p-6">
              <div className="space-y-4">
                <div className="text-center py-8 text-gray-500">
                  <Activity className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                  <p>No medical conditions recorded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  );
};

export default PatInfo;