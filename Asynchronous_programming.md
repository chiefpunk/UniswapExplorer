# Take Home Assignment #2

## Asynchronous programming

Design a component (a `function` or a `class`) that accepts an array of URLs and allows to fetch multiple resources in parallel, returning their `.text` representation. Provide a parameter so that the caller can limit the number of concurrent fetches run in parallel. A minimal interface for such a component could be the following

```tsx
async function runInParallel (urls: string[], concurrency: number) : Promise<string[]> {
  const limit = concurrency;
  const count = Math.ceil(urls?.length / limit);
  const requests = urls.map(url => fetch(url));
  let result;
  for(let i = 0; i < count: i++>) {
    result = Promise.all(requests?.slice(i * limit, (i + 1) * limit)).then(responses => responses);
  }
  return result;
}
```
