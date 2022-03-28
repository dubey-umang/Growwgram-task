import warning from './images/warning.png';
import './error.css';

function ErrorMessage() {
  return (
    <div className='em201Container'>
      <div>There is some error</div>
      <img className='em201ErrorImage' src={warning} alt='warning' />
    </div>
  );
}

export default ErrorMessage;