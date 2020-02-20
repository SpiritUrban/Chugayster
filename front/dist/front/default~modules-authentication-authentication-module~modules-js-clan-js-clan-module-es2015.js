(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-authentication-authentication-module~modules-js-clan-js-clan-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flip-card\" *ngIf=\"card.number\" [routerLink]=\"['/lesson', card.name]\">\n    <div class=\"flip-card-inner\">\n\n        <!-- --- -->\n        <div class=\"card mb-3 flip-card-front\">\n            \n            <iframe  \n                [src]=\"urlSafe\"\n                frameborder=\"0\"\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \n                allowfullscreen=\"\"></iframe>\n\n            <div class=\"card-body\">\n                <p class=\"card-text\">{{card.description[st.lang]}}</p>\n            </div>\n\n        </div>\n\n        <!-- --- -->\n        <div class=\"card mb-3 flip-card-back\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">{{card.text[st.lang]}}</p>\n            </div>\n            <div class=\"card-body\">\n                <!-- <a class=\"btn btn-success\" [routerLink]=\"['/lesson', card.name]\">Go to lesson</a> -->\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/flip-card/flip-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/components/flip-card/flip-card.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flip-card\" *ngIf=\"card.number\" [routerLink]=\"['/lesson', card.name]\">\n    <div class=\"flip-card-inner\">\n\n        <!-- --- -->\n        <div class=\"card mb-3 flip-card-front\">\n            <h3 class=\"card-header\">{{card.title[st.lang]}}</h3>\n            \n            <div class=\"card-img-2\"\n            [style.backgroundImage]=\"'url('+card.img+')'\" \n            alt=\"Card image\"></div>\n\n            <div class=\"card-body\">\n                <p class=\"card-text\">{{card.description[st.lang]}}</p>\n            </div>\n            <div class=\"card-footer text-muted\">Урок: {{card.number}}</div>\n        </div>\n\n        <!-- --- -->\n        <div class=\"card mb-3 flip-card-back\">\n            <div class=\"card-body\">\n                <p class=\"card-text\">{{card.text[st.lang]}}</p>\n            </div>\n            <div class=\"card-body\">\n                <a class=\"btn btn-success\" [routerLink]=\"['/lesson', card.name]\">Go to lesson</a>\n            </div>\n            <div class=\"card-footer text-muted\">Урок: {{card.number}}</div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    <p>© JS-CLAN 2018-2019, created and maintained by <a href=\"https://spiriturban.github.io/\" target=\"_blank\">Dyachuk Vitaliy</a> from <a\n            href=\"https://www.js-clan.com/\">JS-CLAN</a>.</p>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/general/nav/nav.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/components/general/nav/nav.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"p\"><a class=\"logo\" href=\"https://js-clan.com\"><img src=\"assets/js-clan/img/js-clan.svg\" alt=\"js-clan\">\n            <div class=\"led\" style=\"--left: 70%; --top: 20%;\"></div>\n            <div class=\"led\" style=\"--left: 68%; --top: 37%;\"></div>\n            <div class=\"led\" style=\"--left: 67%; --top: 55%;\"></div>\n            <div class=\"led\" style=\"--left: 78%; --top: 12%;\"></div>\n            <div class=\"led\" style=\"--left: 76%; --top: 41%;\"></div>\n        </a>\n        <div class=\"header-right\">\n            <!-- <div class=\"languages\"><a href=\"/login\">Login</a></div> -->\n            <nav class=\"nav\">\n                <!-- <a href=\"/account\">account</a> -->\n                <!-- <a href=\"/playlist\">playlist</a> -->\n                <a [routerLink]=\"['/']\">Home</a>\n                <a [routerLink]=\"['/members']\">MEMBERS</a>\n                <a [routerLink]=\"['/lessons']\">Lessons</a>\n                <a [routerLink]=\"['/health']\">Health</a>\n\n\n                <!-- <a href=\"/constructs\">constructs</a>\n                <a href=\"/materials\">materials</a>\n                <a class=\"o6\" href=\"/draft\">...draft</a>\n                <a href=\"/programs\">programs</a>\n                <hr>\n                <a class=\"o6\" href=\"/\">js</a>\n                <a class=\"o6\" href=\"/\">node-js</a>\n                <a class=\"o6\" href=\"/\">angular</a>\n                <a class=\"o6\" href=\"/\">react</a><a class=\"o6\" href=\"/\">blog</a>\n                <a class=\"o6\" href=\"/\">cripto-money</a>\n                <a class=\"o6\" href=\"/\">robots</a>\n                <a class=\"o6\" href=\"/\">iot</a> -->\n        \n\n            </nav>\n        </div>\n        <div class=\"hamburger\">\n            <i class=\"mdi mdi-menu\" aria-hidden=\"true\"></i>\n        </div>\n    </div>\n\n\n    <script>\n    </script>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cabinet works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/health/health.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/health/health.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container health-content\">\n\n    <!-- <br>\n    <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-primary\">English</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Українською</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Русский</button>\n    </div> -->\n\n    <br>\n\n    <div class=\"row\">\n\n        <div class=\"col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3\" *ngFor=\"let card of st.cards\">\n\n            <app-flip-card-video [card]=\"card\"></app-flip-card-video>\n\n        </div>\n\n        <div class=\"PS\" >\n            <p>Долучайся до нашої спільноти на Ютуб!</p>\n            <a class=\"btn btn-success\" href=\"https://www.youtube.com/channel/UC1fRCBrRa1oeIENiEm8AzUA?view_as=subscriber\" target=\"_blank\" >ХОЧУ !!!</a>\n            <!-- [routerLink]=\"['/want-more-lessons']\" -->\n        </div>\n\n    </div>\n</div>\n\n<app-extra-alert [st]=\"st.alert\"></app-extra-alert>\n\n<app-clan-footer></app-clan-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/lesson/lesson.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/lesson/lesson.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container lessons-content\">\n\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n\n    <h3 class=\"card-header\">{{st.currentCard.title[st.lang]}}</h3>\n    <br>\n\n    <div class=\"row\">\n        <iframe  \n        [src]=\"urlSafe\"\n        frameborder=\"0\"\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \n        allowfullscreen=\"\"></iframe>\n    </div>\n\n    <br>\n    <p class=\"card-text\">{{st.currentCard.description[st.lang]}}</p>\n    <a href=\"https://github.com/SpiritUrban/JavaScript-2020\">Code on GitHub</a>\n\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/lessons/lessons.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/lessons/lessons.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container lessons-content\">\n\n    <!-- <br>\n    <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-primary\">English</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Українською</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Русский</button>\n    </div> -->\n\n    <br>\n\n    <div class=\"row\">\n\n        <div class=\"col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3\" *ngFor=\"let card of st.cards\">\n            <app-flip-card [card]=\"card\"></app-flip-card>\n        </div>\n\n        <div class=\"PS\" >\n            <p>Хочеш ще уроків? Жми кнопку! Щоб я знав, скільком людям це потрібно.</p>\n            <a class=\"btn btn-success\" (click)=\"wantMoreLessons()\" >ХОЧУ ЩЕ !!!</a>\n            <!-- [routerLink]=\"['/want-more-lessons']\" -->\n            \n        </div>\n\n    </div>\n</div>\n\n<app-extra-alert [st]=\"st.alert\"></app-extra-alert>\n\n<app-clan-footer></app-clan-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/main/main.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/main/main.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container lessons-content\">\n    <br>\n    <div class=\"row\">\n        <ul>\n            <h4>JS-CLAN:</h4>\n            <li><a routerLink=\"/common/main\">/common/main</a></li>\n            <li><a routerLink=\"/lessons\">Lessons</a></li>\n            <li><a routerLink=\"/members\">Members</a></li>\n            <li><a routerLink=\"/training-apparatus\">Training apparatus</a></li>\n            <li><a routerLink=\"/cabinet\">Cabinet</a></li>\n        \n            <h3>Ресурси:</h3>\n            <h4>Для відео монтажу:</h4>\n            <li><a routerLink=\"/video-samples\">Video samples</a></li>\n            <li><a routerLink=\"/free-sounds\">Free sounds</a></li>\n\n            <h4>AUTH:</h4>\n            <li><a routerLink=\"/auth/register\">Register</a></li>\n            <li><a routerLink=\"/auth/conditions\">Conditions</a></li>\n            <li><a routerLink=\"/auth/login\">Login</a></li>\n        </ul>\n    </div>\n</div>\n\n<!-- <app-extra-alert [st]=\"st.alert\"></app-extra-alert> -->\n\n<app-clan-footer></app-clan-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/members/members.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/members/members.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container members-content\">\n\n    <!-- <br>\n    <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-primary\">English</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Українською</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Русский</button>\n    </div> -->\n\n    <br>\n\n    <div class=\"row\">\n\n\n\n        <form class=\"table-form\">\n\n            <div class=\"form-group form-inline\">\n                <!-- <img [src]=\"member.img\" class=\"mr-2\" style=\"width: 20px\"> -->\n                <i class=\"mdi mdi-account-search\" aria-hidden=\"true\"></i>\n\n                <input class=\"form-control ml-2 search\" type=\"text\" placeholder=\"Search by names\" name=\"searchTerm\"\n                    [(ngModel)]=\"service.searchTerm\" />\n                <span class=\"ml-3\" *ngIf=\"service.loading$ | async\">Loading...</span>\n            </div>\n\n            <table class=\"table table-striped\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Name</th>\n                        <th scope=\"col\" sortable=\"name\" (sort)=\"onSort($event)\">Links</th>\n\n                        <th scope=\"col\" sortable=\"area\" (sort)=\"onSort($event)\">Carma</th>\n                        <!-- <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Level</th> -->\n                        <th scope=\"col\" sortable=\"population\" (sort)=\"onSort($event)\">Status</th>\n\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let member of members$ | async\">\n                        <th scope=\"row\">{{ member.id }}</th>\n\n                        <td>\n                            <img [src]=\"member.img\" class=\"mr-2\" style=\"width: 20px\">\n                            <ngb-highlight [result]=\"member.name\" [term]=\"service.searchTerm\"></ngb-highlight>\n                        </td>\n\n                        <td style=\"padding: 0 .75rem;\">\n                            <a *ngIf=\"member.github\" [href]=\"member.github\" target=\"_blank\">\n                                <i class=\"mdi mdi-github-circle\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a *ngIf=\"member.linkedin\" [href]=\"member.linkedin\" target=\"_blank\">\n                                <i class=\"mdi mdi-linkedin-box\" aria-hidden=\"true\"></i>\n                            </a>\n                            <a *ngIf=\"member.instagram\" [href]=\"member.instagram\" target=\"_blank\">\n                                <i class=\"mdi mdi-instagram\" aria-hidden=\"true\"></i>\n                            </a>                            \n                            <!-- <ngb-highlight [result]=\"member.status\" [term]=\"service.searchTerm\"></ngb-highlight> -->\n                        </td>\n\n                        <td>\n                            <ngb-highlight [result]=\"member.carma | number\" [term]=\"service.searchTerm\"></ngb-highlight>\n                        </td>\n\n                        <!-- <td>\n                            <ngb-highlight [result]=\"member.level | number\" [term]=\"service.searchTerm\"></ngb-highlight>\n                        </td> -->\n\n                        <td>\n                            <ngb-highlight [result]=\"member.status\" [term]=\"service.searchTerm\"></ngb-highlight>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n\n            <div class=\"d-flex justify-content-between p-2\">\n                <ngb-pagination [collectionSize]=\"total$ | async\" [(page)]=\"service.page\" [pageSize]=\"service.pageSize\">\n                </ngb-pagination>\n\n                <select class=\"custom-select\" style=\"width: auto\" name=\"pageSize\" [(ngModel)]=\"service.pageSize\">\n                    <option [ngValue]=\"10\">10 items per page</option>\n                    <option [ngValue]=\"20\">20 items per page</option>\n                    <option [ngValue]=\"30\">30 items per page</option>\n                </select>\n            </div>\n\n\n        </form>\n\n\n        <div class=\"PS\">\n            <p>Якщо ти один з моїх учнів і ти хочеш бути в цему списку, скажи мені про це.</p>\n            <!-- <a class=\"btn btn-success\" (click)=\"wantMoreLessons()\">ХОЧУ ЩЕ !!!</a> -->\n            <!-- [routerLink]=\"['/want-more-lessons']\" -->\n        </div>\n\n    </div>\n</div>\n\n\n<!-- <app-extra-alert [st]=\"st.alert\"></app-extra-alert> -->\n\n<app-clan-footer></app-clan-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/p404/p404.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/p404/p404.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>p404 works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container lessons-content\">\n    <br>\n    <div class=\"row\">\n        <div class=\"one\" *ngFor=\"let one of list\">\n            <a [href]=\"one.link\" target=\"_blank\">\n                <img [src]=\"one.img\" alt=\"pixabay\">\n                <h6>{{one.description}}</h6>\n            </a>\n        </div>\n    </div>\n</div>\n\n<app-clan-footer></app-clan-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container lessons-content\">\n    <br>\n    <div class=\"row\">\n        <div class=\"one\" *ngFor=\"let one of list\">\n            <a [href]=\"one.link\" target=\"_blank\">\n                <img [src]=\"one.img\" alt=\"pixabay\">\n                <h6>{{one.description}}</h6>\n            </a>\n        </div>\n    </div>\n</div>\n\n<app-clan-footer></app-clan-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/students/students.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/students/students.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>students works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container training-apparatus\">\n\n    <!-- <br>\n    <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-primary\">English</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Українською</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Русский</button>\n    </div> -->\n\n    <br>\n\n    <div class=\"row\">\n\n        <div class=\"col-12  col-sm-12  col-md-6  col-lg-4  col-xl-3\" *ngFor=\"let card of st.cards\">\n\n            <div class=\"card mb-3\">\n                <h3 class=\"card-header\">Card header</h3>\n\n                <div class=\"card-body block-1\">\n                    <h5 class=\"card-title\">Жми кнопку!</h5>\n                </div>\n\n                <a class=\"btn btn-success\" (click)=\"play()\">PLAY !!!</a>\n\n\n                <div class=\"card-body block-2\">\n                    <h5 class=\"card-title big\">{{ '{' }}  {{ '}' }}</h5>\n                </div>\n\n\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Special title treatment</h5>\n                    <h6 class=\"card-subtitle text-muted\">Support card subtitle</h6>\n                </div>\n                <img style=\"height: 200px; width: 100%; display: block;\"\n                    src=\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\"\n                    alt=\"Card image\">\n                <div class=\"card-body\">\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                        card's content.</p>\n                </div>\n                <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item\">Cras justo odio</li>\n                    <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n                    <li class=\"list-group-item\">Vestibulum at eros</li>\n                </ul>\n                <div class=\"card-body\">\n                    <a href=\"#\" class=\"card-link\">Card link</a>\n                    <a href=\"#\" class=\"card-link\">Another link</a>\n                </div>\n                <div class=\"card-footer text-muted\">\n                    2 days ago\n                </div>\n            </div>\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Card title</h4>\n                    <h6 class=\"card-subtitle mb-2 text-muted\">Card subtitle</h6>\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the\n                        card's content.</p>\n                    <a href=\"#\" class=\"card-link\">Card link</a>\n                    <a href=\"#\" class=\"card-link\">Another link</a>\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>\n</div>\n\n<app-extra-alert [st]=\"st.alert\"></app-extra-alert>\n\n<app-clan-footer></app-clan-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<div class=\"container lessons-content\">\n\n    <!-- <br>\n    <div class=\"row\">\n        <button type=\"button\" class=\"btn btn-primary\">English</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Українською</button>\n        <button type=\"button\" class=\"btn btn-secondary\">Русский</button>\n    </div> -->\n\n    <br>\n\n    <div class=\"row\">\n        <h1 class=\"с\">Твій голос враховано!</h1>\n\n\n<!-- \n        <div class=\"PS\" >\n            <p>Хочеш ще уроків? Жми кнопку! Щоб я знав, скільком людям це потрібно.</p>\n            <a class=\"btn btn-success\" [routerLink]=\"['/want-more-lessons']\">ХОЧУ ЩЕ !!!</a>\n        </div> -->\n\n    </div>\n</div>\n\n\n<!-- <app-extra-alert [st]=\"st.alert\"></app-extra-alert> -->\n\n<app-clan-footer></app-clan-footer>"

/***/ }),

