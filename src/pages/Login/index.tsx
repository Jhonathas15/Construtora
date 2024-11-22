import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const clickPassword = () => setShowPassword(!showPassword);

  return (
    <main className="bg-[url('./assets/construtora.jpeg')] h-screen w-screen bg-no-repeat bg-cover">
      <div className="bg-white/60 h-screen w-screen">
        <div className="flex flex-col h-screen justify-center items-center w-screen text-center">
          <section className="text-balance mb-1">
            <h3 className="font-bold text-5xl">Portal do cliente</h3>
            <p className="mb-3">
              Seja bem-vindo a um lugar todo seu, corretor! Aqui você vai estar
              por dentro de tudo que podemos te oferecer.
            </p>
          </section>
          <section className="flex flex-col justify-center">
            <form className="flex flex-col relative">
              <div className="email">
                <input
                  className="border-black w-80 p-2 mb-1 rounded-lg outline-none"
                  type="text"
                  placeholder="Email cadastrado"
                />
              </div>
              <div className="password relative">
                <input
                  className="relative border-black w-80 p-2 mb-3 rounded-lg outline-none"
                  type={showPassword ? "text" : "password"}
                  placeholder="Sua senha"
                />
                {showPassword ? (
                  <IoEyeOff
                    className="absolute top-3 right-2 cursor-pointer opacity-90"
                    size={20}
                    onClick={clickPassword}
                  />
                ) : (
                  <IoEye
                    className="absolute top-3 right-2 cursor-pointer opacity-90"
                    size={20}
                    onClick={clickPassword}
                  />
                )}
              </div>
              <div className="btn">
                <button className="bg-black text-white w-80 mb-2 rounded-xl p-2">
                  Entrar
                </button>
              </div>
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
        </div>
      </div>
    </main>
  );
}
export default Login;
