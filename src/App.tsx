// styles
import './App.scss';
import '@/assets/scss/icons.scss';
import '@/assets/scss/utils.scss';

// components
import { Skeleton } from '@/layouts';

// pages
import { HomePage } from '@/pages/home';

function App(): JSX.Element {
	return (
		<Skeleton>
			{/* TODO: create router */}
			<HomePage />
		</Skeleton>
	);
}

export default App;
