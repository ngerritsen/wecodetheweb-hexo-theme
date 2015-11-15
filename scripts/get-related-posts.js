function getRelatedPosts (options) {
  var relatedPosts = [];

  this.post.tags.each(function (tag) {
    tag.posts.each(function(post) {
      relatedPosts.push(post);
    })
  })

  return relatedPosts.splice(0, 3);
}

hexo.extend.helper.register('get_related_posts', getRelatedPosts);
