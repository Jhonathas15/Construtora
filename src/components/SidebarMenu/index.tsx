import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

function SidebarMenu() {
  const [focus, setFocus] = useState("");
  const router = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        event.target instanceof Node &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <main className="flex">
      <div className="md:hidden w-full h-24 flex justify-between text-white items-center bg-black px-5">
        <h2 className="text-2xl md:text-3xl font-bold">Portal do Cliente</h2>
        <button className="md:hidden" onClick={toggleSidebar}>
          {isOpen ? (
            <IoCloseSharp size={25} />
          ) : (
            <IoMenuSharp size={25} className="" />
          )}
        </button>
      </div>
      <div ref={sidebarRef}
        className={` ${isOpen ? "flex" : "hidden"} ${
          isOpen ? "" : ""
        } absolute z-10  top-24 w-full sm:w-1/2 md:hidden flex-col  bg-black text-white`}
      >
        <nav className="w-full">
          <ul className="list-none flex flex-col items-center m-1">
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "home" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/");
                  setFocus("home");
                }}
              >
                Meus imoveis
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "progress_work" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/progress_work");
                  setFocus("progress_work");
                }}
              >
                Andamento de obras
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "financial" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/financial");
                  setFocus("financial");
                }}
              >
                Financeiro
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "doc_request" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/doc_request");
                  setFocus("doc_request");
                }}
              >
                Solicitação de documento
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "docs_manuals_porjects" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/docs_manuals_porjects");
                  setFocus("docs_manuals_porjects");
                }}
              >
                Docs - manuais - projetos
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "customer_service" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/customer_service");
                  setFocus("customer_service");
                }}
              >
                Atendimento ao cliente
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "assistance" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/assistance");
                  setFocus("assistance");
                }}
              >
                Assistência Técnica
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "questions_answers" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/questions_answers");
                  setFocus("questions_answers");
                }}
              >
                Perguntas e Respostas
                <IoIosArrowForward />
              </button>
            </li>
            <li
              className={`w-3/4 m-2 p-1 hover:opacity-80 border-b ${
                focus === "my_profile" ? "opacity-60" : ""
              }`}
            >
              <button
                className="w-full flex justify-between items-center"
                onClick={() => {
                  router("/my_profile");
                  setFocus("my_profile");
                }}
              >
                Meu perfil
                <IoIosArrowForward />
              </button>
            </li>
          </ul>
        </nav>
        <footer>
          <ul className="flex flex-col items-center list-none">
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <MdEmail />
              <a href="mailto:email@provedor.com.br?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente">
                teste@gmail.com
              </a>
            </li>
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <FaWhatsapp />
              85 99999 0000
            </li>
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <BsTelephone />
              85 99999 0000
            </li>
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <FaLocationDot />
              endereço
            </li>
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <FaSquareFacebook />
              @facebook.com
            </li>
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <FaInstagram />
              @instagram.com
            </li>
            <li className="w-3/4 flex flex-row items-center gap-2 text-xs p-1 m-1">
              <FaYoutube />
              @youtube.com
            </li>
          </ul>
          <div className="w-full flex justify-end p-5">
            <button
              className="flex justify-center items-center gap-2 border rounded-md shadow-sm p-1 hover:bg-slate-600"
              onClick={() => {
                router("/login");
                setFocus("login");
              }}
            >
              <RxExit />
              Sair
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
}
export default SidebarMenu;
