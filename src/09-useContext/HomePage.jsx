import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
	const { user } = useContext(UserContext);
	return (
		<>
			<h1>HomePage</h1>
			<h3>{user?.name}</h3>
			<hr />
		</>
	);
};
