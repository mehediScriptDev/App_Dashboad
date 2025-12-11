# App Dashboard

A modern, responsive admin dashboard built with React and Vite, designed for managing users, content, questions, analytics, subscriptions, and notifications.

## ✨ Features

- 🔐 **Authentication System** - Secure login with protected routes
- 👥 **User Management** - Manage application users
- 📝 **Content Management** - Create and manage study guides and flashcards
- ❓ **Questions Management** - Handle questions and quizzes
- 📊 **Analytics Dashboard** - Monitor application metrics and insights
- 💳 **Subscriptions** - Manage user subscriptions
- 🔔 **Notifications** - Handle system notifications
- 🎨 **Modern UI** - Beautiful interface built with Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on all devices

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **HTTP Client:** Axios
- **Icons:** Lucide React, React Icons
- **Code Quality:** ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mehediScriptDev/App_Dashboad.git
   cd App_Dashboad
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file and configure it:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your API configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 📁 Project Structure

```
App_Dashboad/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── Common/          # Shared components (e.g., Sidebar)
│   ├── config/          # Configuration files (e.g., axios instance)
│   ├── context/         # React Context providers (e.g., AuthContext)
│   ├── layouts/         # Layout components (e.g., DashboardLayout)
│   ├── pages/           # Page components
│   │   ├── analytics/   # Analytics page
│   │   ├── Content/     # Content management
│   │   ├── dashboard/   # Dashboard home
│   │   ├── login/       # Login page
│   │   ├── notifications/ # Notifications management
│   │   ├── questions/   # Questions management
│   │   ├── Subscriptions/ # Subscription management
│   │   └── users/       # User management
│   ├── private/         # Protected route components
│   ├── routes/          # Route configuration
│   ├── services/        # API service layer
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables template
├── .gitignore           # Git ignore configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```

## 🔧 Configuration

### ESLint

The project uses ESLint for code quality. Configuration can be found in `eslint.config.js`.

### Vite

Vite configuration is available in `vite.config.js` for build and development customization.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Mehedi Hasan**
- GitHub: [@mehediScriptDev](https://github.com/mehediScriptDev)

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Note:** This is an active development project. Some features may be under construction.
