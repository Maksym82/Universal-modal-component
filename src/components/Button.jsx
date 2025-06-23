export default function Button({ setIsModalOpen }) {
  return (
    <button className="closeButton" onClick={() => setIsModalOpen(false)}>
      &times;
    </button>
  );
}
