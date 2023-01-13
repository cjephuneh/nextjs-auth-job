import Image from 'next/image'
import profilePic from '../public/undraw_verified_re_4io7.png'

function Home() {
  return (
    <>
      <div className='img__sucess'>
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={550}
        height={550}
      />
       </div>
      <div className='cont__wel'>
        <h1>Welcome</h1>
        <p className='reg_sucess'>
          Your registration was sucessful
          </p>
        <button className='button__succes'>
          <h2>Go to Home</h2>
        </button>
        
      </div>
    </>
  )
}

export default Home