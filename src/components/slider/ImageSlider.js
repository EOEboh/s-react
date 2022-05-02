import React, { PureComponent } from "react";
import { LeftArrow, RightArrow } from "./SliderArrows";


class ImageSlider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide = () => {
    const { gallery } = this.props;

    if (this.state.slideIndex !== gallery.length - 1) {
      this.setState({ slideIndex: this.state.slideIndex + 1 });
    } else if (this.state.slideIndex === gallery.length - 1) {
      this.setState({ slideIndex: 0 });
    }
  };

  prevSlide = () => {
    const { gallery } = this.props;

    if (this.state.slideIndex > 0) {
      this.setState({ slideIndex: this.state.slideIndex - 1 });
    } else if (this.state.slideIndex < 1) {
      this.setState({ slideIndex: gallery.length - 1 });
    }
  };
  
  render() {
    const { gallery } = this.props;
    const { slideIndex } = this.state;
    
    return (
      <>
      <div style={styles.arrows}> 
      <LeftArrow prevSlide={this.prevSlide} />
      </div>
      <div style={styles.slider}>
        {gallery.map((image, index) => (
          <div
            style={slideIndex === index ? {
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: 0,
            transition: 'opacity 400ms ease',
            opacity: 1 }  : {
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: 0,
            transition: 'opacity 400ms ease',
          } }
            key={index}
          >
            <img
              src={image}
              alt={index}
              style={styles.img}
              onError={(e) => {
                e.target.src = gallery[0];
              }}
            />
          </div>
        ))}
      </div>
      <div style={styles.arrows}> 
        <RightArrow nextSlide={this.nextSlide} />
      </div>
        </>
    );
  }
}

export default ImageSlider;

const styles = {
  slider:{
    position: 'relative',
    width: '300%',
    height: '150%',
    overflow: 'hidden'
  },

    img:{
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      
    }
  
}