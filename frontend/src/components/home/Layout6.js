import image16 from '../../images/image16.jpg'

const Layout6 = () => {
  return (
    <div>
        <div className="bg-white h-20"></div>
<div className="relative">
  {/* Background image */}
  <div className="fixed inset-0 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${image16})`, zIndex: '-10' }}></div>
  
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-80"></div>
  
  {/* Content */}
  <div className="relative p-8">
    <div className='text-white text-center text-xl mx-52'>
      Gangaramaya welcomes donations from well-wishers for the numerous religious, social, educational and cultural services projects which are being organized throughout the year
    </div>
    <div className="row flex justify-center my-8">
      <button className='btn bg-white text-[#C58735] py-1 px-14 rounded-lg font-bold'>DONATE</button>
    </div>
  </div>
</div>
</div>

  )
}

export default Layout6