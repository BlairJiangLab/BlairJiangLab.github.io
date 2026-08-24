import{j as e,m as A}from"./motion-D88nQ0J8.js";import{a as z,R as k,u as P,r as x,L as d,N as L,b as v,c as b,B as q,d as F,e as m}from"./react-CpPsYu-k.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&t(h)}).observe(document,{childList:!0,subtree:!0});function r(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(i){if(i.ep)return;i.ep=!0;const l=r(i);fetch(i.href,l)}})();var E,_=z;E=_.createRoot,_.hydrateRoot;const y={},I=k.createContext(y);function g(s){const n=k.useContext(I);return k.useMemo(function(){return typeof s=="function"?s(n):{...n,...s}},[n,s])}function H(s){let n;return s.disableParentContext?n=typeof s.components=="function"?s.components(y):s.components||y:n=g(s.components),k.createElement(I.Provider,{value:n},s.children)}function V(){const{pathname:s,hash:n}=P();return x.useEffect(()=>{if(n){const r=document.querySelector(n);if(r){r.scrollIntoView({behavior:"smooth"});return}}window.scrollTo(0,0)},[s,n]),null}function c({children:s,size:n="default",className:r=""}){const t={narrow:"max-w-2xl",default:"max-w-5xl",wide:"max-w-6xl"};return e.jsx("div",{className:`mx-auto px-6 sm:px-8 ${t[n]} ${r}`,children:s})}/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O=(...s)=>s.filter((n,r,t)=>!!n&&t.indexOf(n)===r).join(" ");/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=x.forwardRef(({color:s="currentColor",size:n=24,strokeWidth:r=2,absoluteStrokeWidth:t,className:i="",children:l,iconNode:h,...u},R)=>x.createElement("svg",{ref:R,...J,width:n,height:n,stroke:s,strokeWidth:t?Number(r)*24/Number(n):r,className:O("lucide",i),...u},[...h.map(([W,$])=>x.createElement(W,$)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=(s,n)=>{const r=x.forwardRef(({className:t,...i},l)=>x.createElement(U,{ref:l,iconNode:n,className:O(`lucide-${X(s)}`,t),...i}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=a("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=a("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=a("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=a("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=a("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=a("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=a("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=a("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=a("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=a("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function te(){const[s,n]=x.useState(()=>{if(typeof window>"u")return"light";const t=localStorage.getItem("theme");return t==="light"||t==="dark"?t:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});return x.useEffect(()=>{const t=document.documentElement;s==="dark"?t.classList.add("dark"):t.classList.remove("dark");try{localStorage.setItem("theme",s)}catch{}},[s]),[s,()=>n(t=>t==="dark"?"light":"dark")]}function ie(){const[s,n]=te();return e.jsx("button",{onClick:n,"aria-label":`Switch to ${s==="dark"?"light":"dark"} mode`,className:"p-2 rounded-md text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:s==="dark"?e.jsx(re,{size:18}):e.jsx(ne,{size:18})})}const le=[{to:"/",label:"Home",end:!0},{to:"/work",label:"Work"},{to:"/blog",label:"Notes"},{to:"/about",label:"About"}];function de(){const n=P().pathname==="/";return e.jsx("header",{className:`sticky top-0 z-40 backdrop-blur-md bg-bg/80 dark:bg-bg-dark/80 border-b border-border transition-colors ${n?"border-transparent":""}`,children:e.jsx(c,{size:"wide",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx(d,{to:"/",className:"font-serif text-lg font-semibold tracking-tight text-fg dark:text-fg-dark hover:text-accent transition-colors",children:"Blair"}),e.jsxs("nav",{className:"flex items-center gap-1 sm:gap-2",children:[le.map(r=>e.jsx(L,{to:r.to,end:r.end,className:({isActive:t})=>`px-3 py-1.5 text-sm rounded-md transition-colors ${t?"text-fg dark:text-fg-dark":"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark"}`,children:r.label},r.to)),e.jsx("div",{className:"ml-1 pl-2 border-l border-border",children:e.jsx(ie,{})})]})]})})})}function ce(){return e.jsx("footer",{className:"mt-32 border-t border-border py-12",children:e.jsxs(c,{size:"wide",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-base font-semibold text-fg dark:text-fg-dark",children:"Blair"}),e.jsx("p",{className:"text-sm text-muted dark:text-muted-dark mt-1",children:"Selected work and field notes."})]}),e.jsxs("div",{className:"flex items-center gap-5 text-sm",children:[e.jsx(d,{to:"/work",className:"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:"Work"}),e.jsx(d,{to:"/blog",className:"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:"Notes"}),e.jsx(d,{to:"/about",className:"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:"About"}),e.jsxs("a",{href:"/rss.xml",className:"text-muted dark:text-muted-dark hover:text-accent transition-colors flex items-center gap-1.5","aria-label":"RSS feed",children:[e.jsx(se,{size:14}),e.jsx("span",{children:"RSS"})]})]})]}),e.jsxs("div",{className:"mt-8 text-xs text-muted dark:text-muted-dark",children:["© ",new Date().getFullYear()," · Built with care"]})]})})}function he(){return e.jsx("section",{className:"pt-16 sm:pt-24 pb-20 sm:pb-28",children:e.jsx(c,{size:"wide",children:e.jsxs(A.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:"max-w-3xl",children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"Portfolio · Notes · Tools"}),e.jsxs("h1",{className:"mt-5 font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-fg dark:text-fg-dark",children:["Welcome to ",e.jsx("span",{className:"text-accent italic",children:"Blair's Log"})]}),e.jsx("p",{className:"mt-7 text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-2xl",children:"Product manager, focusing on search and AI, selected work and the thinking behind it"}),e.jsxs("div",{className:"mt-10 flex items-center gap-4",children:[e.jsxs(d,{to:"/work",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg dark:bg-fg-dark text-bg dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity",children:["See the work",e.jsx(Q,{size:14})]}),e.jsx(d,{to:"/blog",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-fg dark:text-fg-dark text-sm font-medium hover:border-accent hover:text-accent transition-colors",children:"Read the notes"})]})]})})})}function w({item:s,index:n=0,featured:r=!1}){return e.jsx(A.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.4,delay:n*.05,ease:"easeOut"},children:e.jsxs(d,{to:`/work/${s.slug}`,className:"group block overflow-hidden rounded-lg border border-border bg-card dark:bg-card-dark transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",children:[e.jsx("div",{className:"relative aspect-[16/10] overflow-hidden bg-border",children:e.jsx("img",{src:s.cover,alt:s.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"})}),e.jsxs("div",{className:"p-5 sm:p-6",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"font-serif text-lg sm:text-xl font-semibold text-fg dark:text-fg-dark leading-tight",children:s.title}),e.jsxs("div",{className:"mt-1.5 text-xs text-muted dark:text-muted-dark flex items-center gap-2 flex-wrap",children:[e.jsx("span",{children:s.role}),e.jsx("span",{className:"opacity-50",children:"·"}),e.jsx("span",{children:s.year})]})]}),e.jsx(K,{size:18,className:"text-muted dark:text-muted-dark group-hover:text-accent transition-colors flex-shrink-0 mt-1"})]}),e.jsx("p",{className:"mt-3 text-sm text-muted dark:text-muted-dark line-clamp-2",children:s.summary}),r&&s.tags.length>0&&e.jsx("div",{className:"mt-4 flex gap-1.5 flex-wrap",children:s.tags.slice(0,3).map(t=>e.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded-full border border-border text-muted dark:text-muted-dark",children:t},t))})]})]})})}const xe={title:"ShadowCoach",slug:"shadow-coach",cover:"/covers/currents.svg",role:"Product & Vibe Coding",year:2026,tags:["AI","Vibe Coding","Agent"],summary:"我 Vibe Coding 了一个 AI 求职教练",links:{live:"https://www.shadowcoach.cn/",repo:""},featured:!0,order:1};function C(s){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...g(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:e.jsxs(n.em,{children:["Things I’ve shipped：",e.jsx(n.a,{href:"https://www.shadowcoach.cn/",children:"ShadowCoach"})]})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["当前由于认证问题暂不对外开放注册。如需内测体验，请通过邮件联系作者：",e.jsx(n.a,{href:"mailto:tb.jiang@outlook.com",children:"tb.jiang@outlook.com"}),"。"]}),`
`]}),`
`,e.jsx(n.p,{children:"ShadowCoach 是一款 AI 简历优化工具。用户上传简历并输入目标岗位 JD 后，系统会分析岗位要求与候选人经历，识别信息缺口，必要时主动追问，再生成针对岗位优化的简历。"}),`
`,e.jsx(n.p,{children:"我通过这个项目跑通了从需求调研、产品设计、Agent 架构迭代，到登录、支付和部署的完整 Vibe Coding 流程。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"1. WHY：为什么做这个项目"}),`
`,e.jsx(n.h3,{children:"从想法拆解到需求收缩"}),`
`,e.jsx(n.p,{children:"最初，我想寻找一个可以由个人完成闭环的项目，验证“一个人 + AI”能否真正完成从需求发现、产品开发到获得商业收入的全过程。以此为目标，我认为项目选题需要满足以下条件："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"存在真实需求、目标用户和可验证的市场；"}),`
`,e.jsx(n.li,{children:"有竞品未满足的需求空间；"}),`
`,e.jsx(n.li,{children:"可以在线完成获客、使用和付费，不依赖线下资产、地推或专业知识库；"}),`
`,e.jsx(n.li,{children:"不涉及医疗、法律等高风险决策场景，降低错误结果可能带来的严重影响；"}),`
`,e.jsx(n.li,{children:"实现复杂度可控，能够快速推出 MVP 并验证核心需求。"}),`
`]}),`
`,e.jsx(n.p,{children:"求职辅助与职业规划 Agent 基本符合这些条件。但完整的职业规划涉及大量场景，初期范围仍然过大，因此我先将需求收缩为一个更明确的任务："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"根据目标岗位的 JD，帮助用户有针对性地优化简历。"}),`
`]}),`
`,e.jsx(n.p,{children:"接下来需要验证两个问题：用户是否确实存在这一需求，以及现有产品为什么还没有充分解决它。"}),`
`,e.jsx(n.h3,{children:"需求与竞品调研"}),`
`,e.jsx(n.p,{children:"需求上，社交平台上可以看到有大量用户找业内资深人员辅助修改简历、模拟面试等求职诉求。Agent 的目标应当是能够达到真实资深从业者的修改水平与信任感。其次，在求职时针对不同 JD，用户常有进行针对性微调的诉求，产品能一键调整优化，省时省力。"}),`
`,e.jsx(n.p,{children:"已有的产品上，当前可以分为两类："}),`
`,e.jsx(n.h4,{children:"1. 通用 AI"}),`
`,e.jsx(n.p,{children:"使用 ChatGPT、DeepSeek 等通用模型优化简历很方便，但实际效果并不稳定："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"模型容易停留在关键词匹配，没有理解岗位真正关注的能力；"}),`
`,e.jsx(n.li,{children:"为了迎合 JD，可能添加用户没有提供的经历或成果，难以建立信任；"}),`
`,e.jsx(n.li,{children:"多轮修改时，局部要求可能导致整份简历发生变化，部分产品无法直接输出文档结果。"}),`
`]}),`
`,e.jsx(n.h4,{children:"2. 简历优化垂直产品"}),`
`,e.jsx(n.p,{children:"这类产品主要集中在简历模板、ATS 评分、JD 匹配和一键改写："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"优化结果偏重关键词和格式，缺少对经历结构与叙事逻辑的改善；"}),`
`,e.jsx(n.li,{children:"修改过程缺少原因说明，用户难以判断内容是否可信；"}),`
`,e.jsx(n.li,{children:"对局部修改和多轮持续优化的支持有限。"}),`
`]}),`
`,e.jsx(n.h3,{children:"ShadowCoach 的切入点"}),`
`,e.jsx(n.p,{children:"基于这些观察，我为 ShadowCoach 确定了三个核心方向："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"让简历表达更清晰、更契合、更可信"})}),`
`,e.jsx(n.p,{children:"优化经历的结构和叙事逻辑，避免流水账式描述，并说明关键修改的原因。生成前抽取简历事实，生成后检查新增内容和修改范围，避免编造经历。"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"在证据不足时主动追问"})}),`
`,e.jsx(n.p,{children:"识别简历与 JD 之间的证据缺口。当关键信息不足时，先向用户提问，再使用用户确认过的事实进行优化。"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"支持可控的持续修改"})}),`
`,e.jsx(n.p,{children:"用户可以通过多轮对话继续调整简历，也可以只修改指定部分，避免一个局部要求影响全文。最终结果可以直接导出使用。"}),`
`]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"2. HOW：产品方案与架构演进"}),`
`,e.jsx(n.h3,{children:"产品功能：从一次生成到持续优化"}),`
`,e.jsx(n.p,{children:"ShadowCoach 的第一版只完成了一件事：用户上传简历和目标岗位 JD，系统生成一份优化稿。这个流程适合快速验证需求，但一次生成很难直接得到可以投递的最终版本。"}),`
`,e.jsxs(n.p,{children:["用户通常还会继续提出更具体的要求，例如强化某段经历、调整表达语气、压缩内容，或者只修改其中一个模块。因此，第一个重要改动是加入",e.jsx(n.strong,{children:"多轮对话持续调优"}),"：系统保留当前版本和对话上下文，用户可以围绕已有结果继续修改，而不必每次重新生成整份简历。"]}),`
`,e.jsxs(n.p,{children:["第二个改动来自另一个更关键的问题：当 JD 需要某项能力，而用户简历中没有相关信息时，系统不应该直接猜测或跳过。为此，我加入了",e.jsx(n.strong,{children:"证据不足时主动追问"}),"的能力。系统先识别岗位要求与现有经历之间的信息缺口，再决定直接生成，还是先请用户补充事实。"]}),`
`,e.jsx(n.p,{children:"产品流程因此从一次改写，逐步演进为："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`上传简历与 JD
→ 分析岗位和候选人经历
→ 判断证据是否充分
→ 主动追问或生成优化稿
→ 查看修改原因
→ 通过多轮对话继续局部优化
→ 导出简历
`})}),`
`,e.jsx(n.p,{children:"这两个功能改动也推动了底层架构的持续调整。"}),`
`,e.jsx(n.h3,{children:"第一阶段：单 Prompt + Dify"}),`
`,e.jsx(n.p,{children:"第一版采用单 Prompt：模型在一次调用中完成 JD 理解、简历分析和内容改写。工作流最初通过 Dify 实现，优点是搭建速度快，适合验证最基本的产品链路。"}),`
`,e.jsx(n.p,{children:"但在持续测试中，单 Prompt 的问题反复出现："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"同一份输入多次生成，优化结果差异较大；"}),`
`,e.jsx(n.li,{children:"多轮对话缺少稳定记忆，前后内容和格式容易跳变；"}),`
`,e.jsx(n.li,{children:"用户只要求修改局部内容时，模型可能改动整份简历；"}),`
`,e.jsx(n.li,{children:"对经历的结构化和表达逻辑优化不足；"}),`
`,e.jsx(n.li,{children:"某些情况下输出与原文几乎没有区别，没有产生实际优化。"}),`
`]}),`
`,e.jsx(n.p,{children:"与此同时，Dify 在较长任务中频繁出现超时。它适合快速搭建原型，但无法满足生产环境对稳定性、超时控制和问题排查的要求。"}),`
`,e.jsx(n.p,{children:"这些现象说明，继续在一个 Prompt 中增加规则并不能解决根本问题。岗位分析、事实理解、结构规划和文字改写需要被拆开处理，多轮状态也需要由系统显式管理。"}),`
`,e.jsx(n.h3,{children:"第二阶段：多阶段固定 Workflow"}),`
`,e.jsx(n.p,{children:"第二版将一次大模型调用拆分为多个固定节点："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`解析简历与 JD
→ 分析岗位要求
→ 抽取候选人经历
→ 规划优化方向
→ 生成简历
→ 检查结果
`})}),`
`,e.jsx(n.p,{children:"每个节点只负责一类任务，使输出比单 Prompt 更稳定，也更容易定位问题。多轮修改时，系统可以保留当前简历版本，并将修改范围传递给对应节点，从而减少无关内容和格式发生变化。"}),`
`,e.jsx(n.p,{children:"这一阶段也将模型调用从 Dify 迁移到 Node.js 后端直连。系统可以自行管理调用超时、失败重试、阶段日志和模型参数，更适合继续开发和线上运行。"}),`
`,e.jsx(n.p,{children:"固定 Workflow 改善了稳定性，但仍然存在两个明显限制。"}),`
`,e.jsx(n.p,{children:"第一，不同岗位关注的核心能力并不相同。固定节点可以完成通用分析，却很难根据具体 JD 动态决定应该重点判断哪些能力，以及是否需要调整简历结构。"}),`
`,e.jsx(n.p,{children:"第二，当简历缺少岗位需要的相关经历时，固定流程仍然会继续执行，不会主动暂停并要求用户补充信息。"}),`
`,e.jsx(n.p,{children:"这两个问题都需要系统根据当前上下文动态决定下一步，而不是始终执行相同的节点顺序。"}),`
`,e.jsx(n.h3,{children:"第三阶段：在固定流程中引入 Agentic Workflow"}),`
`,e.jsx(n.p,{children:"第三版没有推翻原有 Workflow，而是在关键判断环节引入 Agentic Workflow。"}),`
`,e.jsx(n.p,{children:"Agent 先结合 JD 和候选人经历判断当前岗位最需要关注的能力，再决定后续应该使用哪些分析与改写步骤。如果关键能力缺少事实支持，Agent 可以暂停生成并发起追问；用户补充信息后，再回到后续优化流程。"}),`
`,e.jsx(n.p,{children:"它主要解决了两个问题："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"针对不同岗位识别不同的分析重点，并据此调整简历的内容重点和结构；"}),`
`,e.jsx(n.li,{children:"在证据不足时主动追问，而不是继续生成或编造内容。"}),`
`]}),`
`,e.jsx(n.p,{children:"固定 Workflow 继续负责简历解析、事实抽取、内容生成和结果检查等相对确定的任务；Agent 只负责那些需要根据上下文动态判断的环节。最终形成的是固定流程与 Agent 决策结合的混合架构。"}),`
`,e.jsx(n.h3,{children:"为什么没有直接改成纯 Agent 架构"}),`
`,e.jsx(n.p,{children:"引入 Agentic Workflow 后，一个自然的问题是：为什么不让 Agent 接管整个流程？"}),`
`,e.jsx(n.p,{children:"首先，现有固定 Workflow 已经跑通，通用场景下的效果也基本可用。完全重构为纯 Agent，意味着重新设计工具、状态、上下文和执行边界，改动成本较高，也会增加新的不确定性。"}),`
`,e.jsx(n.p,{children:"其次，完整流程的调用时间已经较长。如果每一步都由 Agent 动态规划和调用，整体延迟与模型成本还会继续上升，而用户未必能够感知到对应的价值提升。"}),`
`,e.jsx(n.p,{children:"因此，我选择先保留已经有效的固定流程，只在它无法解决的动态判断环节引入 Agent。先跑通完整产品闭环，再根据真实使用中的问题继续迭代，而不是为了架构形式提前完成一次大规模重构。"}),`
`,e.jsx(n.h3,{children:"模型选择：中文能力接近时优先考虑成本"}),`
`,e.jsx(n.p,{children:"在模型选择上，我主要比较了 DeepSeek、Kimi 和 GPT 的中文简历改写表现，包括语言自然度、结构调整和对修改要求的理解。"}),`
`,e.jsx(n.p,{children:"从现阶段的主观测试体感来看，三者在这个任务上的差距并不明显，还不足以抵消调用成本上的差异。因此，实验阶段优先使用 DeepSeek Pro，同时保留模型切换能力，便于后续根据质量、速度和成本继续比较。"}),`
`,e.jsx(n.h3,{children:"从原型补齐为可使用的产品"}),`
`,e.jsx(n.p,{children:"AI 工作流跑通后，项目仍然只是一个功能原型。为了完成从使用到交易的闭环，我继续补齐了文件解析、登录、额度、支付、版本管理、导出文档等能力。"}),`
`,e.jsx(n.p,{children:"目前 ShadowCoach 已实现："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Word、PDF 和文本简历输入；"}),`
`,e.jsx(n.li,{children:"JD 匹配与能力诊断；"}),`
`,e.jsx(n.li,{children:"证据缺口识别与主动追问；"}),`
`,e.jsx(n.li,{children:"简历生成和局部多轮优化；"}),`
`,e.jsx(n.li,{children:"修改高亮、原因说明与版本管理；"}),`
`,e.jsx(n.li,{children:"TXT、Word 和 PDF 导出；"}),`
`,e.jsx(n.li,{children:"登录、额度和支付宝支付；"}),`
`,e.jsx(n.li,{children:"多模型适配、超时重试。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"3. Thoughts & Experiences：复盘体会"}),`
`,e.jsx(n.h3,{children:"复杂任务中，Prompt 不能替代架构"}),`
`,e.jsx(n.p,{children:"Prompt 适合约束单次任务，但当任务同时涉及理解、判断、状态变化和结果验证时，继续增加规则只会把复杂度藏在一段文本里。"}),`
`,e.jsx(n.p,{children:"更有效的方式是拆分职责：让每个阶段只处理一类问题，并通过明确的输入、输出和校验条件连接起来。架构并不能保证模型永远正确，但可以让错误更容易发现、定位和修复。"}),`
`,e.jsx(n.h3,{children:"追问不是生成失败，而是产品能力"}),`
`,e.jsx(n.p,{children:"很多 AI 产品默认用户提交信息后就应该立即给出答案。但信息不足时，立即生成往往意味着猜测。"}),`
`,e.jsx(n.p,{children:"与其输出一份流畅但失真的简历，不如先提出一个准确的问题。一次好的追问可以补充事实、校正理解，也能让用户知道系统为什么无法直接下结论。"}),`
`,e.jsx(n.p,{children:"从这个角度看，追问不是模型能力不足的补救措施，而是人机协作流程的一部分。但这一点仍需要真实用户的反馈验证。"}),`
`,e.jsx(n.h3,{children:"Vibe Coding 改变了瓶颈，但没有替代产品判断"}),`
`,e.jsx(n.p,{children:"AI 显著提高了页面开发、代码修改和问题排查的效率，让一个人完成前后端、模型接入、支付和部署成为可能。但实现成本下降之后，真正的瓶颈转移到了需求选择、质量标准和架构取舍。"}),`
`,e.jsx(n.p,{children:"AI 可以快速生成一个可运行的版本，却不会自动判断这个功能是否值得做、结果是否足够可信，以及什么时候应该停止增加功能。因此，Vibe Coding 降低了“做出来”的门槛，也让“为什么做”和“做到什么程度”变得更加重要。"}),`
`,e.jsx(n.h3,{children:"从 Demo 到产品，主要工作发生在主流程之外"}),`
`,e.jsx(n.p,{children:"“输入简历和 JD，输出优化稿”很快就能做出演示，但一个真实可用的产品还需要处理文件格式、登录状态、额度、支付、失败重试、版本恢复、结果导出和线上部署。"}),`
`,e.jsx(n.p,{children:"这些工作不一定展示模型能力，却直接决定用户能否顺利完成一次完整任务。对个人开发者而言，跑通主流程只是开始，补齐异常与交易闭环才是从 Demo 走向产品的关键一步。"}),`
`,e.jsx(n.h3,{children:"模型也会“偷懒”"}),`
`,e.jsx(n.p,{children:"在开发过程中，我有过两次比较明显的重构尝试：一次是将现有架构调整为更灵活、自主性更强的 Agent；另一次是按照新的设计方案重做 UI 交互。"}),`
`,e.jsx(n.p,{children:"两次尝试都暴露出类似的问题：模型倾向于选择更容易实现、对现有代码改动更小的方案，而不是优先考虑最终效果。"}),`
`,e.jsx(n.p,{children:"在最初讨论架构时，即使我希望通过 Agent 获得更灵活的决策效果，模型仍然优先给出了固定 Workflow 方案。后续发现问题并明确要求调整为 Agent 架构后，它依然倾向于保留原有流程，只在局部增加判断节点或模型调用。即使反复说明重构目标和预期效果，模型也很少主动推翻已有设计，而是不断将新需求重新解释为对现有 Workflow 的增量修改。"}),`
`,e.jsx(n.p,{children:"UI 重构中也出现了类似的情况。即使已经提供较完整的交互说明和设计要求，模型仍然会大量复用现有组件、布局和样式，通过小范围调整来接近目标，而不是按照新的设计重新组织页面。最终结果往往在功能上“完成了修改”，但与预期的交互和视觉效果仍有明显差距。"}),`
`,e.jsx(n.p,{children:"这两次尝试让我意识到，充分表达需求并不一定能让模型真正执行结构性调整。在已有代码和架构的影响下，模型表现出了明显的路径依赖：优先复用现有实现、缩小改动范围，并尽快产出一个可以运行的结果。即使这条路径不能实现更好的产品效果，它仍然可能成为模型优先选择的方案。"}),`
`,e.jsx(n.p,{children:"后续进行较大改动时，我会尝试把“方案设计”和“代码实现”彻底拆开。先要求模型停止编码，只讨论架构、页面结构和交互方案；确认设计后，再将任务拆成明确的迁移步骤逐步执行。同时，需要明确指出哪些旧结构必须被替换，而不只是描述希望新增什么能力。"}),`
`,e.jsx(n.p,{children:"对于结构性重构，仅仅说明目标可能还不够，还需要明确重构边界，并限制模型继续沿用旧方案的空间。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"总结"}),`
`,e.jsx(n.p,{children:"ShadowCoach 从一个单 Prompt 原型，逐步演进为支持多轮优化、主动追问和结果校验的 AI 求职教练，并采用固定 Workflow 与 Agentic Workflow 结合的架构。"}),`
`,e.jsx(n.p,{children:"这个项目让我跑通了从需求调研、产品设计和 AI 工作流，到登录、支付与部署的完整 Vibe Coding 流程，也让我更加确认："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"让模型负责理解与生成，让系统负责事实、状态与执行边界；让 AI 提高实现效率，但不替代产品判断。"}),`
`]})]})}function je(s={}){const{wrapper:n}={...g(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(C,{...s})}):C(s)}const oe=Object.freeze(Object.defineProperty({__proto__:null,default:je,frontmatter:xe},Symbol.toStringTag,{value:"Module"})),ae={title:"Remote Sensing Benchmark",slug:"remote-sensing-benchmark",date:"2026-08-24",tags:["remote sensing","benchmark","AI evaluation"],summary:"关于如何从真实职业任务和专业交付物出发，设计端到端遥感 AI Benchmark的一些思考",featured:!0};function D(s){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...g(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"1. 概述"}),`
`,e.jsx(n.p,{children:"现有遥感benchmark主要评估模型的影像理解、专业问答、空间推理和工具调用能力，但较少从真实职业出发，评价模型能否完成可直接交付的工作成果。"}),`
`,e.jsx(n.p,{children:"本文参考GDPval[1]，以遥感相关职业及其真实工作任务为基础，构建包含prompt、参考文件、专家交付物和评分标准的职业任务benchmark，评价模型完成遥感专业交付物的能力。"}),`
`,e.jsx(n.p,{children:"本文的核心目标是构建一个以遥感相关职业为入口、以真实工作交付物为评测对象、以职业专家评价为主要标准的端到端benchmark。"}),`
`,e.jsx(n.h3,{children:"1.1 GDPval的构造原则"}),`
`,e.jsx(n.p,{children:"GDPval的核心是将AI评测从知识问答转向真实职业交付物，主要遵循以下原则[1]："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"经济价值导向"}),"：根据行业GDP贡献、职业就业人数和工资水平筛选具有较高经济影响的职业。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"职业任务导向"}),"：任务由对应职业的从业专家创建，并映射到O*NET职业任务，以保证职业代表性。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"真实工作导向"}),"：任务来源于专家的实际工作经验，输入包括真实情境、参考文件和必要背景信息。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"交付物导向"}),"：模型需要生成文档、表格、演示文稿、图表等完整工作成果，而不是回答选择题或简短问题。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"专家质量控制"}),"：任务经过模型初筛、通用审核、职业专项审核和最终审核，并由原作者根据反馈修改。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"相对质量评价"}),"：同职业专家盲法比较模型与人类专家交付物，判断模型结果是优于、相当于还是差于专家结果。"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"自动评分辅助"}),"：自动grader用于降低重复评测成本，但人工专家评分仍是主要依据。"]}),`
`]}),`
`,e.jsx(n.p,{children:"GDPval的基本评测单元可表示为："}),`
`,`
`,e.jsx(n.p,{children:"这一方法适合迁移到遥感领域，但职业筛选不能简单照搬GDP贡献排序。遥感是跨行业使能技术，应同时考虑职业规模、遥感任务占比和应用代表性。"}),`
`,e.jsx(n.h3,{children:"1.2 当前Remote Sensing相关Benchmark情况"}),`
`,e.jsx(n.p,{children:"传统遥感benchmark主要评价分类、检测、分割和变化检测等单项算法能力；近期benchmark逐渐扩展到多模态问答、工具调用和Agent工作流，但大多按算法、数据集或工具组织，较少依据真实职业任务评价完整工作成果。"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"主要任务"}),e.jsx(n.th,{children:"代表Benchmark"}),e.jsx(n.th,{children:"主要评价方式"}),e.jsx(n.th,{children:"局限"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"单任务感知"}),e.jsx(n.td,{children:"分类、目标检测、语义分割、变化检测"}),e.jsx(n.td,{children:"BigEarthNet[9]、DOTA[10]、LoveDA[11]、LEVIR-CD[12]"}),e.jsx(n.td,{children:"Accuracy、F1、mAP、IoU"}),e.jsx(n.td,{children:"只评价单个算法环节"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"基础模型"}),e.jsx(n.td,{children:"跨数据集分类、分割与迁移"}),e.jsx(n.td,{children:"GEO-Bench[5]、PANGAEA[13]"}),e.jsx(n.td,{children:"汇总多个下游任务的性能"}),e.jsx(n.td,{children:"仍以标准视觉任务为主"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"多模态理解"}),e.jsx(n.td,{children:"遥感问答、影像解释、空间推理"}),e.jsx(n.td,{children:"GeoMMBench[14]、GEOBench-VLM[6]"}),e.jsx(n.td,{children:"问答或选择题准确率"}),e.jsx(n.td,{children:"能回答问题不代表能完成工作"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"工具与Agent"}),e.jsx(n.td,{children:"多步规划、工具调用、GIS或遥感处理"}),e.jsx(n.td,{children:"ThinkGeo[7]、GISAgentBench[8]"}),e.jsx(n.td,{children:"工具、过程及结果正确率"}),e.jsx(n.td,{children:"较少评价完整职业交付物"})]})]})]}),`
`,e.jsx(n.h2,{children:"2. Task Creation"}),`
`,e.jsx(n.h3,{children:"2.1 Prioritizing Occupations：Benchmark的维度和选取方法"}),`
`,e.jsx(n.p,{children:"不同于GDPval，遥感不是一个独立行业，而是一种跨行业的使能技术。"}),`
`,e.jsx(n.p,{children:"GDPval采用“行业—职业—任务”的组织逻辑："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`行业＝经济部门，如金融、医疗和制造
                  ↓
职业＝行业内的具体工作
                  ↓
任务＝职业人员完成的具体工作活动
`})}),`
`,e.jsx(n.p,{children:"遥感的特殊性在于："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`遥感不是独立行业，而是一种技术方法
                  ↓
同一个遥感职业可以服务于多个行业
                  ↓
农业监测、水资源评估、城市规划、灾害响应等
`})}),`
`,e.jsx(n.p,{children:"例如，Remote Sensing Scientists可能同时从事农业监测、水资源评估、城市规划和灾害响应；Precision Agriculture Technicians在进行农业监测时也会使用遥感技术，二者在职业技能和工作任务上存在交叉。"}),`
`,e.jsx(n.p,{children:"职业优先级综合考虑以下三个维度："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"维度"}),e.jsx(n.th,{children:"判断依据"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"遥感相关性"}),e.jsx(n.td,{children:"遥感、摄影测量或GIS是否构成主要工作内容"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"任务代表性"}),e.jsx(n.td,{children:"是否能够覆盖主要技术环节和应用方向"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"职业规模"}),e.jsx(n.td,{children:"就业人数、工资和劳动报酬规模"})]})]})]}),`
`,e.jsx(n.p,{children:"职业纳入需满足两项基本条件：一是遥感、摄影测量或GIS构成主要工作内容；二是具有可由计算机完成并形成明确交付物的代表性任务。在此基础上，优先选择能够共同覆盖数据处理、科学分析、摄影测量、GIS分析和测绘生产等主要环节的职业。"}),`
`,e.jsx(n.p,{children:"职业规模统一采用BLS 2025年5月OEWS全国职业就业与工资数据[3]，以就业人数与平均年薪的乘积作为劳动报酬规模代理。该指标用于辅助排序，不单独决定职业取舍。对于缺少独立OEWS统计的O*NET细分职业，母职业数据仅作为规模上限参考[4]。"}),`
`,e.jsx(n.h4,{children:"2.1.1 核心遥感与摄影测量职业"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"O*NET代码"}),e.jsx(n.th,{children:"职业名称"}),e.jsx(n.th,{style:{textAlign:"right"},children:"OEWS就业人数"}),e.jsx(n.th,{style:{textAlign:"right"},children:"OEWS平均年薪"}),e.jsx(n.th,{style:{textAlign:"right"},children:"规模代理值（人数×平均年薪）"}),e.jsx(n.th,{children:"数据性质"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-4099.03"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-4099.03",children:"Remote Sensing Technicians"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"73,910"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$66,280"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$4.90B"}),e.jsx(n.td,{children:"19-4099母职业代理"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-2099.01"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-2099.01",children:"Remote Sensing Scientists and Technologists"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"22,300"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$129,230"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$2.88B"}),e.jsx(n.td,{children:"19-2099母职业代理"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"17-1021.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/17-1021.00",children:"Cartographers and Photogrammetrists"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"14,260"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$86,690"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$1.24B"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"表面合计"})}),e.jsx(n.td,{}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.strong,{children:"110,470"})}),e.jsx(n.td,{style:{textAlign:"right"}}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.strong,{children:"$9.02B"})}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"包含母职业代理"})})]})]})]}),`
`,e.jsx(n.p,{children:"其中，19-4099.03使用“Life, Physical, and Social Science Technicians, All Other”的统计数据，19-2099.01使用“Physical Scientists, All Other”的统计数据。"}),`
`,e.jsx(n.h4,{children:"2.1.2 地理空间职业"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"O*NET代码"}),e.jsx(n.th,{children:"职业名称"}),e.jsx(n.th,{style:{textAlign:"right"},children:"OEWS就业人数"}),e.jsx(n.th,{style:{textAlign:"right"},children:"OEWS平均年薪"}),e.jsx(n.th,{style:{textAlign:"right"},children:"规模代理值（人数×平均年薪）"}),e.jsx(n.th,{children:"数据性质"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"15-1299.02"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/15-1299.02",children:"Geographic Information Systems Technologists and Technicians"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"435,370"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$122,230"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$53.22B"}),e.jsx(n.td,{children:"15-1299母职业代理"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"17-1022.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/17-1022.00",children:"Surveyors"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"50,830"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$80,570"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$4.10B"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"17-3031.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/17-3031.00",children:"Surveying and Mapping Technicians"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"58,010"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$58,000"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$3.36B"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"表面合计"})}),e.jsx(n.td,{}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.strong,{children:"544,210"})}),e.jsx(n.td,{style:{textAlign:"right"}}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.strong,{children:"$60.68B"})}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"包含母职业代理"})})]})]})]}),`
`,e.jsx(n.p,{children:"其中，15-1299.02使用“Computer Occupations, All Other”的统计数据；435,370人不能解释为GIS技术人员的实际就业人数。"}),`
`,e.jsx(n.h4,{children:"2.1.3 专业应用职业"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"O*NET代码"}),e.jsx(n.th,{children:"职业名称"}),e.jsx(n.th,{style:{textAlign:"right"},children:"OEWS就业人数"}),e.jsx(n.th,{style:{textAlign:"right"},children:"OEWS平均年薪"}),e.jsx(n.th,{style:{textAlign:"right"},children:"规模代理值（人数×平均年薪）"}),e.jsx(n.th,{children:"应用领域"}),e.jsx(n.th,{children:"数据性质"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-2041.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-2041.00",children:"Environmental Scientists and Specialists, Including Health"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"89,250"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$91,680"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$8.18B"}),e.jsx(n.td,{children:"环境监测"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-1031.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-1031.00",children:"Conservation Scientists"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"25,950"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$77,130"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$2.00B"}),e.jsx(n.td,{children:"保护区规划"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-4071.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-4071.00",children:"Forest and Conservation Technicians"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"30,410"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$59,060"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$1.80B"}),e.jsx(n.td,{children:"森林监测"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-1013.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-1013.00",children:"Soil and Plant Scientists"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"15,730"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$87,720"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$1.38B"}),e.jsx(n.td,{children:"土壤监测"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-4012.01"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-4012.01",children:"Precision Agriculture Technicians"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"15,130"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$53,840"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$0.81B"}),e.jsx(n.td,{children:"精准农业"}),e.jsx(n.td,{children:"19-4012母职业代理"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"19-2043.00"}),e.jsx(n.td,{children:e.jsx(n.a,{href:"https://www.onetonline.org/link/details/19-2043.00",children:"Hydrologists"})}),e.jsx(n.td,{style:{textAlign:"right"},children:"5,850"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$103,600"}),e.jsx(n.td,{style:{textAlign:"right"},children:"$0.61B"}),e.jsx(n.td,{children:"水资源监测"}),e.jsx(n.td,{children:"独立OEWS职业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.strong,{children:"表面合计"})}),e.jsx(n.td,{}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.strong,{children:"182,320"})}),e.jsx(n.td,{style:{textAlign:"right"}}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.strong,{children:"$14.78B"})}),e.jsx(n.td,{}),e.jsx(n.td,{children:e.jsx(n.strong,{children:"包含母职业代理"})})]})]})]}),`
`,e.jsx(n.p,{children:"其中，19-4012.01使用“Agricultural Technicians”的统计数据。"}),`
`,e.jsx(n.p,{children:"综合职业规模、遥感相关性和任务代表性，首期benchmark选择以下5个职业："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"19-2099.01 Remote Sensing Scientists and Technologists；"}),`
`,e.jsx(n.li,{children:"19-4099.03 Remote Sensing Technicians；"}),`
`,e.jsx(n.li,{children:"17-1021.00 Cartographers and Photogrammetrists；"}),`
`,e.jsx(n.li,{children:"15-1299.02 Geographic Information Systems Technologists and Technicians；"}),`
`,e.jsx(n.li,{children:"17-3031.00 Surveying and Mapping Technicians。"}),`
`]}),`
`,e.jsx(n.p,{children:"五个职业分别覆盖科学分析、数据生产、摄影测量、GIS工作流和测绘更新，形成互补的职业任务结构。农业、林业、水文、环境、灾害、城市和自然资源作为应用场景标签，不再作为独立职业重复抽样。"}),`
`,e.jsx(n.h3,{children:"2.2 Expert Recruitment"}),`
`,e.jsx(n.h4,{children:"2.2.1 招募标准"}),`
`,e.jsx(n.p,{children:"每个职业招募不少于5名专家。专家应具有至少4年相关工作经验，并且近2年内仍从事相关工作。"}),`
`,e.jsx(n.p,{children:"任务作者应覆盖不同机构类型、应用领域和资历水平。任务作者不得担任自己任务的最终评分员。"}),`
`,e.jsx(n.h4,{children:"2.2.2 招募渠道"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"类型"}),e.jsx(n.th,{children:"招募渠道"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"专业协会"}),e.jsx(n.td,{children:"测绘学会等专业协会及邮件列表"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"政府机构"}),e.jsx(n.td,{children:"自然资源、环境、规划、林业和农业等部门"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"研究机构"}),e.jsx(n.td,{children:"大学遥感、摄影测量、GIS及相关院系"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"商业机构"}),e.jsx(n.td,{children:"地理信息、遥感数据和测绘技术企业"})]})]})]}),`
`,e.jsx(n.h4,{children:"2.2.3 专家验证流程"}),`
`,e.jsx(n.h5,{children:"电话履历审查"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"确认工作年限；"}),`
`,e.jsx(n.li,{children:"验证遥感技术的实际使用情况。"}),`
`]}),`
`,e.jsx(n.h5,{children:"视频面试或访谈"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Q1：描述日常工作任务；"}),`
`,e.jsx(n.li,{children:"Q2：说明遥感技术使用深度，包括数据源和问题解决方式；"}),`
`,e.jsx(n.li,{children:"Q3：分享实际项目案例，包括客户、目标、方法和挑战；"}),`
`,e.jsx(n.li,{children:"Q4：确认时间可用性。"}),`
`]}),`
`,e.jsx(n.h5,{children:"培训"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"项目简介和目标；"}),`
`,e.jsx(n.li,{children:"专家角色说明；"}),`
`,e.jsx(n.li,{children:"流程和时间线；"}),`
`,e.jsx(n.li,{children:"评分标准介绍；"}),`
`,e.jsx(n.li,{children:"签署参与协议。"}),`
`]}),`
`,e.jsx(n.h3,{children:"2.3 Task Creation"}),`
`,e.jsx(n.h4,{children:"2.3.1 任务结构"}),`
`,e.jsx(n.p,{children:"严格对应GDPval公开数据[2]，每项任务由以下部分组成："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"部分"}),e.jsx(n.th,{children:"内容"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"任务元数据"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"task_id"}),"、",e.jsx(n.code,{children:"sector"}),"和",e.jsx(n.code,{children:"occupation"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"任务输入"}),e.jsxs(n.td,{children:[e.jsx(n.code,{children:"prompt"}),"及可选的",e.jsx(n.code,{children:"reference_files"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"专家交付物"}),e.jsxs(n.td,{children:["任务作者完成的",e.jsx(n.code,{children:"deliverable_files"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"评分标准"}),e.jsxs(n.td,{children:["任务专用的",e.jsx(n.code,{children:"rubric_pretty"}),"和",e.jsx(n.code,{children:"rubric_json"})]})]})]})]}),`
`,e.jsxs(n.p,{children:["职业角色、业务情境、工作要求和交付说明均写入",e.jsx(n.code,{children:"prompt"}),"，不是与Prompt并列的独立字段。模型评测时接收Prompt和参考文件并生成交付物；专家交付物和Rubric用于后续评分。"]}),`
`,e.jsx(n.p,{children:"职业专家另行评价任务的难度、代表性、预计完成时间和整体质量。任务价值可结合预计完成时间与对应职业工资进行估算，但不属于模型输入。"}),`
`,e.jsx(n.h4,{children:"2.3.2 任务设计原则"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"原则"}),e.jsx(n.th,{children:"具体要求"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"有代表性"}),e.jsx(n.td,{children:"能够代表该职业的日常核心工作，并映射到O*NET occupation task[4]"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Computer-based"}),e.jsx(n.td,{children:"主要步骤可以通过计算机完成"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"End-to-end"}),e.jsx(n.td,{children:"不是单一知识问答，而是包含可交付产品的完整工作任务"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"真实性"}),e.jsx(n.td,{children:"输入是真实工作文件，输出是可以用于实际生产的专业成果"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Gradable"}),e.jsx(n.td,{children:"可以自动检查或由专家可靠判断"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Self-contained"}),e.jsx(n.td,{children:"另一名同职业专家仅使用所给资料即可完成"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Non-sensitive"}),e.jsx(n.td,{children:"不包含涉密和隐私数据"})]})]})]}),`
`,e.jsx(n.h4,{children:"2.3.3 职业核心任务"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"职业"}),e.jsx(n.th,{children:"核心任务"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Remote Sensing Scientists and Technologists"}),e.jsx(n.td,{children:"设计遥感分析方案；处理和分析卫星、航空及地面遥感数据；开展分类、变化检测和定量分析；融合GIS、气象与现场数据；评价算法并解释结果"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Remote Sensing Technicians"}),e.jsx(n.td,{children:"检查和准备影像；进行辐射、几何和噪声处理；完成配准、镶嵌和裁剪；执行分类和变化提取；维护元数据、处理日志和质量报告"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Cartographers and Photogrammetrists"}),e.jsx(n.td,{children:"汇集航片、控制点和测量资料；开展空三、影像定向和地理定位；生产DOM、DEM和DSM；制作地图；检查摄影测量与制图成果"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Geographic Information Systems Technologists and Technicians"}),e.jsx(n.td,{children:"建立和维护空间数据库；完成格式和坐标转换；开展拓扑检查和空间分析；生成地图、表格和报告；编写GIS模型、脚本或应用"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Surveying and Mapping Technicians"}),e.jsx(n.td,{children:"整理测量、GPS、航片和地图资料；计算坐标、面积、闭合差和高程；更新地形图和地籍图；检查测量及地图成果；编写生产记录和报告"})]})]})]}),`
`,e.jsx(n.h4,{children:"2.3.4 应用场景覆盖"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"标签"}),e.jsx(n.th,{children:"应用场景"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A1"}),e.jsx(n.td,{children:"基础测绘、城市与基础设施"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A2"}),e.jsx(n.td,{children:"土地与自然资源"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A3"}),e.jsx(n.td,{children:"农业与林业"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A4"}),e.jsx(n.td,{children:"水资源、生态与环境"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A5"}),e.jsx(n.td,{children:"灾害与应急管理"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A6"}),e.jsx(n.td,{children:"海洋、交通与公共安全"})]})]})]}),`
`,e.jsx(n.h4,{children:"2.3.5 任务规模与抽样"}),`
`,e.jsx(n.p,{children:"首期建议构建100项任务，每个职业20项。该数量用于验证流程和评分稳定性，后续根据职业内部差异和评分方差扩充。"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"抽样维度"}),e.jsx(n.th,{children:"首期建议"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"职业"}),e.jsx(n.td,{children:"5个职业各20项，避免结果被单一职业主导"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"难度"}),e.jsx(n.td,{children:"基础30%、中等50%、复杂20%，由预计完成时间、步骤数和专业判断共同确定"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"应用场景"}),e.jsx(n.td,{children:"每个职业覆盖至少3类场景；全数据集覆盖A1—A6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"交付物"}),e.jsx(n.td,{children:"每个职业至少覆盖空间数据、表格和报告三类成果"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"数据来源"}),e.jsx(n.td,{children:"优先采用可公开再分发的数据；公开示例集与保密测试集按项目、区域和数据源分组隔离"})]})]})]}),`
`,e.jsx(n.p,{children:"同一项目、同一区域或由同一原始数据派生的任务不得跨数据划分，以降低信息泄漏和重复记忆风险。"}),`
`,e.jsx(n.h4,{children:"2.3.6 任务案例"}),`
`,e.jsx(n.p,{children:"GDPval公开数据中的主要字段为[2]："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`occupation
prompt
reference_files
deliverable_files
rubric_pretty
rubric_json
`})}),`
`,e.jsx(n.p,{children:"Prompt通常在一段完整任务说明中包含以下信息："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`模型担任什么岗位
        ↓
收到哪些参考材料
        ↓
需要解决什么业务问题
        ↓
成果提供给谁使用
        ↓
必须提交哪些文件
`})}),`
`,e.jsx(n.p,{children:"以下案例是参照设计原则构造的遥感任务案例："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"职业"}),e.jsx(n.th,{children:"任务样例"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Surveying and Mapping Technicians"}),e.jsx(n.td,{children:"根据GNSS测量点、新一期正射影像和上一版地形图，更新道路、建筑物、高程点和水系，检查测点异常和图层拓扑，提交更新后的GIS数据、异常清单、地图和更新记录"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Remote Sensing Scientists and Technologists"}),e.jsx(n.td,{children:"利用灾前、灾后Sentinel-1影像及辅助数据提取新增洪水范围，统计淹没面积、受影响建筑和道路，提交空间成果、统计表、方法说明和应急简报"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Cartographers and Photogrammetrists"}),e.jsx(n.td,{children:"根据像控点、检查点、空三报告、DOM和DSM，计算平面与高程精度，识别影像缺陷，提交质检报告、精度计算表和缺陷图斑"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Geographic Information Systems Technologists and Technicians"}),e.jsx(n.td,{children:"根据道路、居民地、DEM、洪水风险区和保护区等数据开展应急仓库选址，提交候选区数据、指标表、专题地图和可复现脚本"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"Remote Sensing Technicians"}),e.jsx(n.td,{children:"对多景光学影像进行波段检查、投影转换、NoData处理、配准、镶嵌和质量检查，提交标准化影像、处理日志、质量统计和异常说明"})]})]})]}),`
`,e.jsx(n.p,{children:"以下是每个样例的完整GDPval式任务包。"}),`
`,e.jsx(n.h5,{children:"案例1：Surveying and Mapping Technicians"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Task：地形图更新与测量数据检查"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Prompt"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"你是市政测绘项目组的测量与制图技术员。项目经理要求你依据最新无人机正射影像和补充GNSS测量数据，更新项目区1:2000地形图。"}),`
`,e.jsx(n.p,{children:"请检查GNSS测点中的重复点、坐标异常和高程异常；依据正射影像更新新增及拆除建筑物、道路中心线、水系和高程点；修复图层中的重叠、自相交、未闭合及属性缺失问题。"}),`
`,e.jsx(n.p,{children:"更新成果将用于工程设计，因此必须保留原始要素编号，并在更新记录中说明每项修改的数据来源和依据。"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"参考文件"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"previous_topographic_map.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"latest_orthophoto.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"gnss_survey_points.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"feature_code_dictionary.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"mapping_specification.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"project_boundary.gpkg"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"要求交付"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"updated_topographic_map.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"survey_data_issues.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"topographic_map.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"update_log.docx"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键Rubric"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"GeoPackage包含规定的建筑物、道路、水系和高程点图层；"}),`
`,e.jsx(n.li,{children:"所有图层采用指定坐标系；"}),`
`,e.jsx(n.li,{children:"正确识别重复和异常测点；"}),`
`,e.jsx(n.li,{children:"新增及拆除建筑物更新正确；"}),`
`,e.jsx(n.li,{children:"不存在明显无效几何或违规重叠；"}),`
`,e.jsx(n.li,{children:"保留原始要素ID；"}),`
`,e.jsx(n.li,{children:"更新日志能逐项说明变化类型、数据源和判断依据；"}),`
`,e.jsx(n.li,{children:"PDF地图包含标题、图例、比例尺、坐标信息和数据日期。"}),`
`]}),`
`,e.jsx(n.h5,{children:"案例2：Remote Sensing Scientists and Technologists"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Task：基于SAR的洪水范围与影响评估"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Prompt"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"你是为州应急管理部门提供技术支持的遥感科学家。一次强降雨事件后，管理部门需要了解三个县的洪水范围及其对建筑物和道路的影响。"}),`
`,e.jsx(n.p,{children:"请利用灾前和灾后Sentinel-1 SAR影像提取新增洪水范围。分析时应排除永久水体，并考虑SAR阴影、叠掩、斑点噪声和不同地表覆盖造成的误判。"}),`
`,e.jsx(n.p,{children:"请统计各县新增淹没面积、受影响建筑物数量和受影响道路长度，说明采用的方法、阈值、验证结果及主要不确定性。最终简报面向不具备遥感背景的应急管理人员。"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"参考文件"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"sentinel1_pre_event.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"sentinel1_post_event.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"permanent_water.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"county_boundaries.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"buildings.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"roads.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"validation_points.csv"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"data_description.pdf"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"要求交付"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"flood_extent.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"flood_extent.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"impact_statistics.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"methodology.docx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"emergency_briefing.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"analysis_script.py"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键Rubric"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"洪水栅格和矢量成果采用指定CRS和分辨率；"}),`
`,e.jsx(n.li,{children:"永久水体被正确排除；"}),`
`,e.jsx(n.li,{children:"洪水范围相对于参考数据达到规定IoU/F1；"}),`
`,e.jsx(n.li,{children:"各县面积统计误差在允许范围内；"}),`
`,e.jsx(n.li,{children:"建筑物和道路影响统计与空间成果一致；"}),`
`,e.jsx(n.li,{children:"方法说明包含预处理、阈值、后处理和验证步骤；"}),`
`,e.jsx(n.li,{children:"正确说明SAR阴影、叠掩和斑点噪声的影响；"}),`
`,e.jsx(n.li,{children:"应急简报能够清楚回答“哪里受灾最严重”和“结果有多可靠”。"}),`
`]}),`
`,e.jsx(n.h5,{children:"案例3：Cartographers and Photogrammetrists"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Task：无人机摄影测量成果验收"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Prompt"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"你是负责无人机测绘成果验收的摄影测量师。外包单位提交了项目区DOM、DSM和空中三角测量报告，项目要求成果满足附件中的1:2000测图精度标准。"}),`
`,e.jsx(n.p,{children:"请利用独立检查点计算DOM平面RMSE和DSM高程RMSE，检查空间范围、分辨率、接边、空洞、拉花、重影、建筑物倾斜和明显地形异常。"}),`
`,e.jsx(n.p,{children:"请判断成果是否合格，对每个缺陷标注位置、类型、严重程度和建议处理措施。不要修改原始DOM和DSM。"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"参考文件"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"submitted_dom.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"submitted_dsm.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"control_points.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"independent_checkpoints.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"aerial_triangulation_report.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"project_boundary.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"acceptance_standard.pdf"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"要求交付"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"accuracy_calculation.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"photogrammetry_defects.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"acceptance_map.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"quality_inspection_report.docx"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键Rubric"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"平面RMSE和高程RMSE计算正确；"}),`
`,e.jsx(n.li,{children:"明确区分像控点与独立检查点；"}),`
`,e.jsx(n.li,{children:"缺陷图斑位置与实际影像问题相符；"}),`
`,e.jsx(n.li,{children:"缺陷类型和严重程度字段完整；"}),`
`,e.jsx(n.li,{children:"正确判断成果是否满足精度要求；"}),`
`,e.jsx(n.li,{children:"报告中的数值与Excel一致；"}),`
`,e.jsx(n.li,{children:"能区分系统性精度问题与局部影像缺陷；"}),`
`,e.jsx(n.li,{children:"返工建议具有可执行性；"}),`
`,e.jsx(n.li,{children:"验收地图能够清楚显示缺陷分布。"}),`
`]}),`
`,e.jsx(n.h5,{children:"案例4：GIS Technologists and Technicians"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Task：应急物资仓库选址分析"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Prompt"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"你是县政府应急管理部门的GIS技术人员。部门计划在研究区建设新的应急物资仓库，需要筛选并排序三个候选区域。"}),`
`,e.jsx(n.p,{children:"候选区必须位于坡度不超过8度的建设用地内，距主干道不超过2公里，避开洪水高风险区、保护区和水体500米缓冲区，并能覆盖尽可能多的人口。每个候选区的连续可用面积不得小于5公顷。"}),`
`,e.jsx(n.p,{children:"请建立可复现的GIS分析流程，生成所有合格候选区，计算面积、道路距离、覆盖人口和风险指标，并推荐排名前三的区域。"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"参考文件"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dem.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"land_use.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"major_roads.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"population_grid.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"flood_risk.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"protected_areas.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"water_bodies.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"study_area.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"site_selection_rules.pdf"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"要求交付"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"eligible_sites.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"site_ranking.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"recommended_sites_map.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"workflow.py"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"method_note.docx"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键Rubric"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"正确计算坡度并使用规定阈值；"}),`
`,e.jsx(n.li,{children:"道路和水体距离计算使用适当的投影坐标系；"}),`
`,e.jsx(n.li,{children:"正确排除洪水风险区和保护区；"}),`
`,e.jsx(n.li,{children:"所有候选区满足最小连续面积；"}),`
`,e.jsx(n.li,{children:"覆盖人口计算方法合理；"}),`
`,e.jsx(n.li,{children:"排名表中的数值与GIS成果一致；"}),`
`,e.jsx(n.li,{children:"前三名推荐符合全部硬约束；"}),`
`,e.jsx(n.li,{children:"脚本可以在给定数据上复现结果；"}),`
`,e.jsx(n.li,{children:"地图清楚表达约束条件、合格区域和推荐结果。"}),`
`]}),`
`,e.jsx(n.h5,{children:"案例5：Remote Sensing Technicians"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Task：多景光学卫星影像标准化生产"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Prompt"})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"你是遥感数据生产团队的遥感技术员。分析团队需要一套覆盖项目区的标准化光学底图，用于后续土地覆盖变化分析。"}),`
`,e.jsx(n.p,{children:"请按照附件中的生产规范，对六景卫星影像进行完整性检查、波段核对、投影统一、NoData设置、影像配准、镶嵌、裁剪和质量检查。镶嵌成果应保持原始有效空间分辨率，不得使用会明显改变光谱值的显示增强作为分析数据。"}),`
`,e.jsx(n.p,{children:"请记录每景影像的处理状态、发现的问题、使用的参数以及最终质量检查结果。无法满足要求的影像不得静默丢弃，必须在异常清单中说明。"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"参考文件"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"scene_01.tif"}),"至",e.jsx(n.code,{children:"scene_06.tif"})]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"scene_metadata.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"project_boundary.gpkg"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"reference_image.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"production_specification.pdf"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"expected_band_schema.xlsx"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"要求交付"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"standardized_mosaic.tif"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"scene_processing_log.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"quality_control.xlsx"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"processing_script.py"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"production_report.docx"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"关键Rubric"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"正确核对所有输入影像和波段；"}),`
`,e.jsx(n.li,{children:"输出影像采用指定CRS、分辨率和数据类型；"}),`
`,e.jsx(n.li,{children:"NoData设置正确；"}),`
`,e.jsx(n.li,{children:"镶嵌成果完整覆盖项目区；"}),`
`,e.jsx(n.li,{children:"配准误差在规定范围内；"}),`
`,e.jsx(n.li,{children:"未对分析数据实施不允许的光谱拉伸；"}),`
`,e.jsx(n.li,{children:"处理日志覆盖全部输入影像；"}),`
`,e.jsx(n.li,{children:"异常影像和处理决定均有记录；"}),`
`,e.jsx(n.li,{children:"脚本可以复现主要处理过程；"}),`
`,e.jsx(n.li,{children:"报告、Excel与GeoTIFF元数据之间保持一致。"}),`
`]}),`
`,e.jsx(n.h4,{children:"2.3.7 统一运行条件"}),`
`,e.jsx(n.p,{children:"所有模型在相同脚手架中运行，获得相同的prompt、参考文件和固定版本的Python、GDAL、Rasterio、GeoPandas、QGIS命令行工具及文档处理软件。"}),`
`,e.jsx(n.p,{children:"评测分为两种运行轨道：基础轨道采用封闭环境，模型只能读取任务附件并向指定目录写入结果；开放工具轨道用于需要检索数据或调用在线服务的任务，仅允许访问预先规定的数据源和API。两类结果分别统计，不直接混合比较。"}),`
`,e.jsx(n.p,{children:"每次运行统一限制时间、计算资源和最大重试次数，并记录模型版本、提示词、工具调用、网络请求、运行日志、生成文件及成本。任务若依赖专有软件，应提供等价的公开工具，或从公开评测集中排除。"}),`
`,e.jsx(n.p,{children:"任务可以概括为："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"在明确的职业场景中，使用一组参考文件，完成一项能够在真实工作中交付的完整任务。"}),`
`]}),`
`,e.jsx(n.h3,{children:"2.4 Task Quality Control Pipeline"}),`
`,e.jsx(n.p,{children:"任务质量控制参考GDPval的多阶段审核方法[1]，由模型辅助筛查、通用审核、职业专项审核和最终审核组成。"}),`
`,e.jsx(n.p,{children:"所有任务均由目标职业领域专家创建，并在进入评测集前经过自动检查和多轮人工审核。审核发现的问题反馈给原任务作者修改，任务只有在最终审核通过后方可入库。"}),`
`,e.jsx(n.h4,{children:"模型辅助筛查"}),`
`,e.jsx(n.p,{children:"检查："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"职业相关性；"}),`
`,e.jsx(n.li,{children:"任务复杂度；"}),`
`,e.jsx(n.li,{children:"输入文件是否完整；"}),`
`,e.jsx(n.li,{children:"交付物是否明确；"}),`
`,e.jsx(n.li,{children:"是否存在明显遗漏或矛盾。"}),`
`]}),`
`,e.jsx(n.p,{children:"模型只提供建议，不修改任务或决定是否通过。"}),`
`,e.jsx(n.h4,{children:"通用审核"}),`
`,e.jsx(n.p,{children:"检查任务描述是否清晰、输入是否充分、交付要求是否明确。"}),`
`,e.jsx(n.p,{children:"每位专家创建的首个任务进入沙盒。任务作者根据审核意见修改任务，审核者对修改结果进行复核，直至任务满足基本创建标准。"}),`
`,e.jsx(n.h4,{children:"职业专项审核"}),`
`,e.jsx(n.p,{children:"同领域专家检查："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"任务是否具有职业代表性；"}),`
`,e.jsx(n.li,{children:"技术内容是否正确；"}),`
`,e.jsx(n.li,{children:"任务是否能够完成；"}),`
`,e.jsx(n.li,{children:"另一名同职业专家能否仅凭所给材料完成任务。"}),`
`]}),`
`,e.jsx(n.h4,{children:"最终审核"}),`
`,e.jsx(n.p,{children:"检查任务、参考答案和评分标准是否一致、完整且可执行。"}),`
`,e.jsx(n.p,{children:"审核者持续提出反馈，任务作者根据意见修改。任务通过最终审核后进入评测集。"}),`
`,e.jsx(n.p,{children:"任务作者负责创建和修改任务，审核者负责提出意见并决定是否通过。模型仅辅助发现问题，最终责任由人工专家承担。"}),`
`,e.jsx(n.h4,{children:"遥感任务质控示例"}),`
`,e.jsx(n.p,{children:"以“城市新增建设用地监测”为例："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"阶段"}),e.jsx(n.th,{children:"审核内容"}),e.jsx(n.th,{children:"示例"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"任务创建"}),e.jsx(n.td,{children:"编写prompt，准备影像、边界、分类标准、专家成果和rubric"}),e.jsx(n.td,{children:"利用两期影像识别新增建设用地"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"模型筛查"}),e.jsx(n.td,{children:"检查附件遗漏、要求矛盾和任务难度"}),e.jsx(n.td,{children:"发现未规定输出格式"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"通用审核"}),e.jsx(n.td,{children:"检查任务是否清晰、完整"}),e.jsx(n.td,{children:"补充坐标系和GPKG、XLSX、PDF、DOCX要求"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"职业审核"}),e.jsx(n.td,{children:"检查数据、方法和变化定义是否合理"}),e.jsx(n.td,{children:"明确施工用地与普通裸地的区别"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"最终审核"}),e.jsx(n.td,{children:"检查prompt、附件、参考结果和rubric是否一致"}),e.jsx(n.td,{children:"核验面积结果、最小制图单元及评分阈值"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"最终签署"}),e.jsx(n.td,{children:"确认任务能够稳定执行和评分"}),e.jsx(n.td,{children:"任务进入正式评测集"})]})]})]}),`
`,e.jsx(n.p,{children:"该流程可以概括为："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"第一轮检查基本合规，第二轮检查职业真实性，第三轮检查可执行性和可评分性，并完成最终验收。"}),`
`]}),`
`,e.jsx(n.h3,{children:"2.5 Human Expert Grading and Automated Grading"}),`
`,e.jsx(n.p,{children:"人工专家盲评是主要评价方式[1]。本方案进一步规定，每项任务由3名相同职业的专家独立评分，评分者不知道交付物由模型还是人类完成，最终以多数意见确定优于、相当于或差于专家成果的结论。"}),`
`,e.jsx(n.p,{children:"实际实施时可综合考虑成本，对任务进行分层抽样后开展3名专家独立评分。抽样应覆盖不同职业、应用场景和难度，其余任务可由1名专家评分；出现争议或属于关键任务时，再增加专家复核。抽样结果同时用于估计评分者一致性。"}),`
`,e.jsx(n.p,{children:"评分者依据任务专用Rubric比较模型与专家交付物，给出评语和整体排序，并将模型结果判定为优于、相当于或差于专家成果。不同任务的文件格式、数值精度、空间结果和专业要求均由各自的Rubric规定，不另设统一的跨任务评分维度。评分者需说明主要理由。"}),`
`,e.jsx(n.p,{children:"最终报告胜率和胜平率，并按职业、场景和难度分别汇总。正式评测前可通过试评分统一判断尺度，并报告评分者一致性。"}),`
`,e.jsx(n.p,{children:"自动grader在整体pipeline跑通后提升评估效率，可暂不考虑。后续自动grader应在专家已评分样本上校准，并报告与专家评分的一致性；职业判断、结果解释和实际可用性仍由专家评价。"}),`
`,e.jsx(n.h2,{children:"3. Limitations"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"职业覆盖范围有限"}),e.jsx(n.br,{}),`
`,"有较多使用遥感技术、但不以遥感为主要工作内容的岗位没有覆盖。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"偏向内业工作"}),e.jsx(n.br,{}),`
`,"任务主要是在计算机上完成的工作，不涉及测量、无人机飞行等外业操作。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"任务为单轮且信息较完整"}),e.jsx(n.br,{}),`
`,"模型一次性获取任务说明和参考文件，未充分模拟实际任务中的需求澄清、数据补充、专家协作和多轮修改。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据与区域代表性有限"}),e.jsx(n.br,{}),`
`,"遥感任务容易涉及敏感数据，且人工成本较高，可获取的数据和区域代表性受限。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"参考答案具有不确定性"}),e.jsx(n.br,{}),`
`,"受样本、算法和专家判断等因素影响，同一任务可能存在多种方法，参考答案不一定是唯一正确结果。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"缺少过程评估"}),e.jsx(n.br,{}),`
`,"当前主要评价最终结果，没有评价实现路径和方法优劣。"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"数据泄漏与工具依赖风险"}),e.jsx(n.br,{}),`
`,"公开影像和标准案例可能进入模型训练数据；软件版本、算力和工具可用性也可能影响结果，需要通过分组划分、运行日志和统一环境控制。"]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{children:"参考资料"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Patwardhan et al. ",e.jsx(n.a,{href:"https://arxiv.org/abs/2510.04374",children:"GDPval: Evaluating AI Model Performance on Real-World Economically Valuable Tasks"}),"."]}),`
`,e.jsxs(n.li,{children:["OpenAI. ",e.jsx(n.a,{href:"https://huggingface.co/datasets/openai/gdpval",children:"GDPval公开任务数据"}),"."]}),`
`,e.jsxs(n.li,{children:["U.S. Bureau of Labor Statistics. ",e.jsx(n.a,{href:"https://www.bls.gov/news.release/ocwage.t01.htm",children:"May 2025 National Occupational Employment and Wage Estimates"}),"."]}),`
`,e.jsxs(n.li,{children:["O*NET OnLine. ",e.jsx(n.a,{href:"https://www.onetonline.org/",children:"Occupation Database"}),"."]}),`
`,e.jsxs(n.li,{children:["Lacoste et al. ",e.jsx(n.a,{href:"https://github.com/servicenow/geo-bench",children:"GEO-Bench: Toward Foundation Models for Earth Monitoring"}),"."]}),`
`,e.jsxs(n.li,{children:["Danish et al. ",e.jsx(n.a,{href:"https://openaccess.thecvf.com/content/ICCV2025/html/Danish_GEOBench-VLM_Benchmarking_Vision-Language_Models_for_Geospatial_Tasks_ICCV_2025_paper.html",children:"GEOBench-VLM: Benchmarking Vision-Language Models for Geospatial Tasks"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://arxiv.org/abs/2505.23752",children:"ThinkGeo: Evaluating Tool-Augmented Agents for Remote Sensing Tasks"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://arxiv.org/abs/2608.01645",children:"GISAgentBench: A Practitioner-Sourced Benchmark for Evaluating LLM Agents on GIS Tasks"}),"."]}),`
`,e.jsxs(n.li,{children:["Sumbul et al. ",e.jsx(n.a,{href:"https://arxiv.org/abs/1902.06148",children:"BigEarthNet: A Large-Scale Benchmark Archive for Remote Sensing Image Understanding"}),"."]}),`
`,e.jsxs(n.li,{children:["Xia et al. ",e.jsx(n.a,{href:"https://openaccess.thecvf.com/content_cvpr_2018/html/Xia_DOTA_A_Large-Scale_Dataset_CVPR_2018_paper.html",children:"DOTA: A Large-Scale Dataset for Object Detection in Aerial Images"}),"."]}),`
`,e.jsxs(n.li,{children:["Wang et al. ",e.jsx(n.a,{href:"https://datasets-benchmarks-proceedings.neurips.cc/paper/2021/hash/4e732ced3463d06de0ca9a15b6153677-Abstract-round2.html",children:"LoveDA: A Remote Sensing Land-Cover Dataset for Domain Adaptive Semantic Segmentation"}),"."]}),`
`,e.jsxs(n.li,{children:["Chen and Shi. ",e.jsx(n.a,{href:"https://levir.buaa.edu.cn/datasets/",children:"A Spatial-Temporal Attention-Based Method and a New Dataset for Remote Sensing Image Change Detection"}),"."]}),`
`,e.jsxs(n.li,{children:["Marsocci et al. ",e.jsx(n.a,{href:"https://arxiv.org/abs/2412.04204",children:"PANGAEA: A Global and Inclusive Benchmark for Geospatial Foundation Models"}),"."]}),`
`,e.jsxs(n.li,{children:["Xiao et al. ",e.jsx(n.a,{href:"https://openaccess.thecvf.com/content/CVPR2026/papers/Xiao_GeoMMBench_and_GeoMMAgent_Toward_Expert-Level_Multimodal_Intelligence_in_Geoscience_and_CVPR_2026_paper.pdf",children:"GeoMMBench and GeoMMAgent: Toward Expert-Level Multimodal Intelligence in Geoscience and Remote Sensing"}),"."]}),`
`]})]})}function ge(s={}){const{wrapper:n}={...g(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(D,{...s})}):D(s)}const me=Object.freeze(Object.defineProperty({__proto__:null,default:ge,frontmatter:ae},Symbol.toStringTag,{value:"Module"})),pe={title:"医疗专业任务分类标准：基于作用对象与专业目的的 MECE 框架",slug:"medical-professional-task-classification",date:"2026-08-24",tags:["医疗","任务分类","MECE"],summary:"以直接作用对象和专业目的为两级主轴，建立覆盖医疗行业的 4 个一级领域与 24 个二级任务类别。",featured:!0};function M(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...g(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:"摘要"}),`
`,e.jsx(n.p,{children:"本框架用于系统整理医疗行业中的专业任务。分类采用两个连续层级："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"一级分类按任务的直接作用对象划分"}),"；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"二级分类按任务的直接专业目的划分"}),"。"]}),`
`]}),`
`,e.jsxs(n.p,{children:["最终形成 ",e.jsx(n.strong,{children:"4 个一级领域、24 个二级任务类别"}),"。流程阶段、执行角色、专业动作、临床专科、信息模态和风险等级作为横向标签，不与任务类别并列。"]}),`
`,e.jsx(n.p,{children:"需要说明的是，这 24 类是综合 WHO、OECD、Eurostat、ILO 等权威框架形成的应用型分类，并非某一机构原样发布的官方“24 类标准”。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"一、分类范围与分类单元"}),`
`,e.jsx(n.h3,{children:"1.1 分类范围"}),`
`,e.jsx(n.p,{children:"医疗专业任务是指："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"为促进、维持或恢复个人及人群健康，或者为卫生服务提供专业资源、知识、规则和运行保障而实施的，具有明确输入、专业活动和交付结果的工作。"}),`
`]}),`
`,e.jsx(n.p,{children:"包括临床医疗、护理、康复、公共卫生、医院运营、医保、质量安全、监管、医学科研、医药技术研发和医学教育。"}),`
`,e.jsx(n.p,{children:"不包括与医疗专业性无直接关系的通用工作，例如一般清洁、餐饮、通用市场营销等。"}),`
`,e.jsx(n.h3,{children:"1.2 最小分类单元"}),`
`,e.jsxs(n.p,{children:["最小分类单元不是一个宽泛场景，而是一个",e.jsx(n.strong,{children:"原子任务"}),"："]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`任务主体 + 作用对象 + 专业动作 + 主要交付结果
`})}),`
`,e.jsx(n.p,{children:"例如："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“医生根据胸痛病史形成鉴别诊断”是一个原子任务；"}),`
`,e.jsx(n.li,{children:"“接诊胸痛患者”是一个完整场景，包含分诊、病史采集、检查、诊断、治疗、沟通等多个原子任务，不能整体强行归为一类。"}),`
`]}),`
`,e.jsx(n.p,{children:"MECE 约束适用于原子任务，不适用于未经拆解的复杂场景。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"二、总体分类结构"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`医疗专业任务
│
├── A. 个体健康服务
│   ├── A1 健康促进
│   ├── A2 疾病预防与筛查
│   ├── A3 临床评估与诊断
│   ├── A4 急救与复苏
│   ├── A5 治疗与疾病控制
│   ├── A6 康复与功能支持
│   ├── A7 长期照护与支持性护理
│   └── A8 姑息与临终关怀
│
├── B. 人群健康与公共卫生
│   ├── B1 人群健康监测
│   ├── B2 公共卫生调查与风险评估
│   ├── B3 人群健康促进与风险预防
│   ├── B4 公共卫生控制与应急处置
│   └── B5 公共卫生项目与政策评价
│
├── C. 医疗系统运行与治理
│   ├── C1 医疗服务组织与运营
│   ├── C2 卫生人力管理
│   ├── C3 医疗信息与数据治理
│   ├── C4 药品、器械与医疗技术管理
│   ├── C5 医疗筹资、支付与保障
│   ├── C6 医疗质量与患者安全
│   └── C7 治理、监管与伦理
│
└── D. 医学知识、技术与能力生产
    ├── D1 医学研究与证据生产
    ├── D2 证据综合、指南与标准制定
    ├── D3 药品、器械与诊疗技术研发
    └── D4 医学教育与专业能力培养
`})}),`
`,e.jsx(n.h3,{children:"2.1 一级分类标准"}),`
`,e.jsx(n.p,{children:"一级分类判断的不是“最终是否有利于健康”，而是："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"任务完成后，最先、最直接发生变化的对象是什么？"}),`
`]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"一级领域"}),e.jsx(n.th,{children:"直接作用对象"}),e.jsx(n.th,{children:"主要交付结果"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A. 个体健康服务"}),e.jsx(n.td,{children:"可识别的个人、患者或家庭"}),e.jsx(n.td,{children:"个人健康、疾病、功能或痛苦发生变化"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"B. 人群健康与公共卫生"}),e.jsx(n.td,{children:"群体、社区、区域人群或传播网络"}),e.jsx(n.td,{children:"人群风险、暴露、传播或健康分布发生变化"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C. 医疗系统运行与治理"}),e.jsx(n.td,{children:"医疗机构、医保体系或卫生系统"}),e.jsx(n.td,{children:"资源、流程、数据、支付、质量或规则发生变化"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"D. 医学知识、技术与能力生产"}),e.jsx(n.td,{children:"可重复使用的知识、技术或专业能力"}),e.jsx(n.td,{children:"形成研究证据、标准、新产品或合格人才"})]})]})]}),`
`,e.jsx(n.h3,{children:"2.2 二级分类标准"}),`
`,e.jsx(n.p,{children:"确定作用对象后，再判断："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"该任务为什么要做？其最直接的专业交付结果是什么？"}),`
`]}),`
`,e.jsx(n.p,{children:"例如，同样是处理血压数据："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"原子任务"}),e.jsx(n.th,{children:"直接对象及目的"}),e.jsx(n.th,{children:"类别"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"测量某患者血压以判断是否患高血压"}),e.jsx(n.td,{children:"个体诊断"}),e.jsx(n.td,{children:"A3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"统计某地区居民血压分布"}),e.jsx(n.td,{children:"人群监测"}),e.jsx(n.td,{children:"B1"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"检查全院血压数据的完整性"}),e.jsx(n.td,{children:"系统数据治理"}),e.jsx(n.td,{children:"C3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"研究新的高血压预测模型"}),e.jsx(n.td,{children:"通用证据生产"}),e.jsx(n.td,{children:"D1"})]})]})]}),`
`,e.jsx(n.p,{children:"专业动作相似，但直接作用对象与交付结果不同，所以类别不同。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"三、不作为主类别的横向维度"}),`
`,e.jsx(n.p,{children:"下列维度很重要，但不能与 24 个专业任务类别并列。"}),`
`,e.jsx(n.h3,{children:"3.1 专业动作"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"采集、检索、抽取；"}),`
`,e.jsx(n.li,{children:"计算、分析、判断；"}),`
`,e.jsx(n.li,{children:"生成、审核、沟通；"}),`
`,e.jsx(n.li,{children:"执行、监测、协调。"}),`
`]}),`
`,e.jsx(n.p,{children:"“检索”不是固定任务类别：检索患者病历可以服务 A3，检索指南用于治疗可以服务 A5，检索文献开展系统综述则服务 D2。"}),`
`,e.jsx(n.h3,{children:"3.2 流程阶段"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"主动预防；"}),`
`,e.jsx(n.li,{children:"接入与分诊；"}),`
`,e.jsx(n.li,{children:"评估与检查；"}),`
`,e.jsx(n.li,{children:"诊断与规划；"}),`
`,e.jsx(n.li,{children:"干预实施；"}),`
`,e.jsx(n.li,{children:"效果评价与转衔；"}),`
`,e.jsx(n.li,{children:"连续照护。"}),`
`]}),`
`,e.jsx(n.p,{children:"流程阶段主要用于标注 A 类个体健康任务，回答“任务何时发生”，不回答“任务本质是什么”。"}),`
`,e.jsx(n.h3,{children:"3.3 其他横向标签"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"执行角色：医生、护士、药师、技师、管理者等；"}),`
`,e.jsx(n.li,{children:"专业领域：内科、外科、儿科、药学、影像、康复等；"}),`
`,e.jsx(n.li,{children:"服务场景：门诊、急诊、住院、社区、居家等；"}),`
`,e.jsx(n.li,{children:"信息模态：文本、结构化数据、影像、生理信号、基因数据等；"}),`
`,e.jsx(n.li,{children:"风险等级：低、中、高、极高风险。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"四、标准归类决策树"}),`
`,e.jsx(n.h3,{children:"第一步：是否直接服务于可识别的个人？"}),`
`,e.jsx(n.p,{children:"如果是，进入 A 类："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"改善一般健康能力：A1；"}),`
`,e.jsx(n.li,{children:"预防疾病或进行筛查：A2；"}),`
`,e.jsx(n.li,{children:"确定健康问题或风险状态：A3；"}),`
`,e.jsx(n.li,{children:"立即维持生命：A4；"}),`
`,e.jsx(n.li,{children:"治疗或控制疾病：A5；"}),`
`,e.jsx(n.li,{children:"改善或代偿功能：A6；"}),`
`,e.jsx(n.li,{children:"提供长期、支持性生活照护：A7；"}),`
`,e.jsx(n.li,{children:"减轻严重疾病相关痛苦：A8。"}),`
`]}),`
`,e.jsx(n.p,{children:"如果不是，进入第二步。"}),`
`,e.jsx(n.h3,{children:"第二步：是否直接作用于人群健康风险？"}),`
`,e.jsx(n.p,{children:"如果是，进入 B 类："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"持续发现人群趋势：B1；"}),`
`,e.jsx(n.li,{children:"调查原因、范围和风险：B2；"}),`
`,e.jsx(n.li,{children:"常态化促进健康、预防风险：B3；"}),`
`,e.jsx(n.li,{children:"紧急控制已经发生或迫近的事件：B4；"}),`
`,e.jsx(n.li,{children:"评价公共卫生项目或政策效果：B5。"}),`
`]}),`
`,e.jsx(n.p,{children:"如果不是，进入第三步。"}),`
`,e.jsx(n.h3,{children:"第三步：是否主要维持医疗体系运行或规则？"}),`
`,e.jsx(n.p,{children:"如果是，进入 C 类："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"服务流程、容量和资源：C1；"}),`
`,e.jsx(n.li,{children:"现有卫生人员：C2；"}),`
`,e.jsx(n.li,{children:"数据和信息系统：C3；"}),`
`,e.jsx(n.li,{children:"已投入使用的药品、器械和技术：C4；"}),`
`,e.jsx(n.li,{children:"资金、支付与保障：C5；"}),`
`,e.jsx(n.li,{children:"服务质量与患者安全：C6；"}),`
`,e.jsx(n.li,{children:"政策、监管和伦理：C7。"}),`
`]}),`
`,e.jsx(n.p,{children:"如果不是，进入第四步。"}),`
`,e.jsx(n.h3,{children:"第四步：是否产生可重复使用的知识、技术或能力？"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"一般性研究证据：D1；"}),`
`,e.jsx(n.li,{children:"指南、共识、标准或证据综合：D2；"}),`
`,e.jsx(n.li,{children:"新药、器械或诊疗技术：D3；"}),`
`,e.jsx(n.li,{children:"医疗专业人员能力：D4。"}),`
`]}),`
`,e.jsx(n.p,{children:"如果四步均不满足，通常有三种可能："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"任务描述过于宽泛，需要拆解；"}),`
`,e.jsx(n.li,{children:"任务属于通用支持工作，并非医疗专业任务；"}),`
`,e.jsx(n.li,{children:"当前分类确有缺口，需要经过案例复核后扩展。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"五、为什么一个完整场景会对应多个类别"}),`
`,e.jsx(n.h3,{children:"5.1 多类别不等于分类重叠"}),`
`,e.jsx(n.p,{children:"一个完整医疗场景通常由多个不同目的的原子任务组成，因此可能对应多个类别。MECE 要求的是："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"每个原子任务只有一个主类别，而不是一个复杂场景只能包含一个类别。"}),`
`]}),`
`,e.jsx(n.p,{children:"例如“完成一次高血压复诊”不是单一任务，可以拆解为："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"原子任务"}),e.jsx(n.th,{children:"主要交付结果"}),e.jsx(n.th,{children:"主类别"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"采集家庭血压和服药情况"}),e.jsx(n.td,{children:"新的患者证据"}),e.jsx(n.td,{children:"A3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"判断血压是否达标"}),e.jsx(n.td,{children:"当前病情判断"}),e.jsx(n.td,{children:"A3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"判断是否需要增加药物"}),e.jsx(n.td,{children:"治疗决策"}),e.jsx(n.td,{children:"A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"开具调整后的处方"}),e.jsx(n.td,{children:"治疗方案落实"}),e.jsx(n.td,{children:"A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"开展低盐饮食指导"}),e.jsx(n.td,{children:"改变健康行为"}),e.jsx(n.td,{children:"A1 或 A5，按具体目的确定"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"预约下一次复诊"}),e.jsx(n.td,{children:"连续照护安排或行政排程"}),e.jsx(n.td,{children:"A7 或 C1，按任务承担者与直接产出确定"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"将诊断映射为 ICD 编码"}),e.jsx(n.td,{children:"数据标准化"}),e.jsx(n.td,{children:"C3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"进行医保结算审核"}),e.jsx(n.td,{children:"支付审核"}),e.jsx(n.td,{children:"C5"})]})]})]}),`
`,e.jsx(n.p,{children:"完整场景跨多个类别是正常现象；如果同一个已充分定义的原子任务仍然同时落入多个主类别，才说明分类边界或任务描述有问题。"}),`
`,e.jsx(n.h3,{children:"5.2 相邻类别的边界判定"}),`
`,e.jsx(n.p,{children:"类别之间的边界应通过具有相似主题、但直接作用对象或专业目的不同的原子任务进行对照判定。边界对照表中并列列示多个类别，仅表示这些类别容易因任务主题相近而被混淆，不表示同一原子任务可以同时具有多个主类别。"}),`
`,e.jsx(n.p,{children:"正式归类时，应分别识别各项原子任务的直接作用对象和主要交付结果，并据此确定唯一主类别。典型边界对照如下："}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"边界类别组"}),e.jsx(n.th,{children:"类别"}),e.jsx(n.th,{children:"原子任务示例"}),e.jsx(n.th,{children:"直接作用对象或主要交付结果"}),e.jsx(n.th,{children:"判定依据"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"个体预防与人群预防"}),e.jsx(n.td,{children:"A2"}),e.jsx(n.td,{children:"为一位儿童接种疫苗"}),e.jsx(n.td,{children:"降低特定个人的患病风险"}),e.jsx(n.td,{children:"直接对象为可识别的个人"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"个体预防与人群预防"}),e.jsx(n.td,{children:"B3"}),e.jsx(n.td,{children:"组织地区儿童疫苗接种项目"}),e.jsx(n.td,{children:"提高目标人群免疫覆盖率"}),e.jsx(n.td,{children:"直接对象为地区人群及其风险分布"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"诊断与治疗"}),e.jsx(n.td,{children:"A3"}),e.jsx(n.td,{children:"综合检查结果判断患者患有肺炎"}),e.jsx(n.td,{children:"确定患者当前健康问题"}),e.jsx(n.td,{children:"交付结果回答“患者是什么问题”"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"诊断与治疗"}),e.jsx(n.td,{children:"A5"}),e.jsx(n.td,{children:"为肺炎患者制定抗感染方案"}),e.jsx(n.td,{children:"形成疾病干预方案"}),e.jsx(n.td,{children:"交付结果回答“应当如何处理”"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"治疗与康复"}),e.jsx(n.td,{children:"A5"}),e.jsx(n.td,{children:"使用药物控制脑卒中复发风险"}),e.jsx(n.td,{children:"控制疾病及其复发风险"}),e.jsx(n.td,{children:"主要评价指标为疾病控制"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"治疗与康复"}),e.jsx(n.td,{children:"A6"}),e.jsx(n.td,{children:"对卒中患者实施步行训练"}),e.jsx(n.td,{children:"改善活动能力和独立性"}),e.jsx(n.td,{children:"主要评价指标为功能改善"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"长期照护与姑息照护"}),e.jsx(n.td,{children:"A7"}),e.jsx(n.td,{children:"为失能老人提供长期生活照护"}),e.jsx(n.td,{children:"维持日常生活、安全和照护连续性"}),e.jsx(n.td,{children:"主要目标为持续支持"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"长期照护与姑息照护"}),e.jsx(n.td,{children:"A8"}),e.jsx(n.td,{children:"为终末期患者缓解癌痛"}),e.jsx(n.td,{children:"减轻严重疾病相关痛苦"}),e.jsx(n.td,{children:"主要目标为舒适、尊严和生活质量"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"医疗产品的使用、管理与研发"}),e.jsx(n.td,{children:"A5"}),e.jsx(n.td,{children:"为患者选择并使用现有药物"}),e.jsx(n.td,{children:"改变特定患者的疾病状态"}),e.jsx(n.td,{children:"直接对象为患者"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"医疗产品的使用、管理与研发"}),e.jsx(n.td,{children:"C4"}),e.jsx(n.td,{children:"管理医院药品目录和供应"}),e.jsx(n.td,{children:"保证现有药品的可用性和安全管理"}),e.jsx(n.td,{children:"直接对象为医疗机构的产品体系"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"医疗产品的使用、管理与研发"}),e.jsx(n.td,{children:"D3"}),e.jsx(n.td,{children:"研发并验证一种新药"}),e.jsx(n.td,{children:"形成可重复使用的新医疗产品"}),e.jsx(n.td,{children:"直接产出为新的药品或技术"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"人力管理与能力培养"}),e.jsx(n.td,{children:"C2"}),e.jsx(n.td,{children:"调整医务人员岗位配置"}),e.jsx(n.td,{children:"优化现有卫生人力的配置"}),e.jsx(n.td,{children:"直接对象为现有人力资源"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"人力管理与能力培养"}),e.jsx(n.td,{children:"D4"}),e.jsx(n.td,{children:"培训住院医师临床技能"}),e.jsx(n.td,{children:"形成或提升专业能力"}),e.jsx(n.td,{children:"直接产出为受训人员的专业能力"})]})]})]}),`
`,e.jsx(n.p,{children:"当某项任务无法依据上述标准获得唯一类别时，应首先检查其是否包含多个专业目的。若包含，应拆分为多个原子任务后分别归类；只有在完成拆分并补足上下文后仍无法归类，才应考虑调整类别定义。"}),`
`,e.jsx(n.h3,{children:"5.3 “A1 或 A5”应如何消除"}),`
`,e.jsx(n.p,{children:"出现“A1 或 A5”，通常是因为任务描述缺少目的。补足目的后应唯一归类："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“向普通成年人讲解低盐饮食以改善一般健康行为” → A1；"}),`
`,e.jsx(n.li,{children:"“向高血压患者讲解低盐饮食，作为其降压治疗的一部分” → A5。"}),`
`]}),`
`,e.jsx(n.p,{children:"如果一句话同时包含两个独立目的，就拆成两个原子任务，而不是赋予两个主类别。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"六、复杂任务拆解与编码规则"}),`
`,e.jsx(n.h3,{children:"6.1 六条归类规则"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"按最直接交付结果归类"}),"，不按遥远的最终影响归类；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"复杂工作拆成原子任务"}),"，不对整段工作强行赋予一个类别；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"一个原子任务只设一个主类别"}),"，其他属性使用标签；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"执行者不决定类别"}),"，医生、护士和药师都可能执行多类任务；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"场景和时间不决定类别"}),"，门诊、住院和随访只是环境；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"使用、管理和研发严格分开"}),"，分别对应个体服务、系统管理和知识技术生产。"]}),`
`]}),`
`,e.jsx(n.h3,{children:"6.2 推荐编码格式"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`主类别
+ 专业目的
+ 流程阶段
+ 专业动作
+ 执行角色
+ 专业领域
+ 服务对象
+ 服务场景
+ 信息模态
+ 风险等级
`})}),`
`,e.jsx(n.p,{children:"示例：“药师根据患者肾功能审核抗菌药物剂量”可编码为："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"主类别：A5 治疗与疾病控制；"}),`
`,e.jsx(n.li,{children:"专业目的：用药安全；"}),`
`,e.jsx(n.li,{children:"流程阶段：治疗计划审核；"}),`
`,e.jsx(n.li,{children:"专业动作：计算、审核；"}),`
`,e.jsx(n.li,{children:"执行角色：药师；"}),`
`,e.jsx(n.li,{children:"专业领域：临床药学；"}),`
`,e.jsx(n.li,{children:"服务对象：个体患者；"}),`
`,e.jsx(n.li,{children:"信息模态：病历和结构化检验数据；"}),`
`,e.jsx(n.li,{children:"风险等级：高。"}),`
`]}),`
`,e.jsx(n.p,{children:"“医院分析全院抗菌药物使用情况并整改不合理处方”则应拆为："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"分析全院处方并识别质量问题 → C6；"}),`
`,e.jsx(n.li,{children:"制定并实施整改措施 → C6；"}),`
`,e.jsx(n.li,{children:"如果另行修订强制性处方管理制度 → C7。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"七、分类质量检验标准"}),`
`,e.jsx(n.h3,{children:"7.1 相互独立性检验"}),`
`,e.jsx(n.p,{children:"随机抽取任务，由两名标注者独立归类。如果经补足上下文并拆成原子任务后仍频繁出现两个主类别，说明："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"类别定义重叠；"}),`
`,e.jsx(n.li,{children:"排除标准不清；"}),`
`,e.jsx(n.li,{children:"任务颗粒度不一致；"}),`
`,e.jsx(n.li,{children:"或分类轴发生混用。"}),`
`]}),`
`,e.jsx(n.p,{children:"可以使用标注者一致性指标，例如 Cohen's kappa，检验规则是否可操作。"}),`
`,e.jsx(n.h3,{children:"7.2 完全穷尽性检验"}),`
`,e.jsx(n.p,{children:"分别从以下职业和机构抽样任务："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"医院临床科室、护理、药学、检验、影像、康复；"}),`
`,e.jsx(n.li,{children:"基层医疗和居家照护；"}),`
`,e.jsx(n.li,{children:"疾控和公共卫生机构；"}),`
`,e.jsx(n.li,{children:"医保和卫生行政机构；"}),`
`,e.jsx(n.li,{children:"药品器械企业和研究机构；"}),`
`,e.jsx(n.li,{children:"医学院校和培训机构。"}),`
`]}),`
`,e.jsx(n.p,{children:"记录无法归类的任务。如果大量任务集中在相同空白区域，应新增或调整二级类别；不应为单个特殊案例随意增加一级类别。"}),`
`,e.jsx(n.h3,{children:"7.3 颗粒度一致性检验"}),`
`,e.jsx(n.p,{children:"同一层级类别应处于相近抽象程度。例如："}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“治疗与疾病控制”与“康复与功能支持”可以并列；"}),`
`,e.jsx(n.li,{children:"“开具阿莫西林处方”不能与“康复与功能支持”并列，因为前者是具体任务，后者是任务大类。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"八、权威依据与适用范围"}),`
`,e.jsx(n.p,{children:"本框架主要参考："}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.who.int/standards/classifications/international-classification-of-health-interventions",children:"WHO：International Classification of Health Interventions"}),"——用于界定诊断、治疗、康复、功能和公共卫生干预；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.who.int/universal-health-coverage/compendium",children:"WHO：UHC Compendium"}),"——覆盖促进、预防、诊断、复苏、治疗、康复和姑息服务；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.who.int/health-topics/universal-health-coverage",children:"WHO：Universal Health Coverage"}),"——提供健康促进至姑息照护的服务连续体；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.who.int/publications/i/item/9789240042551",children:"WHO/OECD/EU：A System of Health Accounts 2011"}),"——提供治疗、康复、长期照护、预防、产品和治理等卫生服务功能边界；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.who.int/classifications/international-classification-of-functioning-disability-and-health",children:"WHO：International Classification of Functioning, Disability and Health"}),"——支持康复与功能分类；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://extranet.who.int/nhptool/buildingblock.aspx",children:"WHO：Health System Building Blocks"}),"——支持卫生服务、人力、信息、产品技术、筹资和治理分类；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://isco.ilo.org/en/isco-08/",children:"ILO：International Standard Classification of Occupations"}),"——用于按职业任务检验覆盖性。"]}),`
`]}),`
`,e.jsx(n.p,{children:"这些体系各自解决不同问题，没有一套标准单独覆盖全部医疗专业任务。因此，本分类属于基于权威框架的综合设计。"}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{children:"九、结论"}),`
`,e.jsx(n.p,{children:"本分类的操作原则可以概括为："}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"先按直接作用对象将任务分为个体、人群、医疗系统和知识技术四个领域，再按任务的直接专业目的确定 24 个二级类别；流程、角色、动作、专科和模态仅作为标签；复杂场景拆解为原子任务后，每个原子任务只赋予一个主类别。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{children:"附录 A：个体健康服务详细标准"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"编码"}),e.jsx(n.th,{children:"类别"}),e.jsx(n.th,{children:"核心目的"}),e.jsx(n.th,{children:"典型任务"}),e.jsx(n.th,{children:"关键排除项"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A1"}),e.jsx(n.td,{children:"健康促进"}),e.jsx(n.td,{children:"提升一般健康能力和健康行为"}),e.jsx(n.td,{children:"营养、运动、睡眠、健康素养教育"}),e.jsx(n.td,{children:"特定疾病预防归 A2；疾病治疗归 A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A2"}),e.jsx(n.td,{children:"疾病预防与筛查"}),e.jsx(n.td,{children:"降低特定风险或早期发现异常"}),e.jsx(n.td,{children:"疫苗、预防用药、体检、癌症筛查"}),e.jsx(n.td,{children:"筛查阳性后的确诊归 A3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A3"}),e.jsx(n.td,{children:"临床评估与诊断"}),e.jsx(n.td,{children:"确定健康问题、病因和严重程度"}),e.jsx(n.td,{children:"病史、查体、检验、影像、鉴别诊断、分期"}),e.jsx(n.td,{children:"治疗选择归 A5；纯编码归 C3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A4"}),e.jsx(n.td,{children:"急救与复苏"}),e.jsx(n.td,{children:"立即维持生命、阻止快速恶化"}),e.jsx(n.td,{children:"分诊、心肺复苏、气道、休克和创伤处置"}),e.jsx(n.td,{children:"稳定后的病因治疗归 A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A5"}),e.jsx(n.td,{children:"治疗与疾病控制"}),e.jsx(n.td,{children:"治愈、缓解或控制疾病"}),e.jsx(n.td,{children:"药物、手术、介入、放疗、心理治疗、方案调整"}),e.jsx(n.td,{children:"功能恢复归 A6；临终舒适归 A8"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A6"}),e.jsx(n.td,{children:"康复与功能支持"}),e.jsx(n.td,{children:"恢复、维持或代偿功能"}),e.jsx(n.td,{children:"运动、作业、言语、认知康复及辅具适配"}),e.jsx(n.td,{children:"一般生活照护归 A7"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A7"}),e.jsx(n.td,{children:"长期照护与支持性护理"}),e.jsx(n.td,{children:"维持长期健康、安全和生活能力"}),e.jsx(n.td,{children:"慢病照护、伤口管路、居家护理、照护者指导"}),e.jsx(n.td,{children:"护士完成的诊断或治疗仍归 A3/A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"A8"}),e.jsx(n.td,{children:"姑息与临终关怀"}),e.jsx(n.td,{children:"减轻严重疾病相关痛苦"}),e.jsx(n.td,{children:"疼痛控制、心理社会支持、临终和哀伤支持"}),e.jsx(n.td,{children:"以疾病控制为主的治疗归 A5"})]})]})]}),`
`,e.jsx(n.h3,{children:"A类边界原则"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“是什么问题”归 A3，“怎么办”归 A5；"}),`
`,e.jsx(n.li,{children:"疾病控制归 A5，功能改善归 A6；"}),`
`,e.jsx(n.li,{children:"维持长期生活照护归 A7，严重疾病舒适与尊严归 A8；"}),`
`,e.jsx(n.li,{children:"护理是执行角色和照护功能，不能把护士完成的所有任务都归入 A7。"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{children:"附录 B：人群健康与公共卫生详细标准"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"编码"}),e.jsx(n.th,{children:"类别"}),e.jsx(n.th,{children:"核心目的"}),e.jsx(n.th,{children:"典型任务"}),e.jsx(n.th,{children:"关键边界"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"B1"}),e.jsx(n.td,{children:"人群健康监测"}),e.jsx(n.td,{children:"持续掌握趋势和分布"}),e.jsx(n.td,{children:"传染病、慢病、死亡和危险因素监测"}),e.jsx(n.td,{children:"常态监测区别于专题调查"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"B2"}),e.jsx(n.td,{children:"公共卫生调查与风险评估"}),e.jsx(n.td,{children:"查明异常信号的来源、范围和风险"}),e.jsx(n.td,{children:"流调、接触者调查、暴露和传播链分析"}),e.jsx(n.td,{children:"实际控制行动归 B4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"B3"}),e.jsx(n.td,{children:"人群健康促进与风险预防"}),e.jsx(n.td,{children:"在事件发生前降低群体风险"}),e.jsx(n.td,{children:"大规模接种、学校健康、控烟和筛查项目"}),e.jsx(n.td,{children:"紧急事件处置归 B4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"B4"}),e.jsx(n.td,{children:"公共卫生控制与应急处置"}),e.jsx(n.td,{children:"控制已经发生或迫近的事件"}),e.jsx(n.td,{children:"隔离检疫、暴发处置、灾害响应"}),e.jsx(n.td,{children:"常态预防归 B3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"B5"}),e.jsx(n.td,{children:"公共卫生项目与政策评价"}),e.jsx(n.td,{children:"评价项目效果、公平性和经济性"}),e.jsx(n.td,{children:"覆盖率、效果、健康影响和成本效果评价"}),e.jsx(n.td,{children:"行业规则制定归 C7"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{children:"附录 C：医疗系统运行与治理详细标准"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"编码"}),e.jsx(n.th,{children:"类别"}),e.jsx(n.th,{children:"主要管理对象"}),e.jsx(n.th,{children:"典型任务"}),e.jsx(n.th,{children:"关键边界"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C1"}),e.jsx(n.td,{children:"医疗服务组织与运营"}),e.jsx(n.td,{children:"流程、容量、时间和空间资源"}),e.jsx(n.td,{children:"排班、床位、手术室、转诊和患者流管理"}),e.jsx(n.td,{children:"质量风险控制归 C6"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C2"}),e.jsx(n.td,{children:"卫生人力管理"}),e.jsx(n.td,{children:"现有医疗工作人员"}),e.jsx(n.td,{children:"人力规划、岗位、资质和绩效"}),e.jsx(n.td,{children:"正式能力培养归 D4"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C3"}),e.jsx(n.td,{children:"医疗信息与数据治理"}),e.jsx(n.td,{children:"数据资产、标准、权限和交换"}),e.jsx(n.td,{children:"病案、编码、数据质量、隐私和互操作"}),e.jsx(n.td,{children:"个体诊断信息采集归 A3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C4"}),e.jsx(n.td,{children:"药品、器械与医疗技术管理"}),e.jsx(n.td,{children:"已进入使用阶段的产品技术"}),e.jsx(n.td,{children:"采购、库存、药事、药物警戒和设备维护"}),e.jsx(n.td,{children:"新产品研发归 D3"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C5"}),e.jsx(n.td,{children:"医疗筹资、支付与保障"}),e.jsx(n.td,{children:"资金、支付和保险关系"}),e.jsx(n.td,{children:"医保、DRG/DIP、结算、预算和基金监管"}),e.jsx(n.td,{children:"临床治疗选择归 A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C6"}),e.jsx(n.td,{children:"医疗质量与患者安全"}),e.jsx(n.td,{children:"服务过程的可靠性与伤害风险"}),e.jsx(n.td,{children:"院感、病历质控、不良事件和根因分析"}),e.jsx(n.td,{children:"制定行业强制规则归 C7"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"C7"}),e.jsx(n.td,{children:"治理、监管与伦理"}),e.jsx(n.td,{children:"规则、权责和行业秩序"}),e.jsx(n.td,{children:"政策、准入、标准、合规、伦理和问责"}),e.jsx(n.td,{children:"具体流程改进归 C1/C6"})]})]})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{children:"附录 D：医学知识、技术与能力生产详细标准"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"编码"}),e.jsx(n.th,{children:"类别"}),e.jsx(n.th,{children:"主要产出"}),e.jsx(n.th,{children:"典型任务"}),e.jsx(n.th,{children:"关键边界"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"D1"}),e.jsx(n.td,{children:"医学研究与证据生产"}),e.jsx(n.td,{children:"新的、可推广的医学知识"}),e.jsx(n.td,{children:"基础、临床、流行病学和真实世界研究"}),e.jsx(n.td,{children:"当前患者判断归 A3/A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"D2"}),e.jsx(n.td,{children:"证据综合、指南与标准制定"}),e.jsx(n.td,{children:"可重复使用的知识规范"}),e.jsx(n.td,{children:"系统综述、Meta分析、指南、共识和专业标准"}),e.jsx(n.td,{children:"行政强制规则归 C7"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"D3"}),e.jsx(n.td,{children:"药品、器械与诊疗技术研发"}),e.jsx(n.td,{children:"新医疗产品或技术"}),e.jsx(n.td,{children:"药物、器械、试剂和新诊疗技术研发验证"}),e.jsx(n.td,{children:"已有产品管理归 C4，临床使用归 A5"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:"D4"}),e.jsx(n.td,{children:"医学教育与专业能力培养"}),e.jsx(n.td,{children:"医疗专业人员能力"}),e.jsx(n.td,{children:"院校教育、住培、继续教育、带教和考核"}),e.jsx(n.td,{children:"现有人力岗位管理归 C2"})]})]})]})]})}function ue(s={}){const{wrapper:n}={...g(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(M,{...s})}):M(s)}const fe=Object.freeze(Object.defineProperty({__proto__:null,default:ue,frontmatter:pe},Symbol.toStringTag,{value:"Module"})),ke={slug:"about",title:"About"};function T(s){const n={a:"a",h2:"h2",p:"p",strong:"strong",...g(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:"I write notes and build tools. Writing things down is the best way for me to rethink them."}),`
`,e.jsx(n.h2,{children:"What this place is for"}),`
`,e.jsx(n.p,{children:"The Work page is for things I've shipped. The Notes page is for thoughts on products."}),`
`,e.jsx(n.h2,{children:"Contact"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Email"})," — ",e.jsx(n.a,{href:"mailto:tb.jiang@outlook.com",children:"tb.jiang@outlook.com"})]})]})}function be(s={}){const{wrapper:n}={...g(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(T,{...s})}):T(s)}const ye=Object.freeze(Object.defineProperty({__proto__:null,default:be,frontmatter:ke},Symbol.toStringTag,{value:"Module"})),Ae=Object.assign({"/content/portfolio/shadow-coach.mdx":oe}),ve=Object.assign({"/remote-sensing-benchmark-formatted.md":me,"/医疗专业任务分类标准.md":fe}),we=Object.assign({"/content/pages/about.mdx":ye}),j=Object.entries(Ae).map(([s,n])=>{const r=n.frontmatter;return{Component:n.default,title:r.title,slug:r.slug,cover:r.cover,role:r.role,year:r.year,tags:r.tags??[],summary:r.summary,links:r.links??{},featured:r.featured??!1,order:r.order??99}}).sort((s,n)=>(s.order??99)-(n.order??99));function Ne(s){return j.find(n=>n.slug===s)}function Se(s=3){return j.filter(n=>n.featured).slice(0,s)}const o=Object.entries(ve).map(([s,n])=>{const r=n.frontmatter;return{Component:n.default,title:r.title,slug:r.slug,date:r.date,tags:r.tags??[],summary:r.summary,featured:r.featured??!1}}).sort((s,n)=>s.date<n.date?1:-1);function _e(s){return o.find(n=>n.slug===s)}function Ce(s=5){return o.slice(0,s)}function De(s){const n=o.findIndex(r=>r.slug===s);return n===-1?{}:{prev:n<o.length-1?o[n+1]:void 0,next:n>0?o[n-1]:void 0}}const Me=Object.entries(we).map(([s,n])=>{const r=n.frontmatter;return{Component:n.default,slug:r.slug,title:r.title}});function Te(s){return Me.find(n=>n.slug===s)}function Pe(){const s=new Map;for(const n of[...j,...o])for(const r of n.tags)s.set(r,(s.get(r)??0)+1);return Array.from(s.entries()).map(([n,r])=>({tag:n,count:r})).sort((n,r)=>r.count-n.count||n.tag.localeCompare(r.tag))}function Ee(s){return{portfolio:j.filter(n=>n.tags.includes(s)),posts:o.filter(n=>n.tags.includes(s))}}function Ie(){const s=Se(3);return s.length===0?null:e.jsx("section",{className:"py-16 sm:py-20",children:e.jsxs(c,{size:"wide",children:[e.jsxs("div",{className:"flex items-end justify-between mb-10",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"Featured work"}),e.jsx("h2",{className:"mt-3 font-serif text-3xl sm:text-4xl font-semibold text-fg dark:text-fg-dark",children:"Things I've shipped"})]}),e.jsxs(d,{to:"/work",className:"hidden sm:inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All work",e.jsx(p,{size:14})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map((n,r)=>e.jsx(w,{item:n,index:r,featured:!0},n.slug))}),e.jsx("div",{className:"sm:hidden mt-6",children:e.jsxs(d,{to:"/work",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All work",e.jsx(p,{size:14})]})})]})})}function B(s,n={year:"numeric",month:"short",day:"numeric"}){return new Date(s).toLocaleDateString("en-US",n)}function N({post:s,index:n=0}){return e.jsx(A.article,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-30px"},transition:{duration:.35,delay:n*.04,ease:"easeOut"},children:e.jsx(d,{to:`/blog/${s.slug}`,className:"group block py-6 border-b border-border last:border-0",children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"text-xs text-muted dark:text-muted-dark font-mono",children:e.jsx("time",{dateTime:s.date,children:B(s.date)})}),e.jsx("h3",{className:"mt-2 font-serif text-xl sm:text-2xl font-semibold text-fg dark:text-fg-dark leading-snug group-hover:text-accent transition-colors",children:s.title}),e.jsx("p",{className:"mt-2 text-sm text-muted dark:text-muted-dark line-clamp-2 max-w-prose",children:s.summary}),s.tags.length>0&&e.jsx("div",{className:"mt-3 flex gap-1.5 flex-wrap",children:s.tags.slice(0,3).map(r=>e.jsxs("span",{className:"text-[11px] text-muted dark:text-muted-dark",children:["#",r]},r))})]}),e.jsx(p,{size:18,className:"text-muted dark:text-muted-dark group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"})]})})})}function Oe(){const s=Ce(3);return s.length===0?null:e.jsx("section",{className:"py-16 sm:py-20",children:e.jsxs(c,{size:"wide",children:[e.jsxs("div",{className:"flex items-end justify-between mb-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"Notes"}),e.jsx("h2",{className:"mt-3 font-serif text-3xl sm:text-4xl font-semibold text-fg dark:text-fg-dark",children:"Recent writing"})]}),e.jsxs(d,{to:"/blog",className:"hidden sm:inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All notes",e.jsx(p,{size:14})]})]}),e.jsx("div",{className:"mt-6",children:s.map((n,r)=>e.jsx(N,{post:n,index:r},n.slug))}),e.jsx("div",{className:"sm:hidden mt-4",children:e.jsxs(d,{to:"/blog",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All notes",e.jsx(p,{size:14})]})})]})})}function Be(){return e.jsxs(e.Fragment,{children:[e.jsx(he,{}),e.jsx(Ie,{}),e.jsx(Oe,{}),e.jsx("section",{className:"py-20 sm:py-24",children:e.jsx(c,{size:"wide",children:e.jsxs("div",{className:"border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-serif text-2xl font-semibold text-fg dark:text-fg-dark",children:"Want to work together?"}),e.jsx("p",{className:"mt-1 text-sm text-muted dark:text-muted-dark",children:"I'm always open to interesting problems."})]}),e.jsxs(d,{to:"/about",className:"inline-flex items-center gap-2 text-sm text-accent hover:opacity-80 transition-opacity",children:["Get in touch",e.jsx(p,{size:14})]})]})})})]})}function Ge(){return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"pt-16 sm:pt-24 pb-10",children:e.jsxs(c,{size:"wide",children:[e.jsxs("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:["Work · ",j.length," projects"]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:"Selected projects"}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed",children:"A handful of the things I've built or led. The list is short on purpose — quality over completeness."})]})}),e.jsx("section",{className:"pb-24",children:e.jsx(c,{size:"wide",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:j.map((s,n)=>e.jsx(w,{item:s,index:n,featured:!0},s.slug))})})})]})}function S({children:s,className:n=""}){return e.jsx("div",{className:`prose ${n}`,children:s})}function G({tag:s,as:n="link",size:r="sm",className:t=""}){const l=`inline-block rounded-full border border-border bg-transparent text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent ${r==="sm"?"text-xs px-2 py-0.5":"text-sm px-2.5 py-1"} ${t}`;return n==="link"?e.jsxs(d,{to:`/tags/${s}`,className:l,children:["#",s]}):e.jsxs("span",{className:l,children:["#",s]})}function Re(){const{slug:s}=v(),n=s?Ne(s):void 0;if(x.useEffect(()=>{window.scrollTo(0,0)},[s]),!n)return e.jsx(b,{to:"/work",replace:!0});const r=j.findIndex(l=>l.slug===n.slug),t=r>0?j[r-1]:void 0,i=r<j.length-1?j[r+1]:void 0;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative w-full h-[40vh] sm:h-[55vh] overflow-hidden bg-border",children:e.jsx("img",{src:n.cover,alt:n.title,className:"w-full h-full object-cover"})}),e.jsxs(c,{size:"default",children:[e.jsxs("div",{className:"pt-10 sm:pt-14 pb-8 border-b border-border",children:[e.jsxs(d,{to:"/work",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-6",children:[e.jsx(f,{size:14}),"All work"]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-6",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:[n.role," · ",n.year]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:n.title}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed",children:n.summary})]}),e.jsxs("div",{className:"flex gap-3 flex-shrink-0",children:[n.links.live&&e.jsxs("a",{href:n.links.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-colors",children:[e.jsx(Y,{size:14}),"Live"]}),n.links.repo&&e.jsxs("a",{href:n.links.repo,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-colors",children:[e.jsx(Z,{size:14}),"Repo"]})]})]}),n.tags.length>0&&e.jsx("div",{className:"mt-6 flex gap-2 flex-wrap",children:n.tags.map(l=>e.jsx(G,{tag:l,size:"md"},l))})]}),e.jsx("div",{className:"py-12 sm:py-16",children:e.jsx(S,{children:e.jsx(n.Component,{})})}),e.jsxs("div",{className:"border-t border-border py-10 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[i?e.jsxs(d,{to:`/work/${i.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors",children:[e.jsx("div",{className:"text-xs text-muted dark:text-muted-dark",children:"← Previous"}),e.jsx("div",{className:"mt-1 font-serif text-lg font-semibold group-hover:text-accent transition-colors",children:i.title})]}):e.jsx("div",{}),t?e.jsxs(d,{to:`/work/${t.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors text-right sm:text-left",children:[e.jsx("div",{className:"text-xs text-muted dark:text-muted-dark",children:"Next →"}),e.jsx("div",{className:"mt-1 font-serif text-lg font-semibold group-hover:text-accent transition-colors",children:t.title})]}):e.jsx("div",{})]})]})]})}function We(){return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"pt-16 sm:pt-24 pb-10",children:e.jsxs(c,{size:"wide",children:[e.jsxs("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:["Notes · ",o.length," posts"]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:"Field notes"}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed",children:"Short, occasional writing about building, design, and the small things that accumulate into a craft."})]})}),e.jsx("section",{className:"pb-24",children:e.jsx(c,{size:"wide",children:e.jsx("div",{className:"max-w-3xl",children:o.map((s,n)=>e.jsx(N,{post:s,index:n},s.slug))})})})]})}function $e(){const{slug:s}=v(),n=s?_e(s):void 0,{prev:r,next:t}=s?De(s):{};return x.useEffect(()=>{window.scrollTo(0,0)},[s]),n?e.jsx("article",{children:e.jsxs(c,{size:"default",children:[e.jsxs("header",{className:"pt-16 sm:pt-24 pb-10 border-b border-border",children:[e.jsxs(d,{to:"/blog",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8",children:[e.jsx(f,{size:14}),"All notes"]}),e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:e.jsx("time",{dateTime:n.date,children:B(n.date)})}),e.jsx("h1",{className:"mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-fg dark:text-fg-dark leading-[1.1] tracking-tight max-w-3xl",children:n.title}),e.jsx("p",{className:"mt-6 text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-2xl",children:n.summary}),n.tags.length>0&&e.jsx("div",{className:"mt-8 flex gap-2 flex-wrap",children:n.tags.map(i=>e.jsx(G,{tag:i,size:"md"},i))})]}),e.jsx("div",{className:"py-12 sm:py-16",children:e.jsx(S,{children:e.jsx(n.Component,{})})}),e.jsxs("div",{className:"border-t border-border py-10 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[r?e.jsxs(d,{to:`/blog/${r.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors",children:[e.jsxs("div",{className:"text-xs text-muted dark:text-muted-dark inline-flex items-center gap-1",children:[e.jsx(f,{size:12})," Older"]}),e.jsx("div",{className:"mt-1 font-serif text-base font-semibold group-hover:text-accent transition-colors line-clamp-2",children:r.title})]}):e.jsx("div",{}),t?e.jsxs(d,{to:`/blog/${t.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors text-right",children:[e.jsxs("div",{className:"text-xs text-muted dark:text-muted-dark inline-flex items-center gap-1 sm:justify-end",children:["Newer ",e.jsx(p,{size:12})]}),e.jsx("div",{className:"mt-1 font-serif text-base font-semibold group-hover:text-accent transition-colors line-clamp-2",children:t.title})]}):e.jsx("div",{})]})]})}):e.jsx(b,{to:"/blog",replace:!0})}function ze(){const{tag:s}=v(),n=s??"",{portfolio:r,posts:t}=Ee(n),l=Pe().find(h=>h.tag===n);return l?e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"pt-16 sm:pt-24 pb-10",children:e.jsxs(c,{size:"wide",children:[e.jsxs(d,{to:"/",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8",children:[e.jsx(f,{size:14}),"Back home"]}),e.jsxs("div",{className:"flex items-center gap-3 text-muted dark:text-muted-dark",children:[e.jsx(ee,{size:24,className:"text-accent"}),e.jsx("span",{className:"font-mono text-sm uppercase tracking-wider",children:"Tag"})]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark",children:l.tag}),e.jsxs("p",{className:"mt-4 text-muted dark:text-muted-dark",children:[r.length+t.length," item",r.length+t.length===1?"":"s"," tagged with this"]})]})}),r.length>0&&e.jsx("section",{className:"pb-12",children:e.jsxs(c,{size:"wide",children:[e.jsx("h2",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase mb-6",children:"Work"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map((h,u)=>e.jsx(w,{item:h,index:u,featured:!0},h.slug))})]})}),t.length>0&&e.jsx("section",{className:"pb-24",children:e.jsxs(c,{size:"wide",children:[e.jsx("h2",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase mb-6",children:"Notes"}),e.jsx("div",{className:"max-w-3xl",children:t.map((h,u)=>e.jsx(N,{post:h,index:u},h.slug))})]})})]}):e.jsx(b,{to:"/",replace:!0})}function Le(){const s=Te("about");return x.useEffect(()=>{window.scrollTo(0,0)},[]),s?e.jsxs(c,{size:"default",children:[e.jsxs("section",{className:"pt-16 sm:pt-24 pb-10",children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"About"}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:s.title})]}),e.jsx("section",{className:"pb-24",children:e.jsx(S,{children:e.jsx(s.Component,{})})})]}):e.jsx(b,{to:"/",replace:!0})}function qe(){return e.jsx(c,{size:"narrow",children:e.jsxs("section",{className:"pt-32 pb-24 text-center",children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"404"}),e.jsx("h1",{className:"mt-4 font-serif text-5xl sm:text-6xl font-semibold text-fg dark:text-fg-dark",children:"Not here."}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-md mx-auto",children:"The page you were looking for either moved, never existed, or is still in draft."}),e.jsxs(d,{to:"/",className:"mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg dark:bg-fg-dark text-bg dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity",children:[e.jsx(f,{size:14}),"Back home"]})]})})}function Fe(){return x.useEffect(()=>{document.documentElement.classList.add("antialiased")},[]),e.jsxs(q,{children:[e.jsx(V,{}),e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(de,{}),e.jsx("main",{className:"flex-1",children:e.jsxs(F,{children:[e.jsx(m,{path:"/",element:e.jsx(Be,{})}),e.jsx(m,{path:"/work",element:e.jsx(Ge,{})}),e.jsx(m,{path:"/work/:slug",element:e.jsx(Re,{})}),e.jsx(m,{path:"/blog",element:e.jsx(We,{})}),e.jsx(m,{path:"/blog/:slug",element:e.jsx($e,{})}),e.jsx(m,{path:"/tags/:tag",element:e.jsx(ze,{})}),e.jsx(m,{path:"/about",element:e.jsx(Le,{})}),e.jsx(m,{path:"*",element:e.jsx(qe,{})})]})}),e.jsx(ce,{})]})]})}const He={};E(document.getElementById("root")).render(e.jsx(x.StrictMode,{children:e.jsx(H,{components:He,children:e.jsx(Fe,{})})}));
