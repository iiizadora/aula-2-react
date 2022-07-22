import { useState, useEffect } from "react";

const Repositorios = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRepos, setFilterRepos] = useState([]);

  useEffect(() => {
    //consumo api
    const getData = async () => {
      const response = await fetch(
        "https://api.github.com/users/iiizadora/repos",
      );
      const data = await response.json();
      setRepos(data);
    };
    getData();
  }, []);

  //valor do input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //termo buscado no input filtra
  useEffect(() => {
    setFilterRepos(repos.filter(repo => repo.name.includes(search)));
  }, [repos, search]);
  return (
    <>
      <input placeholder="Digite um repositorio" onChange={handleSearch} />
      <ul>
        {filterRepos.map((repo) => {
          return (
            <>
              <li key={repo.id}>{repo.name}</li>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default Repositorios;
