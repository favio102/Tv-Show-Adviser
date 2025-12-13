# TV Show Adviser 📺
> Discover, search, and explore your next favorite TV show with intelligent recommendations

<img width="1280" alt="TV Show Adviser Application Screenshot" src="https://github.com/favio102/Tv-Show-Adviser/assets/93895982/f6fa67e3-59c4-4ef1-ae39-158969636c90">

## 📖 Project Description

**TV Show Adviser** is a modern React-based web application that helps users discover and explore TV shows using The Movie Database (TMDb) API. The application provides an immersive, visually appealing interface featuring dynamic backdrop images, intelligent recommendations, and real-time search capabilities.

### ✨ Key Features

- **Dynamic Popular Shows**: Automatically displays trending and popular TV shows on launch
- **Smart Recommendations**: Get personalized TV show recommendations based on your current selection
- **Real-time Search**: Instantly search for any TV show by title
- **5-Star Rating System**: View accurate ratings for every TV show with an intuitive star-based display
- **Immersive UI**: Beautiful backdrop images that change dynamically with each selected show
- **Scrolling Recommendations**: Interactive marquee display of recommended shows with hover-to-pause functionality
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop and mobile devices

## 🛠️ Tech Stack

### Core Technologies
- **React** `^18.2.0` - Modern UI library for building interactive user interfaces
- **JavaScript (ES6+)** - Programming language
- **CSS Modules** - Component-scoped styling
- **HTML5** - Semantic markup

### Key Dependencies
- **axios** `^1.6.7` - HTTP client for API requests
- **react-dom** `^18.2.0` - React rendering for web
- **react-bootstrap-icons** `^1.8.4` - Icon library for UI components
- **react-fast-marquee** `^1.6.5` - Smooth scrolling component for recommendations
- **dotenv** `^16.4.5` - Environment variable management

### Development & Build Tools
- **react-scripts** `5.0.1` - Create React App build configuration
- **@testing-library/react** `^13.4.0` - Testing utilities
- **@testing-library/jest-dom** `^5.17.0` - Custom Jest matchers
- **@testing-library/user-event** `^13.5.0` - User interaction simulation
- **@babel/plugin-proposal-private-property-in-object** `^7.21.11` - Babel plugin for modern JavaScript features
- **web-vitals** `^2.1.4` - Performance monitoring

### External APIs
- **The Movie Database (TMDb) API v3** - TV show data, images, and recommendations

## 📁 Project Structure

```
Tv-Show-Adviser/
├── public/                     # Static files
│   ├── index.html             # HTML entry point
│   └── robots.txt             # Search engine directives
├── src/                       # Source code
│   ├── api/                   # API integration layer
│   │   ├── tv-shows.js       # TMDb API service class
│   │   └── fake_data.js      # Mock data for development
│   ├── assets/               # Static assets
│   │   └── images/           # Image files (logo, etc.)
│   ├── components/           # React components
│   │   ├── FiveStarRating/   # Star rating display component
│   │   ├── Logo/             # Application logo component
│   │   ├── SearchBar/        # Search input component
│   │   ├── TVShowDetail/     # Main show details display
│   │   ├── TVShowList/       # Recommendations list container
│   │   └── TVShowListItem/   # Individual show card component
│   ├── App.jsx               # Main application component
│   ├── index.js              # Application entry point
│   ├── global.css            # Global styles
│   └── style.module.css      # App-level modular styles
├── .gitignore                # Git ignore rules
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

### Key Files & Directories

- **`src/App.jsx`**: Main application logic, state management, and API orchestration
- **`src/api/tv-shows.js`**: TVShowAPI class with methods for fetching popular shows, recommendations, and search results
- **`src/components/`**: Reusable React components, each with its own styling and logic
- **`public/index.html`**: HTML template with Bootstrap and custom font integration

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **TMDb API Key** - [Sign up for free at TMDb](https://www.themoviedb.org/settings/api)

### Environment Variables

This application requires TMDb API credentials. Create a `.env` file in the root directory:

```bash
REACT_APP_API_KEY=your_tmdb_api_key_here
REACT_APP_TOKEN=your_tmdb_bearer_token_here
```

**Required Environment Variables:**

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_API_KEY` | Your TMDb API key | Yes |
| `REACT_APP_TOKEN` | Your TMDb API read access token (Bearer token) | Yes |

