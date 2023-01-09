// styles
import './_style.scss';

// components
import { PageHeader } from '@/components/shared/pageHeader';

export const HomePage: React.FC = (): JSX.Element => {
	return (
		<>
			<PageHeader title="Home" />
		</>
	);
};
