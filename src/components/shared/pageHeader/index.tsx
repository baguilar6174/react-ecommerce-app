// react libs
import { Link, useLocation } from 'react-router-dom';

// styles
import './_styles.scss';

export type PropPageHeader = {
	title: string;
	subtitle?: string;
};

export const DEFAULT_PROPS: PropPageHeader = {
	title: 'Page header title'
};

export const PageHeader: React.FC<PropPageHeader> = (props: PropPageHeader): JSX.Element => {
	const { title, subtitle } = props;

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
		<>
			<div className="page-header text-center" style={{ backgroundImage: 'url(/images/page-header-bg.jpg)' }}>
				<div className="container">
					<h1 className="page-title">
						{title}
						<span>{subtitle}</span>
					</h1>
				</div>
			</div>
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
		</>
	);
};

PageHeader.defaultProps = DEFAULT_PROPS;
