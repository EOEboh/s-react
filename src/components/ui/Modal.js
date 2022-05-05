
import React, { PureComponent } from "react";
import '../../App.css'
class Modal extends PureComponent {
  componentDidUpdate() {
    const { modal } = this.props;

    setTimeout(() => {
      if (modal) {
        document.addEventListener("click", this.close);
      } else {
        document.removeEventListener("click", this.close);
      }
    }, 0);
  }

  close = () => {
    this.props.hideModal();
  };

  render() {
    const { children, modal, hideModal} = this.props;


    return (
      <div style={hideModal ? {  visibility: 'visible' } : { visibility: 'none'} }>
          <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
      </div>
    );
  }
}

const modalStyles = {
    position: 'absolute',
    left: '1000px',
    top: '78px',
    zIndex: '2000',
    backgroundColor: '#FFFFFF',
    width: '325px',
    padding: '16px 16px',
    maxWidth: '34rem',
    overflow: 'hidden',
    
}


export default Modal;
