import {useNavigate} from 'react-router-dom'



function NotFound() {
  const navigate = useNavigate();
 
  const goToHome = () => {
    navigate('/movie-hub');
  }
  return (
    
    <section className="not-found">
      <img  
         src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
         alt="GIF"/>
      <div className='backHome'>
        <input type="button"
              onClick={goToHome}
               value={'Return to Home'}/>
      </div>
  </section>
  )
}

export default NotFound