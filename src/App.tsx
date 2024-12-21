import { Routes, Route} from 'react-router-dom'
import './App.css'
import AdminLayout from './layouts/admin-layout'
import SignInPage from './pages/signIn/signIn-page';
import SignUpPage from './pages/signUp/signUp-page';
import UsersListView from './pages/test/admin-pages/users/views/list';
import UsersCreateView from './pages/test/admin-pages/users/views/create';
import UsersUpdateView from './pages/test/admin-pages/users/views/update';
// import { useEffect } from 'react';
// import { supabase } from './supabase';
// import { useAuthContext } from './context/auth/hooks/useAuthContext';

function App() {
  // const { setUser } = useAuthContext();

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setUser(session?.user || null);
  //   });
  
  //   const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setUser(session?.user || null);
  //   });
  
  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, [setUser]);

  return (
    <Routes>
      <Route
            path="/*"
            element={
              <AdminLayout />
            }
            >
          <Route path='test' element={<UsersListView />} />
          <Route path='test/create' element={<UsersCreateView />} />
          <Route path='test/update:id' element={<UsersUpdateView />} />
      </Route>

      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
