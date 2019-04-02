# filesRename

Batch modification of file names for specified folders

## start

```
npm i files-rename
```

## Use

```javascript
const rename = require("./index");

// before
//
// ├── rename
// │   └── a
// │       ├── b
// │           └── b1.js
// │       └── a1.js

rename("./rename", ".js", ".jsx");

// after
//
// ├── rename
// │   └── a
// │       ├── b
// │           └── b1.jsx
// │       └── a1.jsx
```

## option

- folder
  - default: `./rename`
  - type: `string`
  - describe: Catalogues to be processed.
- match = ".js"
  - default: `.js`
  - type: `string|RegExp`
  - describe: Documents to be processed, Regular or string matching.
- newName = ".ts"
  - default: `.ts`
  - type: `string|function`
  - describe: Names processed, Just like `fileName.replace(match,newName)`.
