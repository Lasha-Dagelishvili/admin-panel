import { Routes, Route} from 'react-router-dom'
import './App.css'
import AdminLayout from './layouts/admin-layout'
import SignInPage from './pages/signIn/signIn-page';
import TestView from '@/pages/test/index';
import SignUpPage from './pages/signUp/signUp-page';
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
              <Route 
                path='test'
                element={
                  <TestView />
                }
                />
      </Route>
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
    </Routes>
  )
}

export default App
