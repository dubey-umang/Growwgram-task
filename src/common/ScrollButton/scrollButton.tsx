import React, {useEffect, useState} from 'react';
import './scrollButton.css';
import { BiArrowFromBottom } from 'react-icons/bi';

  
const ScrollButton = () =>{
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisible = () => {
    // or can use window.pageYOffset
    if (window.scrollY > 300){
      setIsVisible(true)
    } 
    else{
      setIsVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  //to remove addEventListener when demounting happens
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    }
  }, [])
  
  return (
    <div onClick={scrollToTop} className={isVisible ? 'sb201Container fadeInUp' : 'sb201Container sb201Hidden'}>
      
      <BiArrowFromBottom className='h-6 w-6' area-hideen='true' />
    </div>
  );
}
  
export default ScrollButton;