"use strict";angular.module("multilineStringToJavascriptConverterApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial"]).config(["$routeProvider","$mdThemingProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.theme("default").primaryPalette("green").accentPalette("amber")}]),angular.module("multilineStringToJavascriptConverterApp").controller("MainCtrl",["$scope",function(a){function b(a,b){var d=c(a);return _.map(d,_.partial(_.add,b))}function c(a){return a.split("\n")}function d(a,b){return"single"===b?a.replace(/'/g,"\\'"):a.replace(/"/g,'\\"')}a.variableName="string",a.inputString="<html>\n<head>\n<title>Hello</title></head>\n<body></body></html>",a.quoteType="single",a.selectedMethod="plusConcat",a.inputString='<html>   \n  <head>Hello</head>    \n  <body class="main" ng-class="{\'my-class\': true}">World</body>    \n</html>';var e={plusConcat:function(a,c){var d=b(a,c);return a=d.join(c+" + \n"),a+c},arrayJoin:function(a,c){var d=b(a,c);return a=d.join(c+",\n"),a="[\n"+a+c+"\n].join("+c+c+")"},variableConcat:function(a,c,d){var e=b(a,c),f=_.map(_.rest(e),_.partial(_.add,d+" += "));return e=_.take(e).concat(f),a=e.join(c+";\n"),a+c},splitBackslash:function(a,b){var d=c(a);return a=d.join("\\\n"),b+a+b}};a.transformInput=function(a,b,c,f){var g="single"===f?"'":'"',h=d(a,f);return h=e[b](h,g,c),"var "+c+" = "+h+";"}}]);