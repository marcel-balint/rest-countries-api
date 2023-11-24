## World Countries

Live demo [here](https://marcel-balint.github.io/rest-countries-api)

## Technologies used

- CSS
- React.js

## Deployment

This project was deployed on the GitHub pages with the following steps:

1.  installed gh-pages package:

    `npm install --save gh-pages`

2.  (optional) If you are using BrowserRouter in React Router, you may need to specify the `basename` prop to match your GitHub Pages repository name:

    ```
    <BrowserRouter basename="/repository-name">
       {/* ... your routes */}
    </BrowserRouter>
    ```

3.  modified the package.json file by adding the following:

    ```
    {
        "name": "my-app",
        "version": "0.1.0",
        +"homepage": "https://[my-user-name].github.io/[my-repo-name]",
        "private": true,
    ```

4.  in the scripts object added:

    `“predeploy”: "npm run build"`

    `"deploy": "gh-pages -d build"`

5.  deployed the application by typing:

    `npm run deploy`

6.  configure GitHub Pages

    1.  Navigate to the GitHub Pages settings page

        - In your web browser, navigate to the GitHub repository

        - Above the code browser, click on the tab labeled "Settings"

        - In the sidebar, in the "Code and automation" section, click on "Pages"

    2.  Configure the "Build and deployment" settings like this:

        - **Source**: Deploy from a branch

        - **Branch**:

          - Branch: `gh-pages`

          - Folder: `/ (root)`

    3.  Click on the "Save" button

**That's it!** The React app has been deployed to GitHub Pages! 🚀

## Installing the project locally:

1. Clone this repo:

   `git clone https://github.com/marcel-balint/rest-countries-api.git`

2. Run npm install inside project root directory:

   `npm install`

3. Start the server:

   `npm start`

4. To cut ties with this GitHub repository, type in terminal:

   `git remote rm origin`
