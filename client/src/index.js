import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YogaClassPage from "./YogaClassPage";
import AboutUsPage from "./AboutUsPage";
import HomePage from "./HomePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="classes" element={<YogaClassPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
