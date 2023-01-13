import Image from 'next/image'
import registerpic from '../public/undraw_Access_account_re_8spm.png'
import facebook from '../public/icons8-facebook-f-32.png'
import apple from '../public/icons8-apple-logo-30.png'
import google from '../public/icons8-google-48.png'

const Register = () => {
  return (
    <div className='v1_2'>
        <div className='create__rec'>
            <Image className='reg__image'
            src={registerpic}
            alt="Picture of the author"
            width={500}
            height={500}    
        />
        <p className='v4_37'>Already Having An  Account ?</p>
        <p className='v4_38'>We are happy to have you back</p>
        <div className="v4_40">Log-in</div>
        

        </div>
      
      
       
    </div>
  )
}

export default Register