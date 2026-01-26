// Code with Critical Compliance Issues

// Exposed API credentials (CRITICAL)
const apiCredentials = {
    username: "api_admin",
    password: "CriticalPass123!",
    secretKey: "critical_secret_key_12345"
};

// Unencrypted sensitive data (CRITICAL)
const sensitiveData = [
    {
        userId: 1,
        name: "Robert Wilson",
        ssn: "888-99-0000",  // Critical: SSN exposed
        password: "userpass123",  // Critical: Plain text password
        creditCard: "4111-1111-1111-1111",  // Critical: Credit card exposed
        cvv: "789",  // Critical: CVV stored
        medicalRecord: "HIV positive, Cancer treatment"  // Critical: PHI exposed
    }
];

// No encryption, no consent, no security (CRITICAL VIOLATIONS)
function storeUserData(data) {
    console.log("Storing critical data:", data);
    sensitiveData.push(data);
}

module.exports = { apiCredentials, sensitiveData, storeUserData };
