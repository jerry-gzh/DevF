import './App.css';
import User from "./User";
import withUser from './withuser';

function App() {
  // HOC
  const CurrentUser = withUser(User)  // Se une la lógica + la  vista

  return (
    <>
    <CurrentUser userId = {1} />
    <CurrentUser userId = {2} />
    <CurrentUser userId = {3} />
    </>  
  );
}

export default App;
