export const GET = 'GET';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const POST = 'POST';

const API_URL = {
	auth: {
		signin: '/signin',
		refresh: '/refresh-token',
	},
	messages: {
		index: '/messages',
		folder: '/messages/folder',
		read: '/messages/alreadyRead',
	},
};

export default API_URL;
