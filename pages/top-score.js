import jsPDF from 'jspdf'
import { useRouter } from 'next/router';

const TopScore = () => {
  const router = useRouter()

  const generatePdf = () => {
    const doc = new jsPDF("landscape", "px", "a4")
    doc.html(document.querySelector("#content"), {
      callback: function(pdf){
        pdf.save("top.pdf")
      }
    })
  }

  const handleButtonClose = () => {
    router.push("/home")
  }

  return (
      <div className="px-[350px]" >
        <div className="w-full z-10 left-0 top-0" id='content'>

          <p className="text-black text-center my-5 text-2xl font-bold">Top Score</p>
          <table className="border-collapse table-fixed border border-slate-400 w-full h-max">
            <thead>
              <tr className='bg-gray-300 '>
                <th className="border border-slate-400 p-2">Ranking</th>
                <th className="border border-slate-400 p-2">Player</th>
                <th className="border border-slate-400 p-2">Poin</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-center bg-gray-100 hover:bg-gray-200'>
                <td className="border border-slate-400 p-2">1</td>
                <td className="border border-slate-400 p-2">Bogiant</td>
                <td className="border border-slate-400 p-2">120</td>
              </tr>
              <tr className='text-center bg-gray-100 hover:bg-gray-200'>
                <td className="border border-slate-400 p-2">2</td>
                <td className="border border-slate-400 p-2">Hafid</td>
                <td className="border border-slate-400 p-2">112</td>
              </tr>
              <tr className='text-center bg-gray-100 hover:bg-gray-200'>
                <td className="border border-slate-400 p-2">3</td>
                <td className="border border-slate-400 p-2">Hasby</td>
                <td className="border border-slate-400 p-2">95</td>
              </tr>
              <tr className='text-center bg-gray-100 hover:bg-gray-200'>
                <td className="border border-slate-400 p-2">4</td>
                <td className="border border-slate-400 p-2">Oja</td>
                <td className="border border-slate-400 p-2">93</td>
              </tr>
              <tr className='text-center bg-gray-100 hover:bg-gray-200'>
                <td className="border border-slate-400 p-2">5</td>
                <td className="border border-slate-400 p-2">Ulfa</td>
                <td className="border border-slate-400 p-2">90</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex justify-end my-8'>
          <button onClick={handleButtonClose} className='bg-red-700 text-center text-white rounded-md px-3 py-2 hover:bg-white hover:text-red-700 hover:border-red-700 hover:border w-28 mr-2'>Close</button>
          <button onClick={generatePdf} className='bg-primary text-center text-white rounded-md px-3 py-2 hover:bg-white hover:text-primary hover:border-primary hover:border w-28 ml-2'>Download</button>
        </div>
      </div>
  )
}

export default TopScore;