# adhere-scroll

## Overview

A javascript plugin that makes the element "position: fixed" when scrolling.

## Badge

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/62b3b14162924916903db8aa6caf8152)](https://www.codacy.com/manual/ishi720/adhere-scroll?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ishi720/adhere-scroll&amp;utm_campaign=Badge_Grade)

### Install

```shell
yarn install adhere-scroll
```

### Sample Code 

```javascript
var targetEle = new AdhereScroll('.header', {
    'stopPosition': 0,
    'style': {
        'zIndex': 100,
        'backgroundColor': "#FFF",
        'color': "#000",
        'fontWeight': "bold",
        'fontSize': '2em',
        'padding': '3px 10px'
    }
});

targetEle.start();
````
