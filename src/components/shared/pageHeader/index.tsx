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
		<>
			<div className="page-header text-center" style={{ backgroundImage: 'url(/images/page-header-bg.jpg)' }}>
				<div className="container">
					<h1 className="page-title">
						{title}
						<span>{subtitle}</span>
					</h1>
				</div>
			</div>
			{/* TODO: implement breadcrumb */}
			<nav aria-label="breadcrumb" className="breadcrumb-nav">
				<div className="container">
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							{/* TODO: remove a tags */}
							<a href="index.html">Home</a>
						</li>
						<li className="breadcrumb-item active">Elements</li>
					</ol>
				</div>
			</nav>
		</>
	);
};

PageHeader.defaultProps = DEFAULT_PROPS;
