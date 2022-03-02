import jsPDF from 'jspdf'
import Image from 'next/image';
import React from 'react'
import kucing from '../public/images/kucing-ngelamun.jpg';

export default function MyPdf (){
  const generatePdf = () => {
    const doc = new jsPDF("p", "px", "a4")
    // const doc = new jsPDF()
    // const doc = new jsPDF("landscape", "px", "a4", false)
    doc.html(document.querySelector("#content"), {
      callback: function(pdf){
        // const pageCount = doc.internal.getNumberOfPages()
        // pdf.deletePage(pageCount)
        pdf.save("mycat.pdf")
      }
    })
  }

  return (
    <div className='container px-30 mx-40 flex flex-col justify-center items-center font-body py-10'>
      <div id='content'>
        <h1 className='font-bold text-center text-2xl'>My Cat</h1>
        <Image src="/images/kucing-ngelamun.jpg" alt="kucing-ngelamun" width="400" height="250" />
        <h3>I have a lovely cat. I found this cat about 1 year ago in front of my house. It was a little cat who has no house and I could not find her mother so that I decided to take care of it. I named this cat Kitty. Kitty is the one and only cat that I like because it is very cute.

        Kitty is about one year old now. It is a persian cat with a very clear bright white fur. It has very smooth fur and the fur is longer than any other cats that I have ever seen. That is maybe because it is a persian cat. Kitty looks very cute and sweet with her white soft fur. Moreover, it has bright blue eyes. When you look at its eyes, you will feel as if you see a sky or a blue ocean because it looks very bright blue. Kitty is a very beautiful cat. I really take care of its fur. I regularly take Kitty to the saloon for animals in my town twice a week to give a treatment for its fur. I also regularly bath it twice a week so that Kitty will be healthy and is not vulnerable of any disease. Moreover, Kitty is a little bit heavier now. It eats much now. I feed it regularly with a special food for cats. I also give Kitty a little bowl of milk three times in a week so that it becomes healthy and well-cared.

        Kitty has a heatlhy body so that it becomes very attractive. I really like play with her. Kitty likes to play plastic ball or yarn ball in my house with me. I also sometimes give it a mouse in the form of a toy. It really likes to chase the mouse. I find it very cute when Kitty runs here and there trying to catch the mouse. Kitty is my lovely cat. I sometimes tell many things to it. Even though I know that it may not understand what I say, but at least it always hears what I want to say. I like to play with it when I come home after having an exhausted day at school. I love my cat so much.</h3>
      </div>
      <button onClick={generatePdf} className='bg-primary text-white rounded-md px-3 py-2 hover:bg-white hover:text-primary hover:border-primary hover:border'>Download</button>
    </div>
  )
}
