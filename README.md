# GitHub Repositories

This repository includes the code for a web application that allows searching for GitHub repositories by username, created as part of the MVST. coding challenge. The application is composed of two main components: the server and the client.

## Project Structure

This project structure focuses on the most important files in this project.

```
mvst-github-search
├── README.md
├── client
│   ├── node_modules                    Installed node modules (do not touch)
│   └── src
│       ├── views                       Contains HompageView and RepositoriesView
│       ├── components                  Contains custom built UI components used in the views
│       ├── services                    Defines API calls to the backend
│       ├── types                       Contains interfaces that define the structure of repositories and users
│       ├── App.tsx                     Defines the main application component
│       └── main.tsx                    Sets up the React root and renders the App component into the DOM
└── server
    ├── node_modules                    Installed node modules (do not touch)
    └── src
        ├── controllers                 Contains controllers handling request logic      
        ├── routes                      Defines Express routes
        ├── services                    Services handling calls to the GitHub API
        └── server.ts                   Sets up and starts the Express server

```

## Project Description

This project offers a user-friendly interface to search for any GitHub user's public repositories. It integrates with the GitHub API to fetch data, and uses MUI for a clean and responsive UI. The backend, built with Node.js and Express, serves as a proxy to the GitHub API, handling authentication (if a token is provided) and avoiding CORS issues.

1. **Backend (Server)**:
   - **Technology**: Node.js, Express, TypeScript
   - **Functionality**:
     - Provides endpoints `/api/users/:username` and `/api/repos/:username` to fetch user data and repositories.
     - Uses a `.env` file for configuration and supports GitHub token for higher rate limits.
     - Returns JSON responses for easy integration with the frontend.
2. **Frontend (Client)**:
   - **Technology**: React, MUI, Vite, TypeScript
   - **Functionality**:
     - Homepage allows entering a GitHub username and searching for that user's repositories.
     - Repositories view displays the user's profile info (e.g. avatar) and a filterable list of repositories.
     - Ensures responsive design using MUI’s Grid and custom styling for a user-friendly experience.



### Environment Variables

**Important:** The .env files in `server` and `client` contain secrets that are usually not meant to be published to this repository.
An example of the necessary environment variables can be found in `.env.example` in `server` and `client`.

The following environment variables are required:

**Server:**

- `PORT`: the port on which the server should run (e.g., `4000`)
- `GITHUB_TOKEN`: your GitHub personal access token to avoid hitting rate limits 
- `GITHUB_API_URL`: the base URL for the GitHub API (e.g., `https://api.github.com`)

**Client:**

- `VITE_API_URL`: the base URL of the backend API (e.g., `http://localhost:4000/api`)


## Get Started

### Requirements

- **Server Requirements**:

  - Node.js (LTS)
  - npm for dependency management
  - Express, Axios, TypeScript

- **Client Requirements**:
  - Node.js (LTS)
  - npm for dependency management
  - Created using `npm create vite` plus MUI for UI components

### Run the Application

1. Clone respository using `git clone https://github.com/katjanakosic/mvst-github-search`
2. Client:
   1. Navigate to the client folder using `cd client`
   2. Install the necessary dependencies using `npm install`
   3. Start the client using `npm run dev`
3. Server:
   1. Navigate to the server folder using `cd server`
   2. Install the necessary dependencies using `npm install`
   3. Start the client using `npm run start`

## Usage
1. Open http://localhost:5173 in your browser (Google Chrome is recommended).
2. Enter a GitHub username in the search field on the homepage.
3. Click the "Search" button to view the repositories and user profile information.
4. Use the FilterBar to refine the displayed repositories by name or programming language.

## Storybook

Storybook is a tool for developing UI components in isolation, allowing you to visualize and interact with each component independently. This project contains stories for the **FilterBar**, **RepoItem**, and **RepoList** components to demonstrate their different states and configurations.

### Run Storybook

1. Install dependencies(if not already done) by using `npm install`
2. Start Storybook by using `npm run storybook`. By default, this will open your browser at http://localhost:6006 (Google Chrome is recommended).

### Usage

- **Dark Background**:
Because the components are styled for a dark theme, it’s recommended to set the Storybook preview’s background to  `dark`. You can do this in Storybook by navigating to the toolbar at the top and selecting a darker background.
- **Exploring Stories**:
Check out the entries for FilterBar, RepoItem, and RepoList in the left-hand Storybook panel. Click on each to view different story variations.
- **SearchBar Component**: 
The SearchBar component depends on React Router’s useNavigate hook to redirect users when they enter a username. In practice, this makes it tricky to display in isolation without mocking or providing a full router context. For simplicity, the SearchBar component is therefore excluded from Storybook to avoid the extra complexity of a router setup and navigation flow in a purely visual testing environment.
