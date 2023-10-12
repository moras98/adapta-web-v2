import { Outlet } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function Layout({lenguage}){
	return(
		<>
			<NavBar lenguage = {lenguage}/>
			<Outlet/>
			<Footer lenguage = {lenguage}/>
		</>
	);
}
