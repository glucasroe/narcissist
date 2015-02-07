# Narcissist
A simple theme for my portfolio site. All dirty laundry aired on Github.

## Why is this on Github?
I began this project in early 2014 for two reasons. Reason one was to make a website. Reason two was because I wanted to learn how to use Git for a project workflow.

It's on Github because it's somewhat of a proof of work and somewhat of just good practice to be in. Also it means that I can do a git pull on my server whenever I update the template, which is way easier than scp'ing it over.

## How is the template made? What is its build philosophy?
The intial template was written in [Haml](http://haml.info/) and [SASS](http://sass-lang.com/) and generated with [Codekit](https://incident57.com/codekit/). After generating the raw HTML file, I converted it to a [Ghost](https://ghost.org/) template that use [Handlebars](http://handlebarsjs.com/) templating language. It does not use a grid system because it's 2 columns.

My intial build was based around nesting things as deeply as possible into SASS, but my CSS philosphy is now largely based around modularity and flexibility. I try to consider how to apply styles as broadly as possible instead of just tagging on a class and writing styles to it. Sometimes this makes things break with vendor code, but it's a good practice to be in. I use [Axiomatic CSS](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls) which is equal parts fascinating and frustrating (again, largely because of vendor code.)

## How do you make this site backwards compatible?
Well, right now I don't. In my client work I always am having to think about IE8 and I didn't really want to do that here.

In actuality though, the CSS3 features I use are very Chromey when it comes to a site that is this simple (i.e. it looks pretty, it's not really functionality), so I don't concern myself too much with how it looks in old browsers. I use [Bourbon](http://bourbon.io/) for anything too new so I don't have to think about it too hard.

## Can I use this template?

Sure, if you want to. If you'd like to give me a credit link then do so, but I'm not really that concerned with it. You would probably enjoy it more if you made something yourself, but I don't want to get preachy.

## If I want to yell at you about how wrong you did something, where do I do that?

I have a [Twitter](https://twitter.com/GLucasRoe) account that I am now actually using regularly, so you can pester me on there if you'd like.

***

Below my todo list that I started at the beginning of the project before I realized how to use github issues. It is now out of date, but I like it for some reason.

##To Do:
* Work on featured images
* Featured images on Posts page?
* Auto load more posts when scrolled
* Add a code colorizer, probably [SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/manual/configuration/)
* My fade in animation is broken again? :(
* Implement search with [GhostHunter](https://github.com/i11ume/ghostHunter)

* ~~Make the favicon not look like a square pile of asses.~~
* ~~Code Nested in pre vs code inline~~
* ~~Underline links A. La. [Medium](https://medium.com/designing-medium/crafting-link-underlines-on-medium-7c03a9274f9)~~
* ~~Find if there can be a category page?~~
* ~~Make a posts page.~~
* ~~**DID I ACTUALLY FORGET TO DO LISTS?!?**~~
* ~~Annotations?~~
* ~~Convert to an actual template, obvi.~~
* ~~Resume Page?~~
* ~~Figure out a better way to make the drop down menu. Right now, I don't care~~