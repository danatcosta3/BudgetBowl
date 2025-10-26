import React, { useEffect, useState } from "react";
import NibbleCards from "../components/NibbleCards";
import ExpandedNibble from "../components/ExpandedNibble";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import axios from "axios";

function LikesPage() {
  // State for expanded card
  const [selectedNibble, setSelectedNibble] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:5001/api/getlikes",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          { withCredentials: true }
        );

        setMeals(response.data.likes);
      } catch (error) {
        console.log(`Error: ${error}`);
      }
    };
    fetchMeals();
  }, []);

  const handleCardClick = (nibble) => {
    setSelectedNibble(nibble);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSelectedNibble(null);
  };

  return (
    <div className="">
      <MainHeader />
      <div className="w-full px-56 py-6 text-prim-main-blue">
        <h1 className="font-mono text-3xl">Saved Meals</h1>
        <h2 className="font-mono pt-5 text-lg">{meals.length} meals saved</h2>
      </div>
      <div className="px-56 blue py-6 grid grid-cols-5 gap-x-4">
        {meals.map((user, index) => (
          <div key={index} onClick={() => handleCardClick(user)}>
            <NibbleCards {...user} />
          </div>
        ))}
      </div>
      <MainFooter />

      {/* Expanded Card Modal */}
      {isExpanded && selectedNibble && (
        <ExpandedNibble nibble={selectedNibble} onClose={handleClose} />
      )}
    </div>
  );
}

export default LikesPage;
