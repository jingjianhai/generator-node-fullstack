'use strict';

export default {
  route: '/api',
  handle: (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify([{
        "id": 40138651,
        "name": "example.com",
        "full_name": "Example/example.com",
        "owner": {
          "login": "Example",
          "id": 12879117,
          "avatar_url": "https://avatars2.githubusercontent.com/u/12879117?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Example",
          "html_url": "https://github.com/Example",
          "followers_url": "https://api.github.com/users/Example/followers",
          "following_url": "https://api.github.com/users/Example/following{/other_user}",
          "gists_url": "https://api.github.com/users/Example/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Example/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Example/subscriptions",
          "organizations_url": "https://api.github.com/users/Example/orgs",
          "repos_url": "https://api.github.com/users/Example/repos",
          "events_url": "https://api.github.com/users/Example/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Example/received_events",
          "type": "Organization",
          "site_admin": false
        }
      }])
    );
  }
};
