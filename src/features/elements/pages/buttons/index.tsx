// styles
import './_styles.scss';

// components
import { Button } from '@/components/shared/base';
import { borderRoundedType, borderStyleType, iconPositionType } from '@/components/shared/base/button';

export const ButtonsPage: React.FC = (): JSX.Element => {
	return (
		<>
			<div className="page-content">
				<div className="container">
					<h2 className="title">Default Style</h2>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button text="Button text" isRounded roundedType={borderRoundedType.btnRound} />
							</div>
						</div>
					</div>

					<hr className="my-4" />

					<h2 className="title">Border Style</h2>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded isOutline />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" isOutline />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button text="Button text" isRounded isOutline roundedType={borderRoundedType.btnRound} />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded isOutline outlineType={borderStyleType.btnOutlineDark} />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" isOutline outlineType={borderStyleType.btnOutlineDark} />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button
									text="Button text"
									isRounded
									isOutline
									outlineType={borderStyleType.btnOutlineDark}
									roundedType={borderRoundedType.btnRound}
								/>
							</div>
						</div>
					</div>

					<hr className="mt-3 mb-4" />
					<h2 className="title">Button With Icon Style</h2>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded icon="long-arrow-right" />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" icon="long-arrow-right" />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button text="Button text" isRounded roundedType={borderRoundedType.btnRound} icon="long-arrow-right" />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded icon="long-arrow-right" iconPosition={iconPositionType.end} />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" icon="long-arrow-right" iconPosition={iconPositionType.end} />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button
									text="Button text"
									isRounded
									roundedType={borderRoundedType.btnRound}
									icon="long-arrow-right"
									iconPosition={iconPositionType.end}
								/>
							</div>
						</div>
					</div>

					<hr className="mt-3 mb-4" />

					<h2 className="title">Border Style With Icons</h2>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded icon="long-arrow-right" isOutline />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button
									text="Button text"
									isRounded
									roundedType={borderRoundedType.btnRounded}
									icon="long-arrow-right"
									isOutline
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button
									text="Button text"
									isRounded
									roundedType={borderRoundedType.btnRound}
									icon="long-arrow-right"
									isOutline
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button
									text="Button text"
									isRounded
									icon="long-arrow-right"
									iconPosition={iconPositionType.start}
									isOutline
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" icon="long-arrow-right" iconPosition={iconPositionType.start} isOutline />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button
									text="Button text"
									isRounded
									icon="long-arrow-right"
									iconPosition={iconPositionType.start}
									roundedType={borderRoundedType.btnRound}
									isOutline
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button
									text="Button text"
									isRounded
									icon="long-arrow-right"
									isOutline
									outlineType={borderStyleType.btnOutlineDark}
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button
									text="Button text"
									icon="long-arrow-right"
									isOutline
									outlineType={borderStyleType.btnOutlineDark}
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button
									text="Button text"
									icon="long-arrow-right"
									isOutline
									isRounded
									outlineType={borderStyleType.btnOutlineDark}
									roundedType={borderRoundedType.btnRound}
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button
									text="Button text"
									isRounded
									icon="long-arrow-right"
									isOutline
									outlineType={borderStyleType.btnOutlineDark}
									iconPosition={iconPositionType.start}
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button
									text="Button text"
									icon="long-arrow-right"
									isOutline
									outlineType={borderStyleType.btnOutlineDark}
									iconPosition={iconPositionType.start}
								/>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button
									text="Button text"
									icon="long-arrow-right"
									isOutline
									isRounded
									outlineType={borderStyleType.btnOutlineDark}
									roundedType={borderRoundedType.btnRound}
									iconPosition={iconPositionType.start}
								/>
							</div>
						</div>
					</div>

					<hr className="mt-3 mb-4" />

					<h2 className="title">Buttons With Shadow Style</h2>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<Button text="Button text" isRounded shadow />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<Button text="Button text" shadow />
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<Button text="Button text" shadow isRounded roundedType={borderRoundedType.btnRound} />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<a href="/" className="btn btn-primary btn-rounded btn-shadow">
									<span>Button text</span>
									<i className="icon-long-arrow-right"></i>
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<a href="/" className="btn btn-primary btn-shadow">
									<span>Button text</span>
									<i className="icon-long-arrow-right"></i>
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<a href="/" className="btn btn-primary btn-round btn-shadow">
									<span>Button text</span>
									<i className="icon-long-arrow-right"></i>
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<a href="/" className="btn btn-primary btn-rounded btn-shadow">
									<i className="icon-long-arrow-right"></i>
									<span>Button text</span>
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<a href="/" className="btn btn-primary btn-shadow">
									<i className="icon-long-arrow-right"></i>
									<span>Button text</span>
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<a href="/" className="btn btn-primary btn-round btn-shadow">
									<i className="icon-long-arrow-right"></i>
									<span>Button text</span>
								</a>
							</div>
						</div>
					</div>

					<hr className="mt-3 mb-4" />

					<h2 className="title">Simple Button Styles</h2>

					<div className="row">
						<div className="col-12">
							<a href="/" className="btn btn-link">
								Button Text
							</a>
							<a href="/" className="btn btn-link">
								<span>Button Text</span>
								<i className="icon-long-arrow-right"></i>
							</a>
							<a href="/" className="btn btn-link">
								<i className="icon-long-arrow-right"></i>
								<span>Button Text</span>
							</a>

							<a href="/" className="btn btn-link btn-link-dark">
								Button Text
							</a>
							<a href="/" className="btn btn-link btn-link-dark">
								<span>Button Text</span>
								<i className="icon-long-arrow-right"></i>
							</a>
							<a href="/" className="btn btn-link btn-link-dark">
								<i className="icon-long-arrow-right"></i>
								<span>Button Text</span>
							</a>
						</div>
					</div>

					<hr className="mt-3 mb-1" />
				</div>
			</div>

			<div className="container">
				<h2 className="title mb-3">Button on Backgrounds</h2>
			</div>

			<div className="bg-image bg-overlay pt-5 pb-6" style={{ backgroundImage: 'url(/images/backgrounds/bg-1.jpg)' }}>
				<div className="container">
					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<a href="/" className="btn btn-primary btn-rounded">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<a href="/" className="btn btn-primary">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<a href="/" className="btn btn-primary btn-round">
									Button text
								</a>
							</div>
						</div>
					</div>

					<div className="mb-2"></div>

					<div className="row">
						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<a href="/" className="btn btn-outline-primary btn-rounded">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<a href="/" className="btn btn-outline-primary">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<a href="/" className="btn btn-outline-primary btn-round">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Rounded Corners Style</span>
								<a href="/" className="btn btn-outline-dark btn-rounded">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Square Style</span>
								<a href="/" className="btn btn-outline-dark">
									Button text
								</a>
							</div>
						</div>

						<div className="col-6 col-lg-4 col-xl-2">
							<div className="btn-wrap">
								<span>Round Style</span>
								<a href="/" className="btn btn-outline-dark btn-round">
									Button text
								</a>
							</div>
						</div>
					</div>

					<div className="mb-2"></div>

					<div className="row">
						<div className="col-12">
							<a href="/" className="btn btn-link">
								Button Text
							</a>
							<a href="/" className="btn btn-link">
								<span>Button Text</span>
								<i className="icon-long-arrow-right"></i>
							</a>
							<a href="/" className="btn btn-link">
								<i className="icon-long-arrow-right"></i>
								<span>Button Text</span>
							</a>

							<a href="/" className="btn btn-link btn-link-dark">
								Button Text
							</a>
							<a href="/" className="btn btn-link btn-link-dark">
								<span>Button Text</span>
								<i className="icon-long-arrow-right"></i>
							</a>
							<a href="/" className="btn btn-link btn-link-dark">
								<i className="icon-long-arrow-right"></i>
								<span>Button Text</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
