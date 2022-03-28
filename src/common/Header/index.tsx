import { useHistory } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';
import './header.css';
import { hardRefresh } from '../../utils/localStorage/helpers';

function Header () {
  const [isdark, setIsDark] = useState(false);
  const history = useHistory();

  useEffect(() => {
    isdark ? document.body.className = 'dark' : document.body.className = '';
  }, [isdark])

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme') ?? 'light';
    setIsDark(theme === 'dark');
  }, [])

  const themeHandler = () => {
    localStorage.setItem('theme', isdark ? 'light' : 'dark');
    setIsDark(prev => !prev)
  }
  
  return (
    <div className="hd201Container">
      <div className="hd201Content">
        <div className="hd201LeftChild">
          <div className="hd201LogoWrapper">
            <div className='hd201LogoName' onClick={() => history.push('/')}>Growwgram</div>
          </div>
          <div className="hd201InputWrapper">
            <input className="hd201Input" type='text' placeholder="Search" />
          </div>
        </div>
        <div className="hd201RightChild">
          <svg aria-label="Home" className="_8-yf5 hd201SvgIcons" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>          
          <svg aria-label="Messenger" className="_8-yf5 hd201SvgIcons" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path><path className='hd201SvgHeartIcon' d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fillRule="evenodd"></path></svg>
          <svg aria-label="New post" className="_8-yf5 hd201SvgIcons" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
          <svg aria-label="Activity Feed" className="_8-yf5 hd201SvgHeartIcon" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
          <svg onClick={hardRefresh} xmlns="http://www.w3.org/2000/svg" className='hd201SvgHeartIcon' width="24" height="24" viewBox="0 0 24 24"><path d="M16.434 20.467c.552-.204 1.077-.462 1.569-.771l1.189 1.618c-.706.457-1.47.829-2.278 1.107l-.48-1.954zm-10.105-3.424l-1.2 1.775c.421.557.904 1.062 1.426 1.526l1.082-1.709c-.497-.475-.938-1.009-1.308-1.592zm-1.176-6.043c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5 0 2.313-.932 4.411-2.436 5.945l1.197 1.627c1.993-1.911 3.239-4.594 3.239-7.572 0-5.798-4.703-10.5-10.5-10.5-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847zm5.745 9.574c-.582-.189-1.139-.429-1.658-.733l-1.065 1.683c.688.409 1.424.739 2.201.983l.522-1.933zm3.592.364c-.839.097-1.035.066-1.623.021l-.533 1.972c.946.105 1.661.092 2.636-.045l-.48-1.948z"/></svg>
          <div className='hd201ThemeIconWrapper'>
            <img 
              onClick={themeHandler} 
              className={isdark ? 'hd201ThemeIcon hd201Hidden' : 'hd201ThemeIcon ' }
              src='https://flyclipart.com/thumb2/sun-full-sun-png-icon-free-download-375216.png'
              alt='sun' 
            />
            <img 
              onClick={themeHandler} 
              className={isdark ? 'hd201ThemeIcon' : 'hd201ThemeIcon hd201Hidden' } 
              src='https://www.pngfind.com/pngs/m/68-683356_moon-png-tumblr-moon-icon-transparent-png.png'
              alt='moon' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
