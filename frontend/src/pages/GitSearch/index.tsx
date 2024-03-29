import './styles.css';
import { useState } from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
import ResultGit from '../../components/ResultGit';
import axios from 'axios';

type formData = {
    git: string;
};

type Perfil = {
    avatar_url: string;
    url: string;
    followers: number;
    location: string;
    name: string;
};

export default function GitSearch() {

    const [ perfil, setPerfil ] = useState<Perfil>();

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

    return (
        <div className="pag-gitsearch-container">
            <div className="pag-gitsearch-card">
                <div className="pag-mb20">
                    <h2>Encontre um perfil GitHub</h2>
                </div>
                <form onSubmit={handleSubmit}>
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
                        seguidores={perfil?.followers}
                        localidade={perfil?.location}
                    />
                </div>
            )}
        </div>
    );
}
