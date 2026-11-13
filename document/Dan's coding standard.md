# Dan's React.js Coding Standards

## 1. Import Organization
All imports must be categorized into three groups and ordered as follows:

1. **Packages** (from `node_modules`)
2. **APIs** (from `@requests` or API directories)
3. **Utils** (everything else including styles)

### Example
```javascript
// Packages
import { Fragment, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";

// APIs
import { userListRequest, userCreateRequest } from "../requests";

// Utils
import { decodeString } from "../utils";
import "./styles.css";
```

---

## 2. Semicolon Usage
Use semicolons at the end of statements wherever required to maintain consistency and avoid automatic insertion issues.

---

## 3. State Management Pattern
Define state using a consistent naming convention:

```javascript
const [stateName, _stateName] = useState(INITIAL_STATE);
```

### Example
```javascript
const INITIAL_USER_DATA = {
  errors: {},
  validations: {},
  data: {
    first_name: "",
    last_name: "",
    email: ""
  }
};

const [userForm, _userForm] = useState(INITIAL_USER_DATA);
```

---

## 4. Handler Naming Convention
All handler functions must follow this naming pattern:

```javascript
const handleActionName = (parameters) => {};
```

### Examples
```javascript
const handleChangeUserFormField = (e) => {
  // Function logic here
};

const handleCheckUserFormValidation = (e) => {
  // Function logic here
};
```

---

## 5. JSX Structure & Render Functions
Break UI into smaller reusable render functions within the main component.

### Example
```javascript
function UserForm() {
  /****** Render Functions ******/
  const HEADER = () => (
    <Fragment></Fragment>
  );

  const FOOTER = () => (
    <Fragment></Fragment>
  );

  const USER_FORM_CONTAINER = () => (
    <Fragment></Fragment>
  );

  return (
    <div id="user-form">
      {HEADER()}
      {USER_FORM_CONTAINER()}
      {FOOTER()}
    </div>
  );
}
```

---

## 6. Component Structure
Each component must follow a strict structure divided into three sections:

1. **States**
2. **Handlers**
3. **Render Functions**

### Example
```javascript
function UserForm() {
  /****** States ******/
  const [userForm, _userForm] = useState(INITIAL_USER_DATA);
  const [isLoading, _isLoading] = useState(false);
  const [isSubmitting, _isSubmitting] = useState(false);

  /****** Handlers ******/
  const handleChangeUserFormField = (e) => {
    // Function logic here
  };

  const handleCheckUserFormValidation = (e) => {
    // Function logic here
  };

  /****** Render Functions ******/
  const HEADER = () => (
    <Fragment></Fragment>
  );

  const FOOTER = () => (
    <Fragment></Fragment>
  );

  const USER_FORM_CONTAINER = () => (
    <Fragment></Fragment>
  );

  return (
    <div id="user-form">
      {HEADER()}
      {USER_FORM_CONTAINER()}
      {FOOTER()}
    </div>
  );
}
```

---

## 7. Barrel Exports
Use barrel exports (`index.js` or `index.ts`) for directories such as:

- screens
- components
- atoms
- constants

This ensures cleaner and more maintainable imports across the application.

### Example
```javascript
// index.js
export { default as UserForm } from "./UserForm";
export { default as UserList } from "./UserList";
```

---

## 8. General Best Practices
- Maintain consistent naming conventions throughout the project.
- Keep components small and reusable.
- Avoid deeply nested JSX; use render functions instead.
- Ensure code readability and proper formatting.
- Follow a consistent folder structure.
- Use .env file for URLs and API keys.

---
## 9. For Styling
- Use mobile first approach. The UI should be responsive across all viewports.
- Use tailwind as the primary styling approach across the application.
- Place all custom styling in the custom.css file.
- Avoid inline styles unless absolutely necessary.

---
## Conclusion
Adhering to these standards ensures consistency, scalability, and maintainability across the React codebase. All developers are expected to follow these guidelines strictly.

