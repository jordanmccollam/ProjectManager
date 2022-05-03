import '../src/App.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'custom-dark',
    values: [
      {
        name: "custom-dark",
        value: "#36404c"
      }
    ]
  }
}