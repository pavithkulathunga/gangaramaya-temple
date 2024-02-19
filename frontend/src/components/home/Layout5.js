import ClickSvg from '../../images/Clicksvg.js';
import Facebook from '../../images/facebook.js';
import Instagram from '../../images/instagram.js';
import Youtube from '../../images/youtube.js';
import image4 from '../../images/image4-rotated.png'
import image13 from '../../images/image13.png'
import image14 from '../../images/image14.png'
import gangaramaya from '../../images/gangaramaya.png'

const Layout5 = () => {
  return (
    <div className="bg-no-repeat bg-right bg-contain" style={{ backgroundImage: `url(${image4})`, }}>
      <div className="row flex justify-center my-8">
        <button className='btn bg-[#C58735] text-white py-1 px-20 rounded'>Read More</button>
      </div>
      <div>
        <img src={image13} className=" w-screen mt-14" alt="image13" />
      </div>
      <div className='flex justify-between'>
      <div>
        <div className=' p-28'>
          <span className="text-[#C58735] text-6xl font-semibold">Follow</span><br /> <span className=" text-[#606060] flex text-4xl font-medium">Us On<ClickSvg /></span>
        </div>

        <div className=' bg-[#C58735] rounded-r-xl flex justify-center'>
          <Instagram props={'h-10 mx-3 my-2'}  />
          <Facebook props={'h-10 mx-3 my-2'}/>
          <Youtube props={'h-10 mx-3 my-2'} />
        </div>
      </div> 
        <div className='bg-[#f4f4f3] p-12 py-16 flex justify-center items-center rounded-b-2xl'>
          <img src={gangaramaya} className="h-96" alt="gangaramaya" /> 
        </div>
        <div className='bg-[#f4f4f3] p-12 py-16 mr-5 flex justify-center items-center rounded-b-2xl'>
          <img src={image14} className="h-96" alt="image14" /> 
        </div>
      </div>
    </div>
  );
};

export default Layout5;
