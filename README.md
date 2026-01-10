# 📊 Domain Ranking Comparison

This is the front-end part of a full-stack application that visualizes domain ranking changes over time. Perfect for quick SEO insights without the hassle of authentication.

---

## ✨ Features

- **Visual Comparison**: Compare multiple domain rankings through interactive line graphs
- **Real-time Data**: Get instant ranking insights with a simple interface
- **No Authentication Required**: Jump right in without signing up

---

## 🛠️ Tech Stack

- **Vue.js** - Progressive JavaScript framework
- **Bootstrap CSS** - Responsive styling
- **Axios** - HTTP client for API requests
- **Chart.js** - Beautiful data visualizations

---

## 🎯 How It Works

1. **Add Domains** - Enter domain names through the input form
2. **Request Rankings** - Click "See Ranking" to fetch data
3. **API Call** - Application sends request to backend with domain information
4. **Receive Data** - Backend returns domain rankings over time
5. **Visualize** - Interactive line graph displays the comparison

---

## 🚀 Getting Started

### Prerequisites

Before running this frontend, you **must** set up the backend:

👉 Clone the backend repository: [domain-ranking-be](https://github.com/YuleshMahat/domain-ranking-be.git)

### Installation

```bash
# Clone this repository
git clone [your-repo-url]

# Install dependencies
npm install
# or
yarn install

# Configure environment variables
# Create a .env file based on .env.example
# Add your backend API URL

# Start the development server
npm run dev

# Open your browser and start comparing domains! 🎉
```

---

## 📝 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:your-backend-port
```

Refer to `.env.example` for the complete configuration template.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
