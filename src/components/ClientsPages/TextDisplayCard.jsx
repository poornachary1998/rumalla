import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";

const TextDisplayCard = ({ Heading, ListItems }) => {
  const [showPoints, SetShowPoints] = useState(false);

  const ShowPointsHandler = () => {
    SetShowPoints(!showPoints);
  };
  return (
    <div className="CdiManfacturingList container">
      <h3 onClick={ShowPointsHandler} className="p-2">
        <FontAwesomeIcon className="me-2" icon={faForward} /> {Heading}{" "}
      </h3>
      {showPoints && (
        <ul>
          {ListItems.map((i) => (
            <li> {i} </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextDisplayCard;
