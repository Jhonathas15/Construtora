function Details(){
    return(
        <details className="w-3/4 md:w-1/2 mb-5">
            <summary className="bg-gray-300 p-2 rounded-md cursor-pointer">
              Evento de entrega
            </summary>
            <details className="mb-1 mt-1">
              <summary className="bg-gray-200 p-2 ml-3 rounded-md">
                Quando será?
              </summary>
            </details>
            <details className="mb-1">
              <summary className="bg-gray-200 p-2  ml-3 rounded-md">
                Quando será?
              </summary>
            </details>
            <details>
              <summary className="bg-gray-200 p-2 ml-3 rounded-md">
                Quando será?
              </summary>
            </details>
          </details>
    )
}
export default Details