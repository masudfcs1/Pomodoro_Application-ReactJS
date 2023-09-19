import React from "react";

const SetPomodoro = () => {
  return (
    <div className=" form-container">
      <form>
        <div className=" input-wrapper">
          <input type="number" className="input" name="work" />
          <input type="number" className="input" name="shortBreak" />
          <input type="number" className="input" name="longBreak" />
        </div>
        <button className="submit">Set Timer</button>
      </form>
    </div>
  );
};

export default SetPomodoro;
