import "../styles/globals.css";
import { Navbar } from "../utils/AppComponents";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
