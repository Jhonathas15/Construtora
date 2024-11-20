import Card1 from "../../assets/card-1.jpeg";

function Home() {
  return (
    <div className="w-full p-5">
      <h3 className="text-2xl font-bold mb-3">MEUS IMOVEIS</h3>
      <section className="sm:grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full mb-8">
        <div className="border hover:border-black hover:hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-black hover:text-white cursor-pointer">
          <div className="card relative -z-10">
            <img className=" w-full aspect-video" src={Card1} alt="" />
            <p className="w-1/2 md:w-3/4 xl:w-1/2 p-1 absolute bottom-0 right-0 bg-slate-900 text-white text-center">
              Em construção
            </p>
          </div>
          <div className="">
            <div className="flex justify-between">
              <p className="xl:text-xl xl:p-1 font-semibold">OKAN</p>
              <p className="flex items-center xl:p-1 text-xs text-gray-500 font-semibold">
                Pipa / RN
              </p>
            </div>
          </div>
        </div>
        <div className="border hover:border-black hover:hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-black hover:text-white cursor-pointer">
          <div className="card relative -z-10">
            <img className=" w-full aspect-video" src={Card1} alt="" />
            <p className="w-1/2 md:w-3/4 xl:w-1/2 p-1 absolute bottom-0 right-0 bg-slate-900 text-white text-center">
              Em construção
            </p>
          </div>
          <div className="">
            <div className="flex justify-between">
              <p className="xl:text-xl xl:p-1 font-semibold">OKAN</p>
              <p className="flex items-center xl:p-1 text-xs text-gray-500 font-semibold">
                Pipa / RN
              </p>
            </div>
          </div>
        </div>
        <div className="border hover:border-black hover:hover:-translate-y-0.5 hover:translate-x-0.5 hover:bg-black hover:text-white cursor-pointer">
          <div className="card relative -z-10">
            <img className=" w-full aspect-video" src={Card1} alt="" />
            <p className="w-1/2 md:w-3/4 xl:w-1/2 p-1 absolute bottom-0 right-0 bg-slate-900 text-white text-center">
              Em construção
            </p>
          </div>
          <div className="">
            <div className="flex justify-between">
              <p className="xl:text-xl xl:p-1 font-semibold">OKAN</p>
              <p className="flex items-center xl:p-1 text-xs text-gray-500 font-semibold">
                Pipa / RN
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center sm:items-start flex-col ">
        <h3 className="text-2xl font-semibold mb-2">INFORMATIVO</h3>
        <h4 className="text-xl font-bold mb-2">Titulo descrição</h4>
        <p className="xl:text-xl text-left">
          Vida plena acontecendo. Céu, areia, sol, mar e pulmão verde pra
          respirar. Esse é o Nai, o maior lançamento da Alliance na praia do
          Cabo Branco. Diferente de tudo o que você já viu, completamente
          inspirado em você.
        </p>
        <div className="flex w-full justify-between md:justify-between p-1 ">
          <p className="xl:text-xl font-semibold text-gray-400">dd/mm/aa</p>

          <p className="xl:text-xl">
            <a className="font-semibold underline text-gray-400" href="">
              Saiba mais {"->"}
            </a>
          </p>
        </div>
      </section>
      <section className="flex mt-10 flex-col">
        <h2 className="text-2xl font-semibold mb-5">ACESSO RÁPIDO</h2>
        <div className="sm:grid sm:grid-cols-3">
          <p className="text-xl mb-1 font-semibold underline hover:opacity-70">
            <a href="">Reimpressão de boletos</a>
          </p>

          <p className="text-xl mb-1 font-semibold underline hover:opacity-70">
            <a href="">Reimpressão de boletos</a>
          </p>
          <p className="text-xl font-semibold underline hover:opacity-70">
            <a href="">Reimpressão de boletos</a>
          </p>
        </div>
      </section>
    </div>
  );
}
export default Home;
