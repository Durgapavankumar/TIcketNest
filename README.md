# TicketNest 🎬

A full-stack movie ticket booking platform designed for high availability and seamless user experience.

![TicketNest Banner](https://via.placeholder.com/800x400?text=TicketNest+Preview)
*(Preview of the application interface)*

## 🚀 Features
- **Movie Listing**: Real-time fetching of now-showing movies.
- **Seat Selection**: Interactive theatre map for seat reservation.
- **Booking Flow**: Secure checkout process with Stripe integration.
- **Admin Dashboard**: Manage movies, showtimes, and theaters.

## 🛠️ Tech Stack
- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Deployment**: AWS EC2 (Backend), Vercel/GitHub Pages (Frontend)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js v18+
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Durgapavankumar/TicketNest.git
   cd TicketNest
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   # Create .env file with PORT=5000 and MONGO_URI
   npm start
   ```

3. **Setup Frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```

## 🧪 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/movies` | Fetch all movies |
| `POST` | `/api/bookings` | Create a new booking |

---
*Built by [Durga Pavan Kumar Pailla](https://github.com/Durgapavankumar)*
