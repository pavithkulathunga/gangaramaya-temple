import image10 from '../../images/image10.png' 
import image11 from '../../images/image11.png' 
import image12 from '../../images/image12.png' 

const Layout4 = () => {
    return (
        <div className='bg-[#ffffef]'>
          <div className='mx-20 pt-16 text-4xl'>
            <strong>LATEST </strong> <span className='underline underline-offset-8'>NEWS</span>
          </div>
          <div className='flex mt-10 mx-10'>
            <div>
              <div className="bg-cover bg-center" style={{ backgroundImage: `url(${image10})`, minHeight: '100px', }}>
                <div className=" px-10 pl-60 pt-[70px] text-white text-right">
                  <strong className=" text-xl">Lorem ipsum</strong>
                  <br /><br />
                  <p className=" text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat </p>
                  <br /><br />
                </div>
              </div>
              <div className="bg-cover bg-center mt-5" style={{ backgroundImage: `url(${image11})`, minHeight: '100px', }}>
                <div className=" px-10 pl-60 pt-[70px] text-white text-right">
                  <strong className=" text-xl">Lorem ipsum</strong>
                  <br /><br />
                  <p className=" text-xs">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat</p>
                  <br /><br />
                </div>
              </div>
            </div>

            <div className="bg-cover bg-center mx-4" style={{ backgroundImage: `url(${image12})` }}>
                <div className=" px-10 pl-60 pt-[300px] text-white text-right">
                  <strong className=" text-5xl">Lorem ipsum</strong>
                  <br /><br />
                  <p className=" text-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat </p>
                  <br />
                </div>
              </div>
          </div>
        <br /> <br />
        </div>
      );
      
}

export default Layout4