// react libs
import { NavLink, Outlet } from 'react-router-dom';

// styles
import './_styles.scss';

// components
import { PageHeader } from '@/components/shared/pageHeader';

export const ElemenstsPage: React.FC = (): JSX.Element => {
	return (
		<>
			<PageHeader title="Elements list" subtitle="Elements" />
			<div className="page-content">
				<div className="container">
					<div className="row elements">
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>accordions</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>banners</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>blog posts</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>buttons</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>call to action</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>icon boxes</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>portfolio</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>product catigories</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>products</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>tabs</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>testimonials</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>titles</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>typography</p>
								</div>
							</NavLink>
						</div>
						<div className="col-xl-5col col-lg-4 col-md-3 col-6">
							<NavLink to="buttons" className="element-type">
								<div className="element">
									<i className="element-img"></i>
									<i className="element-hover-img"></i>
									<p>video</p>
								</div>
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			<Outlet />
		</>
	);
};
