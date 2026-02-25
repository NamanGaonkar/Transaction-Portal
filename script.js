// Transaction data
const transactions = [
    { id: 'TXN-001', date: '2026-02-25', amount: '₹1,250.00', status: 'completed' },
    { id: 'TXN-002', date: '2026-02-25', amount: '₹890.50', status: 'pending' },
    { id: 'TXN-003', date: '2026-02-24', amount: '₹2,340.00', status: 'completed' },
    { id: 'TXN-004', date: '2026-02-24', amount: '₹567.80', status: 'failed' },
    { id: 'TXN-005', date: '2026-02-23', amount: '₹1,890.00', status: 'completed' },
    { id: 'TXN-006', date: '2026-02-23', amount: '₹445.25', status: 'pending' },
    { id: 'TXN-007', date: '2026-02-22', amount: '₹3,120.00', status: 'completed' },
    { id: 'TXN-008', date: '2026-02-22', amount: '₹756.90', status: 'completed' },
    { id: 'TXN-009', date: '2026-02-21', amount: '₹2,234.50', status: 'pending' },
    { id: 'TXN-010', date: '2026-02-21', amount: '₹990.00', status: 'completed' }
];

let filteredTransactions = [...transactions];

// Check login status on page load
window.onload = function() {
    if (localStorage.getItem('user')) {
        showDashboard();
    }
};

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        localStorage.setItem('user', username);
        showDashboard();
    } else {
        alert('Please enter username and password');
    }
}

// Logout function is her
function logout() {
    localStorage.removeItem('user');
    document.getElementById('loginOverlay').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
}

// to  Show the  dashboard
function showDashboard() {
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    populateTransactions();
}

// main  transactions table
function populateTransactions() {
    const tableBody = document.getElementById('transactionTable');
    tableBody.innerHTML = filteredTransactions.map(tx => `
        <tr>
            <td>${tx.id}</td>
            <td>${tx.date}</td>
            <td>${tx.amount}</td>
            <td><span class="status ${tx.status}">${tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}</span></td>
        </tr>
    `).join('');
}

// i will sort the Sort transactions
function sortTransactions() {
    const sortBy = document.getElementById('sortBy').value;
    filteredTransactions.sort((a, b) => {
        if (sortBy === 'amount') {
            return parseFloat(b.amount.replace(/[₹,]/g, '')) - parseFloat(a.amount.replace(/[₹,]/g, ''));
        } else if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date);
        } else {
            return a.id.localeCompare(b.id);
        }
    });
    populateTransactions();
}

//here the code will  Filter transactions
function filterTransactions() {
    const filterStatus = document.getElementById('filterStatus').value;
    if (filterStatus === 'all') {
        filteredTransactions = [...transactions];
    } else {
        filteredTransactions = transactions.filter(tx => tx.status === filterStatus);
    }
    sortTransactions();
}

// this is to Toggle dropdown
function toggleDropdown(element) {
    const dropdown = element.querySelector('.dropdown');
    dropdown.classList.toggle('open');
}
