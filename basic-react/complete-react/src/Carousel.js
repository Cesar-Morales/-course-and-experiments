import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    }

    static getDerivedStateFromProps({ media }){
        let photos = [];

        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter( eachPhoto => eachPhoto['@size'] === 'pn' )
        }

        return { photos };
    }

    render() {
        const {photos, active } = this.state;
        return(
            <div className="carousel">
                <h2>Carousel</h2>
                <img src={photos[active].value} alt= 'primary animal'/>
                <div className="carousel-small">
                    {photos.map((photo, i) => (
                        <img key={photo.value} src={photo.value} className={i === active ? 'active' : ''} alt="animal" />
                    ))}
                </div>
            </div>
        )
    }


}

export default Carousel