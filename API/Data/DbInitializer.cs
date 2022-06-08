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

            if (context.Comments.Any()) return;
            var comments = new List<Comment>
            {
                new Comment
                {
                    PostId = 2,
                    AuthorId = 3,
                    Text = "It is really intriguing."
                }
            };
            foreach (var post in posts)
            {
                context.Posts.Add(post);
            }
            foreach (var comment in comments)
            {
                context.Comments.Add(comment);
            }

            context.SaveChanges();
        }

    }
}
