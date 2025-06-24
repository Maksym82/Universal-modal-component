import Button from "./Button";
import Modal from "./Modal";

export default function Main({
  isModalOpen,
  setIsModalOpen,
  closeModal,
  alertCloseModal,
  openModal
}) {
  return (
    <>
      <h1 className="title">Universal Modal Component</h1>
      <Button variant={"button"} handleClick={openModal}>Open Modal</Button>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          closeModal={closeModal}
          alertCloseModal={alertCloseModal}
          title="Confirm Your Action"
          content="Are you sure you want to proceed? This action cannot be undone."
          showButton
        />
      )}
    </>
  );
}
