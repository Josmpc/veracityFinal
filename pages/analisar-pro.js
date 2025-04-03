import { useState } from "react";
import { motion } from "framer-motion";

export default function AnalisarPro() {
  const [link, setLink] = useState("");
  const [analise, setAnalise] = useState(null);

  const simularAnalise = (link) => {
    let resultado = {
      titulo: "",
      fonte: "",
      linguagem: "",
      visuais: [],
      partilha: "",
      score: 0,
    };

    if (link.includes("cnn")) {
      resultado = {
        titulo: "CNN: Governo anuncia novas medidas económicas",
        fonte: "CNN",
        linguagem: "Neutra / Informativa",
        visuais: ["Layout limpo", "Fonte tradicional", "Imagem contextual"],
        partilha: "Partilha normal entre utilizadores verificados",
        score: 88,
      };
    } else if (link.includes("weird") || link.includes("click")) {
      resultado = {
        titulo: "NÃO VAI ACREDITAR no que este político fez hoje! 😱",
        fonte: "Fonte duvidosa",
        linguagem: "Emocional / Sensacionalista",
        visuais: ["Título com capslock", "Thumbnail exagerada", "Texto sublinhado"],
        partilha: "Picos de partilha em grupos fechados, padrão anómalo",
        score: 42,
      };
    } else {
      resultado = {
        titulo: "Artigo sem título conhecido",
        fonte: "Desconhecida",
        linguagem: "Levemente opinativa",
        visuais: ["Layout genérico"],
        partilha: "Padrão de partilha indefinido",
        score: 65,
      };
    }

    setAnalise(resultado);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    simularAnalise(link);
  };

 return (
  <div className="min-h-screen bg-white p-8">
    <h1 className="text-3xl font-bold mb-6">Análise Veraciti Pro</h1>
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
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

    {analise && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 space-y-6 bg-white p-6 rounded-xl shadow-xl border border-blue-200"
      >
        <div className="bg-blue-100 p-4 rounded-xl">
          <p className="text-lg font-semibold">📰 Título:</p>
          <p>{analise.titulo}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-lg font-semibold">🏷️ Fonte:</p>
          <p>{analise.fonte}</p>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl">
          <p className="text-lg font-semibold">🗣️ Tipo de Linguagem:</p>
          <p>{analise.linguagem}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl">
          <p className="text-lg font-semibold">
            ✅ Score de Veracidade: {analise.score}%
          </p>
          <div className="h-4 w-full bg-gray-200 rounded overflow-hidden">
            <div
              className="h-full bg-green-500"
              style={{ width: `${analise.score}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl">
          <p className="text-lg font-semibold">🎨 Elementos Visuais Detetados:</p>
          <ul className="list-disc list-inside">
            {analise.visuais.map((v, i) => (
              <li key={i}>{v}</li>
            ))}
          </ul>
        </div>

        <div className="bg-red-100 p-4 rounded-xl">
          <p className="text-lg font-semibold">📈 Comportamento de Partilha:</p>
          <p>{analise.partilha}</p>
        </div>
      </motion.div>
    )}
  </div>
);
