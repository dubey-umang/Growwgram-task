import { useState } from "react";
import { useHistory } from "react-router-dom";
import { truncateUsername } from "../../utils/helpers";
import ImageLoader from "../Loader/imageLoader";
import './feedCard.css';

function FeedCard (props: Props) {
  const { comment, likes, username, postImage, profileImage, height, width } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const history = useHistory();

  const loaderHeight = (height / width) * 598;

  return(
    <div className="fc201Container">

      <div onClick={() => history.push(`/user/${username}`)} className="fc201Header">
        <div className="fc201ProfileImageWrapper">
          <img className="fc201ProfileImage" src={profileImage} alt="user" />
        </div>
        <div className="fc201ProfileUsername">
          {username}
        </div>
      </div>

      <div className='fc201ImageWrapper' >
        {
          !isImageLoaded && (
            <ImageLoader height={loaderHeight} />
          )
        }
        <img onLoad={() => setIsImageLoaded(true)} className="fc201CardImage" src={postImage}  alt='content' />
      </div>

      <div className="fc201Footer">
        <div className="fc201IconsWrapper">
          <div className="fc201IconsWrapperLeft">
            <i 
              onClick={() => setIsLiked(!isLiked)}
              className={isLiked ? `fas fa-heart color-red` : 'far fa-heart'}
            ></i>
            <svg width={20} xmlns="http://www.w3.org/2000/svg" className="hd201SvgHeartIcon" stroke="currentColor" tabIndex={0} viewBox="0 0 122.97 122.88"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" d="M61.44,0a61.46,61.46,0,0,1,54.91,89l6.44,25.74a5.83,5.83,0,0,1-7.25,7L91.62,115A61.43,61.43,0,1,1,61.44,0ZM96.63,26.25a49.78,49.78,0,1,0-9,77.52A5.83,5.83,0,0,1,92.4,103L109,107.77l-4.5-18a5.86,5.86,0,0,1,.51-4.34,49.06,49.06,0,0,0,4.62-11.58,50,50,0,0,0-13-47.62Z"></path></svg>
            <svg width={20} xmlns="http://www.w3.org/2000/svg" className="hd201SvgHeartIcon" fill="border" stroke="currentColor" tabIndex={0} viewBox="0 0 122.88 108.3"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M96.14,12.47l-76.71-1.1,28.3,27.85L96.14,12.47ZM53.27,49l9.88,39.17L102.1,22,53.27,49ZM117,1.6a5.59,5.59,0,0,1,4.9,8.75L66.06,105.21a5.6,5.6,0,0,1-10.44-1.15L41.74,49,1.67,9.57A5.59,5.59,0,0,1,5.65,0L117,1.6Z"></path></svg>
          </div>
          <div className="fc201IconsWrapperRight">
            <i className="far fa-bookmark"></i>
          </div>
        </div>
        <div className="fc201LikesWrapper">
          {
            isLiked ? `${likes + 1} likes` : `${likes} likes`
          }
        </div>
        <div className="fc201CaptionWrapper">
          <strong className="fc201ProfileUsername">
            {username}
          </strong>
          {truncateUsername(comment, 50)}
        </div>
      </div>

    </div>
  )
}

type Props = {
  comment: string;
  likes: number;
  username: string;
  postImage: string;
  profileImage: string;
  height: number;
  width: number;
}

export default FeedCard;