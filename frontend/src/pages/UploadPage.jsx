import React, { use } from "react";
import MainHeader from "../components/MainHeader";
import { useState } from "react";

function UploadPage() {
  const [mealName, setMealName] = useState("");
  const [etaMinutes, setEtaMinutes] = useState("15");
  const [images, setImages] = useState("");
  const Max_Images = 3;
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [touched, setTouched] = useState(false);

 
  return (
    <div className="min-h-screen bg-white flex flex-col"> 
      <header className="border-b border-gray 200 px-6 py-4 flex items-center justify-betw"></header>
    </div>
  );
}

export default UploadPage;