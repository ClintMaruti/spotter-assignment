````md
# Google Flights Clone ✈️

A Google Flights clone built using **React**, **Vite**, and **TypeScript**. This application fetches flight data using the **RapidAPI Sky Scraper API**.

## 🚀 Features

- Search for flights by origin, destination, and dates.
- Display flight details including price, duration, and airlines.
- Responsive and fast UI built with Vite.

---

## 📦 Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/google-flights-clone.git
cd google-flights-clone
```
````

### 2️⃣ Install Dependencies

Make sure you have **Node.js (v16+)** installed, then run:

```sh
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root and add the following:

```env
VITE_RAPIDAPI_KEY=your-rapidapi-key
VITE_RAPIDAPI_HOST=sky-scrapper.p.rapidapi.com
VITE_BASE_URL=https://sky-scrapper.p.rapidapi.com/api/v1
```

Replace `your-rapidapi-key` with your actual API key from **RapidAPI**.

---

## ▶️ Running the App

### Development Mode

Start the development server with:

```sh
npm run dev
```

The app will be available at **http://localhost:5173/** (default Vite port).

### Production Build

To create an optimized production build, run:

```sh
npm run build
```

Then, to preview the built project:

```sh
npm run preview
```

---

## 🛠️ Tech Stack

- **React** (with Hooks)
- **Vite** (Fast development environment)
- **TypeScript** (Strongly typed JavaScript)
- **RapidAPI** (For fetching flight data)
