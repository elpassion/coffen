export type ErrorsForValues<V> = { [K in keyof V]?: string | undefined };
