import Select from "../../components/Select";
import Card from "../../assets/card-1.jpeg";

function ProgressWork() {
  return (
      <div className="h-full w-full p-2">
        <section className="mb-5">
          <h2 className="text-2xl font-semibold">ANDAMENTO DE OBRAS</h2>
          <Select />
        </section>
        <section className="flex flex-col xl:grid xl:grid-cols-2">
          <div className="card p-2">
            <img src={Card} alt="Imagem" />
          </div>
          <div className=" lg:ml-10 p-2">
            <section className="flex flex-row">
            <select className="border-2 border-black rounded-l-lg p-1 lg:p-2 w-1/3 ">
              <option value="">2022</option>
            </select>
            <select className="border-t-2 border-r-2 border-b-2 border-black rounded-r-lg p-1 lg:p-2 w-1/3">
              <option value="">Agosto</option>
            </select>
            </section>
            <ul className="list-style-none p-2">
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
                <li className="border-b-2">teste</li>
            </ul>
          </div>
        </section>
      </div>
  );
}
export default ProgressWork;
