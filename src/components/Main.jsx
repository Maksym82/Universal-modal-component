import Modal from "./Modal";

export default function Main({
  isModalOpen,
  setIsModalOpen,
  closeModal,
  alertCloseModal,
}) {
  return (
    <>
      <h1 className="title">Universal Modal Component</h1>
      <button className="button" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          closeModal={closeModal}
          alertCloseModal={alertCloseModal}
        />
      )}
    </>
  );
}
