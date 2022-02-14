import { useDispatch, useSelector } from "react-redux"
import { hiddenModal } from "../../redux/actions/users"

const Modal = () => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(
      hiddenModal()
    )
  }
  return (
    // <div className="bg-gray-200">
      <div className="h-screen w-full fixed flex justify-center items-center bg-cyan-900 bg-opacity-50 z-10 left-0 top-0">
        <div className="rounded shadow-lg w-1/3">
          {/* <div className="bg-primary border-b text-center px-4 py-2">
            <h1>Leader Board</h1>
          </div> */}

          <div className="flex justify-center items-center">
            <table className="text-center shadow-2xl border-2 border-cyan-200 w-full overflow-hidden">
              <thead className="text-white">
                <tr>
                  <th className="bg-cyan-800 py-3">Ranking</th>
                  <th className="bg-cyan-800 py-3">Player</th>
                  <th className="bg-cyan-800 py-3">Poin</th>
                </tr>
              </thead>
              <tbody className="text-cyan-900 text-center">
                <tr className="bg-cyan-200 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                  <td className="py-3 px-6">1</td>
                  <td className="py-3 px-6">Bogiant</td>
                  <td className="py-3 px-6">120</td>
                </tr>
                <tr className="bg-cyan-300 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                  <td className="py-3 px-6">2</td>
                  <td className="py-3 px-6">Hafid</td>
                  <td className="py-3 px-6">112</td>
                </tr>
                <tr className="bg-cyan-400 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                  <td className="py-3 px-6">3</td>
                  <td className="py-3 px-6">Hasby</td>
                  <td className="py-3 px-6">95</td>
                </tr>
                <tr className="bg-cyan-500 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                  <td className="py-3 px-6">4</td>
                  <td className="py-3 px-6">Oja</td>
                  <td className="py-3 px-6">93</td>
                </tr>
                <tr className="bg-cyan-600 hover:bg-cyan-100 hover:scale-105 cursor-pointer duration-300">
                  <td className="py-3 px-6">5</td>
                  <td className="py-3 px-6">Ulfa</td>
                  <td className="py-3 px-6">90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-t overflow-hidden">
            <button className="bg-cyan-700 hover:bg-cyan-800 hover:shadow-inner hover:scale-105 uppercase px-3 py-1 rounded text-white mr-1 w-full h-12" onClick={handleOnClick}>Close</button>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Modal;