/***/ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.sass":
/*!*********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.sass ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip-card {\n  background-color: transparent;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.flip-card-back {\n  transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n}\n\n.card-img-2 {\n  height: 200px;\n  width: 100%;\n  display: block;\n  background-size: cover;\n}\n\n.card-body {\n  background: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9mbGlwLWNhcmQtdmlkZW8vRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxcY29tcG9uZW50c1xcZmxpcC1jYXJkLXZpZGVvXFxmbGlwLWNhcmQtdmlkZW8uY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZmxpcC1jYXJkLXZpZGVvL2ZsaXAtY2FyZC12aWRlby5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDRUY7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUVJLCtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2ZsaXAtY2FyZC12aWRlby9mbGlwLWNhcmQtdmlkZW8uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gZmxpcC1jYXJkXHJcbi5mbGlwLWNhcmRcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHhcclxuXHJcbi5mbGlwLWNhcmQtaW5uZXJcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICB3aWR0aDogMTAwJVxyXG4gIGhlaWdodDogMTAwJVxyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzXHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxyXG5cclxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyXHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZylcclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFja1xyXG4gIGhlaWdodDogMTAwJVxyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlblxyXG5cclxuLmZsaXAtY2FyZC1mcm9udFxyXG5cclxuLmZsaXAtY2FyZC1iYWNrXHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZylcclxuICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICB0b3A6IDBcclxuXHJcbi5jYXJkLWltZy0yXHJcbiAgaGVpZ2h0OiAyMDBweFxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgZGlzcGxheTogYmxvY2tcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcblxyXG4uY2FyZC1ib2R5IFxyXG4gICAgLy8gcGFkZGluZzogMS4yNXJlbSAgMS4yNXJlbSAgMCAgMS4yNXJlbSAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpIiwiLmZsaXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZmxpcC1jYXJkLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uY2FyZC1pbWctMiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FlipCardVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardVideoComponent", function() { return FlipCardVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let FlipCardVideoComponent = class FlipCardVideoComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.url = "https://www.youtube.com/embed/";
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.card.video);
    }
};
FlipCardVideoComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlipCardVideoComponent.prototype, "card", void 0);
FlipCardVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flip-card-video',
        template: __webpack_require__(/*! raw-loader!./flip-card-video.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.html"),
        styles: [__webpack_require__(/*! ./flip-card-video.component.sass */ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.sass")]
    })
], FlipCardVideoComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.sass":
/*!*********************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/flip-card/flip-card.component.sass ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flip-card {\n  background-color: transparent;\n  perspective: 1000px;\n}\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front, .flip-card-back {\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.flip-card-back {\n  transform: rotateY(180deg);\n  position: absolute;\n  top: 0;\n}\n\n.card-img-2 {\n  height: 200px;\n  width: 100%;\n  display: block;\n  background-size: cover;\n}\n\n.card-body {\n  background: rgba(0, 0, 0, 0.18);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9mbGlwLWNhcmQvRDpcXHByb2plY3RzMlxcQ2h1Z2F5c3RlclxcZnJvbnQvc3JjXFxhcHBcXEBtb2R1bGVzXFxAanMtY2xhblxcY29tcG9uZW50c1xcZmxpcC1jYXJkXFxmbGlwLWNhcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL2NvbXBvbmVudHMvZmxpcC1jYXJkL2ZsaXAtY2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDZCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtBQ0FGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDRUY7O0FERUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNFRjs7QURBQTtFQUVJLCtCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2ZsaXAtY2FyZC9mbGlwLWNhcmQuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gZmxpcC1jYXJkXHJcbi5mbGlwLWNhcmRcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudFxyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHhcclxuXHJcbi5mbGlwLWNhcmQtaW5uZXJcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICB3aWR0aDogMTAwJVxyXG4gIGhlaWdodDogMTAwJVxyXG4gIHRleHQtYWxpZ246IGNlbnRlclxyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzXHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKVxyXG5cclxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyXHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZylcclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFja1xyXG4gIGhlaWdodDogMTAwJVxyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlblxyXG5cclxuLmZsaXAtY2FyZC1mcm9udFxyXG5cclxuLmZsaXAtY2FyZC1iYWNrXHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZylcclxuICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICB0b3A6IDBcclxuXHJcbi5jYXJkLWltZy0yXHJcbiAgaGVpZ2h0OiAyMDBweFxyXG4gIHdpZHRoOiAxMDAlXHJcbiAgZGlzcGxheTogYmxvY2tcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcblxyXG4uY2FyZC1ib2R5IFxyXG4gICAgLy8gcGFkZGluZzogMS4yNXJlbSAgMS4yNXJlbSAgMCAgMS4yNXJlbSAgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTgpIiwiLmZsaXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZmxpcC1jYXJkLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uY2FyZC1pbWctMiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FlipCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardComponent", function() { return FlipCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");



let FlipCardComponent = class FlipCardComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FlipCardComponent.prototype, "card", void 0);
FlipCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flip-card',
        template: __webpack_require__(/*! raw-loader!./flip-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/flip-card/flip-card.component.html"),
        styles: [__webpack_require__(/*! ./flip-card.component.sass */ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.sass")]
    })
], FlipCardComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.sass":
/*!*********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.sass ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #2d2d2d url(/assets/js-clan/img/bg.png) repeat;\n  border-top: 0.2em solid #1f1f1f;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  bottom: 0;\n  margin-top: -1.7em;\n}\nfooter p {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL2NsYW4tZm9vdGVyL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXGNvbXBvbmVudHNcXGdlbmVyYWxcXGNsYW4tZm9vdGVyXFxjbGFuLWZvb3Rlci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL2NsYW4tZm9vdGVyL2NsYW4tZm9vdGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMERBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDQ0Q7QURBQztFQUNDLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2dlbmVyYWwvY2xhbi1mb290ZXIvY2xhbi1mb290ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXJcclxuXHRiYWNrZ3JvdW5kOiAjMmQyZDJkIHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2JnLnBuZykgcmVwZWF0XHJcblx0Ym9yZGVyLXRvcDogMC4yZW0gc29saWQgIzFmMWYxZlxyXG5cdHRleHQtYWxpZ246IGNlbnRlclxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZVxyXG5cdHdpZHRoOiAxMDAlXHJcblx0Ym90dG9tOiAwXHJcblx0bWFyZ2luLXRvcDogLTEuN2VtXHJcblx0cFxyXG5cdFx0bWFyZ2luLWJvdHRvbTogMCIsImZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMyZDJkMmQgdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvYmcucG5nKSByZXBlYXQ7XG4gIGJvcmRlci10b3A6IDAuMmVtIHNvbGlkICMxZjFmMWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAtMS43ZW07XG59XG5mb290ZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClanFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClanFooterComponent", function() { return ClanFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClanFooterComponent = class ClanFooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClanFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clan-footer',
        template: __webpack_require__(/*! raw-loader!./clan-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.html"),
        styles: [__webpack_require__(/*! ./clan-footer.component.sass */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.sass")]
    })
], ClanFooterComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/components/general/nav/nav.component.sass":
/*!*****************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/general/nav/nav.component.sass ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  transition: 1s;\n  background: #00131d;\n  border-top: 0.2em solid #1f1f1f;\n  overflow: hidden;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  z-index: 100;\n}\n\n.header-hide {\n  top: -10em;\n}\n\n.logo {\n  z-index: 10;\n  position: relative;\n}\n\n.logo > .led {\n  position: absolute;\n  top: 40%;\n  right: 30%;\n  width: 0.2em;\n  height: 0.2em;\n  border-radius: 1em;\n  background: #56ff56;\n  background: blue;\n  z-index: 2000;\n  top: var(--top);\n  left: var(--left);\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes example {\n  0% {\n    background: #03A9F4;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    background: #56ff56;\n  }\n}\n\n@keyframes example {\n  0% {\n    background: #03A9F4;\n  }\n  50% {\n    background: black;\n  }\n  100% {\n    background: #56ff56;\n  }\n}\n\n.p {\n  display: flex;\n}\n\nheader .p {\n  width: 90%;\n  margin: 0.3em auto;\n  position: relative;\n}\n\nheader img {\n  display: block;\n  width: 100%;\n  min-width: 18em;\n}\n\n.header-right {\n  position: absolute;\n  z-index: 12;\n  width: 60%;\n  width: 75%;\n  min-width: 150px;\n  height: 100px;\n  right: 0;\n  top: 0.2em;\n}\n\n.header-right:before {\n  position: absolute;\n  z-index: -1;\n  content: url(/assets/js-clan/img/header/header-code.svg);\n  right: 0;\n  top: 0;\n  width: 60%;\n  opacity: 0.05;\n}\n\n.header-mobile {\n  height: 100vh;\n}\n\n@media only screen and (max-width: 600px) {\n  .logo {\n    width: 80%;\n  }\n\n  header img {\n    min-width: 100%;\n  }\n}\n\n/* **\tlanguages */\n\n.languages {\n  text-align: right;\n  z-index: 3000;\n}\n\n.languages a {\n  margin: 0 0.5em;\n  background: #404040;\n  background: #2e3742;\n  padding: 0.25em 0.5em;\n  border-radius: 1em;\n  border: #585858 solid 1px;\n  box-shadow: 0 0.25em 0.45em rgba(0, 0, 0, 0.2);\n}\n\n.languages a:hover {\n  color: white;\n}\n\n/* **\tnav */\n\nnav {\n  position: fixed;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  height: inherit;\n  overflow: hidden;\n  transition-duration: 1.5s;\n  padding-right: 1em;\n  height: 3em;\n  top: 1.8em;\n  top: 2.5em;\n  right: 4%;\n  width: 55%;\n}\n\n.nav-hide {\n  top: -16em;\n}\n\nnav a {\n  margin: 0.25em 0.25em 0.25em 0.5em;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 0.5em;\n  padding: 0.5em;\n}\n\nnav a:before {\n  content: \"{ \" !important;\n  color: gray;\n}\n\nnav a:after {\n  content: \" }\" !important;\n  color: gray;\n}\n\nnav a:hover {\n  color: #b12a34;\n  color: white;\n  opacity: 1;\n}\n\n.nav-mobile {\n  top: 0;\n  left: 0;\n  background: #2d2d2d url(/assets/js-clan/img/bg.png) repeat;\n  border-bottom: 0.2em solid #1f1f1f;\n  height: 20em;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  transition-duration: 1.5s;\n  padding: 2em 1em;\n  display: block;\n  text-align: center;\n}\n\n.nav-mobile a {\n  width: 100%;\n  display: block;\n  background: rgba(255, 255, 255, 0.07);\n  cursor: pointer;\n  margin: 1em 0;\n}\n\n.nav-mobile a:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n@media only screen and (max-width: 600px) {\n  nav {\n    top: -50em;\n  }\n}\n\n.hamburger {\n  z-index: 101;\n  display: none;\n  position: absolute;\n  flex-direction: column;\n  font-weight: 600;\n  font-size: 2em;\n  border-radius: 0.2em;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 0.35em;\n  top: 1em;\n  top: 0.2em;\n  right: -0.5em;\n  text-align: center;\n  transform: translateY(50%);\n}\n\n.hamburger i {\n  height: 0.4em;\n  line-height: 0.25em;\n  width: 1.3em;\n  border-radius: 0.5em;\n  font-size: 1.5em;\n}\n\n.hamburger:hover {\n  background: black;\n  background: #b12a34;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .hamburger {\n    display: flex;\n  }\n}\n\n.hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL25hdi9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxjb21wb25lbnRzXFxnZW5lcmFsXFxuYXZcXG5hdi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vY29tcG9uZW50cy9nZW5lcmFsL25hdi9uYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBQ0MsVUFBQTtBQ0VEOztBREFBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FDR0Q7O0FERkM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSwyQ0FBQTtVQUFBLG1DQUFBO0FDR0Y7O0FEREE7RUFDQztJQUNDLG1CQUFBO0VDSUE7RURGRDtJQUNDLGlCQUFBO0VDSUE7RURGRDtJQUNDLG1CQUFBO0VDSUE7QUFDRjs7QURiQTtFQUNDO0lBQ0MsbUJBQUE7RUNJQTtFREZEO0lBQ0MsaUJBQUE7RUNJQTtFREZEO0lBQ0MsbUJBQUE7RUNJQTtBQUNGOztBREZBO0VBQ0MsYUFBQTtBQ0lEOztBRERDO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURIQztFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ01EOztBRExDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0RBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDT0Y7O0FETEE7RUFDQyxhQUFBO0FDUUQ7O0FETkE7RUFDQztJQUNDLFVBQUE7RUNTQTs7RURSRDtJQUNDLGVBQUE7RUNXQTtBQUNGOztBRFZBLGlCQUFBOztBQUVBO0VBQ0MsaUJBQUE7RUFDQSxhQUFBO0FDV0Q7O0FEVkM7RUFDQyxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLDhDQUFBO0FDWUY7O0FEWEU7RUFDQyxZQUFBO0FDYUg7O0FEWEEsV0FBQTs7QUFFQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDYUQ7O0FEWEE7RUFDQyxVQUFBO0FDY0Q7O0FESkM7RUFDQyxrQ0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQ09GOztBRE5FO0VBQ0Msd0JBQUE7RUFDQSxXQUFBO0FDUUg7O0FEUEU7RUFDQyx3QkFBQTtFQUNBLFdBQUE7QUNTSDs7QURSRTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1VIOztBRE5BO0VBQ0MsTUFBQTtFQUNBLE9BQUE7RUFDQSwwREFBQTtFQUdBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNPRDs7QUROQztFQUNDLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1FGOztBRFBFO0VBQ0Msb0NBQUE7QUNTSDs7QURKQTtFQUNDO0lBQ0MsVUFBQTtFQ09BO0FBQ0Y7O0FETkE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDUUQ7O0FEUEM7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFJDO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNDO0lBQ0MsYUFBQTtFQ1dBO0FBQ0Y7O0FEUkE7RUFDQyxhQUFBO0FDVUQiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9jb21wb25lbnRzL2dlbmVyYWwvbmF2L25hdi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlclxyXG5cdHRyYW5zaXRpb246IDFzXHJcblx0YmFja2dyb3VuZDogIzAwMTMxZFxyXG5cdGJvcmRlci10b3A6IDAuMmVtIHNvbGlkICMxZjFmMWZcclxuXHRvdmVyZmxvdzogaGlkZGVuXHJcblx0cG9zaXRpb246IGZpeGVkXHJcblx0d2lkdGg6IDEwMHZ3XHJcblx0dG9wOiAwXHJcblx0ei1pbmRleDogMTAwXHJcblxyXG4uaGVhZGVyLWhpZGVcclxuXHR0b3A6IC0xMGVtXHJcblxyXG4ubG9nb1xyXG5cdHotaW5kZXg6IDEwXHJcblx0cG9zaXRpb246IHJlbGF0aXZlXHJcblx0PiAubGVkXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGVcclxuXHRcdHRvcDogNDAlXHJcblx0XHRyaWdodDogMzAlXHJcblx0XHR3aWR0aDogLjJlbVxyXG5cdFx0aGVpZ2h0OiAuMmVtXHJcblx0XHRib3JkZXItcmFkaXVzOiAxZW1cclxuXHRcdGJhY2tncm91bmQ6ICM1NmZmNTZcclxuXHRcdGJhY2tncm91bmQ6IGJsdWVcclxuXHJcblx0XHR6LWluZGV4OiAyMDAwXHJcblx0XHR0b3A6IHZhcigtLXRvcClcclxuXHRcdGxlZnQ6IHZhcigtLWxlZnQpXHJcblx0XHRhbmltYXRpb24tbmFtZTogZXhhbXBsZVxyXG5cdFx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0c1xyXG5cdFx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGVcclxuXHJcbkBrZXlmcmFtZXMgZXhhbXBsZVxyXG5cdDAlXHJcblx0XHRiYWNrZ3JvdW5kOiAjMDNBOUY0XHJcblxyXG5cdDUwJVxyXG5cdFx0YmFja2dyb3VuZDogYmxhY2tcclxuXHJcblx0MTAwJVxyXG5cdFx0YmFja2dyb3VuZDogIzU2ZmY1NlxyXG5cclxuXHJcbi5wXHJcblx0ZGlzcGxheTogZmxleFxyXG5cclxuaGVhZGVyXHJcblx0LnBcclxuXHRcdHdpZHRoOiA5MCVcclxuXHRcdG1hcmdpbjogLjNlbSBhdXRvXHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmVcclxuXHRpbWdcclxuXHRcdGRpc3BsYXk6IGJsb2NrXHJcblx0XHR3aWR0aDogMTAwJVxyXG5cdFx0bWluLXdpZHRoOiAxOGVtXHJcblxyXG4uaGVhZGVyLXJpZ2h0XHJcblx0cG9zaXRpb246IGFic29sdXRlXHJcblx0ei1pbmRleDogMTJcclxuXHR3aWR0aDogNjAlXHJcblx0d2lkdGg6IDc1JVxyXG5cdG1pbi13aWR0aDogMTUwcHhcclxuXHRoZWlnaHQ6IDEwMHB4XHJcblx0cmlnaHQ6IDBcclxuXHR0b3A6IC4yZW1cclxuXHQmOmJlZm9yZVxyXG5cdFx0cG9zaXRpb246IGFic29sdXRlXHJcblx0XHR6LWluZGV4OiAtMVxyXG5cdFx0Y29udGVudDogdXJsKC9hc3NldHMvanMtY2xhbi9pbWcvaGVhZGVyL2hlYWRlci1jb2RlLnN2ZylcclxuXHRcdHJpZ2h0OiAwXHJcblx0XHR0b3A6IDBcclxuXHRcdHdpZHRoOiA2MCVcclxuXHRcdG9wYWNpdHk6IC4wNVxyXG5cclxuLmhlYWRlci1tb2JpbGVcclxuXHRoZWlnaHQ6IDEwMHZoXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KVxyXG5cdC5sb2dvXHJcblx0XHR3aWR0aDogODAlXHJcblx0aGVhZGVyIGltZ1xyXG5cdFx0bWluLXdpZHRoOiAxMDAlICAgIFxyXG5cclxuLyogXHJcblx0KipcdGxhbmd1YWdlc1xyXG4ubGFuZ3VhZ2VzXHJcblx0dGV4dC1hbGlnbjogcmlnaHRcclxuXHR6LWluZGV4OiAzMDAwXHJcblx0YVxyXG5cdFx0bWFyZ2luOiAwIC41ZW1cclxuXHRcdGJhY2tncm91bmQ6ICM0MDQwNDBcclxuXHRcdGJhY2tncm91bmQ6ICMyZTM3NDJcclxuXHRcdHBhZGRpbmc6IC4yNWVtIC41ZW1cclxuXHRcdGJvcmRlci1yYWRpdXM6IDFlbVxyXG5cdFx0Ym9yZGVyOiAjNTg1ODU4IHNvbGlkIDFweFxyXG5cdFx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMjVlbSAwLjQ1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpXHJcblx0XHRib3gtc2hhZG93OiAwIDAuMjVlbSAwLjQ1ZW0gcmdiYSgwLCAwLCAwLCAwLjIpXHJcblx0XHQmOmhvdmVyXHJcblx0XHRcdGNvbG9yOiB3aGl0ZVxyXG5cclxuLyogXHJcblx0KipcdG5hdlxyXG5uYXZcclxuXHRwb3NpdGlvbjogZml4ZWRcclxuXHRkaXNwbGF5OiBmbGV4XHJcblx0ZmxleC13cmFwOiB3cmFwXHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxyXG5cdGhlaWdodDogaW5oZXJpdFxyXG5cdG92ZXJmbG93OiBoaWRkZW5cclxuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzXHJcblx0cGFkZGluZy1yaWdodDogMWVtXHJcblx0aGVpZ2h0OiAzZW1cclxuXHR0b3A6IDEuOGVtXHJcblx0dG9wOiAyLjVlbVxyXG5cdHJpZ2h0OiA0JVxyXG5cdHdpZHRoOiA1NSVcclxuXHJcbi5uYXYtaGlkZVxyXG5cdHRvcDogLTE2ZW1cclxuXHJcbm5hdlxyXG5cdC8vICY6aG92ZXIgIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIE9QRU4gISEhXHJcblx0Ly8gXHRiYWNrZ3JvdW5kOiAjMDAxMzFkXHJcblx0Ly8gXHRwYWRkaW5nLXJpZ2h0OiAxZW1cclxuXHQvLyBcdHBhZGRpbmctYm90dG9tOiAuMjVlbVxyXG5cdC8vIFx0Ym9yZGVyLWJvdHRvbTogMC4yZW0gc29saWQgIzFmMWYxZlxyXG5cdC8vIFx0aGVpZ2h0OiAxMGVtXHJcblx0Ly8gXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzXHJcblx0YVxyXG5cdFx0bWFyZ2luOiAuMjVlbSAuMjVlbSAuMjVlbSAuNWVtXHJcblx0XHR3aWR0aDogZml0LWNvbnRlbnRcclxuXHRcdGJvcmRlci1yYWRpdXM6IC41ZW1cclxuXHRcdHBhZGRpbmc6IC41ZW1cclxuXHRcdCY6YmVmb3JlXHJcblx0XHRcdGNvbnRlbnQ6ICd7ICcgIWltcG9ydGFudFxyXG5cdFx0XHRjb2xvcjogZ3JheVxyXG5cdFx0JjphZnRlclxyXG5cdFx0XHRjb250ZW50OiAnIH0nICFpbXBvcnRhbnRcclxuXHRcdFx0Y29sb3I6IGdyYXlcclxuXHRcdCY6aG92ZXJcclxuXHRcdFx0Y29sb3I6ICNiMTJhMzRcclxuXHRcdFx0Y29sb3I6IHdoaXRlXHJcblx0XHRcdG9wYWNpdHk6IDFcclxuXHJcblxyXG5cclxuLm5hdi1tb2JpbGVcclxuXHR0b3A6IDBcclxuXHRsZWZ0OiAwXHJcblx0YmFja2dyb3VuZDogIzJkMmQyZCB1cmwoL2Fzc2V0cy9qcy1jbGFuL2ltZy9iZy5wbmcpIHJlcGVhdFxyXG5cdC8vIHBhZGRpbmctcmlnaHQ6IDFlbVxyXG5cdC8vIHBhZGRpbmctYm90dG9tOiAuMjVlbVxyXG5cdGJvcmRlci1ib3R0b206IDAuMmVtIHNvbGlkICMxZjFmMWZcclxuXHRoZWlnaHQ6IDIwZW1cclxuXHRwb3NpdGlvbjogZml4ZWRcclxuXHR3aWR0aDogMTAwdndcclxuXHRoZWlnaHQ6IDEwMHZoXHJcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMS41c1xyXG5cdHBhZGRpbmc6IDJlbSAxZW1cclxuXHRkaXNwbGF5OiBibG9ja1xyXG5cdHRleHQtYWxpZ246IGNlbnRlclxyXG5cdGFcclxuXHRcdHdpZHRoOiAxMDAlXHJcblx0XHRkaXNwbGF5OiBibG9ja1xyXG5cdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KVxyXG5cdFx0Y3Vyc29yOiBwb2ludGVyXHJcblx0XHRtYXJnaW46IDFlbSAwXHJcblx0XHQmOmhvdmVyXHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweClcclxuXHRuYXZcclxuXHRcdHRvcDogLTUwZW1cclxuXHJcbi5oYW1idXJnZXJcclxuXHR6LWluZGV4OiAxMDFcclxuXHRkaXNwbGF5OiBub25lXHJcblx0cG9zaXRpb246IGFic29sdXRlXHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG5cdGZvbnQtd2VpZ2h0OiA2MDBcclxuXHRmb250LXNpemU6IDJlbVxyXG5cdGJvcmRlci1yYWRpdXM6IC4yZW1cclxuXHRoZWlnaHQ6IGZpdC1jb250ZW50XHJcblx0cGFkZGluZzogLjM1ZW1cclxuXHR0b3A6IDFlbVxyXG5cdHRvcDogLjJlbVxyXG5cdHJpZ2h0OiAtLjVlbVxyXG5cdHRleHQtYWxpZ246IGNlbnRlclxyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpXHJcblx0aVxyXG5cdFx0aGVpZ2h0OiAuNGVtXHJcblx0XHRsaW5lLWhlaWdodDogLjI1ZW1cclxuXHRcdHdpZHRoOiAxLjNlbVxyXG5cdFx0Ym9yZGVyLXJhZGl1czogLjVlbVxyXG5cdFx0Zm9udC1zaXplOiAxLjVlbVxyXG5cdCY6aG92ZXJcclxuXHRcdGJhY2tncm91bmQ6IGJsYWNrXHJcblx0XHRiYWNrZ3JvdW5kOiAjYjEyYTM0XHJcblx0XHRjdXJzb3I6IHBvaW50ZXJcclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpXHJcblx0LmhhbWJ1cmdlclxyXG5cdFx0ZGlzcGxheTogZmxleFxyXG5cclxuXHJcblxyXG4uaGlkZVxyXG5cdGRpc3BsYXk6IG5vbmVcdFx0IiwiaGVhZGVyIHtcbiAgdHJhbnNpdGlvbjogMXM7XG4gIGJhY2tncm91bmQ6ICMwMDEzMWQ7XG4gIGJvcmRlci10b3A6IDAuMmVtIHNvbGlkICMxZjFmMWY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmhlYWRlci1oaWRlIHtcbiAgdG9wOiAtMTBlbTtcbn1cblxuLmxvZ28ge1xuICB6LWluZGV4OiAxMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ28gPiAubGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwJTtcbiAgcmlnaHQ6IDMwJTtcbiAgd2lkdGg6IDAuMmVtO1xuICBoZWlnaHQ6IDAuMmVtO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJhY2tncm91bmQ6ICM1NmZmNTY7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIHotaW5kZXg6IDIwMDA7XG4gIHRvcDogdmFyKC0tdG9wKTtcbiAgbGVmdDogdmFyKC0tbGVmdCk7XG4gIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICBhbmltYXRpb24tZHVyYXRpb246IDRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBleGFtcGxlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6ICMwM0E5RjQ7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kOiAjNTZmZjU2O1xuICB9XG59XG4ucCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmhlYWRlciAucCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMC4zZW0gYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaGVhZGVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxOGVtO1xufVxuXG4uaGVhZGVyLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMjtcbiAgd2lkdGg6IDYwJTtcbiAgd2lkdGg6IDc1JTtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMC4yZW07XG59XG4uaGVhZGVyLXJpZ2h0OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGNvbnRlbnQ6IHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2hlYWRlci9oZWFkZXItY29kZS5zdmcpO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogNjAlO1xuICBvcGFjaXR5OiAwLjA1O1xufVxuXG4uaGVhZGVyLW1vYmlsZSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICBoZWFkZXIgaW1nIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbi8qICoqXHRsYW5ndWFnZXMgKi9cbi5sYW5ndWFnZXMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgei1pbmRleDogMzAwMDtcbn1cbi5sYW5ndWFnZXMgYSB7XG4gIG1hcmdpbjogMCAwLjVlbTtcbiAgYmFja2dyb3VuZDogIzQwNDA0MDtcbiAgYmFja2dyb3VuZDogIzJlMzc0MjtcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIGJvcmRlcjogIzU4NTg1OCBzb2xpZCAxcHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjI1ZW0gMC40NWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNoYWRvdzogMCAwLjI1ZW0gMC40NWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5sYW5ndWFnZXMgYTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogKipcdG5hdiAqL1xubmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMS41cztcbiAgcGFkZGluZy1yaWdodDogMWVtO1xuICBoZWlnaHQ6IDNlbTtcbiAgdG9wOiAxLjhlbTtcbiAgdG9wOiAyLjVlbTtcbiAgcmlnaHQ6IDQlO1xuICB3aWR0aDogNTUlO1xufVxuXG4ubmF2LWhpZGUge1xuICB0b3A6IC0xNmVtO1xufVxuXG5uYXYgYSB7XG4gIG1hcmdpbjogMC4yNWVtIDAuMjVlbSAwLjI1ZW0gMC41ZW07XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxubmF2IGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJ7IFwiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBncmF5O1xufVxubmF2IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIiB9XCIgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyYXk7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjYjEyYTM0O1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5uYXYtbW9iaWxlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAjMmQyZDJkIHVybCgvYXNzZXRzL2pzLWNsYW4vaW1nL2JnLnBuZykgcmVwZWF0O1xuICBib3JkZXItYm90dG9tOiAwLjJlbSBzb2xpZCAjMWYxZjFmO1xuICBoZWlnaHQ6IDIwZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxLjVzO1xuICBwYWRkaW5nOiAyZW0gMWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm5hdi1tb2JpbGUgYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDFlbSAwO1xufVxuLm5hdi1tb2JpbGUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBuYXYge1xuICAgIHRvcDogLTUwZW07XG4gIH1cbn1cbi5oYW1idXJnZXIge1xuICB6LWluZGV4OiAxMDE7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBwYWRkaW5nOiAwLjM1ZW07XG4gIHRvcDogMWVtO1xuICB0b3A6IDAuMmVtO1xuICByaWdodDogLTAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xufVxuLmhhbWJ1cmdlciBpIHtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgbGluZS1oZWlnaHQ6IDAuMjVlbTtcbiAgd2lkdGg6IDEuM2VtO1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5oYW1idXJnZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgYmFja2dyb3VuZDogI2IxMmEzNDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/components/general/nav/nav.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
        var w = window;
        //
        // dev signal
        //
        // if (location.origin = "http://localhost") {
        // 	document.querySelector('.logo').style.background = '#673ab761'
        // }
        //
        // My
        //
        const nav = document.querySelector('nav');
        const header = document.querySelector('header');
        const hamburger = document.querySelector('.hamburger');
        hamburger.addEventListener('click', hamburgerClick);
        nav.addEventListener('click', navClick);
        function hamburgerClick(e) {
            nav.classList.add('nav-mobile');
            hamburger.classList.add('hide');
            // nav.classList.add('nav-mobile-fix');
            header.classList.add('header-mobile');
        }
        function navClick() {
            hamburger.classList.remove('hide');
            nav.classList.remove('nav-mobile');
            header.classList.remove('header-mobile');
        }
        // $("main").click(function () {
        // 	log("Handler for .click() called.---MAIN");
        // });
        nav.addEventListener('mouseover', navHover);
        function navHover(e) {
            console.log(e);
        }
        //
        // Scroll
        //
        window.onscroll = scrollBehavior;
        w.skroll = 0;
        //
        // (f) - scrollBehavior
        //
        function scrollBehavior(e) {
            //
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            // Up or Down
            if (scrolled > w.skroll)
                scrollDown(scrolled);
            else
                scrollUp(scrolled);
            //
            w.skroll = scrolled;
        }
        //
        // (f) - scrollDown
        //
        function scrollDown(scrolled) {
            if (scrolled < 100)
                return;
            header.classList.add('header-hide');
            nav.classList.add('nav-hide');
            // header.style.top = '-8em';
            // nav.style.top = '-8em'
        }
        //
        // (f) - scrollUp
        //
        function scrollUp(scrolled) {
            // header.style.top = '0px';
            header.classList.remove('header-hide');
            nav.classList.remove('nav-hide');
            // nav.style.top = '1.8em'
        }
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/components/general/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.sass */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.sass")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/js-clan-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/@modules/@js-clan/js-clan-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: JsClanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsClanRoutingModule", function() { return JsClanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@js-clan/pages/main/main.component.ts");
/* harmony import */ var _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/lessons/lessons.component */ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts");
/* harmony import */ var _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/lesson/lesson.component */ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@js-clan/pages/p404/p404.component.ts");
/* harmony import */ var _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/want-more-lessons/want-more-lessons.component */ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts");
/* harmony import */ var _pages_members_members_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/members/members.component */ "./src/app/@modules/@js-clan/pages/members/members.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/@modules/@js-clan/pages/students/students.component.ts");
/* harmony import */ var _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/training-apparatus/training-apparatus.component */ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts");
/* harmony import */ var _pages_health_health_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/health/health.component */ "./src/app/@modules/@js-clan/pages/health/health.component.ts");
/* harmony import */ var _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/sources/video-samples/video-samples.component */ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts");
/* harmony import */ var _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/sources/free-sounds/free-sounds.component */ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts");
/* harmony import */ var _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/cabinet/cabinet.component */ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts");



