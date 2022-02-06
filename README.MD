How does it work? Actually, nothing special.
Just a basic next app.
As requested, we have GitHub token setup in the .env.
There are no additional libraries. I just added "dayjs" for date format, sass (I think it's already a habit).
Simple jsconfig.json. I prefer to have absolute paths for everything (commonly, I prefer to have additional shortcuts like '@utils' or '@components' but here is '@/*')
Since I knew there were at least two unknowns (GraphQL / Apollo and Github API) and test assignment allowed JS :) Why didn't I choose TypeScript? as I mentioned in our first interview, the primary language last year was JS (but I hope there will be a little more TS in my life in the future).

What was the most challenging part of the tech assignment? First, I didn't use GraphQL and Apollo at all (Okay, a little bit working with Facebook/Instagram APIs, but it was long ago). So honestly, I've just followed Apollo documentation, used GitHub API explorer and improvised. So don't expect any nifty caching strategies / exceptional Apollo / Next integrations, and so on.

Pagination. I've started to do it after all the rest was ready. Since GitHub decided to remove random page access functionality (compared to their REST API), we don't have offsets/pages; we have cursors (but maybe I missed something in their docs). So I've decided to start with simple next / prev pagination. (Also, I wasn't able to have time for other stuff, so I went the fastest way). After that, I had time to play a little bit with the requested pagination. So, in my opinion, which options do we have:
Preload all cursors
Preload all data with all cursors (maybe it is the best variant, but depending on the amount of data and application user flows)
Does stuff like render pagination UI rely only on the total amount of repositories and preload required amounts of data on UI interaction (hover/clicks/focus)?
Honestly, I don't like any of them. But I've chosen the variant with cursors only.

One more thing is that I didn't find any good way to filter "organization" results during the search. So you will find that I preload the first "20" results of the search and filter results without "User" data and show five first. (Kind of a hack, but it looks more natural). Strange that their REST API allows requesting only users during search :(.

For sure, there are a lot of things to improve, like data types compose in the GrapQL queries, a couple of rendering pipelines are not optimal for sure, styling tokens and so on, so on and so on.

If you have any more questions about the solution, please get in touch with me :).