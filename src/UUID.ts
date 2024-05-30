/**
 * Represents a UUID (Universally Unique Identifier) with enforced format for version 4 UUIDs.
 *
 * Note: TypeScript does not currently support regex-based types. The current definition ensures that parts of the UUID are strings, but it does not validate their length.
 * See: https://github.com/microsoft/TypeScript/issues/6579
 */
export type UUID4 = `${string}-${string}-4${string}-${string}`;
