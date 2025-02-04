```javascript
// tailwind.config.js
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  ], 
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```javascript
// MyComponent.jsx
import React from 'react';

export default function MyComponent() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold">My Component</h1>
    </div>
  );
}
```
Ensure that the content array in `tailwind.config.js` includes the path to your component file.  Also ensure that your `index.css` file imports tailwind: `@tailwind base; @tailwind components; @tailwind utilities;` 