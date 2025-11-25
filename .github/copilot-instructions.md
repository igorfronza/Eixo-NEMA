# Copilot Instructions

## Overview
This project appears to be a simple web-based application with the following structure:

- `index.html`: The main HTML file, serving as the entry point for the application.
- `style.css`: Contains the styles for the application.
- `script.js`: Implements the interactive behavior of the application.

## Key Conventions
- **HTML Structure**: The `index.html` file is the backbone of the application. It is expected to have a clear structure with semantic tags to ensure maintainability.
- **CSS Styling**: The `style.css` file follows standard CSS practices. Ensure that class and ID selectors are used consistently and avoid inline styles unless absolutely necessary.
- **JavaScript Behavior**: The `script.js` file is used for DOM manipulation and event handling. Follow modular JavaScript practices to keep the code clean and reusable.

## Development Workflow
1. **Editing Files**: Modify the respective files (`index.html`, `style.css`, `script.js`) based on the feature or bug fix.
2. **Testing Changes**: Open the `index.html` file in a browser to test the changes. Use browser developer tools for debugging.
3. **Styling Guidelines**: Ensure that the styles in `style.css` are responsive and adhere to modern web design principles.
4. **JavaScript Debugging**: Use `console.log` statements for debugging and remove them before committing the code.

## Project-Specific Patterns
- **CSS Naming Convention**: Use BEM (Block Element Modifier) methodology for naming classes in `style.css`.
  Example:
  ```css
  .block__element--modifier {
    /* styles */
  }
  ```
- **JavaScript Event Handling**: Attach event listeners in `script.js` using `addEventListener`.
  Example:
  ```javascript
  document.querySelector('button').addEventListener('click', () => {
    console.log('Button clicked');
  });
  ```

## Integration Points
- This project does not currently integrate with external APIs or libraries. All functionality is self-contained within the provided files.

## Recommendations for AI Agents
- When adding new features, ensure that the changes are scoped to the relevant file.
- Maintain the separation of concerns: HTML for structure, CSS for styling, and JavaScript for behavior.
- Follow the existing coding patterns and conventions to ensure consistency.

## Example Task
If asked to add a new button with a click event:
1. Update `index.html` to include the button element.
2. Add styles for the button in `style.css`.
3. Implement the click event logic in `script.js`.

---

Feel free to update this document as the project evolves.