// Pages












const routes = [
    // { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'lessons', component: _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_4__["LessonsComponent"] },
    { path: 'lesson/:name', component: _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_5__["LessonComponent"] },
    { path: 'want-more-lessons', component: _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_7__["WantMoreLessonsComponent"] },
    { path: 'members', component: _pages_members_members_component__WEBPACK_IMPORTED_MODULE_8__["MembersComponent"] },
    { path: 'students', component: _pages_students_students_component__WEBPACK_IMPORTED_MODULE_9__["StudentsComponent"] },
    { path: 'training-apparatus', component: _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_10__["TrainingApparatusComponent"] },
    { path: 'health', component: _pages_health_health_component__WEBPACK_IMPORTED_MODULE_11__["HealthComponent"] },
    { path: 'video-samples', component: _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_12__["VideoSamplesComponent"] },
    { path: 'free-sounds', component: _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_13__["FreeSoundsComponent"] },
    { path: 'cabinet', component: _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_14__["CabinetComponent"] },
    { path: 'p404', component: _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_6__["P404Component"] },
];
let JsClanRoutingModule = class JsClanRoutingModule {
};
JsClanRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], JsClanRoutingModule);

// const routes: Routes = [
// { path: 'about-us', component: AboutUsComponent },
// { path: 'engineer/:name', component: EngineerComponent },
// { path: 'auth', component: AuthComponent },
// { path: 'admin', component:  AdminComponent},
// ];


