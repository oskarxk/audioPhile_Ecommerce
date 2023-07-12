import sanityClient from '../../client';

export async function fetchUserData(): Promise<{
	userName: string;
	password: string;
} | null> {
	try {
		const query = `*[_type == "admins"]{userName, password}[0]`;
		const response = await sanityClient.fetch(query);

		if (response && response.userName && response.password) {
			return {
				userName: response.userName,
				password: response.password,
			};
		} else {
			return null;
		}
	} catch (error) {
		console.error(
			'Wystąpił błąd podczas pobierania danych użytkownika:',
			error
		);
		return null;
	}
}
