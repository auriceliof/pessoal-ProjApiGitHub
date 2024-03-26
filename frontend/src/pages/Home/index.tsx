import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

export default function Home() {

    return (
        <div className="pag-container ">
            <div className="pag-mb20 pag-mt40">
                <h1>Projeto API GitHub</h1>
            </div>
            <div className="pag-mb40 pag-home-content">
                <h4>Buscar perfil de usuários do GitHub</h4>
            </div>
            <div>
                <ButtonPrimary name="Começar" />
            </div>
        </div>
    );
}