/***/ }),

/***/ "./src/app/@modules/@js-clan/js-clan.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/@modules/@js-clan/js-clan.module.ts ***!
  \*****************************************************/
/*! exports provided: JsClanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsClanModule", function() { return JsClanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js-clan-routing.module */ "./src/app/@modules/@js-clan/js-clan-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@modules/@common-dependencies/@common-dependencies.module */ "./src/app/@modules/@common-dependencies/@common-dependencies.module.ts");
/* harmony import */ var _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/nav/nav.component */ "./src/app/@modules/@js-clan/components/general/nav/nav.component.ts");
/* harmony import */ var _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/clan-footer/clan-footer.component */ "./src/app/@modules/@js-clan/components/general/clan-footer/clan-footer.component.ts");
/* harmony import */ var _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/flip-card/flip-card.component */ "./src/app/@modules/@js-clan/components/flip-card/flip-card.component.ts");
/* harmony import */ var _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/flip-card-video/flip-card-video.component */ "./src/app/@modules/@js-clan/components/flip-card-video/flip-card-video.component.ts");
/* harmony import */ var _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/lessons/lessons.component */ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts");
/* harmony import */ var _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/lesson/lesson.component */ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/@modules/@js-clan/pages/main/main.component.ts");
/* harmony import */ var _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/p404/p404.component */ "./src/app/@modules/@js-clan/pages/p404/p404.component.ts");
/* harmony import */ var _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/want-more-lessons/want-more-lessons.component */ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts");
/* harmony import */ var _pages_members_members_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/members/members.component */ "./src/app/@modules/@js-clan/pages/members/members.component.ts");
/* harmony import */ var _pages_students_students_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/students/students.component */ "./src/app/@modules/@js-clan/pages/students/students.component.ts");
/* harmony import */ var _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/training-apparatus/training-apparatus.component */ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts");
/* harmony import */ var _pages_health_health_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/health/health.component */ "./src/app/@modules/@js-clan/pages/health/health.component.ts");
/* harmony import */ var _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/sources/video-samples/video-samples.component */ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts");
/* harmony import */ var _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/sources/free-sounds/free-sounds.component */ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts");
/* harmony import */ var _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/cabinet/cabinet.component */ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts");






