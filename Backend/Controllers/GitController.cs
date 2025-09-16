using GitServiceS.Services;
using Microsoft.AspNetCore.Mvc;

namespace GitRepoController.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GitController : ControllerBase
    {
        private readonly GitService gitService;

        public GitController(GitService gitService)
        {
            this.gitService = gitService;
        }

        [HttpGet("{username}")]
        public async Task<IActionResult> GetRepo(string username)
        {
            var repo = await gitService.ObtenerRepositorio(username);

            if (repo.Count == 0)
            {
                return NotFound(new { error = "No se encontraron repositorios o el usuario es incorrecto" });
            }

            return Ok(repo);

        }
    }
}