# Redux Bootstrap

A modern, opinionated starter template for building robust React applications with Redux Toolkit, TypeScript, and Vite.

---

## 🚀 Why Redux Bootstrap?

This project aims to provide a **solid foundation** for React developers who want to:

- **Kickstart new projects** with best practices out of the box.
- Use **Redux Toolkit** for scalable state management.
- Leverage **TypeScript** for type safety and maintainability.
- Enjoy the speed and simplicity of **Vite** for development and builds.
- Adopt a clean, organized project structure.

---

## 🏗️ Project Structure

```
redux-bootstrap/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── redux/
│   │   ├── hook.ts
│   │   ├── store.ts
│   │   └── features/
│   │       └── counter/
│   │           └── counterSlice.ts
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) to view your app.

## 🧩 Features

- **React 19** with functional components and hooks
- **Redux Toolkit** for efficient state management
- **TypeScript** for static typing
- **Vite** for lightning-fast dev/build
- **ESLint** for code quality
- **Ready-to-extend** folder structure

---

## 📦 Usage

- Edit `src/App.tsx` to start building your UI.
- Add new Redux features in `src/redux/features/`.
- Use `useAppDispatch` and `useAppSelector` from `src/redux/hook.ts` for type-safe Redux hooks.

---

## 🙏 Acknowledgements

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

Happy coding!