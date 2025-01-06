'use client'
import React from "react";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const showToast = () => {
    toast.success("This is a success message!");
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <Toaster /> {/* This will render the toasts */}
    </div>
  );
}

export default App;
