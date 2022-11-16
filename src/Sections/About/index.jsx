import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>

					<p className={styles.desc}>
						I am a graduate of the University at Buffalo where I received my Bachelor's Degree in Political Science.
					</p>
					
					<p className={styles.desc}>
						After a career change into software engineering more than a year ago, I've experienced first-hand how much work it requires to get involved and be successful. 
						My goal is to help your company as a contributor on an engineering team.
					</p>
					<p className={styles.desc}>
						I'm a self-motivated, hard-working, and dedicated individual who is always looking to learn and improve.
						I ♥ JavaScript, React & Python
					</p>
				</div>
				<div className={styles.right}>
					<img
						src="./images/profile.jpg"
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;