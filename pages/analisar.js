import { useState } from "react";

export default function Analisar() {
  const [link, setLink] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica de simulação baseada no link
    let simulado = {
      veracidade: "??%",
      fonte: "Desconhecida",
      linguagem: "N/A",
      data: "---",
      alertas: [],
      partilhas: "?",
      grafico: [10, 20, 30, 25, 40],
    };

    if (link.includes("cnn")) {
      simulado = {
        veracidade: "92%",
        fonte: "CNN",
        linguagem: "Neutra / Informativa",
        data: "2 de abril de 2025",
        alertas: [],
        partilhas: "📊 Elevada no Twitter e Reddit",
        grafico: [5, 20, 50, 40, 10],
      };
    } else if (link.includes("weird") || link.includes("click")) {
      simulado = {
        veracidade: "38%",
        fonte: "Fonte duvidosa",
        linguagem: "Emocional / Sensacionalista",
        data: "Data não identificada",
        alertas: ["Título possivelmente clickbait", "Fonte não verificada"],
        partilhas: "📈 Alta no Facebook com comentários polarizados",
        grafico: [40, 10, 30, 15, 5],
      };
    } else {
      simulado = {
        veracidade: "67%",
        fonte: "Fonte desconhecida",
        linguagem: "Levemente opinativa",
        data: "31 de março de 2025",
        alertas: ["Falta de fontes citadas"],
        partilhas: "📉 Baixa nos últimos 3 dias",
        grafico: [10, 15, 20, 15, 10],
      };
    }

    setResultado(simulado);
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
          <div>
            <p><strong>Score de Veracidade:</strong> {resultado.veracidade}</p>
            <div className="h-4 w-full bg-gray-200 rounded overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{ width: resultado.veracidade }}
              ></div>
            </div>
          </div>
          <p><strong>Fonte:</strong> {resultado.fonte}</p>
          <p><strong>Data de Publicação:</strong> {resultado.data}</p>
          <p><strong>Tipo de Linguagem:</strong> {resultado.linguagem}</p>
          <p><strong>Disseminação:</strong> {resultado.partilhas}</p>
          <p><strong>Alertas:</strong></p>
          <ul className="list-disc list-inside">
            {resultado.alertas.length > 0 ? (
              resultado.alertas.map((alerta, i) => <li key={i}>{alerta}</li>)
            ) : (
              <li>Nenhum alerta identificado</li>
            )}
          </ul>

          <div className="mt-6">
            <p className="font-semibold mb-2">Atividade nas Redes (Simulada)</p>
            <div className="flex items-end gap-2 h-32">
              {resultado.grafico.map((val, i) => (
                <div
                  key={i}
                  className="bg-blue-400 w-6 rounded-t"
                  style={{ height: `${val * 2}px` }}
                  title={`Valor ${val}`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