// Other modules

// Components




// Pages












let JsClanModule = class JsClanModule {
};
JsClanModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_lessons_lessons_component__WEBPACK_IMPORTED_MODULE_11__["LessonsComponent"],
            _pages_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
            _pages_p404_p404_component__WEBPACK_IMPORTED_MODULE_14__["P404Component"],
            _components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__["ClanFooterComponent"], _pages_lesson_lesson_component__WEBPACK_IMPORTED_MODULE_12__["LessonComponent"], _pages_want_more_lessons_want_more_lessons_component__WEBPACK_IMPORTED_MODULE_15__["WantMoreLessonsComponent"], _pages_members_members_component__WEBPACK_IMPORTED_MODULE_16__["MembersComponent"], _pages_students_students_component__WEBPACK_IMPORTED_MODULE_17__["StudentsComponent"], _pages_training_apparatus_training_apparatus_component__WEBPACK_IMPORTED_MODULE_18__["TrainingApparatusComponent"], _pages_health_health_component__WEBPACK_IMPORTED_MODULE_19__["HealthComponent"], _components_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_9__["FlipCardComponent"], _components_flip_card_video_flip_card_video_component__WEBPACK_IMPORTED_MODULE_10__["FlipCardVideoComponent"], _pages_sources_video_samples_video_samples_component__WEBPACK_IMPORTED_MODULE_20__["VideoSamplesComponent"], _pages_sources_free_sounds_free_sounds_component__WEBPACK_IMPORTED_MODULE_21__["FreeSoundsComponent"], _pages_cabinet_cabinet_component__WEBPACK_IMPORTED_MODULE_22__["CabinetComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _js_clan_routing_module__WEBPACK_IMPORTED_MODULE_4__["JsClanRoutingModule"],
            _modules_common_dependencies_common_dependencies_module__WEBPACK_IMPORTED_MODULE_6__["CommonDependenciesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ],
        exports: [_components_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _components_general_clan_footer_clan_footer_component__WEBPACK_IMPORTED_MODULE_8__["ClanFooterComponent"]]
    })
], JsClanModule);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2NhYmluZXQvY2FiaW5ldC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.ts ***!
  \**********************************************************************/
