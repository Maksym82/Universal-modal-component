import Button from "./Button";

export default function Modal({ setIsModalOpen, closeModal, alertCloseModal }) {
  return (
    <div className="overlay" onClick={() => setIsModalOpen(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Button handleClick={closeModal} variant={"closeButton"}>
          &times;
        </Button>
        <h2 className="modalHeader">Confirm Your Action</h2>
        <div className="modalBody">
          Are you sure you want to proceed? This action cannot be undone.
        </div>
        <div className="modalFooter">
          <Button handleClick={closeModal} variant={"secondaryButton"}>
            Cancel
          </Button>
          <Button handleClick={alertCloseModal} variant={"primaryButton"}>
            Yes, Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
