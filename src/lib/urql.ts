import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";

const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
	url:
		process.env.API_URL || "https://api-sa-east-1.hygraph.com/v2/clddghjo5008501un2wbi9ejm/master",
	fetchOptions: { headers: { authorization: `Bearer ${process.env.PRODUCTION_KEY}` || "" } },
	exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
});

export { client, ssrCache };
