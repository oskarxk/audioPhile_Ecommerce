import React from 'react';

type Props = {
	order: {
		orderNumber: string;
		orderDate: string;
		orderTime: string;
		name: string;
		email: string;
		phoneNumber: string;
		address: string;
		zipCode: string;
		city: string;
		country: string;
		paymentMethod: string;
		emoneyNumber: string;
		emoneyPIN: string;
		total: number;
		shipping: number;
		vat: number;
		grandTotal: number;
		items: Array<{
			_id: number;
			name: string;
			price: number;
			quantity: number;
			imageCart: string;
		}>;
	};
};

export const OrderDetails = ({ order }: Props) => {
	return (
		<div className='w-full flex flex-col'>
			<div className='w-full flex'>
				<div className='flex flex-col justify-center items-center w-1/4 bg-[#FFFFFF] mx-4 my-4 rounded-lg'>
					<p className='font-bold text-m text-[#D87D4A] my-2'>
						BILLING DETAILS
					</p>
					<div className='flex justify-evenly w-full'>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='font-bold text-lg pl-8'>Name</p>
							<p className='font-bold text-lg pl-8'>Phone Number</p>
							<p className='font-bold text-lg pl-8'>Email Adress</p>
						</div>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='text-lg'>{order.name}</p>
							<p className='text-lg'>{order.phoneNumber}</p>
							<p className='text-lg'>{order.email}</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-1/4 bg-[#FFFFFF] mx-4 my-4 rounded-lg'>
					<p className='font-bold text-m text-[#D87D4A] my-2'>SHIPPING INFO</p>
					<div className='flex justify-evenly w-full'>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='font-bold text-lg pl-8'>Address</p>
							<p className='font-bold text-lg pl-8'>ZIP Code</p>
							<p className='font-bold text-lg pl-8'>Country</p>
							<p className='font-bold text-lg pl-8'>City</p>
						</div>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='text-lg'>{order.address}</p>
							<p className='text-lg'>{order.zipCode}</p>
							<p className='text-lg'>{order.country}</p>
							<p className='text-lg'>{order.city}</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-1/4 bg-[#FFFFFF] mx-4 my-4 rounded-lg'>
					<p className='font-bold text-m text-[#D87D4A] my-2'>
						PAYMENT DETAILS
					</p>
					<div className='flex justify-evenly w-full'>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='font-bold text-lg pl-8'>Payment Method</p>
							<p className='font-bold text-lg pl-8'>e-Money Number</p>
							<p className='font-bold text-lg pl-8'>e-Money PIN</p>
						</div>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='text-lg'>{order.paymentMethod}</p>
							<p className='text-lg'>{order.emoneyNumber}</p>
							<p className='text-lg'>{order.emoneyPIN}</p>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center w-1/4 bg-[#FFFFFF] mx-4 my-4 rounded-lg'>
					<p className='font-bold text-m text-[#D87D4A] my-2'>PRICING</p>
					<div className='flex justify-evenly w-full'>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='font-bold text-lg pl-8'>Total</p>
							<p className='font-bold text-lg pl-8'>Shipping</p>
							<p className='font-bold text-lg pl-8'>VAT</p>
							<p className='font-bold text-lg pl-8'>GrandTotal</p>
						</div>
						<div className='flex flex-col justify-center items-start w-1/2'>
							<p className='text-lg'>$ {order.total.toFixed(2)}</p>
							<p className='text-lg'>$ {order.shipping.toFixed(2)}</p>
							<p className='text-lg'>$ {order.vat.toFixed(2)}</p>
							<p className='text-lg'>$ {order.grandTotal.toFixed(2)}</p>
						</div>
					</div>
				</div>
			</div>
			{/* Wyświetl inne właściwości zamówienia */}
			{order.items.map((item, index) => (
				<div
					key={item._id}
					className='w-full bg-[#F1F1F1] flex justify-around items-center rounded-b-xl'
				>
					<div className='w-1/3 flex items-center justify-center'>
						<p className='font-bold text-lg'>Item {index + 1}</p>
					</div>
					<div className='w-1/3 flex items-center justify-center'>
						<img src={item.imageCart} alt={item.name} />
					</div>
					<div className='w-1/3 flex items-center justify-center'>
						<p className='font-bold text-lg'>{item.name}</p>
					</div>
					<div className='w-1/3 flex flex-col items-center justify-center'>
						<p className='font-bold text-lg'>$ {item.price.toFixed(2)}</p>
						<p className='font-bold text-lg'>Quantity: {item.quantity}</p>
					</div>

					{/* <p>{item.name}</p>
					<p>Price: ${item.price}</p>
					<p>Quantity: {item.quantity}</p>
					<img src={item.imageCart} alt={item.name} /> */}
				</div>
			))}
		</div>
	);
};
