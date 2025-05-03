import { useState } from "react"; 
import { FacebookLogo, InstagramLogo, LinkedinLogo, ToggleLeft, ToggleRight, WhatsappLogo } from "phosphor-react"; // Icones
import Button from "./componentes/Button"; // Importação do componente button

function App() {

  function getIncialDarkMode () {  // Cria o localStorage e armazena o dado

    const darkModeLocalStorage = localStorage.getItem("darkMode");

    return darkModeLocalStorage === "true" ? true : false; 


  }

  const [clicado, setClicado] = useState(getIncialDarkMode());  // Guarda o valor (quando atualiza a pagina continua no modo em que está selecionado)


  const interruptor = () => {
    setClicado(!clicado); // Interruptor liga o modo escuro / desativa

    // Set in local Storage

    localStorage.setItem("darkMode", !clicado);  // Armazena o dado com a chave (key) e o valor (value);
   };

  function redirectPage(url) { //  Ajuda a capturar melhor os links com a tag <a>

    window.open(url, "_blank"); // Ao botar url chamar na tag que você quer o link       

  }

  return (
    <div className={`w-full h-screen ${clicado ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`p-4 flex justify-end ${clicado ? 'bg-gray-900' : 'bg-white'}`}>
        <button className="cursor-pointer" onClick={interruptor}>
          {clicado ? <ToggleRight size={32} /> : <ToggleLeft size={30} />}  {/* serve para mudar de um icone para o outro */}
         
        </button>
      </header>
      <main className="w-full mt-25 flex justify-center items-center">

        {/* Card */}
        <section className={`border ${clicado ? 'border-white text-white' : 'border-gray-400 text-black'} rounded-lg p-6 w-100 h-115 flex flex-col justify-center items-center gap-4 shadow hover:shadow-xl transition-shadow ${clicado ? 'bg-gray-800' : 'bg-white'}`}>
          <img className={`w-32 h-32 rounded-full ${clicado ? 'border-white' : 'border-gray-300'} border-4`} src="https://avatars.githubusercontent.com/u/189457240?v=4" alt="kauansantos01" />
          <h1 className="font-bold mt-0 text-2xl">Kauan Santos</h1>
          <p>Desenvolvedor Full Stack</p>

          {/* Seção de links */}
          <div className="space-y-4">


            <Button onClick={() => redirectPage("https://www.instagram.com/kn.santz_?igsh=d21vcXV6ampnODRp&utm_source=qr")}>   {/* usar uma tag com o nome da function criada, e colocar o link dentro da aerofuncion como parâmetro */}
              <InstagramLogo size={24} className="text-black " />
              <p className="text-black">Instagram</p>
            </Button>

            <Button onClick={() => redirectPage("https://www.linkedin.com/in/kauansantosdev/")}>  {/* usar uma tag com o nome da function criada, e colocar o link dentro da aerofuncion como parâmetro */}
              <LinkedinLogo size={24} className="text-black" />
              <p className="text-black">Linkedin</p>
            </Button>

            <Button onClick={() => redirectPage("https://wa.link/a6eqr1")}>   {/* usar uma tag com o nome da function criada, e colocar o link dentro da aerofuncion como parâmetro */}
              <WhatsappLogo size={24} className="text-black" />
              <p className="text-black">Whatsapp</p>
            </Button>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
