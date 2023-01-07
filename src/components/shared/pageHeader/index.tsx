// styles
import './_styles.scss';

export type PropPageHeader = {
	title: string;
	subtitle?: string;
};

export const DEFAULT_PROPS: PropPageHeader = {
	title: 'Page header title'
};

export const PageHeader: React.FC<PropPageHeader> = (props: PropPageHeader): JSX.Element => {
	const { title, subtitle } = props;

	return (
		<div className="page-header text-center" style={{ backgroundImage: 'url(/images/page-header-bg.jpg)' }}>
			<div className="container">
				<h1 className="page-title">
					{title}
					<span>{subtitle}</span>
				</h1>
			</div>
		</div>
	);
};

PageHeader.defaultProps = DEFAULT_PROPS;
