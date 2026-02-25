# Admin Transaction Portal

A minimalist admin dashboard for managing and viewing transactions with sorting and filtering capabilities.

## Features

- **Secure Login System** - Uses localStorage for session management
- **Responsive Dashboard** - Clean sidebar layout with navigation
- **Transaction Management** - View, sort, and filter transactions
- **Real-time Metrics** - Display key statistics (Cash, Sales, Orders, Users)
- **Interactive UI** - Dropdown menus and dynamic controls

## Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Grid + Flexbox layouts
- **Vanilla JavaScript** - No frameworks, lightweight and fast

## File Structure

```
├── dashboard.html    # Main HTML structure
├── styles.css        # All styling (under 100 lines)
├── script.js         # JavaScript functionality
├── logo.png          # Company logo
└── README.md         # Documentation
```

## How to Use

1. Open `dashboard.html` in any modern browser
2. Login with any username and password (dummy authentication)
3. View transaction data in the main table
4. Use dropdowns to sort (by Date/Amount/ID) or filter (by Status)
5. Click "Masters" or "Transactions" in sidebar for dropdown options
6. Logout to clear session

## Key Components

### Navigation
- **Masters** - User, Dept, Dash management
- **Transactions** - All Transactions, Pending, History
- **Reports** - Analytics section

### Metrics Dashboard
- Total Cash in Rupees
- Total Sales
- Pending Orders Count
- Active Users

### Transaction Table
- Displays ID, Date, Amount (₹), Status
- Sort by Date/Amount/ID
- Filter by Completed/Pending/Failed status

## Design Philosophy

- Minimal color palette (grays and whites)
- No heavy shadows or bright colors
- Professional and clean interface
- Fast loading with no external dependencies
- Easy to understand and maintain code

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Local Storage

The app uses browser localStorage to maintain login sessions. Data persists until logout or browser cache is cleared.

---

**Created for**: Interview demonstration
**Currency**: Indian Rupees (₹)
**Code Style**: Clean, commented, and beginner-friendly
