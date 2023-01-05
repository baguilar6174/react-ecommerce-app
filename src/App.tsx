import './App.scss';
import './assets/scss/icons.scss';
import './assets/scss/utils.scss';
import { Skeleton } from './layout/skeleton.layout';

function App(): JSX.Element {
	return (
		<Skeleton>
			<p>Hola</p>
		</Skeleton>
	);
}

export default App;
