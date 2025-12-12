import React, { useState, useEffect } from "react";
import { toast, Bounce, Zoom } from "react-toastify";
import Button from "./ui/Button";

const Page = () => {
  const [number, setNumber] = useState(
    Number(localStorage.getItem("number")) || 0
  );

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  const incrementHandler = () => {
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
  };

  const decrementHandler = () => {
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
  };

  const resetHandler = () => {
    setNumber(0);

    toast.warning("You have reset your number!", {
      transition: Zoom,
      position: "top-center",
      autoClose: 1200,
    });
  };

  return (
   <main className="min-h-screen bg-gray-200 flex items-center justify-center p-6">


  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-300 p-10">

    <header className="text-3xl font-semibold text-gray-700 text-center mb-6">
      Counter App
    </header>

    <section className="flex flex-col items-center justify-center w-60 mx-auto p-5 rounded-xl bg-gray-50 shadow-md border">
        
      <div className="text-center mb-4 text-4xl font-bold text-gray-800">
        {number}
      </div>

      <div className="flex justify-center gap-3">
        <Button label="Decre" onClick={decrementHandler} />
        <Button label="Reset" onClick={resetHandler} />
        <Button label="Incre" onClick={incrementHandler} />
      </div>

    </section>

  </div>

</main>

  );
};

export default Page;
