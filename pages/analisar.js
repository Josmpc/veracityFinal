import { useState } from "react";

export default function Analisar() {
  const [link, setLink] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de "análise"
    setResultado({
      veracidade: "72%",
      alertas: ["Fonte não verificada", "Título possivelmente clickbait"],
      partilhas: "📈 Elevada nas últimas 24h (principalmente no Facebook)",
    });
  };

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Analisar Notícia</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Cole aqui o link da notícia..."
          className="w-full p-4 border rounded-xl shadow"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
        >
          Analisar
        </button>
      </form>

      {resultado && (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl space-y-4">
          <p><strong>Score de Veracidade:</strong> {resultado.veracidade}</p>
          <p><strong>Alertas:</strong></p>
          <ul className="list-disc list-inside">
            {resultado.alertas.map((alerta, i) => (
              <li key={i}>{alerta}</li>
            ))}
          </ul>
          <p><strong>Disseminação:</strong> {resultado.partilhas}</p>
        </div>
      )}
    </div>
  );
}

