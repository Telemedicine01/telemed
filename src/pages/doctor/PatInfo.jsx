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
    { id: 1, name: "Hypertension", date: "2021-03-15", notes: "Stage 2, controlled with medication" },
    { id: 2, name: "Type 2 Diabetes", date: "2020-11-22", notes: "HbA1c 6.8%" },
    { id: 3, name: "Hyperlipidemia", date: "2022-01-10", notes: "On statin therapy" },
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
      {/* Patient Header */}
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
              <h1 className="text-2xl font-bold">John Doe</h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-teal-200 mr-1" />
                  <span className="text-sm text-teal-100">DOB: 15/06/1985 (38 yrs)</span>
                </div>
                <div className="flex items-center">
                  <Clipboard className="w-4 h-4 text-teal-200 mr-1" />
                  <span className="text-sm text-teal-100">MRN: 20230045</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-teal-200 mr-1" />
                  <span className="text-sm text-teal-100">Blood Type: A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800">john.doe@example.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800">024 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800">123 Main St, Accra, Ghana</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Emergency Contact</h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="text-gray-800">Jane Doe</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Relationship</p>
                  <p className="text-gray-800">Spouse</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-gray-800">024 765 4321</p>
                </div>
              </div>
            </div>

            {/* Allergies */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Allergies</h2>
              <div className="flex flex-wrap gap-2">
                {["Penicillin", "Peanuts", "Latex"].map((allergy, index) => (
                  <div key={index} className="flex items-center bg-red-100 text-red-800 px-3 py-1 rounded-full">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    <span className="text-sm">{allergy}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Medications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Medications</h2>
              <div className="flex flex-wrap gap-2">
                {["Lisinopril 10mg", "Atorvastatin 20mg", "Metformin 500mg"].map((med, index) => (
                  <div key={index} className="flex items-center bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                    <Pill className="w-4 h-4 mr-1" />
                    <span className="text-sm">{med}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Medical Conditions - Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex justify-between items-center border-b border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900">Medical Conditions</h2>
                {!editingConditions ? (
                  <button
                    onClick={() => setEditingConditions(true)}
                    className="flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Conditions
                  </button>
                ) : (
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setEditingConditions(false)}
                      className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg shadow-sm"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </button>
                    <button
                      onClick={() => setEditingConditions(false)}
                      className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-sm"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              <div className="p-6">
                {editingConditions ? (
                  <div className="space-y-6">
                    {/* Existing Conditions */}
                    <div className="space-y-4">
                      {conditions.map((condition) => (
                        <div key={condition.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <input
                                type="text"
                                value={condition.name}
                                onChange={(e) => {
                                  const updated = conditions.map(c => 
                                    c.id === condition.id ? {...c, name: e.target.value} : c
                                  );
                                  setConditions(updated);
                                }}
                                className="w-full font-medium text-gray-800 border-b border-gray-300 pb-1 mb-2 focus:outline-none focus:border-teal-500"
                              />
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-xs text-gray-500 mb-1">Date Diagnosed</label>
                                  <input
                                    type="date"
                                    value={condition.date}
                                    onChange={(e) => {
                                      const updated = conditions.map(c => 
                                        c.id === condition.id ? {...c, date: e.target.value} : c
                                      );
                                      setConditions(updated);
                                    }}
                                    className="w-full text-sm border border-gray-300 rounded p-1"
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <label className="block text-xs text-gray-500 mb-1">Notes</label>
                                <textarea
                                  value={condition.notes}
                                  onChange={(e) => {
                                    const updated = conditions.map(c => 
                                      c.id === condition.id ? {...c, notes: e.target.value} : c
                                    );
                                    setConditions(updated);
                                  }}
                                  className="w-full text-sm border border-gray-300 rounded p-2 h-20"
                                />
                              </div>
                            </div>
                            <button
                              onClick={() => handleRemoveCondition(condition.id)}
                              className="ml-4 text-red-500 hover:text-red-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add New Condition */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                      <h3 className="font-medium text-gray-700 mb-3">Add New Condition</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Condition Name</label>
                          <input
                            type="text"
                            value={newCondition.name}
                            onChange={(e) => setNewCondition({...newCondition, name: e.target.value})}
                            placeholder="e.g. Asthma, Hypertension"
                            className="w-full border border-gray-300 rounded p-2 text-sm"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs text-gray-500 mb-1">Date Diagnosed</label>
                            <input
                              type="date"
                              value={newCondition.date}
                              onChange={(e) => setNewCondition({...newCondition, date: e.target.value})}
                              className="w-full border border-gray-300 rounded p-1 text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Notes</label>
                          <textarea
                            value={newCondition.notes}
                            onChange={(e) => setNewCondition({...newCondition, notes: e.target.value})}
                            placeholder="Additional details about the condition"
                            className="w-full border border-gray-300 rounded p-2 text-sm h-20"
                          />
                        </div>
                        <button
                          onClick={handleAddCondition}
                          className="flex items-center px-3 py-1.5 bg-teal-50 text-teal-600 hover:bg-teal-100 rounded text-sm"
                        >
                          <Plus className="w-4 h-4 mr-1" />
                          Add Condition
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {conditions.length > 0 ? (
                      conditions.map((condition) => (
                        <div key={condition.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => setExpandedCondition(expandedCondition === condition.id ? null : condition.id)}
                            className="w-full flex justify-between items-center p-4 hover:bg-gray-50"
                          >
                            <div className="flex items-center">
                              <Activity className="w-5 h-5 text-teal-500 mr-3" />
                              <div className="text-left">
                                <h3 className="font-medium text-gray-800">{condition.name}</h3>
                                <p className="text-xs text-gray-500 mt-1">
                                  Diagnosed: {new Date(condition.date).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                            {expandedCondition === condition.id ? (
                              <ChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </button>
                          {expandedCondition === condition.id && (
                            <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
                              <h4 className="text-xs font-medium text-gray-500 mb-2">NOTES</h4>
                              <p className="text-sm text-gray-700 whitespace-pre-wrap">{condition.notes}</p>
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Activity className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                        <p>No medical conditions recorded</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatInfo;