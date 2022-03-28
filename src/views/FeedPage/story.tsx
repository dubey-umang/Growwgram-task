import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StoryLoader from '../../common/Loader/storyLoader';
import { truncateUsername } from '../../utils/helpers';
import { RootState } from '../../utils/types';

function Story() {
  const history = useHistory();
  const { data: feedsData, isLoading, hasError } = useSelector((state: RootState) => state.feedPage)

  if(isLoading && feedsData.length === 0){
    return <StoryLoader />
  }

  if(hasError && feedsData.length === 0){
    return <div></div>
  }

  return (
    <div className='st201Container'>
      {
        feedsData.slice(0, 6).map((user, index) => (
          <div key={index} className='st201Card'>
            <div onClick={() => history.push(`/user/${user?.user?.username}`)} className='st201UserImageWrapper'>
              <img className="st201UserImage" src={user?.user.profile_image.large} alt='' />
            </div>
            {/* to Truncate the Usernmae */}
            <div> {truncateUsername(user?.user?.username, 6)} </div>
          </div>
        ))
      }
    </div>
  );
}

export default Story;