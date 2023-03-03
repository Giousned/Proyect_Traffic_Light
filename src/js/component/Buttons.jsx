import React, { useState } from "react";

const Buttons = (props) => {
  const [estado, setEstado] = useState(false);

  function varias () {
    props.handleAddExtra();
    setEstado(!estado);
  }

  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example" id="botones">
      <button type="button" className="btn btn-outline-danger fs-3 fw-bold mx-2" onClick={props.handleColorChange}>
        Change Color
      </button>
      <button type="button" className="btn btn-outline-danger fs-3 fw-bold mx-2" onClick={props.handleSwicthOFF}>
        STOP
      </button>
      <button type="button" className="btn btn-outline-danger fs-3 fw-bold mx-2" onClick={varias}>
        {(estado) ? "Remove Extra" : "Add Extra" }
      </button>
    </div>
  );
};

export default Buttons;
