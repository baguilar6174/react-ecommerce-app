// react libs
import { Outlet } from 'react-router-dom';

// styles
import './_styles.scss';

// components
import { Breadcrumb, PageHeader } from '@/components/shared';

const ElemenstsSkeleton: React.FC = (): JSX.Element => {
	return (
		<>
			<PageHeader title="Elements list" subtitle="Elements" />
			<Breadcrumb />
			<Outlet />
		</>
	);
};

export default ElemenstsSkeleton;
