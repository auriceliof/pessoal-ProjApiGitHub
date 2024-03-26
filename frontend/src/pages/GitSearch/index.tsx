import ButtonPrimary from '../../components/ButtonPrimary';
import ResultGit from '../../components/ResultGit';
import './styles.css';

export default function GitSearch() {

    return (
        <div className="pag-gitsearch-container">
            <div className="pag-gitsearch-card">
                <div className="pag-mb20">
                    <h2>Encontre um perfil GitHub</h2>
                </div>
                <form className="pag-mb40">
                    <input 
                        type="text" 
                        className="pag-gitsearch-input"
                        placeholder="Usuário GitHub"
                    />
                </form>
                <div className="pag-gitsearch-btn">
                    <ButtonPrimary name="Encontrar"/>
                </div>
            </div>
            <div className="pag-mt20 pag-gitsearch-resultgit-card">
                <ResultGit 
                    foto="foto"
                    nome="nome"
                    perfil="perfil" 
                    seguidores="seguidores"
                    localidade="localidade"
                />
            </div>
        </div>
    );
}
