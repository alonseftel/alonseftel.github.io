(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n  \n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n  \n        height: 100%;\n  \n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n  </style>\n  \n  <body>\n    <div class=\"bg\">\n        <div>\n           add new company\n        <br>\n            <input type=\"name\" placeholder=\"name\" [(ngModel)]=\"company.name\">\n            <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"company.email\">\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"company.password\">\n            <button (click)=\"addCompany()\">add company :)</button>\n            <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n        </div>\n    </div>\n  </body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n    <style>\n        body,\n        html {\n            height: 100%;\n        }\n    \n        .bg {\n            background-image: url(\"assets/company.jpeg\");\n    \n            height: 100%;\n    \n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n        }\n    </style>\n    \n    <body>\n        <div class=\"bg\">\n            <div>\n                 Add New Coupon <br/>\n            \n              \n                <select [(ngModel)]=\"coupon.category\">\n                        <option>SURFBOARD</option>\n                        <option>SHORTES</option>\n                        <option>T_SHIRT</option>\n                        <option>WAX</option>\n                        <option>WETSUITE</option>\n                        <option>OTHER</option>\n                    </select>\n                <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"coupon.title\">\n                <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"coupon.description\">\n                <input type=\"date\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\">\n                <input type=\"date\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\">\n                <input type=\"number\" placeholder=\"amount\" [(ngModel)]=\"coupon.amount\">\n                <input type=\"number\" placeholder=\"price\" [(ngModel)]=\"coupon.price\">\n                 <input type=\"text\" placeholder=\"image\" [(ngModel)]=\"coupon.image\"> \n                <button (click)=\"addCoupon()\">add coupon :)</button>\n            </div>\n            <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/company\">back</a>\n        </div>\n    </body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div>\n            add new customer <br>\n        \n            <input type=\"firstName\" placeholder=\"firstName\" [(ngModel)]=\"customer.firstName\">\n            <input type=\"lastName\" placeholder=\"lastName\" [(ngModel)]=\"customer.lastName\">\n            <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"customer.email\">\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"customer.password\">\n            <button (click)=\"addCustomer()\">add customer :)</button>\n            <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n        </div>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n  body,\n  html {\n    height: 100%;\n  }\n\n  .bg {\n    background-image: url(\"assets/admin.jpg\");\n\n    height: 100%;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n</style>\n\n<body>\n  <div class=\"bg\">\n \n      <a routerLink=\"/add-company\">Add company</a> <br />\n      <a routerLink=\"/update-company\">update Company</a> <br />\n      <a routerLink=\"/delete-company\">deleteCompany</a> <br />\n      <a routerLink=\"/get-all-companies\">get All Companies</a> <br />\n      <a routerLink=\"/get-one-company\">get One Company </a><br />\n      <a routerLink=\"/add-customer\">Add New Costomer</a> <br />\n      <a routerLink=\"/update-customer\">Update customer</a> <br />\n      <a routerLink=\"/delete-customer\">Delete customer</a> <br />\n      <a routerLink=\"/get-all-customers\">Get all customer</a> <br />\n      <a routerLink=\"/get-one-customer\">Get One customer</a> <br />\n     \n  </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n  <style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/company.jpeg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n      <a routerLink=\"/add-coupon\">Add coupon</a> <br />\n      <a routerLink=\"/update-coupon\">update coupon</a> <br />\n      <a routerLink=\"/delete-coupon\">delete coupon</a> <br />\n      <a routerLink=\"/get-all-coupon\">get All coupons</a> <br />\n      <a routerLink=\"/get-coupon-by-category\">get coupon by category  </a><br />\n      <a routerLink=\"/get-coupon-by-max-price\">get coupon by max price </a><br />\n      <a routerLink=\"/get-company-details\">get Company details </a><br />\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n \n<style>\n  body, html {\n    height: 100%;\n    \n  }\n  .bg {\n    background-image: url(\"assets/customer.jpg\");\n\n    height: 100%;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n</style>\n<body>\n  <div class=\"bg\">\n    <br>\n    <br>\n    <br>\n    <a routerLink=\"/get-all-coupon-to-buy-customer\">view coupon to buy</a> <br/>\n    <a routerLink=\"/get-all-coupon-for-customer\">get all your coupon</a> <br />\n    <a routerLink=\"/get-all-coupon-for-customer-by-category\">get coupons by category</a> <br />\n    <a routerLink=\"/get-all-coupon-for-customer-by-max-price\">get coupons by max price</a> <br />\n    <a routerLink=\"/get-customer-details\">get your details</a> <br/>\n    \n       </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            delete company <br>\n            <div>\n                <input type=\"number\" placeholder=\"number\" [(ngModel)]=\"company.id\">\n                <input type=\"button\" value=\"Delete\" (click)=\"deleteCompany()\">\n                <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n            </div>\n        </div> \n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <style>\n        body,\n        html {\n                height: 100%;\n        }\n\n        .bg {\n                background-image: url(\"assets/company.jpeg\");\n\n                height: 100%;\n\n                background-position: center;\n                background-repeat: no-repeat;\n                background-size: cover;\n        }\n</style>\n\n<body>\n        <div class=\"bg\">\n            <div>\n                 delete coupon<br />\n            <input type=\"number\" placeholder=\"number\" [(ngModel)]=\"coupon.id\">\n            <input type=\"button\" value=\"Delete\" (click)=\"deleteCoupon()\">\n            </div>\n            <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/company\">back</a>\n        </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    \n<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div>\n             delete customer <br>\n        <input type=\"number\" placeholder=\"number\" [(ngModel)]=\"customer.id\">\n        <input type=\"button\" value=\"Delete\" (click)=\"deleteCustomer()\">\n        </div>\n        <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body, html {\n      height: 100%;\n    }\n    .bg {\n      background-image: url(\"assets/footer2.jpg\");\n \n      height: 100%;\n \n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n </style>\n <body>\n    <div class=\"bg\">\n        keep surf !!!\n       </div>\n </body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div let p of companies>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n                    <td>\n                        name\n                    </td>\n                    <td>\n                        emil\n                    </td>\n\n                </tr>\n                <tr *ngFor=\"let p of companies\">\n                    <td>{{p.id}}</td>\n                    <td>{{p.name}}</td>\n                    <td> {{p.email}}</td>\n\n                </tr>\n\n\n            </table>\n\n        </div>\n        <br > \n        <br > \n        <br >\n        \n        <a routerLink=\"/admin\">back</a>\n    </div>\n    \n            \n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.html": 
        /*!*****************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.html ***!
          \*****************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/customer2.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <select [(ngModel)]=\"category\">\n                <option>SURFBOARD</option>\n                <option>SHORTES</option>\n                <option>T_SHIRT</option>\n                <option>WAX</option>\n                <option>WETSUITE</option>\n                <option>OTHER</option>\n            \n            </select>\n        </div>\n        <div>\n            <button (click)=\"getCouponbyCategory()\">get get Coupon by Category :)</button>\n\n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n\n                    <td>\n                        category\n                    </td>\n                    <td>\n                        title\n                    </td>\n                    <td>\n                        description\n                    </td>\n                    <td>\n                        start tDate\n                    </td>\n                    <td>\n                        end Date\n                    </td>\n                    <td>\n                        amount\n                    </td>\n                    <td>\n                        price\n                    </td>\n                    <td>\n                        image\n                    </td>\n                </tr>\n                <tr *ngFor=\"let coupon of coupons\">\n                    <td>{{coupon.id}}</td>\n                    <td>{{coupon.category}}</td>\n                    <td>{{coupon.title}}</td>\n                    <td>{{coupon.description}}</td>\n                    <td>{{coupon.startDate}}</td>\n                    <td>{{coupon.endDate}}</td>\n                    <td>{{coupon.amount}}</td>\n                    <td>{{coupon.price}}</td>\n                    <td>{{coupon.image}}</td>\n                </tr>\n\n\n            </table>\n\n        </div>\n        <br>\n        <br>\n        <br>\n\n        <a routerLink=\"/customer\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.html": 
        /*!*******************************************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.html ***!
          \*******************************************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/customer2.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <input type=\"number\" placeholder=\"press here max price\" value=\"maxPrice\" [(ngModel)]=\"maxPrice\">\n        </div>\n        <div>\n            <button (click)=\"getCouponsbyMaxPrice()\">get Coupon by max price :)</button>\n        \n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n        \n                    <td>\n                        category\n                    </td>\n                    <td>\n                        title\n                    </td>\n                    <td>\n                        description\n                    </td>\n                    <td>\n                        start tDate\n                    </td>\n                    <td>\n                        end Date\n                    </td>\n                    <td>\n                        amount\n                    </td>\n                    <td>\n                        price\n                    </td>\n                    <td>\n                        image\n                    </td>\n                </tr>\n                <tr *ngFor=\"let c of coupons\">\n                    <td>{{c.id}}</td>\n                    <td>{{c.category}}</td>\n                    <td>{{c.title}}</td>\n                    <td>{{c.description}}</td>\n                    <td>{{c.startDate}}</td>\n                    <td>{{c.endDate}}</td>\n                    <td>{{c.amount}}</td>\n                    <td>{{c.price}}</td>\n                    <td>{{c.image}}</td>\n                </tr>\n        \n        \n            </table>\n        \n        </div>\n        <br>\n        <br>\n        <br>\n\n        <a routerLink=\"/customer\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.html": 
        /*!*****************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.html ***!
          \*****************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/customer2.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div let c of coupons>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n\n                    <td>\n                        category\n                    </td>\n                    <td>\n                        title\n                    </td>\n                    <td>\n                        description\n                    </td>\n                    <td>\n                        start tDate\n                    </td>\n                    <td>\n                        end Date\n                    </td>\n                    <td>\n                        amount\n                    </td>\n                    <td>\n                        price\n                    </td>\n                    <td>\n                        image\n                    </td>\n                </tr>\n                <tr *ngFor=\"let c of coupons\">\n                    <td>{{c.id}}</td>\n                    <td> {{c.category}}</td>\n                    <td>{{c.title}}</td>\n                    <td>{{c.description}}</td>\n                    <td> {{c.startDate}}</td>\n                    <td>{{c.endDate}}</td>\n                    <td>{{c.amount}}</td>\n                    <td> {{c.price}}</td>\n                    <td> {{c.image}}</td>\n                </tr>\n\n\n            </table>\n\n        </div>\n        <br>\n        <br>\n        <br>\n\n        <a routerLink=\"/customer\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.html": 
        /*!***********************************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.html ***!
          \***********************************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    <style>\n        body, html {\n          height: 100%;\n          \n        }\n        .bg {\n          background-image: url(\"assets/purcahsecoupon.jpg\");\n      \n          height: 100%;\n      \n          background-position: center;\n          background-repeat: no-repeat;\n          background-size: cover;\n        }\n      </style>\n      <body>\n        <div class=\"bg\">\n            <div let c of coupons>\n                <table>\n                    <tr>\n                        <td>\n                            id\n                        </td>\n                        \n                        <td>\n                            category\n                        </td>\n                        <td>\n                            title\n                        </td>\n                        <td>\n                            description\n                        </td>\n                        <td>\n                            start tDate\n                        </td>\n                        <td>\n                            end Date\n                        </td>\n                        <td>\n                            amount\n                        </td>\n                        <td>\n                            price\n                        </td>\n                        <td>\n                            image\n                        </td>\n                    </tr>\n                    <tr *ngFor=\"let c of coupons\">\n                        <td>{{c.id}}</td>\n                        <td> {{c.category}}</td>\n                        <td>{{c.title}}</td>\n                        <td>{{c.description}}</td>\n                        <td> {{c.startDate}}</td>\n                        <td>{{c.endDate}}</td>\n                        <td>{{c.amount}}</td>\n                        <td> {{c.price}}</td>\n                        <td> {{c.image}}</td>\n                        <td><button (click)=\"buyMe(c)\">BUY</button></td>\n                    </tr>\n            \n                   \n                </table>\n            \n            </div>\n            <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/customer\">back</a>\n             </div>\n      </body>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon/get-all-coupon.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon/get-all-coupon.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<style>\n    body,\n    html {\n            height: 100%;\n    }\n\n    .bg {\n            background-image: url(\"assets/company.jpeg\");\n\n            height: 100%;\n\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div let c of coupons>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n                    \n                    <td>\n                        category\n                    </td>\n                    <td>\n                        title\n                    </td>\n                    <td>\n                        description\n                    </td>\n                    <td>\n                        start tDate\n                    </td>\n                    <td>\n                        end Date\n                    </td>\n                    <td>\n                        amount\n                    </td>\n                    <td>\n                        price\n                    </td>\n                    <td>\n                        image\n                    </td>\n                </tr>\n                <tr *ngFor=\"let c of coupons\">\n                    <td>{{c.id}}</td>\n                    <td> {{c.category}}</td>\n                    <td>{{c.title}}</td>\n                    <td>{{c.description}}</td>\n                    <td> {{c.startDate}}</td>\n                    <td>{{c.endDate}}</td>\n                    <td>{{c.amount}}</td>\n                    <td> {{c.price}}</td>\n                    <td> {{c.image}}</td>\n                </tr>\n        \n               \n            </table>\n        \n        </div>\n        <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/company\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html": 
        /*!*********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html ***!
          \*********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div let p of customers>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n                    <td>\n                        first name\n                    </td>\n                    <td>\n                        last name\n                    </td>\n                    <td>\n                        email\n                    </td>\n\n                </tr>\n                <tr *ngFor=\"let p of customers\">\n                    <td>{{p.id}}</td>\n                    <td>{{p.firstName}}</td>\n                    <td>{{p.lastName}}</td>\n                    <td>{{p.email}}</td>\n\n                </tr>\n\n\n            </table>\n\n        </div>\n        <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<style>\n    body,\n    html {\n            height: 100%;\n    }\n\n    .bg {\n            background-image: url(\"assets/company.jpeg\");\n\n            height: 100%;\n\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n                    <td>\n                        name\n                    </td>\n                    <td>\n                        emil\n                    </td>\n                    <td>\n                        password\n                    </td>\n                </tr>\n        \n                <tr>\n                    <td>{{company.id}}</td>\n                    <td>{{company.name}}</td>\n                    <td>{{company.email}}</td>\n                    <td>{{company.password}}</td>\n        \n                </tr>\n        \n        \n            </table>\n        \n        </div>\n        <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/company\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-coupon-by-category/get-coupon-by-category.component.html": 
        /*!*******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-coupon-by-category/get-coupon-by-category.component.html ***!
          \*******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/company.jpeg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <select [(ngModel)]=\"category\">\n                <option>SURFBOARD</option>\n                <option>SHORTES</option>\n                <option>T_SHIRT</option>\n                <option>WAX</option>\n                <option>WETSUITE</option>\n                <option>OTHER</option>\n\n            </select>\n        </div>\n        <div>\n            <button (click)=\"getCouponbyCategory()\">get get Coupon by Category :)</button>\n\n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n\n                    <td>\n                        category\n                    </td>\n                    <td>\n                        title\n                    </td>\n                    <td>\n                        description\n                    </td>\n                    <td>\n                        start tDate\n                    </td>\n                    <td>\n                        end Date\n                    </td>\n                    <td>\n                        amount\n                    </td>\n                    <td>\n                        price\n                    </td>\n                    <td>\n                        image\n                    </td>\n                </tr>\n                <tr *ngFor=\"let coupon of coupons\">\n                    <td>{{coupon.id}}</td>\n                    <td>{{coupon.category}}</td>\n                    <td>{{coupon.title}}</td>\n                    <td>{{coupon.description}}</td>\n                    <td>{{coupon.startDate}}</td>\n                    <td>{{coupon.endDate}}</td>\n                    <td>{{coupon.amount}}</td>\n                    <td>{{coupon.price}}</td>\n                    <td>{{coupon.image}}</td>\n                </tr>\n\n\n            </table>\n\n        </div>\n        <br>\n        <br>\n        <br>\n\n        <a routerLink=\"/company\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.html": 
        /*!*********************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.html ***!
          \*********************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<style>\n    body,\n    html {\n            height: 100%;\n    }\n\n    .bg {\n            background-image: url(\"assets/company.jpeg\");\n\n            height: 100%;\n\n            background-position: center;\n            background-repeat: no-repeat;\n            background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <input type=\"number\" placeholder=\"press here max price\" value=\"maxPrice\" [(ngModel)]=\"maxPrice\">\n        </div>\n        <div>\n            <button (click)=\"getCouponbyMaxPrice()\">get get Coupon by max price :)</button>\n        \n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n        \n                    <td>\n                        category\n                    </td>\n                    <td>\n                        title\n                    </td>\n                    <td>\n                        description\n                    </td>\n                    <td>\n                        start tDate\n                    </td>\n                    <td>\n                        end Date\n                    </td>\n                    <td>\n                        amount\n                    </td>\n                    <td>\n                        price\n                    </td>\n                    <td>\n                        image\n                    </td>\n                </tr>\n                <tr *ngFor=\"let c of coupons\">\n                    <td>{{c.id}}</td>\n                    <td>{{c.category}}</td>\n                    <td>{{c.title}}</td>\n                    <td>{{c.description}}</td>\n                    <td>{{c.startDate}}</td>\n                    <td>{{c.endDate}}</td>\n                    <td>{{c.amount}}</td>\n                    <td>{{c.price}}</td>\n                    <td>{{c.image}}</td>\n                </tr>\n            </table>\n        \n        </div>\n        <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/company\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-details/get-customer-details.component.html": 
        /*!***************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-details/get-customer-details.component.html ***!
          \***************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/customer2.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        Id\n                    </td>\n                    <td>\n                        First Name\n                    </td>\n                    <td>\n                        Last Name\n                    </td>\n                    <td>\n                        Email\n                    </td>\n                    <td>\n                        Password\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>{{customer.id}}</td>\n                    <td>{{customer.firstName}}</td>\n                    <td>{{customer.lastName}}</td>\n                    <td>{{customer.email}}</td>\n                    <td>{{customer.password}}</td>\n\n                </tr>\n\n\n            </table>\n\n        </div>\n        <br>\n        <br>\n        <br>\n\n        <a routerLink=\"/customer\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n  \n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n  \n        height: 100%;\n  \n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n  </style>\n  \n  <body>\n    <div class=\"bg\">\n       \n        <div>\n            <h3> get one company</h3>\n            <input type=\"number\" placeholder=\"company id\" [(ngModel)]=\"company.id\">\n            <input type=\"button\" value=\"get it:)\" (click)=\"getOneCompamy()\">\n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n                    <td>\n                        name\n                    </td>\n                    <td>\n                        email\n                    </td>\n        \n                </tr>\n                <tr>\n                    <td>{{company.id}}</td>\n                    <td>{{company.name}}</td>\n                    <td> {{company.email}}</td>\n        \n                </tr>\n            </table>\n        </div>\n        <br > \n        <br > \n        <br >\n        \n        <a routerLink=\"/admin\">back</a>\n    </div>\n  </body>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div>\n            get one customer <br>\n            <input type=\"number\" placeholder=\"customer id\" [(ngModel)]=\"customer.id\">\n            <input type=\"button\" value=\"get it:)\" (click)=\"getOneCustomer()\">\n        </div>\n        <div>\n            <table>\n                <tr>\n                    <td>\n                        id\n                    </td>\n                    <td>\n                        first name\n                    </td>\n                    <td>\n                        last name\n                    </td>\n                    <td>\n                        email\n                    </td>\n        \n                </tr>\n                <tr>\n                    <td>{{customer.id}}</td>\n                    <td>{{customer.firstName}}</td>\n                    <td>{{customer.lastName}}</td>\n                    <td>{{customer.email}}</td>\n        \n                </tr>\n            </table>\n        </div>\n        <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body, html {\n      height: 100%;\n    }\n    .bg {\n      background-image: url(\"assets/headar.jpg\");\n \n      height: 100%;\n \n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n </style>\n <body>\n    <div class=\"bg\">\n        welcome to the surfing coupon website :) \n       </div>\n </body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n    body, html {\n      height: 100%;\n    }\n    .bg {\n      background-image: url(\"assets/home.jpg\");\n \n      height: 100%;\n \n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover;\n    }\n </style>\n <body>\n    <div class=\"bg\">\n       <span> welecome to the best surfing coupon website</span>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       <br>\n       \n       here you can find coupon to all the surfing details <br>\n       All the top companies in the world of surfing\n    </div>\n </body>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section>\n    <header>\n        <app-header> </app-header>\n    </header>\n    <nav>\n        <app-navigation></app-navigation>\n    </nav>\n    <main>\n        <router-outlet></router-outlet>\n    </main>\n    <footer>\n        <app-footer></app-footer>\n    </footer>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\n<input type=\"email\" placeholder=\"email\" [(ngModel)]=\"email\">\n<input type=\"password\" placeholder=\"password\"[(ngModel)]=\"password\">\n<select [(ngModel)]=\"type\">\n    <option>Admin</option>\n    <option>Company</option>\n    <option>Customer</option>\n</select>\n<button (click)=\"login()\">Login</button>\n</div> -->\n\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/footer.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n        <div>\n            <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"email\"> <br />\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\"> <br />\n            <select [(ngModel)]=\"type\">\n                <option>Admin</option>\n                <option>Company</option>\n                <option>Customer</option>\n            </select> <br />\n            <button (click)=\"login()\">Login</button>\n        </div>\n    </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n  body,\n  html {\n    height: 100%;\n  }\n\n  .bg {\n    background-image: url(\"assets/nav.jpg\");\n\n    height: 100%;\n\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n</style>\n\n<body>\n  <div class=\"bg\">\n    <br />\n    <button routerLink=\"home\">home</button>\n    <br />\n    <button routerLink=\"login\">Login</button>\n    <br />\n    <button routerLink=\"logout\">logout</button>\n    <br />\n  </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>purchase-coupon works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html": 
        /*!***************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html ***!
          \***************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<style>\n    body,\n    html {\n        height: 100%;\n    }\n  \n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n  \n        height: 100%;\n  \n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n  </style>\n  \n  <body>\n    <div class=\"bg\">\n        <div>\n            update company <br>\n       <input type=\"number\" placeholder=\"number\" [(ngModel)]=\"company.id\">\n           <input type=\"name\" placeholder=\"name\" [(ngModel)]=\"company.name\">\n           <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"company.email\">\n           <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"company.password\">\n           <button (click)=\"updateCompany()\">update it :)</button>\n           <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/admin\">back</a>\n       </div>\n       \n    </div>\n  </body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<style>\n        body,\n        html {\n                height: 100%;\n        }\n\n        .bg {\n                background-image: url(\"assets/company.jpeg\");\n\n                height: 100%;\n\n                background-position: center;\n                background-repeat: no-repeat;\n                background-size: cover;\n        }\n</style>\n\n<body>\n        <div class=\"bg\">\n                <div>\n                         Update Coupon<br />\n                        <input type=\"number\" placeholder=\"couponId\" [(ngModel)]=\"coupon.id\">\n\n\n                        <select [(ngModel)]=\"coupon.category\">\n                                <option>SURFBOARD</option>\n                                <option>SHORTES</option>\n                                <option>T_SHIRT</option>\n                                <option>WAX</option>\n                                <option>WETSUITE</option>\n                                <option>OTHER</option>\n                            </select>\n                        <input type=\"text\" placeholder=\"title\" [(ngModel)]=\"coupon.title\">\n                        <input type=\"text\" placeholder=\"description\" [(ngModel)]=\"coupon.description\">\n                        <input type=\"date\" placeholder=\"startDate\" [(ngModel)]=\"coupon.startDate\">\n                        <input type=\"date\" placeholder=\"endDate\" [(ngModel)]=\"coupon.endDate\">\n                        <input type=\"number\" placeholder=\"amount\" [(ngModel)]=\"coupon.amount\">\n                        <input type=\"number\" placeholder=\"price\" [(ngModel)]=\"coupon.price\">\n                        <input type=\"text\" placeholder=\"image\" [(ngModel)]=\"coupon.image\">\n                        <button (click)=\"updateCoupon()\">update it :)</button>\n                </div>\n                <br >\n            <br > \n            <br > \n \n            <a routerLink=\"/company\">back</a>\n        </div>\n</body>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html": 
        /*!*****************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html ***!
          \*****************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n    \n<style>\n    body,\n    html {\n        height: 100%;\n    }\n\n    .bg {\n        background-image: url(\"assets/admin.jpg\");\n\n        height: 100%;\n\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n</style>\n\n<body>\n    <div class=\"bg\">\n\n        <div>\n             update customer <br>\n        <input type=\"number\" placeholder=\"number\" [(ngModel)]=\"customer.id\">\n            <input type=\"firstName\" placeholder=\"firstName\" [(ngModel)]=\"customer.firstName\">\n            <input type=\"lastName\" placeholder=\"lastName\" [(ngModel)]=\"customer.lastName\">\n            <input type=\"email\" placeholder=\"email\" [(ngModel)]=\"customer.email\">\n            <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"customer.password\">\n            <button (click)=\"updateCustomer()\">update it :)</button>\n           \n        </div>\n        <br >\n        <br > \n        <br > \n\n        <a routerLink=\"/admin\">back</a>\n    </div>\n</body>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
            /* harmony import */ var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
            /* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
            /* harmony import */ var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/delete-company/delete-company.component */ "./src/app/components/delete-company/delete-company.component.ts");
            /* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
            /* harmony import */ var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/get-one-company/get-one-company.component */ "./src/app/components/get-one-company/get-one-company.component.ts");
            /* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
            /* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
            /* harmony import */ var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/delete-customer/delete-customer.component */ "./src/app/components/delete-customer/delete-customer.component.ts");
            /* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
            /* harmony import */ var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/get-one-customer/get-one-customer.component */ "./src/app/components/get-one-customer/get-one-customer.component.ts");
            /* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
            /* harmony import */ var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
            /* harmony import */ var _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/update-coupon/update-coupon.component */ "./src/app/components/update-coupon/update-coupon.component.ts");
            /* harmony import */ var _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/delete-coupon/delete-coupon.component */ "./src/app/components/delete-coupon/delete-coupon.component.ts");
            /* harmony import */ var _components_get_all_coupon_get_all_coupon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/get-all-coupon/get-all-coupon.component */ "./src/app/components/get-all-coupon/get-all-coupon.component.ts");
            /* harmony import */ var _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/get-company-details/get-company-details.component */ "./src/app/components/get-company-details/get-company-details.component.ts");
            /* harmony import */ var _components_get_coupon_by_category_get_coupon_by_category_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/get-coupon-by-category/get-coupon-by-category.component */ "./src/app/components/get-coupon-by-category/get-coupon-by-category.component.ts");
            /* harmony import */ var _components_get_coupon_by_max_price_get_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/get-coupon-by-max-price/get-coupon-by-max-price.component */ "./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_get_all_coupon_for_customer_get_all_coupon_for_customer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/get-all-coupon-for-customer/get-all-coupon-for-customer.component */ "./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.ts");
            /* harmony import */ var _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/get-customer-details/get-customer-details.component */ "./src/app/components/get-customer-details/get-customer-details.component.ts");
            /* harmony import */ var _components_get_all_coupon_for_customer_by_category_get_all_coupon_for_customer_by_category_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component */ "./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.ts");
            /* harmony import */ var _components_get_all_coupon_for_customer_by_max_price_get_all_coupon_for_customer_by_max_price_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component */ "./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.ts");
            /* harmony import */ var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
            /* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
            /* harmony import */ var _components_get_all_coupon_to_buy_customer_get_all_coupon_to_buy_customer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component */ "./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.ts");
            /* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
            var routes = [
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
                { path: "logout", component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_31__["LogoutComponent"] },
                { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"] },
                { path: "admin", component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
                { path: "customer", component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_29__["CustomerComponent"] },
                { path: "add-company", component: _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_5__["AddCompanyComponent"] },
                { path: "update-company", component: _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_6__["UpdateCompanyComponent"] },
                { path: "delete-company", component: _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_7__["DeleteCompanyComponent"] },
                { path: "get-all-companies", component: _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_8__["GetAllCompaniesComponent"] },
                { path: "get-one-company", component: _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_9__["GetOneCompanyComponent"] },
                { path: "add-customer", component: _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_10__["AddCustomerComponent"] },
                { path: "update-customer", component: _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_11__["UpdateCustomerComponent"] },
                { path: "delete-customer", component: _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_12__["DeleteCustomerComponent"] },
                { path: "get-all-customers", component: _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_13__["GetAllCustomersComponent"] },
                { path: "get-one-customer", component: _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_14__["GetOneCustomerComponent"] },
                { path: "company", component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_15__["CompanyComponent"] },
                { path: "add-coupon", component: _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_16__["AddCouponComponent"] },
                { path: "update-coupon", component: _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_17__["UpdateCouponComponent"] },
                { path: "delete-coupon", component: _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_18__["DeleteCouponComponent"] },
                { path: "get-all-coupon", component: _components_get_all_coupon_get_all_coupon_component__WEBPACK_IMPORTED_MODULE_19__["GetAllCouponComponent"] },
                { path: "get-company-details", component: _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_20__["GetCompanyDetailsComponent"] },
                { path: "get-coupon-by-category", component: _components_get_coupon_by_category_get_coupon_by_category_component__WEBPACK_IMPORTED_MODULE_21__["GetCouponByCategoryComponent"] },
                { path: "get-coupon-by-max-price", component: _components_get_coupon_by_max_price_get_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_22__["GetCouponByMaxPriceComponent"] },
                { path: "purchase-coupon", component: _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_28__["PurchaseCouponComponent"] },
                { path: "get-all-coupon-for-customer", component: _components_get_all_coupon_for_customer_get_all_coupon_for_customer_component__WEBPACK_IMPORTED_MODULE_24__["GetAllCouponForCustomerComponent"] },
                { path: "get-customer-details", component: _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_25__["GetCustomerDetailsComponent"] },
                { path: "get-all-coupon-for-customer-by-category", component: _components_get_all_coupon_for_customer_by_category_get_all_coupon_for_customer_by_category_component__WEBPACK_IMPORTED_MODULE_26__["GetAllCouponForCustomerByCategoryComponent"] },
                { path: "get-all-coupon-for-customer-by-max-price", component: _components_get_all_coupon_for_customer_by_max_price_get_all_coupon_for_customer_by_max_price_component__WEBPACK_IMPORTED_MODULE_27__["GetAllCouponForCustomerByMaxPriceComponent"] },
                { path: "get-all-coupon-to-buy-customer", component: _components_get_all_coupon_to_buy_customer_get_all_coupon_to_buy_customer_component__WEBPACK_IMPORTED_MODULE_30__["GetAllCouponToBuyCustomerComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
            /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
            /* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
            /* harmony import */ var _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-company/add-company.component */ "./src/app/components/add-company/add-company.component.ts");
            /* harmony import */ var _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/update-company/update-company.component */ "./src/app/components/update-company/update-company.component.ts");
            /* harmony import */ var _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/delete-company/delete-company.component */ "./src/app/components/delete-company/delete-company.component.ts");
            /* harmony import */ var _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/get-all-companies/get-all-companies.component */ "./src/app/components/get-all-companies/get-all-companies.component.ts");
            /* harmony import */ var _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/get-one-company/get-one-company.component */ "./src/app/components/get-one-company/get-one-company.component.ts");
            /* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-customer/add-customer.component */ "./src/app/components/add-customer/add-customer.component.ts");
            /* harmony import */ var _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/update-customer/update-customer.component */ "./src/app/components/update-customer/update-customer.component.ts");
            /* harmony import */ var _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/delete-customer/delete-customer.component */ "./src/app/components/delete-customer/delete-customer.component.ts");
            /* harmony import */ var _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/get-all-customers/get-all-customers.component */ "./src/app/components/get-all-customers/get-all-customers.component.ts");
            /* harmony import */ var _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/get-one-customer/get-one-customer.component */ "./src/app/components/get-one-customer/get-one-customer.component.ts");
            /* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
            /* harmony import */ var _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-coupon/add-coupon.component */ "./src/app/components/add-coupon/add-coupon.component.ts");
            /* harmony import */ var _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/update-coupon/update-coupon.component */ "./src/app/components/update-coupon/update-coupon.component.ts");
            /* harmony import */ var _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/delete-coupon/delete-coupon.component */ "./src/app/components/delete-coupon/delete-coupon.component.ts");
            /* harmony import */ var _components_get_all_coupon_get_all_coupon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/get-all-coupon/get-all-coupon.component */ "./src/app/components/get-all-coupon/get-all-coupon.component.ts");
            /* harmony import */ var _components_get_coupon_by_category_get_coupon_by_category_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/get-coupon-by-category/get-coupon-by-category.component */ "./src/app/components/get-coupon-by-category/get-coupon-by-category.component.ts");
            /* harmony import */ var _components_get_coupon_by_max_price_get_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/get-coupon-by-max-price/get-coupon-by-max-price.component */ "./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.ts");
            /* harmony import */ var _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/get-company-details/get-company-details.component */ "./src/app/components/get-company-details/get-company-details.component.ts");
            /* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
            /* harmony import */ var _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/purchase-coupon/purchase-coupon.component */ "./src/app/components/purchase-coupon/purchase-coupon.component.ts");
            /* harmony import */ var _components_get_all_coupon_for_customer_get_all_coupon_for_customer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/get-all-coupon-for-customer/get-all-coupon-for-customer.component */ "./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.ts");
            /* harmony import */ var _components_get_all_coupon_for_customer_by_category_get_all_coupon_for_customer_by_category_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component */ "./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.ts");
            /* harmony import */ var _components_get_all_coupon_for_customer_by_max_price_get_all_coupon_for_customer_by_max_price_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component */ "./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.ts");
            /* harmony import */ var _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/get-customer-details/get-customer-details.component */ "./src/app/components/get-customer-details/get-customer-details.component.ts");
            /* harmony import */ var _components_get_all_coupon_to_buy_customer_get_all_coupon_to_buy_customer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component */ "./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.ts");
            /* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                        _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                        _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                        _components_add_company_add_company_component__WEBPACK_IMPORTED_MODULE_13__["AddCompanyComponent"],
                        _components_update_company_update_company_component__WEBPACK_IMPORTED_MODULE_14__["UpdateCompanyComponent"],
                        _components_delete_company_delete_company_component__WEBPACK_IMPORTED_MODULE_15__["DeleteCompanyComponent"],
                        _components_get_all_companies_get_all_companies_component__WEBPACK_IMPORTED_MODULE_16__["GetAllCompaniesComponent"],
                        _components_get_one_company_get_one_company_component__WEBPACK_IMPORTED_MODULE_17__["GetOneCompanyComponent"],
                        _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_18__["AddCustomerComponent"],
                        _components_update_customer_update_customer_component__WEBPACK_IMPORTED_MODULE_19__["UpdateCustomerComponent"],
                        _components_delete_customer_delete_customer_component__WEBPACK_IMPORTED_MODULE_20__["DeleteCustomerComponent"],
                        _components_get_all_customers_get_all_customers_component__WEBPACK_IMPORTED_MODULE_21__["GetAllCustomersComponent"],
                        _components_get_one_customer_get_one_customer_component__WEBPACK_IMPORTED_MODULE_22__["GetOneCustomerComponent"],
                        _components_company_company_component__WEBPACK_IMPORTED_MODULE_23__["CompanyComponent"],
                        _components_add_coupon_add_coupon_component__WEBPACK_IMPORTED_MODULE_24__["AddCouponComponent"],
                        _components_update_coupon_update_coupon_component__WEBPACK_IMPORTED_MODULE_25__["UpdateCouponComponent"],
                        _components_delete_coupon_delete_coupon_component__WEBPACK_IMPORTED_MODULE_26__["DeleteCouponComponent"],
                        _components_get_all_coupon_get_all_coupon_component__WEBPACK_IMPORTED_MODULE_27__["GetAllCouponComponent"],
                        _components_get_coupon_by_category_get_coupon_by_category_component__WEBPACK_IMPORTED_MODULE_28__["GetCouponByCategoryComponent"],
                        _components_get_coupon_by_max_price_get_coupon_by_max_price_component__WEBPACK_IMPORTED_MODULE_29__["GetCouponByMaxPriceComponent"],
                        _components_get_company_details_get_company_details_component__WEBPACK_IMPORTED_MODULE_30__["GetCompanyDetailsComponent"],
                        _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_31__["CustomerComponent"],
                        _components_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_32__["PurchaseCouponComponent"],
                        _components_get_all_coupon_for_customer_get_all_coupon_for_customer_component__WEBPACK_IMPORTED_MODULE_33__["GetAllCouponForCustomerComponent"],
                        _components_get_all_coupon_for_customer_by_category_get_all_coupon_for_customer_by_category_component__WEBPACK_IMPORTED_MODULE_34__["GetAllCouponForCustomerByCategoryComponent"],
                        _components_get_all_coupon_for_customer_by_max_price_get_all_coupon_for_customer_by_max_price_component__WEBPACK_IMPORTED_MODULE_35__["GetAllCouponForCustomerByMaxPriceComponent"],
                        _components_get_customer_details_get_customer_details_component__WEBPACK_IMPORTED_MODULE_36__["GetCustomerDetailsComponent"],
                        _components_get_all_coupon_to_buy_customer_get_all_coupon_to_buy_customer_component__WEBPACK_IMPORTED_MODULE_37__["GetAllCouponToBuyCustomerComponent"],
                        _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_38__["LogoutComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                    ],
                    providers: [],
                    bootstrap: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/add-company/add-company.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/add-company/add-company.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-size: x-large;\r\n}\r\na{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY29tcGFueS9hZGQtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWNvbXBhbnkvYWRkLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/add-company/add-company.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/add-company/add-company.component.ts ***!
          \*****************************************************************/
        /*! exports provided: AddCompanyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyComponent", function () { return AddCompanyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddCompanyComponent = /** @class */ (function () {
                function AddCompanyComponent(myAdminService, router) {
                    this.myAdminService = myAdminService;
                    this.router = router;
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
                }
                AddCompanyComponent.prototype.ngOnInit = function () {
                };
                AddCompanyComponent.prototype.addCompany = function () {
                    var _this = this;
                    this.myAdminService.addNewCompany(this.company).subscribe(function (Response) {
                        alert("company is added with id:" + Response.id), _this.router.navigate(['admin']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['admin']);
                    });
                };
                return AddCompanyComponent;
            }());
            AddCompanyComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AddCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-company/add-company.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-company.component.css */ "./src/app/components/add-company/add-company.component.css")).default]
                })
            ], AddCompanyComponent);
            /***/ 
        }),
        /***/ "./src/app/components/add-coupon/add-coupon.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/add-coupon/add-coupon.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY291cG9uL2FkZC1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jb3Vwb24vYWRkLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/add-coupon/add-coupon.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/add-coupon/add-coupon.component.ts ***!
          \***************************************************************/
        /*! exports provided: AddCouponComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCouponComponent", function () { return AddCouponComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddCouponComponent = /** @class */ (function () {
                function AddCouponComponent(myCompanyService, router) {
                    this.myCompanyService = myCompanyService;
                    this.router = router;
                    this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
                }
                AddCouponComponent.prototype.ngOnInit = function () {
                };
                AddCouponComponent.prototype.addCoupon = function () {
                    var _this = this;
                    this.myCompanyService.addNewCoupon(this.coupon).subscribe(function (Response) {
                        alert("coupon is added with id:" + Response.id), _this.router.navigate(['company']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['company']);
                    });
                };
                return AddCouponComponent;
            }());
            AddCouponComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AddCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-coupon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-coupon/add-coupon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-coupon.component.css */ "./src/app/components/add-coupon/add-coupon.component.css")).default]
                })
            ], AddCouponComponent);
            /***/ 
        }),
        /***/ "./src/app/components/add-customer/add-customer.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/add-customer/add-customer.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-size: x-large;\r\n}\r\na{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1jdXN0b21lci9hZGQtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/add-customer/add-customer.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/add-customer/add-customer.component.ts ***!
          \*******************************************************************/
        /*! exports provided: AddCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function () { return AddCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddCustomerComponent = /** @class */ (function () {
                function AddCustomerComponent(myAdminService, router) {
                    this.myAdminService = myAdminService;
                    this.router = router;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                }
                AddCustomerComponent.prototype.ngOnInit = function () {
                };
                AddCustomerComponent.prototype.addCustomer = function () {
                    var _this = this;
                    this.myAdminService.addNewCustomer(this.customer).subscribe(function (Response) {
                        alert("customer is added with id:" + Response.id), _this.router.navigate(['admin']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['admin']);
                    });
                };
                return AddCustomerComponent;
            }());
            AddCustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-customer/add-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-customer.component.css */ "./src/app/components/add-customer/add-customer.component.css")).default]
                })
            ], AddCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin/admin.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/admin/admin.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\ndiv{\r\n\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuZGl2e1xyXG5cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/admin/admin.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/admin/admin.component.ts ***!
          \*****************************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent() {
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                return AdminComponent;
            }());
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/components/company/company.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/company/company.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n   \r\n    color: black;\r\n}\r\ndiv{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgXHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/company/company.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/company/company.component.ts ***!
          \*********************************************************/
        /*! exports provided: CompanyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () { return CompanyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CompanyComponent = /** @class */ (function () {
                function CompanyComponent() {
                }
                CompanyComponent.prototype.ngOnInit = function () {
                };
                return CompanyComponent;
            }());
            CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/company/company.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")).default]
                })
            ], CompanyComponent);
            /***/ 
        }),
        /***/ "./src/app/components/customer/customer.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/customer/customer.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    text-align: center;\r\n}\r\na{\r\n    color:black;\r\n    font-size: 16pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5he1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/customer/customer.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/customer/customer.component.ts ***!
          \***********************************************************/
        /*! exports provided: CustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () { return CustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CustomerComponent = /** @class */ (function () {
                function CustomerComponent() {
                }
                CustomerComponent.prototype.ngOnInit = function () {
                };
                return CustomerComponent;
            }());
            CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/customer/customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")).default]
                })
            ], CustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/delete-company/delete-company.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/delete-company/delete-company.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\nfont-size: x-large;\r\ntext-align: center;\r\n}\r\na{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY29tcGFueS9kZWxldGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1jb21wYW55L2RlbGV0ZS1jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbmZvbnQtc2l6ZTogeC1sYXJnZTtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/delete-company/delete-company.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/delete-company/delete-company.component.ts ***!
          \***********************************************************************/
        /*! exports provided: DeleteCompanyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCompanyComponent", function () { return DeleteCompanyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DeleteCompanyComponent = /** @class */ (function () {
                function DeleteCompanyComponent(myAdminService, router) {
                    this.myAdminService = myAdminService;
                    this.router = router;
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
                }
                DeleteCompanyComponent.prototype.ngOnInit = function () {
                };
                DeleteCompanyComponent.prototype.deleteCompany = function () {
                    var _this = this;
                    this.myAdminService.deleteCompany(this.company.id).subscribe(function (Response) {
                        alert("company delete"), _this.router.navigate(['admin']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['admin']);
                    });
                };
                return DeleteCompanyComponent;
            }());
            DeleteCompanyComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            DeleteCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-delete-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-company/delete-company.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-company.component.css */ "./src/app/components/delete-company/delete-company.component.css")).default]
                })
            ], DeleteCompanyComponent);
            /***/ 
        }),
        /***/ "./src/app/components/delete-coupon/delete-coupon.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/delete-coupon/delete-coupon.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY291cG9uL2RlbGV0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1jb3Vwb24vZGVsZXRlLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/delete-coupon/delete-coupon.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/delete-coupon/delete-coupon.component.ts ***!
          \*********************************************************************/
        /*! exports provided: DeleteCouponComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCouponComponent", function () { return DeleteCouponComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DeleteCouponComponent = /** @class */ (function () {
                function DeleteCouponComponent(MyCompanyService, router) {
                    this.MyCompanyService = MyCompanyService;
                    this.router = router;
                    this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
                }
                DeleteCouponComponent.prototype.ngOnInit = function () {
                };
                DeleteCouponComponent.prototype.deleteCoupon = function () {
                    var _this = this;
                    this.MyCompanyService.deleteCoupon(this.coupon.id).subscribe(function (Response) {
                        alert("coupon was deleted"), _this.router.navigate(['company']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['company']);
                    });
                };
                return DeleteCouponComponent;
            }());
            DeleteCouponComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            DeleteCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-delete-coupon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-coupon/delete-coupon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-coupon.component.css */ "./src/app/components/delete-coupon/delete-coupon.component.css")).default]
                })
            ], DeleteCouponComponent);
            /***/ 
        }),
        /***/ "./src/app/components/delete-customer/delete-customer.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/delete-customer/delete-customer.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-size: x-large;\r\n}\r\na{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWxldGUtY3VzdG9tZXIvZGVsZXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlbGV0ZS1jdXN0b21lci9kZWxldGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/delete-customer/delete-customer.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/delete-customer/delete-customer.component.ts ***!
          \*************************************************************************/
        /*! exports provided: DeleteCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCustomerComponent", function () { return DeleteCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DeleteCustomerComponent = /** @class */ (function () {
                function DeleteCustomerComponent(myAdminService, router) {
                    this.myAdminService = myAdminService;
                    this.router = router;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_3__["Customer"]();
                }
                DeleteCustomerComponent.prototype.ngOnInit = function () {
                };
                DeleteCustomerComponent.prototype.deleteCustomer = function () {
                    var _this = this;
                    this.myAdminService.deleteCustomer(this.customer.id).subscribe(function (Response) {
                        alert("the delete is sucsess !!!"), _this.router.navigate(['admin']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['admin']);
                    });
                };
                ;
                return DeleteCustomerComponent;
            }());
            DeleteCustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            DeleteCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-delete-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/delete-customer/delete-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-customer.component.css */ "./src/app/components/delete-customer/delete-customer.component.css")).default]
                })
            ], DeleteCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/footer/footer.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    text-align: center;\r\n    font-style: oblique;\r\n    font-size: x-large;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7QUFFdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/footer/footer.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/footer/footer.component.ts ***!
          \*******************************************************/
        /*! exports provided: FooterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function () { return FooterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FooterComponent = /** @class */ (function () {
                function FooterComponent() {
                }
                FooterComponent.prototype.ngOnInit = function () {
                };
                return FooterComponent;
            }());
            FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-footer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
                })
            ], FooterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-companies/get-all-companies.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/get-all-companies/get-all-companies.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvbXBhbmllcy9nZXQtYWxsLWNvbXBhbmllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1hbGwtY29tcGFuaWVzL2dldC1hbGwtY29tcGFuaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-companies/get-all-companies.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/get-all-companies/get-all-companies.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: GetAllCompaniesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCompaniesComponent", function () { return GetAllCompaniesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            var GetAllCompaniesComponent = /** @class */ (function () {
                function GetAllCompaniesComponent(myAdminService) {
                    this.myAdminService = myAdminService;
                    this.companies = new Array();
                }
                GetAllCompaniesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myAdminService.getAllCompanies().subscribe(function (companies) {
                        _this.companies = companies;
                        console.log(companies);
                    });
                };
                return GetAllCompaniesComponent;
            }());
            GetAllCompaniesComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
            ]; };
            GetAllCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-companies',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-companies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-companies/get-all-companies.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-companies.component.css */ "./src/app/components/get-all-companies/get-all-companies.component.css")).default]
                })
            ], GetAllCompaniesComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.css": 
        /*!**************************************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.css ***!
          \**************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbi1mb3ItY3VzdG9tZXItYnktY2F0ZWdvcnkvZ2V0LWFsbC1jb3Vwb24tZm9yLWN1c3RvbWVyLWJ5LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jb3Vwb24tZm9yLWN1c3RvbWVyLWJ5LWNhdGVnb3J5L2dldC1hbGwtY291cG9uLWZvci1jdXN0b21lci1ieS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.ts": 
        /*!*************************************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.ts ***!
          \*************************************************************************************************************************/
        /*! exports provided: GetAllCouponForCustomerByCategoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponForCustomerByCategoryComponent", function () { return GetAllCouponForCustomerByCategoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            var GetAllCouponForCustomerByCategoryComponent = /** @class */ (function () {
                function GetAllCouponForCustomerByCategoryComponent(myCustomerService) {
                    this.myCustomerService = myCustomerService;
                    this.coupons = new Array();
                }
                GetAllCouponForCustomerByCategoryComponent.prototype.ngOnInit = function () {
                };
                GetAllCouponForCustomerByCategoryComponent.prototype.getCouponbyCategory = function () {
                    var _this = this;
                    this.myCustomerService.getAllCouponForCustomerByCategory(this.category).subscribe(function (coupons) {
                        _this.coupons = coupons;
                    });
                };
                return GetAllCouponForCustomerByCategoryComponent;
            }());
            GetAllCouponForCustomerByCategoryComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
            ]; };
            GetAllCouponForCustomerByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-coupon-for-customer-by-category',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupon-for-customer-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupon-for-customer-by-category.component.css */ "./src/app/components/get-all-coupon-for-customer-by-category/get-all-coupon-for-customer-by-category.component.css")).default]
                })
            ], GetAllCouponForCustomerByCategoryComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.css": 
        /*!****************************************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.css ***!
          \****************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbi1mb3ItY3VzdG9tZXItYnktbWF4LXByaWNlL2dldC1hbGwtY291cG9uLWZvci1jdXN0b21lci1ieS1tYXgtcHJpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbi1mb3ItY3VzdG9tZXItYnktbWF4LXByaWNlL2dldC1hbGwtY291cG9uLWZvci1jdXN0b21lci1ieS1tYXgtcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.ts": 
        /*!***************************************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.ts ***!
          \***************************************************************************************************************************/
        /*! exports provided: GetAllCouponForCustomerByMaxPriceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponForCustomerByMaxPriceComponent", function () { return GetAllCouponForCustomerByMaxPriceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            var GetAllCouponForCustomerByMaxPriceComponent = /** @class */ (function () {
                function GetAllCouponForCustomerByMaxPriceComponent(myCustomerService) {
                    this.myCustomerService = myCustomerService;
                    this.coupons = new Array();
                }
                GetAllCouponForCustomerByMaxPriceComponent.prototype.ngOnInit = function () {
                };
                GetAllCouponForCustomerByMaxPriceComponent.prototype.getCouponsbyMaxPrice = function () {
                    var _this = this;
                    this.myCustomerService.getAllCouponForCustomerByMaxPrice(this.maxPrice).subscribe(function (coupons) {
                        _this.coupons = coupons;
                        console.log(coupons);
                    });
                };
                return GetAllCouponForCustomerByMaxPriceComponent;
            }());
            GetAllCouponForCustomerByMaxPriceComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
            ]; };
            GetAllCouponForCustomerByMaxPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-coupon-for-customer-by-max-price',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupon-for-customer-by-max-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupon-for-customer-by-max-price.component.css */ "./src/app/components/get-all-coupon-for-customer-by-max-price/get-all-coupon-for-customer-by-max-price.component.css")).default]
                })
            ], GetAllCouponForCustomerByMaxPriceComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.css": 
        /*!**************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.css ***!
          \**************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbi1mb3ItY3VzdG9tZXIvZ2V0LWFsbC1jb3Vwb24tZm9yLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jb3Vwb24tZm9yLWN1c3RvbWVyL2dldC1hbGwtY291cG9uLWZvci1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.ts": 
        /*!*************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.ts ***!
          \*************************************************************************************************/
        /*! exports provided: GetAllCouponForCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponForCustomerComponent", function () { return GetAllCouponForCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            var GetAllCouponForCustomerComponent = /** @class */ (function () {
                function GetAllCouponForCustomerComponent(MyCustomerService) {
                    this.MyCustomerService = MyCustomerService;
                    this.coupons = new Array();
                }
                GetAllCouponForCustomerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.MyCustomerService.getAllCouponForCustomer().subscribe(function (coupons) {
                        _this.coupons = coupons;
                        console.log(coupons);
                    });
                };
                return GetAllCouponForCustomerComponent;
            }());
            GetAllCouponForCustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] }
            ]; };
            GetAllCouponForCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-coupon-for-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupon-for-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupon-for-customer.component.css */ "./src/app/components/get-all-coupon-for-customer/get-all-coupon-for-customer.component.css")).default]
                })
            ], GetAllCouponForCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.css": 
        /*!********************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.css ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("table,tr{\r\n    display: block;\r\n    border  : solid black ,1px;\r\n}\r\na{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbi10by1idXktY3VzdG9tZXIvZ2V0LWFsbC1jb3Vwb24tdG8tYnV5LWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jb3Vwb24tdG8tYnV5LWN1c3RvbWVyL2dldC1hbGwtY291cG9uLXRvLWJ1eS1jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsdHJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlciAgOiBzb2xpZCBibGFjayAsMXB4O1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIwcHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.ts": 
        /*!*******************************************************************************************************!*\
          !*** ./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.ts ***!
          \*******************************************************************************************************/
        /*! exports provided: GetAllCouponToBuyCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponToBuyCustomerComponent", function () { return GetAllCouponToBuyCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var GetAllCouponToBuyCustomerComponent = /** @class */ (function () {
                function GetAllCouponToBuyCustomerComponent(myCustomerService, router) {
                    this.myCustomerService = myCustomerService;
                    this.router = router;
                    this.coupons = new Array();
                }
                GetAllCouponToBuyCustomerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myCustomerService.GetAllCouponToBuyCustomer().subscribe(function (coupons) {
                        _this.coupons = coupons;
                        console.log(coupons);
                    });
                };
                GetAllCouponToBuyCustomerComponent.prototype.buyMe = function (coupon) {
                    var _this = this;
                    this.myCustomerService.purchaseCoupon(coupon).subscribe(function (coup) {
                        alert("thank you!!!! ,you purchase coupon with coupon id:" + coup.id), _this.router.navigate(['customer']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['customer']);
                    });
                };
                return GetAllCouponToBuyCustomerComponent;
            }());
            GetAllCouponToBuyCustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            GetAllCouponToBuyCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-coupon-to-buy-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupon-to-buy-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupon-to-buy-customer.component.css */ "./src/app/components/get-all-coupon-to-buy-customer/get-all-coupon-to-buy-customer.component.css")).default]
                })
            ], GetAllCouponToBuyCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon/get-all-coupon.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/get-all-coupon/get-all-coupon.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWNvdXBvbi9nZXQtYWxsLWNvdXBvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jb3Vwb24vZ2V0LWFsbC1jb3Vwb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-coupon/get-all-coupon.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/get-all-coupon/get-all-coupon.component.ts ***!
          \***********************************************************************/
        /*! exports provided: GetAllCouponComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCouponComponent", function () { return GetAllCouponComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            var GetAllCouponComponent = /** @class */ (function () {
                function GetAllCouponComponent(MycompanyService) {
                    this.MycompanyService = MycompanyService;
                    this.coupons = new Array();
                }
                GetAllCouponComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.MycompanyService.getAllCouponForCompany().subscribe(function (coupons) {
                        _this.coupons = coupons;
                        console.log(coupons);
                    });
                };
                return GetAllCouponComponent;
            }());
            GetAllCouponComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
            ]; };
            GetAllCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-coupon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-coupon/get-all-coupon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-coupon.component.css */ "./src/app/components/get-all-coupon/get-all-coupon.component.css")).default]
                })
            ], GetAllCouponComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-all-customers/get-all-customers.component.css": 
        /*!******************************************************************************!*\
          !*** ./src/app/components/get-all-customers/get-all-customers.component.css ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtYWxsLWN1c3RvbWVycy9nZXQtYWxsLWN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWFsbC1jdXN0b21lcnMvZ2V0LWFsbC1jdXN0b21lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/get-all-customers/get-all-customers.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/components/get-all-customers/get-all-customers.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: GetAllCustomersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllCustomersComponent", function () { return GetAllCustomersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            var GetAllCustomersComponent = /** @class */ (function () {
                function GetAllCustomersComponent(myAdminService) {
                    this.myAdminService = myAdminService;
                    this.customers = new Array();
                }
                GetAllCustomersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myAdminService.getAllCustomers().subscribe(function (customers) {
                        _this.customers = customers;
                        console.log(customers);
                    });
                };
                return GetAllCustomersComponent;
            }());
            GetAllCustomersComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
            ]; };
            GetAllCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-all-customers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-all-customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-all-customers/get-all-customers.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-all-customers.component.css */ "./src/app/components/get-all-customers/get-all-customers.component.css")).default]
                })
            ], GetAllCustomersComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-company-details/get-company-details.component.css": 
        /*!**********************************************************************************!*\
          !*** ./src/app/components/get-company-details/get-company-details.component.css ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1kZXRhaWxzL2dldC1jb21wYW55LWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1jb21wYW55LWRldGFpbHMvZ2V0LWNvbXBhbnktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/get-company-details/get-company-details.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/get-company-details/get-company-details.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: GetCompanyDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyDetailsComponent", function () { return GetCompanyDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            var GetCompanyDetailsComponent = /** @class */ (function () {
                function GetCompanyDetailsComponent(myCompanyService) {
                    this.myCompanyService = myCompanyService;
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
                }
                GetCompanyDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myCompanyService.getCompanyDetails().subscribe(function (Response) {
                        _this.company = Response;
                    });
                };
                return GetCompanyDetailsComponent;
            }());
            GetCompanyDetailsComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }
            ]; };
            GetCompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-company-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-company-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-company-details/get-company-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-company-details.component.css */ "./src/app/components/get-company-details/get-company-details.component.css")).default]
                })
            ], GetCompanyDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-coupon-by-category/get-coupon-by-category.component.css": 
        /*!****************************************************************************************!*\
          !*** ./src/app/components/get-coupon-by-category/get-coupon-by-category.component.css ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY291cG9uLWJ5LWNhdGVnb3J5L2dldC1jb3Vwb24tYnktY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1jb3Vwb24tYnktY2F0ZWdvcnkvZ2V0LWNvdXBvbi1ieS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/get-coupon-by-category/get-coupon-by-category.component.ts": 
        /*!***************************************************************************************!*\
          !*** ./src/app/components/get-coupon-by-category/get-coupon-by-category.component.ts ***!
          \***************************************************************************************/
        /*! exports provided: GetCouponByCategoryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponByCategoryComponent", function () { return GetCouponByCategoryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            var GetCouponByCategoryComponent = /** @class */ (function () {
                function GetCouponByCategoryComponent(myCompanySrvice) {
                    this.myCompanySrvice = myCompanySrvice;
                    this.coupons = new Array();
                }
                GetCouponByCategoryComponent.prototype.ngOnInit = function () {
                };
                GetCouponByCategoryComponent.prototype.getCouponbyCategory = function () {
                    var _this = this;
                    this.myCompanySrvice.getAllCouponForCompanyByCategory(this.category).subscribe(function (coupons) {
                        _this.coupons = coupons;
                    });
                };
                return GetCouponByCategoryComponent;
            }());
            GetCouponByCategoryComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
            ]; };
            GetCouponByCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-coupon-by-category',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-coupon-by-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-coupon-by-category/get-coupon-by-category.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-coupon-by-category.component.css */ "./src/app/components/get-coupon-by-category/get-coupon-by-category.component.css")).default]
                })
            ], GetCouponByCategoryComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.css": 
        /*!******************************************************************************************!*\
          !*** ./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.css ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY291cG9uLWJ5LW1heC1wcmljZS9nZXQtY291cG9uLWJ5LW1heC1wcmljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LWNvdXBvbi1ieS1tYXgtcHJpY2UvZ2V0LWNvdXBvbi1ieS1tYXgtcHJpY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.ts": 
        /*!*****************************************************************************************!*\
          !*** ./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.ts ***!
          \*****************************************************************************************/
        /*! exports provided: GetCouponByMaxPriceComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCouponByMaxPriceComponent", function () { return GetCouponByMaxPriceComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            var GetCouponByMaxPriceComponent = /** @class */ (function () {
                function GetCouponByMaxPriceComponent(myCompanySrvice) {
                    this.myCompanySrvice = myCompanySrvice;
                    this.coupons = new Array();
                }
                GetCouponByMaxPriceComponent.prototype.ngOnInit = function () {
                };
                GetCouponByMaxPriceComponent.prototype.getCouponbyMaxPrice = function () {
                    var _this = this;
                    this.myCompanySrvice.getAllCouponForCompanyByMaxPrice(this.maxPrice).subscribe(function (coupons) {
                        _this.coupons = coupons;
                        console.log(coupons);
                    });
                };
                return GetCouponByMaxPriceComponent;
            }());
            GetCouponByMaxPriceComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }
            ]; };
            GetCouponByMaxPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-coupon-by-max-price',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-coupon-by-max-price.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-coupon-by-max-price.component.css */ "./src/app/components/get-coupon-by-max-price/get-coupon-by-max-price.component.css")).default]
                })
            ], GetCouponByMaxPriceComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-customer-details/get-customer-details.component.css": 
        /*!************************************************************************************!*\
          !*** ./src/app/components/get-customer-details/get-customer-details.component.css ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY3VzdG9tZXItZGV0YWlscy9nZXQtY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1jdXN0b21lci1kZXRhaWxzL2dldC1jdXN0b21lci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/get-customer-details/get-customer-details.component.ts": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/get-customer-details/get-customer-details.component.ts ***!
          \***********************************************************************************/
        /*! exports provided: GetCustomerDetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCustomerDetailsComponent", function () { return GetCustomerDetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
            var GetCustomerDetailsComponent = /** @class */ (function () {
                function GetCustomerDetailsComponent(myCustomerService) {
                    this.myCustomerService = myCustomerService;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                }
                GetCustomerDetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.myCustomerService.getCustomerDetails().subscribe(function (Response) {
                        _this.customer = Response;
                    });
                };
                return GetCustomerDetailsComponent;
            }());
            GetCustomerDetailsComponent.ctorParameters = function () { return [
                { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] }
            ]; };
            GetCustomerDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-customer-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-customer-details/get-customer-details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-customer-details.component.css */ "./src/app/components/get-customer-details/get-customer-details.component.css")).default]
                })
            ], GetCustomerDetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-one-company/get-one-company.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/get-one-company/get-one-company.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWNvbXBhbnkvZ2V0LW9uZS1jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LW9uZS1jb21wYW55L2dldC1vbmUtY29tcGFueS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/get-one-company/get-one-company.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/get-one-company/get-one-company.component.ts ***!
          \*************************************************************************/
        /*! exports provided: GetOneCompanyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCompanyComponent", function () { return GetOneCompanyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            var GetOneCompanyComponent = /** @class */ (function () {
                function GetOneCompanyComponent(myAdminService) {
                    this.myAdminService = myAdminService;
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
                }
                GetOneCompanyComponent.prototype.ngOnInit = function () {
                };
                GetOneCompanyComponent.prototype.getOneCompamy = function () {
                    var _this = this;
                    this.myAdminService.getOneCompany(this.company.id).subscribe(function (company) {
                        _this.company = company;
                    });
                };
                return GetOneCompanyComponent;
            }());
            GetOneCompanyComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
            ]; };
            GetOneCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-one-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-one-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-company/get-one-company.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-one-company.component.css */ "./src/app/components/get-one-company/get-one-company.component.css")).default]
                })
            ], GetOneCompanyComponent);
            /***/ 
        }),
        /***/ "./src/app/components/get-one-customer/get-one-customer.component.css": 
        /*!****************************************************************************!*\
          !*** ./src/app/components/get-one-customer/get-one-customer.component.css ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-size: x-large;\r\n}\r\ntd,tr{\r\n    font-size: medium;\r\n}\r\na{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtb25lLWN1c3RvbWVyL2dldC1vbmUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2V0LW9uZS1jdXN0b21lci9nZXQtb25lLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxudGQsdHJ7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/get-one-customer/get-one-customer.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/get-one-customer/get-one-customer.component.ts ***!
          \***************************************************************************/
        /*! exports provided: GetOneCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOneCustomerComponent", function () { return GetOneCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            var GetOneCustomerComponent = /** @class */ (function () {
                function GetOneCustomerComponent(myAdminSrvice) {
                    this.myAdminSrvice = myAdminSrvice;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                }
                GetOneCustomerComponent.prototype.ngOnInit = function () {
                };
                GetOneCustomerComponent.prototype.getOneCustomer = function () {
                    var _this = this;
                    this.myAdminSrvice.getOneCustomer(this.customer.id).subscribe(function (customer) {
                        _this.customer = customer;
                    });
                };
                return GetOneCustomerComponent;
            }());
            GetOneCustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }
            ]; };
            GetOneCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-get-one-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./get-one-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/get-one-customer/get-one-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./get-one-customer.component.css */ "./src/app/components/get-one-customer/get-one-customer.component.css")).default]
                })
            ], GetOneCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\ntext-align: center;\r\nfont-size: 25pt;\r\ntext-overflow:ellipsis;\r\n-o-border-image: stretch;\r\n   border-image: stretch;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0Qix3QkFBcUI7R0FBckIscUJBQXFCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC1zaXplOiAyNXB0O1xyXG50ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG5ib3JkZXItaW1hZ2U6IHN0cmV0Y2g7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                HeaderComponent.prototype.ngOnInit = function () {
                };
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    \r\nwidth: 100%;\r\nheight: 100%;\r\n}\r\ndiv{\r\n    text-align: center;\r\n     font-size: 16pt;\r\n}\r\nspan{\r\n    font-size: 30pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaO0FBQ0E7SUFDSSxrQkFBa0I7S0FDakIsZUFBZTtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwJTtcclxufVxyXG5kaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgZm9udC1zaXplOiAxNnB0O1xyXG59XHJcbnNwYW57XHJcbiAgICBmb250LXNpemU6IDMwcHQ7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/layout/layout.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("section{\r\n    height: 100%;\r\n  \r\n    display: grid;\r\n    grid-template-rows: 20% 70% 10%;\r\n    grid-template-columns: 20% 80%;\r\n\r\n}\r\nheader{\r\n    grid-column: span 2;\r\n    \r\n\r\n}\r\nnav{\r\n    grid-column: span 1;\r\n    text-align: center;\r\n}\r\nmain{\r\n    height: 100%;\r\n    grid-column-end: span 1;\r\n}\r\nfooter{\r\n    grid-column: span 2;\r\n    \r\n}\r\nsection >*\r\n{\r\n    border: solid blue 1px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZOztJQUVaLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsOEJBQThCOztBQUVsQztBQUNBO0lBQ0ksbUJBQW1COzs7QUFHdkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkI7QUFDQTs7SUFFSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb257XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgNzAlIDEwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcclxuXHJcbn1cclxuaGVhZGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICAgIFxyXG5cclxufVxyXG5uYXZ7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYWlue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiBzcGFuIDE7XHJcbn1cclxuZm9vdGVye1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuICAgIFxyXG59XHJcbnNlY3Rpb24gPipcclxue1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibHVlIDFweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/layout/layout.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/layout/layout.component.ts ***!
          \*******************************************************/
        /*! exports provided: LayoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () { return LayoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LayoutComponent = /** @class */ (function () {
                function LayoutComponent() {
                }
                LayoutComponent.prototype.ngOnInit = function () {
                };
                return LayoutComponent;
            }());
            LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-layout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/layout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./layout.component.css */ "./src/app/components/layout/layout.component.css")).default]
                })
            ], LayoutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(loginService, router) {
                    this.loginService = loginService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.loginService.login(this.email, this.password, this.type).subscribe(function (result) {
                        if (result.startsWith("Error")) {
                            alert('Error try again');
                        }
                        else {
                            sessionStorage.token = result;
                            switch (_this.type) {
                                case "Admin":
                                    _this.router.navigate(['admin']);
                                    break;
                                case "Company":
                                    _this.router.navigate(['company']);
                                    break;
                                case "Customer":
                                    _this.router.navigate(['customer']);
                                    break;
                                default:
                                    alert("wrong type");
                                    break;
                            }
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/logout/logout.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/logout/logout.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/logout/logout.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/logout/logout.component.ts ***!
          \*******************************************************/
        /*! exports provided: LogoutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function () { return LogoutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_services_logout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/logout.service */ "./src/app/services/logout.service.ts");
            var LogoutComponent = /** @class */ (function () {
                function LogoutComponent(logoutService, router) {
                    this.logoutService = logoutService;
                    this.router = router;
                }
                LogoutComponent.prototype.ngOnInit = function () {
                    this.logoutService.logout;
                    this.router.navigate(['home']);
                };
                return LogoutComponent;
            }());
            LogoutComponent.ctorParameters = function () { return [
                { type: src_app_services_logout_service__WEBPACK_IMPORTED_MODULE_3__["LogoutService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-logout',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")).default]
                })
            ], LogoutComponent);
            /***/ 
        }),
        /***/ "./src/app/components/navigation/navigation.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/navigation/navigation.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\nfont: x-large;\r\n}\r\na{\r\n    color: black;\r\n}\r\nbutton{\r\n    margin: 0.2cm;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbmZvbnQ6IHgtbGFyZ2U7XHJcbn1cclxuYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDAuMmNtO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/navigation/navigation.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/navigation/navigation.component.ts ***!
          \***************************************************************/
        /*! exports provided: NavigationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () { return NavigationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NavigationComponent = /** @class */ (function () {
                function NavigationComponent() {
                }
                NavigationComponent.prototype.ngOnInit = function () {
                };
                return NavigationComponent;
            }());
            NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navigation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")).default]
                })
            ], NavigationComponent);
            /***/ 
        }),
        /***/ "./src/app/components/purchase-coupon/purchase-coupon.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/purchase-coupon/purchase-coupon.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVyY2hhc2UtY291cG9uL3B1cmNoYXNlLWNvdXBvbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/purchase-coupon/purchase-coupon.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/purchase-coupon/purchase-coupon.component.ts ***!
          \*************************************************************************/
        /*! exports provided: PurchaseCouponComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function () { return PurchaseCouponComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PurchaseCouponComponent = /** @class */ (function () {
                function PurchaseCouponComponent() {
                }
                PurchaseCouponComponent.prototype.ngOnInit = function () {
                };
                return PurchaseCouponComponent;
            }());
            PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-purchase-coupon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./purchase-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/purchase-coupon/purchase-coupon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./purchase-coupon.component.css */ "./src/app/components/purchase-coupon/purchase-coupon.component.css")).default]
                })
            ], PurchaseCouponComponent);
            /***/ 
        }),
        /***/ "./src/app/components/update-company/update-company.component.css": 
        /*!************************************************************************!*\
          !*** ./src/app/components/update-company/update-company.component.css ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-size: x-large;\r\n}\r\na{\r\n    color: black;\r\n    font-size: 20pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY29tcGFueS91cGRhdGUtY29tcGFueS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLWNvbXBhbnkvdXBkYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/update-company/update-company.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/update-company/update-company.component.ts ***!
          \***********************************************************************/
        /*! exports provided: UpdateCompanyComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCompanyComponent", function () { return UpdateCompanyComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var src_app_models_company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/company */ "./src/app/models/company.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UpdateCompanyComponent = /** @class */ (function () {
                function UpdateCompanyComponent(myAdminService, router) {
                    this.myAdminService = myAdminService;
                    this.router = router;
                    this.company = new src_app_models_company__WEBPACK_IMPORTED_MODULE_3__["Company"]();
                }
                UpdateCompanyComponent.prototype.ngOnInit = function () {
                };
                UpdateCompanyComponent.prototype.updateCompany = function () {
                    var _this = this;
                    this.myAdminService.updateCompany(this.company).subscribe(function (Response) {
                        alert("the update is sucsess !!!company id:" + Response.id), _this.router.navigate(['admin']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['admin']);
                    });
                };
                return UpdateCompanyComponent;
            }());
            UpdateCompanyComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            UpdateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-company',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-company.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-company/update-company.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-company.component.css */ "./src/app/components/update-company/update-company.component.css")).default]
                })
            ], UpdateCompanyComponent);
            //this.companies=response   -get all
            /***/ 
        }),
        /***/ "./src/app/components/update-coupon/update-coupon.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/update-coupon/update-coupon.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY291cG9uL3VwZGF0ZS1jb3Vwb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1jb3Vwb24vdXBkYXRlLWNvdXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/update-coupon/update-coupon.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/update-coupon/update-coupon.component.ts ***!
          \*********************************************************************/
        /*! exports provided: UpdateCouponComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCouponComponent", function () { return UpdateCouponComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/coupon */ "./src/app/models/coupon.ts");
            /* harmony import */ var src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/company.service */ "./src/app/services/company.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UpdateCouponComponent = /** @class */ (function () {
                function UpdateCouponComponent(myCompanyService, router) {
                    this.myCompanyService = myCompanyService;
                    this.router = router;
                    this.coupon = new src_app_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
                }
                UpdateCouponComponent.prototype.ngOnInit = function () {
                };
                UpdateCouponComponent.prototype.updateCoupon = function () {
                    var _this = this;
                    this.myCompanyService.updateCoupon(this.coupon).subscribe(function (Response) {
                        alert("the update is sucsess !!!coupon id:" + Response.id), _this.router.navigate(['company']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['company']);
                    });
                };
                return UpdateCouponComponent;
            }());
            UpdateCouponComponent.ctorParameters = function () { return [
                { type: src_app_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            UpdateCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-coupon',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-coupon.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-coupon/update-coupon.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-coupon.component.css */ "./src/app/components/update-coupon/update-coupon.component.css")).default]
                })
            ], UpdateCouponComponent);
            /***/ 
        }),
        /***/ "./src/app/components/update-customer/update-customer.component.css": 
        /*!**************************************************************************!*\
          !*** ./src/app/components/update-customer/update-customer.component.css ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    font-size: x-large;\r\n}\r\na{\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91cGRhdGUtY3VzdG9tZXIvdXBkYXRlLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VwZGF0ZS1jdXN0b21lci91cGRhdGUtY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/update-customer/update-customer.component.ts": 
        /*!*************************************************************************!*\
          !*** ./src/app/components/update-customer/update-customer.component.ts ***!
          \*************************************************************************/
        /*! exports provided: UpdateCustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCustomerComponent", function () { return UpdateCustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/customer */ "./src/app/models/customer.ts");
            /* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/admin.service */ "./src/app/services/admin.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var UpdateCustomerComponent = /** @class */ (function () {
                function UpdateCustomerComponent(myAdminService, router) {
                    this.myAdminService = myAdminService;
                    this.router = router;
                    this.customer = new src_app_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
                }
                UpdateCustomerComponent.prototype.ngOnInit = function () {
                };
                UpdateCustomerComponent.prototype.updateCustomer = function () {
                    var _this = this;
                    this.myAdminService.updateCustomer(this.customer).subscribe(function (Response) {
                        alert("the update is sucsess !!!company id:" + Response.id), _this.router.navigate(['admin']);
                    }, function (error) {
                        alert(error.error);
                        _this.router.navigate(['admin']);
                    });
                };
                return UpdateCustomerComponent;
            }());
            UpdateCustomerComponent.ctorParameters = function () { return [
                { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            UpdateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-update-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/update-customer/update-customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-customer.component.css */ "./src/app/components/update-customer/update-customer.component.css")).default]
                })
            ], UpdateCustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/models/company.ts": 
        /*!***********************************!*\
          !*** ./src/app/models/company.ts ***!
          \***********************************/
        /*! exports provided: Company */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function () { return Company; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Company = /** @class */ (function () {
                function Company(id, name, email, password) {
                    this.id = id;
                    this.name = name;
                    this.email = email;
                    this.password = password;
                }
                return Company;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/coupon.ts": 
        /*!**********************************!*\
          !*** ./src/app/models/coupon.ts ***!
          \**********************************/
        /*! exports provided: Coupon */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function () { return Coupon; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Coupon = /** @class */ (function () {
                function Coupon(id, company, category, title, description, startDate, endDate, amount, price, image) {
                    this.id = id;
                    this.company = company;
                    this.category = category;
                    this.title = title;
                    this.description = description;
                    this.startDate = startDate;
                    this.endDate = endDate;
                    this.amount = amount;
                    this.price = price;
                    this.image = image;
                }
                return Coupon;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/customer.ts": 
        /*!************************************!*\
          !*** ./src/app/models/customer.ts ***!
          \************************************/
        /*! exports provided: Customer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function () { return Customer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Customer = /** @class */ (function () {
                function Customer(id, firstName, lastName, email, password) {
                    this.id = id;
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.password = password;
                }
                return Customer;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/admin.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/admin.service.ts ***!
          \*******************************************/
        /*! exports provided: AdminService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function () { return AdminService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AdminService = /** @class */ (function () {
                function AdminService(client) {
                    this.client = client;
                }
                AdminService.prototype.addNewCompany = function (company) {
                    return this.client.post("http://localhost:8080/admin/company/" + sessionStorage.token, company);
                };
                AdminService.prototype.updateCompany = function (company) {
                    return this.client.put("http://localhost:8080/admin/company/" + sessionStorage.token, company);
                };
                AdminService.prototype.deleteCompany = function (id) {
                    return this.client.delete("http://localhost:8080/admin/company/" + sessionStorage.token + "/" + id, { responseType: 'text' });
                };
                AdminService.prototype.getAllCompanies = function () {
                    return this.client.get("http://localhost:8080/admin/companies/" + sessionStorage.token);
                };
                AdminService.prototype.getOneCompany = function (id) {
                    return this.client.get("http://localhost:8080/admin/company/" + sessionStorage.token + "/" + id);
                };
                AdminService.prototype.addNewCustomer = function (customer) {
                    return this.client.post("http://localhost:8080/admin/customer/" + sessionStorage.token, customer);
                };
                AdminService.prototype.updateCustomer = function (customer) {
                    return this.client.put("http://localhost:8080/admin/customer/" + sessionStorage.token, customer);
                };
                AdminService.prototype.deleteCustomer = function (id) {
                    return this.client.delete("http://localhost:8080/admin/customer/" + sessionStorage.token + "/" + id, { responseType: 'text' });
                };
                AdminService.prototype.getAllCustomers = function () {
                    return this.client.get("http://localhost:8080/admin/customers/" + sessionStorage.token);
                };
                AdminService.prototype.getOneCustomer = function (id) {
                    return this.client.get("http://localhost:8080/admin/customer/" + sessionStorage.token + "/" + id);
                };
                return AdminService;
            }());
            AdminService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AdminService);
            /***/ 
        }),
        /***/ "./src/app/services/company.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/company.service.ts ***!
          \*********************************************/
        /*! exports provided: CompanyService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function () { return CompanyService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CompanyService = /** @class */ (function () {
                function CompanyService(client) {
                    this.client = client;
                }
                CompanyService.prototype.addNewCoupon = function (coupon) {
                    return this.client.post("http://localhost:8080/Company/company/" + sessionStorage.token, coupon);
                };
                CompanyService.prototype.updateCoupon = function (coupon) {
                    return this.client.put("http://localhost:8080/Company/company/" + sessionStorage.token, coupon);
                };
                CompanyService.prototype.deleteCoupon = function (id) {
                    return this.client.delete("http://localhost:8080/Company/company/" + sessionStorage.token + "/" + id, { responseType: 'text' });
                };
                CompanyService.prototype.getAllCouponForCompany = function () {
                    return this.client.get("http://localhost:8080/Company/company/" + sessionStorage.token);
                };
                CompanyService.prototype.getAllCouponForCompanyByCategory = function (coupon) {
                    return this.client.get("http://localhost:8080/Company/company/category/" + sessionStorage.token + "/" + coupon);
                };
                CompanyService.prototype.getAllCouponForCompanyByMaxPrice = function (maxPrice) {
                    return this.client.get("http://localhost:8080/Company/company/maxPrice/" + sessionStorage.token + "/" + maxPrice);
                };
                CompanyService.prototype.getCompanyDetails = function () {
                    return this.client.get("http://localhost:8080/Company/company/details/" + sessionStorage.token);
                };
                return CompanyService;
            }());
            CompanyService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CompanyService);
            /***/ 
        }),
        /***/ "./src/app/services/customer.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/customer.service.ts ***!
          \**********************************************/
        /*! exports provided: CustomerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function () { return CustomerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CustomerService = /** @class */ (function () {
                function CustomerService(client) {
                    this.client = client;
                }
                CustomerService.prototype.purchaseCoupon = function (coupon) {
                    return this.client.post("http://localhost:8080/Customer/customer/" + sessionStorage.token, coupon);
                };
                CustomerService.prototype.getAllCouponForCustomer = function () {
                    return this.client.get("http://localhost:8080/Customer/customer/" + sessionStorage.token);
                };
                CustomerService.prototype.getAllCouponForCustomerByCategory = function (coupon) {
                    return this.client.get("http://localhost:8080/Customer/customer/category/" + sessionStorage.token + "/" + coupon);
                };
                CustomerService.prototype.getAllCouponForCustomerByMaxPrice = function (maxPrice) {
                    return this.client.get("http://localhost:8080/Customer/customer/maxprice/" + sessionStorage.token + "/" + maxPrice);
                };
                CustomerService.prototype.getCustomerDetails = function () {
                    return this.client.get("http://localhost:8080/Customer/customer/details/" + sessionStorage.token);
                };
                CustomerService.prototype.GetAllCouponToBuyCustomer = function () {
                    return this.client.get("http://localhost:8080/Customer/customer/couponsToBuy/" + sessionStorage.token);
                };
                return CustomerService;
            }());
            CustomerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CustomerService);
            /***/ 
        }),
        /***/ "./src/app/services/login.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/login.service.ts ***!
          \*******************************************/
        /*! exports provided: LoginService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function () { return LoginService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var LoginService = /** @class */ (function () {
                function LoginService(client) {
                    this.client = client;
                }
                LoginService.prototype.login = function (email, password, type) {
                    return this.client.post("https://alonseftel.github.io/http://localhost:8080/login/" + email + "/" + password + "/" + type, null, { responseType: 'text' });
                };
                LoginService.prototype.logout = function () {
                    return this.client.delete("https://alonseftel.github.io/http://localhost:8080/logout/");
                };
                return LoginService;
            }());
            LoginService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LoginService);
            /***/ 
        }),
        /***/ "./src/app/services/logout.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/logout.service.ts ***!
          \********************************************/
        /*! exports provided: LogoutService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function () { return LogoutService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var LogoutService = /** @class */ (function () {
                function LogoutService() {
                }
                LogoutService.prototype.logout = function () {
                    return this.client.post("http://localhost:8080/logout/" + sessionStorage.token);
                };
                return LogoutService;
            }());
            LogoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], LogoutService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\angular\project3\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map