import { useState } from "react";

export default function Feedback() {
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setMensagem("");
  };

  return (
    <div className="min-h-screen bg-white p-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Envie o seu feedback</h1>
      {!enviado ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <textarea
            rows="6"
            placeholder="Escreva a sua sugestão, dúvida ou comentário..."
            className="w-full p-4 border rounded-xl shadow"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      ) : (
        <p className="text-green-600 text-lg font-medium">Obrigado pelo seu feedback! ✅</p>
      )}
    </div>
  );
}
