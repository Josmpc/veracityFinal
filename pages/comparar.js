import { useState } from "react";

export default function Comparar() {
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [resultado, setResultado] = useState(null);

  const analisarLink = (link) => {
    if (link.includes("cnn")) {
      return {
        fonte: "CNN",
        score: 92,
        linguagem: "Neutra / Informativa",
      };
    } else if (link.includes("weird") || link.includes("click")) {
      return {
        fonte: "Fonte duvidosa",
        score: 38,
        linguagem: "Emocional / Sensacionalista",
      };
    } else {
      return {
        fonte: "Fonte desconhecida",
        score: 67,
        linguagem: "Levemente opinativa",
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res1 = analisarLink(link1);
    const res2 = analisarLink(link2);
    setResultado({ res1, res2 });
  };

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Comparar Notícias</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Link da Notícia 1"
          className="w-full p-4 border rounded-xl shadow"
          value={link1}
          onChange={(e) => setLink1(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Link da Notícia 2"
          className="w-full p-4 border rounded-xl shadow"
          value={link2}
          onChange={(e) => setLink2(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
        >
          Comparar
        </button>
      </form>

      {resultado && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[resultado.res1, resultado.res2].map((res, i) => (
            <div
              key={i}
              className="bg-purple-50 border border-purple-200 p-6 rounded-xl space-y-3"
            >
              <h2 className="text-xl font-semibold">Notícia {i + 1}</h2>
              <p><strong>Fonte:</strong> {res.fonte}</p>
              <p><strong>Score de Veracidade:</strong> {res.score}%</p>
              <div className="h-4 w-full bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${res.score}%` }}
                ></div>
              </div>
              <p><strong>Tipo de Linguagem:</strong> {res.linguagem}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
