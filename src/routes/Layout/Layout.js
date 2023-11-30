import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';

export default function Layout({language}){
	return(
		<>
			<NavBar language = {language}/>
			<MobileNavBar language={language}/>
			<Outlet/>
			<Footer language = {language}/>
		</>
	);
}
