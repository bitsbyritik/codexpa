import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter, createTRPCContext } from "@codexpa/api";
import { NextRequest } from "next/server";

const handler = async (req: NextRequest) => {
  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: () => createTRPCContext({ headers: req.headers }),
    onError({ error, path }) {
      // eslint-disable-next-line no-console
      console.error(`>>> tRPC Error on '${path}'`, error);
    },
  });

  return response;
};

export { handler as GET, handler as POST };
