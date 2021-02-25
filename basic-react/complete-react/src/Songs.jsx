import React from "react";

export const Songs = (props) => {
  //return React.createElement("section", { className: "card" }, [
  //  React.createElement("h2", {}, props.name),
  //  React.createElement("p", {}, `Album: ${props.album}`),
  //  React.createElement("p", {}, `Interpreter: ${props.interpreter}`),
  //  React.createElement("p", {}, `Genero: ${props.genero}`),
  //]);

  // Changed to jsx
  return (
    <section className="card">
      <h2>{props.name}</h2>
      <p>Album: {props.album}</p>
      <p>Interpreter: {props.interpreter}`</p>
      <p>Genero: {props.genero}</p>
    </section>
  );
};

export default Songs;