/*! exports provided: CabinetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabinetComponent", function() { return CabinetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CabinetComponent = class CabinetComponent {
    constructor() { }
    ngOnInit() {
    }
};
CabinetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabinet',
        template: __webpack_require__(/*! raw-loader!./cabinet.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.html"),
        styles: [__webpack_require__(/*! ./cabinet.component.sass */ "./src/app/@modules/@js-clan/pages/cabinet/cabinet.component.sass")]
    })
], CabinetComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/health/health.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/health/health.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PS {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvaGVhbHRoL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxoZWFsdGhcXGhlYWx0aC5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvaGVhbHRoL2hlYWx0aC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL2hlYWx0aC9oZWFsdGguY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUFNcclxuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyIiwiLlBTIHtcbiAgbWFyZ2luOiAxZW0gYXV0byAyZW0gYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/health/health.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/health/health.component.ts ***!
  \********************************************************************/
/*! exports provided: HealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthComponent", function() { return HealthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");



let HealthComponent = class HealthComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
        this.st.cards = [
            {
                number: "0",
                name: "Вправа для поясниці",
                video: "-RjXS5aH3Hk",
                // img: "assets/js-clan/img/lessons/0.jpg",
                // title: {
                //   en: "",
                //   ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
                // },
                description: {
                    ua: "Вправа для поясниці"
                },
                text: {
                    en: "text",
                    ua: "При сидячій роботі розвивається викривлення в районі поясниці. Ця вправа допомагає виправити цей момент."
                }
            },
            {
                number: "1",
                name: "Вправа для поясниці",
                video: "PMqLSUT8LhE",
                // img: "assets/js-clan/img/lessons/0.jpg",
                // title: {
                //   en: "",
                //   ua: "Это Упражнение Убивает Твою Поясницу(Замени Его)"
                // },
                description: {
                    ua: "Вправа для поясниці"
                },
                text: {
                    en: "text",
                    ua: "При сидячій роботі розвивається викривлення в районі поясниці. Ця вправа допомагає виправити цей момент."
                }
            },
        ];
    }
};
HealthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health',
        template: __webpack_require__(/*! raw-loader!./health.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/health/health.component.html"),
        styles: [__webpack_require__(/*! ./health.component.sass */ "./src/app/@modules/@js-clan/pages/health/health.component.sass")]
    })
], HealthComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/lesson/lesson.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n  width: 100%;\n  height: 460px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29uL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxsZXNzb25cXGxlc3Nvbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29uL2xlc3Nvbi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9sZXNzb24vbGVzc29uLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaWZyYW1lXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiA0NjBweCIsImlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ2MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/lesson/lesson.component.ts ***!
  \********************************************************************/
/*! exports provided: LessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");
/* harmony import */ var _my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let LessonComponent = class LessonComponent {
    constructor(route, api, sanitizer) {
        this.route = route;
        this.api = api;
        this.sanitizer = sanitizer;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_3__["default"];
        this.url = "https://www.youtube.com/embed/";
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                // 1
                let lessonName = this.route.snapshot.paramMap.get('name');
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])(lessonName);
                // log(state)
                // 2
                this.st.cards = yield this.api.getJson('/js-clan/data/lessons.json');
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])(this.st.cards);
                //3
                this.st.currentCard = this.st.cards.filter(card => card.name == lessonName)[0];
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])(this.st.currentCard);
                //4
                this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url + this.st.currentCard.video);
            }
            catch (error) {
                Object(_my_modules_stuff__WEBPACK_IMPORTED_MODULE_4__["log"])(error);
            }
        });
    }
};
LessonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
LessonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lesson',
        template: __webpack_require__(/*! raw-loader!./lesson.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/lesson/lesson.component.html"),
        styles: [__webpack_require__(/*! ./lesson.component.sass */ "./src/app/@modules/@js-clan/pages/lesson/lesson.component.sass")]
    })
], LessonComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/lessons/lessons.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PS {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcbGVzc29uc1xcbGVzc29ucy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbGVzc29ucy9sZXNzb25zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLlBTXHJcbiAgbWFyZ2luOiAxZW0gYXV0byAyZW0gYXV0b1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciIsIi5QUyB7XG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/lessons/lessons.component.ts ***!
  \**********************************************************************/
/*! exports provided: LessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonsComponent", function() { return LessonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var _services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api-js-clan.service */ "./src/app/@modules/@js-clan/services/api-js-clan.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");







let LessonsComponent = class LessonsComponent {
    constructor(api, _api, router) {
        this.api = api;
        this._api = _api;
        this.router = router;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_6__["default"];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.st.cards = yield this.api.getJson('/js-clan/data/lessons.json');
                console.log(this.st.cards);
            }
            catch (error) {
                console.log(error);
            }
            // for (let i = 0; i < 10; i++) {
            //   this.st.cards.push(this.st.cards[0])
            // }
        });
    }
    wantMoreLessons() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // this.router.navigate(['/want-more-lessons']);
            const r = yield this._api.voteForLessons();
            (r.ok) ?
                this.msgVoteOk() :
                this.msgVoteBad();
            Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_5__["log"])(r);
        });
    }
    msgVoteOk() {
        this.st.alert.title = ':)';
        this.st.alert.body = 'Your vote counted';
        this.st.alert.show = true;
    }
    msgVoteBad() {
        this.st.alert.title = ':(';
        this.st.alert.body = 'Something wrong';
        this.st.alert.show = true;
    }
};
LessonsComponent.ctorParameters = () => [
    { type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_api_js_clan_service__WEBPACK_IMPORTED_MODULE_3__["ApiJsClanService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LessonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lessons',
        template: __webpack_require__(/*! raw-loader!./lessons.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/lessons/lessons.component.html"),
        styles: [__webpack_require__(/*! ./lessons.component.sass */ "./src/app/@modules/@js-clan/pages/lessons/lessons.component.sass")]
    })
], LessonsComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/main/main.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/main/main.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/main/main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/main/main.component.ts ***!
  \****************************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");



