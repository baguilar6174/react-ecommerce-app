// react libs
import { Routes, Route } from 'react-router-dom';

// components
import { Skeleton } from '@/layouts/skeleton/index';

// pages
import { HomePage, Page400 } from '@/features';

export const AppRouter: React.FC = (): JSX.Element => {
	return (
		<Routes>
			<Route path="/" element={<Skeleton />}>
				<Route path="/" element={<HomePage />} />
			</Route>
			<Route path="/400" element={<Page400 />} />
		</Routes>
	);
};
