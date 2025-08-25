import './App.css';
import './styles/themes.css';
import { AppProvider } from './context/AppContext';
import AppRoutes from './routes';

function App() {
	return (
		<AppProvider>
			<AppRoutes />
		</AppProvider>
	);
}

export default App;

