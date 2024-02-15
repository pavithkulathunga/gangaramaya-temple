import image3 from '../images/image3.png';
import image4 from '../images/image4.png';

const layout2 = () => {
  return (
    <div className="bg-no-repeat bg-left bg-contain" style={{ backgroundImage: `url(${image4})` }}>
      <div className='row'>
        <div className=' mx-56 mt-20 text-[#3a3a3a] text-xl font-bold'>Gangaramaya welcomes donations from well-wishers for the numerous 
    religious, social, educational and cultural services projects which are being 
    organized throughout the year</div>
        </div>

      <div className="row flex justify-center">
        <img src={image3} className="m-5 h-8" alt="image3" />
      </div>

      <div className='flex justify-between mx-20 mt-10'>
        <iframe width="400" height="230" src="https://www.youtube.com/embed/XjVuZw1yUYI" title="Must see event at Colombo, Gangaramaya Nawam Maha Perahera 2023 🦚🐘🙏😍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>

        <iframe width="400" height="230" src="https://www.youtube.com/embed/jj6CX2z979o" title="&quot;ධම්මරශ්මි 2022&quot; | අසිරිමත් පොසොන් මංගල්‍යය ☸️🙏🪔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe width="400" height="230" src="https://www.youtube.com/embed/c_w6e_zOKRk" title="&quot;අග නගරයේ පෙළහරක පෙරහැරේ අරුමැසිය&quot; නවම් සඳාලෝකයට පන්දම් ආලෝකයන් මුසුව වීථි සංචාරය වන වගයි" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className="row flex justify-center my-8">
        <button className='btn bg-[#C58735] text-white py-1 px-20 rounded'>View More</button>
      </div>
      
  </div>
  )
}

export default layout2
