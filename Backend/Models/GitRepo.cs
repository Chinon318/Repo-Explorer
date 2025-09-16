namespace GitRepoModel.Models
{
    public class GitRepo
    {
        public string? Name { get; set; }
        public string? Html_Url { get; set; }
        public string? Language { get; set; }
        public int? Stargazers_Count { get; set; }
        public DateTime? Created_At { get; set; }
    }
}