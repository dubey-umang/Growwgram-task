import userNotFound from './images/remove-user.png';

function UserPageNotFound() {
  return (
    <div className='pf201Container'>
      <div className='pf201Content'>
        <div className='pf201ErrorMessage'>
          <img className='pf201ErrorImage' src={userNotFound} alt='User cross' />
          <div>User does not exist</div>
        </div>
        <div className='pf201GoBack'>
          <div>Go back to </div>
          <a className='pf201GoBackLink' href='/'>Homepage</a>
        </div>
      </div>
    </div>
  );
}

export default UserPageNotFound;