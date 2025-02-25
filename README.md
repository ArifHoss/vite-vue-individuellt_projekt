
# 🎓 University Finder

University Finder is a **Vue** web application that allows users to search for universities worldwide by country. The application features **dynamic search suggestions, authentication (login/logout), language switching**, and a fully responsive UI.

---

## 📌 Features

✅ **Search Universities**: Enter a country name to retrieve a list of universities.
✅ **Live Search Suggestions**: Get real-time country name suggestions while typing.
✅ **View University Details**: See university names, country, and official website links.
✅ **User Authentication**: Login/logout functionality with session storage.
✅ **User Profile**: View user information after logging in.
✅ **Multilingual Support**: Switch between multiple languages dynamically.
✅ **Fully Responsive**: Works on all devices (desktop, tablet, and mobile).

---

## ⚡ Tech Stack

- **Vue 3** (Composition API)
- **Vite** (Build Tool)
- **Vue Router** (Client-side routing)
- **Bootstrap 5** (Styling & Responsiveness)
- **Pinia** (State Management)
- **LocalStorage** (For user session persistence)

---

## 🛠️ Setup & Installation

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/your-username/university-finder.git
cd university-finder
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Run the development server**
```sh
npm run dev
```
The app will be available at `http://localhost:5173/` (or another port).

---

## 🌍 Environment Variables

No additional environment variables are required since the API used (`http://universities.hipolabs.com`) is public.

---

## 🖥️ Project Structure

```
📂 src
│── 📂 assets/           # Static assets (CSS, images)
│── 📂 components/       # Reusable Vue components (Navbar, Search, etc.)
│── 📂 composables/      # Custom Vue 3 hooks (useSearch.js)
│── 📂 router/           # Vue Router configuration
│── 📂 stores/           # Pinia stores (authentication, translations, etc.)
│── 📂 views/            # Application pages (Login, Profile, Search, etc.)
│── App.vue              # Main Vue component
│── main.js              # Entry point of the Vue app
│── index.html           # HTML file for mounting Vue
│── vite.config.js       # Vite configuration
```

---

## 🛠️ Usage

### 🔎 **Searching for Universities**
1. Enter a country name in the **search bar**.
2. Click the **search button** or select from the **suggested dropdown list**.
3. The universities list for that country will be displayed.

### 🔐 **User Authentication**
1. Click on **User → Login** in the navbar.
2. Use one of the **hardcoded test accounts** to log in:
   - **Email:** `johndoe@gmail.com` | **Password:** `1234`
   - **Email:** `arif@gmail.com` | **Password:** `1234`
3. After logging in, the navbar updates to show **Profile & Logout** instead of **Login**.

### 🌍 **Changing Language**
- Click the **Lang dropdown** in the navbar.
- Select a **language (EN, ES, RU, FA)** to translate the interface.

### 🔓 **Logging Out**
1. Click on **User → Logout** in the navbar.
2. The session is cleared, and you are redirected to the login page.

---

## 🚀 API Integration

The app fetches university data from the **Hipolabs API**:
- **Endpoint:** `http://universities.hipolabs.com/search?country={country}`
- **Example Request:**
  ```sh
  http://universities.hipolabs.com/search?country=United States
  ```
- **Example Response (JSON)**:
  ```json
  [
    {
      "name": "Harvard University",
      "country": "United States",
      "web_pages": ["http://www.harvard.edu/"]
    },
    {
      "name": "Stanford University",
      "country": "United States",
      "web_pages": ["http://www.stanford.edu/"]
    }
  ]
  ```

---

## 🐞 Troubleshooting

- **Issue:** Navbar does not update after login.
  **Solution:** Ensure `watchEffect()` is used in `NavBar.vue` to track `localStorage` changes.

- **Issue:** Search does not return results.
  **Solution:** Ensure the country name is correctly **encoded** (`encodeURIComponent(name)`) in the API call.

---

## 👨‍💻 Author

Developed by **Arif Hossain**.
Feel free to contribute or report issues on [GitHub](https://github.com/your-username/university-finder).
