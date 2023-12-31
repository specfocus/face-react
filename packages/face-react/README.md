# Face React

All we have for react applications.

## Design Systems
![Design Systems](./assets/themes-design-systems.png)

### [Cupertino](https://react-cupertino.github.io/)
![Cupertino Design System](./assets/cupertino-design-system.png)

### [Fluent](https://react.fluentui.dev/)
![Fluent Design System](./assets/fluent-design-system.png)

### [Material](https://mui.com/)
![Material Design System](./assets/material-design-system.png)


https://www.npmjs.com/package/styled-components
https://storybook.js.org/recipes/styled-components


## React + TypeScript + Vite

This project was created with:

```
npm create vite
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
