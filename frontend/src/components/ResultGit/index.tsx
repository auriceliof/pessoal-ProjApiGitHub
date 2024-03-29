import './styles.css';

type Props = {
    foto: any;
    nome?: string;
    perfil?: string;
    seguidores?: number;
    localidade?: string;
}

export default function ResultGit({foto, nome, perfil, seguidores, localidade}: Props) {

    return (
        <div className="pag-resultgit-container">
            <div className="pag-resultgit-card">
                <div className="pag-resultgit-foto">
                    <img src={foto} alt='foto' />    
                </div>
                <div className="pag-resultgit-information">
                    
                    <h4>Informações</h4>

                    <div className="pag-resultgit-content">
                        <h5>Nome: </h5>
                        <h6>{nome}</h6> 
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>Perfil: </h5>
                        <h6>{perfil}</h6>                        
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>Seguidores: </h5>
                        <h6>{seguidores}</h6>
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>Localidade: </h5>
                        <h6>{localidade}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
