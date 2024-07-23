import React, { useState } from "react";

const Callback = ({ getcolor }) => {
  const [ActivateValue, setActivateValue] = useState("");

  const handleinputValue = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      const { value } = e.target;
      setActivateValue(value);
      getcolor(value);
      setActivateValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleinputValue}
        onChange={(e) => setActivateValue(e.target.value)}
        value={ActivateValue}
      />
    </div>
  );
};

export default Callback;
