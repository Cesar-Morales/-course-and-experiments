import React from "react";
import { Link } from "@reach/router";

// export const Pet = (props) => {

//   return (
//     <section className="card">
//       <h2>{props.name}</h2>
//       <p>Animal: {props.animal}</p>
//       <p>Breed: {props.breed}</p>
//     </section>
//   );
// };

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter((photo) => photo["@size"] === "pn");
    }

    const hero = photos[0] ? photos[0].value : "http://placecorgi.com/300/300"

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>Animal: {animal} </h2>
          <h2>Breed: {breed} </h2>
          <h2>Location: {location} </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
