aimport React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setPatients,
  setLoading,
  setError,
  setSelectedPatient,
  addPatient
} from '../store/store.js'
import PatientCard from '../components/PatientCard'
import PatientModal from '../components/PatientModal'
import patientsData from '../data/patients.json'

function Patients() {
  const dispatch = useDispatch()
  const { data: patients, loading, error, selectedPatient } = useSelector(
    (state) => state.patients
  )

  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    contact: '',
    email: '',
    address: '',
    history: '',
    blood_type: '',
    allergies: '',
    last_visit: '',
    status: '',
    admitted_for: '',
    discharge_date: '',
    primary_physician: ''
  })

  useEffect(() => {
    dispatch(setLoading(true))
    setTimeout(() => {
      dispatch(setPatients(patientsData))
      dispatch(setLoading(false))
      dispatch(setError(null))
    }, 1000)
  }, [dispatch])

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleViewDetails = (patient) => {
    dispatch(setSelectedPatient(patient))
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    dispatch(setSelectedPatient(null))
  }

  const handleAddPatient = (e) => {
    e.preventDefault()
    if (newPatient.name && newPatient.age && newPatient.contact) {
      const patient = {
        ...newPatient,
        id: patients.length + 1,
        age: parseInt(newPatient.age)
      }
      dispatch(addPatient(patient))
      setNewPatient({
        name: '',
        age: '',
        gender: '',
        contact: '',
        email: '',
        address: '',
        history: '',
        blood_type: '',
        allergies: '',
        last_visit: '',
        status: '',
        admitted_for: '',
        discharge_date: '',
        primary_physician: ''
      })
      setShowAddForm(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewPatient((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-5"></div>
          <p className="text-gray-700 font-medium tracking-wider">Loading patients...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-4 text-red-600">⚠️</span>
          <p className="mb-4 text-red-600 font-bold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 px-4 pb-16 pt-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 tracking-tight">
          Patient <span className="text-green-600">Dashboard</span>
        </h1>
        {/* Search and Actions Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 max-w-4xl mx-auto border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Section */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search patients by name, contact, or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl px-6 py-4 pl-14 pr-4 border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-400 focus:border-transparent focus:bg-white transition-all duration-200 text-lg"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 w-full lg:w-auto justify-center lg:justify-end">
              <button
                onClick={() => setShowAddForm((prev) => !prev)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-105 ${
                  showAddForm
                    ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    : "bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-green-500/25"
                }`}
              >
                <span className="flex items-center gap-2">
                  {showAddForm ? (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Cancel
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add Patient
                    </>
                  )}
                </span>
              </button>
            </div>
          </div>

          {/* Search Results Info */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                {searchQuery ? (
                  <>Found <strong>{filteredPatients.length}</strong> patient{filteredPatients.length !== 1 ? 's' : ''} matching "<strong>{searchQuery}</strong>"</>
                ) : (
                  <>Showing all <strong>{patients.length}</strong> patients</>
                )}
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </div>

        {showAddForm && (
          <form
            onSubmit={handleAddPatient}
            className="bg-white rounded-3xl shadow-xl p-10 max-w-3xl mx-auto mb-14 border border-gray-200"
          >
            <h2 className="text-2xl font-extrabold text-green-700 mb-8 text-center">
              Add New Patient
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Age *</label>
                <input
                  type="number"
                  name="age"
                  min="0"
                  value={newPatient.age}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={newPatient.gender}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Contact *</label>
                <input
                  type="text"
                  name="contact"
                  value={newPatient.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newPatient.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={newPatient.address}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Blood Type</label>
                <select
                  name="blood_type"
                  value={newPatient.blood_type}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                >
                  <option value="">Select Blood Type</option>
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
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Allergies</label>
                <input
                  type="text"
                  name="allergies"
                  value={newPatient.allergies}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Last Visit</label>
                <input
                  type="date"
                  name="last_visit"
                  value={newPatient.last_visit}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Hospital Status</label>
                <select
                  name="status"
                  value={newPatient.status}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                >
                  <option value="">Select Status</option>
                  <option value="Discharged">Discharged</option>
                  <option value="Admitted">Admitted</option>
                  <option value="Active Outpatient">Active Outpatient</option>
                  <option value="Surgery Scheduled">Surgery Scheduled</option>
                  <option value="Active Therapy">Active Therapy</option>
                  <option value="Admitted (Stable)">Admitted (Stable)</option>
                  <option value="Admitted (Critical)">Admitted (Critical)</option>
                  <option value="Follow-up">Follow-up</option>
                  <option value="Active Treatment">Active Treatment</option>
                  <option value="Admitted (Monitoring)">Admitted (Monitoring)</option>
                  <option value="N/A">N/A</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Admitted For</label>
                <input
                  type="text"
                  name="admitted_for"
                  value={newPatient.admitted_for}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Discharge Date</label>
                <input
                  type="date"
                  name="discharge_date"
                  value={newPatient.discharge_date}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Primary Physician</label>
                <input
                  type="text"
                  name="primary_physician"
                  value={newPatient.primary_physician}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold text-gray-700">Medical History</label>
                <textarea
                  name="history"
                  value={newPatient.history}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 focus:outline-none transition bg-gray-50 resize-none"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-end gap-6">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-8 py-3 bg-gray-400 text-white rounded-xl font-semibold hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Add Patient
              </button>
            </div>
          </form>
        )}



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPatients.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-400">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-lg font-light">No patients found.</p>
            </div>
          ) : (
            filteredPatients.map((patient) => (
              <div
                key={patient.id}
                className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">
                    Patient
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{patient.name}</h3>
                  <p className="text-gray-600 mb-1">Age: {patient.age}</p>
                  <p className="text-gray-600">Contact: {patient.contact}</p>
                </div>
                <button
                  onClick={() => handleViewDetails(patient)}
                  className="mt-6 py-2 px-6 bg-green-100 text-green-800 rounded-xl font-semibold shadow hover:bg-green-200 transition"
                >
                  View Details
                </button>
              </div>
            ))
          )}
        </div>

        {isModalOpen && selectedPatient && (
          <PatientModal
            patient={selectedPatient}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  )
}

export default Patients
