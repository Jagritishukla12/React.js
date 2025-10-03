function Card({ title, content }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

export default Card;
