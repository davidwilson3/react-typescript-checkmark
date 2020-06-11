# react-typescript-checkmark

This is an animated checkmark in React with TypeScript. This is a fork of a previous project that lacked TypeScript, optional colors, and a few minor props. This project decided to forego the previous projects use of .LESS styling files and instead use the 'styled-components' library. This allows for broader customization of the styling via props.

**Adding this package:**
```
npm install react-typescript-checkmark
```


**Using this component:**

```javascript
import { Checkmark } from 'react-typescript-checkmark';

const ExampleComponent = () => {
  return <Checkmark size='large' backgroundColor='black' />;
};
```

**API:**

Component props:

`size`: the size of the checkmark

`visible`: a boolean value that toggles visibility

`backgroundColor`: accepts string that is passed to styling as CSS color (#00000, blue, etc)

`checkColor`: accepts string that is passed to styling as CSS color (#00000, blue, etc)
 
`checkThickness`: accepts a number that determines the thickness of the checkmark
