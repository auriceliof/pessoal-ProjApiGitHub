import './styles.css';

type Props = {
    nomeRepo?: string;
    urlRepo?: string;
    descRepo?: string;
}

export default function ResultGitRepo({nomeRepo, urlRepo, descRepo}: Props) {

    return (
        <div className="pag-resultrepo-container">
            <div className="pag-resultrepo-card">
                <div className="pag-resultrepo-information">
                    <div className="pag-resultgit-content">
                        <h5>Nome: </h5>
                        <h6>{nomeRepo}</h6> 
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>Repositório: </h5>
                        <h6>{urlRepo}</h6> 
                    </div>
                    <div className="pag-resultgit-content">
                        <h5>Descrição: </h5>
                        <h6>{descRepo}</h6> 
                    </div>
                </div>
            </div>
        </div>
    );
}
