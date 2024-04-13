import './styles.css';
import { useState } from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
import ResultGit from '../../components/ResultGit';
import axios from 'axios';
import ResultGitRepo from '../../components/ResultGitRepo';

type formData = {
    git: string;
};

type Perfil = {
    avatar_url: string;
    name: string;
    url: string;
    location: string;
    followers: number;
    public_repos: number;    
};

type Repos = {
    id: number;
    name: string;
    html_url: string;
    description: string;
}

export default function GitSearch() {

    const [ perfil, setPerfil ] = useState<Perfil>();

    const [ repo, setRepo ] = useState<Repos[]>([]);

    const [ findRepo, setFindRepo ] = useState<Repos>();

    const [ formData,  setFormData ] = useState<formData>({

        git: "",
    
    });

    function handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        
        axios.get(`https://api.github.com/users/${formData.git}`)
            .then((response) => {
                setPerfil(response.data);
            })
            .catch((error) => {
                setPerfil(undefined);
                console.log(error);
            })        
    }

    function handleSubmitRepos(event: any) {
        event.preventDefault();

        axios.get(`https://api.github.com/users/${formData.git}/repos`)
        .then((response) => {
            setFindRepo(response.data);
            setRepo(response.data);
        })
    }

    return (
        <div className="pag-gitsearch-container">
            <div className="pag-gitsearch-card">
                <div className="pag-mb20">
                    <h2>Encontre um perfil GitHub</h2>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="pag-mb40">
                        <input 
                            value={formData.git}
                            type="text" 
                            name="git"
                            className="pag-gitsearch-input"
                            placeholder="Usuário GitHub"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="pag-gitsearch-btn">
                        <ButtonPrimary name="Encontrar" />
                    </div>
                </form>
            </div>
            {perfil && (
                <div className="pag-mt20 pag-gitsearch-resultgit-card">
                    <ResultGit 
                        foto={perfil?.avatar_url}
                        nome={perfil?.name}
                        perfil={perfil?.url}
                        localidade={perfil?.location}
                        seguidores={perfil?.followers}
                        repoPublicos={perfil?.public_repos}
                    />
                    <form className="pag-mt20 pag-gitsearch-resultgit-btn" onSubmit={handleSubmitRepos}>
                        <ButtonPrimary name="Ver repositórios" />
                    </form>
                </div>
            )}
            {findRepo &&
                <div className="pag-mt20 pag-gitsearch-resultRepos-card">
                    <h4>Repositórios Público</h4>
                    {repo.map((product) =>  (
                        <div key={product.id} className="pag-mt20">
                            <ResultGitRepo
                                nomeRepo={product?.name}
                                urlRepo={product?.html_url}
                                descRepo={product?.description}                
                            />
                        </div>             
                    ))}
                </div>
            }
            
        </div>
    );
}
