import { Footer, Header } from '../';
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
			{/* TODO: add sroll-top functionallity*/}
			<button id="scroll-top" title="Back to Top">
				<i className="icon-arrow-up"></i>
			</button>
		</>
	);
};
