import Select from "../../components/Select";
import Sidebar from "../../components/Sidebar";
import SidebarMenu from "../../components/SidebarMenu";
import Textarea from "../../components/Textarea";

function CustomerService() {
  return (
    <Sidebar>
      <SidebarMenu>
        <div className="h-full w-full p-5">
          <section className="mb-2">
            <h2 className="text-2xl font-semibold">ATENDIMENTO AO CLIENTE</h2>
            <p className="text-balance lg:text-xl">
              Tem dúvidas, sugestões ou precisa de ajuda? Conte com a gente. Nos
              envie uma mensagem com sua solicitação que em breve nossa equipe
              de Atendimento ao Ciente entrará em contato. Se preferir, você
              pode entrar em contato através do telefone e e-mail ao lado.
            </p>
          </section>
          <section className="sm:grid sm:grid-cols-2 mb-10">
            <p className="text-xl font-bold ">Telefone: (83) 9.8888-8888</p>
            <p className=" text-xl font-bold ">Email@gamil.com</p>
          </section>
          <form method="post">
            <h2 className="text-2xl mb-2">Escolha do emprrendimento</h2>
            <div className="mb-6">
              <Select />
            </div>
            <h2 className="text-2xl mb-2">Escolha do tipo de solicitação</h2>
            <div className="mb-6">
              <Select />
            </div>
            <h2 className="text-2xl mb-2">Mensagem</h2>
            <Textarea />
            <div className="flex justify-start">
              <button className="bg-black text-xl text-white p-3 rounded-2xl w-full md:w-1/2">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </SidebarMenu>
    </Sidebar>
  );
}
export default CustomerService;
