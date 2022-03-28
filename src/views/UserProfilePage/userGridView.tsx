import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import CaughtUpMessage from "../../common/CaughtUpMessage/caughtUpMessage";
import ErrorMessage from "../../common/ErrorMessage/errorMessage";
import ThreeDots from "../../common/Loader/threeDots";
import UserGridLoader from "../../common/Loader/userGridLoader";
import { getUserPhotos } from "../../store/UserProfilePage/actionCreator";
import { hardRefresh } from "../../utils/localStorage/helpers";
import { RootState } from "../../utils/types";

function UserGridView(props: Props) {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { userPhotos: userPhotos } = useSelector(
    (state: RootState) => state.profilePage
  );
  const { data, hasError, isLoading, hasMore } = userPhotos;

  useEffect(() => {
    dispatch(getUserPhotos(props.username, page));
  }, [page]);

  const fetchNextPageData = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading && data.length === 0) {
    return <UserGridLoader />
  }

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchNextPageData}
      hasMore={hasMore}
      loader={<ThreeDots />}
      style={{ textAlign: 'center' }}
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
      <div className="gc201Container">
        {
          data.map((user, index) => (
            <div key={index} className="gc201ImageWrapper">
              <div className="gc201LikesCount">
                <i className="fas fa-heart"></i>
                <div> {user.likes} </div>
              </div>
              <img
                className="gc201UserPost"
                src={user?.urls?.small}
                alt={user?.user?.username}
              />
            </div>
          ))
        }
      </div>
    </InfiniteScroll>
  );
}

type Props = {
  username: string;
};

export default UserGridView;
