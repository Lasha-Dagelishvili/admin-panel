import './App.css'
import AppRoutes from '@/routes';

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
    <AppRoutes />
  )
}

export default App
