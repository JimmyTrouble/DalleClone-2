import { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { CreatePost, Home, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="w-full bg-slate-100 h-[calc(100vh-78px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
