import Select from "../../components/Select";
import Sidebar from "../../components/Sidebar";
import SidebarMenu from "../../components/SidebarMenu";

function DocsProjects() {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <SidebarMenu />
      <div className="h-full w-full p-5">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold">DOCS/MANUAIS/PROJETOS</h2>
          <p className="text-balance lg:text-xl mb-6">
            pdihoidbsoifboidbfojsdojfsdfisdnoifmspdnfoisidufns
          </p>
          <Select />
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">Documentos enviados</h2>
          <div className="overflow-hidden rounded-xl border-2 border-black w-full md:w-full lg:w-3/4 xl:w-1/3 ">
            <table className="w-full text-center">
              <thead className="bg-gray-300 border-b-2 border-black">
                <tr className="">
                  <td className="border-r-2 border-black p-2 md:p-3">
                    Documento
                  </td>
                  <td className="border-r-2 border-black">Tipo</td>
                  <td>QR Code</td>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b-2 border-black">
                  <td className="border-r-2 border-black p-1 md:p-2">
                    <a className="text-purple-600 hover:opacity-80 cursor-pointer">
                      Teste
                    </a>
                  </td>
                  <td className="border-r-2 border-black">Manual</td>
                  <td className="">
                    <a className="text-purple-600 hover:opacity-80 cursor-pointer">
                      Teste
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-r-2 border-black p-1 md:p-2">
                    <a
                      className="text-purple-600 hover:opacity-80 cursor-pointer"
                      href=""
                    >
                      Teste
                    </a>
                  </td>
                  <td className="border-r-2 border-black">Manual</td>
                  <td>
                    <a
                      className="text-purple-600 hover:opacity-80 cursor-pointer"
                      href=""
                    >
                      Teste
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
export default DocsProjects;
