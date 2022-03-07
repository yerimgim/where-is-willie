import React from "react";

import PropTypes from "prop-types";

const Folder = ({ closeModal }) => {
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
