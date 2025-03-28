# React Basics

React Basics is a personal project designed to showcase the fundamentals of **React**, **TypeScript**, and **Bootstrap**. This project demonstrates the creation of reusable components, state management, and event handling in a modern React application.

---

## 🚀 Features

- **Reusable Components**: Modular and reusable React components like `Button`, `Alert`, and `ListGroup`.
- **State Management**: Demonstrates the use of React's `useState` hook for managing component state.
- **TypeScript Integration**: Strongly typed components and props for better developer experience.
- **Bootstrap Styling**: Clean and responsive design using Bootstrap.

---

## 📂 Project Structure

ReactBasics/
│── public/
│   └── vite.svg # Public assets
│── src/
│   ├── assets/
│   │     └── react.svg # React logo
│   ├── components/ # Reusable React components
│   │     ├── Alert.tsx # Alert component
│   │     ├── Button.tsx # Button component
│   │     └── ListGroup.tsx # ListGroup component
│   ├── App.tsx # Main application component
│   ├── App.css # Global styles
│   ├── Message.tsx # Message component
│   ├── main.tsx # Entry point of the application
│   └── vite-env.d.ts # Vite environment types
│── index.html # HTML entry point
├── package.json # Project dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Vite
├── vite.config.ts # Vite configuration
└── README.md # Project documentation

---

## 🛠️ Technologies Used

- **React**: For building user interfaces.
- **TypeScript**: For type safety and better code maintainability.
- **Bootstrap**: For responsive and modern styling.
- **Vite**: For fast development and build tooling.

---

## 🌟 Key Functionalities

1. **Alert Component**:

   - Displays dismissible alerts with custom content.
   - Example usage: `<Alert onClose={() => {}}>My Alert</Alert>`.

2. **Button Component**:

   - Customizable buttons with different colors and click handlers.
   - Example usage: `<Button color="primary" onClick={() => {}}>Click Me</Button>`.

3. **ListGroup Component**:

   - Displays a list of items with click functionality.
   - Example usage:
     ```tsx
     <ListGroup
       items={["Item 1", "Item 2"]}
       heading="My List"
       onSelectItem={(item) => console.log(item)}
     />
     ```

4. **State Management**:
   - Demonstrates the use of `useState` for managing visibility and selection states.

---

## ⚙️ Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ReactBasics.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at
   ```bash
   http://localhost:5173
   ```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is under the MIT License - see the [LICENSE](./LICENSE) file for details.
