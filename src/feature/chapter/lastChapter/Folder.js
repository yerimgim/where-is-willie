import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Folder = ({ closeModal }) => {
  const clue = useSelector((state) => console.log(state.clue));

  console.log(clue);

  return (
    <div>
      <button onClick={closeModal}>X</button>
      <p></p>
    </div>
  );
};

Folder.propTypes = {
  closeModal: PropTypes.func,
};

export default Folder;
