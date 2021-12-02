import "@fontsource/mulish";
import "./styles/index.css";
import React, {
	//  useState, useEffect 
	} from "react";
import { BrowserRouter as Router, Switch, Route,
	//  Redirect 
	} from "react-router-dom";
// import { useHistory } from "react-router-dom";
import StateProvider from "./components/stateprovider";
import LandingPage from './pages/landingpage';
import Onboarding from "./pages/onboarding";
import Register from "./pages/signup";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import AddPatient from "./pages/add-patient";
import PatientData from "./pages/patient-data";
import Prediction from "./pages/prediction";
import Result from './pages/result';
import ResetPassword from "./pages/resetpassword";
import PasswordChange from "./pages/passwordchange";
import ContactPage from './pages/contactpage';
import TeamPage from './pages/teampage';

function App() {
	// const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

	// useEffect(() => {
	// 	const accessToken = localStorage.getItem('accessToken');

	// 	if (accessToken) {
	// 		fetch('http://envisio-001-site1.itempurl.com/api/v1/User/get-user', {
	// 			headers: {
	// 				'content-type': 'application/json',
	// 				'Authorization': `Bearer ${accessToken}`
	// 			}
	// 		})
	// 			.then(response => response.json())
	// 			.then(userData => {
	// 				console.log("this is the data ==> ", userData)
	// 				setIsUserAuthenticated(true)
	// 				// TODO: store user data in your data store 

	// 			})
	// 			.catch(err => {
	// 				// TODO: show user error with a popup or something
	// 				setIsUserAuthenticated(false);
	// 				localStorage.removeItem('accessToken');
	// 			})

	// 	}
	// }, []);

	return (
		<StateProvider>
			<Router>
				<div className='App'>
					<div className='container d-flex align-items-center flex-column'>
						<Switch>
							<Route path='/signup' exact={true} component={Register} />

							<Route path='/login' exact={true} component={Login} />

							<Route path='/reset_password' exact={true} component={ResetPassword} />

							<Route path='/password_change' exact={true} component={PasswordChange} />

							<Route exact path='/' component={LandingPage} />

							<Route exact path='/onboarding' component={Onboarding} />

							<Route exact path='/contactpage' component={ContactPage} />

							<Route exact path='/teampage' component={TeamPage} />

							<Route exact path='/prediction' component={Prediction} />
							
							<Route exact path='/prediction-result' component={Result} />

							{/* <Route exact path='/dashboard' >
								{isUserAuthenticated ? <Dashboard /> : <Redirect to='/login' />}
							</Route> */}

							<Route exact path='/dashboard' component={Dashboard} />

							<Route exact path='/add-patient' component={AddPatient} />

							<Route exact path='/patient-data' component={PatientData} />
							
						</Switch>
					</div>
				</div>
			</Router>
		</StateProvider>
	);
}

export default App;