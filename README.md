# Angular Todo App

An interactive and minimalist Todo App built using **Angular** with standalone components. This application allows users to add, toggle, and delete todos efficiently with a clean and intuitive interface.

## Features

- **Add Todo**: Users can input new tasks to add to the todo list.
- **Mark as Complete/Incomplete**: Toggle tasks between completed and pending states.
- **Delete Todo**: Remove tasks from the list.
- **Reactive Design**: Leverages Angular's reactive patterns for real-time updates.

## Tech Stack

- **Angular**: Framework for building the user interface.
- **RxJS**: For managing reactive streams of data.
- **Standalone Components**: Streamlined Angular app architecture using Angular 15+ features.

## File Structure

- **`App` Component**:
  - Serves as the root component for the application.
  - Hosts the overall layout and integrates child components.
  
- **`TodoInputComponent`**:
  - Handles the addition of new todos.
  - Emits events for the `add` operation.

- **`TodoItemComponent`**:
  - Represents individual todo items.
  - Provides controls for toggling completion and deletion.

- **`TodoService`**:
  - Manages the state and operations of the todo list.
  - Exposes an observable `todos$` for reactive updates.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/angular-todo-app.git
   cd Angular-Todo-App
