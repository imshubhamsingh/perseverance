# Perseverance ☄️
The Perseverance rover landed earlier this year, and since then has been uploading amazing images from the surface of Mars. This application showcases those images
## npm Scripts 📃

| Script                | Description                                                                         |
|-----------------------|-------------------------------------------------------------------------------------|
| `build`               | Builds the production application in the .next folder.                              |
| `export`              | Export to static HTML                                                               |
| `analyze`             | Analyze the content, or the dependencies.                                           |
| `start`               | Starts the application in development mode                                          |
| `format`              | Formats all files supported by Prettier                                             |
| `lint`                | Runs eslint rules                                                                   |
| `release`             | Release a new version with updated changelog                                        |
| `test`                | Run tests on specified with a pattern or filename                                   |
| `test:debug`          | Run tests on debug mode                                                             |
| `cypress:run`         | Run E2E tests                                                                       |
 
 ```shell
# Start dev server
npm run start
```

## APP valid routes 🚏
Following are the routes available:
- [`/`](https://github.com/imshubhamsingh/perseverance/blob/main/src/pages/index.tsx): This shows a slideshow all the images captured by rover. This can all takes some query paramter
        - `speed`: This controls the speed of slideshow. Default is 5000 milliseconds.
- [`/:imageIndex`](https://github.com/imshubhamsingh/perseverance/blob/main/src/pages/%5BimageIdx%5D.tsx): This shows single image captured by rover available on `imageIndex`


## Services 🚚
A small wrapper around the Rover API that exposes a few methods for dealing with Rover images.
This is available at [`src/services/RoverImageService.ts`](https://github.com/imshubhamsingh/perseverance/blob/main/src/services/RoverImageService.ts)