import React from 'react';
import styles from './styles.module.css'
import MonoIcon from '../MonoIcon'


// title, then left, right panels, a call to action adn a footer icon

export default ({ children }) => {
	return (
		<section className={styles.homeSection}>
			<div className={styles.title}>
				{children[0]}
			</div>

			<div className={styles.innerFlex}>
				<div className={styles.item}>
					{children[1]}
				</div>
				<div className={styles.item}>
					{children[2]}
				</div>
			</div>

			<div className={styles.callToAction}>
				{children[3]}
			</div>

			<div className={styles.footerImage}>
				<MonoIcon />
			</div>
		</section>)
}


