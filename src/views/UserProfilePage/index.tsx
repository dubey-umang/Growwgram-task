import { useEffect, useState } from 'react';
import UserInfo from './userInfo';
import { useParams } from 'react-router-dom';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, removeUserData, removeUserPhotos } from '../../store/UserProfilePage/actionCreator';
import { RootState } from '../../utils/types';
import UserFeeds from './userfeeds';
import UserGridView from './userGridView';
import UserPageNotFound from './userPageNotFound';

function UserProfilePage() {
  const [isActive, setIsActive] = useState(true);
  const { username } = useParams<UrlParams>();

  const { hasError: hasPhotosError } = useSelector((state: RootState) => state.profilePage.userPhotos);
  const { hasError: hasUserError } = useSelector((state: RootState) => state.profilePage.userData)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeUserPhotos());
    dispatch(removeUserData());
  }, [])

  const handleGridActive = () => {
    setIsActive(true);
  }

  const handleFeedsActive = () => {
    setIsActive(false);
  }

  if(hasPhotosError && hasUserError){
    return <UserPageNotFound />
  }

  return (
    <div className='up201Container'>
      <div className='up201Content'>
        <UserInfo />
        <div className='up201TabSwitchWrapper'>
          <div 
            className={isActive ? `up201Tab up201ActiveTab` : 'up201Tab'} 
            onClick={handleGridActive}
          >
            Posts
            <i className="fas fa-th"></i>
          </div>
          <div 
            className={!isActive ? `up201Tab up201ActiveTab` : 'up201Tab'} 
            onClick={handleFeedsActive} 
          >
            Timeline
            <i className="fas fa-stream"></i>
          </div>
        </div>
        {
          isActive ? (
            <UserGridView username={username} />
          ):(
            <UserFeeds />
          )
        }
      </div>
    </div>
  );
}

type UrlParams = {
  username: string
}

export default UserProfilePage;

