import { useState } from "react";
import { FacebookLogo, InstagramLogo, LinkedinLogo, ToggleLeft, ToggleRight, WhatsappLogo } from "phosphor-react";
import Button from "./componentes/Button"; // Certifique-se de que Button está corretamente importado

function App() {
  const [clicado, setClicado] = useState(false);

  const interruptor = () => {
    setClicado(!clicado); // interruptor liga o modo escuro / desativa
  };

  return (
    <div className={`w-full h-screen ${clicado ?  'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className={`p-4 flex justify-end ${clicado ? 'bg-gray-900' : 'bg-white'}`}>
        <button className="cursor-pointer" onClick={interruptor}>
          {clicado ?  <ToggleRight size={32} /> : <ToggleLeft size={30} />}
        </button>
      </header>

      <main className="w-full mt-25 flex justify-center items-center">
        {/* Card */}
        <section className={`border ${clicado ?  'border-gray-700' : 'border-gray-400'} rounded-lg p-6 w-100 h-115 flex flex-col justify-center items-center gap-4 shadow hover:shadow-xl transition-shadow ${clicado ?  'bg-gray-800' : 'bg-white'}`}>
          <img className="w-32 h-32 rounded-full border-gray-300 border-4" src="https://avatars.githubusercontent.com/u/189457240?v=4" alt="kauansantos01" />
          <h1 className="font-bold text-2xl">Kauan Santos</h1>
          <p>Developer Full Stack</p>

          {/* Seção de links */}
          <div className="space-y-4">
          <a href="https://www.instagram.com/kn.santz_" className="flex">
          <Button>
              
              <InstagramLogo size={24} className="text-black "/>

              <p className="text-black">Instagram</p>

            </Button>

           </a> 

           <a href="https://www.linkedin.com/in/kauansantosdev/" className="flex">

           <Button>
              <LinkedinLogo size={24} className="text-black"/>
              <p className="text-black">Linkedin</p>
            </Button>
           
           </a>

           <a href="https://w.app/tiosau" className="flex">
           <Button>
           <WhatsappLogo size={24} className="text-black"/>
              <p className="text-black">Whatzapp</p>
            </Button>
           </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
