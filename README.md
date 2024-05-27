# 📦 react-spinning-cube

A lightweight and customizable 3D spinning cube component for React, using styled-components.

## 🚀 Installation

To install the `react-spinning-cube` package, run:

```bash
npm install react-spinning-cube
```

## 📚 Usage

Here's how to use the `SpinningCube` component in your React project:

```tsx
import React from "react";
import { SpinningCube } from "react-spinning-cube";

const App: React.FC = () => {
  return (
    <div>
      <SpinningCube size={30} speed={12} color="white" />
    </div>
  );
};

export default App;
```

## 📝 Props

The `SpinningCube` component accepts the following props:

### `size` 📏

- **Type**: `number`
- **Description**: Sets the size of the cube in pixels.
- **Example**: `size={50}`

### `color` 🎨

- **Type**: `string`
- **Description**: Sets the color of the cube's wireframe.
- **Example**: `color="white"`

### `speed` ⏱️

- **Type**: `number`
- **Description**: Sets the rotation speed of the cube in seconds.
- **Example**: `speed={10}`

## 📦 Example

```tsx
import React from "react";
import { SpinningCube } from "react-spinning-cube";

const Example: React.FC = () => {
  return (
    <div>
      <SpinningCube size={50} speed={8} color="red" />
    </div>
  );
};

export default Example;
```

## 🌟 Features

- 📏 **Customizable Size**: Adjust the cube size to fit your design.
- 🎨 **Customizable Color**: Change the wireframe color to match your theme.
- ⏱️ **Adjustable Speed**: Control the rotation speed of the cube.

## 🔧 Development

To run the project locally for development:

```bash
git clone https://github.com/yourusername/react-spinning-cube.git
cd react-spinning-cube
npm install
npm run build
```

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by noclipping
