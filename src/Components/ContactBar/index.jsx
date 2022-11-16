import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from "./styles.module.css";

function ContactBar() {
	return (
		<div className={styles.contact_bar_wrapper}>
			<div className={styles.contact_bar}>
				<a href="https://www.linkedin.com/in/harrisonkleiman/" target="_blank" className={styles.icon} >
					<LinkedInIcon  />
				</a>
				<a href="https://github.com/harrisonkleiman" target="_blank" className={styles.icon} >
					<GitHubIcon  />
				</a>
				<a href="https://instagram.com/harrisonkleiman" target="_blank" className={styles.icon} >
					<InstagramIcon  />
				</a>

				<div className={styles.line}></div>
			</div>
			<div className={styles.contact_bar}>
				<a href="mailto:harrikleiman@gmail.com" className={styles.email}>
					harrikleiman@gmail.com
				</a>
				<div className={styles.line}></div>
			</div>
		</div>
	);
}

export default ContactBar;