> **Note**: You can obtain both credentials from your [TMDb API settings page](https://www.themoviedb.org/settings/api) after creating a free account.

### Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/favio102/Tv-Show-Adviser.git
   cd Tv-Show-Adviser
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   # Create .env file in the root directory
   touch .env
   
   # Add your TMDb credentials
   echo "REACT_APP_API_KEY=your_api_key" >> .env
   echo "REACT_APP_TOKEN=your_bearer_token" >> .env
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

## 💻 Usage & Examples

### Running the Application

**Development Mode:**
```bash
npm start
```
Starts the development server with hot reload at `http://localhost:3000`

**Production Build:**
```bash
npm run build
```
Creates an optimized production build in the `build/` directory

**Run Tests:**
```bash
npm test
```
Launches the test runner in interactive watch mode

### Using the Application

1. **Browse Popular Shows**: On launch, the app displays the most popular TV show with its backdrop
2. **View Details**: See the show's name, rating (out of 5 stars), and overview
3. **Search Shows**: Use the search bar to find specific TV shows by title (press Enter to search)
4. **Explore Recommendations**: Scroll through the marquee of recommended shows at the bottom
5. **Select a Show**: Click any recommendation to view its details and get new recommendations

### Example API Integration

The application integrates with TMDb API using the following endpoints:

**Fetch Popular Shows:**
```javascript
// GET https://api.themoviedb.org/3/tv/popular
const popularShows = await TVShowAPI.fetchPopulars();
```

**Search by Title:**
```javascript
// GET https://api.themoviedb.org/3/search/tv
const searchResults = await TVShowAPI.fetchByTitle("Breaking Bad");
```

**Get Recommendations:**
```javascript
// GET https://api.themoviedb.org/3/tv/{tv_id}/recommendations
const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
```

## ⚙️ Configuration

### API Configuration

The TMDb API integration is configured in `src/api/tv-shows.js`:

- **Base URL**: `https://api.themoviedb.org/3`
- **Image Base URL**: `https://image.tmdb.org/t/p/original` (backdrop)
- **Thumbnail Base URL**: `https://image.tmdb.org/t/p/w300` (list items)
- **Language**: `en-US`
- **Authentication**: Bearer token in Authorization header

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode on port 3000 |
| `npm test` | Launches the Jest test runner in watch mode |
| `npm run build` | Creates optimized production build |
| `npm run eject` | Ejects from Create React App (one-way operation) |

### Build Configuration

The project uses Create React App's default configuration with:
- **Webpack** for bundling
- **Babel** for JavaScript transpilation
- **ESLint** for code linting
- **Jest** for testing

## 📡 API Documentation

### TMDb API Integration

This application uses The Movie Database (TMDb) API v3 for all TV show data.

#### Authentication

All API requests require authentication using both an API key and Bearer token:
- API key passed as query parameter: `?api_key=YOUR_KEY`
- Bearer token in Authorization header: `Authorization: Bearer YOUR_TOKEN`

#### Endpoints Used

**1. Popular TV Shows**
- **Method**: GET
- **Endpoint**: `/tv/popular`
- **Parameters**: `language=en-US`, `page=1`
- **Response**: Array of popular TV show objects

**2. TV Show Recommendations**
- **Method**: GET
- **Endpoint**: `/tv/{tv_id}/recommendations`
- **Parameters**: `language=en-US`, `page=1`
- **Response**: Array of recommended TV show objects based on the specified show

**3. Search TV Shows**
- **Method**: GET
- **Endpoint**: `/search/tv`
- **Parameters**: `query={title}`, `include_adult=false`, `language=en-US`, `page=1`
- **Response**: Array of TV show objects matching the search query

#### Response Data Structure

Each TV show object contains:
```javascript
{
  id: number,              // Unique show identifier
  name: string,            // Show title
  overview: string,        // Show description
  backdrop_path: string,   // Backdrop image path
  vote_average: number,    // Rating (0-10 scale)
  // ... additional metadata
}
```

#### Rate Limiting

TMDb API has rate limits. The application handles errors gracefully with try-catch blocks in all API methods.

## 🤝 Contributing

We welcome contributions from the community! To ensure a smooth process, please follow these basic steps:

1. **Open an Issue:** For bug reports or feature suggestions, please first open an <a>Issue</a> to discuss your proposed change or problem.
2. **Fork the Repository:** Create your own fork of the project.
3. **Implement Fixes:** Create a new branch (`git checkout -b feature/your-feature-name` or `git checkout -b fix/issue-number`) and implement your changes.
4. **Submit a Pull Request (PR):** Target the `main` branch with your pull request, ensuring your branch is up-to-date and all tests pass.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [The Movie Database (TMDb)](https://www.themoviedb.org/) for providing the comprehensive TV show data API
- [Create React App](https://github.com/facebook/create-react-app) for the initial project setup
- [React Bootstrap Icons](https://github.com/ismamz/react-bootstrap-icons) for the icon library

---

**Built with ❤️ using React and TMDb API**
