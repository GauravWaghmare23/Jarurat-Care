import React from 'react'

function PatientCard({ patient, onViewDetails }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between min-h-[280px]">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-extrabold text-2xl mr-6 select-none">
          {patient.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{patient.name}</h3>
          <p className="text-green-600 font-semibold">Age: {patient.age}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6 text-gray-700">
        <p className="text-base">
          <span className="font-semibold">Contact:</span> {patient.contact}
        </p>
        <p className="text-base truncate" title={patient.address}>
          <span className="font-semibold">Address:</span> {patient.address || 'N/A'}
        </p>
      </div>

      <button
        onClick={() => onViewDetails(patient)}
        className="mt-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl text-lg font-semibold shadow-lg transition"
      >
        View Details
      </button>
    </div>
  )
}

export default PatientCard
