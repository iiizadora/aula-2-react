function Button (){
return(
  <>
  <button onClick={console.log('estou clicando')}>Clica aqui</button>
     <input placeholder="Digite seu nome " onChange={e=>console.log(e.target.value)} />
     </>
)

}

export default Button

