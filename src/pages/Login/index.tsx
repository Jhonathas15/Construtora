function Login() {
  return (
    <main className="bg-[url('./assets/construtora.jpeg')] h-screen w-screen bg-no-repeat bg-cover">
      <div className="bg-white/60 h-screen w-screen">
        <article className="flex flex-col h-screen justify-center items-center w-screen text-center">
          <section className="text-balance mb-1">
            <h3 className="font-bold text-5xl">Portal do cliente</h3>
            <p className="mb-3">
              Seja bem-vindo a um lugar todo seu, corretor! Aqui você vai estar
              por dentro de tudo que podemos te oferecer.
            </p>
          </section>
          <section className="flex flex-col justify-center">
            <form className="flex flex-col">
              <input
                className="border-black w-80 p-2 mb-1 rounded-lg"
                type="text"
                placeholder="Email cadastrado"
              />
              <input
                className="border-black w-80 p-2 mb-3 rounded-lg"
                type="text"
                placeholder="Sua senha"
              />
              <button className="bg-black text-white w-80 mb-2 rounded-xl p-2">
                Entrar
              </button>
            </form>
            <section className="flex justify-end">
              <a className="font-bold" href="">
                Esqueceu a senha?
              </a>
            </section>
            <hr className="border-black" />
            <section className="flex flex-row space-x-4 ">
              <p>Ainda não possui cadastro?</p>
              <a className="font-bold" href="">
                Cadastrar senha
              </a>
            </section>
          </section>
        </article>
      </div>
    </main>
  );
}
export default Login;
