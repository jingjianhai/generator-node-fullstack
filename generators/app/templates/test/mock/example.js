'use strict';

export default {
  route: '/api',
  handle: (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify([{
        "id": 40138651,
        "name": "holaever.com",
        "full_name": "Holaever/holaever.com",
        "owner": {
          "login": "Holaever",
          "id": 12879117,
          "avatar_url": "https://avatars2.githubusercontent.com/u/12879117?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Holaever",
          "html_url": "https://github.com/Holaever",
          "followers_url": "https://api.github.com/users/Holaever/followers",
          "following_url": "https://api.github.com/users/Holaever/following{/other_user}",
          "gists_url": "https://api.github.com/users/Holaever/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Holaever/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Holaever/subscriptions",
          "organizations_url": "https://api.github.com/users/Holaever/orgs",
          "repos_url": "https://api.github.com/users/Holaever/repos",
          "events_url": "https://api.github.com/users/Holaever/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Holaever/received_events",
          "type": "Organization",
          "site_admin": false
        }
      }])
    );
  }
};
