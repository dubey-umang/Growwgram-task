import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CaughtUpMessage from '../../common/CaughtUpMessage/caughtUpMessage';
import ErrorMessage from '../../common/ErrorMessage/errorMessage';
import FeedCard from '../../common/feedCard';
import PostLoader from '../../common/Loader/postLoader';
import SpinnerLoader from '../../common/Loader/spinnerLoader/spinnerLoader';
import { getUserPhotos } from '../../store/UserProfilePage/actionCreator';
import { hardRefresh } from '../../utils/localStorage/helpers';
import { RootState } from '../../utils/types';

function UserFeeds() {
  const [page, setPage] = useState(1);

  const { username } = useParams<UrlParams>();

  const dispatch = useDispatch();
  const { userPhotos: userPhotos } = useSelector(
    (state: RootState) => state.profilePage
  );
  const { data, hasError, isLoading, hasMore } = userPhotos;

  useEffect(() => {
    dispatch(getUserPhotos(username, page));
  }, [page]);

  const fetchNextPageData = () => {
    setPage((prev) => prev + 1);
  };

  if(isLoading && data.length === 0){
    return <PostLoader />
  }

  return (
    <div className='uf201Container'>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchNextPageData}
        hasMore={hasMore}
        loader={<SpinnerLoader />}
        scrollThreshold={'200px'}
        endMessage={
          hasError ? (
            <ErrorMessage />
          ) : (
            <CaughtUpMessage />
          )
        }
        refreshFunction={hardRefresh}
        pullDownToRefresh={true}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        {
          data.map((user, index) => {
            return (
              <FeedCard
                key={index}
                comment={user?.description}
                likes={user?.likes}
                username={user?.user?.username}
                postImage={user?.urls?.regular}
                profileImage={user?.user.profile_image.small}
                height={user?.height}
                width={user?.width}
              />
            )
          })
        }
      </InfiniteScroll>
    </div>
  );
}

type UrlParams = {
  username: string
}

export default UserFeeds;