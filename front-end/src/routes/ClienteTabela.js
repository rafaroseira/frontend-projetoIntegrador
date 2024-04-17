function Tabela({vetor, selecionar}) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Senha</th>
                    <th>Email</th>
                    <th>Celular</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice+1}</td>
                        <td>{obj.nome}</td>
                        <td>{obj.senha}</td>
                        <td>{obj.email}</td>
                        <td>{obj.celular}</td>
                        <td>
                <           button onClick={() => {selecionar(indice)}} className="btn btn-success">Selecionar</button>
                        </td>
                    </tr>
                ))}
        </tbody>
    </table>   
    );
}

export default Tabela;
