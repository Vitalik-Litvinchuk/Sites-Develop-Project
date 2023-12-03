import { Routes, Route } from 'react-router';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Navigate } from "react-router";
import LoginPage from './components/auth/Login/index';
import RegisterPage from './components/auth/Register/index';
import Layout from './components/containers/Layout/index';
import HomePage from './components/HomePage';

function App() {
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<HomePage />} />

        {!isAuth ?
          (<>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </>
          ) : <></>}
      </Route>
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;