function Profile() {
  return (
        <div className="h-full w-full p-5">
          <section>
            <h2 className="text-2xl font-semibold">MEU PERFIL</h2>
            <p className="text-balance lg:text-xl">
              Tem dúvidas, sugestões ou precisa de ajuda? Conte com a gente. Nos
              envie uma mensagem com sua solicitação que em breve nossa equipe
              de Atendimento ao Ciente entrará em contato. Se preferir, você
              pode entrar em contato através do telefone e e-mail ao lado.
            </p>
          </section>
          <form className="flex flex-col m-10" method="post">
            <h2 className="text-xl mb-2">Senha atual</h2>
            <input
              className="border-2 border-black w-full md:w-3/4 lg:w-1/2 2xl:w-1/2 rounded-2xl p-3 mb-3"
              type="password"
            />

            <h2 className="text-xl mb-2">Nova senha</h2>
            <input
              className="border-2 border-black w-full md:w-3/4 lg:w-1/2 2xl:w-1/2 rounded-2xl p-3 mb-4"
              type="password"
            />

            <h2 className="text-xl mb-2">Repetir nova senha</h2>
            <input
              className="border-2 border-black w-full md:w-3/4 lg:w-1/2 2xl:w-1/2 rounded-2xl p-3 mb-5"
              type="password"
            />

            <button
              className="bg-black text-xl font-semibold text-white p-3 rounded-2xl w-full md:w-1/3"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
  );
}
export default Profile;
