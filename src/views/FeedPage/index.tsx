import Feeds from './feeds';
import Suggestions from './suggestions';
import './index.css';
import Story from './story';

function FeedPage() {

  return (
    <div className='fp201Container'>
      <div className='fp201Content'>
        <div className='fp201FeedContent'>
          <Story />
          <Feeds />
        </div>
        <Suggestions />
      </div>
    </div>
  );
}

export default FeedPage;