import ButtonPrimary from '../../components/ButtonPrimary';
import './styles.css';

export default function GitSearch() {

    return (
        <div className="pag-gitsearch-container">
            <div className="pag-gitsearch-card">
                <div className="pag-mb20">
                    <h2>Encontre um perfil GitHub</h2>
                </div>
                <div className="pag-mb40">
                    <input 
                        type="text" 
                        className="pag-gitsearch-input"
                        placeholder="Usuário GitHub"
                    />
                </div>
                <div className="pag-gitsearch-btn">
                    <ButtonPrimary name="Encontrar"/>
                </div>
            </div>
        </div>
    );
}
