
import Rodape from './components/Footer'
import Cabecalho from './components/Cabecalho/Cabecalho'
import { Outlet } from 'react-router-dom';

export default function App(){

  return(
    <>
      <Cabecalho/>
        <Outlet/>
      <Rodape />
      
    </>
  );

}