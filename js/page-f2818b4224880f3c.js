(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974], {
    1057: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => p
      });
      var n = t(5155), // Likely React's JSX runtime
        s = t(9137), // styled-jsx styles
        i = t.n(s), // styled-jsx default export
        r = t(2115), // React core
        o = t(2854), // ChevronRight icon component
        d = t(6766), // Next.js Image component
        l = t(8126), // Null component (maybe for Head in specific cases)
        c = t.n(l); // Null component default export

      function p() {
        // State variables using React's useState hook
        let [e, a] = (0, r.useState)([525e3]), // Loan amount (initial: 525,000)
          [t, s] = (0, r.useState)("30 días"), // Loan term (initial: "30 días")
          [l, p] = (0, r.useState)(1.7), // Interest rate (initial: 1.7 - probably 170% as a decimal)
          [x, f] = (0, r.useState)(!1), // Hover state for button
          [m, b] = (0, r.useState)(!1), // Active/pressed state for button
          [u, g] = (0, r.useState)(!1), // Animation visibility state (for initial component load)

          // Helper functions for formatting numbers
          h = e => new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(e),
          y = e => new Intl.NumberFormat("es-AR", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }).format(e),

          j = () => ("15 días" === t, t), // Returns the current term (seems redundant, but minified)

          // Predefined loan term options with their respective interest rates
          k = [{
            label: "15 días",
            value: "15 días",
            interest: .4
          }, {
            label: "30 días",
            value: "30 días",
            interest: .55
          }, {
            label: "2 meses",
            value: "2 meses",
            interest: .85
          }, {
            label: "3 meses",
            value: "3 meses",
            interest: 1.05
          }, {
            label: "6 meses",
            value: "6 meses",
            interest: 1.7
          }];

        // React's useEffect hooks for side effects
        (0, r.useEffect)(() => {
          // Updates interest rate when loan term changes
          let e = k.find(e => e.value === t);
          e && p(e.interest)
        }, [t]),

        (0, r.useEffect)(() => {
          // Sets animation visibility after a short delay (100ms)
          let e = setTimeout(() => {
            g(!0)
          }, 100);
          return () => clearTimeout(e) // Cleanup function
        }, []),

        (0, r.useEffect)(() => {
          // Sets document title and favicon on component mount
          document.title = "Préstamos Presonales | CrediPlus";
          let e = document.querySelector("link[rel*='icon']") || document.createElement("link");
          e.type = "image/x-icon", e.rel = "shortcut icon", e.href = "/images/favicon.ico", document.getElementsByTagName("head")[0].appendChild(e);
          let a = document.querySelector("link[rel='apple-touch-icon']") || document.createElement("link");
          a.rel = "apple-touch-icon", a.href = "/apple-touch-icon.png", document.getElementsByTagName("head")[0].appendChild(a)
        }, []); // Empty dependency array means this runs once on mount

        // Component's JSX structure (UI rendering)
        return (0, n.jsxs)(n.Fragment, {
          children: [
            // Head management for SEO and PWA manifests
            (0, n.jsxs)(c(), {
              children: [
                (0, n.jsx)("title", {
                  children: "Préstamos Presonales | CrediPlus"
                }),
                (0, n.jsx)("meta", {
                  name: "description",
                  content: "Simulá tu Préstamo y recibilo al instante con CrediPlus"
                }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  type: "image/x-icon",
                  href: "/images/favicon.ico"
                }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "16x16",
                  href: "/images/favicon-16x16.png"
                }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  sizes: "32x32",
                  href: "/images/favicon-32x32.png"
                }),
                (0, n.jsx)("link", {
                  rel: "apple-touch-icon",
                  sizes: "180x180",
                  href: "/apple-touch-icon.png"
                }),
                (0, n.jsx)("link", {
                  rel: "shortcut icon",
                  href: "/images/favicon.ico"
                }),
                (0, n.jsx)("meta", {
                  name: "theme-color",
                  content: "#3b82f6"
                }),
                (0, n.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#3b82f6"
                })
              ]
            }),
