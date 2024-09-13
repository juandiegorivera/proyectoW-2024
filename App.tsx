// App.tsx
import News from './src/components/Novedades/News';
import Menu from './src/components/Menu';
import DenunciaForm from './src/components/Denuncia/Complaint-Form';
import CrimenAdd from './src/components/Denuncia/Add-Complaint';
import CrimenList from './src/components/Denuncia/Edit-Complaint';
import {Mapa} from './src/components/Mapa/mapa';

export default function App() {
  return (
    <Mapa>
          <Menu />
    </Mapa>
  );
}

-