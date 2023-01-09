// react libs
import { useEffect, useState } from 'react';

// styles
import './_styles.scss';

export const ScrollTop: React.FC = (): JSX.Element => {
	const [isArrowshow, setIsArrowshow] = useState<boolean>(false);

	const topPosToStartShowing = 400;

	useEffect((): void => {
		window.addEventListener('scroll', (): void => {
			if (window.scrollY > topPosToStartShowing) {
				setIsArrowshow(true);
			} else {
				setIsArrowshow(false);
			}
		});
	}, []);

	return (
		<>
			{isArrowshow && (
				<button id="scroll-top" title="Back to Top" onClick={goToTop}>
					<i className="icon-arrow-up"></i>
				</button>
			)}
		</>
	);

	function goToTop(): void {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
};
