/**
 * Type alias for JSON primitive values.
 * This includes all the basic types that can be represented in JSON.
 */
export type JSONPrimitive = string | boolean | number | null | undefined;

/**
 * Type alias for arrays in JSON.
 * It's an array that can contain any type of JSONValue.
 */
export type JSONArray = JSONValue[];

/**
 * Union type for any value that can be found in a JSON structure.
 * This includes objects, arrays, and primitives.
 */
export type JSONValue = JSONObject | JSONArray | JSONPrimitive;

/**
 * Type alias for objects in JSON.
 * It represents an object with string keys and JSONValue values.
 */
export type JSONObject = {
  [key: string]: JSONValue;
};
