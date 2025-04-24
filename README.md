# 🧪 Lawyer Appointment Booking Application

## Overview
This is a React-based web application for booking appointments with lawyers. The application allows users to browse lawyer profiles, schedule appointments, and view all their bookings. It includes interactive UI elements, data persistence, routing, charts for visualizing fees, and a custom error page for invalid routes.

---
## 🚀 Live Demo: 


## 🧩 Features

### Main Pages
- **Homepage**: Displays a banner section, a list of lawyer profiles in a grid format, and success statistics with a counting animation.
- **Lawyer Details Page**: Shows detailed information about a selected lawyer, including image, experience, specialization, availability, and fee.
- **Bookings Page**: Displays a list of booked appointments with the option to cancel them.
- **Blogs Page**: A creative blog section answering common React questions.
- **Error Page (404)**: A custom-designed page that appears for invalid routes.

### 🌟 Key Features
- **Navbar**: Displays logo, site name, and navigation menu items. It is consistent on all pages.
- **Footer**: Displays logo and social media icons on all pages except the error page.
- **Booking Logic**: Allows users to book and cancel appointments, with data persisting through `localStorage`.
- **Charts**: Visualizes appointment fees using `Recharts` and updates when appointments are canceled.
- **Animations**: Uses `react-countup` for counting animations in the homepage success section.

---

## 🛠️ Technologies Used
- **React**: Core framework for building the UI.
- **React Router**: For navigation and routing.
- **Recharts**: For visualizing appointment fees.
- **react-countup**: For counting animation.
- **localStorage**: For data persistence across page reloads.
- **TailwindCSS**: For styling the application.

