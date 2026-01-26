// Payment Processing System

// Customer payment data (PCI-DSS VIOLATION)
const customers = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        creditCard: "4532-1234-5678-9010",  // Credit card in plain text
        cvv: "123",  // CVV stored (MAJOR VIOLATION)
        expiryDate: "12/25",
        billingAddress: "789 Pine St, Chicago, IL 60601",
        ssn: "111-22-3333",  // SSN stored with payment info
        phone: "+1-555-0300"
    },
    {
        id: 2,
        name: "Bob Williams",
        email: "bob@example.com",
        creditCard: "5425-2334-3010-9876",
        cvv: "456",
        expiryDate: "06/26",
        billingAddress: "321 Elm St, Boston, MA 02101",
        ssn: "444-55-6666",
        phone: "+1-555-0400"
    }
];

// Database connection with hardcoded credentials
const dbConnection = {
    host: "payment-db.company.com",
    user: "payment_admin",
    password: "PaymentPass2024!",
    database: "payments"
};

// Process payment without encryption (VIOLATION)
function processPayment(customerId, amount) {
    const customer = customers.find(c => c.id === customerId);
    
    console.log("Processing payment for:", customer.email);
    console.log("Card:", customer.creditCard);  // Logging card number
    console.log("CVV:", customer.cvv);  // Logging CVV
    console.log("Amount:", amount);
    
    return { success: true, transactionId: Math.random() };
}

// Store payment info without consent (GDPR/CCPA VIOLATION)
function savePaymentMethod(paymentData) {
    // No consent mechanism
    // No encryption
    
    console.log("Saving payment method:", paymentData);
    customers.push(paymentData);
}

// Share payment data with third parties (VIOLATION)
function sendToAnalytics(customerId) {
    const customer = customers.find(c => c.id === customerId);
    
    const analyticsData = {
        email: customer.email,
        creditCard: customer.creditCard,
        ssn: customer.ssn,
        phone: customer.phone
    };
    
    console.log("Sending to analytics:", analyticsData);
}

// No data retention policy (GDPR VIOLATION)
// Payment data stored indefinitely

module.exports = {
    customers,
    dbConnection,
    processPayment,
    savePaymentMethod,
    sendToAnalytics
};
