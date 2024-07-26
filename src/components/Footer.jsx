
import { linkedin } from '../assets';
import {connect} from "../constants";

const Footer = ({source_code_link}) => {
  return (
    <div className='flex justify-center '>
            <div onClick={()=>window.open(connect[0].source_code_link)}
              className=' w-10 h-10 mb-8 flex rounded-xl justify-center items-center cursor-pointer'>
              <img src={linkedin} alt="Linkedin" className=' rounded-xl w-10 h-10 object-contain'/>
            </div>
            </div>
            
  )
}
export default Footer