import check from './images/check.png';
import './caughtUp.css';

function CaughtUpMessage() {
  return (
    <div className='cu201Container'>
      <div>You are all caught up</div>
      <img className='cu201CheckImage' src={check} alt='check' />
    </div>
  );
}

export default CaughtUpMessage;