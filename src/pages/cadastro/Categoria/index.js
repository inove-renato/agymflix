import React from 'react'
import PageDefault from '../../../components/PageDefault'
import ButtonLink from '../../../components/ButtonLink'

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de Categoria</h1>

            <ButtonLink to="/cadastro/video">Cadastrar Video</ButtonLink>
        </PageDefault>
    )
}

export default CadastroCategoria