(this.webpackJsonpkindly_front_end=this.webpackJsonpkindly_front_end||[]).push([[0],{128:function(e,t,a){},234:function(e,t,a){e.exports=a.p+"static/media/lovepalms_minified.cb992957.svg"},235:function(e,t,a){e.exports=a.p+"static/media/lovepalms.74439763.jpg"},242:function(e,t,a){e.exports=a(477)},248:function(e,t,a){},468:function(e,t,a){},477:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(68),c=a.n(r),o=(a(247),a(248),a(59)),i=a(52),s=a(15),m=a(21),u=a(27),d=a(46),p=a.n(d),E="https://nnajnotk8l.execute-api.eu-west-1.amazonaws.com/TEST/neighbourhoodHelpBackendPython",h=a(478),f=a(479),v=a(226),b=a(227),g=a(241),_=a(239),y=a(91),k=a.n(y),q=(a(128),function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({address:e})},n.handleSelect=function(e){n.setState({address:e}),Object(y.geocodeByAddress)(e).then((function(e){return Object(y.getLatLng)(e[0])})).then((function(e){n.setState(e),n.props.onAddressSelect({formatted_address:n.state.address,lat:n.state.lat,lng:n.state.lng})})).catch((function(e){return console.error("Error",e)}))},n.searchOptions={location:new window.google.maps.LatLng(49.8600624,15.5860745),radius:1e5,types:["address"]},n.state={address:"",lat:"",lng:""},n}return Object(b.a)(a,[{key:"render",value:function(){return n.createElement(k.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect,searchOptions:this.searchOptions},(function(e){var t=e.getInputProps,a=e.suggestions,l=e.getSuggestionItemProps,r=e.loading;return n.createElement("div",null,n.createElement("input",t({placeholder:"Za\u010dn\u011bte ps\xe1t jmeno ulice, my za V\xe1s dopln\xedme zbytek      (nepovinn\xe9 pole)",className:"location-search-input address-input"})),n.createElement("div",{className:"autocomplete-dropdown-container"},r&&n.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return n.createElement("div",l(e,{className:t,style:a}),n.createElement("span",null,e.description))}))))}))}}]),a}(n.Component)),j=function(e){return Object(n.useEffect)((function(){}),[]),l.a.createElement("div",{style:{marginTop:"8%",width:"50%",marginLeft:"25%"}},l.a.createElement("h2",{style:{textAlign:"center"}},e.header),l.a.createElement("div",{style:{marginTop:30,marginBottom:30}},e.textRows.map((function(e){return l.a.createElement("p",null,e)}))))},w=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(e){r(e)},o=u.b().shape({name:u.c().required("Jm\xe9no je povinn\xe9 pole"),age:u.a().typeError("V\u011bk mus\xed b\xfdt \u010d\xedslo"),email:u.c().email("Neplatn\xfd email. Syst\xe9m o\u010dek\xe1v\xe1 form\xe1t honza.novak@seznam.cz"),phone_number:u.c().required("Telefonn\xed \u010d\xedslo je povinn\xe9 pole"),request_topic:u.c().required("P\u0159edm\u011bt je povinn\xe9 pole"),request_description:u.c().required("Popis \u017e\xe1dosti je povinn\xe9 pole")});return l.a.createElement("div",null,l.a.createElement(j,{header:"\u010c\xedm V\xe1m ostatn\xed mohou pomoci?",textRows:["Lorem ipsumdsfsdfsaf","sadmfosdanfsdofnsdfn"]}),l.a.createElement("div",{style:{width:"50%",marginLeft:"25%"}},l.a.createElement(m.c,{initialValues:{name:"",age:"",phone_number:"",email:"",request_topic:"",request_description:""},validationSchema:o,onSubmit:function(e){var t={api_name:"post_help_request",requester_name:e.name,requester_age:e.age,requester_email:e.email,requester_phone_number:e.phone_number,requester_address:a.formatted_address,requester_address_lat:a.lat,requester_address_lng:a.lng,request_topic:e.request_topic,request_details:e.request_description};console.log("Query Params = ",t),p.a.get(E,{params:t})}},(function(e){var t=e.errors,a=e.touched;return l.a.createElement(m.b,{className:"askhelp-form"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Jm\xe9no")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"name",name:"name",type:"text",placeholder:"K\u0159estn\xed jm\xe9no a p\u0159\xedjmen\xed  (povinn\xe9 pole)"})),t.name&&a.name?l.a.createElement("div",{className:"validation-error"},t.name):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"V\u011bk")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"age",name:"age",type:"text",placeholder:"Po\u010det rok\u016f   (nepovinn\xe9 pole)"})),t.age&&a.age?l.a.createElement("div",{className:"validation-error"},t.age):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Email")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"email",name:"email",type:"text",placeholder:"Ve form\xe1tu honza@novak.cz     (nepovinn\xe9 pole)"})),t.email&&a.email?l.a.createElement("div",{className:"validation-error"},t.email):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Telefonn\xed \u010d\xedslo")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"phone_number",name:"phone_number",type:"text",placeholder:"Ve form\xe1tu 720123789      (povinn\xe9 pole)"})),t.phone_number&&a.phone_number?l.a.createElement("div",{className:"validation-error"},t.phone_number):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Adresa")),l.a.createElement(q,{onAddressSelect:c})),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"P\u0159edm\u011bt \u017e\xe1dosti")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"request_topic",name:"request_topic",type:"text",placeholder:"Nap\u0159. Ven\u010den\xed psa   (povinn\xe9 pole)"})),t.request_topic&&a.request_topic?l.a.createElement("div",{className:"validation-error"},t.request_topic):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Popis \u017e\xe1dosti")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"request_description",name:"request_description",type:"text",placeholder:"Nap\u0159. M\xe1m 2 psy typu \u010divava kter\xe9 je pot\u0159eba ven\u010dit 2-kr\xe1t denn\u011b, r\xe1no a ve\u010der   (povinn\xe9 pole)"})),t.request_description&&a.request_description?l.a.createElement("div",{className:"validation-error"},t.request_description):null),l.a.createElement(f.a,{className:"btn-lg btn-dark btn-block submit-button",type:"submit"},"Poslat \u017e\xe1dost"))}))))},N=function(){return l.a.createElement(w,null)},O=a(480),z=function(e){Object(n.useEffect)((function(){}),[]);return l.a.createElement("tr",null,l.a.createElement("td",null,new Date(e.helpRequest.request_create_timestamp).toLocaleDateString()),l.a.createElement("td",null,e.helpRequest.request_topic),l.a.createElement("td",null,e.helpRequest.requester_address),l.a.createElement("td",null,l.a.createElement(f.a,{color:"primary",onClick:function(){var t="/details/".concat(e.helpRequest.request_id);window.open(t)}},"V\xedce")))},x=a(93),S=Object(x.withGoogleMap)((function(e){return Object(n.useEffect)((function(){}),[]),l.a.createElement(x.GoogleMap,{defaultZoom:e.zoom,defaultCenter:e.center},e.helpRequests.map((function(t){return l.a.createElement(P,{helpRequest:t,link:e.link})})))})),P=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){}),[]),l.a.createElement(x.Marker,{position:{lat:parseFloat(e.helpRequest.requester_address_lat),lng:parseFloat(e.helpRequest.requester_address_lng)},onClick:function(){return c(!r)}},r&&l.a.createElement(x.InfoWindow,{options:{closeBoxURL:"",enableEventPropagation:!0}},l.a.createElement("div",null,l.a.createElement("h3",null,e.helpRequest.request_topic),l.a.createElement("h5",null,e.helpRequest.request_details),e.link?l.a.createElement("h6",null,"V\xedce informaci ",l.a.createElement(o.b,{to:"/details/".concat(e.helpRequest.request_id),target:"_blank"},"zde")):null)))},C=S,R=(a(468),a(231)),L=a.n(R),V=function(e){return l.a.createElement("div",{style:{width:"20%",height:"20%",marginTop:"10%",marginLeft:"40%"}},l.a.createElement("h1",null,"Na\u010d\xedt\xe1n\xed..."),l.a.createElement(L.a,{type:"spin",color:"black",height:"100%",width:"100%"}))},I=function(e){for(var t=e.rowsPerPage,a=e.totalRows,r=e.paginate,c=[],o=Object(n.useState)(1),i=Object(s.a)(o,2),m=i[0],u=i[1],d=1;d<=Math.ceil(a/t);d++)c.push(d);return l.a.createElement("nav",null,l.a.createElement("ul",{className:"pagination"},c.map((function(e){return l.a.createElement("li",{key:e,className:"page-item"},l.a.createElement("a",{onClick:function(){return u(t=e),void r(t);var t},href:"javascript:;",className:"page-link",style:e===m?{backgroundColor:"#2200CC",color:"white"}:null},e))}))))},T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(!1),d=Object(s.a)(u,2),h=d[0],f=d[1],v=Object(n.useState)(1),b=Object(s.a)(v,2),g=b[0],_=b[1],y=Object(n.useState)(7),k=Object(s.a)(y,1)[0];Object(n.useEffect)((function(){f(!0),p.a.get(E,{params:{api_name:"get_help_requests",offset:0,row_count:1e3}}).then((function(e){r(e.data.result.help_requests),m(e.data.result.count),f(!1)})).catch((function(e){return console.error(e)}))}),[]);var q=g*k,j=q-k,w=a.slice(j,q);return l.a.createElement("div",null,h?l.a.createElement(V,null):l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Celkem \u017e\xe1d\xe1 o pomoc ",i," lid\xed po cel\xe9 \u010cesk\xe9 Republice"),l.a.createElement(C,{zoom:7,center:{lat:49.8600624,lng:15.5860745},containerElement:l.a.createElement("div",{style:{height:"400px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),helpRequests:a,link:!0}),l.a.createElement("h1",null,"Seznam inzer\xe1t\u016f (",j+1," - ",Math.min(q,i)," / ",i,")"),l.a.createElement(O.a,null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Den zad\xe1n\xed"),l.a.createElement("th",null,"P\u0159edm\u011bt \u017e\xe1dosti"),l.a.createElement("th",null,"Adresa"),l.a.createElement("th",null))),l.a.createElement("tbody",null,w.map((function(e){return l.a.createElement(z,{helpRequest:e})})))),l.a.createElement(I,{rowsPerPage:k,totalRows:a.length,paginate:function(e){return _(e)}})))},D=a(53),M=a(240),B=a(234),A=a.n(B),F=a(235),J=a.n(F),K=a(481),W=a(482),Z=D.a.img.withConfig({displayName:"LandingPage__Img100",componentId:"sypwfr-0"})(["width:100%;"]),G=D.a.div.withConfig({displayName:"LandingPage__SvgContainer",componentId:"sypwfr-1"})(["margin-top:-20%;z-index:-20;"]),H=D.a.div.withConfig({displayName:"LandingPage__IntroContainer",componentId:"sypwfr-2"})(["height:100%;margin-top:56px;padding:20px;"]),Q=Object(D.a)(f.a).withConfig({displayName:"LandingPage__SButton",componentId:"sypwfr-3"})(["margin:25px 0;"]),U=D.a.div.withConfig({displayName:"LandingPage__OnlyHighResDiv",componentId:"sypwfr-4"})(["@media (max-width:576px){display:none !important;}"]),$=Object(D.a)(K.a).withConfig({displayName:"LandingPage__FinalRow",componentId:"sypwfr-5"})(["padding:50px 0;"]),X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(H,{fluid:!0},l.a.createElement(K.a,{className:"h-50 justify-content-center"},l.a.createElement(W.a,{sm:"10",className:"my-auto",align:"center"},l.a.createElement("h2",null,"Tady bude uvodni text o Kindly, co to je atd.! bal bla Kindly je super a diky nemu muzete pomoct tem kteri to nejvic potrebuji. Pomozte hned ted!"))),l.a.createElement(K.a,null,l.a.createElement(W.a,{sm:"6",align:"center"},l.a.createElement(o.b,{to:"/iwanttohelp"},l.a.createElement(Q,{outline:!0,color:"secondary",size:"lg"},"Nab\xedz\xedm pomoc"))),l.a.createElement(W.a,{sm:"6",className:"my-auto",align:"center"},l.a.createElement(o.b,{to:"/ineedhelp"},l.a.createElement(Q,{outline:!0,color:"secondary",size:"lg"},"\u017d\xe1d\xe1m o pomoc"))))),l.a.createElement(U,null,l.a.createElement(G,null,l.a.createElement(M.a,{src:A.a,afterInjection:function(e){e&&console.error(e)},loading:function(){return l.a.createElement(Z,{src:J.a})}}))),l.a.createElement($,{className:"justify-content-center"},l.a.createElement(W.a,{sm:"10",className:"my-auto",align:"center"},l.a.createElement("h3",null,"Tady je nejaky dalsi text. Tohle jsou nasi sponzori. Bla bla bla bla bla bla."," ",l.a.createElement("a",{href:"/feedback"},"Muzete nam taky pomoct!")," Dalsi kecy bla bla bla bla. Pomahejte si. Tecka. Lorem Ipsum. Cau Tommy, nechces pomoct vykopat nejaky kameni?"))))},Y=function(e){e.errors,e.touched;var t=u.b().shape({requester_email:u.c().required("Email je povinn\xfd").email("Neplatn\xfd email. Syst\xe9m o\u010dek\xe1v\xe1 form\xe1t honza.novak@seznam.cz").max(100,"Email je p\u0159\xedli\u0161 dlouh\xfd"),feedback_topic:u.c().required("Chyb\xed p\u0159edm\u011bt"),feedback_description:u.c().max(1e3,"Popis je p\u0159\xedli\u0161 dlouh\xfd").required("Chyb\xed popis")});return l.a.createElement("div",null,l.a.createElement(j,{header:"Pomozte n\xe1m pom\xe1hat",textRows:["N\u011bco V\xe1m nefunguje tak jak m\xe1? M\xe1te n\xe1pad na mo\u017en\xe9 vylep\u0161en\xed t\xe9to aplikace? Nebo m\xe1te jakoukoli jinou relevantn\xed p\u0159ipom\xednku?","Pokud jste odpov\u011bd\u011bl/a ANO na jakoukoli z v\xfd\u0161e polo\u017een\xfdch ot\xe1zek, tak pros\xedm nev\xe1hejte a vypl\u0148te formul\xe1\u0159 n\xed\u017ee. Zabere V\xe1m to 2 minuty.","Va\u0161e zp\u011btn\xe9 vazby bereme velice v\xe1\u017en\u011b a jsme za n\u011b velice vd\u011b\u010dn\xed.","D\u011bkujeme"]}),l.a.createElement("div",{style:{width:"50%",marginLeft:"25%"}},l.a.createElement(m.c,{initialValues:{requester_email:"",feedback_topic:"",feedback_description:""},validationSchema:t,onSubmit:function(e){console.log("Request should be send with these values:",e),p.a.get(E,{params:{api_name:"post_feedback",email:e.requester_email,topic:e.feedback_topic,content:e.feedback_description}})}},(function(e){var t=e.errors,a=e.touched;return l.a.createElement(m.b,{className:"askhelp-form"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Email")),l.a.createElement("div",null,l.a.createElement(m.a,{name:"requester_email",type:"text",placeholder:"Ve formatu nap\u0159. honza.novak@seznam.cz"})),t.requester_email&&a.requester_email?l.a.createElement("div",{className:"validation-error"},t.requester_email):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"P\u0159edm\u011bt")),l.a.createElement("div",null,l.a.createElement(m.a,{name:"feedback_topic",type:"text",placeholder:"Nap\u0159. St\xed\u017enost nebo N\xe1vrh na vylep\u0161en\xed"})),t.feedback_topic&&a.feedback_topic?l.a.createElement("div",{className:"validation-error"},t.feedback_topic):null),l.a.createElement(h.a,null,l.a.createElement("div",{className:"input-label"},l.a.createElement("span",null,"Popis")),l.a.createElement("div",null,l.a.createElement(m.a,{id:"feedback_description",name:"feedback_description",type:"text",placeholder:"Nap\u0159. Nena\u010d\xedt\xe1 se mi mapa"})),t.feedback_description&&a.feedback_description?l.a.createElement("div",{className:"validation-error"},t.feedback_description):null),l.a.createElement(f.a,{className:"btn-lg btn-dark btn-block submit-button",type:"submit"},"Poslat p\u0159ipom\xednku"))}))))},ee=a(483),te=a(484),ae=a(488),ne=a(485),le=a(486),re=a(487),ce=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0];t[1];return l.a.createElement("div",null,l.a.createElement(ee.a,{color:"light",light:!0,expand:"md",fixed:"top"},l.a.createElement(te.a,{href:"/"},"Kindly"),l.a.createElement(ae.a,{isOpen:a,navbar:!0},l.a.createElement(ne.a,{className:"mr-auto",navbar:!0},l.a.createElement(le.a,null,l.a.createElement(re.a,{href:"/iwanttohelp"},"Nab\xedz\xedm pomoc")),l.a.createElement(le.a,null,l.a.createElement(re.a,{href:"/ineedhelp"},"\u017d\xe1d\xe1m o pomoc")),l.a.createElement(le.a,null,l.a.createElement(re.a,{href:"/feedback"},"Kontakt"))))))},oe=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){p.a.get(E,{params:{api_name:"get_help_request_for_id",request_id:e.match.params.request_id}}).then((function(e){var t=e.data.result;c(t),u("https://www.google.com/maps/dir/?api=1&destination=".concat(t.requester_address_lat,",").concat(t.requester_address_lng,"&travelmode=driving"))})).catch((function(e){return console.error(e)}))}),[]),l.a.createElement("div",{style:{height:"100%"}},null===r?l.a.createElement(V,null):l.a.createElement("div",null,l.a.createElement(j,{header:"Jak m\u016f\u017eete Vy pomoci ostatn\xedm?",textRows:["Lorem Ipsum sdfosdfsdofndsofds","Lorem Ipsum sdufsdfsdfsd"]}),l.a.createElement("div",{className:"wrapper",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{className:"description"},l.a.createElement("h1",null,r.request_topic),l.a.createElement("h4",null,r.request_details),l.a.createElement("p",null,r.request_description),l.a.createElement("p",null,r.requester_name?"Jm\xe9no = ".concat(r.requester_name):null),l.a.createElement("p",null,r.requester_email?"Email = ".concat(r.requester_email):null),l.a.createElement("p",null,r.requester_phone_number?"Telefonn\xed \u010d\xedslo = ".concat(r.requester_phone_number):null),l.a.createElement("p",null,r.requester_age?"V\u011bk = ".concat(r.requester_age):null),l.a.createElement("p",null,r.request_create_timestamp?"Den zadani = ".concat(new Date(r.request_create_timestamp).toLocaleDateString()):null)),l.a.createElement("div",{className:"map",style:{width:"80%"}},l.a.createElement(C,{zoom:12,center:{lat:parseFloat(r.requester_address_lat),lng:parseFloat(r.requester_address_lng)},containerElement:l.a.createElement("div",{style:{height:"100%"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}}),helpRequests:[r],link:!1}),l.a.createElement("a",{href:m,target:"_blank"},l.a.createElement(f.a,{color:"primary",style:{width:"40%",marginLeft:"30%",marginTop:"30px"}},"Otev\u0159\xedt v navigaci"))))))};var ie=function(){return l.a.createElement(o.a,null,l.a.createElement(ce,null),l.a.createElement(i.a,{path:"/",exact:!0,component:X}),l.a.createElement(i.a,{path:"/ineedhelp",component:N}),l.a.createElement(i.a,{path:"/iwanttohelp",component:T}),l.a.createElement(i.a,{path:"/feedback",component:Y}),l.a.createElement(i.a,{path:"/details/:request_id",component:oe}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[242,1,2]]]);
//# sourceMappingURL=main.315aad2c.chunk.js.map