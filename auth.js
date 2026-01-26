// Authentication System

// Hardcoded credentials (SECURITY VIOLATION)
const adminCredentials = {
    username: "admin",
    password: "Admin123!@#",
    apiKey: "test_api_key_12345678"
};

// User database with sensitive info (GDPR/CCPA VIOLATION)
const userDatabase = [
    {
        id: 1,
        username: "john_doe",
        password: "password123",  // Plain text password
        email: "john@example.com",
        ssn: "123-45-6789",  // SSN without encryption
        phone: "+1-555-0100",
        creditCard: "4532-1234-5678-9010",  // Credit card stored
        medicalInfo: "Type 2 Diabetes"  // PHI without protection
    },
    {
        id: 2,
        username: "jane_smith",
        password: "mypassword456",
        email: "jane@example.com",
        ssn: "987-65-4321",
        phone: "+1-555-0200",
        creditCard: "5425-2334-3010-9876",
        medicalInfo: "Hypertension"
    }
];

// No consent for data collection (GDPR VIOLATION)
function registerUser(userData) {
    console.log("Registering user:", userData.email);
    console.log("SSN:", userData.ssn);  // Logging sensitive data
    
    userDatabase.push(userData);
    return { success: true, userId: userDatabase.length };
}

// Sharing data without consent (GDPR/CCPA VIOLATION)
function shareUserData(userId) {
    const user = userDatabase.find(u => u.id === userId);
    
    const sharedData = {
        email: user.email,
        ssn: user.ssn,
        phone: user.phone,
        medicalInfo: user.medicalInfo
    };
    
    console.log("Sharing with partners:", sharedData);
}

// No data deletion (RIGHT TO BE FORGOTTEN VIOLATION)
// Missing delete function

// Tracking without consent (GDPR VIOLATION)
function trackActivity(userId, action) {
    console.log(`User ${userId} performed: ${action}`);
}

module.exports = {
    adminCredentials,
    userDatabase,
    registerUser,
    shareUserData,
    trackActivity
};
