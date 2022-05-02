
import React, { PureComponent } from "react";
import Wrapper from "./Wrapper";

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
    const { children, modal, isOpen, modalIsOpen } = this.props;


    return (
      <div style={modalIsOpen ? { background: '#5ece7b',borderRadius: '5px'} : null}>
        <Wrapper style={wrapperStyles.container}>
          <div style={modalStyles.modal} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </Wrapper>
      </div>
    );
  }
}

const modalStyles = {
  modal: {
    // backgroundColor: '#5ECE7B',
    width: '100%',
    height: 'auto',
    padding: '1rem',
    maxWidth: '34rem',
    overflowY: 'auto !important'
  } 
}

const wrapperStyles = {  
  container: {
    width: '100%',
    height: 'auto',
    maxWidth: '124rem',
    margin: '0 auto',
    transition: 'all 0.5s ease',
    overflowY: 'auto !important'
  }
}

export default Modal;
