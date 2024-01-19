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

## Good resources to read about for private UI repository stuffs ojj
https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry

### special note for using GitHub's npm registry
```
// .npmrc
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@your_organization:registry=https://npm.pkg.github.com
```

This `.npmrc` file lets you specify `@your_organization/**` private npm packages in package.json and have them work magically
