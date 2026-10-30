const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');const {load}=require('./helpers.cjs');
test('enterprise cards favor readable descriptions over empty screenshot panels',()=>{
 const React=require('react');const {renderToStaticMarkup}=require('react-dom/server');const {ProjectCard}=load('src/components/projects/ProjectCard.tsx');const base=JSON.parse(fs.readFileSync('content/projects/trading-platform.json','utf8'));const html=renderToStaticMarkup(React.createElement(ProjectCard,{project:{...base,kind:'employer',useMockup:undefined,image:null},emphasize:false}));assert.ok(html.includes('data-enterprise-card'));assert.ok(!html.includes('aspect-[16/10]'));assert.ok(html.includes(base.description));
});
