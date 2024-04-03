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
import { JSON } from "@utility/types/json";

let a: JSON = { "b": 1 };
// Looks fine in IDE

let b: JSON = "testing";
// Shows error in IDE

```
