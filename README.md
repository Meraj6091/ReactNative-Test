## Project Setup Instructions

STEP 1.clone the project using git "git clone <repository-url>"
STEP 2.run npm istall or yarn install to download and install the Dependencies from the package.json file
STEP 3.Start the project - npx react-native run-android (for android), npx react-native run-ios(for ios)

## Libraries Used

Axios: Used for making HTTP requests. Chosen for its simplicity and ease of use compared to the native fetch API.

## Architecture Overview

The architecture follows a Component-Based Architecture.
-> Components: Each screen or UI element is encapsulated in its own component. This promotes reusability and separation of concerns.

-> API Layer: A dedicated file for API calls (ApiEndPoints.js), separating Api/network logic from UI components.

-> State Management: React’s built-in state management (hooks) is used to manage local state.

## Key Design Decisions

Using Axios: Axios enhances the overall development experience by providing a feature-rich and user friendly API for making HTTP requests.

FlatList for Rendering: The FlatList component is utilized for rendering large lists of data efficiently. This is essential for displaying the list of planets.

## Known Issues

Error Handling: While error handling is implemented, specific error messages could be improved for better user experience.

Responsive Design: While the UI is functional, additional styling and responsiveness adjustments may be required for various screen sizes.

## Testing

Unit Tests: Basic unit tests were implemented using Jest to test utility functions.

## Optional Features

Planet Icons: Added planet icons were implemented using the picsum.photos service.
#   R e a c t N a t i v e - T e s t 
 
 
