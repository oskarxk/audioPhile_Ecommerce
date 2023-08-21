export type Product = {
	_id: number;
	name: string;
	shortName: string;
	price: number;
	description: string;
	feature1: string;
	feature2: string;
	imageDesktop: string;
	imageMobile: string;
	imageCart: string;
	photoGalleryDesktop1: string;
	photoGalleryDesktop2: string;
	photoGalleryDesktop3: string;
	photoGalleryMobile1: string;
	photoGalleryMobile2: string;
	photoGalleryMobile3: string;
	contents: {
		name: string;
		quantity: number;
	}[];
	category: {
		name: string;
	};
};

export type ProductState = Product & {
	quantity: number;
};