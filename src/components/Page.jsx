import React, { useState, useEffect, useCallback } from "react";
import { toast, Bounce, Zoom } from "react-toastify";
import Button from "./ui/Button";

const Page = () => {
  const [number, setNumber] = useState(
    Number(localStorage.getItem("number")) || 0
  );

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  const incrementHandler = useCallback(() => {
    setNumber((prev) => {
      const updated = prev + 1;
      if (updated % 10 === 0) {
        toast.success(`Wow! You reached ${updated} 🎉`, {
          transition: Bounce,
          position: "top-center",
          autoClose: 1200,
        });
      }

      return updated;
    });
  },[number]);

  const decrementHandler = useCallback(() => {
    setNumber((prev) => {
      const updated = prev - 1;

      if (updated < 0) {
        toast.error("Number can't go below 0!", {
          transition: Bounce,
          position: "top-center",
          autoClose: 1200,
        });

        return 0;
      }

      return updated;
    });
  },[number]);

  const resetHandler = useCallback(() => {
    setNumber(0);

    toast.warning("You have reset your number!", {
      transition: Zoom,
      position: "top-center",
      autoClose: 1200,
    });
  },[number]);

  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-300 p-10">
        <header className="text-3xl font-semibold text-gray-700 text-center mb-6">
          Counter App
        </header>

        <section className="flex flex-col items-center justify-center w-60 mx-auto p-5 rounded-xl bg-gray-50 shadow-md border gap-3">
  <div className="flex justify-center items-center gap-3">

   
    <div onClick={decrementHandler} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-minus"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
      </svg>
    </div>

   
    <div className="text-center text-3xl font-bold text-gray-800">
      {number}
    </div>

   
    <div onClick={incrementHandler} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-plus"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    </div>
  </div>

  <Button label="Reset" onClick={resetHandler} />
</section>

      </div>
    </main>
  );
};

export default Page;
