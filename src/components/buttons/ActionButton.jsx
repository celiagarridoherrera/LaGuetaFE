export const ActionButton = ({ text, onClick, type = "submit" }) => {
  return (
    <button
      className="bg-bg-text-admin text-color1-admin font-secondary text-lg px-6 py-2 rounded-full hover:bg-green-600 transition mx-auto mt-4"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
    );
}