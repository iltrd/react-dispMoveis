import React, {createContext} from 'react';

export const ListaContatos = createContext({});
 
function geraId(){
    return Math.floor(Math.random() * Date.now());
}

function addContato(agenda, inputCodigo, inputDescricao, inputPreco, inputQuantidade){
    agenda.push({id: geraId(), codigo: inputCodigo, descricao: inputDescricao, preco: inputPreco, quantidade: inputQuantidade });
}

function Lista({children}){
    return(
        <ListaContatos.Provider value = {
                                {agenda: [{id: '', codigo: '', descricao: '', preco: '', quantidade:''}], addContato}
                            }>
            {children}
        </ListaContatos.Provider>
    );
}

export default Lista;