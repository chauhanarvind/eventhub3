// import { NextRequest, NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL("", req.url));
//   }

//   try {
//     jwt.verify(token, process.env.JWTSECRETKEY || "");

//     return NextResponse.next();
//   } catch (err) {
//     return NextResponse.redirect(new URL("", req.url));
//   }
// }

// export const config = {
//   matcher: ["/api/:path*"],
// };