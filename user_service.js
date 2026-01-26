// Simple User Service with Compliance Issues

// Storing user passwords in plain text (SECURITY VIOLATION)
const users = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@example.com",
        password: "MyPassword123",  // Plain text password (VIOLATION)
        ssn: "123-45-6789",  // SSN without encryption (GDPR/CCPA VIOLATION)
        creditCard: "4532-1234-5678-9010",  // Credit card in plain text (PCI-DSS VIOLATION)
        phone: "+1-555-123-4567",
        medicalCondition: "Diabetes"  // PHI without protection (HIPAA VIOLATION)
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        password: "SecretPass456",  // Plain text password
        ssn: "987-65-4321",
        creditCard: "5425-2334-3010-9876",
        phone: "+1-555-987-6543",
        medicalCondition: "Hypertension"
    }
];

// No consent mechanism for data collection (GDPR VIOLATION)
function registerUser(userData) {
    // Collecting data without user consent
    // No privacy policy acceptance
    // No cookie consent
    
    console.log("Registering user:", userData.email);
    console.log("SSN:", userData.ssn);  // Logging sensitive data (VIOLATION)
    
    users.push(userData);
    return { success: true, userId: users.length };
}

// Sharing data with third parties without consent (GDPR/CCPA VIOLATION)
function shareDataWithPartners(userId) {
    const user = users.find(u => u.id === userId);
    
    // Sending PII to third parties without consent
    const partnerData = {
        email: user.email,
        name: user.name,
        ssn: user.ssn,
        phone: user.phone
    };
    
    console.log("Sharing data with marketing partners:", partnerData);
    // No opt-out mechanism (VIOLATION)
}

// No data deletion capability (GDPR RIGHT TO BE FORGOTTEN VIOLATION)
// Missing function to delete user data

// Tracking users without consent (GDPR VIOLATION)
function trackUserActivity(userId, activity) {
    console.log(`User ${userId} activity: ${activity}`);
    // No consent for tracking
    // No anonymization
}

module.exports = { users, registerUser, shareDataWithPartners, trackUserActivity };
