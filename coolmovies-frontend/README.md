<a href="https://www.ecoportal.com/"><img src="https://www.ecoportal.com/hubfs/ecoPortal%20health%20and%20safety%20software%20for%20enterprises.svg" title="ecoPortalLogo" alt="ecoPortal Logo"></a>

# My solution to Coolmovies Web Challange

> This repository contains my results from the Coolmovies qualification test for a job opportunity as a software engineer at **ecoPortal** company.

[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger) [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

## Table of Contents

- [The new feature: Reviews Page](#the-new-feature:-reviews-page)
- [Considerations](#considerations)
- [Contact Info](#contact-info)
- [License](#license)

## The new feature: Reviews Page

I decided to add the reviews page access trough the upper menu that was already provided.<br>

![](https://i.imgur.com/USG5CHq.gif)

You may also find a page named **APPLICANT**, which contains a summary of my professional carrer and links to my portfolio social media.

![](https://i.imgur.com/GhTiHtB.png)

Uppon accessing the **REVIEWS** page, a `useEffect` will trigger a dispatch to fetch all the movies from the *API*. The data from the movies will be stored in a *Redux* state and used to show their cover image in the center of the page.<br>
I added one more movie to the database, *The Matrix*, just for this page to become more interesting.

![](https://i.imgur.com/HfQydi8.gif)

The user may choose one of them to see its reviews, by clicking the cover image.<br>
The selected cover will become bigger, the movie title and release date will be shown below it, and its review section will be rendered on screen.<br>
Making use of *React* and *Redux*, the design is completely responsive, only fetching and updating on screen what is necessary, without reloading the entire screen.

![](https://i.imgur.com/BJRMjTN.gif)

As you can see, the review section is at first composed of a **REVIEW THIS TITLE** button and the review components.<br>
Each review component contains the rating, the review title, the name of the reviewer, the review body and, for reviews by the "logged" user, buttons for editing and deleting the review.

![](https://i.imgur.com/F0x3Sg4.png)

The "logged" user is the current user provided by the *API*, which is Ayla.<br>
So, only the reviews by Ayla can be edited or deleted by the user.<br>
I am thinking on implementing a fake login feature, where the user could "log in" as any registered user, to edit or delete the other reviews.

![](https://i.imgur.com/9R0LBi8.png)

If the user clicks on the editing button, the review component will open its fields for the user to edit them.<br>
The current data of the review is loaded for convenience and in the event the user wants to edit only one of them.<br>
The rating is chosen by clicking in one of five stars, the title and body may be edited in their respective text inputs.<br>
From here, the user may either cancel or save, using the buttons on the bottom.

![](https://i.imgur.com/SQmLq5r.gif)

The review can also be deleted from the database simply by clicking the red trash can icon.<br>
I am thinking of implementing a confirmation popup, but it is a *WIP* as of now.

![](https://i.imgur.com/QAwvdd6.gif)

To create a new review, the user must click on **REVIEW THIS TITLE** button at the top right of the review section.<br>
Doing so will hide the button and open a blank form for the user to enter the rating, title and body of the review.<br>
The user name is filled in automatically using the "logged" user name.

![](https://i.imgur.com/1oCz0Nb.gif)

## Considerations

As recommended, I used prettier for code formatting and organized the file structure to my liking.<br>
I also tried to mimic the patterns of the base application, and by doing so, I learned a lot.<br>
I never had used *Epics* or worked with the *Observable* paradigm with *Redux* before, so I decided to implement all async queries and mutations using it, even though it does not make much sense. I could have used *Thunks* instead, but I wanted to see how *Epics* work and it was a great opportunity, even though I did not harvest their true potential, by using side effects, for example.<br>
I have not had time yet to implement a unit test framework, but I intend to. *TDD* is amazing and I use it daily at work.
<br>
Finally, I would like to say that I am relatively new to the programming world and I am still learning a lot every and each day.<br>
I am sure my code is far from the best, but I hope I could show my dedication, effort and eagerness to learn with this test.

## Contact Info
- If you have any problems with installing or running the application, please feel free to contact me by any means.
  - Cell phone (WhatsApp): +55 35 9 9151 6117
  - E-mail: pedroafonso23@yahoo.com.br
  - <a href="https://www.facebook.com/pedroafonso.ferraz.7/">Facebook</a> 
  - <a href="https://www.linkedin.com/in/pedroafonsoferraz/">LinkedIn</a> 
  - <a href="https://www.instagram.com/pedroafonsocfl/?hl=pt-br">Instagram</a>

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**

#

# Coolmovies web challenge - Original README

You have to add the cool movies review feature to the existing `coolmovies-frontend`.

We have created a basic app for you to get started in.

What tooling has been setup for you:

- [Next.js](https://nextjs.org/) (Build Framework)
- [MUI](https://mui.com/) (Component Library)
- [Redux Toolkit](https://redux-toolkit.js.org/) (State Management)
- [Redux-Observable](https://redux-observable.js.org/) (State Side-effect Middleware)
- [Apollo GraphQL](https://www.apollographql.com/) (GraphQL Query Client)

You must use these tools to complete the test. If you're unfamiliar with any of these, please read their documentation. We have also added some example code for the ideal patterns we would like to see. Have a look at `pages/index.tsx`.

We are providing you a GraphQL API mock application to consume.

## Acceptance Criteria

**You will be evaluated on your UI/UX as we believe this is an important skill to have. Please put time and effort into this.**

There are 2 main components that must be developed for this feature: (You have flexibility on the UI/UX for this)

1. Listing of the movie reviews.
2. Editing the existing movie reviews.
3. Adding additional reviews.

The feature must be available on the `/reviews` endpoint of the application.

The design must be responsive.

You will be evaluated against your ability to understand and use the tooling provided and mimic existing patterns that are shown in the examples.

There are a couple of additional things that we would like to see in your submission.

1. Our designers don't like the default MUI blue. Please change this.
2. Make the proxied GraphQL URL an environment variable.
3. Improve the folder structure of the frontend application how you see fit. (It's intentionally not great)
4. Add the custom `edit.svg` from the `public` folder as an icon to launch editing the review.
5. Add a unit testing framework of your choice, and some unit tests around the more complex areas of your code.
