
import Rodape from './components/Footer'
import Lista from './components/Lista'
import { Outlet } from 'react-router-dom';

export default function App(){

  return(
    <>
      <Lista />
        <Outlet/>
      <Rodape />
      
    </>
  );

}