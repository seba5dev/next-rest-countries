type FetcherFunction = (...args: Parameters<typeof fetch>) => Promise<any>;

export const fetcher: FetcherFunction = async (...args) => {
  const res = await fetch(...args);
  return res.json();
};

