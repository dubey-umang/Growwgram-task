import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import CaughtUpMessage from '../../common/CaughtUpMessage/caughtUpMessage';
import ErrorMessage from '../../common/ErrorMessage/errorMessage';
import FeedCard from '../../common/feedCard';
import PostLoader from '../../common/Loader/postLoader';
import ThreeDots from '../../common/Loader/threeDots';
import { getFeedsData, removeFeedsData } from '../../store/FeedPage/actionCreator';
import { hardRefresh } from '../../utils/localStorage/helpers';
import { FeedData, RootState } from '../../utils/types';

function Feeds() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  // Fetch data from react redux store
  const { data: feedsData, hasError, isLoading, hasMore } = useSelector((state: RootState) => state.feedPage)

  useEffect(() => {
    dispatch(removeFeedsData());
  }, [])

  useEffect(() => {
    dispatch(getFeedsData(page))
  }, [page])

  const fetchNextPageData = () => {
    setPage(prev => prev + 1)
  }

  if (isLoading && feedsData.length === 0) {
    return <PostLoader />
  }

  return (
    <div className='fd201Container'>
      <InfiniteScroll
        dataLength={feedsData.length}
        next={fetchNextPageData}
        hasMore={hasMore}
        loader={<ThreeDots />}
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
          feedsData.map((user) => {
            return (
              <FeedCard
                key={user?.urls?.regular}
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
  )
}

type Props = {
  feedsData: FeedData[]
}

export default Feeds;