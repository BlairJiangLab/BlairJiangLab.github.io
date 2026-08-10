import{j as e,m as y}from"./motion-D88nQ0J8.js";import{a as B,R as k,u as S,r as c,L as o,N as q,b as v,c as b,B as J,d as H,e as g}from"./react-CpPsYu-k.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var P,_=B;P=_.createRoot,_.hydrateRoot;const w={},$=k.createContext(w);function x(s){const t=k.useContext($);return k.useMemo(function(){return typeof s=="function"?s(t):{...t,...s}},[t,s])}function X(s){let t;return s.disableParentContext?t=typeof s.components=="function"?s.components(w):s.components||w:t=x(s.components),k.createElement($.Provider,{value:t},s.children)}function V(){const{pathname:s,hash:t}=S();return c.useEffect(()=>{if(t){const n=document.querySelector(t);if(n){n.scrollIntoView({behavior:"smooth"});return}}window.scrollTo(0,0)},[s,t]),null}function l({children:s,size:t="default",className:n=""}){const r={narrow:"max-w-2xl",default:"max-w-5xl",wide:"max-w-6xl"};return e.jsx("div",{className:`mx-auto px-6 sm:px-8 ${r[t]} ${n}`,children:s})}/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=(...s)=>s.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=c.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:i,iconNode:d,...f},R)=>c.createElement("svg",{ref:R,...G,width:t,height:t,stroke:s,strokeWidth:r?Number(n)*24/Number(t):n,className:L("lucide",a),...f},[...d.map(([E,F])=>c.createElement(E,F)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(s,t)=>{const n=c.forwardRef(({className:r,...a},i)=>c.createElement(K,{ref:i,iconNode:t,className:L(`lucide-${U(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=u("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=u("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=u("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=u("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=u("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=u("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=u("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=u("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=u("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=u("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function ae(){const[s,t]=c.useState(()=>{if(typeof window>"u")return"light";const r=localStorage.getItem("theme");return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});return c.useEffect(()=>{const r=document.documentElement;s==="dark"?r.classList.add("dark"):r.classList.remove("dark");try{localStorage.setItem("theme",s)}catch{}},[s]),[s,()=>t(r=>r==="dark"?"light":"dark")]}function ie(){const[s,t]=ae();return e.jsx("button",{onClick:t,"aria-label":`Switch to ${s==="dark"?"light":"dark"} mode`,className:"p-2 rounded-md text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:s==="dark"?e.jsx(re,{size:18}):e.jsx(se,{size:18})})}const oe=[{to:"/",label:"Home",end:!0},{to:"/work",label:"Work"},{to:"/blog",label:"Notes"},{to:"/about",label:"About"}];function le(){const t=S().pathname==="/";return e.jsx("header",{className:`sticky top-0 z-40 backdrop-blur-md bg-bg/80 dark:bg-bg-dark/80 border-b border-border transition-colors ${t?"border-transparent":""}`,children:e.jsx(l,{size:"wide",children:e.jsxs("div",{className:"flex items-center justify-between h-16",children:[e.jsx(o,{to:"/",className:"font-serif text-lg font-semibold tracking-tight text-fg dark:text-fg-dark hover:text-accent transition-colors",children:"Blair"}),e.jsxs("nav",{className:"flex items-center gap-1 sm:gap-2",children:[oe.map(n=>e.jsx(q,{to:n.to,end:n.end,className:({isActive:r})=>`px-3 py-1.5 text-sm rounded-md transition-colors ${r?"text-fg dark:text-fg-dark":"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark"}`,children:n.label},n.to)),e.jsx("div",{className:"ml-1 pl-2 border-l border-border",children:e.jsx(ie,{})})]})]})})})}function de(){return e.jsx("footer",{className:"mt-32 border-t border-border py-12",children:e.jsxs(l,{size:"wide",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-base font-semibold text-fg dark:text-fg-dark",children:"Blair"}),e.jsx("p",{className:"text-sm text-muted dark:text-muted-dark mt-1",children:"Selected work and field notes."})]}),e.jsxs("div",{className:"flex items-center gap-5 text-sm",children:[e.jsx(o,{to:"/work",className:"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:"Work"}),e.jsx(o,{to:"/blog",className:"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:"Notes"}),e.jsx(o,{to:"/about",className:"text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark transition-colors",children:"About"}),e.jsxs("a",{href:"/rss.xml",className:"text-muted dark:text-muted-dark hover:text-accent transition-colors flex items-center gap-1.5","aria-label":"RSS feed",children:[e.jsx(ne,{size:14}),e.jsx("span",{children:"RSS"})]})]})]}),e.jsxs("div",{className:"mt-8 text-xs text-muted dark:text-muted-dark",children:["© ",new Date().getFullYear()," · Built with care"]})]})})}function ce(){return e.jsx("section",{className:"pt-16 sm:pt-24 pb-20 sm:pb-28",children:e.jsx(l,{size:"wide",children:e.jsxs(y.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"},className:"max-w-3xl",children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"Portfolio · Notes · Tools"}),e.jsxs("h1",{className:"mt-5 font-serif text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight text-fg dark:text-fg-dark",children:["Welcome to ",e.jsx("span",{className:"text-accent italic",children:"Blair's Log"})]}),e.jsx("p",{className:"mt-7 text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-2xl",children:"Product manager, focusing on search and AI, selected work and the thinking behind it"}),e.jsxs("div",{className:"mt-10 flex items-center gap-4",children:[e.jsxs(o,{to:"/work",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg dark:bg-fg-dark text-bg dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity",children:["See the work",e.jsx(Y,{size:14})]}),e.jsx(o,{to:"/blog",className:"inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-fg dark:text-fg-dark text-sm font-medium hover:border-accent hover:text-accent transition-colors",children:"Read the notes"})]})]})})})}function N({item:s,index:t=0,featured:n=!1}){return e.jsx(y.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.4,delay:t*.05,ease:"easeOut"},children:e.jsxs(o,{to:`/work/${s.slug}`,className:"group block overflow-hidden rounded-lg border border-border bg-card dark:bg-card-dark transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]",children:[e.jsx("div",{className:"relative aspect-[16/10] overflow-hidden bg-border",children:e.jsx("img",{src:s.cover,alt:s.title,loading:"lazy",className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"})}),e.jsxs("div",{className:"p-5 sm:p-6",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("h3",{className:"font-serif text-lg sm:text-xl font-semibold text-fg dark:text-fg-dark leading-tight",children:s.title}),e.jsxs("div",{className:"mt-1.5 text-xs text-muted dark:text-muted-dark flex items-center gap-2 flex-wrap",children:[e.jsx("span",{children:s.role}),e.jsx("span",{className:"opacity-50",children:"·"}),e.jsx("span",{children:s.year})]})]}),e.jsx(Z,{size:18,className:"text-muted dark:text-muted-dark group-hover:text-accent transition-colors flex-shrink-0 mt-1"})]}),e.jsx("p",{className:"mt-3 text-sm text-muted dark:text-muted-dark line-clamp-2",children:s.summary}),n&&s.tags.length>0&&e.jsx("div",{className:"mt-4 flex gap-1.5 flex-wrap",children:s.tags.slice(0,3).map(r=>e.jsx("span",{className:"text-[11px] px-2 py-0.5 rounded-full border border-border text-muted dark:text-muted-dark",children:r},r))})]})]})})}const xe={title:"ShadowCoach",slug:"shadow-coach",cover:"/covers/currents.svg",role:"Product & Vibe Coding",year:2026,tags:["AI","Vibe Coding","Agent"],summary:"我 Vibe Coding 了一个 AI 求职教练",links:{live:"https://www.shadowcoach.cn/",repo:""},featured:!0,order:1};function T(s){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"ShadowCoach 是一款 AI 简历优化工具。用户上传简历并输入目标岗位 JD 后，系统会分析岗位要求与候选人经历，识别信息缺口，必要时主动追问，再生成针对岗位优化的简历。"}),`
`,e.jsx(t.p,{children:"我通过这个项目跑通了从需求调研、产品设计、Agent 架构迭代，到登录、支付和部署的完整 Vibe Coding 流程。"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"1. WHY：为什么做这个项目"}),`
`,e.jsx(t.h3,{children:"从想法拆解到需求收缩"}),`
`,e.jsx(t.p,{children:"最初，我想寻找一个可以由个人完成闭环的项目，验证“一个人 + AI”能否真正完成从需求发现、产品开发到获得商业收入的全过程。以此为目标，我认为项目选题需要满足以下条件："}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"存在真实需求、目标用户和可验证的市场；"}),`
`,e.jsx(t.li,{children:"有竞品未满足的需求空间；"}),`
`,e.jsx(t.li,{children:"可以在线完成获客、使用和付费，不依赖线下资产、地推或专业知识库；"}),`
`,e.jsx(t.li,{children:"不涉及医疗、法律等高风险决策场景，降低错误结果可能带来的严重影响；"}),`
`,e.jsx(t.li,{children:"实现复杂度可控，能够快速推出 MVP 并验证核心需求。"}),`
`]}),`
`,e.jsx(t.p,{children:"求职辅助与职业规划 Agent 基本符合这些条件。但完整的职业规划涉及大量场景，初期范围仍然过大，因此我先将需求收缩为一个更明确的任务："}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"根据目标岗位的 JD，帮助用户有针对性地优化简历。"}),`
`]}),`
`,e.jsx(t.p,{children:"接下来需要验证两个问题：用户是否确实存在这一需求，以及现有产品为什么还没有充分解决它。"}),`
`,e.jsx(t.h3,{children:"需求与竞品调研"}),`
`,e.jsx(t.p,{children:"需求上，社交平台上可以看到有大量用户找业内资深人员辅助修改简历、模拟面试等求职诉求。Agent 的目标应当是能够达到真实资深从业者的修改水平与信任感。其次，在求职时针对不同 JD，用户常有进行针对性微调的诉求，产品能一键调整优化，省时省力。"}),`
`,e.jsx(t.p,{children:"已有的产品上，当前可以分为两类："}),`
`,e.jsx(t.h4,{children:"1. 通用 AI"}),`
`,e.jsx(t.p,{children:"使用 ChatGPT、DeepSeek 等通用模型优化简历很方便，但实际效果并不稳定："}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"模型容易停留在关键词匹配，没有理解岗位真正关注的能力；"}),`
`,e.jsx(t.li,{children:"为了迎合 JD，可能添加用户没有提供的经历或成果，难以建立信任；"}),`
`,e.jsx(t.li,{children:"多轮修改时，局部要求可能导致整份简历发生变化，部分产品无法直接输出文档结果。"}),`
`]}),`
`,e.jsx(t.h4,{children:"2. 简历优化垂直产品"}),`
`,e.jsx(t.p,{children:"这类产品主要集中在简历模板、ATS 评分、JD 匹配和一键改写："}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"优化结果偏重关键词和格式，缺少对经历结构与叙事逻辑的改善；"}),`
`,e.jsx(t.li,{children:"修改过程缺少原因说明，用户难以判断内容是否可信；"}),`
`,e.jsx(t.li,{children:"对局部修改和多轮持续优化的支持有限。"}),`
`]}),`
`,e.jsx(t.h3,{children:"ShadowCoach 的切入点"}),`
`,e.jsx(t.p,{children:"基于这些观察，我为 ShadowCoach 确定了三个核心方向："}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"让简历表达更清晰、更契合、更可信"})}),`
`,e.jsx(t.p,{children:"优化经历的结构和叙事逻辑，避免流水账式描述，并说明关键修改的原因。生成前抽取简历事实，生成后检查新增内容和修改范围，避免编造经历。"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"在证据不足时主动追问"})}),`
`,e.jsx(t.p,{children:"识别简历与 JD 之间的证据缺口。当关键信息不足时，先向用户提问，再使用用户确认过的事实进行优化。"}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsx(t.p,{children:e.jsx(t.strong,{children:"支持可控的持续修改"})}),`
`,e.jsx(t.p,{children:"用户可以通过多轮对话继续调整简历，也可以只修改指定部分，避免一个局部要求影响全文。最终结果可以直接导出使用。"}),`
`]}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"2. HOW：产品方案与架构演进"}),`
`,e.jsx(t.h3,{children:"产品功能：从一次生成到持续优化"}),`
`,e.jsx(t.p,{children:"ShadowCoach 的第一版只完成了一件事：用户上传简历和目标岗位 JD，系统生成一份优化稿。这个流程适合快速验证需求，但一次生成很难直接得到可以投递的最终版本。"}),`
`,e.jsxs(t.p,{children:["用户通常还会继续提出更具体的要求，例如强化某段经历、调整表达语气、压缩内容，或者只修改其中一个模块。因此，第一个重要改动是加入",e.jsx(t.strong,{children:"多轮对话持续调优"}),"：系统保留当前版本和对话上下文，用户可以围绕已有结果继续修改，而不必每次重新生成整份简历。"]}),`
`,e.jsxs(t.p,{children:["第二个改动来自另一个更关键的问题：当 JD 需要某项能力，而用户简历中没有相关信息时，系统不应该直接猜测或跳过。为此，我加入了",e.jsx(t.strong,{children:"证据不足时主动追问"}),"的能力。系统先识别岗位要求与现有经历之间的信息缺口，再决定直接生成，还是先请用户补充事实。"]}),`
`,e.jsx(t.p,{children:"产品流程因此从一次改写，逐步演进为："}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-text",children:`上传简历与 JD
→ 分析岗位和候选人经历
→ 判断证据是否充分
→ 主动追问或生成优化稿
→ 查看修改原因
→ 通过多轮对话继续局部优化
→ 导出简历
`})}),`
`,e.jsx(t.p,{children:"这两个功能改动也推动了底层架构的持续调整。"}),`
`,e.jsx(t.h3,{children:"第一阶段：单 Prompt + Dify"}),`
`,e.jsx(t.p,{children:"第一版采用单 Prompt：模型在一次调用中完成 JD 理解、简历分析和内容改写。工作流最初通过 Dify 实现，优点是搭建速度快，适合验证最基本的产品链路。"}),`
`,e.jsx(t.p,{children:"但在持续测试中，单 Prompt 的问题反复出现："}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"同一份输入多次生成，优化结果差异较大；"}),`
`,e.jsx(t.li,{children:"多轮对话缺少稳定记忆，前后内容和格式容易跳变；"}),`
`,e.jsx(t.li,{children:"用户只要求修改局部内容时，模型可能改动整份简历；"}),`
`,e.jsx(t.li,{children:"对经历的结构化和表达逻辑优化不足；"}),`
`,e.jsx(t.li,{children:"某些情况下输出与原文几乎没有区别，没有产生实际优化。"}),`
`]}),`
`,e.jsx(t.p,{children:"与此同时，Dify 在较长任务中频繁出现超时。它适合快速搭建原型，但无法满足生产环境对稳定性、超时控制和问题排查的要求。"}),`
`,e.jsx(t.p,{children:"这些现象说明，继续在一个 Prompt 中增加规则并不能解决根本问题。岗位分析、事实理解、结构规划和文字改写需要被拆开处理，多轮状态也需要由系统显式管理。"}),`
`,e.jsx(t.h3,{children:"第二阶段：多阶段固定 Workflow"}),`
`,e.jsx(t.p,{children:"第二版将一次大模型调用拆分为多个固定节点："}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-text",children:`解析简历与 JD
→ 分析岗位要求
→ 抽取候选人经历
→ 规划优化方向
→ 生成简历
→ 检查结果
`})}),`
`,e.jsx(t.p,{children:"每个节点只负责一类任务，使输出比单 Prompt 更稳定，也更容易定位问题。多轮修改时，系统可以保留当前简历版本，并将修改范围传递给对应节点，从而减少无关内容和格式发生变化。"}),`
`,e.jsx(t.p,{children:"这一阶段也将模型调用从 Dify 迁移到 Node.js 后端直连。系统可以自行管理调用超时、失败重试、阶段日志和模型参数，更适合继续开发和线上运行。"}),`
`,e.jsx(t.p,{children:"固定 Workflow 改善了稳定性，但仍然存在两个明显限制。"}),`
`,e.jsx(t.p,{children:"第一，不同岗位关注的核心能力并不相同。固定节点可以完成通用分析，却很难根据具体 JD 动态决定应该重点判断哪些能力，以及是否需要调整简历结构。"}),`
`,e.jsx(t.p,{children:"第二，当简历缺少岗位需要的相关经历时，固定流程仍然会继续执行，不会主动暂停并要求用户补充信息。"}),`
`,e.jsx(t.p,{children:"这两个问题都需要系统根据当前上下文动态决定下一步，而不是始终执行相同的节点顺序。"}),`
`,e.jsx(t.h3,{children:"第三阶段：在固定流程中引入 Agentic Workflow"}),`
`,e.jsx(t.p,{children:"第三版没有推翻原有 Workflow，而是在关键判断环节引入 Agentic Workflow。"}),`
`,e.jsx(t.p,{children:"Agent 先结合 JD 和候选人经历判断当前岗位最需要关注的能力，再决定后续应该使用哪些分析与改写步骤。如果关键能力缺少事实支持，Agent 可以暂停生成并发起追问；用户补充信息后，再回到后续优化流程。"}),`
`,e.jsx(t.p,{children:"它主要解决了两个问题："}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"针对不同岗位识别不同的分析重点，并据此调整简历的内容重点和结构；"}),`
`,e.jsx(t.li,{children:"在证据不足时主动追问，而不是继续生成或编造内容。"}),`
`]}),`
`,e.jsx(t.p,{children:"固定 Workflow 继续负责简历解析、事实抽取、内容生成和结果检查等相对确定的任务；Agent 只负责那些需要根据上下文动态判断的环节。最终形成的是固定流程与 Agent 决策结合的混合架构。"}),`
`,e.jsx(t.h3,{children:"为什么没有直接改成纯 Agent 架构"}),`
`,e.jsx(t.p,{children:"引入 Agentic Workflow 后，一个自然的问题是：为什么不让 Agent 接管整个流程？"}),`
`,e.jsx(t.p,{children:"首先，现有固定 Workflow 已经跑通，通用场景下的效果也基本可用。完全重构为纯 Agent，意味着重新设计工具、状态、上下文和执行边界，改动成本较高，也会增加新的不确定性。"}),`
`,e.jsx(t.p,{children:"其次，完整流程的调用时间已经较长。如果每一步都由 Agent 动态规划和调用，整体延迟与模型成本还会继续上升，而用户未必能够感知到对应的价值提升。"}),`
`,e.jsx(t.p,{children:"因此，我选择先保留已经有效的固定流程，只在它无法解决的动态判断环节引入 Agent。先跑通完整产品闭环，再根据真实使用中的问题继续迭代，而不是为了架构形式提前完成一次大规模重构。"}),`
`,e.jsx(t.h3,{children:"模型选择：中文能力接近时优先考虑成本"}),`
`,e.jsx(t.p,{children:"在模型选择上，我主要比较了 DeepSeek、Kimi 和 GPT 的中文简历改写表现，包括语言自然度、结构调整和对修改要求的理解。"}),`
`,e.jsx(t.p,{children:"从现阶段的主观测试体感来看，三者在这个任务上的差距并不明显，还不足以抵消调用成本上的差异。因此，实验阶段优先使用 DeepSeek Pro，同时保留模型切换能力，便于后续根据质量、速度和成本继续比较。"}),`
`,e.jsx(t.h3,{children:"从原型补齐为可使用的产品"}),`
`,e.jsx(t.p,{children:"AI 工作流跑通后，项目仍然只是一个功能原型。为了完成从使用到交易的闭环，我继续补齐了文件解析、登录、额度、支付、版本管理、导出和服务器部署等能力。"}),`
`,e.jsx(t.p,{children:"目前 ShadowCoach 已实现："}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Word、PDF 和文本简历输入；"}),`
`,e.jsx(t.li,{children:"JD 匹配与能力诊断；"}),`
`,e.jsx(t.li,{children:"证据缺口识别与主动追问；"}),`
`,e.jsx(t.li,{children:"简历生成和局部多轮优化；"}),`
`,e.jsx(t.li,{children:"修改高亮、原因说明与版本管理；"}),`
`,e.jsx(t.li,{children:"TXT、Word 和 PDF 导出；"}),`
`,e.jsx(t.li,{children:"登录、额度和支付宝支付；"}),`
`,e.jsx(t.li,{children:"多模型适配、超时重试。"}),`
`]}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"3. Thoughts & Experiences：复盘体会"}),`
`,e.jsx(t.h3,{children:"复杂任务中，Prompt 不能替代架构"}),`
`,e.jsx(t.p,{children:"Prompt 适合约束单次任务，但当任务同时涉及理解、判断、状态变化和结果验证时，继续增加规则只会把复杂度藏在一段文本里。"}),`
`,e.jsx(t.p,{children:"更有效的方式是拆分职责：让每个阶段只处理一类问题，并通过明确的输入、输出和校验条件连接起来。架构并不能保证模型永远正确，但可以让错误更容易发现、定位和修复。"}),`
`,e.jsx(t.h3,{children:"追问不是生成失败，而是产品能力"}),`
`,e.jsx(t.p,{children:"很多 AI 产品默认用户提交信息后就应该立即给出答案。但信息不足时，立即生成往往意味着猜测。"}),`
`,e.jsx(t.p,{children:"与其输出一份流畅但失真的简历，不如先提出一个准确的问题。一次好的追问可以补充事实、校正理解，也能让用户知道系统为什么无法直接下结论。"}),`
`,e.jsx(t.p,{children:"从这个角度看，追问不是模型能力不足的补救措施，而是人机协作流程的一部分。但这一点仍需要真实用户的反馈验证。"}),`
`,e.jsx(t.h3,{children:"Vibe Coding 改变了瓶颈，但没有替代产品判断"}),`
`,e.jsx(t.p,{children:"AI 显著提高了页面开发、代码修改和问题排查的效率，让一个人完成前后端、模型接入、支付和部署成为可能。但实现成本下降之后，真正的瓶颈转移到了需求选择、质量标准和架构取舍。"}),`
`,e.jsx(t.p,{children:"AI 可以快速生成一个可运行的版本，却不会自动判断这个功能是否值得做、结果是否足够可信，以及什么时候应该停止增加功能。因此，Vibe Coding 降低了“做出来”的门槛，也让“为什么做”和“做到什么程度”变得更加重要。"}),`
`,e.jsx(t.h3,{children:"从 Demo 到产品，主要工作发生在主流程之外"}),`
`,e.jsx(t.p,{children:"“输入简历和 JD，输出优化稿”很快就能做出演示，但一个真实可用的产品还需要处理文件格式、登录状态、额度、支付、失败重试、版本恢复、结果导出和线上部署。"}),`
`,e.jsx(t.p,{children:"这些工作不一定展示模型能力，却直接决定用户能否顺利完成一次完整任务。对个人开发者而言，跑通主流程只是开始，补齐异常与交易闭环才是从 Demo 走向产品的关键一步。"}),`
`,e.jsx(t.h3,{children:"模型也会“偷懒”"}),`
`,e.jsx(t.p,{children:"在开发过程中，我有过两次比较明显的重构尝试：一次是将现有架构调整为更灵活、自主性更强的 Agent；另一次是按照新的设计方案重做 UI 交互。"}),`
`,e.jsx(t.p,{children:"两次尝试都暴露出类似的问题：模型倾向于选择更容易实现、对现有代码改动更小的方案，而不是优先考虑最终效果。"}),`
`,e.jsx(t.p,{children:"在最初讨论架构时，即使我希望通过 Agent 获得更灵活的决策效果，模型仍然优先给出了固定 Workflow 方案。后续发现问题并明确要求调整为 Agent 架构后，它依然倾向于保留原有流程，只在局部增加判断节点或模型调用。即使反复说明重构目标和预期效果，模型也很少主动推翻已有设计，而是不断将新需求重新解释为对现有 Workflow 的增量修改。"}),`
`,e.jsx(t.p,{children:"UI 重构中也出现了类似的情况。即使已经提供较完整的交互说明和设计要求，模型仍然会大量复用现有组件、布局和样式，通过小范围调整来接近目标，而不是按照新的设计重新组织页面。最终结果往往在功能上“完成了修改”，但与预期的交互和视觉效果仍有明显差距。"}),`
`,e.jsx(t.p,{children:"这两次尝试让我意识到，充分表达需求并不一定能让模型真正执行结构性调整。在已有代码和架构的影响下，模型表现出了明显的路径依赖：优先复用现有实现、缩小改动范围，并尽快产出一个可以运行的结果。即使这条路径不能实现更好的产品效果，它仍然可能成为模型优先选择的方案。"}),`
`,e.jsx(t.p,{children:"后续进行较大改动时，我会尝试把“方案设计”和“代码实现”彻底拆开。先要求模型停止编码，只讨论架构、页面结构和交互方案；确认设计后，再将任务拆成明确的迁移步骤逐步执行。同时，需要明确指出哪些旧结构必须被替换，而不只是描述希望新增什么能力。"}),`
`,e.jsx(t.p,{children:"对于结构性重构，仅仅说明目标可能还不够，还需要明确重构边界，并限制模型继续沿用旧方案的空间。"}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{children:"总结"}),`
`,e.jsx(t.p,{children:"ShadowCoach 从一个单 Prompt 的简历优化页面，逐步演进为一套能够分析、追问、改写和校验的受控 Agent Loop，也让我完整经历了一次从需求判断到产品上线的 Vibe Coding 实践。"}),`
`,e.jsx(t.p,{children:"这个过程中，我逐渐形成了一个更明确的分工原则："}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsx(t.p,{children:"让模型负责理解与生成，让 Harness 负责上下文、状态、事实与执行边界。"}),`
`]})]})}function he(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(T,{...s})}):T(s)}const me=Object.freeze(Object.defineProperty({__proto__:null,default:he,frontmatter:xe},Symbol.toStringTag,{value:"Module"})),ue={title:"Building Tools That Disappear",slug:"building-tools-that-disappear",date:"2026-07-12",tags:["tools","design"],summary:"The best tool I've used this year is the one I forget I'm using. A short note on what it means to design for invisibility.",featured:!0};function C(s){const t={em:"em",h2:"h2",p:"p",strong:"strong",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["There's a test I now use for any tool I build: ",e.jsx(t.strong,{children:"can I forget it's there?"})," If I have to think about the tool while I'm doing the thing, the tool has failed. The button is too small, the keyboard shortcut is too long, the menu is in the wrong place — something is asking for my attention that shouldn't need to."]}),`
`,e.jsx(t.h2,{children:'The graveyard of "powerful" features'}),`
`,e.jsx(t.p,{children:`Almost every "powerful" feature I've added to a product in the last five years was a confession of defeat. A powerful feature is usually a feature that should have been a default, an automatic, or a one-time decision.`}),`
`,e.jsx(t.p,{children:`The hard part is that invisible features don't demo well. You can't put "this thing quietly does the right thing" on a landing page. But the retention numbers are different.`}),`
`,e.jsx(t.h2,{children:"What to optimize for"}),`
`,e.jsxs(t.p,{children:["I try to design for the ",e.jsx(t.em,{children:"second"})," time someone uses a feature, not the first. The first time, a label is helpful. The second time, a label is a tax. The third time, the feature has earned the right to disappear."]})]})}function ge(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(C,{...s})}):C(s)}const pe=Object.freeze(Object.defineProperty({__proto__:null,default:ge,frontmatter:ue},Symbol.toStringTag,{value:"Module"})),fe={title:"On Reading Long-Form",slug:"on-reading-long-form",date:"2026-05-22",tags:["reading","habits"],summary:"Three small rituals that turned reading back into a daily practice after a year of doom-scrolling.",featured:!0};function z(s){const t={em:"em",h2:"h2",p:"p",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:["I lost the habit of reading sometime around 2022. Not reading-as-scrolling, which never went away, but ",e.jsx(t.em,{children:"reading"})," — sitting with a single text for forty minutes, remembering the previous page, having an opinion by the end. I got it back in late 2024 with three small changes."]}),`
`,e.jsx(t.h2,{children:"1. One book, one surface"}),`
`,e.jsx(t.p,{children:"I read on paper at home and on the phone nowhere else. The phone gets too many other asks. The paper doesn't."}),`
`,e.jsx(t.h2,{children:"2. Twenty minutes, not a chapter"}),`
`,e.jsx(t.p,{children:"A chapter is a commitment; twenty minutes is a slot. I'd skip a chapter. I'd take a slot between lunch and a meeting. The chapter would usually finish itself anyway."}),`
`,e.jsx(t.h2,{children:"3. A note, not a highlight"}),`
`,e.jsx(t.p,{children:"Highlighting is the new bookmark — a thing you do so you can feel like you read. A note is a thing you do so you can think. Even a bad note is better than a good highlight."}),`
`,e.jsx(t.p,{children:"The combination of all three got me back to two or three books a month, which is fine. The number isn't the point. The point is the quiet."})]})}function je(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(z,{...s})}):z(s)}const ke=Object.freeze(Object.defineProperty({__proto__:null,default:je,frontmatter:fe},Symbol.toStringTag,{value:"Module"})),be={title:"Why I Started Writing Again",slug:"why-i-started-writing-again",date:"2026-03-08",tags:["writing","personal"],summary:"Notes on rebuilding a writing practice after a long gap, and the cheap trick that made it stick.",featured:!1};function M(s){const t={h2:"h2",p:"p",strong:"strong",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"I haven't written for anyone but myself in about four years. The reason I stopped is the same reason most people stop: I got busy, then I got out of the habit, then the gap got long enough to be embarrassing. The reason I started again is embarrassingly simple: I lowered the bar."}),`
`,e.jsx(t.h2,{children:"The bar that worked"}),`
`,e.jsxs(t.p,{children:["I gave myself a rule: ",e.jsx(t.strong,{children:"one paragraph, once a week, in public."}),' Not an essay. Not a "post." A paragraph. Usually about something I noticed that week — a small observation, a tool I tried, a sentence I disagreed with. The whole thing fits in a Notion cell.']}),`
`,e.jsx(t.p,{children:`The bar matters because the alternative is "I'll write when I have something to say," and you never have something to say until you've written about not having something to say. Writing begets writing. The hardest essay to start is the one that comes after a long silence.`})]})}function we(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(M,{...s})}):M(s)}const ye=Object.freeze(Object.defineProperty({__proto__:null,default:we,frontmatter:be},Symbol.toStringTag,{value:"Module"})),ve={slug:"about",title:"About"};function D(s){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...x(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"I build tools and write notes. By day I work as a product engineer at a small team; by night I keep this site, which is the only place where I get to decide what matters."}),`
`,e.jsx(t.h2,{children:"What this place is"}),`
`,e.jsx(t.p,{children:"The work page is for finished things. The notes page is for unfinished thoughts. The about page is for the part of me that's the same on both."}),`
`,e.jsx(t.h2,{children:"How to reach me"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Email"})," — hello [at] this domain"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"RSS"})," — ",e.jsx(t.a,{href:"/rss.xml",children:"feed"})," for the notes only"]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Elsewhere"})," — I'm not on most social networks, and the ones I'm on I check about once a month"]}),`
`]}),`
`,e.jsx(t.p,{children:"If you want to say something short, email is best. If you want to say something long, also email. I read everything, I just take a while to reply."})]})}function Ne(s={}){const{wrapper:t}={...x(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(D,{...s})}):D(s)}const Ie=Object.freeze(Object.defineProperty({__proto__:null,default:Ne,frontmatter:ve},Symbol.toStringTag,{value:"Module"})),Ae=Object.assign({"/content/portfolio/shadow-coach.mdx":me}),_e=Object.assign({"/content/posts/building-tools-that-disappear.mdx":pe,"/content/posts/on-reading-long-form.mdx":ke,"/content/posts/why-i-started-writing-again.mdx":ye}),Te=Object.assign({"/content/pages/about.mdx":Ie}),h=Object.entries(Ae).map(([s,t])=>{const n=t.frontmatter;return{Component:t.default,title:n.title,slug:n.slug,cover:n.cover,role:n.role,year:n.year,tags:n.tags??[],summary:n.summary,links:n.links??{},featured:n.featured??!1,order:n.order??99}}).sort((s,t)=>(s.order??99)-(t.order??99));function Ce(s){return h.find(t=>t.slug===s)}function ze(s=3){return h.filter(t=>t.featured).slice(0,s)}const m=Object.entries(_e).map(([s,t])=>{const n=t.frontmatter;return{Component:t.default,title:n.title,slug:n.slug,date:n.date,tags:n.tags??[],summary:n.summary,featured:n.featured??!1}}).sort((s,t)=>s.date<t.date?1:-1);function Me(s){return m.find(t=>t.slug===s)}function De(s=5){return m.slice(0,s)}function Se(s){const t=m.findIndex(n=>n.slug===s);return t===-1?{}:{prev:t<m.length-1?m[t+1]:void 0,next:t>0?m[t-1]:void 0}}const Pe=Object.entries(Te).map(([s,t])=>{const n=t.frontmatter;return{Component:t.default,slug:n.slug,title:n.title}});function $e(s){return Pe.find(t=>t.slug===s)}function Le(){const s=new Map;for(const t of[...h,...m])for(const n of t.tags)s.set(n,(s.get(n)??0)+1);return Array.from(s.entries()).map(([t,n])=>({tag:t,count:n})).sort((t,n)=>n.count-t.count||t.tag.localeCompare(n.tag))}function Oe(s){return{portfolio:h.filter(t=>t.tags.includes(s)),posts:m.filter(t=>t.tags.includes(s))}}function We(){const s=ze(3);return s.length===0?null:e.jsx("section",{className:"py-16 sm:py-20",children:e.jsxs(l,{size:"wide",children:[e.jsxs("div",{className:"flex items-end justify-between mb-10",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"Featured work"}),e.jsx("h2",{className:"mt-3 font-serif text-3xl sm:text-4xl font-semibold text-fg dark:text-fg-dark",children:"Things I've shipped"})]}),e.jsxs(o,{to:"/work",className:"hidden sm:inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All work",e.jsx(p,{size:14})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map((t,n)=>e.jsx(N,{item:t,index:n,featured:!0},t.slug))}),e.jsx("div",{className:"sm:hidden mt-6",children:e.jsxs(o,{to:"/work",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All work",e.jsx(p,{size:14})]})})]})})}function O(s,t={year:"numeric",month:"short",day:"numeric"}){return new Date(s).toLocaleDateString("en-US",t)}function I({post:s,index:t=0}){return e.jsx(y.article,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-30px"},transition:{duration:.35,delay:t*.04,ease:"easeOut"},children:e.jsx(o,{to:`/blog/${s.slug}`,className:"group block py-6 border-b border-border last:border-0",children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"text-xs text-muted dark:text-muted-dark font-mono",children:e.jsx("time",{dateTime:s.date,children:O(s.date)})}),e.jsx("h3",{className:"mt-2 font-serif text-xl sm:text-2xl font-semibold text-fg dark:text-fg-dark leading-snug group-hover:text-accent transition-colors",children:s.title}),e.jsx("p",{className:"mt-2 text-sm text-muted dark:text-muted-dark line-clamp-2 max-w-prose",children:s.summary}),s.tags.length>0&&e.jsx("div",{className:"mt-3 flex gap-1.5 flex-wrap",children:s.tags.slice(0,3).map(n=>e.jsxs("span",{className:"text-[11px] text-muted dark:text-muted-dark",children:["#",n]},n))})]}),e.jsx(p,{size:18,className:"text-muted dark:text-muted-dark group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"})]})})})}function Re(){const s=De(3);return s.length===0?null:e.jsx("section",{className:"py-16 sm:py-20",children:e.jsxs(l,{size:"wide",children:[e.jsxs("div",{className:"flex items-end justify-between mb-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"Notes"}),e.jsx("h2",{className:"mt-3 font-serif text-3xl sm:text-4xl font-semibold text-fg dark:text-fg-dark",children:"Recent writing"})]}),e.jsxs(o,{to:"/blog",className:"hidden sm:inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All notes",e.jsx(p,{size:14})]})]}),e.jsx("div",{className:"mt-6",children:s.map((t,n)=>e.jsx(I,{post:t,index:n},t.slug))}),e.jsx("div",{className:"sm:hidden mt-4",children:e.jsxs(o,{to:"/blog",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors",children:["All notes",e.jsx(p,{size:14})]})})]})})}function Ee(){return e.jsxs(e.Fragment,{children:[e.jsx(ce,{}),e.jsx(We,{}),e.jsx(Re,{}),e.jsx("section",{className:"py-20 sm:py-24",children:e.jsx(l,{size:"wide",children:e.jsxs("div",{className:"border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-serif text-2xl font-semibold text-fg dark:text-fg-dark",children:"Want to work together?"}),e.jsx("p",{className:"mt-1 text-sm text-muted dark:text-muted-dark",children:"I'm always open to interesting problems."})]}),e.jsxs(o,{to:"/about",className:"inline-flex items-center gap-2 text-sm text-accent hover:opacity-80 transition-opacity",children:["Get in touch",e.jsx(p,{size:14})]})]})})})]})}function Fe(){return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"pt-16 sm:pt-24 pb-10",children:e.jsxs(l,{size:"wide",children:[e.jsxs("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:["Work · ",h.length," projects"]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:"Selected projects"}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed",children:"A handful of the things I've built or led. The list is short on purpose — quality over completeness."})]})}),e.jsx("section",{className:"pb-24",children:e.jsx(l,{size:"wide",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map((s,t)=>e.jsx(N,{item:s,index:t,featured:!0},s.slug))})})})]})}function A({children:s,className:t=""}){return e.jsx("div",{className:`prose ${t}`,children:s})}function W({tag:s,as:t="link",size:n="sm",className:r=""}){const i=`inline-block rounded-full border border-border bg-transparent text-muted dark:text-muted-dark transition-colors hover:border-accent hover:text-accent ${n==="sm"?"text-xs px-2 py-0.5":"text-sm px-2.5 py-1"} ${r}`;return t==="link"?e.jsxs(o,{to:`/tags/${s}`,className:i,children:["#",s]}):e.jsxs("span",{className:i,children:["#",s]})}function Be(){const{slug:s}=v(),t=s?Ce(s):void 0;if(c.useEffect(()=>{window.scrollTo(0,0)},[s]),!t)return e.jsx(b,{to:"/work",replace:!0});const n=h.findIndex(i=>i.slug===t.slug),r=n>0?h[n-1]:void 0,a=n<h.length-1?h[n+1]:void 0;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"relative w-full h-[40vh] sm:h-[55vh] overflow-hidden bg-border",children:e.jsx("img",{src:t.cover,alt:t.title,className:"w-full h-full object-cover"})}),e.jsxs(l,{size:"default",children:[e.jsxs("div",{className:"pt-10 sm:pt-14 pb-8 border-b border-border",children:[e.jsxs(o,{to:"/work",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-6",children:[e.jsx(j,{size:14}),"All work"]}),e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-6",children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:[t.role," · ",t.year]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:t.title}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed",children:t.summary})]}),e.jsxs("div",{className:"flex gap-3 flex-shrink-0",children:[t.links.live&&e.jsxs("a",{href:t.links.live,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-colors",children:[e.jsx(Q,{size:14}),"Live"]}),t.links.repo&&e.jsxs("a",{href:t.links.repo,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm hover:border-accent hover:text-accent transition-colors",children:[e.jsx(ee,{size:14}),"Repo"]})]})]}),t.tags.length>0&&e.jsx("div",{className:"mt-6 flex gap-2 flex-wrap",children:t.tags.map(i=>e.jsx(W,{tag:i,size:"md"},i))})]}),e.jsx("div",{className:"py-12 sm:py-16",children:e.jsx(A,{children:e.jsx(t.Component,{})})}),e.jsxs("div",{className:"border-t border-border py-10 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[a?e.jsxs(o,{to:`/work/${a.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors",children:[e.jsx("div",{className:"text-xs text-muted dark:text-muted-dark",children:"← Previous"}),e.jsx("div",{className:"mt-1 font-serif text-lg font-semibold group-hover:text-accent transition-colors",children:a.title})]}):e.jsx("div",{}),r?e.jsxs(o,{to:`/work/${r.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors text-right sm:text-left",children:[e.jsx("div",{className:"text-xs text-muted dark:text-muted-dark",children:"Next →"}),e.jsx("div",{className:"mt-1 font-serif text-lg font-semibold group-hover:text-accent transition-colors",children:r.title})]}):e.jsx("div",{})]})]})]})}function qe(){return e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"pt-16 sm:pt-24 pb-10",children:e.jsxs(l,{size:"wide",children:[e.jsxs("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:["Notes · ",m.length," posts"]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:"Field notes"}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-2xl leading-relaxed",children:"Short, occasional writing about building, design, and the small things that accumulate into a craft."})]})}),e.jsx("section",{className:"pb-24",children:e.jsx(l,{size:"wide",children:e.jsx("div",{className:"max-w-3xl",children:m.map((s,t)=>e.jsx(I,{post:s,index:t},s.slug))})})})]})}function Je(){const{slug:s}=v(),t=s?Me(s):void 0,{prev:n,next:r}=s?Se(s):{};return c.useEffect(()=>{window.scrollTo(0,0)},[s]),t?e.jsx("article",{children:e.jsxs(l,{size:"default",children:[e.jsxs("header",{className:"pt-16 sm:pt-24 pb-10 border-b border-border",children:[e.jsxs(o,{to:"/blog",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8",children:[e.jsx(j,{size:14}),"All notes"]}),e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:e.jsx("time",{dateTime:t.date,children:O(t.date)})}),e.jsx("h1",{className:"mt-4 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-fg dark:text-fg-dark leading-[1.1] tracking-tight max-w-3xl",children:t.title}),e.jsx("p",{className:"mt-6 text-lg sm:text-xl text-muted dark:text-muted-dark leading-relaxed max-w-2xl",children:t.summary}),t.tags.length>0&&e.jsx("div",{className:"mt-8 flex gap-2 flex-wrap",children:t.tags.map(a=>e.jsx(W,{tag:a,size:"md"},a))})]}),e.jsx("div",{className:"py-12 sm:py-16",children:e.jsx(A,{children:e.jsx(t.Component,{})})}),e.jsxs("div",{className:"border-t border-border py-10 grid grid-cols-1 sm:grid-cols-2 gap-6",children:[n?e.jsxs(o,{to:`/blog/${n.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors",children:[e.jsxs("div",{className:"text-xs text-muted dark:text-muted-dark inline-flex items-center gap-1",children:[e.jsx(j,{size:12})," Older"]}),e.jsx("div",{className:"mt-1 font-serif text-base font-semibold group-hover:text-accent transition-colors line-clamp-2",children:n.title})]}):e.jsx("div",{}),r?e.jsxs(o,{to:`/blog/${r.slug}`,className:"group p-5 rounded-lg border border-border hover:border-accent transition-colors text-right",children:[e.jsxs("div",{className:"text-xs text-muted dark:text-muted-dark inline-flex items-center gap-1 sm:justify-end",children:["Newer ",e.jsx(p,{size:12})]}),e.jsx("div",{className:"mt-1 font-serif text-base font-semibold group-hover:text-accent transition-colors line-clamp-2",children:r.title})]}):e.jsx("div",{})]})]})}):e.jsx(b,{to:"/blog",replace:!0})}function He(){const{tag:s}=v(),t=s??"",{portfolio:n,posts:r}=Oe(t),i=Le().find(d=>d.tag===t);return i?e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"pt-16 sm:pt-24 pb-10",children:e.jsxs(l,{size:"wide",children:[e.jsxs(o,{to:"/",className:"inline-flex items-center gap-1.5 text-sm text-muted dark:text-muted-dark hover:text-accent transition-colors mb-8",children:[e.jsx(j,{size:14}),"Back home"]}),e.jsxs("div",{className:"flex items-center gap-3 text-muted dark:text-muted-dark",children:[e.jsx(te,{size:24,className:"text-accent"}),e.jsx("span",{className:"font-mono text-sm uppercase tracking-wider",children:"Tag"})]}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark",children:i.tag}),e.jsxs("p",{className:"mt-4 text-muted dark:text-muted-dark",children:[n.length+r.length," item",n.length+r.length===1?"":"s"," tagged with this"]})]})}),n.length>0&&e.jsx("section",{className:"pb-12",children:e.jsxs(l,{size:"wide",children:[e.jsx("h2",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase mb-6",children:"Work"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((d,f)=>e.jsx(N,{item:d,index:f,featured:!0},d.slug))})]})}),r.length>0&&e.jsx("section",{className:"pb-24",children:e.jsxs(l,{size:"wide",children:[e.jsx("h2",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase mb-6",children:"Notes"}),e.jsx("div",{className:"max-w-3xl",children:r.map((d,f)=>e.jsx(I,{post:d,index:f},d.slug))})]})})]}):e.jsx(b,{to:"/",replace:!0})}function Xe(){const s=$e("about");return c.useEffect(()=>{window.scrollTo(0,0)},[]),s?e.jsxs(l,{size:"default",children:[e.jsxs("section",{className:"pt-16 sm:pt-24 pb-10",children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"About"}),e.jsx("h1",{className:"mt-3 font-serif text-4xl sm:text-5xl font-semibold text-fg dark:text-fg-dark leading-tight",children:s.title})]}),e.jsx("section",{className:"pb-24",children:e.jsx(A,{children:e.jsx(s.Component,{})})})]}):e.jsx(b,{to:"/",replace:!0})}function Ve(){return e.jsx(l,{size:"narrow",children:e.jsxs("section",{className:"pt-32 pb-24 text-center",children:[e.jsx("div",{className:"text-xs font-mono text-muted dark:text-muted-dark tracking-wider uppercase",children:"404"}),e.jsx("h1",{className:"mt-4 font-serif text-5xl sm:text-6xl font-semibold text-fg dark:text-fg-dark",children:"Not here."}),e.jsx("p",{className:"mt-5 text-lg text-muted dark:text-muted-dark max-w-md mx-auto",children:"The page you were looking for either moved, never existed, or is still in draft."}),e.jsxs(o,{to:"/",className:"mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-fg dark:bg-fg-dark text-bg dark:text-bg-dark text-sm font-medium hover:opacity-90 transition-opacity",children:[e.jsx(j,{size:14}),"Back home"]})]})})}function Ue(){return c.useEffect(()=>{document.documentElement.classList.add("antialiased")},[]),e.jsxs(J,{children:[e.jsx(V,{}),e.jsxs("div",{className:"min-h-screen flex flex-col",children:[e.jsx(le,{}),e.jsx("main",{className:"flex-1",children:e.jsxs(H,{children:[e.jsx(g,{path:"/",element:e.jsx(Ee,{})}),e.jsx(g,{path:"/work",element:e.jsx(Fe,{})}),e.jsx(g,{path:"/work/:slug",element:e.jsx(Be,{})}),e.jsx(g,{path:"/blog",element:e.jsx(qe,{})}),e.jsx(g,{path:"/blog/:slug",element:e.jsx(Je,{})}),e.jsx(g,{path:"/tags/:tag",element:e.jsx(He,{})}),e.jsx(g,{path:"/about",element:e.jsx(Xe,{})}),e.jsx(g,{path:"*",element:e.jsx(Ve,{})})]})}),e.jsx(de,{})]})]})}const Ge={};P(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(X,{components:Ge,children:e.jsx(Ue,{})})}));
