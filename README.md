
[수상에스티 - MES For CloudConnector]
=====================================
> IDE : Microsoft CODE

1. [Front-End]
	- Framework : bootstrap4 & Angular4 & Node package manager(npm)
	- Language : Typescript & SCSS & HTML5
2. [Back-End]
    - DataBase & Server : Firebase


>   $npm i
>   $ng serve

* * *

#### [폴더 구성]
— 주로 사용 또는 중요한 폴더만 나타냄—
     
    /mes-for-cloudconnector
        ┕/e2e(Angular App Test용 : 사용X)
        ┕/nginx(Angular App Server Hosting 용 : 사용X)
        ┕/node_modules(Application Modules Folder : NPM으로 관리)
        ┕/src
            ┕/app 
            ┕/layouts
            ┕/dashboard
            ┕/line-process-monitoring
            ┕/schedule-manager
            ┕/poor-manager
            ┕/stock-manager
            ┕/worker-manager
            ┕/factory-environment
            ┕/manager-setting
            [위 각 폴더별 html, routing.module.ts, ts, module.ts 설명]
                -html : html 관련 태그 & 코드
                -routing.module.ts : Angular Routing Module을 위한 설정 ts파일
                -ts : 실제 동작부 typescript code
                -module.ts : Local Page에 대한 Module Config
            app.component.html
            app.component.ts
                -firebaseConfig 수정필요!                                                                       (https://firebase.google.com/docs/admin/setup?hl=ko#add_firebase_to_your_app) 참조
            app.component.spec.ts
            app.module.ts
            app.routing.ts
            [app.xx.ts & app.xx.html 은 app전체에 대한 소스파일(Global 설정)]
		┕/assets
			┕/css (fontawesome 파일 수정)
			┕/fonts (fontawesome 파일 수정)
			┕/img (Application에 사용되는 image파일 assets 폴더)
		┕/environments (사용X)
		┕/img (Logo이미지)
		┕/providers (Injection을 통한 DataSample)
			┕data.ts
		┕/scss
			┕/bootstrap (bootstrap SCSS 사용X)
			┕/core (CoreUI SCSS 사용X)
			┕/vendors (사용X)
			┕_custom-variables.scss (Custom Variable 수정)
			┕_custom.scss (Custom CSS 수정)
			┕style.scss ( CSS관련 import)
		