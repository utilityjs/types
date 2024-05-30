# @utility/types

[![JSR Version](https://jsr.io/badges/@utility/string)](https://jsr.io/@utility/string)
[![JSR Score](https://jsr.io/badges/@utility/string/score)](https://jsr.io/@utility/string/score)
[![License](https://img.shields.io/github/license/utilityjs/string.svg?label=License)](/LICENSE)

Collection of commonly used types

## Install

```shell
deno add @utility/types
```

## Usage

```typescript
import { JSONObject } from "@utility/types/json";

let a: JSONObject = { "b": 1 };
// Looks fine in IDE

let b: JSONObject = "testing";
// Shows error in IDE
```
