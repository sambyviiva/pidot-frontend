import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { eventRouter } from "../../../../server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: eventRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
