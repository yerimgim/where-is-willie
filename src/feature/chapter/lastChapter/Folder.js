import React from "react";

const Folder = ({ closeModal }) => {
  return (
    <>
      <div>
        <button onClick={closeModal}>X</button>
        <p>modal 내용들어갈 곳</p>
      </div>
    </>
  );
};

export default Folder;