(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf min-h-screen bg-gradient-to-b from-purple-50 to-gray-100 flex flex-col items-center justify-start relative",
children:[(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf w-full bg-white shadow-sm border-b border-gray-100 flex justify-center py-3 px-6",
children:(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf w-full max-w-md flex justify-center items-center",
children:(0,n.jsx)(d.default,{src:"/images/crediplus.jpeg",alt:"CrediPlus Logo",width:180,height:50,className:"h-10 w-auto"})})}),
(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf w-full max-w-md space-y-8 pb-16 p-6",children:[(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf "+"text-center space-y-2 transition-all duration-1000 ".concat(u?"opacity-100 translate-y-0":"opacity-0 -translate-y-8"),
children:(0,n.jsxs)("h1",{className:"jsx-aa6e8a7f7d099bdf text-4xl font-light text-gray-900 leading-tight",children:["Simulá tu ",
(0,n.jsx)("span",{className:"jsx-aa6e8a7f7d099bdf text-purple-600 font-semibold",children:"Préstamo"})," y recibilo al instante"]})}),
(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf "+"space-y-6 transition-all duration-1000 delay-200 ".concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),
children:[(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-center text-gray-600 text-lg font-normal",children:"\xbfCuánto querés pedir?"}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf text-center",
children:(0,n.jsx)("span",{className:"jsx-aa6e8a7f7d099bdf text-5xl font-bold text-purple-600",children:h(e[0])})}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf px-4 relative",
children:(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf relative",
children:[(0,n.jsx)("input",{type:"range",min:5e4,max:1e6,step:25e3,value:e[0],onChange:e=>a([Number.parseInt(e.target.value)]),style:{background:"linear-gradient(to right, #3858ad 0%, rgb(104 85 247)".concat((e[0]-5e4)/95e4*100,"%, #e5e7eb ").concat((e[0]-5e4)/95e4*100,"%, #e5e7eb 100%)")},className:"jsx-aa6e8a7f7d099bdf w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-custom z-10 relative"}),
(0,n.jsx)("div",{style:{left:"".concat((e[0]-5e4)/95e4*100,"%"),border:"2px solidrgb(85, 115, 247)"},className:"jsx-aa6e8a7f7d099bdf absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center pointer-events-none z-20"})]})})]}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf "+"space-y-6 transition-all duration-1000 delay-400 ".concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),children:[(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-center text-gray-600 text-lg font-normal",children:"\xbfEn cuánto tiempo?"}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf flex justify-center gap-3 flex-wrap",
children:k.map((e,a)=>(0,n.jsx)("button",{onClick:()=>s(e.value),className:"jsx-aa6e8a7f7d099bdf "+"px-4 py-2 rounded-full text-sm transition-all duration-150 font-medium ".concat(t===e.value?"bg-purple-600 text-white shadow-lg scale-105 font-semibold":"bg-gray-200 text-gray-700 hover:bg-gray-300"," ").concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-4"),children:e.label},e.value))})]}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf "+"text-center space-y-3 transition-all duration-1000 delay-700 ".concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),
children:[(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-gray-600 text-lg font-normal",children:"Valor de cuota"}),
(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-4xl font-bold text-gray-800",children:h((()=>{let a=e[0]*(1+l);return"15 d\xedas"===t?Math.round(a):"30 d\xedas"===t?Math.round(a):Math.round(a/Number.parseInt(t.split(" ")[0]))})())}),(0,n.jsxs)("p",{className:"jsx-aa6e8a7f7d099bdf text-sm text-gray-500 font-normal",children:["Interes: ",(100*l).toFixed(0),"%"]})]}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf "+"space-y-4 transition-all duration-1000 delay-900 ".concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),children:[(0,n.jsxs)("a",{href:(()=>{let a=y(e[0]),t=j();return"https://wa.me/3765084215?text=Me%20interesa%20solicitar%20un%20pr%C3%A9stamo%20de%20%24%C2%A0".concat(a,"%20para%20pagar%20en%20").concat(t,".")})(),target:"_blank",rel:"noopener noreferrer",style:{boxShadow:"0 8px 25px rgba(97, 74, 217, 0.4), 0 4px 15px rgba(74, 100, 217, 0.4)"},onMouseEnter:()=>f(!0),onMouseLeave:()=>{f(!1),b(!1)},onMouseDown:()=>b(!0),onMouseUp:()=>b(!1),className:"jsx-aa6e8a7f7d099bdf "+"gradient-button w-full h-16 text-white text-xl rounded-full relative overflow-hidden flex items-center justify-center transition-all duration-200 font-bold uppercase tracking-wide ".concat(m?"scale-95":x?"scale-102":""),
children:[(0,n.jsx)("span",{className:"jsx-aa6e8a7f7d099bdf mr-6 relative z-10",children:"SOLICITAR PRESTAMO"}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf "+"absolute right-6 transition-transform duration-200 z-10 ".concat(x?"translate-x-1":""),
children:(0,n.jsx)(o.A,{className:"h-6 w-6"})})]}),
(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-center text-sm text-gray-400 font-normal",children:"Sujeto a evaluación crediticia."})]}),
(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf "+"space-y-6 mt-12 transition-all duration-1000 delay-1000 ".concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),children:[(0,n.jsxs)("h2",{className:"jsx-aa6e8a7f7d099bdf text-2xl text-center",children:["3 razones",
(0,n.jsx)("br",{className:"jsx-aa6e8a7f7d099bdf"}),"para pedirlo en CrediPlus"]}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf space-y-4",
children:[(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf "+"bg-white rounded-3xl p-6 shadow-sm transition-all duration-700 delay-1200 ".concat(u?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"),children:(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf flex items-start space-x-4",
children:[(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf text-4xl font-bold text-purple-200",children:"01"}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf",
children:[(0,n.jsx)("h3",{className:"jsx-aa6e8a7f7d099bdf text-xl font-bold text-gray-900 mb-2",children:"Préstamos inmediatos"}),
(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-gray-500 text-sm font-normal",children:"Sin documentación interminable ni trámites eternos. Lo pedís, y lo recibís."})]})]})}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf "+"bg-white rounded-3xl p-6 shadow-sm transition-all duration-700 delay-1400 ".concat(u?"opacity-100 translate-x-0":"opacity-0 translate-x-8"),children:(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf flex items-start space-x-4",
children:[(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf text-4xl font-bold text-purple-200",children:"02"}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf",
children:[(0,n.jsx)("h3",{className:"jsx-aa6e8a7f7d099bdf text-xl font-bold text-gray-900 mb-2",children:"Adelantos rapidos"}),
(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-gray-500 text-sm font-normal",children:"\xbfNecesitás salir del apuro? Pedí un adelanto y pagalo a los 15, 30, 60 o mas días."})]})]})}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf "+"bg-white rounded-3xl p-6 shadow-sm transition-all duration-700 delay-1600 ".concat(u?"opacity-100 translate-x-0":"opacity-0 -translate-x-8"),children:(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf flex items-start space-x-4",
children:[(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf text-4xl font-bold text-purple-200",children:"03"}),(0,n.jsxs)("div",{className:"jsx-aa6e8a7f7d099bdf",
children:[(0,n.jsx)("h3",{className:"jsx-aa6e8a7f7d099bdf text-xl font-bold text-gray-900 mb-2",children:"Control total desde WhatsApp"}),
(0,n.jsx)("p",{className:"jsx-aa6e8a7f7d099bdf text-gray-500 text-sm font-normal",children:"Gestioná tus préstamos, adelantos y pagos directo por WhatsApp. Sin llamadas, sin papeles, sin complicaciones."})]})]})})]})]}),
(0,n.jsx)("div",{className:"jsx-aa6e8a7f7d099bdf text-center mt-8 pb-8",
children:(0,n.jsx)("a",{href:"https://wa.me/3765084215?text=Buenas,%20quisiera%20consultar%20los%20t%C3%A9rminos%20y%20condiciones.",target:"_blank",rel:"noopener noreferrer",className:"jsx-aa6e8a7f7d099bdf text-gray-400 text-sm underline hover:text-gray-600 font-normal",children:"Consulta terminos y condiciones aca."})})]}),
(0,n.jsx)("a",{href:"https://wa.me/5493765084215",target:"_blank",rel:"noopener noreferrer",style:{transitionDelay:"1800ms"},"aria-label":"Contactar por WhatsApp",className:"jsx-aa6e8a7f7d099bdf "+"fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50 flex items-center justify-center hover:scale-110 transition-all duration-300 ".concat(u?"opacity-100 translate-y-0":"opacity-0 translate-y-8"),
children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",className:"jsx-aa6e8a7f7d099bdf text-white",
children:(0,n.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488",className:"jsx-aa6e8a7f7d099bdf"})})}),
(0,n.jsx)(i(),{id:"aa6e8a7f7d099bdf",children:'@-webkit-keyframes gradientShift{0%{background-position:0%50%;opacity:.8}50%{background-position:100%50%;opacity:1}100%{background-position:0%50%;opacity:.8}}@-moz-keyframes gradientShift{0%{background-position:0%50%;opacity:.8}50%{background-position:100%50%;opacity:1}100%{background-position:0%50%;opacity:.8}}@-o-keyframes gradientShift{0%{background-position:0%50%;opacity:.8}50%{background-position:100%50%;opacity:1}100%{background-position:0%50%;opacity:.8}}@keyframes gradientShift{0%{background-position:0%50%;opacity:.8}50%{background-position:100%50%;opacity:1}100%{background-position:0%50%;opacity:.8}}@-webkit-keyframes pulse{0%{opacity:.5}50%{opacity:.8}100%{opacity:.5}}@-moz-keyframes pulse{0%{opacity:.5}50%{opacity:.8}100%{opacity:.5}}@-o-keyframes pulse{0%{opacity:.5}50%{opacity:.8}100%{opacity:.5}}@keyframes pulse{0%{opacity:.5}50%{opacity:.8}100%{opacity:.5}}.gradient-button.jsx-aa6e8a7f7d099bdf{background:-webkit-linear-gradient(left,rgb(97,74,217),rgb(56, 87, 173) 51%,rgb(97,74,217));background:-moz-linear-gradient(left,rgb(97,74,217),rgb(56, 87, 173) 51%,rgb(97,74,217));background:-o-linear-gradient(left,rgb(97,74,217),rgb(56, 87, 173) 51%,rgb(97,74,217));background:linear-gradient(70deg,rgb(97,74,217),rgba(56, 87, 173, 0.84)  51%,rgb(97,74,217));-webkit-background-size:200%100%;-moz-background-size:200%100%;-o-background-size:200%100%;background-size:200%100%;-webkit-animation:gradientShift 2.5s cubic-bezier(.65,0,.35,1)infinite alternate;-moz-animation:gradientShift 2.5s cubic-bezier(.65,0,.35,1)infinite alternate;-o-animation:gradientShift 2.5s cubic-bezier(.65,0,.35,1)infinite alternate;animation:gradientShift 2.5s cubic-bezier(.65,0,.35,1)infinite alternate;position:relative;z-index:1}.gradient-button.jsx-aa6e8a7f7d099bdf {position: relative;overflow: hidden; border-radius: 32px;&::before {content: "";position: absolute;z-index: -1;left: 0;top: 0;right: 0;bottom: 0;width: 100%;height: 100%; background: linear-gradient(90deg, rgb(97, 74, 217), rgba(56, 87, 173, 0.84)  51%, rgb(97, 74, 217));background-size: 200% 100%;filter: blur(10px);border-radius: 32px;animation: gradientShift 2.5s cubic-bezier(.65, 0, .35, 1) infinite alternate, pulse 2s ease-in-out infinite alternate;}&:hover {animation-play-state: paused;&::before {animation-play-state: paused;}}}.slider-custom.jsx-aa6e8a7f7d099bdf::-webkit-slider-thumb{-moz-appearance:none;-ms-appearance:none;appearance:none;width:24px;height:24px;background:transparent;cursor:pointer;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;z-index:20;-webkit-appearance:none}.slider-custom.jsx-aa6e8a7f7d099bdf::-moz-range-thumb{width:24px;height:24px;background:transparent;cursor:pointer;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;z-index:20;-moz-appearance:none}.slider-custom.jsx-aa6e8a7f7d099bdf::-ms-thumb{width:24px;height:24px;background:transparent;cursor:pointer;border:none;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;z-index:20}@media(max-width:768px){.slider-custom.jsx-aa6e8a7f7d099bdf::-webkit-slider-thumb{-moz-appearance:none!important;-ms-appearance:none!important;appearance:none!important;-webkit-appearance:none!important;width:30px!important;height:30px!important;background:transparent!important;border:none!important;-webkit-box-shadow:none!important;-moz-box-shadow:none!important;box-shadow:none!important;cursor:pointer!important}.slider-custom.jsx-aa6e8a7f7d099bdf{-webkit-appearance:none!important;-moz-appearance:none!important;-ms-appearance:none!important;appearance:none!important;height:8px!important}.slider-custom.jsx-aa6e8a7f7d099bdf:focus{outline:none!important}}'})]})]})}},4176:(e,a,t)=>{Promise.resolve().then(t.bind(t,1057))}},e=>{var a=a=>e(e.s=a);e.O(0,[695,441,684,358],()=>a(4176)),_N_E=e.O()}]);