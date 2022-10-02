
# EpicGames

A Simple NPM Package to get EpicGames info


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Reference Sheet

| Method             | Data                                                                |
| ----------------- | ------------------------------------------------------------------ |
| getStore() | No Data Needed |
| getStoreByCountry(string) | Data Needed (US) |
| getNews() | No Data Needed |
| getNewsByLocale(string) | Data Needed (en-US) |
| getFreeGames() | No Data Needed |


## Installation

Install [@akenodev/epicgames](https://www.npmjs.com/package/@akenodev/epicgames) with npm

```bash
  npm install @akenodev/epicgames
```
    
## Usage/Examples

```javascript
const EpicGames = require("@akenodev/epicgames")
const epic = new EpicGames();

epic.getNews().then((res) => {
    console.log(res)
})
```


## Support

For support, join [Our Discord Server](https://discord.gg/d9fd8CHWP3)
