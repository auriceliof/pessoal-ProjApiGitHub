import { useState } from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
import ResultGit from '../../components/ResultGit';
import './styles.css';

type formData = {
    git: string;
}

export default function GitSearch() {

    const [ formData,  setFormData ] = useState<formData>({

        git: "",
    
    });

    function handleChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: any) {
        event.prevent.default();
        console.log("Teste do botão")
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
