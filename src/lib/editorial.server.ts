import "server-only";
import {existsSync,readFileSync} from "node:fs";
import {join} from "node:path";
export interface About {summary:string;paragraphs:string[]}
export interface Expertise {id:string;title:string;description:string;technologies:string[];projectSlugs:string[]}
export interface Award {title:string;year:number;issuer:string|null;description:string}
export interface Certification {title:string;issuer:string;description:string}
type RecordDoc = {approval?:string;confidentiality?:string;publicVisible?:boolean};
const display = (record:RecordDoc, review:string|undefined) => record.publicVisible===true && record.confidentiality==="public" && (record.approval==="approved" || review==="1" && record.approval==="pending");
export function loadEditorial(directory=join(process.cwd(),"content/editorial"),review=process.env.PORTFOLIO_REVIEW_PREVIEW):{about:About;expertise:Expertise[];awards:Award[];certifications:Certification[]} {
 const read=(file:string) => {const p=join(directory,file);return existsSync(p)?JSON.parse(readFileSync(p,"utf8")):null;};
 const profile=read("about.json");const skills=read("expertise.json");const recognition=read("awards.json");const credentials=read("certifications.json");
 return {
  about:profile && display(profile,review)?{summary:profile.summary,paragraphs:profile.paragraphs}:{summary:"Practical engineering. Thoughtful systems. Explore the projects and the technology behind them.",paragraphs:[]},
  expertise:((skills?.entries ?? []) as (Expertise & RecordDoc)[]).filter(item=>display(item,review)).map(({id,title,description,technologies,projectSlugs})=>({id,title,description,technologies,projectSlugs})),
  certifications:((credentials?.entries ?? []) as (Certification & RecordDoc)[]).filter(item=>display(item,undefined) && !!item.issuer).map(({title,issuer,description})=>({title,issuer,description})),
  awards:((recognition?.entries ?? []) as (Award & RecordDoc)[]).filter(item=>display(item,undefined) && !!item.issuer).map(({title,year,issuer,description})=>({title,year,issuer,description})),
 };
}
