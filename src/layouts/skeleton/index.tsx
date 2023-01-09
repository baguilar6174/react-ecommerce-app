// react libs
import { Outlet } from 'react-router-dom';

// styles
import './_styles.scss';

// components
import { Footer, Header, ScrollTop, MobileMenu } from '../';

export const Skeleton: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="page-wrapper">
				<Header />
				<main className="main">
					<Outlet />
				</main>
				<Footer />
			</div>
			<ScrollTop />
			<MobileMenu />
		</>
	);
};
