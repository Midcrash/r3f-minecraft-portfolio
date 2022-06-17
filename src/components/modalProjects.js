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
          <div className="modal-left">
            <h2 className="header">Hi, I'm Tyrae</h2>
            <br />
            <p>
              I'm a fullstack developer with a serious passion in creative
              design and logical thinking. I want to create interactive UX and
              cool UI effects/animations. Whilst connecting everything with a
              proper backend!
            </p>
            <br />
            <p>
              Highly motivated individual, problem solver, and always a student.
              Reading daily articles, biking outside, and learning new things
              are some of my hobbies.
            </p>
            <br />
            <p>
              Interested in frontend and backend development and wanting to work
              on significant projects in my future!
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default ModalProjects;
