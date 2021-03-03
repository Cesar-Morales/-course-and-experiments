import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  // constructor(props) {
  //     super(props)

  //     this.handleClick = this.handleClick.bind(this);
  // }

  static getDerivedStateFromProps({ media }) {
    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(
        (eachPhoto) => eachPhoto["@size"] === "pn"
      );
    }

    return { photos };
  }
  //
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, i) => (
            /* eslint-disable-next-line */
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={i}
              src={photo.value}
              className={i === active ? "active" : ""}
              alt="animal"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
