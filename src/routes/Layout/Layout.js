import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function Layout({language}){
	return(
		<>
			<NavBar language = {language}/>
			<Outlet/>
			<Footer language = {language}/>
		</>
	);
}
