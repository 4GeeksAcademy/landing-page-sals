import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card m-2" style={{ width: "18rem" }}>
        <img
          src={props.src}
          className="card-img-top"
          alt="..."
          style={{
            width: "100%",
            aspectRatio: "1.5/1",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <a href="#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;