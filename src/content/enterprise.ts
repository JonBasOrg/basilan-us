import "server-only";
import {loadEditorial} from "@/lib/editorial.server";
const content=loadEditorial();
export const about=content.about;
export const expertise=content.expertise;
export const awards=content.awards;
export const certifications=content.certifications;
export const reviewMode=process.env.PORTFOLIO_REVIEW_PREVIEW==="1";
