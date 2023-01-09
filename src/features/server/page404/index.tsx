// react libs
import { NavLink } from 'react-router-dom';

// styles
import './_styles.scss';

export const Page404: React.FC = (): JSX.Element => {
	return (
		<div className="error-content text-center" style={{ backgroundImage: 'url(/images/backgrounds/error-bg.jpg)' }}>
			<div className="container">
				<h1 className="error-title">Error 404</h1>
				<p>We are sorry, the page you&apos;ve requested is not available.</p>
				<NavLink to="/" className="btn btn-outline-primary-2 btn-minwidth-lg">
					<span>BACK TO HOMEPAGE</span>
					<i className="icon-long-arrow-right"></i>
				</NavLink>
			</div>
		</div>
	);
};
