import React from "react";

const Newsitem = (props) => {
  let { title, discription, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: " flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/giant_metrewave_radio_telescope-sixteen_nine.jpg?VersionId=rieiy__i3MVK9pB4MXCAtesjRKS5Sw0v"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}...</p>
          <p>
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
