import React from "react";

function PatientModal({ patient, isOpen, onClose }) {
  if (!isOpen || !patient) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 backdrop-blur-md bg-white/30"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-[95vw] max-w-7xl max-h-[90vh] p-12 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{ height: "90vh" }}
      >
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-8 right-8 text-gray-600 hover:text-gray-900 text-5xl font-extrabold focus:outline-none"
        >
          &times;
        </button>

        <header className="flex items-center space-x-10 mb-10 flex-shrink-0 max-md:flex-col max-md:items-start max-md:space-x-0 max-md:space-y-6">
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-green-600 text-white font-extrabold text-6xl select-none">
            {patient.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              {patient.name}
            </h2>
            <p className="text-gray-700 font-semibold mt-2 text-xl">
              {patient.gender || "N/A"} | Age: {patient.age || "N/A"}
            </p>
            <p className="text-gray-500 mt-1 text-lg">{patient.email}</p>
          </div>
        </header>

        <main className="flex-grow overflow-auto">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-20 text-gray-700">
            <div>
              <h3 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4">
                Contact Details
              </h3>
              <p className="mb-5 text-xl">
                <span className="font-semibold">Phone:</span>{" "}
                {patient.contact || "N/A"}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-semibold">Email:</span>{" "}
                {patient.email || "N/A"}
              </p>
              <p className="mb-5 text-xl break-words">
                <span className="font-semibold">Address:</span>{" "}
                {patient.address || "N/A"}
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 border-b border-gray-200 pb-4">
                Medical Record
              </h3>
              <p className="mb-6 text-xl">
                <span className="font-semibold">Blood Type:</span>{" "}
                {patient.medical_record.blood_type || "N/A"}
              </p>
              <p className="mb-6 text-xl">
                <span className="font-semibold">History:</span>{" "}
                {patient.medical_record.history || "N/A"}
              </p>
              <p className="mb-6 text-xl">
                <span className="font-semibold">Allergies:</span>{" "}
                {patient.medical_record.allergies?.length
                  ? patient.medical_record.allergies.join(", ")
                  : "None"}
              </p>
              <p className="mb-6 text-xl">
                <span className="font-semibold">Last Visit:</span>{" "}
                {patient.medical_record.last_visit || "N/A"}
              </p>
            </div>
          </section>

          <section className="mt-14 text-gray-700 border-t border-gray-200 pt-10">
            <h3 className="text-3xl font-bold mb-8">Hospital Condition Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 text-xl">
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {patient.medical_record.hospital_condition?.status || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Admitted For:</span>{" "}
                {patient.medical_record.hospital_condition?.admitted_for || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Discharge Date:</span>{" "}
                {patient.medical_record.hospital_condition?.discharge_date || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Primary Physician:</span>{" "}
                {patient.medical_record.hospital_condition?.primary_physician || "N/A"}
              </p>
            </div>
          </section>
        </main>

        <footer className="flex-shrink-0 flex justify-end mt-12">
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-10 py-3 rounded-3xl font-semibold hover:bg-gray-700 transition"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  )
}

export default PatientModal
