import { BrowserRouter, Routes } from'react-router-dom';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from'../screens/home';
import Login from'../screens/login';
import Signup from'../screens/signup';

function AppRouter(){
    return <>
    <BrowserRouter>
    <nav>
        <ul>
            <li>
                <Link to='home'>Home</Link>{" "}
            </li>
            <li>
                <Link to='signup'>Signup</Link>{" "}
            </li>
            <li>
                <Link to='login'>Login</Link>{" "}
            </li>
        </ul>
    </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
}

export default AppRouter;