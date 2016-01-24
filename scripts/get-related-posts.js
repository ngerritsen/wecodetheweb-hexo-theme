function getRelatedPosts (options) {
  var relatedPosts = [];
  var existingPosts = [];

  this.post.tags.each(function (tag) {
    tag.posts.each(function(post) {
      relatedPosts.push(post);
    })
  })

  function postExists (post) {
    var found = existingPosts.filter(function (existingPost) {
      return post === existingPost;
    });

    existingPosts.push(post);

    return found.length > 0
  }

  var uniqueRelatedPosts = relatedPosts.filter(function (post) {
    return !postExists(post);
  });

  return uniqueRelatedPosts.splice(0, 3);
}

hexo.extend.helper.register('get_related_posts', getRelatedPosts);
