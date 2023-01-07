// react libs
import { Routes, Route } from 'react-router-dom';

// components
import { Skeleton } from '@/layouts/skeleton/index';

// pages
import { HomePage, ElemenstsPage, Page400 } from '@/pages';

export const AppRouter: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Skeleton />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/elements" element={<ElemenstsPage />} />
			</Route>
			<Route path="/400" element={<Page400 />} />
		</Routes>
	);
};
