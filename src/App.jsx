import './App.css'
import CakeView from './features/cake/CakeView'
import IceceamView from './features/iceCream/IceceamView'
import UserView from './features/users/UserView'

function App() {

  return (
    <div className='App'>
      <CakeView />
      <IceceamView />
      <UserView />
    </div>
  )
}

export default App
