# evaluate gg.js

## usage

- `id` : id of book
- `x` : parsed number from hash of image file

```sh
LTN_URL=https://raw.githubusercontent.com/syrflover/ltn/master/src/main.ts

deno run --allow-net $LTN_URL <id> <x>
```

## example

```jsonc
// deno run --allow-net $LTN_URL 2277336 2828
{
    "m": 1, // using caculate subdomain of image url
    "b": "1681956001", // path segment of image url
}
```
