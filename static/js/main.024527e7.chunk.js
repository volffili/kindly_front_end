(this.webpackJsonpkindly_front_end=this.webpackJsonpkindly_front_end||[]).push([[0],{240:function(e,t,a){e.exports=a.p+"static/media/lovepalms_minified.cb992957.svg"},241:function(e,t,a){e.exports=a.p+"static/media/lovepalms.74439763.jpg"},243:function(e,t,a){e.exports=a(476)},248:function(e,t,a){},476:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(23),o=a.n(r),c=(a(248),a(26)),m=a(59),i=a(8),s=a(22),u=a(36),p=a(53),d=a.n(p),E="https://nnajnotk8l.execute-api.eu-west-1.amazonaws.com/TEST/neighbourhoodHelpBackendPython",b=a(486),h=a(481),f=a(487),g=a(488),_=a(485),k=a(25),y=a(94),j=a.n(y),v=a(477),q=a(478),O=a(479),w=k.a.div.withConfig({displayName:"LocationAutocomplete__Wrap",componentId:"sc-1n48u0o-0"})(["position:relative;"]),x=Object(k.a)(v.a).withConfig({displayName:"LocationAutocomplete__ListGroupOnTop",componentId:"sc-1n48u0o-1"})(["position:absolute;z-index:1000;"]),N=Object(k.a)(q.a).withConfig({displayName:"LocationAutocomplete__HandCursorListGroupItem",componentId:"sc-1n48u0o-2"})(["cursor:pointer;"]),S=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],c={location:new window.google.maps.LatLng(49.8600624,15.5860745),radius:1e5,types:["address"]};return l.a.createElement(j.a,{value:r,onChange:o,onSelect:function(t){o(t),Object(y.geocodeByAddress)(t).then((function(e){return Object(y.getLatLng)(e[0])})).then((function(a){e.onAddressSelect({formatted_address:t,lat:a.lat,lng:a.lng})})).catch((function(e){return console.error("Error",e)}))},searchOptions:c},(function(t){var a=t.getInputProps,n=t.suggestions,r=t.getSuggestionItemProps,o=t.loading;return l.a.createElement(w,null,l.a.createElement(O.a,a({placeholder:e.placeholder,className:"location-search-input address-input"})),l.a.createElement(x,null,o&&l.a.createElement(N,null,"Loading..."),n.map((function(e){return l.a.createElement(N,Object.assign({key:"suggestion",color:e.active&&"info"},r(e)),l.a.createElement("span",null,e.description))}))))}))},z=a(40),C=a(480),P=Object(k.a)(C.a).withConfig({displayName:"PageWrap",componentId:"sc-1kq0b1s-0"})(["padding:66px 10px 10px 10px;"]),L=Object(k.a)(h.a).withConfig({displayName:"FormStandard__StdFormInfoCol",componentId:"sc-1ulr9fc-0"})(["max-width:700px;"]),R=Object(k.a)(h.a).withConfig({displayName:"FormStandard__StdFormCol",componentId:"sc-1ulr9fc-1"})(["max-width:600px;"]),I=a(503),F=a(482),V=a(483),A=a(484),D=function(e){var t=e.buttonLabel,a=e.title,n=e.body,r=e.className,o=e.isOpen,c=e.toggle;return l.a.createElement(I.a,{isOpen:o,toggle:c,className:r},l.a.createElement(F.a,{toggle:c},a),l.a.createElement(V.a,null,n),l.a.createElement(A.a,null,l.a.createElement(_.a,{color:"dark",onClick:c},t)))},W=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),c=Object(i.a)(o,2),m=c[0],p=c[1],k=function(){return p(!m)},y=u.a().shape({name:u.b().required("Chyb\xed jm\xe9no"),email:u.b().email("Neplatn\xfd email").required("Chyb\xed email"),phone_number:u.b(),request_topic:u.b().required("Chyb\xed p\u0159edm\u011bt"),request_description:u.b().required("Chyb\xed popis")});return l.a.createElement(P,null,l.a.createElement(D,{isOpen:m,toggle:k,title:"Title",body:"Te\u010f u\u017e jen sta\u010d\xed po\u010dkat ne\u017e se ti n\u011bkdo ozve! asldfkasjdlfk jsadfl dfk jalsfldskaj fa adlkfj Nap\u0159. M\xe1m 2 psy typu \u010divava kter\xe9 je pot\u0159eba ven\u010dit 2-kr\xe1t denn\u011b, r\xe1no a ve\u010de ",buttonLabel:"Dob\u0159e"}),l.a.createElement(b.a,{className:"justify-content-center mb-4"},l.a.createElement(L,null,l.a.createElement("h3",null,"S \u010d\xedm pot\u0159ebujete pomoci?"),l.a.createElement("p",null,"Ka\u017ed\xfd z n\xe1s se ob\u010das dostane do situace, kdy si nev\xed rady. Nebojte se a po\u017e\xe1dejte o pomoc. A\u0165 u\u017e se jedn\xe1 o v\xfdm\u011bnu \u017e\xe1rovky, p\u0159ivrt\xe1n\xed poli\u010dky, donesen\xed n\xe1kupu \u010di ven\u010den\xed psa. Pokus\xedme se v\xe1s propojit s lidmi z va\u0161eho okol\xed, kte\u0159\xed r\xe1di podaj\xed pomocnou ruku."))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(s.c,{initialValues:{name:"",phone_number:"",email:"",request_topic:"",request_description:""},validationSchema:y,onSubmit:function(e){k();var t={api_name:"post_help_request",requester_name:e.name,requester_age:null,requester_email:e.email,requester_phone_number:e.phone_number,requester_address:a.formatted_address,requester_address_lat:a.lat,requester_address_lng:a.lng,request_topic:e.request_topic,request_details:e.request_description};console.log("Query Params = ",t),d.a.get(E,{params:t})}},(function(){return l.a.createElement(s.b,{className:"askhelp-form"},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(R,null,l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Jm\xe9no*",id:"name",name:"name",component:z.a,type:"text",placeholder:"Va\u0161e jm\xe9no a p\u0159\xedjmen\xed."})),l.a.createElement(f.a,null,l.a.createElement(g.a,{htmlFor:"requester_address"},"Adresa"),l.a.createElement(S,{id:"requester_address",onAddressSelect:r,placeholder:"Va\u0161e adresa nebude nikde zobrazena, pouze ur\u010d\xed lokalitu."})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Email*",component:z.a,id:"email",name:"email",type:"text",placeholder:"Vypl\u0148te email, aby v\xe1s pomocn\xedci mohli kontaktovat."})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Telefon",component:z.a,id:"phone_number",name:"phone_number",type:"text",placeholder:"Pokud chcete pomoc urychlit, m\u016f\u017eete vyplnit i telefon. "})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"P\u0159edm\u011bt*",component:z.a,id:"request_topic",name:"request_topic",type:"text",placeholder:"S \u010d\xedm pot\u0159ebujete pomoci?"})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Popis*",component:z.a,id:"request_description",name:"request_description",type:"textarea",rows:"4",placeholder:"Popi\u0161t\u011b co nejp\u0159esn\u011bji o co se jedn\xe1, aby pomocn\xedk p\u0159i\u0161el p\u0159ipraven\xfd. Bude pot\u0159eba p\u0159in\xe9st n\xe1\u0159ad\xed?"})))),l.a.createElement(b.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement(_.a,{outline:!0,color:"primary",type:"submit"},"Poslat \u017e\xe1dost"))))})))))},K=a(489),M=a(490),T=a(491),B=a(492),J=Object(k.a)(K.a).withConfig({displayName:"HelpCard__Description",componentId:"sc-4lrd2z-0"})(["overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;"]),G=function(e){return Object(n.useEffect)((function(){}),[]),l.a.createElement(M.a,{className:"my-3",color:"light",style:{height:260}},l.a.createElement(T.a,{className:"d-flex flex-column"},l.a.createElement(B.a,null,l.a.createElement("b",null,e.helpRequest.request_topic)),l.a.createElement(J,null,e.helpRequest.request_details),l.a.createElement(K.a,{className:"text-right mt-auto d-flex flex-row justify-content-between"},new Date(e.helpRequest.request_create_timestamp).toLocaleDateString(),l.a.createElement(c.b,{to:"/details/".concat(e.helpRequest.request_id)},l.a.createElement(_.a,{outline:!0,color:"primary"},"Detail pomoci")))))},H=a(96),Q=Object(H.withGoogleMap)((function(e){return Object(n.useEffect)((function(){}),[]),l.a.createElement(H.GoogleMap,{defaultZoom:e.zoom,defaultCenter:e.center},e.helpRequests.map((function(t){return l.a.createElement(U,{helpRequest:t,link:e.link})})))})),U=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){}),[]),l.a.createElement(H.Marker,{position:{lat:parseFloat(e.helpRequest.requester_address_lat),lng:parseFloat(e.helpRequest.requester_address_lng)},onClick:function(){return o(!r)}},r&&l.a.createElement(H.InfoWindow,{options:{closeBoxURL:"",enableEventPropagation:!0}},l.a.createElement("div",null,l.a.createElement("h3",null,e.helpRequest.request_topic),l.a.createElement("h5",null,e.helpRequest.request_details),e.link?l.a.createElement("h6",null,"V\xedce informaci ",l.a.createElement(c.b,{to:"/details/".concat(e.helpRequest.request_id),target:"_blank"},"zde")):null)))},Z=Q,$=a(237),X=a.n($),Y=function(e){return l.a.createElement("div",{style:{width:"20%",height:"20%",marginTop:"10%",marginLeft:"40%"}},l.a.createElement("h1",null,"Na\u010d\xedt\xe1n\xed..."),l.a.createElement(X.a,{type:"spin",color:"black",height:"100%",width:"100%"}))},ee=a(493),te=a(494),ae=a(495),ne=function(e){for(var t=e.requestsPerPage,a=e.totalRequests,r=e.paginate,o=[],c=Object(n.useState)(1),m=Object(i.a)(c,2),s=m[0],u=m[1],p=Math.ceil(a/t),d=function(e){e>p&&(e=p),e<1&&(e=1),u(e),r(e)},E=1;E<=p;E++)o.push(E);return l.a.createElement(ee.a,null,l.a.createElement(te.a,null,l.a.createElement(ae.a,{first:!0,onClick:function(){return d(0)}})),l.a.createElement(te.a,null,l.a.createElement(ae.a,{previous:!0,onClick:function(){return d(s-1)}})),o.map((function(e){return l.a.createElement(te.a,{active:e===s,onClick:function(){return d(e)}},l.a.createElement(ae.a,{key:e+"pglink",color:"secondary"},e))})),l.a.createElement(te.a,null,l.a.createElement(ae.a,{next:!0,onClick:function(){return d(s+1)}})),l.a.createElement(te.a,null,l.a.createElement(ae.a,{last:!0,onClick:function(){return d(p)}})))},le=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(i.a)(o,2),m=c[0],s=c[1],u=Object(n.useState)(!1),p=Object(i.a)(u,2),f=p[0],g=p[1],_=Object(n.useState)(1),k=Object(i.a)(_,2),y=k[0],j=k[1],v=Object(n.useState)(12),q=Object(i.a)(v,1)[0];Object(n.useEffect)((function(){g(!0),d.a.get(E,{params:{api_name:"get_help_requests",offset:0,row_count:1e3}}).then((function(e){r(e.data.result.help_requests),s(e.data.result.count),g(!1)})).catch((function(e){return console.error(e)}))}),[]);var O=y*q,w=O-q,x=a.slice(w,O);return l.a.createElement(P,null,l.a.createElement(b.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement("h3",null,"Celkem \u017e\xe1d\xe1 o pomoc ",m," lid\xed po cel\xe9 \u010cesk\xe9 Republice"))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(Z,{zoom:7,center:{lat:49.8600624,lng:15.5860745},containerElement:l.a.createElement("div",{style:{height:"400px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),helpRequests:a,link:!0}))),f?l.a.createElement(Y,null):l.a.createElement(b.a,null,x.map((function(e){return l.a.createElement(h.a,{md:"6",lg:"4",xl:"3"},l.a.createElement(G,{helpRequest:e}))}))),l.a.createElement(b.a,null,l.a.createElement(h.a,{className:"d-flex justify-content-center"},l.a.createElement(ne,{requestsPerPage:q,totalRequests:a.length,paginate:function(e){return j(e)}}))))},re=a(242),oe=a(240),ce=a.n(oe),me=a(241),ie=a.n(me),se=a(496),ue=k.a.img.withConfig({displayName:"LandingPage__Img100",componentId:"sypwfr-0"})(["width:100%;"]),pe=function(){return l.a.createElement(P,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(h.a,{className:"my-auto py-5",align:"center",style:{maxWidth:800}},l.a.createElement("h3",{className:"text-primary mb-3"},l.a.createElement("i",null,"In the world where you can be anything, be kind.")),l.a.createElement("p",null,"Kindly je m\xedsto, kde si lid\xe9 pom\xe1haj\xed. A\u0165 u\u017e pomocnou ruku nab\xedz\xedte nebo ji pot\u0159ebujete. Kindly v\xe1m d\xe1v\xe1 mo\u017enost st\xe1t se sousedem, kter\xe9ho byste si sami p\u0159\xe1li m\xedt. O\u017eivit m\u011bsta a \u017e\xedt spolu. Kindly nen\xed o pen\u011bz\xedch \u010di darech, je o oby\u010dejn\xfdch lidech a v\u0161edn\xedch dnech. Je o n\xe1s v\u0161ech."))),l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(h.a,{sm:"6",xl:"4",align:"center"},l.a.createElement(M.a,{className:"mb-3",style:{maxWidth:400}},l.a.createElement(T.a,null,"M\xe1te trochu \u010dasu a chcete ud\u011blat dobr\xfd skutek? Nab\xeddnut\xedm pomoci darujete, ale i z\xedsk\xe1v\xe1te. Pod\xedvejte se s \u010d\xedm pot\u0159ebuj\xed pomoci lid\xe9 ve va\u0161em okol\xed."),l.a.createElement(se.a,null,l.a.createElement(c.b,{to:"/iwanttohelp"},l.a.createElement(_.a,{color:"primary",outline:!0,size:"lg"},"Nab\xeddnout pomoc"))))),l.a.createElement(h.a,{sm:"6",xl:"4",className:"my-auto",align:"center"},l.a.createElement(M.a,{className:"mb-3",style:{maxWidth:400}},l.a.createElement(T.a,null,"Pot\u0159ebujete vy nebo v\xe1\u0161 bl\xedzk\xfd don\xe9st n\xe1kup, doprovodit k l\xe9ka\u0159i, vyven\u010dit psa nebo t\u0159eba pomoc s technikou? Nebojte se po\u017e\xe1dat ty, co jsou nejbl\xed\u017ee."),l.a.createElement(se.a,null,l.a.createElement(c.b,{to:"/ineedhelp"},l.a.createElement(_.a,{color:"primary",outline:!0,size:"lg"},"Po\u017e\xe1dat o pomoc")))))),l.a.createElement(re.a,{src:ce.a,afterInjection:function(e){e&&console.error(e)},loading:function(){return l.a.createElement(ue,{src:ie.a})}}),l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(h.a,{className:"my-auto pb-5",align:"center",style:{maxWidth:800}},l.a.createElement("p",null,"D\u011bkujeme v\u0161em, co pom\xe1haj\xed!"),l.a.createElement("p",null," ","Kindly je a bude kompletn\u011b zdarma. Jedn\xe1 se o projekt vytvo\u0159en\xfd dobrovoln\xedky pro dobrovoln\xedky. Pokud m\xe1te jak\xe9koli dotazy \u010di p\u0159ipom\xednky, nev\xe1hejte n\xe1s kontaktovat p\u0159es formul\xe1\u0159 v sekci ",l.a.createElement("a",{href:"#"},"Kontakty")," nebo n\xe1m napi\u0161te na email ",l.a.createElement("span",{className:"text-primary"},"crewkindly@gmail.com"),"."))))},de=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],o=function(){return r(!a)},c=u.a().shape({requester_email:u.b().required("Chyb\xed email").email("Neplatn\xfd email").max(100,"Email je p\u0159\xedli\u0161 dlouh\xfd"),feedback_topic:u.b(),feedback_description:u.b().max(1e3,"Popis je p\u0159\xedli\u0161 dlouh\xfd").required("Chyb\xed popis")});return l.a.createElement(P,null,l.a.createElement(D,{isOpen:a,toggle:o,body:"Va\u0161e ot\xe1zka byla odesl\xe1na. Te\u010f u\u017e jen po\u010dkejte na email s odpov\u011bd\xed.",buttonLabel:"Ok"}),l.a.createElement(b.a,{className:"justify-content-center mb-4"},l.a.createElement(L,null,l.a.createElement("h3",null,"Pomozte i n\xe1m!"),l.a.createElement("p",null,"M\xe1te n\xe1pad na vylep\u0161en\xed aplikace nebo v\xe1m n\u011bco nefunguje jak m\xe1? Nev\xe1hejte n\xe1s kontaktovat. V\xe1\u017e\xedme si zp\u011btn\xe9 vazby a budeme r\xe1di, za jak\xe9koli relevantn\xed p\u0159ipom\xednky. ",l.a.createElement("b",null,"D\u011bkujeme!")))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(s.c,{initialValues:{requester_email:"",requester_name:"",requester_surname:"",feedback_topic:"",feedback_description:""},validationSchema:c,onSubmit:function(e){o(),d.a.get(E,{params:{api_name:"post_feedback",email:e.requester_email,topic:e.feedback_topic,content:e.feedback_description}})}},(function(){return l.a.createElement(s.b,null,l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(R,null,l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Jm\xe9no",name:"requester_name",type:"text",placeholder:"Va\u0161e jm\xe9no a p\u0159\xedjmen\xed.",component:z.a})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Email*",name:"requester_email",type:"text",placeholder:"Vypl\u0148te email, abychom v\xe1s mohli kontaktovat.",component:z.a})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"P\u0159edm\u011bt",name:"feedback_topic",type:"text",placeholder:"O co se jedn\xe1?",component:z.a})),l.a.createElement(f.a,null,l.a.createElement(s.a,{label:"Popis*",id:"feedback_description",name:"feedback_description",type:"textarea",rows:"4",placeholder:"Napi\u0161t\u011b n\xe1m zpr\xe1vu. Popi\u0161t\u011b v\xe1\u0161 n\xe1pad \u010di p\u0159ipom\xednku detailn\u011bji.",component:z.a})))),l.a.createElement(b.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement(_.a,{outline:!0,color:"primary",type:"submit"},"Poslat p\u0159ipom\xednku"))))})))))},Ee=a(497),be=a(498),he=a(499),fe=a(500),ge=a(501),_e=a(502),ke=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0];t[1];return l.a.createElement("div",null,l.a.createElement(Ee.a,{light:!0,expand:"md",fixed:"top",color:"light"},l.a.createElement(be.a,{tag:c.b,to:"/"},l.a.createElement("b",{className:"text-primary"},"Kindly")),l.a.createElement(he.a,{isOpen:a,navbar:!0},l.a.createElement(fe.a,{className:"mr-auto",navbar:!0},l.a.createElement(ge.a,null,l.a.createElement(_e.a,{tag:c.b,to:"/iwanttohelp"},"Nab\xedz\xedm pomoc")),l.a.createElement(ge.a,null,l.a.createElement(_e.a,{tag:c.b,to:"/ineedhelp"},"\u017d\xe1d\xe1m o pomoc")),l.a.createElement(ge.a,null,l.a.createElement(_e.a,{tag:c.b,to:"/feedback"},"Kontakt"))))))},ye=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(""),m=Object(i.a)(c,2),s=m[0],u=m[1];return Object(n.useEffect)((function(){d.a.get(E,{params:{api_name:"get_help_request_for_id",request_id:e.match.params.request_id}}).then((function(e){var t=e.data.result;o(t),u("https://www.google.com/maps/dir/?api=1&destination=".concat(t.requester_address_lat,",").concat(t.requester_address_lng,"&travelmode=driving"))})).catch((function(e){return console.error(e)}))}),[]),l.a.createElement(P,null,r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(M.a,null,l.a.createElement(T.a,null,l.a.createElement(B.a,null,l.a.createElement("h3",null,r.request_topic)),l.a.createElement(K.a,null,r.request_details),l.a.createElement(K.a,{className:"text-right mt-auto d-flex flex-row justify-content-between"},r.request_create_timestamp&&new Date(r.request_create_timestamp).toLocaleDateString(),l.a.createElement(_.a,{href:s,target:"_blank"},"Otev\u0159\xedt v navigaci"))),l.a.createElement(se.a,null,r.requester_name+", "+r.requester_email,r.requester_phone_number&&", "+r.requester_phone_number)))),l.a.createElement(b.a,null,l.a.createElement(h.a,null,l.a.createElement(Z,{zoom:12,center:{lat:parseFloat(r.requester_address_lat),lng:parseFloat(r.requester_address_lng)},containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),helpRequests:[r],link:!1})))))};var je=function(){return l.a.createElement(c.a,null,l.a.createElement(ke,null),l.a.createElement(m.a,{path:"/",exact:!0,component:pe}),l.a.createElement(m.a,{path:"/ineedhelp",component:W}),l.a.createElement(m.a,{path:"/iwanttohelp",component:le}),l.a.createElement(m.a,{path:"/feedback",component:de}),l.a.createElement(m.a,{path:"/details/:request_id",component:ye}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[243,1,2]]]);
//# sourceMappingURL=main.024527e7.chunk.js.map