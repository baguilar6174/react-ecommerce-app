// react libs
import { Link, useLocation } from 'react-router-dom';

// styles
import './_styles.scss';

export const Breadcrumb: React.FC = (): JSX.Element => {
	const location = useLocation();

	let currentLink = '';

	const crumbs = location.pathname
		.split('/')
		.filter((crumb): boolean => crumb !== '')
		.map((crumb, i, arr): JSX.Element => {
			currentLink += `/${crumb}`;
			const isActiveCrumb = arr.length - 1 === i;
			return (
				<li key={crumb} className={`breadcrumb-item ${isActiveCrumb && 'active'}`}>
					{isActiveCrumb ? crumb : <Link to={currentLink}>{crumb}</Link>}
				</li>
			);
		});

	return (
		<nav aria-label="breadcrumb" className="breadcrumb-nav">
			<div className="container">
				<ol className="breadcrumb">
					<li className="breadcrumb-item">
						<Link to="/">Home</Link>
					</li>
					{crumbs}
				</ol>
			</div>
		</nav>
	);
};
