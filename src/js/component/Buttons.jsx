import React from "react";

const Buttons = (props) => {
  return (
    <div className="btn-group my-4" role="group" aria-label="Basic outlined example">
      <button type="button" className="btn btn-outline-primary mx-2" onClick={props.handleColorChange}>
        Change Color
      </button>
      <button type="button" className="btn btn-outline-primary mx-2" onClick={props.handleSwicthOFF}>
        STOP
      </button>
      <button type="button" className="btn btn-outline-primary mx-2" onClick={props.handleAddExtra}>
        Add Extra
      </button>
    </div>
  );
};

export default Buttons;
