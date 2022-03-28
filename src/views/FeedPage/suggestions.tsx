import { useSelector } from 'react-redux';
import { RootState } from '../../utils/types';
import { useHistory } from 'react-router-dom';
import { truncateUsername } from '../../utils/helpers';
import SuggestionsLoader, { SuggestionsUserCardLoader } from '../../common/Loader/suggestionsLoader';

function Suggestions() {
  const history = useHistory();
  const { data: feedsData, isLoading, hasError } = useSelector((state: RootState) => state.feedPage)

  if (isLoading && feedsData.length === 0) {
    return (
      <div className='sg201Container'>
        <SuggestionsUserCardLoader />
        <SuggestionsLoader />
      </div>
    )
  }

  if (hasError && feedsData.length === 0) {
    return <div></div>
  }

  return (
    <div className='sg201Container'>
      <div onClick={() => history.push(`/user/${feedsData[8]?.user?.username}`)} className='sg201UserDetails'>
        <div className='sg201UserImageWrapper'>
          <img className="sg201SuggestedUserImage" src={feedsData[8]?.user?.profile_image?.large} alt='suggestedImage' />
        </div>
        <div className='sg201UserNameWrapper'>
          <div> {truncateUsername(feedsData[8]?.user?.username, 15)} </div>
          <div> {feedsData[8]?.user?.name} </div>
        </div>
      </div>
      <div className='sg201SuggestionDetails'>
        <div className='sg201Header'>
          <div>Suggestions for you</div>
          <div>See All</div>
        </div>
        {
          feedsData.slice(0, 6).map((user, index) => (
            <div key={index} className='sg201SuggestionsCard'>
              <div onClick={() => history.push(`/user/${user?.user?.username}`)} className='sg201SuggestedUserDetails'>
                <div className='sg201SuggestedUserImageWrapper'>
                  <img className="sg201SuggestedUserImage" src={user?.user?.profile_image?.small} alt='suggestedImage' />
                </div>
                <div className='sg201SuggestedUserName'>
                  <div>{truncateUsername(user?.user?.username, 15)}</div>
                  <div>Suggested for you</div>
                </div>
              </div>
              <div className='sg201Follow'>Follow</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Suggestions;