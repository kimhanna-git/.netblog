using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(BlogContext context)
        {
            if (context.Posts.Any()) return;

            var posts = new List<Post>
            {
                new Post
                {
                    Title = "Kipalo will change the web",
                    AuthorId = 1,
                    Text = "It is only the beginning."
                },
                new Post
                {
                    Title = "Kipalo will change the web",
                    AuthorId = 4,
                    Text = "It surely will."
                },
                new Post
                {
                    Title = "Kipalo will change the web",
                    AuthorId = 2,
                    Text = "Let's learn and practice."
                },
                new Post
                {
                    Title = "Kipalo will change the web",
                    AuthorId = 3,
                    Text = "Let's change the world together."
                },
            };
            
            
            foreach (var post in posts)
            {
                context.Posts.Add(post);
            }

            context.SaveChanges();
        }

    }
}
