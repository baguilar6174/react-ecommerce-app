import { Footer, Header, ScrollTop } from '../';
import './_styles.scss';

interface SkeletonProps {
	children: React.ReactNode;
}

export const Skeleton: React.FC<SkeletonProps> = ({ children }: SkeletonProps): JSX.Element => {
	return (
		<>
			<div className="page-wrapper">
				<Header />
				<main className="main">{children}</main>
				<Footer />
			</div>
			<ScrollTop />
			{/* TODO: add mobile menu */}
		</>
	);
};
