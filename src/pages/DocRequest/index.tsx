import Select from "../../components/Select";
import Textarea from "../../components/Textarea";

function DocRequest() {
  return (

      <div className="h-full w-full m-1 p-2">
        <section className="mb-10">
          <h2 className="text-2xl font-bold">SOLICITAÇÃO DE DOCUMENTOS</h2>
          <p className="lg:text-xl text-balance">
            Tem dúvidas, sugestões ou precisa de ajuda? Conte com a gente. Nos
            envie uma mensagem com sua solicitação que em breve nossa equipe de
            Atendimento ao Ciente entrará em contato. Se preferir, você pode
            entrar em contato através do telefone e e-mail ao lado.
          </p>
        </section>
        <form method="post">
          <div className="mb-8">
            <Select />
          </div>
          <section className="flex flex-col mb-5">
            <h2 className="text-2xl font-bold mb-2">Recber documentos</h2>
            <div className="columns-2">
              <div className="flex flex-col">
                <div className="mb-2">
                  <input type="checkbox" />
                  <label className="ml-2">Exemplo</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" />
                  <label className="ml-2">Exemplo</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" />
                  <label className="ml-2">Exemplo</label>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="mb-2">
                  <input type="checkbox" />
                  <label className="ml-2">Exemplo</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" />
                  <label className="ml-2">Exemplo</label>
                </div>
                <div className="mb-2">
                  <input type="checkbox" />
                  <label className="ml-2">Exemplo</label>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col mb-10">
            <h3 className="text-2xl font-bold">Enviar documentos</h3>
            <div className="lg:grid lg:grid-cols-2">
              <div className="md:mt-2">
                <input type="checkbox" />
                <label className="ml-2 text-balance">
                  Conforme solicitação do Departamento de Atendimento ao Cliente
                </label>
              </div>
              <div className="mt-2 border-t md:border-none md:flex flex-col">
                <label className="text-xl">Anexar documento</label>
                <input type="file" />
              </div>
            </div>
          </section>
          <section>
            <label className="block text-2xl mb-2">Mensagem</label>
            <Textarea />
          </section>
        </form>
      </div>
  );
}
export default DocRequest;
