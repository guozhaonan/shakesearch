# ShakeSearch

Welcome to the Pulley Shakesearch Take-home Challenge! In this repository,
you'll find a simple web app that allows a user to search for a text string in
the complete works of Shakespeare.

You can see a live version of the app at
https://pulley-shakesearch.herokuapp.com/. Try searching for "Hamlet" to display
a set of results.

In it's current state, however, the app is in rough shape. The search is
case sensitive, the results are difficult to read, and the search is limited to
exact matches.

## Your Mission

Improve the app! Think about the problem from the **user's perspective**
and prioritize your changes according to what you think is most useful.

You can approach this with a back-end, front-end, or full-stack focus.

## Evaluation

We will be primarily evaluating based on how well the search works for users. A search result with a lot of features (i.e. multi-words and mis-spellings handled), but with results that are hard to read would not be a strong submission.

## Submission

1. Fork this repository and send us a link to your fork after pushing your changes.
2. Heroku hosting - The project includes a Heroku Procfile and, in its
   current state, can be deployed easily on Heroku's free tier.
3. In your submission, share with us what changes you made and how you would prioritize changes if you had more time.

## Submission Writeup

I'm approaching this challenge from a frontend perspective and as such am working with the API that's given. With that in mind, I made sure to implement a more user-friendly UI complete with loading states, nice result cards, and search-word highlighting.

### How to Run
To run the app, just run `go run main.go`, then open another terminal window and run the following:
```
cd shakesearch-ui
npm install
npm start
```

Navigate to `localhost:3000` to see the following UI:

![Screen Shot 2022-09-14 at 2 07 46 PM](https://user-images.githubusercontent.com/4050758/190243078-1f42f919-a4be-431c-9e0f-f92aff7454fa.png)


### Features
1. A Straightforward Search Bar (I used colors from Pulley's landing page to color the app 😀)

2. Better formatted results with unexpanded (fewer words) and expanded (more words) states as well as breadcrumbs (non-functional, see below notes on improvements) as well as a count

4. Highlighting the query that the search result contains, gives users an explanation as to why they're seeing certain results

5. Loading and Disabled so that the user can't interact with cards or the search bar when the API is loading

6. An Empty State for API Calls so that the user isn't misled if their search doesn't generate any results


### Improvements to UX
For a better user experience, there are some changes that could make the app a much better user experience:

1. Pagination for search results, this could make loading on the frontend faster and create a less overwhelming search experience for users since they'd scroll for quite a long time to get to the last result for a search with many results.

2. Adding functional breadcrumbs (ie: Hamlet > Act 1 > Scene 2) for text found matching your search that is in that specific section of the play. It would also be great if the breadcrumbs linked to the individual sections of the play for even more context. This would require reworking the API to return an array of objects formatted like this:

```
[
  {
    Play: "Hamlet",
    Act: "III",
    Scene: "I",
    displayText: "To be, or not to be..."
  },
...]
```
Having taken a look at completeworks.txt in some detail the strategy here would be to parse the first mention of `CONTENTS` for all of the Shakespeare texts and to use that to figure out logical starting and stopping points for each individual work. From there, I'd parse each individual work and apply a similar strategy (each work starts with `CONTENTS` that list the Acts and Scenes with the exception of the Sonnets) to figure out logical starting and stopping points for each Act and Scene. Store the starting and ending index of each Act and Scene since the Go endpoint uses index to formulate the current result strings, you can use that index to compare against these ranges to figure out which Act, Scene, and Play the search result appears in.

3. Saved Results, gives users the ability to reference which results that they found useful. You could perform this on just the FE but persistence becomes an issue unless you use caching which has its own set of problems, the right way to do it would be to implement an endpoint to save results and associate it with a specific user. Also this would require the creation of user endpoints

4. More summarized details on searches performed (ie: Number of Results in Hamlet: 3, Number of Results in Macbeth: 4, could be displayed as chips). If the API were reworked as expected in pt 2, you could take those results and run some quick javascript logic to get those values.

5. Saved Searches, could potentially be useful to users and would be a relatively easy lift.
