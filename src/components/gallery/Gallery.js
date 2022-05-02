import React, { PureComponent } from "react";


class Gallery extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  selectFigure = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { gallery = [] } = this.props;
    const { currentIndex } = this.state;

    return (
      <div style={styles.gallery}>
        {gallery.length > 1 ? (
          <div style={styles.galleryImage}>
            {gallery.map((image, index) => (
              <img
                key={index}
                onClick={() => this.selectFigure(index)}
                style={
                  index === currentIndex
                    ? {width: '8rem',
                      height: '8rem',
                      objectFit: 'cover',
                      cursor: 'pointer', 
                      opacity: 0.5} 
                    : {
                      width: '8rem',
                      height: '8rem',
                      objectFit: 'cover',
                      cursor: 'pointer'}
                }
                src={image}
                onError={(e) => {
                  e.target.style.display = "none";
                }}
                alt={index}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        <figure>
          <img src={gallery[currentIndex]} alt='selected' />
        </figure>
      </div>
    );
  }
}

const styles = {
 gallery:{
    display: 'flex',
    columnGap: '5px',
    
 },
 galleryImage:{
    flexDirection: 'column'
 },
 
}
export default Gallery;
