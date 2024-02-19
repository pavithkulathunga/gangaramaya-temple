import image16 from '../../images/image16.jpg'

const Layout6 = () => {
  return (
<div className="relative">
  {/* Background image */}
  <div className="fixed inset-0 bg-no-repeat bg-cover bg-center z-10" style={{ backgroundImage: `url(${image16})`, zIndex: '-10' }}></div>
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-80"></div>
  
  {/* Content */}
  <div className="relative z-10 p-8">
    <div className='text-white text-center text-xl mx-52'>
      Gangaramaya welcomes donations from well-wishers for the numerous religious, social, educational and cultural services projects which are being organized throughout the year
    </div>
    <div className="row flex justify-center my-8">
      <button className='btn bg-white text-[#C58735] py-1 px-14 rounded-lg font-bold'>DONATE</button>
    </div>
  </div>
</div>


  )
}

export default Layout6