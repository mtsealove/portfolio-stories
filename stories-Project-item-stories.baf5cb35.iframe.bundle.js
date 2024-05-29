"use strict";(self.webpackChunkportfolio_2024=self.webpackChunkportfolio_2024||[]).push([[86],{"./src/stories/Project.item.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default_parameters,_Default_parameters_docs,_Default_parameters1,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Item/ProjectItem",component:__webpack_require__("./src/components/ProjectItem.tsx").A,tags:["autodocs"],parameters:{nextRouter:{pathname:"/",asPath:"/"}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-gray-50 grid grid-cols-3",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})],args:{}},Default={args:{project:{id:1,thumbnail:"https://storage.googleapis.com/download/storage/v1/b/hash-portfolio-image/o/1703317783400-%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-12-23%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AE%204.49.34.png?generation=1703317784241007&alt=media",title:"긱블 공식 홈페이지",summary:"긱블 공식 홈페이지",startAt:new Date,endAt:new Date,description:"",images:[]}}};Default.parameters={...Default.parameters,docs:{...null===(_Default_parameters=Default.parameters)||void 0===_Default_parameters?void 0:_Default_parameters.docs,source:{originalSource:"{\n  args: {\n    project: {\n      id: 1,\n      thumbnail: 'https://storage.googleapis.com/download/storage/v1/b/hash-portfolio-image/o/1703317783400-%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-12-23%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AE%204.49.34.png?generation=1703317784241007&alt=media',\n      title: '긱블 공식 홈페이지',\n      summary: '긱블 공식 홈페이지',\n      startAt: new Date(),\n      endAt: new Date(),\n      description: '',\n      images: []\n    }\n  }\n}",...null===(_Default_parameters1=Default.parameters)||void 0===_Default_parameters1||null===(_Default_parameters_docs=_Default_parameters1.docs)||void 0===_Default_parameters_docs?void 0:_Default_parameters_docs.source}}};const __namedExportsOrder=["Default"]},"./src/components/Card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");const Card=props=>{const{children,className,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"bg-white rounded-lg shadow-lg overflow-hidden ".concat(className),"aria-label":"card",...rest,children})},__WEBPACK_DEFAULT_EXPORT__=Card;Card.__docgenInfo={description:"",methods:[],displayName:"Card"}},"./src/components/ProjectItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_components_Card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Card/index.tsx"),next_image__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/nextjs/dist/images/next-image.mjs"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);const ProjectItem=param=>{let{project}=param;const{title,description,thumbnail,summary}=project,[isHovered,setIsHover]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),blurClass=(0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)((()=>"w-full h-full absolute left-0 top-0 bg-gray-900 bg-opacity-55 transform transition duration-300 ease-in-out flex items-center justify-center ".concat(!isHovered&&"translate-y-80")),[isHovered]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_link__WEBPACK_IMPORTED_MODULE_4___default(),{href:"/projects/".concat(project.id),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Card__WEBPACK_IMPORTED_MODULE_1__.A,{className:"cursor-pointer","aria-label":"project",onMouseEnter:()=>setIsHover(!0),onMouseLeave:()=>setIsHover(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"w-full overflow-hidden relative",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_2__.A,{src:thumbnail,width:400,height:300,className:"object-cover object-center aspect-4/3 w-full",alt:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:blurClass,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"text-white text-2xl font-semibold",children:"Click !"})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"p-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"font-semibold",children:title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{className:"text-sm font-medium text-gray-600",children:summary})]})]})})},__WEBPACK_DEFAULT_EXPORT__=ProjectItem;ProjectItem.__docgenInfo={description:"",methods:[],displayName:"ProjectItem",props:{project:{required:!0,tsType:{name:"Project"},description:""}}}}}]);