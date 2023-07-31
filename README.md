## React Weather Forecast App

#### Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

#### Available Scripts

- [OpenWeatherMap](https://openweathermap.org/)
- [GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/)

#### Development Notes

- The GeoDB API has a maximum paging limit of 10 for calls in the basic subscription, so I found it's better to use paginated select.

- Additionally, the GeoDB API allows only one request per second. That's why I've used wait() and debounced searching for 1 second to avoid unnecessary errors.

- The forecast cards are clickable, and their info expands in a detailed card.
