import React from "react";
import "./DocumentLoader.css";
export default function DocumentLoader(props) {
  return (
    <div>
      {/* <a href={props.paper.file} download={props.paper.name + ".pdf"}>
        {" "}
        {props.paper.name}
      </a>
      <br /> */}
      <iframe src={props.paper.file} className="pdfFrame"></iframe>
      <p>
        Name : {props.paper.name}
        <br />
        Email : {props.paper.email}
      </p>
    </div>
  );
}
