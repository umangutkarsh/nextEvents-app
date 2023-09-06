import Link from 'next/link';

import classes from './button.module.css';

function Button({ link, children }) {
	return (
		<Link href={link} className={classes.btn}>
			{children}
		</Link>
	);
}

export default Button;
