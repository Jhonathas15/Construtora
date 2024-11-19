import Select from "../../components/Select";
import Sidebar from "../../components/Sidebar";
import SidebarMenu from "../../components/SidebarMenu";
import Textarea from "../../components/Textarea";

function Assistance() {
  return (
    <Sidebar>
      <SidebarMenu>
        <div className="h-full w-full p-5">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold">ASSISTÊNCIA TÉCNICA</h2>
            <p className="text-balance lg:text-xl">
              Tem dúvidas, sugestões ou precisa de ajuda? Conte com a gente. Nos
              envie uma mensagem com sua solicitação que em breve nossa equipe
              de Atendimento ao Ciente entrará em contato. Se preferir, você
              pode entrar em contato através do telefone e e-mail ao lado.
            </p>
          </section>
          <section className="mb-10">
            <h2 className="text-2xl mb-2">Escolha o emprrendimento</h2>
            <Select />
          </section>
          <form>
            <h2 className="text-2xl mb-2">
              Fale um pouco da assistência que você precisa
            </h2>
            <Textarea />
            <div className="flex justify-start">
              <button className="bg-black text-xl font-semibold text-white p-3 rounded-2xl w-full sm:w-1/2 md:w-5/6 lg:w-1/2">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </SidebarMenu>
    </Sidebar>
  );
}
export default Assistance;