let MainComponent = class MainComponent {
    constructor() {
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    ngOnInit() {
    }
};
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.sass */ "./src/app/@modules/@js-clan/pages/main/main.component.sass")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/member.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/member.service.ts ***!
  \*******************************************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _members__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./members */ "./src/app/@modules/@js-clan/pages/members/members.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
function sort(members, column, direction) {
    if (direction === '') {
        return members;
    }
    else {
        return [...members].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === 'asc' ? res : -res;
        });
    }
}
function matches(member, term, pipe) {
    return member.name.toLowerCase().includes(term.toLowerCase())
        || pipe.transform(member.carma).includes(term)
        || pipe.transform(member.level).includes(term);
}
let MemberService = class MemberService {
    constructor(pipe) {
        this.pipe = pipe;
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._members$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: '',
            sortColumn: '',
            sortDirection: ''
        };
        this._search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._loading$.next(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this._search()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this._loading$.next(false))).subscribe(result => {
            this._members$.next(result.members);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    get members$() { return this._members$.asObservable(); }
    get total$() { return this._total$.asObservable(); }
    get loading$() { return this._loading$.asObservable(); }
    get page() { return this._state.page; }
    get pageSize() { return this._state.pageSize; }
    get searchTerm() { return this._state.searchTerm; }
    set page(page) { this._set({ page }); }
    set pageSize(pageSize) { this._set({ pageSize }); }
    set searchTerm(searchTerm) { this._set({ searchTerm }); }
    set sortColumn(sortColumn) { this._set({ sortColumn }); }
    set sortDirection(sortDirection) { this._set({ sortDirection }); }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let members = sort(_members__WEBPACK_IMPORTED_MODULE_3__["MEMBERS"], sortColumn, sortDirection);
        // 2. filter
        members = members.filter(member => matches(member, searchTerm, this.pipe));
        const total = members.length;
        // 3. paginate
        members = members.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ members, total });
    }
};
MemberService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"] }
];
MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MemberService);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/members.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/members.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".PS {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n\n.table-form {\n  width: 100%;\n}\n\ntd {\n  vertical-align: middle;\n}\n\n.search {\n  background: #0000;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.mdi-account-search {\n  font-size: 2em;\n  color: #df691a;\n}\n\n.mdi-github-circle, .mdi-linkedin-box, .mdi-instagram {\n  font-size: 2em;\n  cursor: pointer;\n  margin-right: 0.5em;\n}\n\n.mdi-github-circle:hover, .mdi-linkedin-box:hover, .mdi-instagram:hover {\n  opacity: 0.7;\n}\n\n.custom-select {\n  background-color: #818a8f;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbWVtYmVycy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcbWVtYmVyc1xcbWVtYmVycy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvbWVtYmVycy9tZW1iZXJzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREFBO0VBQ0ksc0JBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDR0o7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREhJO0VBQ0ksWUFBQTtBQ0tSOztBREhBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUFNcclxuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBcclxuICAgIFxyXG4udGFibGUtZm9ybVxyXG4gICAgd2lkdGg6IDEwMCVcclxudGRcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuXHJcblxyXG4uc2VhcmNoXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMFxyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjE1KVxyXG5cclxuLm1kaS1hY2NvdW50LXNlYXJjaFxyXG4gICAgZm9udC1zaXplOiAyZW1cclxuICAgIGNvbG9yOiAjZGY2OTFhXHJcblxyXG4ubWRpLWdpdGh1Yi1jaXJjbGUsIC5tZGktbGlua2VkaW4tYm94LCAubWRpLWluc3RhZ3JhbVxyXG4gICAgZm9udC1zaXplOiAyZW1cclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtXHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICAgb3BhY2l0eTogLjdcclxuXHJcbi5jdXN0b20tc2VsZWN0XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE4YThmXHJcbiAgICBjb2xvcjogYmxhY2siLCIuUFMge1xuICBtYXJnaW46IDFlbSBhdXRvIDJlbSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJsZS1mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNlYXJjaCB7XG4gIGJhY2tncm91bmQ6ICMwMDAwO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5tZGktYWNjb3VudC1zZWFyY2gge1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNkZjY5MWE7XG59XG5cbi5tZGktZ2l0aHViLWNpcmNsZSwgLm1kaS1saW5rZWRpbi1ib3gsIC5tZGktaW5zdGFncmFtIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cbi5tZGktZ2l0aHViLWNpcmNsZTpob3ZlciwgLm1kaS1saW5rZWRpbi1ib3g6aG92ZXIsIC5tZGktaW5zdGFncmFtOmhvdmVyIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uY3VzdG9tLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MThhOGY7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/members.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/members.component.ts ***!
  \**********************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member.service */ "./src/app/@modules/@js-clan/pages/members/member.service.ts");
/* harmony import */ var _sortable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sortable.directive */ "./src/app/@modules/@js-clan/pages/members/sortable.directive.ts");






let MembersComponent = class MembersComponent {
    constructor(service) {
        this.service = service;
        this.members$ = service.members$;
        this.total$ = service.total$;
    }
    ngOnInit() {
    }
    onSort({ column, direction }) {
        // resetting other headers
        this.headers.forEach(header => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
    }
};
MembersComponent.ctorParameters = () => [
    { type: _member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_sortable_directive__WEBPACK_IMPORTED_MODULE_4__["NgbdSortableHeader"])
], MembersComponent.prototype, "headers", void 0);
MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-members',
        template: __webpack_require__(/*! raw-loader!./members.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/members/members.component.html"),
        providers: [_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
        styles: [__webpack_require__(/*! ./members.component.sass */ "./src/app/@modules/@js-clan/pages/members/members.component.sass")]
    })
], MembersComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/members.ts":
/*!************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/members.ts ***!
  \************************************************************/
/*! exports provided: MEMBERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBERS", function() { return MEMBERS; });
const MEMBERS = [
    {
        id: 1,
        name: 'Vitaliy Dyachuk',
        img: 'https://avatars3.githubusercontent.com/u/16016599?s=460&v=4',
        status: 'CLAN-leader, super-mentor',
        carma: 1000,
        level: 0,
        github: 'https://github.com/SpiritUrban',
        linkedin: 'https://www.linkedin.com/in/vitaly-dyachuk-8ba18a54/',
        instagram: 'https://www.instagram.com/shadespiritenator/'
    },
    {
        id: 2,
        name: 'Roman Peredrii',
        img: 'https://avatars0.githubusercontent.com/u/42037680?s=460&v=4',
        status: 'student, mentor',
        carma: 100,
        level: 0,
        github: 'https://github.com/RomanPeredrii',
        linkedin: '',
        instagram: ''
    },
    {
        id: 3,
        name: 'Vladyslav Piatyhor',
        img: 'https://avatars1.githubusercontent.com/u/29441499?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/5Mountains',
        linkedin: '',
        instagram: ''
    },
    {
        id: 4,
        name: 'Taras Ostasha',
        img: 'https://avatars3.githubusercontent.com/u/19312196?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/TarasOstasha',
        linkedin: '',
        instagram: ''
    },
    {
        id: 5,
        name: 'Vlad Buryak',
        img: 'assets/img/base/icons/avatars/batman.svg',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/VladGodOfJS',
        linkedin: '',
        instagram: ''
    },
    {
        id: 6,
        name: 'Oksana Soroka',
        img: 'assets/img/base/icons/avatars/woman.svg',
        status: 'student',
        carma: 100,
        level: 0,
        github: '',
        linkedin: 'http://linkedin.com/in/oksana-soroka-45282919a',
        instagram: 'https://www.instagram.com/ksu_mid/'
    },
    {
        id: 7,
        name: 'Kolya (Toto)',
        img: 'https://avatars3.githubusercontent.com/u/33295757?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/Mooninghnk',
        linkedin: '',
        instagram: ''
    },
    {
        id: 8,
        name: 'Sergiy Semeguk',
        img: 'https://avatars2.githubusercontent.com/u/45179731?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/semeguk',
        linkedin: '',
        instagram: ''
    },
    {
        id: 9,
        name: 'Dima Semeguk',
        img: 'https://avatars1.githubusercontent.com/u/51905745?s=460&v=4',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/dimasemehuk7',
        linkedin: '',
        instagram: ''
    },
    {
        id: 10,
        name: 'Dima Martinovich',
        img: 'assets/img/base/icons/avatars/batman.svg',
        status: 'student',
        carma: 100,
        level: 0,
        github: 'https://github.com/marpusik',
        linkedin: 'https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BC%D0%B0-%D0%BC%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87-0881a5196/',
        instagram: ''
    }
];


/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/members/sortable.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/members/sortable.directive.ts ***!
  \***********************************************************************/
