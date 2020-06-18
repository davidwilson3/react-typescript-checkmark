# react-typescript-checkmark

This is an animated, customizable checkmark in React with TypeScript. This is a fork of a previous project that was double this project's bundle size and lacked TypeScript type files and a few props. 

**Adding this package:**

```
npm i react-typescript-checkmark
```

**Using this component:**

```javascript
import Checkmark from 'react-typescript-checkmark';

const ExampleComponent = () => {
  return (
    <Checkmark
      size='large'
      backgroundColor='blue'
      animationDuration={0.8}
      explosion={1.2}
    />
  );
};
```

**API:**

Component props:

`size`: the size of the checkmark

`visible`: a boolean value that toggles visibility

`backgroundColor`: accepts string that is passed to styling as CSS color (#00000, blue, etc)

`checkColor`: accepts string that is passed to styling as CSS color (#00000, blue, etc)

`checkThickness`: accepts a number that determines the thickness of the checkmark

`animationDuration`: the time in seconds for the animation to draw

`explosion`: how big the checkmark expands or 'explodes' as part of the animation


