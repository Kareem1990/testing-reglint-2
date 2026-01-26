// Healthcare Patient Management System

// Patient records with PHI (HIPAA VIOLATION)
const patients = [
    {
        id: 1,
        name: "Michael Brown",
        email: "michael.b@email.com",
        ssn: "222-33-4444",
        dateOfBirth: "1978-05-12",
        phone: "+1-555-0500",
        address: "555 Health St, Miami, FL 33101",
        diagnosis: "Type 2 Diabetes, Hypertension",
        medications: ["Metformin", "Lisinopril"],
        labResults: "HbA1c: 7.2%, Blood Pressure: 145/90",
        insuranceNumber: "INS-123456789",
        doctorNotes: "Patient needs lifestyle changes"
    },
    {
        id: 2,
        name: "Emily Davis",
        email: "emily.d@email.com",
        ssn: "555-66-7777",
        dateOfBirth: "1992-08-20",
        phone: "+1-555-0600",
        address: "777 Care Ave, Seattle, WA 98101",
        diagnosis: "Asthma, Anxiety Disorder",
        medications: ["Albuterol", "Sertraline"],
        labResults: "Pulmonary function test: Normal",
        insuranceNumber: "INS-987654321",
        doctorNotes: "Follow up in 3 months"
    }
];

// Database credentials exposed
const medicalDbConfig = {
    host: "medical-records.hospital.com",
    user: "doctor_admin",
    password: "MedicalPass2024!",
    database: "patient_records"
};

// Store patient data without encryption (HIPAA VIOLATION)
function addPatient(patientData) {
    console.log("Adding patient:", patientData.name);
    console.log("SSN:", patientData.ssn);
    console.log("Diagnosis:", patientData.diagnosis);
    
    patients.push(patientData);
    return { success: true };
}

// Share PHI without authorization (HIPAA VIOLATION)
function shareWithInsurance(patientId) {
    const patient = patients.find(p => p.id === patientId);
    
    const sharedData = {
        name: patient.name,
        ssn: patient.ssn,
        diagnosis: patient.diagnosis,
        medications: patient.medications,
        labResults: patient.labResults
    };
    
    console.log("Sharing with insurance:", sharedData);
}

// No access logging (HIPAA VIOLATION)
function viewPatientRecord(patientId) {
    const patient = patients.find(p => p.id === patientId);
    console.log("Viewing patient:", patient);
    // No audit trail
}

// Export PHI without authorization (HIPAA VIOLATION)
function exportRecords() {
    console.log("Exporting all patient records:", patients);
    return patients;
}

module.exports = {
    patients,
    medicalDbConfig,
    addPatient,
    shareWithInsurance,
    viewPatientRecord,
    exportRecords
};
