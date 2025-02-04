# Tailwind CSS classes not working in React component

This repository demonstrates a bug where Tailwind CSS classes are not applied correctly in a React component.

## Bug Description

The `MyComponent` component uses Tailwind CSS classes for styling, but the class `bg-gray-100` does not work. The background remains white instead of light gray.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the background of the component remains white.

## Solution

The solution is to ensure that the Tailwind directives are correctly configured in your `tailwind.config.js` file and that your CSS is properly imported into your project.