import Head from 'next/head';

import styles from '../../styles/Home.module.scss';

const Home = () => {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>
					<p className="text-red-500 underline">This is the first project</p>
				</div>
			</main>
		</>
	);
};

export default Home;
