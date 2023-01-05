import { Header } from './header.layout';

interface SkeletonProps {
	children: React.ReactNode;
}

export const Skeleton: React.FC<SkeletonProps> = ({ children }: SkeletonProps): JSX.Element => {
	return (
		<div className="page-wrapper">
			<Header />
			<main className="main">{children}</main>
		</div>
	);
};
