# alexng353/storybook

how to use

add this stuff to your tailwind config

```js
export default {
  content: [
    // add your pages too duh
    "node_modules/@wherever_you_put_this/**/*.{js,ts,jsx,tsx}",
  ],
};
```

also make sure your app's tailwind config has most of the same stuff that's inside this project's tailwind config
