import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
    publicRoutes : ["/", "/api/webhooks/clerk", "/:freelancerId"]
});
 
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};