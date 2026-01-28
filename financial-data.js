// Financial Data Management System

// Customer financial records (MULTIPLE VIOLATIONS)
const financialRecords = [
    {
        customerId: 1001,
        fullName: "Jennifer Martinez",
        email: "jennifer.m@email.com",
        ssn: "123-45-6789",  // SSN in plain text (VIOLATION)
        bankAccount: "9876543210",  // Bank account unencrypted (VIOLATION)
        routingNumber: "021000021",
        creditScore: 720,
        annualIncome: 95000,
        taxId: "12-3456789",  // Tax ID exposed (VIOLATION)
        creditCards: [
            {
                number: "4532-1111-2222-3333",  // Card number stored (PCI-DSS VIOLATION)
                cvv: "987",  // CVV stored (CRITICAL VIOLATION)
                expiry: "08/27",
                limit: 15000,
                balance: 3200
            }
        ],
        loans: [
            {
                type: "Mortgage",
                amount: 350000,
                interestRate: 3.5,
                monthlyPayment: 1573
            }
        ],
        investmentAccounts: {
            brokerage: "INV-123456",
            balance: 125000,
            holdings: ["AAPL", "GOOGL", "MSFT"]
        }
    },
    {
        customerId: 1002,
        fullName: "David Chen",
        email: "david.chen@email.com",
        ssn: "987-65-4321",
        bankAccount: "1234567890",
        routingNumber: "011000015",
        creditScore: 680,
        annualIncome: 78000,
        taxId: "98-7654321",
        creditCards: [
            {
                number: "5425-4444-5555-6666",
                cvv: "456",
                expiry: "12/26",
                limit: 10000,
                balance: 5600
            }
        ],
        loans: [],
        investmentAccounts: {
            brokerage: "INV-789012",
            balance: 45000,
            holdings: ["TSLA", "AMZN"]
        }
    }
];

// Database credentials hardcoded (SECURITY VIOLATION)
const financialDbConfig = {
    host: "financial-prod.bank.com",
    port: 5432,
    username: "fin_admin",
    password: "BankP@ssw0rd2024!",  // Hardcoded password (VIOLATION)
    database: "customer_financials",
    apiKey: "sk_live_51HxYz123456789"  // API key exposed (VIOLATION)
};

// Process transaction without encryption (VIOLATION)
function processTransaction(customerId, amount, cardNumber, cvv) {
    console.log("Processing transaction:");
    console.log("Customer ID:", customerId);
    console.log("Card Number:", cardNumber);  // Logging card data (VIOLATION)
    console.log("CVV:", cvv);  // Logging CVV (CRITICAL VIOLATION)
    console.log("Amount:", amount);
    
    // No encryption, no tokenization
    return {
        success: true,
        transactionId: `TXN-${Date.now()}`,
        cardNumber: cardNumber  // Returning card number (VIOLATION)
    };
}

// Share financial data with third parties without consent (GLBA VIOLATION)
function shareWithCreditBureau(customerId) {
    const customer = financialRecords.find(c => c.customerId === customerId);
    
    const sharedData = {
        name: customer.fullName,
        ssn: customer.ssn,  // Sharing SSN (VIOLATION)
        creditScore: customer.creditScore,
        income: customer.annualIncome,
        bankAccount: customer.bankAccount,  // Sharing account number (VIOLATION)
        taxId: customer.taxId
    };
    
    console.log("Sharing with credit bureau:", sharedData);
    // No consent mechanism (VIOLATION)
    // No data minimization (VIOLATION)
}

// Store financial data without proper security (VIOLATION)
function addFinancialRecord(recordData) {
    // No encryption
    // No access controls
    // No audit logging
    
    console.log("Storing financial record:", recordData);
    financialRecords.push(recordData);
    
    return { success: true, message: "Record stored" };
}

// Export customer data without authorization (VIOLATION)
function exportAllRecords() {
    console.log("Exporting all financial records...");
    // No authorization check
    // No data masking
    // No audit trail
    
    return financialRecords;
}

// Track user activity without consent (GDPR VIOLATION)
function trackFinancialActivity(customerId, activity) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Customer ${customerId}: ${activity}`);
    // No consent for tracking
    // No anonymization
    // No retention policy
}

// No data deletion capability (RIGHT TO BE FORGOTTEN VIOLATION)
// Missing function to securely delete customer data

module.exports = {
    financialRecords,
    financialDbConfig,
    processTransaction,
    shareWithCreditBureau,
    addFinancialRecord,
    exportAllRecords,
    trackFinancialActivity
};
