import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ErrorMessage from '../../common/ErrorMessage/errorMessage';
import UserInfoLoader from '../../common/Loader/userInfoLoader';
import { getUserData } from '../../store/UserProfilePage/actionCreator';
import { RootState } from '../../utils/types';

function UserInfo() {
  const { username } = useParams<UrlParams>();
  const { userData } = useSelector((state: RootState) => state.profilePage)
  const { data, hasError, isLoading } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData(username));
  }, [])

  if(isLoading) {
    return <UserInfoLoader />
  }

  if(hasError) {
    return (
      <div className='ui201Container'>
        <ErrorMessage />
      </div>
    )
  }

  return (
    <div className='ui201Container'>
      <div className='ui201ImageWrapper'>
        <img className="ui201UserImage" src={data?.profile_image?.large} alt=''/>
      </div>
      <div className='ui201UserInfo'>
        <div className='ui201Username'> {data.username} </div>
        <div className='ui201UserData'>
          <div>
            <strong> {data.total_photos} </strong> Posts
          </div>
          <div>
            <strong> {data.followers_count} </strong> Followers
          </div>
          <div>
            <strong> {data.following_count} </strong> Following
          </div>
        </div>
        <div className='ui201UserFullName'> {data.name} </div>
      </div>
    </div>
  );
}

type UrlParams = {
  username: string
}

export default UserInfo;