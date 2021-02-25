import React from "react";

export const Songs = (props) => {
  return React.createElement("section", { className: "card" }, [
    React.createElement("h2", {}, `${props.name}`),
    React.createElement("p", {}, `Album: ${props.album}`),
    React.createElement("p", {}, `Interpreter: ${props.interpreter}`),
    React.createElement("p", {}, `Genero: ${props.genero}`),
  ]);
};

export default Songs;
