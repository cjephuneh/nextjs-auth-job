import Image from 'next/image'
import profilePic from '../public/undraw_verified_re_4io7.png'

function Home() {
  return (
    <>
      <div className='img__sucess'>
      <Image
        src={profilePic}
        alt="Picture of the author"
        
      />
       </div>
      <div className='cont__wel'>
        <h1>Welcome</h1>
        
      </div>
    </>
  )
}

export default Home