// react libs
import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// styles
import './App.scss';
import '@/assets/scss/icons.scss';
import '@/assets/scss/utils.scss';

import { Skeleton } from '@/layouts';
import { HomePage, Page400, Page404 } from '@/features';
import { ButtonsPage, ElemenstsPage } from '@/features/elements/pages';

const ElemenstsSkeleton = React.lazy(() => import('@/features/elements/Skeleton'));

// TODO: use constants for routes names
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* TODO: implements loading fallback */}
			<Route path="/" element={<Skeleton />}>
				<Route index element={<HomePage />} />
				<Route
					path="elements"
					element={
						<Suspense fallback={<>Loading...</>}>
							<ElemenstsSkeleton />
						</Suspense>
					}
				>
					<Route index element={<ElemenstsPage />} />
					<Route path="buttons" element={<ButtonsPage />} />
				</Route>
				<Route path="*" element={<Page404 />} />
			</Route>
			<Route path="400" element={<Page400 />} />
		</>
	)
);

function App(): JSX.Element {
	return <RouterProvider router={router} />;
}

export default App;
