
import { Bookmark } from 'lucide-react';

const card = (props) => {

  return (
    <div className='card'>
        <div>
            <div className='card-header'>
                <img src={props.brandLogo} alt="" />
                <button>Save <Bookmark size={12} /></button>
            </div>
            
            <div className='card-body'>
                <h3><strong>{props.company}</strong> <span>{props.datePosted}</span></h3>
                <h2>{props.post}</h2>
                <div className='tag'>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
        </div>
        
        <div className='card-footer'>
            <div>
              <h3>${props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button> 
        </div>
    </div>
  )
}

export default card