/*! exports provided: NgbdSortableHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdSortableHeader", function() { return NgbdSortableHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const rotate = { 'asc': 'desc', 'desc': '', '': 'asc' };
let NgbdSortableHeader = class NgbdSortableHeader {
    constructor() {
        this.direction = '';
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgbdSortableHeader.prototype, "sortable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NgbdSortableHeader.prototype, "direction", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NgbdSortableHeader.prototype, "sort", void 0);
NgbdSortableHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'th[sortable]',
        host: {
            '[class.asc]': 'direction === "asc"',
            '[class.desc]': 'direction === "desc"',
            '(click)': 'rotate()'
        }
    })
], NgbdSortableHeader);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/p404/p404.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/p404/p404.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3A0MDQvcDQwNC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/p404/p404.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/p404/p404.component.ts ***!
  \****************************************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let P404Component = class P404Component {
    constructor() { }
    ngOnInit() {
    }
};
P404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-p404',
        template: __webpack_require__(/*! raw-loader!./p404.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/p404/p404.component.html"),
        styles: [__webpack_require__(/*! ./p404.component.sass */ "./src/app/@modules/@js-clan/pages/p404/p404.component.sass")]
    })
], P404Component);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.sass":
/*!****************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.sass ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 20em;\n}\n\n.one {\n  display: inline-block;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy9mcmVlLXNvdW5kcy9EOlxccHJvamVjdHMyXFxDaHVnYXlzdGVyXFxmcm9udC9zcmNcXGFwcFxcQG1vZHVsZXNcXEBqcy1jbGFuXFxwYWdlc1xcc291cmNlc1xcZnJlZS1zb3VuZHNcXGZyZWUtc291bmRzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9zb3VyY2VzL2ZyZWUtc291bmRzL2ZyZWUtc291bmRzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9zb3VyY2VzL2ZyZWUtc291bmRzL2ZyZWUtc291bmRzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIFxyXG4gICAgbWF4LXdpZHRoOiAyMGVtXHJcblxyXG4ub25lXHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2tcclxuICAgIG1hcmdpbjogMWVtIiwiaW1nIHtcbiAgbWF4LXdpZHRoOiAyMGVtO1xufVxuXG4ub25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FreeSoundsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeSoundsComponent", function() { return FreeSoundsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FreeSoundsComponent = class FreeSoundsComponent {
    constructor() {
        this.place = 'assets/js-clan/img/sources/free-sounds/';
        this.list = [
            {
                link: 'https://freesound.org/',
                img: this.place + 'freesound.jpg',
                description: 'freesound.org'
            },
            {
                link: 'https://www.zapsplat.com/sound-effect-category/carts-and-trolleys/',
                img: this.place + 'ZapSplat.jpg',
                description: 'ZapSplat.com'
            },
            {
                link: 'https://ru.audiomicro.com/besplatno-zvukovie-effekti/svobodnoy-industrialnoy-i-oborudovanie',
                img: this.place + 'audiomicro.jpg',
                description: 'ru.audiomicro.com'
            },
            {
                link: 'https://www.musicradar.com/news/sampleradar-244-free-big-impact-samples',
                img: this.place + 'musicradar.jpg',
                description: 'musicradar.com'
            },
            {
                link: 'https://www.looperman.com/loops/tags/royalty-free-sound-effect-loops-samples-sounds-wavs-download',
                img: this.place + 'looperman.jpg',
                description: 'looperman.com'
            },
            {
                link: 'https://www.producerloops.com/download-royalty-free-loops-and-samples/index3.html?a=1&sort=add_date&sort_direction=1',
                img: this.place + 'producerloops.jpg',
                description: 'producerloops.com'
            },
            {
                link: 'https://soundcloud.com/search?q=Creative%20Commons%20drum',
                img: this.place + 'soundcloud.jpg',
                description: 'soundcloud.com | Creative Commons'
            },
        ];
    }
    ngOnInit() {
    }
};
FreeSoundsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-free-sounds',
        template: __webpack_require__(/*! raw-loader!./free-sounds.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.html"),
        styles: [__webpack_require__(/*! ./free-sounds.component.sass */ "./src/app/@modules/@js-clan/pages/sources/free-sounds/free-sounds.component.sass")]
    })
], FreeSoundsComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.sass":
/*!********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.sass ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  max-width: 20em;\n}\n\n.one {\n  display: inline-block;\n  margin: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy92aWRlby1zYW1wbGVzL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFxzb3VyY2VzXFx2aWRlby1zYW1wbGVzXFx2aWRlby1zYW1wbGVzLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy9zb3VyY2VzL3ZpZGVvLXNhbXBsZXMvdmlkZW8tc2FtcGxlcy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvc291cmNlcy92aWRlby1zYW1wbGVzL3ZpZGVvLXNhbXBsZXMuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcgXHJcbiAgICBtYXgtd2lkdGg6IDIwZW1cclxuXHJcbi5vbmVcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG4gICAgbWFyZ2luOiAxZW0iLCJpbWcge1xuICBtYXgtd2lkdGg6IDIwZW07XG59XG5cbi5vbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VideoSamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSamplesComponent", function() { return VideoSamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VideoSamplesComponent = class VideoSamplesComponent {
    constructor() {
        this.place = 'assets/js-clan/img/sources/video-samples/';
        this.list = [
            {
                link: 'https://pixabay.com/videos/search/?pagi=4',
                img: this.place + 'pixabay.jpg',
                description: 'pixabay.com'
            },
            {
                link: 'https://www.videvo.net/free-stock-footage/sort/popular/',
                img: this.place + 'videvo.jpg',
                description: 'videvo.net'
            },
            {
                link: 'https://www.pexels.com/search/videos/tech/',
                img: this.place + 'pexels.jpg',
                description: 'pexels.com'
            },
        ];
    }
    ngOnInit() {
    }
};
VideoSamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-video-samples',
        template: __webpack_require__(/*! raw-loader!./video-samples.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.html"),
        styles: [__webpack_require__(/*! ./video-samples.component.sass */ "./src/app/@modules/@js-clan/pages/sources/video-samples/video-samples.component.sass")]
    })
], VideoSamplesComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/students/students.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/students/students.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3N0dWRlbnRzL3N0dWRlbnRzLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/students/students.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/students/students.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsComponent", function() { return StudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudentsComponent = class StudentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-students',
        template: __webpack_require__(/*! raw-loader!./students.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/students/students.component.html"),
        styles: [__webpack_require__(/*! ./students.component.sass */ "./src/app/@modules/@js-clan/pages/students/students.component.sass")]
    })
], StudentsComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.sass":
/*!**********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.sass ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 6em;\n}\n\n.btn, p {\n  margin: 1em;\n}\n\n.block-1 {\n  text-align: center;\n  padding-bottom: 0;\n}\n\n.big {\n  font-size: 5em;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFx0cmFpbmluZy1hcHBhcmF0dXNcXHRyYWluaW5nLWFwcGFyYXR1cy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL3RyYWluaW5nLWFwcGFyYXR1cy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvdHJhaW5pbmctYXBwYXJhdHVzL3RyYWluaW5nLWFwcGFyYXR1cy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG1haW5cclxuLmNvbnRhaW5lclxyXG4gIG1hcmdpbi10b3A6IDZlbSAvLyAhISEgZHVwbGljYXRlIGluIG1hbnkgcGFnZXNcclxuXHJcbi8vIHJhd1xyXG4uYnRuLCBwXHJcbiAgICBtYXJnaW46IDFlbVxyXG4uYmxvY2stMVxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMFxyXG5cclxuLmJpZ1xyXG4gICAgZm9udC1zaXplOiA1ZW1cclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4iLCIuY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogNmVtO1xufVxuXG4uYnRuLCBwIHtcbiAgbWFyZ2luOiAxZW07XG59XG5cbi5ibG9jay0xIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJpZyB7XG4gIGZvbnQtc2l6ZTogNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TrainingApparatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingApparatusComponent", function() { return TrainingApparatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@common-dependencies/services/api.service */ "./src/app/@modules/@common-dependencies/services/api.service.ts");
/* harmony import */ var src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/my_modules/stuff */ "./src/app/my_modules/stuff.ts");
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../app-state */ "./src/app/app-state.ts");





let TrainingApparatusComponent = class TrainingApparatusComponent {
    constructor(api) {
        this.api = api;
        this.st = _app_state__WEBPACK_IMPORTED_MODULE_4__["default"];
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.st.cards = yield this.api.getJson('/js-clan/data/training-apparatus.json');
                console.log(this.st.cards);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    play() {
        Object(src_app_my_modules_stuff__WEBPACK_IMPORTED_MODULE_3__["log"])('Play');
    }
};
TrainingApparatusComponent.ctorParameters = () => [
    { type: _common_dependencies_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
TrainingApparatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-apparatus',
        template: __webpack_require__(/*! raw-loader!./training-apparatus.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.html"),
        styles: [__webpack_require__(/*! ./training-apparatus.component.sass */ "./src/app/@modules/@js-clan/pages/training-apparatus/training-apparatus.component.sass")]
    })
], TrainingApparatusComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.sass":
/*!********************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.sass ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.container {\n  margin-top: 6em;\n}\n.с {\n  margin: 1em auto 2em auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQG1vZHVsZXMvQGpzLWNsYW4vcGFnZXMvd2FudC1tb3JlLWxlc3NvbnMvd2FudC1tb3JlLWxlc3NvbnMuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL0Btb2R1bGVzL0Bqcy1jbGFuL3BhZ2VzL3dhbnQtbW9yZS1sZXNzb25zL0Q6XFxwcm9qZWN0czJcXENodWdheXN0ZXJcXGZyb250L3NyY1xcYXBwXFxAbW9kdWxlc1xcQGpzLWNsYW5cXHBhZ2VzXFx3YW50LW1vcmUtbGVzc29uc1xcd2FudC1tb3JlLWxlc3NvbnMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsZUFBQTtBREVGO0FDREE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FESUYiLCJmaWxlIjoic3JjL2FwcC9AbW9kdWxlcy9AanMtY2xhbi9wYWdlcy93YW50LW1vcmUtbGVzc29ucy93YW50LW1vcmUtbGVzc29ucy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA2ZW07XG59XG5cbi7RgSB7XG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuY29udGFpbmVyXHJcbiAgbWFyZ2luLXRvcDogNmVtXHJcbi7RgVxyXG4gIG1hcmdpbjogMWVtIGF1dG8gMmVtIGF1dG9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIFxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WantMoreLessonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WantMoreLessonsComponent", function() { return WantMoreLessonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WantMoreLessonsComponent = class WantMoreLessonsComponent {
    constructor() { }
    ngOnInit() {
    }
};
WantMoreLessonsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-want-more-lessons',
        template: __webpack_require__(/*! raw-loader!./want-more-lessons.component.html */ "./node_modules/raw-loader/index.js!./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.html"),
        styles: [__webpack_require__(/*! ./want-more-lessons.component.sass */ "./src/app/@modules/@js-clan/pages/want-more-lessons/want-more-lessons.component.sass")]
    })
], WantMoreLessonsComponent);



/***/ }),

/***/ "./src/app/@modules/@js-clan/services/api-js-clan.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/@modules/@js-clan/services/api-js-clan.service.ts ***!
  \*******************************************************************/
/*! exports provided: ApiJsClanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiJsClanService", function() { return ApiJsClanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
const back = '.'; // 'http://localhost'
let ApiJsClanService = class ApiJsClanService {
    constructor(http) {
        this.http = http;
        this.voteForLessons = () => this.http.get(back + '/vote-for-lessons').toPromise();
    }
};
ApiJsClanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiJsClanService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiJsClanService);



/***/ })

}]);
//# sourceMappingURL=default~modules-authentication-authentication-module~modules-js-clan-js-clan-module-es2015.js.map