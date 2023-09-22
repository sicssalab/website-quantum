import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Press from "../../PressList/components/Press";

const ModalProduct = (props) => {
    const {item, ...rest} = props;
  return (
    <Modal
      id="modal_product"
      {...rest}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-primary">
          <p className="h4 mb-0 text-primary">Información del producto</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {item && (
        <Press
            title={item.name}
            description={item.descriptionLong}
            alt={item.name}
            logo={item.srcImage}
        />

        )}
      </Modal.Body>
      <Modal.Footer>
        <Button href={`mailto:mercadotecnia5@quantumdo.com`}>Contacto por correo electrónico</Button>
        <Button onClick={props.onHide}>Cerrar modal</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalProduct;
