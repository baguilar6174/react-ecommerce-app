import './App.scss';
import '@/assets/scss/icons.scss';
import '@/assets/scss/utils.scss';
import { Skeleton } from '@/layouts';

function App(): JSX.Element {
	return (
		<Skeleton>
			{/* TODO: create router */}
			<p>Hola</p>
		</Skeleton>
	);
}

export default App;
