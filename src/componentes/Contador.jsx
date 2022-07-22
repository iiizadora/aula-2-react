import { useState } from "react";
function Contador() {
  //chamar o useState criando um array que recebe
  //2 informações : variável, função atualizadora da variável
  //Dentro do parametro do useState vai o valor inicial da variável
  const [contador, setContador] = useState(0);

  // criar uma função que será chamada no onClick
  function incremento() {
    setContador(contador + 1);
  }
  return (
    <>
      <h1>{contador}</h1>
      <button onClick={incremento}>Conta+1</button>
    </>
  );
}

export default Contador;
