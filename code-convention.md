# Introduction
Example of the code convention.

This is meant to be a guide to help new developers understand
the React code style and best practices we adopt here.

# Production
 * For "production" env use variables: list of variables
 
# The main code style is described here

link to confluence Code convention

# Table of contents

Main code convention here:

- [Swagger](#swagger)
- [Code rules](#code-rules)
  - [Prettier](#prettier)
  - [Eslint](#eslint)
  - [TypeScript](#typescript)
  - [Hygen](#hygen)
- [Component definition](#component-definition)
- [Project organization](#project-organization)
  - [Containers Components](#containers-components)
  - [Pages Components](#pages-components)
  - [Presentational Components](#presentational-components)
  - [Constants](#constants)
  - [Fonts](#fonts)
  - [Hooks](#hooks)
  - [Images](#images)
  - [Locales](#locales)
  - [Redux](#redux)
  - [Services](#services)
  - [Styles](#styles)
  - [Utils](#utils)
- [Code standards](#code-standards)
  - [Reducers standards](#reducers-standards)
  - [Actions standards](#actions-standards)
  - [Naming](#naming)
  - [Other code standards](#other-code-standards)
- [Formatting CSS](#formatting-css)
  - [UI](#ui)
  - [120 columns, soft tabs of 4 spaces](#120-columns-soft-tabs-of-4-spaces)
  - [camelCase instead of dash-case for class names](#camelcase-instead-of-dash-case-for-class-names)
  - [Never use ID and tag name as root selectors!](#never-use-id-and-tag-name-as-root-selectors)
  - [When using multiple selectors, give each selector its own line](#when-using-multiple-selectors-give-each-selector-its-own-line)
  - [When writing rules, be sure to](#when-writing-rules-be-sure-to)
- [CSS Design Patterns](#css-design-patterns)
  - [The parent constrains the child](#the-parent-constrains-the-child)
  - [The parent doesn't assume the child's structure](#the-parent-doesnt-assume-the-childs-structure)
  - [Components never leak margin](#components-never-leak-margin)
  - [The parent spaces the children](#the-parent-spaces-the-children)
  - [Nested classes aren't for providing scope](#nested-classes-arent-for-providing-scope)
  - [Variables, lots of variables!](#variables-lots-of-variables)

# Swagger

here should be link to Swagger or other API tool

[&#8593;Up](#table-of-contents)

# Code rules

### Prettier

Good `.prettierrc`

```json5
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": true,
    "useTabs": false,
    "singleQuote": false,
    "bracketSpacing": false,
    "jsxBracketSameLine": false,
    "arrowParens": "avoid",
    "printWidth": 120
}
```

Use Prettier during writing your code. Settings for WebStorm:
[https://prettier.io/docs/en/webstorm.html](https://prettier.io/docs/en/webstorm.html)

Note: Prettier automatically formats the code on each commit.

### Eslint

Good `.eslintrc`
```json5
{
    "extends": "react-app",
    "rules": {
        "no-console": ["warn", {"allow": ["warn", "error"]}],
        "no-shadow": 2
    }
}
```

Use Eslint in your code editor. Settings for WebStorm:
[https://www.jetbrains.com/help/webstorm/eslint.html](https://www.jetbrains.com/help/webstorm/eslint.html)

### TypeScript

Use TypeScript in your code. Write more Interfaces and Enums.
Naming: ISomeInterfaceName, TSomeTypeName, ESomeEnumType.

Good 
```typescript
enum EStatus  {
    active = "active",
    passive = "passive"
}

type TId = string | number | null;

interface IUser {
    id: TId,
    name?: string,
    status?: EStatus
}

function getEntityId<I extends {id: TId}>(user: I): TId {
    return user.id;
}

const user = {id: 1, name: "Bob", status: EStatus.active};

const userId = getEntityId<IUser>(user);
```

### Hygen

Use Hygen to generate sceletons of presentation components, container components, redux, etc. 
It avoids writing code in different styles and speeds up your development.

For more info about hygen check their website:
[https://www.hygen.io/](https://www.hygen.io/)

[&#8593;Up](#table-of-contents)

# Component definition

All components (containers, presentation or pages) should **always** be
defined as a directory, named with pascal casing. The main component file
should be `index.js`, main stylesheet `index.module.scss`:

Container component
```
AwesomeCard/
└── index.js
```

Presentational component
```
AwesomeCard/
├── index.js
└── index.module.scss
```

* Styles should always be defined in a separate SCSS file
* Avoid prefixing or suffixing component's folders names
  - E.g.: `components/containers/DashboardContainer` or `components/presentation/DashboardComponent`
  - use: `components/containers/Dashboard` or `components/presentation/Dashboard`
  
* To avoid conflicts with names using the next rules:
 
* Name containers like [Name]Container:
```jsx harmony
const EntityContainer = () => {
    return <Entity />;
};

export default EntityContainer;
```

* Name presentations like [Name]:
```jsx harmony
function Entity() {
    return (<div>Entity View</div>)
}

export default Entity;
```

* Name pages like [Name]Page:
```jsx harmony
const NavBarPage = () => {
    return (<div>Page content</div>);
};

export default NavBarPage;
```

* On conflict rename on import time.
```typescript
  import UserContainer from './User';
  import { User as UserContainer } from './User';
 ```

[&#8593;Up](#table-of-contents)

# Project organization

Your project components can be separated in such directories:

```
root/
└── src/
   ├── components/
        ├── containers/
        ├── pages/
        └── presentational/
   ├── constants/
   ├── fonts/
   ├── hooks/
   ├── images/
   ├── locales/
   ├── redux/
   ├── services/
   ├── styles/
   └── utils/
```

Inside components directory:

## Containers Components

### `components/containers/`

Containers can store a state or use state from the Redux store. 
It should return only one main presentation component or a couple but without any wrapper with styles.
Containers should not use any styles, just logic. 
They pass props, refs, methods to the presentation component.

## Pages Components

### `components/pages/`

Page components can store state, receive route parameters and dispatch
Redux actions when applicable. Pages are the highest level of application's
components. They represent the application routes and most times are
displayed by a router. Pages are also responsible for handling container
components callbacks and flowing data into children containers.

## Presentational Components

### `components/presentational/`

Stateless components. Shouldn't store state. Most components in this
directory will be function-based components. Stuff like buttons, inputs,
labels and all presentational components goes here.

## Constants

### `constants/`

Here we locate constants which are used in many places of the project

## Fonts

### `fonts/`

Project's fonts. 

## Hooks

### `hooks/`

Here we locate all custom hooks. 

## Images

### `images/`

Locate all images which are used in the project 

### `images/icons/`

Locate all icons which are used in the project

## Locales

### `locales/`

Here we store our translates in `de.json` and `en.json` files.

## Redux

### `redux/`

Here we describe all logic for Redux, like actions, reducers.

### `redux/actions/`

Locate actions and action creators

### `redux/reducers/`

Locate reducers and selectors

### `redux/utils/`

Here we describe the main helpers for the Redux flow

## Services

### `services/`

Here we describe helpers for requests to the API

## Styles

### `styles/`

Main styles for our project. Here you can add css `vars`, `fonts`, etc.

## Utils

### `utils/`

Here we locate `helpers`, `svgIcons`, `typescript/*` which are used in many places of our project.

[&#8593;Up](#table-of-contents)

# Code standards

## Reducers standards

### Use `reselect`

Use selectors for the Redux store for memoization data

Good
```typescript jsx
import {createSelector} from "reselect";
import _ from "lodash";

const user = state => state.user;

export const selectorUser = createSelector(
    user,
    state => state
);

export const selectorUserPermissions = createSelector(
    selectorUser,
    state => _.get(user, "permissions", [])
);
```

### Reducer folder

Every reducer should locate in a separate folder

Good
```
user/
    ├── index.js
    └── selectors.js
```

### Reducer structure

For reducers which work with the API use this structure

Good
```
users/
    list/
        ├── meta
        ├── data
        ├── isLoading
        └── error
    user/
        ├── data
        ├── editing
        ├── isLoading
        └── error
```

## Actions standards

### Action folder

Actions for every reducer should locate in a separate folder

Good
```
users/
    user/
        └── index.js
    └── index.js
```

### Use `react-redux` hooks like `useDispatch` and `useSelector` inside container components.

Good
```typescript jsx
import {useDispatch, useSelector} from "react-redux";
import {selectorUser} from "../user/selectors";

const UserContainer = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectorUser);

    return (<User/>);
}
```

## Naming

### Test files must start with the class which will be tested followed by `.test`.

### Class and components folders names must start with capital letter.

### Name redux selectors like `selectorSomething` to better find in global scope

[&#8593;Up](#table-of-contents)

## Other code standards

### Use custom hooks

Create custom hooks to locate some logic which can be reusable

Good
```typescript
export const useModal = () => {
    const [isModalOpen, setModalIsOpen] = useState(false);

    const toggleModal = state => {
        setModalIsOpen(state);
    };

    return [isModalOpen, toggleModal];
};
```

### Constants in ALL_CAPS style

Describe constants in ALL_CAPS style or use ENUM

Good
```typescript
export const STATUS = {
    active: "active",
    passive: "passive"
};

export enum EStatus {
    active = "active",
    passive = "passive"
}
```

### Helper functions inside components

Locate helper functions inside components below the component definition.
They can be easily tested then.

Good
```typescript jsx
const UserContainer = () => {
    //...
    return (
        <User/>
    );
};

export default UserContainer;

const getUserName = (user: {name: string}): string => {
    return user.name || "Default name";
};
```

### Use font families
Use `light`, `regular` and `medium` font family to see difference of weight in browsers.

Good
```scss
.title {
    font-family: $fontFamilyLight;
}
```

## Code style

### More than 2 props from an object been used in the same place should be destructed

### Line length should not exceed 120 characters.

### Use explanatory variables

Good
```typescript
const onlyNumbersRegex = /^\d+$/;
const getNumberValidation = message => value => !onlyNumbersRegex.test(value) && message;

const isNumber = getNumberValidation('error message');

isNumber(1)
```

Bad
```typescript
const onlyNumbersRegex = /^\d+$/;
const validateNumber = message => value => !onlyNumbersRegex.test(value) && message;

validateNumber('error message')(1);
```

### Avoid using Magic numbers

Good
```typescript
const DAY_IN_MILLISECONDS = 86400000;

setTimeout(doSomething, DAY_IN_MILLISECONDS);
```

Bad
```typescript
setTimeout(doSomething, 86400000)
```

# CSS are modules!

We use CSS modules everywhere. CSS modules are great because they provide
scope to CSS and allow us to create compartmentalized styles that don't
leak to global scope. Here are our good practices of doing CSS modules:

## Formatting CSS

### UI

We use the [material-ui](https://material-ui.com/) library for our components.

We locate our custom components in the `src/components/presentational/UIKit` folder. 

### 120 columns, soft tabs of 4 spaces

Keep your code lines under 120 columns wide. This helps when opening multiple splits.
Use soft tabs of 4 spaces to save some space!

### camelCase instead of dash-case for class names

With CSS modules, camelCase makes much more sense:

Good
```typescript jsx
import styles from './index.module.scss'

const Item = ({ children }) =>
  (<li className={styles.circleBullet}>
    {children}
  </li>);

export default Item;
```

[&#8593;Up](#table-of-contents)

### Never use ID and tag name as root selectors!

Using ID and tag name at the selector's root makes the rule to be applied
globally.

```typescript jsx
import style from './index.module.scss'

const Item = ({ title, thumbnail }) =>
  <div className={style.container}>
    <img src={thumbnail} alt={title} />
  </div>

export default Item
```

Good
```scss
.container > img {
  background-color: #CCCCCC;
}
```

Bad
```scss
img {
  background-color: #CCCCCC;
}
```

[&#8593;Up](#table-of-contents)

### When using multiple selectors, give each selector its own line

Organize one selector per line, even when placing all of them at the same line doesn't exceed 120 columns.

Good
```scss
.container > img,
.container > div,
.container > section {
  background-color: #CCCCCC;
}
```

Bad
```scss
.container > img, .container > div, .container > section {
  background-color: #CCCCCC;
}
```

[&#8593;Up](#table-of-contents)

### When writing rules, be sure to

* Put a space before the opening brace `{`
* In properties put a space after (but not before) the `:` character
* Put closing braces `}` of rule declarations on a new line
* Leave **ONE** blank line in between rule declarations

Good
```scss
.container {
  font-size: 12pt;
}

.thumbnail {
  width: 160px;
  height: 90px;
}
```

Bad
```scss
.container{
  font-size:12pt;}
.thumbnail{
  width:160px;
  height:90px;}
```

[&#8593;Up](#table-of-contents)

## CSS Design Patterns

### The parent constrains the child

Leaf components shouldn't constrain width or height (unless it makes
sense). That said, most components should default to fill the parent:

Good
```typescript jsx
import style from './index.module.scss'

const Input = ({ children }) =>
  (<input className={style.input}>
    {children}
  </input>);

export default Input
```

```scss
.input {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}
```

[&#8593;Up](#table-of-contents)

### The parent doesn't assume the child's structure

Sometimes we don't want to fill the whole width by default. An example is
the button component, which we want to resize itself based on title width.

In this cases, we should allow the parent component to inject styles into
the child component's container. The child is responsible for choosing where
parent styles are injected.

For merging styles, always use [`classnames`][classnames] package. The
rightmost arguments overrides the leftmost ones.

Good
```typescript jsx
import classNames from 'classnames'
import style from './index.module.scss'

const Button = ({ children, className }) =>
  (<button className={classNames(style.button, className)}>
    {children}
  </button>);

export default Button;
```

```scss
.button {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}
```

[&#8593;Up](#table-of-contents)

### Components never leak margin

All components are self-contained and their final size should never suffer
margin leakage! This allows the components to be much more reusable!

Good
```

   |-content size-|
    ______________
   |              |
   |              |
   |              |
   |______________|



```

Bad
```
|--|-content size-|--| margin
 ____________________
|   ______________   | | margin
|  |              |  |
|  |              |  |
|  |              |  |
|  |______________|  |
|____________________| | margin

|---container size---|
```

[&#8593;Up](#table-of-contents)

### The parent spaces the children

When building lists or grids:

* Build list/grid items as separate components
* Use the list/grid container to space children
* To space them horizontally, use `margin-left`
* To space them vertically, use `margin-top`
* Select the `first-child` to reset margins

Good
```typescript jsx
import styles from './index.module.scss'

const Reviews = ({ items }) =>
  <div className={styles.container}>
    {items.map(item =>
      <img src={item.image} alt={item.title} />
    )}
  </div>;

export default Reviews;
```

```scss
.container > img {
  margin-left: 10px;
}

.container > img:first-child {
  margin-left: unset;
}
```

[&#8593;Up](#table-of-contents)

### Nested classes aren't for providing scope

CSS modules already provides us scope. We don't need to use nested classes
for providing scope isolation. Use nested class selectors for modifying
children based on parent class. A use case is when a component is in
error or success state:

Good
```typescript jsx
import styles from './index.module.scss';
import classNames from "classnames";

const Input = ({ value, onChange, error }) =>
  <div className={classNames({ [styles.error]: error })}>
    <input onChange={onChange} />
    <p>{error}</p>
  </div>;

export default Input;
```

```scss
.error p {
  color: red;
  display: unset;
}
```

Bad
```typescript jsx
import styles from './index.module.scss'

const Button = ({ children }) =>
  <button className={styles.button}>
    <img className={styles.icon} />
    {children}
  </button>

export default Button
```

```scss
.button {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}

.button .icon {
  width: 22px;
  height: 22px;
}
```

### Variables, lots of variables!

Try to add every time variables if add new `color`, some things which can be reusable.

Good
```scss
$blockShadow: 0 2px 4px 0 $colorShadowBlock;
$tooltipShadow: 0 2px 8px 0 $colorTooltipShadow;
$borderPrimary: 3px solid $colorPrimary;
```

[&#8593;Up](#table-of-contents)


