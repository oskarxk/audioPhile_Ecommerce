export type Message = {
	room: string;
	author: string;
	message: string;
	time: string;
};

export type Chat = {
	roomName: string;
	userId: string;
	productName: string;
	productPhoto: string;
	messages: Message[];
};
