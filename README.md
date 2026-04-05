# 💰 FinTrack – Finance Dashboard

A modern, responsive, and interactive **Finance Dashboard** built using **React.js** and **Redux Toolkit**, designed to help users track income, expenses, and financial insights in a clean and intuitive UI.

---

## 🚀 Live Features

### 📊 Dashboard Overview

- Summary cards displaying:
  - Total Balance
  - Total Income
  - Total Expenses

- Clean and visually appealing UI with gradient cards
- Responsive layout for all screen sizes

---

### 📈 Charts & Analytics

- **Balance Trend (Line Chart)** – shows financial growth over time
- **Spending Breakdown (Pie Chart)** – category-wise expense visualization
- Interactive tooltips and smooth animations

---

### 💳 Transactions Management

- Add, Edit, and Delete transactions
- Search transactions by category
- Filter by:
  - Income / Expense

- Sort transactions:
  - Latest

---

### 🛠 Role-Based Access Control

- **Viewer**
  - Can view transactions and insights

- **Admin**
  - Can add, edit, and delete transactions
  - Access to action menu (3-dot dropdown)

---

### 📊 Insights Section

- Highest spending category
- Savings analysis (Income vs Expense)
- Expense ratio with progress bar
- Smart financial tips

---

### 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts:
  - Sidebar → Drawer (mobile)
  - Cards → Grid system

- Works across all devices

---

### 🎨 UI/UX Highlights

- Modern fintech-style design
- Gradient cards & soft shadows
- Hover animations & transitions
- Glassmorphism effects

---

### 🧭 Navigation System

- Dynamic navbar with active route highlighting
- Mobile hamburger menu
- Route-based state management

---

## 🧱 Tech Stack

- **Frontend:** React.js (Vite)
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Icons:** React Icons
- **Routing:** React Router DOM

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── SummaryCard.jsx
│   ├── TransactionsSection.jsx
│   ├── InsightsSection.jsx
│   └── ChartsSection.jsx
│
├── redux/
│   └── slice/
│       └── transaction.slice.js
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   └── Insights.jsx
│
└── App.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Yaman-Gahlout/FinTrack.git

# Navigate to project folder
cd FinTrack

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📌 Future Enhancements

- 🔄 Data persistence using localStorage / backend
- 📤 Export transactions (CSV/PDF)
- 🌙 Dark mode support
- 🔔 Notifications & alerts
- 📊 Advanced analytics (weekly/monthly trends)
- 🔐 Authentication system

---

## 👨‍💻 Author

**Yaman Gahlout**
Aspiring MERN Stack Developer 🚀

---
