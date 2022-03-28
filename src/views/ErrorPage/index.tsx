import './index.css'
import error404 from './images/error404.png';

function ErrorPage() {
	return (
		<div className='ep201Container'>
			<div className='ep201Content'>
				<div className='ep201Text fadeInUp'>
					<img className='ep201ErrorImage' src={error404} alt='404' />
					<div>Page Not Found</div>
				</div>
				<div>
					Go back to
					<a className='ep201GoBackLink' href='/'>Homepage</a>
				</div>
			</div>
		</div>
	);
}

export default ErrorPage;