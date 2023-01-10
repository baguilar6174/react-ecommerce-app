export type PropItemCart = {
	id: string;
	title: string;
	image: string;
	quantity: number;
	price: number;
};

export const ItemCart: React.FC<PropItemCart> = (props: PropItemCart): JSX.Element => {
	const { id, image, title, quantity, price } = props;

	return (
		<div className="product">
			<div className="product-cart-details">
				<h4 className="product-title">
					<a href={id}>{title}</a>
				</h4>

				<span className="cart-product-info">
					<span className="cart-product-qty">{quantity}</span>x ${price}
				</span>
			</div>

			<figure className="product-image-container">
				<a href={id} className="product-image">
					<img src={image} alt="product" />
				</a>
			</figure>
			<button className="btn-remove" title="Remove Product">
				<i className="icon-close"></i>
			</button>
		</div>
	);
};
