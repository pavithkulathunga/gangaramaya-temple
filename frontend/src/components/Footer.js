import logo from '../images/logo.png'
import image16 from '../images/image16.jpg'
import Email from '../images/EMail.js';
import Location from '../images/Location.js';
import Person from '../images/Person.js';

const Layout7 = () => {
  return (
    <div>
    {/* White space */}
    <div className="bg-white h-20"></div>
    
    <div className="relative">
        
        {/* Background image */}
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-white" style={{ backgroundImage: `url(${image16})`, zIndex: '-10' }}></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
        
        {/* Content */}
        <div className="relative pt-8">
            
            <img src={logo} className="h-14 bg-white px-3 rounded-r-md" alt="logo" />
            
            <div className='flex pt-10 justify-between mx-10'>
                <p className='text-white text-xs max-w-96'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum 
                    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit 
                    praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod 
                    </p>
                    
                <div>
                    <h2 className='text-[#C58735] font-semibold text-lg'>Quick Links</h2>
                    <ul className='text-white' style={{listStyleType: "square"}}>
                        <li className='py-3'>Donation</li>
                        <li className='py-3'>Eco Tourism Reservation</li>
                        <li className='py-3'>Live TV</li>
                        <li className='py-3'>Contact us</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-[#C58735] font-semibold text-lg'>Contact Us</h2>
                    <div className='flex '>
                    <ul className='text-white'>
                        <div className='flex py-3'>
                            <Email props={" h-11 pr-3"}/>
                            <li>gt@gangaramaya.com</li>
                        </div>

                        <div className="flex py-3">
                            <Location props={" h-11 pr-3"}/>
                            <li>Gangaramaya,<br />
                                61, Sri Jinarathana Road,<br />
                                Colombo 2, Sri Lanka
                            </li>
                        </div>

                        <div className="flex py-3">
                            <Person props={" h-11 pr-3"}/>
                            <div>
                                <li>(+94) 11 2435169</li>
                                <li>(+94) 11 232 7084</li>
                                <li>(+94) 11 2459622 </li> 
                            </div>
                        </div>
                        
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Layout7