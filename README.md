To start the project follow the below steps:

1- npm i 
2-npx prisma generate if you are windows , no need if you are using mac laptops
3- npx prisma studio (to see the api result saved in the database, refresh the window to see the latest data saved in the database)
5- npm run dev

My approch as the following:

In order to build the rest api that the will contact the itunes api, I used the nextjs as a full-stack,
I used the api route in nextjs to build the rest api, by specifying the route of the api, that is exist in the api folder under the src/app.

the path of the api is api/search which accepts a query params (search term and others), which then will contact the api itunes with the sent query params.

afterwards, the response from the api itunes is saved on the database using a local database which is prisma.
lastly, the result is shown to the user with two lists top podcasts and top episodes.

In prisma I have two table one to save the top episodes and one to save the top podcasts,
I have one api that is shared between the two lists shown in the frontend, but with different query params to send to the api.

To show the top podcasts the route is https://itunes.apple.com/search?term="فنجان"

To show the top episodes the route is https://itunes.apple.com/search?term="فنجان"&media="all"&entity="podcastEpisode"&limit="15"
