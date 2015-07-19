class BlogIndexPage
  def initialize
    @blog_post_excerpts = []
  end
end

class BlogPostExcerpt
  attr_accessor :title, :excerpt #, :date

  def initialize(args)
    @title = args.fetch(:title) { "ERROR WITH TITLE" }
    # @date = args.fetch(:date) { "ERROR WITH DATE" }
    @excerpt = args.fetch(:excerpt) { "ERROR WITH EXCERPT" }
  end

  def
  end

end
