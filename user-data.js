// User Data Management System

// Storing sensitive user data without encryption (GDPR/CCPA VIOLATION)
const users = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@example.com",
        password: "MyPassword123",  // Plain text password (VIOLATION)
        ssn: "123-45-6789",  // SSN without encryption (VIOLATION)
        phone: "+1-555-123-4567",
        address: "123 Main St, New York, NY 10001",
        dateOfBirth: "1985-06-15",
        medicalHistory: "Diabetes, High Blood Pressure"  // PHI without protection (HIPAA VIOLATION)
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        password: "SecretPass456",
        ssn: "987-65-4321",
        phone: "+1-555-987-6543",
        address: "456 Oak Ave, Los Angeles, CA 90001",
        dateOfBirth: "1990-03-22",
        medicalHistory: "Asthma"
    }
];

// Database credentials hardcoded (SECURITY VIOLATION)
const dbConfig = {
    host: "prod-database.company.com",
    user: "admin",
    password: "Admin123!@#",
    database: "user_data"
};

// No consent mechanism for data collection (GDPR VIOLATION)
function collectUserData(userData) {
    // Collecting data without user consent
    // No privacy policy acceptance
    
    console.log("Collecting user data:", userData.email);
    console.log("SSN:", userData.ssn);  // Logging sensitive data (VIOLATION)
    
    users.push(userData);
    return { success: true };
}

// Sharing data with third parties without consent (GDPR/CCPA VIOLATION)
function shareWithPartners(userId) {
    const user = users.find(u => u.id === userId);
    
    // Sending PII to third parties without consent
    const sharedData = {
        email: user.email,
        name: user.name,
        phone: user.phone,
        ssn: user.ssn,
        address: user.address
    };
    
    console.log("Sharing data with partners:", sharedData);
    // No opt-out mechanism (VIOLATION)
}

// No data deletion capability (GDPR RIGHT TO BE FORGOTTEN VIOLATION)
// Missing function to delete user data

// Tracking without consent (GDPR VIOLATION)
function trackUser(userId, activity) {
    console.log(`Tracking user ${userId}: ${activity}`);
    // No consent for tracking
    // No anonymization
}

// Export all functions
module.exports = {
    users,
    dbConfig,
    collectUserData,
    shareWithPartners,
    trackUser
};
