using GitRepoModel.Models;

namespace GitServiceS.Services
{
    public class GitService
    {
        private readonly HttpClient client;

        public GitService(HttpClient client)
        {
            this.client = client;
        }

        //Buscar el repositorio
        public async Task<List<GitRepo>> ObtenerRepositorio(string userName)
        {
            var urlGit = $"https://api.github.com/users/{userName}/repos";

            //Obtenemos el repositorio
            var repo = await client.GetFromJsonAsync<List<GitRepo>>(urlGit);

            if (repo == null)
            {
                throw new Exception("este usuario no tiene repositorios publicos");
            }

            return repo;
        }
    }
}