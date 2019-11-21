import React, { useState } from "react";

export const Brew = () => {
  const [isAddingNewBrew, setIsAddingNewBrew] = useState(false);
  return isAddingNewBrew ? (
    <>
      <h1>New brew</h1>
      <div>
        <label htmlFor="coffeeInput">Coffee name</label>
        <input id="coffeeInput" type="text" />
      </div>
    </>
  ) : (
    <button title="Add new brew" onClick={() => setIsAddingNewBrew(true)}>
      +
    </button>
  );
};
