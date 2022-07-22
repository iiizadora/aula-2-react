import filmes from "..dados"

function Card (){
  return(
    <>
    {filmes.map(filme=>{
        return(
          <div key={filme.id}>
          <h2>{filme.nome}</h2>
          <p>{filme.genero}</p>
          <img src={filme.capa}/>
          </div>
        )
      })}</>
  )
}

export default Card