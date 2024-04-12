import './styles.css';

type Props = {
    foto?: any;
    nomePerfil?: string;
    repoPublicos?: number;
    nomeRepo?: string; 
    urlRepo?: string;
    descricao?: string;   
}

export default function gitrepo({foto, nomePerfil, repoPublicos, nomeRepo, urlRepo, descricao}: Props) {

    return (
        <div className="pag-gitrepor-container pag-mt20" >
            <div className="pag-gitrepo-card">                
                <div className="pag-gitrepo-foto">
                    <img src={foto} alt='foto' />    
                </div>
                <div className="pag-gitrepo-information">
                    
                    <h4>Informações</h4>

                    <div className="pag-gitrepo-content">
                        <h5>Nome: </h5>
                        <h6>{nomePerfil}</h6> 
                    </div>
                    <div className="pag-gitrepo-content">
                        <h5>Repositórios públicos: </h5>
                        <h6>{repoPublicos}</h6>
                    </div>                    
                </div>                    
            </div>
            <div className="pag-gitrepo-card-repo">                
                <h4>Repositórios</h4>

                <div className="pag-gitrepo-repository pag-mb20">
                    <div className="pag-gitrepo-content">
                        <h5>Nome: </h5>
                        <h6>{nomeRepo}</h6> 
                    </div>
                    <div className="pag-gitrepo-content">
                        <h5>Repositório: </h5>
                        <h6>{urlRepo}</h6>
                    </div>      
                    <div className="pag-gitrepo-content">
                        <h5>Descrição: </h5>
                        <h6>{descricao}</h6>
                    </div>                    
                </div> 
                <div className="pag-gitrepo-repository pag-mb20">
                    <div className="pag-gitrepo-content">
                        <h5>Nome: </h5>
                        <h6>{nomeRepo}</h6> 
                    </div>
                    <div className="pag-gitrepo-content">
                        <h5>Repositório: </h5>
                        <h6>{urlRepo}</h6>
                    </div>      
                    <div className="pag-gitrepo-content">
                        <h5>Descrição: </h5>
                        <h6>{descricao}</h6>
                    </div>                    
                </div> 
                <div className="pag-gitrepo-repository">
                    <div className="pag-gitrepo-content">
                        <h5>Nome: </h5>
                        <h6>{nomeRepo}</h6> 
                    </div>
                    <div className="pag-gitrepo-content">
                        <h5>Repositório: </h5>
                        <h6>{urlRepo}</h6>
                    </div>      
                    <div className="pag-gitrepo-content">
                        <h5>Descrição: </h5>
                        <h6>{descricao}</h6>
                    </div>                    
                </div> 
                                   
            </div>
        </div>
    );
}
