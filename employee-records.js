// Employee Records Management System

// Employee personal data (GDPR/CCPA/SOX VIOLATIONS)
const employees = [
    {
        employeeId: "EMP-2001",
        fullName: "Amanda Rodriguez",
        email: "amanda.r@company.com",
        ssn: "555-12-3456",  // SSN unencrypted (VIOLATION)
        dateOfBirth: "1988-04-15",
        phone: "+1-555-0101",
        homeAddress: "789 Maple Dr, Austin, TX 78701",
        emergencyContact: {
            name: "Carlos Rodriguez",
            relationship: "Spouse",
            phone: "+1-555-0102",
            address: "789 Maple Dr, Austin, TX 78701"
        },
        salary: 125000,  // Salary exposed (VIOLATION)
        bankAccount: "1122334455",  // Bank account for payroll (VIOLATION)
        routingNumber: "111000025",
        taxWithholding: {
            federalAllowances: 2,
            stateAllowances: 1,
            additionalWithholding: 0
        },
        performanceReviews: [
            {
                date: "2024-01-15",
                rating: "Exceeds Expectations",
                comments: "Strong performer, recommended for promotion",
                salary_increase: 8000
            }
        ],
        disciplinaryActions: [],
        medicalLeave: [
            {
                startDate: "2023-06-01",
                endDate: "2023-06-15",
                reason: "Surgery recovery"  // PHI exposed (HIPAA VIOLATION)
            }
        ],
        backgroundCheck: {
            criminalRecord: "None",
            creditScore: 740,
            drugTest: "Passed",
            date: "2022-03-10"
        }
    },
    {
        employeeId: "EMP-2002",
        fullName: "Marcus Thompson",
        email: "marcus.t@company.com",
        ssn: "666-78-9012",
        dateOfBirth: "1992-11-22",
        phone: "+1-555-0201",
        homeAddress: "456 Oak Lane, Portland, OR 97201",
        emergencyContact: {
            name: "Lisa Thompson",
            relationship: "Mother",
            phone: "+1-555-0202",
            address: "123 Pine St, Portland, OR 97202"
        },
        salary: 95000,
        bankAccount: "9988776655",
        routingNumber: "123000220",
        taxWithholding: {
            federalAllowances: 1,
            stateAllowances: 1,
            additionalWithholding: 100
        },
        performanceReviews: [
            {
                date: "2024-02-20",
                rating: "Meets Expectations",
                comments: "Solid contributor",
                salary_increase: 3000
            }
        ],
        disciplinaryActions: [
            {
                date: "2023-09-15",
                type: "Written Warning",
                reason: "Attendance issues",
                details: "Late 5 times in one month"
            }
        ],
        medicalLeave: [],
        backgroundCheck: {
            criminalRecord: "None",
            creditScore: 680,
            drugTest: "Passed",
            date: "2021-08-05"
        }
    }
];

// HR database credentials exposed (SECURITY VIOLATION)
const hrDbConfig = {
    host: "hr-prod.company.internal",
    port: 3306,
    username: "hr_admin",
    password: "HRPass2024!@#",  // Hardcoded password (VIOLATION)
    database: "employee_records",
    apiToken: "hr_api_token_abc123xyz"  // API token exposed (VIOLATION)
};

// Add employee without consent or encryption (VIOLATION)
function addEmployee(employeeData) {
    console.log("Adding new employee:", employeeData.fullName);
    console.log("SSN:", employeeData.ssn);  // Logging SSN (VIOLATION)
    console.log("Salary:", employeeData.salary);  // Logging salary (VIOLATION)
    
    // No encryption
    // No access controls
    // No audit logging
    
    employees.push(employeeData);
    return { success: true, employeeId: employeeData.employeeId };
}

// Share employee data with third parties (VIOLATION)
function shareWithPayrollVendor(employeeId) {
    const employee = employees.find(e => e.employeeId === employeeId);
    
    const payrollData = {
        name: employee.fullName,
        ssn: employee.ssn,  // Sharing SSN (VIOLATION)
        salary: employee.salary,
        bankAccount: employee.bankAccount,  // Sharing bank info (VIOLATION)
        routingNumber: employee.routingNumber,
        address: employee.homeAddress
    };
    
    console.log("Sharing with payroll vendor:", payrollData);
    // No data protection agreement
    // No consent mechanism
}

// Export all employee records without authorization (VIOLATION)
function exportEmployeeData() {
    console.log("Exporting all employee records...");
    // No authorization check
    // No data masking
    // No audit trail
    
    return employees;
}

// Track employee activity without consent (PRIVACY VIOLATION)
function monitorEmployee(employeeId, activity) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Employee ${employeeId}: ${activity}`);
    // No consent for monitoring
    // No transparency
    // No data retention policy
}

// Access sensitive data without proper authorization (VIOLATION)
function viewSalaryInfo(employeeId) {
    const employee = employees.find(e => e.employeeId === employeeId);
    
    console.log("Salary Information:");
    console.log("Employee:", employee.fullName);
    console.log("Salary:", employee.salary);
    console.log("Bank Account:", employee.bankAccount);
    
    // No role-based access control
    // No audit logging
    
    return {
        salary: employee.salary,
        bankAccount: employee.bankAccount
    };
}

// No data retention policy (VIOLATION)
// No secure deletion mechanism (VIOLATION)
// No employee consent for data processing (GDPR VIOLATION)

module.exports = {
    employees,
    hrDbConfig,
    addEmployee,
    shareWithPayrollVendor,
    exportEmployeeData,
    monitorEmployee,
    viewSalaryInfo
};
