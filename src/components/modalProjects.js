import React from "react";

const ModalProjects = (props) => {
  if (!props.open1) {
    return null;
  } else {
    return (
      <div className="modal-container">
        <div
          className="modal-background"
          onClick={() => props.setOpen1(false)}
        ></div>
        <div className="modal">
          <div className="project-container">
            <div className="project-items">
              <p className="project-item">Empty 1</p>
              <p className="project-item">Empty 2</p>
              <p className="project-item">Empty 3</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default ModalProjects;
