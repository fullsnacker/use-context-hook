import { useState } from 'react';
import { UserContext } from './UserContext';

const user = { id: 123, name: 'Fullsnacker', email: 'fullsnacker@gmail.com' };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		// <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
		<UserContext.Provider value={{ user: user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
