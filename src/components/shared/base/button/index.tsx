// styles
import './_style.scss';

export enum borderStyleType {
	btnOutlinePrimary = 'btn-outline-primary',
	btnOutlineDark = 'btn-outline-dark'
}

export enum borderRoundedType {
	btnRounded = 'btn-rounded',
	btnRound = 'btn-round'
}

export enum iconPositionType {
	start = 'start',
	end = 'end'
}

// TODO: required props dynamically
export type PropButton = {
	text: string;
	isLink?: boolean; // TODO: validate `to` attribute
	isLinkDark?: boolean;
	isRounded?: boolean; // Border: if true, border rounded, else, border square
	isOutline?: boolean; // Border Style: if true, button outline, else, default button
	roundedType?: borderRoundedType;
	outlineType?: borderStyleType;
	icon?: string;
	iconPosition?: iconPositionType;
	shadow?: boolean;
};

export const DEFAULT_PROPS: Partial<PropButton> = {
	isLink: false,
	isRounded: false,
	isOutline: false,
	roundedType: borderRoundedType.btnRounded,
	outlineType: borderStyleType.btnOutlinePrimary,
	iconPosition: iconPositionType.end,
	isLinkDark: false,
	shadow: false
};

// TODO: implement HOC to create a link component use <Link />
export const Button: React.FC<PropButton> = (props: PropButton): JSX.Element => {
	const { roundedType, isRounded, isOutline, outlineType, text, icon, iconPosition, shadow, isLink, isLinkDark } =
		props;
	return (
		<button
			className={`btn ${isLink ? `${isLinkDark ? 'btn-link btn-link-dark' : 'btn-link'}` : 'btn-primary'} ${
				isRounded && roundedType
			} ${isOutline && outlineType} ${shadow && 'btn-shadow'}`}
		>
			{icon ? getButtonIconContent() : text}
		</button>
	);

	function getButtonIconContent(): JSX.Element {
		const buttonText = <span>{text}</span>;
		return (
			<>
				{iconPosition === iconPositionType.end && buttonText}
				{<i className={`icon-${icon}`}></i>}
				{iconPosition !== iconPositionType.end && buttonText}
			</>
		);
	}
};

Button.defaultProps = DEFAULT_PROPS;
