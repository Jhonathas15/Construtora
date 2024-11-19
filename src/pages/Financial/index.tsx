import Select from "../../components/Select";

function Financial() {
  return (
    <div className="h-full w-full p-5">
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Financeiro</h2>
        <Select />
        <p className="text-xs md:text-xl mt-2">
          O emprrendimento selecionado é
          <strong> ID 535 - Nome do imovel</strong>
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-1">Informe de rundimentos</h2>
        <p>
          <a href="" className="underline hover:opacity-80">
            Abrir informe de rundimentos
          </a>
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-1">Extrato</h2>
        <p>
          <a href="" className="underline hover:opacity-80">
            Abrir extrato
          </a>
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-1">Reimpressão de boletos</h2>
        <p className="w-full p-3 border rounded bg-blue-300 bg-opacity-50">
          Nenhum boleto disponivel
        </p>
      </section>
    </div>
  );
}
export default Financial;
