// react libs
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// styles
import './App.scss';
import '@/assets/scss/icons.scss';
import '@/assets/scss/utils.scss';

import { Skeleton } from '@/layouts';
import { HomePage, ElemenstsPage, ButtonsPage, Page400, Page404 } from '@/pages';

// TODO: use constants for routes names
const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* TODO: implements lazy lding using suspend */}
			<Route path="/" element={<Skeleton />}>
				<Route index element={<HomePage />} />
				<Route path="elements" element={<ElemenstsPage />}>
					<Route path="buttons" element={<ButtonsPage />} /> {/* /elements/buttons */}
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
