import PropTypes from "prop-types";

function Modal({ children, onClose, title }) {
  return (
    <div className="modal">
      <button className="close-modal" onClick={onClose} />
      {title && <h3 className="modal-title">{title}</h3>}
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

export default Modal;
