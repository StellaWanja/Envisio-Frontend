import { Link, NavLink } from 'react-router-dom';
import '../styles/left-side-bar.css';

export default function LeftSideBar() {
	return (
		<div className='left-column'>
			{/* <Link to='/' style={{marginTop: '4vh', marginBottom: '5vh'}} ><Logo className="left-side-logo"/> </Link> */}

			<Link to='/' style={{ marginTop: '6vh', marginLeft: '5vh' }} className='left-logo'>
				<img src='https://i.ibb.co/7C52Mmv/logo.png' alt='logo' />
			</Link>
			<ul className='links'>

				<div className='sidebar-item'>
						<img className='sidebar-icon' src='https://i.ibb.co/7tH9Vwj/layout.png' alt='dashboard-icon'/>
					<NavLink className='sidebar-link' to='/dashboard' activeStyle={{color: "#212121"}}>
						Dashboard
					</NavLink>
				</div>
				
                <div className='sidebar-item'>
                    <img src='https://i.ibb.co/YbrywhC/clock.png' alt='clock' />
					<NavLink className='sidebar-link' to='/patient-data' activeStyle={{color: "#212121"}}>
						Patient History
					</NavLink>
				</div>

				<div className='sidebar-item'>
					<img
						src='https://i.ibb.co/tqxbHP5/predictionicon.png' alt='predictionicon'/>
					<NavLink className='sidebar-link' to='/prediction' activeStyle={{color: "#212121"}}>
						Prediction
					</NavLink>
				</div>
			</ul>
		</div>
	);
}
