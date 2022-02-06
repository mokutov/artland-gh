## How to run
- `npm i` or `yarn`
- generate GitHub token with the following permissions: `user` `public_repo` `repo` `repo_deployment` `repo:status` `read:repo_hook` `read:org` `read:public_key` `read:gpg_key`
- paste generated token to the `.env` `GITHUB_TOKEN`
- `npm run dev` or `yarn dev`

> Solution tested primarily in Chrome (and Safari). It should work in all evergreen browsers without problems, but I suggest using Chrome for the best experience.

## Demo
https://user-images.githubusercontent.com/34650035/152666200-54236825-4271-4f27-9150-e23610d3e5cd.mov

## Description

How does it work? Nothing special. 
- Just a basic nextjs app.
- As requested, we have GitHub token setup in the .env.
- There are no additional libraries. I just added "dayjs" for date format, sass (I think it's already a habit).
- Simple jsconfig.json. I prefer to have absolute paths for everything (commonly, I prefer to have additional shortcuts like '@utils' or '@components' but here is '@/*')
- Since I knew there were at least two unknowns (GraphQL / Apollo and Github API) and test assignment allowed JS :) Why didn't I choose TypeScript? as I mentioned in our first interview, the primary language last year was JS, so it was just quetion of time (but I hope there will be a little more TS in my life in the future).
- There is no special "eslint" config, just a plain IDE formatter used.
- I hope that I've implemented all the required functionality :)

What was the most challenging part of the tech assignment? First, I didn't use GraphQL and Apollo at all (Okay, a little bit working with Facebook/Instagram APIs, but it was long ago). So honestly, I've just followed Apollo documentation, used GitHub API explorer and improvised. So don't expect any nifty caching strategies / exceptional Apollo / Next integrations, and so on.

Pagination. I've started to do it after all the rest was ready. Since GitHub decided to remove random page access functionality (compared to their REST API), we don't have offsets/pages; we have cursors (but maybe I missed something in their docs). So I've decided to start with simple next / prev pagination. (Also, I wasn't sure I would have time for other stuff, so I went the fastest way). After that, I had time to play a little bit with the requested pagination. So, in my opinion, which options do we have: 
- Preload all cursors
- Preload all data with all cursors (maybe it is the best variant, but depending on the amount of data and application user flows)
- Does render pagination UI rely only on the total amount of repositories and preload required amounts of data on UI interaction (hover/clicks/focus)?
Honestly, I don't like any of them. But I've chosen the variant with cursors only. You can switch between pagination types using buttons on the bottom of the repositories area.

![Screen Shot 2022-02-06 at 03 29 03](https://user-images.githubusercontent.com/34650035/152666256-495acbd4-4c63-4d32-a1ea-2309f54c6005.png)

One more thing is that I didn't find any good way to filter "organization" results during the search. So you will find that I preload the first "20" results of the search and filter results without "User" data and show five first. (Kind of a hack, but it looks more natural). Strange that their REST API allows requesting only users during search :(.

## Screenshots
Here are couple additional screenshots with error / loading / no results states and so on:

![Screen Shot 2022-02-06 at 02 50 16](https://user-images.githubusercontent.com/34650035/152666257-b7b925fa-ce31-4e6a-b164-956a7e8e2289.png)
![Screen Shot 2022-02-06 at 02 49 59](https://user-images.githubusercontent.com/34650035/152666258-031a89ce-7726-4fb4-84ec-8132780ba287.png)
![Screen Shot 2022-02-06 at 02 46 18](https://user-images.githubusercontent.com/34650035/152666259-a89f7abb-f8a2-4b38-95db-7bf0485fcd62.png)
![Screen Shot 2022-02-06 at 02 45 32](https://user-images.githubusercontent.com/34650035/152666260-547d07d9-331f-4a63-a139-efb5823596ee.png)
![Screen Shot 2022-02-06 at 02 44 50](https://user-images.githubusercontent.com/34650035/152666261-b5bbc0ef-1c86-4abd-9241-1d059dc3adca.png)

## P.S.
If you have any more questions about the solution, please get in touch with me :).
