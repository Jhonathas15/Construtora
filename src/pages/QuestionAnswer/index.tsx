import Details from "../../components/Details";

function QuestionAnswer() {
  return (
   
      <div className="h-full w-full p-5">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">PERGUNTAS E RESPOSTAS</h2>
          <p className="lg:text-xl text-balance">
            Tem dúvidas, sugestões ou precisa de ajuda? Conte com a gente. Nos
            envie uma mensagem com sua solicitação que em breve nossa equipe de
            Atendimento ao Ciente entrará em contato. Se preferir, você pode
            entrar em contato através do telefone e e-mail ao lado.
          </p>
        </section>
        <section>
          <Details />
          <Details />
          <Details />
        </section>
      </div>
  );
}
export default QuestionAnswer;
