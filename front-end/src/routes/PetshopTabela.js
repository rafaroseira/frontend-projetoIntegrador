function Tabela({vetor, selecionar}){
    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Celular</th>
                    <th>Estado</th>
                    <th>Cidade</th>
                    <th>Rua</th>
                    <th>Numero</th>
                    <th>Bairro</th>
                    <th>CEP</th>
                    <th>Selecionar</th>
                </tr>
            </thead>


            <tbody>
            {vetor.map((obj, indice) => (
                <tr key={indice}>
                    <td>{obj.id}</td>
                    <td>{obj.nome}</td>
                    <td>{obj.email}</td>
                    <td>{obj.telefone}</td>
                    <td>{obj.celular}</td>
                    <td>{obj.endereco.estado}</td>
                    <td>{obj.endereco.cidade}</td>
                    <td>{obj.endereco.rua}</td>
                    <td>{obj.endereco.numero}</td>
                    <td>{obj.endereco.bairro}</td>
                    <td>{obj.endereco.cep}</td>
                    <td><button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button></td>
                </tr>
        ))}
            </tbody>
        </table>
    )
}


export default Tabela;