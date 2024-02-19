import image5 from '../../images/image5.png'
import image6 from '../../images/image6.png'
import image7 from '../../images/image7.png'
import image8 from '../../images/image8.png'
import image9 from '../../images/image9.png'

const Layout3 = () => {
  return (
    <div>
      <div className="bg-white h-20"></div>
      <div className="bg-cover bg-center flex pt-20 bg-white" style={{ backgroundImage: `url(${image5})` }}>
        <img src={image6} className=" h-96 mx-40 mt-14" alt="image6" /> 
        <div className="mt-16">
          <div className="flex justify-between">
            <img src={image7} className="h-60 mr-16" alt="image7" /> 
            <img src={image8} className="h-60 mr-16" alt="image8" /> 
            <img src={image9} className="h-60 mr-16" alt="image9" /> 
          </div>
          <div className="mt-5 mr-5">Gangaramaya is one of the oldest Buddhist temples in Colombo, started by the famous scholar 
              monk Hikkaduwe Sri Sumangala Nayaka Thera in the late 19th Century.
              <br/><br/>
              After the Venerable Sri Sumangala, his chief pupil Devundera Sri Jinaratana Nayake Thera took 
              on the administration of the temple. It was he who laid the foundation to convert the little temple 
              to an institute of international reckoning.
              <br/><br/>
              The next chief incumbent was the Ven. Devundara Keerthi Sri Sumangala Jinaratana Vacissara 
              Thera, the teacher of the Ven. Galboda Gnanissara, who worked to make the Gangaramaya 
              what it is today: much more than a temple in the conventional term, but a place of worship, 
              a seat of learning and a cultural centre.
              <br/><br/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Layout3