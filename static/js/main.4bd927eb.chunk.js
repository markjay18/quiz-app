(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(4),c=n.n(a),i=(n(9),n(2)),l=(n(10),n(0));var o=function(){var e=[{questionlabel:"What is the capital of Philippines?",answeroption:[{answerlabel:"New york",isCorrect:!1},{answerlabel:"Paris",isCorrect:!1},{answerlabel:"Manila",isCorrect:!0},{answerlabel:"Shanghai",isCorrect:!1}]},{questionlabel:"Who is the Philippine president declared martial Law?",answeroption:[{answerlabel:"Rudrigo Duterte",isCorrect:!1},{answerlabel:"Ferdinand Marcos",isCorrect:!0},{answerlabel:"Manual Quezon",isCorrect:!1},{answerlabel:"Ninoy Aquino",isCorrect:!1}]},{questionlabel:"The Iphone was created by which company?",answeroption:[{answerlabel:"Intel",isCorrect:!1},{answerlabel:"Amazon",isCorrect:!1},{answerlabel:"Microsoft",isCorrect:!1},{answerlabel:"Apple",isCorrect:!0}]},{questionlabel:"Who is the CEO of Tesla?",answeroption:[{answerlabel:"Jheff Bezos",isCorrect:!1},{answerlabel:"Elon Musk",isCorrect:!0},{answerlabel:"Bill Gates",isCorrect:!1},{answerlabel:"Tony Stark",isCorrect:!1}]},{questionlabel:"What does HTML stand for?",answeroption:[{answerlabel:"Hyper Text Markup Language",isCorrect:!0},{answerlabel:"Home Tool Markup Language",isCorrect:!1},{answerlabel:"Hyperlinks and Text Markup Language",isCorrect:!1},{answerlabel:"Hyper Task Markup",isCorrect:!1}]}],t=Object(s.useState)(1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(0),u=Object(i.a)(o,2),b=u[0],j=u[1],d=Object(s.useState)(!1),h=Object(i.a)(d,2),p=h[0],w=h[1],O=Object(s.useState)(0),x=Object(i.a)(O,2),C=x[0],f=x[1],m=Object(s.useState)(90),g=Object(i.a)(m,2),v=g[0],k=g[1];return r.a.useEffect((function(){if(2===a){var e=v>0&&setInterval((function(){return k(v-1)}),1e3);return function(){return clearInterval(e)}}})),0===v&&(alert("Your time is up! Click Ok to restart quiz."),window.location.reload()),Object(l.jsx)("div",{className:"App",children:p?Object(l.jsxs)("div",{className:"score",children:[Object(l.jsx)("div",{className:"crown",children:"\ud83d\udc51"}),Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Congatulations!"})," You've completed the quiz."]}),Object(l.jsxs)("p",{children:["You got ",C," out of ",e.length]}),Object(l.jsx)("button",{className:"restart",onClick:function(){window.location.reload()},children:"Restart Quiz"})]}):Object(l.jsxs)(l.Fragment,{children:[1===a&&Object(l.jsxs)("div",{className:"rules",children:[Object(l.jsx)("h3",{children:"Quiz Rules \ud83e\udd81"}),Object(l.jsxs)("p",{children:["1. You will have only ",Object(l.jsx)("strong",{children:"90 seconds"})," to answer all question."]}),Object(l.jsx)("p",{children:"2. Once you select your answer, it can't be undone."}),Object(l.jsx)("p",{children:"3. You can't select any option once time goes off."}),Object(l.jsx)("p",{children:"4. You can't exit from the quiz while you're playing."}),Object(l.jsx)("p",{children:"5. You'll get points on the basis of your correct answers."}),Object(l.jsx)("div",{className:"luck",children:Object(l.jsx)("strong",{children:"Good Luck! \ud83d\ude00"})}),Object(l.jsx)("div",{className:"start-quiz",children:Object(l.jsx)("button",{className:"start",onClick:function(){c(2),k(v)},children:"Start Quiz"})})]}),2===a&&Object(l.jsxs)("div",{className:"question",children:[Object(l.jsxs)("div",{className:"question-count",children:[Object(l.jsx)("h2",{children:"Awesome Quiz App"}),Object(l.jsxs)("div",{className:"timer",children:["Your time ends in: ",v," seconds"]}),Object(l.jsx)("div",{className:"que",children:Object(l.jsx)("span",{children:Object(l.jsxs)("strong",{children:["Question ",b+1,"/",e.length]})})})]}),Object(l.jsx)("div",{className:"question-label",children:e[b].questionlabel}),Object(l.jsx)("div",{className:"answer",id:"answer",children:e[b].answeroption.map((function(t){return Object(l.jsx)("button",{onClick:function(){return function(t){!0===t&&f(C+1);var n=b+1;n<e.length?j(n):(w(!0),k(!1))}(t.isCorrect)},children:t.answerlabel})}))})]})]})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))};c.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.4bd927eb.chunk.js.map