
import { BarChart3, ShieldCheck, Globe, Zap } from "lucide-react";

export default function VeracitiLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 font-sans">
      <header className="max-w-5xl mx-auto text-center py-16">
        <h1 className="text-5xl font-bold mb-4">Veraciti</h1>
        <p className="text-xl text-gray-600 mb-6">
          Descobre a verdade por trás das notícias com inteligência visual e análise comportamental.
        </p>
        <button className="text-lg px-6 py-4 rounded-2xl shadow-md bg-blue-600 text-white hover:bg-blue-700">
          Experimenta Já
        </button>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {[{
          icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
          title: "Score de Veracidade",
          text: "Avaliação automática de cada notícia com base em fontes, padrões de partilha e conteúdo.",
        }, {
          icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
          title: "Análise Visual",
          text: "Gráficos intuitivos mostram como a notícia se espalha e o tipo de engagement que gera.",
        }, {
          icon: <Globe className="w-8 h-8 text-green-500" />,
          title: "Fontes Cruzadas",
          text: "Ligações com outras fontes confiáveis ou alertas de possíveis manipulações.",
        }, {
          icon: <Zap className="w-8 h-8 text-yellow-500" />,
          title: "Deteção Instantânea",
          text: "Resultados em segundos com tecnologia de IA e análise comportamental inspirada em marketing digital.",
        }].map((item, i) => (
          <div key={i} className="rounded-2xl shadow-md p-6 bg-white">
            <div className="flex items-center gap-4 mb-4">{item.icon}<h2 className="text-xl font-semibold">{item.title}</h2></div>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>

      <footer className="text-center text-gray-500 pb-10">
        © 2025 Veraciti — Veracidade com Visualização.
      </footer>
    </div>
  );
}
