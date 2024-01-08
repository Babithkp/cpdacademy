(self.webpackChunkalison_mfe = self.webpackChunkalison_mfe || []).push([
    ["main"], {
        4510: (N, E, n) => {
            "use strict";
            n.d(E, {
                C: () => Y
            });
            var s = n(8071),
                l = n(3252),
                t = n(3839),
                g = n(4980),
                M = n(6290),
                e = n(553),
                b = n(3246),
                x = n(9736),
                m = n(6360),
                P = n(2389),
                k = n(9912),
                y = n(3424),
                I = n(8949),
                w = n(8540),
                T = n(1699),
                S = n(4860),
                ee = n(7214);
            let Q = (() => {
                    var K;
                    class ne {
                        constructor(_, p) {
                            this.httpClient = _,
                            this.notificationService = p
                        }
                        getProfileInfo(_) {
                            return this.httpClient.get(`${
                                e.N.apiUrl
                            }/profiles/${_}`).pipe((0, x.U)(({data: p}) => p), (0, m.X)(2), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        getProfilesInfo(_, p, R) {
                            const W = _.map(J => `ids[]=${J}`).join("&");
                            return 0 == _.length ? (0, g.of)([]) : this.httpClient.get(`${
                                e.N.apiUrl
                            }/affiliates/users?per_page=10&${W}`).pipe((0, x.U)(({data: J}) => J), (0, m.X)(2), (0, P.K)(J => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(J))))
                        }
                    }
                    return(K = ne).\u0275fac = function (_) {
                        return new(_ || K)(T.LFG(S.eN), T.LFG(ee.g))
                    },
                    K.\u0275prov = T.Yz7({token: K, factory: K.\u0275fac, providedIn: "root"}),
                    ne
                })(),
                Y = (() => {
                    var K;
                    class ne {
                        constructor(_, p, R) {
                            this.httpClient = _,
                            this.notificationService = p,
                            this.profileService = R,
                            this.isMobile = window.innerWidth < 769,
                            this.months = [
                                "Jan",
                                "Feb",
                                "Mar",
                                "Apr",
                                "May",
                                "Jun",
                                "Jul",
                                "Aug",
                                "Sep",
                                "Oct",
                                "Nov",
                                "Dec"
                            ],
                            this._IS_FIRST_VISIT = new s.X(!0),
                            this.isZeroEarning = new s.X(!1),
                            this.requestStatuses = [
                                {
                                    id: 0,
                                    status: "Pending"
                                }, {
                                    id: 1,
                                    status: "Approved"
                                }, {
                                    id: 2,
                                    status: "Rejected"
                                }, {
                                    id: 3,
                                    status: "Paid"
                                }
                            ],
                            this.isFirstVisit = this._IS_FIRST_VISIT.asObservable()
                        }
                        setChartTooltip(_) {
                            this.tooltipChart = _
                        }
                        getChartTooltip() {
                            return this.tooltipChart
                        }
                        setZeroEarning(_) {
                            this.isZeroEarning.next(_)
                        }
                        getTrackStats(_) {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/track-stat/${_}`).pipe((0, b.j)("result"), (0, x.U)(p => ({
                                sessions: this.getValueStat(p.sessions, _),
                                signups: this.getValueStat(p.signups, _),
                                enrollments: this.getValueStat(p.enrollments, _),
                                completions: this.getValueStat(p.completions, _),
                                purchases: this.getValueStat(p.purchases, _),
                                earnings: this.getValueStat(p.earnings, _),
                                map: p.map.map(R => [R.value.toLowerCase(), R.count])
                            })), (0, m.X)(2), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        getValueStat(_, p) {
                            return 0 === _.length ? [{
                                    value: 0,
                                    name: w(new Date).format("DD MMM").toString()
                                }] : _.map(R => ({
                                value: R.count,
                                name: this.getDate(p, R.value)
                            }))
                        }
                        showHideIntercom(_ = !1) {
                            if (this.isMobile) {
                                const p = Array.from(document.getElementsByClassName("intercom-button")),
                                    R = Array.from(document.getElementsByClassName("intercom-lightweight-app"));
                                if (p.length) 
                                    for (let W = 0; W < p.length; W++) 
                                        p[W].style.display = _ ? "block" : "none";
                                    
                                
                                if (R.length) 
                                    for (let W = 0; W < R.length; W++) 
                                        R[W].style.display = _ ? "block" : "none"
                                    
                                
                            }
                        }
                        getCombinedChartData() {
                            return(0, t.a)([
                                this.getTrackStats(I.nj.month),
                                this.getTrackStats(I.nj.threeMonths),
                                this.getTrackStats(I.nj.sixMonths),
                                this.getTrackStats(I.nj.year),
                                this.getTrackStats(I.nj.allTime),
                                this.getTrackStatsTotal(I.nj.month),
                                this.getTrackStatsTotal(I.nj.threeMonths),
                                this.getTrackStatsTotal(I.nj.sixMonths),
                                this.getTrackStatsTotal(I.nj.year),
                                this.getTrackStatsTotal(I.nj.allTime)
                            ])
                        }
                        getTrackStatsTotal(_) {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/track-stat-total/${_}`).pipe((0, b.j)("result"), (0, x.U)(p => ({
                                sessions: p.sessions,
                                signups: p.signups,
                                enrollments: p.enrollments,
                                completions: p.completions,
                                purchases: p.purchases,
                                earnings: p.earnings,
                                map: p.map
                            })), (0, m.X)(2), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        getMostPopularLinks() {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/most-popular-shared`).pipe((0, b.j)("result"), (0, x.U)(_ => _.map(p => ({
                                date: p.date,
                                link: p.link,
                                clicks: p.clicks,
                                favourite: p.favourite,
                                socialLinkId: p.socialLinkId,
                                imgCopy: "/html/site/img/angular-shop/affiliate/copy_link_icon.svg",
                                isCopied: !1,
                                title: this.getTitlesMostPopular(p.link)
                            }))), (0, m.X)(2), (0, P.K)(_ => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(_))))
                        }
                        getYourAffiliateLinksNew(_, p) {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/page-links-new?page=${_}&size=6&sortBy=${p}`).pipe((0, m.X)(2), (0, P.K)(R => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(R))))
                        }
                        getYourFavoritesLinksNew(_, p) {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/favorites-links-new?page=${_}&size=6&sortBy=${p}`).pipe((0, m.X)(2), (0, P.K)(R => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(R))))
                        }
                        updateFavoriteValue(_, p, R, W) {
                            return this.httpClient.post(`${
                                e.N.dataApiUrl
                            }/user/affiliate/favorite`, {
                                date: _,
                                link: p,
                                favourite: R,
                                socialLinkId: W
                            }).pipe((0, b.j)("result"), (0, m.X)(2), (0, P.K)(J => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(J))))
                        }
                        setLinkValue(_) {
                            return this.httpClient.post(`${
                                e.N.dataApiUrl
                            }/user/affiliate/new-page-link`, _).pipe((0, b.j)("result"), (0, m.X)(2), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        getDate(_, p) {
                            return "allTime" === _ ? p : "sixMonths" === _ || "year" === _ ? this.getMonthTitle(p) : "month" === _ ? w(p).format("DD MMM") : p
                        }
                        getMonthTitle(_) {
                            return this.months.find((p, R) => R === _ - 1)
                        }
                        setFirstVisit(_) {
                            localStorage.setItem("storedFirstAffVisit" + _, "true"),
                            this._IS_FIRST_VISIT.next(!1)
                        }
                        getFirstVisit(_) {
                            return this.isFirstVisit && null != localStorage.getItem("storedFirstAffVisit" + _) && this._IS_FIRST_VISIT.next(!1),
                            this.isFirstVisit
                        }
                        parseLinks(_) {
                            return _.map(p => ({
                                date: p.date,
                                link: p.link,
                                clicks: p.clicks,
                                favourite: p.favourite,
                                socialLinkId: p.socialLinkId,
                                imgCopy: "/html/site/img/angular-shop/affiliate/copy_link_icon.svg",
                                isCopied: !1,
                                title: this.getTitlesMostPopular(p.link)
                            }))
                        }
                        getTitlesMostPopular(_) {
                            let p = "";
                            switch (_) {
                                case "/": p = "Alison Homepage";
                                    break;
                                case "/certificate-courses": p = "Alison Certificate Courses";
                                    break;
                                case "/careers": p = "Career Guide";
                                    break;
                                case "/resume-builder": p = "Resume Builder";
                                    break;
                                case "/psychometric-test/personality": p = "Workplace Personality Assessment";
                                    break;
                                case "/psychometric-test/wellbeing": p = "Workplace Mental Health Checkup";
                                    break;
                                case "/courses/it": p = "IT Courses";
                                    break;
                                case "/courses/health": p = "Health Courses";
                                    break;
                                case "/courses/language": p = "Language Courses";
                                    break;
                                case "/courses/business": p = "Business Courses";
                                    break;
                                case "/courses/management": p = "Management Courses";
                                    break;
                                case "/courses/personal-development": p = "Personal Development Courses";
                                    break;
                                case "/courses/marketing": p = "Sales & Marketing Courses";
                                    break;
                                case "/courses/engineering": p = "Engineering Courses";
                                    break;
                                case "/courses/education": p = "Education Courses";
                                    break;
                                default: p = _
                            }
                            return p
                        }
                        getPayoutServiceDetails() {
                            return this.httpClient.get(`${
                                e.N.apiUrl
                            }/affiliates/payout-service-details`).pipe((0, x.U)(({data: _}) => _), (0, m.X)(2), (0, P.K)(_ => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(_))))
                        }
                        getPayouts() {
                            return this.httpClient.get(`${
                                e.N.apiUrl
                            }/affiliates/payouts`).pipe((0, x.U)(({data: _}) => _), (0, m.X)(2), (0, P.K)(_ => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(_))))
                        }
                        getInvoice(_) {
                            return this.httpClient.get(`${
                                e.N.apiUrl
                            }/affiliates/${
                                _.user_payout_details_id
                            }/pdf`, {responseType: "blob"}).pipe((0, x.U)(p => ({data: p, msg: "ok"})), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        getAffiliateEarnings() {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/earned`).pipe((0, x.U)(({result: _}) => ({data: _.result, msg: "ok"})), (0, m.X)(2), (0, P.K)(_ => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(_))))
                        }
                        createPayout(_) {
                            return this.httpClient.post(`${
                                e.N.apiUrl
                            }/affiliates/payout`, _).pipe((0, x.U)(p => ({data: p, msg: "ok"})), (0, P.K)(p => (p.error instanceof Blob ? p.error.text().then(R => {
                                let W = JSON.parse(R).message;
                                this.notificationService.notify(W, y.E.Error)
                            }) : this.notificationService.notify(p.error.amount ? p.error.amount[0] : "Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        createPayoutServiceDetails(_) {
                            return this.httpClient.post(`${
                                e.N.apiUrl
                            }/affiliates/payout-service-details`, _).pipe((0, x.U)(({data: p}) => p), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        updatePayoutServiceDetails(_) {
                            return this.httpClient.post(`${
                                e.N.apiUrl
                            }/affiliates/payout-service-details/${
                                _.id
                            }/update`, _).pipe((0, x.U)(({data: p}) => p), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        deletePayoutServiceDetail(_) {
                            return this.httpClient.delete(`${
                                e.N.apiUrl
                            }/affiliates/payout-service-details/${
                                _.id
                            }/delete`).pipe((0, x.U)(({data: p}) => p), (0, P.K)(p => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(p))))
                        }
                        getAllTimeLeaderboardData() {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/leaderboard-user/all-time`).pipe((0, k.z)(({result: _}) => {
                                const p = _;
                                return _ ? this.profileService.getProfileInfo(p ?. user_id).pipe((0, x.U)(R => {
                                    const {firstname: W, lastname: J, picture_url: G, country: X} = R;
                                    return {
                                        data: {
                                            ... p,
                                            firstname: W,
                                            lastname: J,
                                            picture_url: G,
                                            country: X
                                        },
                                        msg: "ok"
                                    }
                                }), (0, P.K)(R => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(R)))) : (0, g.of)({data: null, msg: "not_found"})
                            }), (0, m.X)(1), (0, P.K)(() => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, g.of)(M.E))))
                        }
                        getWeekLeaderboardData() {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/leaderboard-user/week`).pipe((0, k.z)(({result: _}) => {
                                const p = _.map(R => R.user_id);
                                return this.profileService.getProfilesInfo(p).pipe((0, x.U)(R => ({
                                    data: [... p.length ? R.map(J => {
                                            const {
                                                firstname: G,
                                                lastname: X,
                                                picture_url: oe,
                                                country: le,
                                                is_public: u
                                            } = J;
                                            return {
                                                ..._.find(i => i.user_id === J.id),
                                                firstname: G,
                                                lastname: X,
                                                picture_url: oe,
                                                country: le,
                                                is_public: u
                                            }
                                        }) : []],
                                    msg: "ok"
                                })), (0, P.K)(R => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, g.of)({data: [], msg: R}))))
                            }), (0, m.X)(1), (0, P.K)(() => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, g.of)(M.E))))
                        }
                        getTopAffiliatesData(_) {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/top-leaderboards/${_}`).pipe((0, k.z)(({result: p}) => this.topLeaderboardResponseHandler(p)), (0, m.X)(1), (0, P.K)(() => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, g.of)(M.E))))
                        }
                        isFraudUser() {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/is-fraud-affiliate-user`).pipe((0, x.U)(_ => _), (0, m.X)(2), (0, P.K)(_ => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(_))))
                        }
                        getFAQs() {
                            return this.httpClient.get(`${
                                e.N.apiUrl
                            }/faqs/affiliate-programme`).pipe((0, x.U)(({data: _}) => _.faqs), (0, m.X)(2), (0, P.K)(_ => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(_))))
                        }
                        getStatusOfRequest(_) {
                            let p = "";
                            return p = this.requestStatuses.find(R => R.id === _).status,
                            p
                        }
                        filterByCountry(_, p) {
                            return this.httpClient.get(`${
                                e.N.dataApiUrl
                            }/user/affiliate/top-leaderboards/${_}/${p}`).pipe((0, k.z)(({result: R}) => this.topLeaderboardResponseHandler(R)), (0, m.X)(1), (0, P.K)(R => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, l._)(R))))
                        }
                        topLeaderboardResponseHandler(_) {
                            const p = _.map(R => R.user_id);
                            return this.profileService.getProfilesInfo(p).pipe((0, x.U)(R => ({
                                data: [...R.map(J => {
                                        const {
                                            id: G,
                                            firstname: X,
                                            lastname: oe,
                                            picture_url: le,
                                            country: u,
                                            is_public: i
                                        } = J;
                                        return {
                                            ..._.find(f => f.user_id === J.id),
                                            id: G,
                                            firstname: X,
                                            lastname: oe,
                                            picture_url: le,
                                            country: u,
                                            is_public: i
                                        }
                                    })],
                                msg: "ok"
                            })), (0, P.K)(R => (this.notificationService.notify("Error. Please contact support", y.E.Error), (0, g.of)({data: [], msg: R}))))
                        }
                    }
                    return(K = ne).\u0275fac = function (_) {
                        return new(_ || K)(T.LFG(S.eN), T.LFG(ee.g), T.LFG(Q))
                    },
                    K.\u0275prov = T.Yz7({token: K, factory: K.\u0275fac, providedIn: "root"}),
                    ne
                })()
        },
        7104: (N, E, n) => {
            "use strict";
            n.d(E, {
                y: () => _e
            });
            var s = n(3517),
                l = n(6575),
                t = n(1699),
                g = n(6406),
                M = n(2066),
                e = n(3839),
                b = n(9016),
                x = n(4520),
                m = n(3738),
                P = n(5043),
                k = n(655),
                y = n(9736),
                I = n(3317),
                w = n(553),
                T = function (A) {
                    return A.English = "en",
                    A.Spanish = "es",
                    A.French = "fr",
                    A.Italian = "it",
                    A.BrazilianPortuguese = "pt-BR",
                    A
                }(T || {}),
                S = n(9575),
                ee = n(4320),
                Q = n(5939);
            let Y = (() => {
                var A;
                class H {
                    closeAds() {
                        document.dispatchEvent(new Event("congrats"))
                    }
                }
                return(A = H).\u0275fac = function (h) {
                    return new(h || A)
                },
                A.\u0275cmp = t.Xpm({
                    type: A,
                    selectors: [
                        ["app-premium-le-congrats"]
                    ],
                    decls: 12,
                    vars: 9,
                    consts: [
                        [
                            1, "premium-le__congrats"
                        ],
                        [
                            1, "premium-le__title", "premium-le__congrats__title"
                        ],
                        [
                            1, "premium-le__congrats__subtitle"
                        ],
                        [
                            1, "premium-le__congrats__content"
                        ],
                        [
                            1, "premium-le__congrats__content__background"
                        ],
                        [
                            1,
                            "premium-le__button",
                            "premium-le__congrats__button",
                            3,
                            "click"
                        ]
                    ],
                    template: function (h, v) {
                        1 & h && (t.TgZ(0, "section", 0)(1, "h3", 1),
                        t._uU(2),
                        t.ALo(3, "translate"),
                        t.qZA(),
                        t.TgZ(4, "h4", 2),
                        t._uU(5),
                        t.ALo(6, "translate"),
                        t.qZA(),
                        t.TgZ(7, "div", 3),
                        t._UZ(8, "div", 4),
                        t.TgZ(9, "button", 5),
                        t.NdJ("click", function () {
                            return v.closeAds()
                        }),
                        t._uU(10),
                        t.ALo(11, "translate"),
                        t.qZA()()()),
                        2 & h && (t.xp6(2), t.hij(" ", t.lcZ(3, 3, "shopping.ADS_FREE_LE_CONGRATS"), " "), t.xp6(3), t.hij(" ", t.lcZ(6, 5, "shopping.BACK_TO_LEARNING"), " "), t.xp6(5), t.hij(" ", t.lcZ(11, 7, "shopping.START_NEXT_TOPIC"), " "))
                    },
                    dependencies: [Q.X$],
                    styles: ['@charset "UTF-8";.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{text-align:center;font-weight:bolder}.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border:1px solid;border-bottom:0}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{min-height:78px;flex:1}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{display:flex}.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{float:left;flex:1;display:flex;flex-direction:column;align-items:stretch}.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{pointer-events:all!important}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{min-height:100px}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right:initial;border-left:1px solid}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border-bottom:1px solid}.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;float:left}.cal-month-view[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]{flex:1;align-items:flex-end;margin:3px;line-height:10px;display:flex;flex-wrap:wrap}.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-in-month.cal-has-events[_ngcontent-%COMP%]{cursor:pointer}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{opacity:.1;cursor:default}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:1.9em}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{padding:15px}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{position:relative;top:2px}.cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%], .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{opacity:.3}.cal-month-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%]{cursor:move}.cal-month-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]{cursor:pointer}.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]:hover{text-decoration:underline}.cal-month-view[_ngcontent-%COMP%]{background-color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]:hover{background-color:#fafafa}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]:hover, .cal-month-view[_ngcontent-%COMP%]   .cal-cell.cal-has-events.cal-open[_ngcontent-%COMP%]{background-color:#ededed}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right-color:initial;border-left-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border-bottom-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{background-color:#b94a48;color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#8b0000}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]{background-color:#e8fde7}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-drag-over[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{color:#fff;background-color:#555;box-shadow:inset 0 0 15px #00000080}.cal-week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{display:flex;padding-left:70px;border:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{padding-left:initial;padding-right:70px}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{flex:1;text-align:center;padding:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right:initial;border-left:1px solid}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left:initial;border-right:1px solid}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;opacity:.5}.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{flex-grow:1;border-left:solid 1px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left:initial;border-right:solid 1px}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{font-size:12px;border:1px solid;direction:ltr}.cal-week-view[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%]{width:70px;height:100%}.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{position:absolute;width:100%;height:2px;z-index:2}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]{border:solid 1px;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;position:absolute;top:0;z-index:0}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%]{position:relative;height:31px;margin-left:70px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]{display:inline-block;position:absolute}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container.resize-active[_ngcontent-%COMP%]{z-index:1;pointer-events:none}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:5px;border-bottom-left-radius:5px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:initial;border-bottom-left-radius:initial;border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-right-radius:initial;border-bottom-right-radius:initial;border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%]{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{right:0}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{right:initial;left:0}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]{pointer-events:none;z-index:1}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]{position:relative;border:solid 1px;border-top:0;display:flex}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]{display:flex;flex-grow:1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]{position:absolute;z-index:1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%]{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{bottom:0}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]:after{content:"\\a0"}.cal-week-view[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]:not(.cal-draggable){cursor:pointer}.cal-week-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%]{cursor:move}.cal-week-view[_ngcontent-%COMP%]   mwl-calendar-week-view-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{display:block}.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%]{border-bottom:thin dashed}.cal-week-view[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%]{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment.cal-after-hour-start[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%]{display:none}.cal-week-view[_ngcontent-%COMP%]   .cal-starts-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-ends-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view[_ngcontent-%COMP%]{background-color:#fff;border-top:solid 1px #e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{border-color:#e1e1e1;border-top:0}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right-color:initial;border-left:solid 1px #e1e1e1!important}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:hover, .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-today[_ngcontent-%COMP%]{background-color:#e8fde7}.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-weekend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8b0000}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]:not(.cal-resize-active)   .cal-hour-segment[_ngcontent-%COMP%]:hover{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-odd[_ngcontent-%COMP%]{background-color:#fafafa}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%]{border-bottom-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{background-color:#ea4334}.cal-day-view[_ngcontent-%COMP%]   mwl-calendar-week-view-header[_ngcontent-%COMP%]{display:none}.cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{margin-left:70px}[dir=rtl][_ngcontent-%COMP%]   .cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-day-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left:0}.cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{margin-left:70px;width:calc(100% - 70px)}[dir=rtl][_ngcontent-%COMP%]   .cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-tooltip[_ngcontent-%COMP%]{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]{padding:0 5px;margin-left:-3px}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px}.cal-tooltip-inner[_ngcontent-%COMP%]{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem}.cal-tooltip-arrow[_ngcontent-%COMP%]{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-top-color:#000}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-left-color:#000}.cal-tooltip-inner[_ngcontent-%COMP%]{color:#fff;background-color:#000}@media screen and (max-width: 768px){.hide--mobile[_ngcontent-%COMP%]{display:none!important}}@media screen and (min-width: 768px){.hide--pc[_ngcontent-%COMP%]{display:none!important}}.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after{content:unset;display:table}.clearfix[_ngcontent-%COMP%]:after{clear:both}.container[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container[_ngcontent-%COMP%]:before, .container[_ngcontent-%COMP%]:after{content:unset;display:table}.container[_ngcontent-%COMP%]:after{clear:both}@media (min-width: 768px){.container[_ngcontent-%COMP%]{width:750px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{width:970px}.col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%]{float:left}.col-md-1[_ngcontent-%COMP%]{width:8.3333333333%}.col-md-2[_ngcontent-%COMP%]{width:16.6666666667%}.col-md-3[_ngcontent-%COMP%]{width:25%}.col-md-4[_ngcontent-%COMP%]{width:33.3333333333%}.col-md-5[_ngcontent-%COMP%]{width:41.6666666667%}.col-md-6[_ngcontent-%COMP%]{width:50%}.col-md-7[_ngcontent-%COMP%]{width:58.3333333333%}.col-md-8[_ngcontent-%COMP%]{width:66.6666666667%}.col-md-9[_ngcontent-%COMP%]{width:75%}.col-md-10[_ngcontent-%COMP%]{width:83.3333333333%}.col-md-11[_ngcontent-%COMP%]{width:91.6666666667%}.col-md-12[_ngcontent-%COMP%]{width:100%}.col-md-pull-0[_ngcontent-%COMP%]{right:auto}.col-md-pull-1[_ngcontent-%COMP%]{right:8.3333333333%}.col-md-pull-2[_ngcontent-%COMP%]{right:16.6666666667%}.col-md-pull-3[_ngcontent-%COMP%]{right:25%}.col-md-pull-4[_ngcontent-%COMP%]{right:33.3333333333%}.col-md-pull-5[_ngcontent-%COMP%]{right:41.6666666667%}.col-md-pull-6[_ngcontent-%COMP%]{right:50%}.col-md-pull-7[_ngcontent-%COMP%]{right:58.3333333333%}.col-md-pull-8[_ngcontent-%COMP%]{right:66.6666666667%}.col-md-pull-9[_ngcontent-%COMP%]{right:75%}.col-md-pull-10[_ngcontent-%COMP%]{right:83.3333333333%}.col-md-pull-11[_ngcontent-%COMP%]{right:91.6666666667%}.col-md-pull-12[_ngcontent-%COMP%]{right:100%}.col-md-push-0[_ngcontent-%COMP%]{left:auto}.col-md-push-1[_ngcontent-%COMP%]{left:8.3333333333%}.col-md-push-2[_ngcontent-%COMP%]{left:16.6666666667%}.col-md-push-3[_ngcontent-%COMP%]{left:25%}.col-md-push-4[_ngcontent-%COMP%]{left:33.3333333333%}.col-md-push-5[_ngcontent-%COMP%]{left:41.6666666667%}.col-md-push-6[_ngcontent-%COMP%]{left:50%}.col-md-push-7[_ngcontent-%COMP%]{left:58.3333333333%}.col-md-push-8[_ngcontent-%COMP%]{left:66.6666666667%}.col-md-push-9[_ngcontent-%COMP%]{left:75%}.col-md-push-10[_ngcontent-%COMP%]{left:83.3333333333%}.col-md-push-11[_ngcontent-%COMP%]{left:91.6666666667%}.col-md-push-12[_ngcontent-%COMP%]{left:100%}.col-md-offset-0[_ngcontent-%COMP%]{margin-left:0}.col-md-offset-1[_ngcontent-%COMP%]{margin-left:8.3333333333%}.col-md-offset-2[_ngcontent-%COMP%]{margin-left:16.6666666667%}.col-md-offset-3[_ngcontent-%COMP%]{margin-left:25%}.col-md-offset-4[_ngcontent-%COMP%]{margin-left:33.3333333333%}.col-md-offset-5[_ngcontent-%COMP%]{margin-left:41.6666666667%}.col-md-offset-6[_ngcontent-%COMP%]{margin-left:50%}.col-md-offset-7[_ngcontent-%COMP%]{margin-left:58.3333333333%}.col-md-offset-8[_ngcontent-%COMP%]{margin-left:66.6666666667%}.col-md-offset-9[_ngcontent-%COMP%]{margin-left:75%}.col-md-offset-10[_ngcontent-%COMP%]{margin-left:83.3333333333%}.col-md-offset-11[_ngcontent-%COMP%]{margin-left:91.6666666667%}.col-md-offset-12[_ngcontent-%COMP%]{margin-left:100%}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;min-height:100%;font-family:Roboto,sans-serif}body[_ngcontent-%COMP%]{line-height:1}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:"";content:none}b[_ngcontent-%COMP%]{font-weight:700}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}*[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-tap-highlight-color:transparent}a[_ngcontent-%COMP%]{outline:none;text-decoration:none}body[_ngcontent-%COMP%]{background:#fff;font-weight:400;font-size:1em;letter-spacing:0;line-height:1.3em;position:relative;overflow-x:hidden}p[_ngcontent-%COMP%]{font-weight:400;font-size:.875em;line-height:1.5em;margin:0 0 20px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}input.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border:1px solid #ff3d71!important}select.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border:1px solid #ff3d71!important}[hidden][_ngcontent-%COMP%]{display:none!important}.center[_ngcontent-%COMP%]{margin:0;padding:0}.app-loader-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column}.app-loader[_ngcontent-%COMP%], .app-loader[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.app-loader[_ngcontent-%COMP%]{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #bababa;transform:translateZ(0);animation:_ngcontent-%COMP%_load8 1.1s infinite linear}.app-loader.min[_ngcontent-%COMP%]{margin:0 auto;font-size:5px}.app-loader.micro[_ngcontent-%COMP%]{margin:0 auto;font-size:2px}.app-loader.loader-button[_ngcontent-%COMP%]{margin:0 auto;font-size:3px}@keyframes _ngcontent-%COMP%_load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button[_ngcontent-%COMP%]{transition:background-color .3s ease-in-out}.animate-fast[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.mr-10[_ngcontent-%COMP%]{margin-right:10px}.mr-25[_ngcontent-%COMP%]{margin-right:25px}.mb-10[_ngcontent-%COMP%]{margin-bottom:10px}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.mb-30[_ngcontent-%COMP%]{margin-bottom:30px}.mb-40[_ngcontent-%COMP%]{margin-bottom:40px}.mt-10[_ngcontent-%COMP%]{margin-top:10px}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-80[_ngcontent-%COMP%]{margin-top:80px}.w-100[_ngcontent-%COMP%]{width:100%}.w-50[_ngcontent-%COMP%]{width:50%}.pb-35[_ngcontent-%COMP%]{padding-bottom:35px!important}.mt-auto[_ngcontent-%COMP%]{margin-top:auto}.position-relative[_ngcontent-%COMP%]{position:relative}.min-height-100[_ngcontent-%COMP%]{min-height:100%}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-container.column[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.flex-container.row[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-container[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.flex-container[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%]{flex:1}.flex-container[_ngcontent-%COMP%]   .flex-2[_ngcontent-%COMP%]{flex:2}.flex-container[_ngcontent-%COMP%]   .flex-3[_ngcontent-%COMP%]{flex:3}.flex-container[_ngcontent-%COMP%]   .flex-4[_ngcontent-%COMP%]{flex:4}.flex-container[_ngcontent-%COMP%]   .flex-5[_ngcontent-%COMP%]{flex:5}.flex-container[_ngcontent-%COMP%]   .justify-content-center[_ngcontent-%COMP%]{justify-content:center}.flex-container[_ngcontent-%COMP%]   .justify-content-space-between[_ngcontent-%COMP%]{justify-content:space-between}.flex-container[_ngcontent-%COMP%]   .justify-content-space-around[_ngcontent-%COMP%]{justify-content:space-around}.flex-container[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%]{justify-content:end}.flex-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{align-items:center}.flex-container[_ngcontent-%COMP%]   .flex-none[_ngcontent-%COMP%]{flex:none}.flex-container[_ngcontent-%COMP%]   .align-self-center[_ngcontent-%COMP%]{align-self:center}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.z-index-1[_ngcontent-%COMP%]{z-index:1}.slick-slider[_ngcontent-%COMP%]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[_ngcontent-%COMP%]{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list[_ngcontent-%COMP%]:focus{outline:none}.slick-list.dragging[_ngcontent-%COMP%]{cursor:pointer;cursor:hand}.slick-slider[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%]{transform:translateZ(0)}.slick-track[_ngcontent-%COMP%]{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track[_ngcontent-%COMP%]:before, .slick-track[_ngcontent-%COMP%]:after{display:table;content:""}.slick-track[_ngcontent-%COMP%]:after{clear:both}.slick-loading[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%]{visibility:hidden}.slick-slide[_ngcontent-%COMP%]{display:none;float:left;height:100%;min-height:1px}[dir=rtl][_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{float:right}.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.slick-slide.slick-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.slick-slide.dragging[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{pointer-events:none}.slick-initialized[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{display:block}.slick-loading[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{visibility:hidden}.slick-vertical[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[_ngcontent-%COMP%]{display:none}.slick-arrow.slick-prev[_ngcontent-%COMP%], .slick-arrow.slick-next[_ngcontent-%COMP%]{font-size:0;line-height:0;position:absolute;top:50%;display:block;padding:0;transform:translateY(-50%);cursor:pointer;color:transparent;border:none;outline:0;width:40px;height:40px;background-repeat:no-repeat;background-position:8px 12px;background-color:#fff;border-radius:50%;box-shadow:0 2px 6px #32323266;z-index:1}.slick-arrow.slick-prev[_ngcontent-%COMP%]{left:-15px;background-image:url(/html/site/img/category-page/arrow-active-left.png)}.slick-arrow.slick-prev.slick-disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-left.png)}.slick-arrow.slick-next[_ngcontent-%COMP%]{right:-15px;background-image:url(/html/site/img/category-page/arrow-active-right.png)}.slick-arrow.slick-next.slick-disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-right.png)}.slick-slide[_ngcontent-%COMP%]{min-height:375px;margin:0 5px}.slick-slide[_ngcontent-%COMP%]   .course-block[_ngcontent-%COMP%]   .course-block-content[_ngcontent-%COMP%]{padding:20px 10px 90px;text-align:left;background:#f3f6f7}.slick-slide[_ngcontent-%COMP%]   .course-block[_ngcontent-%COMP%]   .course-block-intro[_ngcontent-%COMP%]{background:#f3f6f7}.slick-track[_ngcontent-%COMP%]{min-height:400px}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px}}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:700;font-size:22px;margin-left:6px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px!important}}@media screen and (max-width: 398px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{line-height:23px}}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{color:#89959d}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]{max-width:100%}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{position:relative}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-has-events[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#fff!important;opacity:1}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]{position:absolute;top:0;width:32px;margin:0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-radius:6px;width:32px;height:32px;margin:0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]:not(.best-day){background-color:#1794c9}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event.best-day[_ngcontent-%COMP%]{background-image:url(/html/site/img/angular-shop/learner-report/best_day_big_icon.png);background-size:contain;background-color:unset}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:32px;min-height:32px}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{min-height:23px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{display:none!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border:none!important;margin:10px 0}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{margin:0!important}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{border-bottom:1px solid #F3F6F7!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{color:#89959d;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:14px;padding:0 0 16px}@media screen and (min-width: 320px) and (max-width: 360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{font-size:12px}}@media screen and (min-width: 360px) and (max-width: 650px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{padding:0 0 11px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%], #monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border:none!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{height:224px;margin-top:20px;margin-bottom:45px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{margin-top:0!important}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#b3bdc0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{max-width:32px;min-height:32px;height:32px;margin:0 16px}@media screen and (min-width: 320px) and (max-width: 359px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 auto;min-height:30px}}@media screen and (min-width: 1200px) and (max-width: 1360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 12px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#5d676e;font-size:12px!important;font-weight:700;margin:0}@media screen and (max-width: 360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{margin:0}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#5d676e}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]{background-color:transparent}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:12px!important}.learning-stats-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]{width:100%;height:130px;background-color:#fff;box-shadow:0 3px 6px #96969640;border-radius:12px}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-spend[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .day-time[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-spend[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .day-time[_ngcontent-%COMP%]{color:#465159;font-size:16px;font-weight:700}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-type[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-type[_ngcontent-%COMP%]{text-transform:uppercase;color:#89959d;font-size:12px;font-weight:700}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]{margin-left:5px}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.less[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.less[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.less[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.less[_ngcontent-%COMP%]{color:#e32726}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.more[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.more[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.more[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.more[_ngcontent-%COMP%]{color:#108445}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.additional-actions[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:32px;margin-bottom:10px}.additional-actions[_ngcontent-%COMP%]   .reminders-msg[_ngcontent-%COMP%], .additional-actions[_ngcontent-%COMP%]   .keep-learning-msg[_ngcontent-%COMP%]{color:#465159;font-size:14px}.additional-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:196px;width:100%;height:42px;background-color:#1794c9;border-radius:50px;color:#fff;border:unset;margin-left:10px;cursor:pointer;font-weight:500}.additional-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#1783b1}@font-face{font-family:icomoon;src:url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff2?ueshyb) format("woff2"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.ttf?ueshyb) format("truetype"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff?ueshyb) format("woff"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.svg?ueshyb#icomoon) format("svg");font-weight:400;font-style:normal}[class^=icon-][_ngcontent-%COMP%], [class*=" icon-"][_ngcontent-%COMP%]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-filter_up[_ngcontent-%COMP%]:before{content:"\\ea73";color:#fff}.icon-filter_down[_ngcontent-%COMP%]:before{content:"\\ea74";color:#fff}.icon-seo-and-web-1[_ngcontent-%COMP%]:before{content:"\\ea6e"}.icon-discount[_ngcontent-%COMP%]:before{content:"\\ea6f"}.icon-tick-mark[_ngcontent-%COMP%]:before{content:"\\ea70"}.icon-student1[_ngcontent-%COMP%]:before{content:"\\ea71"}.icon-cart1[_ngcontent-%COMP%]:before{content:"\\ea72"}.icon-close-group[_ngcontent-%COMP%]:before{content:"\\ea67"}.icon-user-list[_ngcontent-%COMP%]:before{content:"\\ea68"}.icon-new-group[_ngcontent-%COMP%]:before{content:"\\ea69"}.icon-privileges[_ngcontent-%COMP%]:before{content:"\\ea6a"}.icon-statistics[_ngcontent-%COMP%]:before{content:"\\ea6b"}.icon-group-members[_ngcontent-%COMP%]:before{content:"\\ea6c"}.icon-group-details[_ngcontent-%COMP%]:before{content:"\\ea6d"}.icon-blue-search[_ngcontent-%COMP%]:before{content:"\\ea60";color:#0094c9}.icon-clipboard[_ngcontent-%COMP%]:before{content:"\\ea61";color:#0094c9}.icon-share-link[_ngcontent-%COMP%]:before{content:"\\ea62";color:#0094c9}.icon-speaker[_ngcontent-%COMP%]:before{content:"\\ea63";color:#0094c9}.icon-purple-display-upload[_ngcontent-%COMP%]:before{content:"\\ea59";color:#5900b1}.icon-purple-form[_ngcontent-%COMP%]:before{content:"\\ea5a";color:#5900b1}.icon-purple-display-done[_ngcontent-%COMP%]:before{content:"\\ea5b";color:#5900b1}.icon-purple-web[_ngcontent-%COMP%]:before{content:"\\ea54";color:#5900b1}.icon-purple-group[_ngcontent-%COMP%]:before{content:"\\ea55";color:#5900b1}.icon-purple-rocket[_ngcontent-%COMP%]:before{content:"\\ea56";color:#5900b1}.icon-purple-screen[_ngcontent-%COMP%]:before{content:"\\ea57";color:#5900b1}.icon-purple-wisdom[_ngcontent-%COMP%]:before{content:"\\ea58";color:#5900b1}.icon-pd-dashboard[_ngcontent-%COMP%]:before{content:"\\ea49";color:#aaa}.icon-pd-help[_ngcontent-%COMP%]:before{content:"\\ea4a";color:#aaa}.icon-pd-logout[_ngcontent-%COMP%]:before{content:"\\ea4b";color:#0094c9}.icon-pd-play-button[_ngcontent-%COMP%]:before{content:"\\ea4c";color:#0094c9}.icon-pd-settings[_ngcontent-%COMP%]:before{content:"\\ea4d";color:#aaa}.icon-nb-active-courses[_ngcontent-%COMP%]:before{content:"\\ea3d"}.icon-nb-career[_ngcontent-%COMP%]:before{content:"\\ea3e"}.icon-nb-categories[_ngcontent-%COMP%]:before{content:"\\ea3f"}.icon-nb-dashboard[_ngcontent-%COMP%]:before{content:"\\ea40"}.icon-nb-help[_ngcontent-%COMP%]:before{content:"\\ea41"}.icon-nb-hubs[_ngcontent-%COMP%]:before{content:"\\ea42"}.icon-nb-login[_ngcontent-%COMP%]:before{content:"\\ea43"}.icon-nb-logout[_ngcontent-%COMP%]:before{content:"\\ea44"}.icon-nb-menu[_ngcontent-%COMP%]:before{content:"\\ea45"}.icon-nb-resume[_ngcontent-%COMP%]:before{content:"\\ea46"}.icon-nb-shop[_ngcontent-%COMP%]:before{content:"\\ea47"}.icon-hp-english-hub[_ngcontent-%COMP%]:before{content:"\\ea2c"}.icon-hp-healthcare-hub[_ngcontent-%COMP%]:before{content:"\\ea2d"}.icon-hp-learning-path[_ngcontent-%COMP%]:before{content:"\\ea2e"}.icon-hp-project-man-hub[_ngcontent-%COMP%]:before{content:"\\ea2f"}.icon-accreditation[_ngcontent-%COMP%]:before{content:"\\ea76"}.icon-full-screen-arrows[_ngcontent-%COMP%]:before{content:"\\ea23"}.icon-assessment-dark[_ngcontent-%COMP%]:before{content:"\\ea11"}.icon-careers[_ngcontent-%COMP%]:before{content:"\\ea12"}.icon-certification[_ngcontent-%COMP%]:before{content:"\\ea13"}.icon-comments[_ngcontent-%COMP%]:before{content:"\\ea14"}.icon-download-study-notes[_ngcontent-%COMP%]:before{content:"\\ea15"}.icon-duration-dark[_ngcontent-%COMP%]:before{content:"\\ea16"}.icon-email-study-notes[_ngcontent-%COMP%]:before{content:"\\ea17"}.icon-points[_ngcontent-%COMP%]:before{content:"\\ea18"}.icon-publisher-dark[_ngcontent-%COMP%]:before{content:"\\ea19"}.icon-responsive-dark[_ngcontent-%COMP%]:before{content:"\\ea1a"}.icon-students[_ngcontent-%COMP%]:before{content:"\\ea1b"}.icon-study-notes[_ngcontent-%COMP%]:before{content:"\\ea1c"}.icon-text-version-dark[_ngcontent-%COMP%]:before{content:"\\ea1d"}.icon-category-business[_ngcontent-%COMP%]:before{content:"\\e98c"}.icon-category-health[_ngcontent-%COMP%]:before{content:"\\e98d"}.icon-category-humanities[_ngcontent-%COMP%]:before{content:"\\e98e"}.icon-category-it[_ngcontent-%COMP%]:before{content:"\\e98f"}.icon-category-language[_ngcontent-%COMP%]:before{content:"\\e990"}.icon-category-lifestyle[_ngcontent-%COMP%]:before{content:"\\e991"}.icon-category-marketing[_ngcontent-%COMP%]:before{content:"\\e992"}.icon-category-math[_ngcontent-%COMP%]:before{content:"\\e993"}.icon-category-science[_ngcontent-%COMP%]:before{content:"\\e9e4"}.icon-discount-tag[_ngcontent-%COMP%]:before{content:"\\ea75"}.icon-brain[_ngcontent-%COMP%]:before{content:"\\ea66"}.icon-check-mark-button[_ngcontent-%COMP%]:before{content:"\\ea65";color:#0094c9}.icon-calendar-bell[_ngcontent-%COMP%]:before{content:"\\ea64";color:#fff}.icon-happy-man[_ngcontent-%COMP%]:before{content:"\\ea5f"}.icon-finish[_ngcontent-%COMP%]:before{content:"\\ea5d"}.icon-quiz-man[_ngcontent-%COMP%]:before{content:"\\ea5e"}.icon-minimize[_ngcontent-%COMP%]:before{content:"\\ea5c"}.icon-group[_ngcontent-%COMP%]:before{content:"\\ea53"}.icon-calendar[_ngcontent-%COMP%]:before{content:"\\ea4f"}.icon-idea[_ngcontent-%COMP%]:before{content:"\\ea50"}.icon-students1[_ngcontent-%COMP%]:before{content:"\\ea51"}.icon-study[_ngcontent-%COMP%]:before{content:"\\ea52"}.icon-award[_ngcontent-%COMP%]:before{content:"\\ea4e"}.icon-resume[_ngcontent-%COMP%]:before{content:"\\ea48"}.icon-skills-and-guidance[_ngcontent-%COMP%]:before{content:"\\ea3a"}.icon-specific-jobs[_ngcontent-%COMP%]:before{content:"\\ea3b"}.icon-soldier[_ngcontent-%COMP%]:before{content:"\\ea39"}.icon-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.icon-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.icon-android-app[_ngcontent-%COMP%]:before{content:"\\f17b"}.icon-whatsapp[_ngcontent-%COMP%]:before{content:"\\ea32"}.icon-home1[_ngcontent-%COMP%]:before{content:"\\f015"}.icon-thick-phone[_ngcontent-%COMP%]:before{content:"\\ea30"}.icon-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.icon-quote-right[_ngcontent-%COMP%]:before{content:"\\ea0b"}.icon-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.icon-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.icon-copy[_ngcontent-%COMP%]:before{content:"\\f0c5"}.icon-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.icon-angle-double-right[_ngcontent-%COMP%]:before{content:"\\e9d4"}.icon-paypal[_ngcontent-%COMP%]:before{content:"\\e9d3"}.icon-alison-premium-monthly[_ngcontent-%COMP%]:before{content:"\\ea33"}.icon-chevrons-left[_ngcontent-%COMP%]:before{content:"\\ea07"}.icon-alison-premium[_ngcontent-%COMP%]:before{content:"\\ea09"}.icon-chevrons[_ngcontent-%COMP%]:before{content:"\\ea08"}.icon-en-devices[_ngcontent-%COMP%]:before{content:"\\e9fd"}.icon-en-follow[_ngcontent-%COMP%]:before{content:"\\e9fe"}.icon-en-levels[_ngcontent-%COMP%]:before{content:"\\e9ff"}.icon-en-listen[_ngcontent-%COMP%]:before{content:"\\ea00"}.icon-en-read[_ngcontent-%COMP%]:before{content:"\\ea01"}.icon-en-rich[_ngcontent-%COMP%]:before{content:"\\ea02"}.icon-en-speak[_ngcontent-%COMP%]:before{content:"\\ea03"}.icon-en-speakers[_ngcontent-%COMP%]:before{content:"\\ea04"}.icon-en-tabbed[_ngcontent-%COMP%]:before{content:"\\ea05"}.icon-en-write[_ngcontent-%COMP%]:before{content:"\\ea06"}.icon-mobile-applications[_ngcontent-%COMP%]:before{content:"\\e9fc"}.icon-eng-control[_ngcontent-%COMP%]:before{content:"\\e9f9"}.icon-eng-focus[_ngcontent-%COMP%]:before{content:"\\e9fa"}.icon-eng-opportunity[_ngcontent-%COMP%]:before{content:"\\e9fb"}.icon-learner[_ngcontent-%COMP%]:before{content:"\\e9f7"}.icon-library[_ngcontent-%COMP%]:before{content:"\\e9f8"}.icon-alp-icon[_ngcontent-%COMP%]:before{content:"\\e9f5"}.icon-tshirt2[_ngcontent-%COMP%]:before{content:"\\e9f6"}.icon-alc-icon[_ngcontent-%COMP%]:before{content:"\\e9f4"}.icon-location2[_ngcontent-%COMP%]:before{content:"\\e9ef"}.icon-qualified[_ngcontent-%COMP%]:before{content:"\\e9f0"}.icon-proctored[_ngcontent-%COMP%]:before{content:"\\e9f1"}.icon-community[_ngcontent-%COMP%]:before{content:"\\e9f2"}.icon-support[_ngcontent-%COMP%]:before{content:"\\e9f3"}.icon-caregiving[_ngcontent-%COMP%]:before{content:"\\e9e5"}.icon-customer-service[_ngcontent-%COMP%]:before{content:"\\e9e6"}.icon-data[_ngcontent-%COMP%]:before{content:"\\e9e7"}.icon-financial[_ngcontent-%COMP%]:before{content:"\\e9e8"}.icon-healthcare[_ngcontent-%COMP%]:before{content:"\\e9e9"}.icon-marketing2[_ngcontent-%COMP%]:before{content:"\\e9ea"}.icon-nursing[_ngcontent-%COMP%]:before{content:"\\e9eb"}.icon-operations[_ngcontent-%COMP%]:before{content:"\\e9ec"}.icon-software[_ngcontent-%COMP%]:before{content:"\\e9ed"}.icon-teaching[_ngcontent-%COMP%]:before{content:"\\e9ee"}.icon-track[_ngcontent-%COMP%]:before{content:"\\e976"}.icon-smartphone[_ngcontent-%COMP%]:before{content:"\\e9e3"}.icon-alternative[_ngcontent-%COMP%]:before{content:"\\e9e0"}.icon-corrections[_ngcontent-%COMP%]:before{content:"\\e9e1"}.icon-refugees[_ngcontent-%COMP%]:before{content:"\\e9e2"}.icon-graduate[_ngcontent-%COMP%]:before{content:"\\e9df"}.icon-wechat[_ngcontent-%COMP%]:before{content:"\\f1d7"}.icon-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.icon-google1[_ngcontent-%COMP%]:before{content:"\\ea38"}.icon-move[_ngcontent-%COMP%]:before{content:"\\ea37"}.icon-sad[_ngcontent-%COMP%]:before{content:"\\e9d5"}.icon-stumbleupon[_ngcontent-%COMP%]:before{content:"\\e93d"}.icon-reddit[_ngcontent-%COMP%]:before{content:"\\e9d2"}.icon-twitter2[_ngcontent-%COMP%]:before{content:"\\e944"}.icon-facebook-logo[_ngcontent-%COMP%]:before{content:"\\e9c7"}.icon-google-plus[_ngcontent-%COMP%]:before{content:"\\e9c8"}.icon-google-plus-footer[_ngcontent-%COMP%]:before{content:"\\e9de"}.icon-linkedin-logo2[_ngcontent-%COMP%]:before{content:"\\e9c9"}.icon-outlook-icon[_ngcontent-%COMP%]:before{content:"\\e9ca"}.icon-yahoo-logo[_ngcontent-%COMP%]:before{content:"\\e9cb"}.icon-WDP-icon[_ngcontent-%COMP%]:before{content:"\\ea35"}.icon-new-upload[_ngcontent-%COMP%]:before{content:"\\ea34";color:#0094c9}.icon-lightbulb[_ngcontent-%COMP%]:before{content:"\\ea2a"}.icon-rocket[_ngcontent-%COMP%]:before{content:"\\ea2b"}.icon-hub-awareness[_ngcontent-%COMP%]:before{content:"\\ea24"}.icon-hub-caregiving[_ngcontent-%COMP%]:before{content:"\\ea25"}.icon-hub-fitness[_ngcontent-%COMP%]:before{content:"\\ea26"}.icon-hub-nursing[_ngcontent-%COMP%]:before{content:"\\ea27"}.icon-hub-nutrition[_ngcontent-%COMP%]:before{content:"\\ea28"}.icon-hub-pharmacology[_ngcontent-%COMP%]:before{content:"\\ea29"}.icon-the-hub[_ngcontent-%COMP%]:before{content:"\\ea22"}.icon-modules[_ngcontent-%COMP%]:before{content:"\\ea1f"}.icon-topics[_ngcontent-%COMP%]:before{content:"\\ea21"}.icon-complete[_ngcontent-%COMP%]:before{content:"\\ea1e"}.icon-start-topic[_ngcontent-%COMP%]:before{content:"\\ea20"}.icon-growth[_ngcontent-%COMP%]:before{content:"\\ea0d"}.icon-skills2[_ngcontent-%COMP%]:before{content:"\\ea0e"}.icon-arrow-right2[_ngcontent-%COMP%]:before{content:"\\ea3c"}.icon-tshirt[_ngcontent-%COMP%]:before{content:"\\e9dd"}.icon-ive-been-referred[_ngcontent-%COMP%]:before{content:"\\e9d6"}.icon-ive-referred-my-friends[_ngcontent-%COMP%]:before{content:"\\e9d7"}.icon-how-donations-work[_ngcontent-%COMP%]:before{content:"\\e9d8"}.icon-donations[_ngcontent-%COMP%]:before{content:"\\e9d9"}.icon-refer-a-friend[_ngcontent-%COMP%]:before{content:"\\e9db"}.icon-popular[_ngcontent-%COMP%]:before{content:"\\e94a"}.icon-recent[_ngcontent-%COMP%]:before{content:"\\e95c"}.icon-trending[_ngcontent-%COMP%]:before{content:"\\e977"}.icon-new-filter[_ngcontent-%COMP%]:before{content:"\\e9c6"}.icon-broaden[_ngcontent-%COMP%]:before{content:"\\e9c3"}.icon-master[_ngcontent-%COMP%]:before{content:"\\e9c4"}.icon-progress[_ngcontent-%COMP%]:before{content:"\\e9c5"}.icon-PDF-Filled[_ngcontent-%COMP%]:before{content:"\\e9c2"}.icon-Gift-Filled[_ngcontent-%COMP%]:before{content:"\\e9ba"}.icon-Graduation-Cap-Filled[_ngcontent-%COMP%]:before{content:"\\e9bb"}.icon-Literature-Filled[_ngcontent-%COMP%]:before{content:"\\e9bd"}.icon-User-Groups-Filled[_ngcontent-%COMP%]:before{content:"\\e9be"}.icon-step3[_ngcontent-%COMP%]:before{content:"\\e9ac"}.icon-step32[_ngcontent-%COMP%]:before{content:"\\e9dc"}.icon-step6[_ngcontent-%COMP%]:before{content:"\\e9b0"}.icon-step5[_ngcontent-%COMP%]:before{content:"\\e9b1"}.icon-step4[_ngcontent-%COMP%]:before{content:"\\e9b7"}.icon-step2[_ngcontent-%COMP%]:before{content:"\\e9b8"}.icon-step1[_ngcontent-%COMP%]:before{content:"\\e9b9"}.icon-info[_ngcontent-%COMP%]:before{content:"\\e9ab"}.icon-success[_ngcontent-%COMP%]:before{content:"\\e99b"}.icon-save[_ngcontent-%COMP%]:before{content:"\\e995"}.icon-download[_ngcontent-%COMP%]:before{content:"\\e994"}.icon-fav[_ngcontent-%COMP%]:before{content:"\\e96b"}.icon-fav2[_ngcontent-%COMP%]:before{content:"\\e983"}.icon-rocket-line[_ngcontent-%COMP%]:before{content:"\\e9a5"}.icon-management[_ngcontent-%COMP%]:before{content:"\\e978"}.icon-marketing[_ngcontent-%COMP%]:before{content:"\\e979"}.icon-lifestyle[_ngcontent-%COMP%]:before{content:"\\e97a"}.icon-health[_ngcontent-%COMP%]:before{content:"\\e97b"}.icon-environment[_ngcontent-%COMP%]:before{content:"\\e97c"}.icon-people[_ngcontent-%COMP%]:before{content:"\\e97d"}.icon-science[_ngcontent-%COMP%]:before{content:"\\e97e"}.icon-maths[_ngcontent-%COMP%]:before{content:"\\e97f"}.icon-technology2[_ngcontent-%COMP%]:before{content:"\\e980"}.icon-filter[_ngcontent-%COMP%]:before{content:"\\e981"}.icon-help[_ngcontent-%COMP%]:before{content:"\\e982"}.icon-linkedin-logo[_ngcontent-%COMP%]:before{content:"\\e975"}.icon-phone[_ngcontent-%COMP%]:before{content:"\\e972"}.icon-pin[_ngcontent-%COMP%]:before{content:"\\e973"}.icon-upload2[_ngcontent-%COMP%]:before{content:"\\e95e"}.icon-upload[_ngcontent-%COMP%]:before{content:"\\e943"}.icon-pencil1[_ngcontent-%COMP%]:before{content:"\\e939"}.icon-undo[_ngcontent-%COMP%]:before{content:"\\e965"}.icon-redo[_ngcontent-%COMP%]:before{content:"\\e966"}.icon-stats-bars[_ngcontent-%COMP%]:before{content:"\\e99c"}.icon-rocket2[_ngcontent-%COMP%]:before{content:"\\e9bc"}.icon-meter[_ngcontent-%COMP%]:before{content:"\\e9a6"}.icon-tree[_ngcontent-%COMP%]:before{content:"\\e9cc"}.icon-heart2[_ngcontent-%COMP%]:before{content:"\\e9da"}.icon-cross2[_ngcontent-%COMP%]:before{content:"\\ea0f"}.icon-checkmark[_ngcontent-%COMP%]:before{content:"\\ea10"}.icon-pencil[_ngcontent-%COMP%]:before{content:"\\ea36"}.icon-thumb-up[_ngcontent-%COMP%]:before{content:"\\e946"}.icon-thumb-down[_ngcontent-%COMP%]:before{content:"\\e947"}.icon-thick-chevron-down[_ngcontent-%COMP%]:before{content:"\\e9bf"}.icon-thick-chevron-up[_ngcontent-%COMP%]:before{content:"\\e9c0"}.icon-payment-options[_ngcontent-%COMP%]:before{content:"\\e9a7"}.icon-description[_ngcontent-%COMP%]:before{content:"\\e998"}.icon-diploma-label[_ngcontent-%COMP%]:before{content:"\\e9aa"}.icon-outcome[_ngcontent-%COMP%]:before{content:"\\e9ad"}.icon-assessment[_ngcontent-%COMP%]:before{content:"\\e9ae"}.icon-chapter[_ngcontent-%COMP%]:before{content:"\\e9af"}.icon-course-plan[_ngcontent-%COMP%]:before{content:"\\e9b2"}.icon-module[_ngcontent-%COMP%]:before{content:"\\e9b3"}.icon-play[_ngcontent-%COMP%]:before{content:"\\e9b4"}.icon-ressources[_ngcontent-%COMP%]:before{content:"\\e9b5"}.icon-accreditation1[_ngcontent-%COMP%]:before{content:"\\e99f"}.icon-account[_ngcontent-%COMP%]:before{content:"\\e9a0"}.icon-certification-and-payments[_ngcontent-%COMP%]:before{content:"\\e9a1"}.icon-getting-started[_ngcontent-%COMP%]:before{content:"\\e9a2"}.icon-login-issues[_ngcontent-%COMP%]:before{content:"\\e9a3"}.icon-my-account[_ngcontent-%COMP%]:before{content:"\\e9a4"}.icon-tracking-and-delivery[_ngcontent-%COMP%]:before{content:"\\e9a8"}.icon-upgrade[_ngcontent-%COMP%]:before{content:"\\e9a9"}.icon-warning[_ngcontent-%COMP%]:before{content:"\\e99d"}.icon-danger[_ngcontent-%COMP%]:before{content:"\\e99e"}.icon-crown[_ngcontent-%COMP%]:before{content:"\\e999"}.icon-present[_ngcontent-%COMP%]:before{content:"\\e99a"}.icon-rate[_ngcontent-%COMP%]:before{content:"\\e997"}.icon-search-bar-categories[_ngcontent-%COMP%]:before{content:"\\e996"}.icon-video[_ngcontent-%COMP%]:before{content:"\\e987"}.icon-audio[_ngcontent-%COMP%]:before{content:"\\e988"}.icon-certificate[_ngcontent-%COMP%]:before{content:"\\e989"}.icon-responsive[_ngcontent-%COMP%]:before{content:"\\e98a"}.icon-sort[_ngcontent-%COMP%]:before{content:"\\e986"}.icon-book2[_ngcontent-%COMP%]:before{content:"\\e985"}.icon-learning[_ngcontent-%COMP%]:before{content:"\\e984"}.icon-checked[_ngcontent-%COMP%]:before{content:"\\e974"}.icon-minus[_ngcontent-%COMP%]:before{content:"\\e962"}.icon-plus[_ngcontent-%COMP%]:before{content:"\\e961"}.icon-check[_ngcontent-%COMP%]:before{content:"\\e93f"}.icon-cross3[_ngcontent-%COMP%]:before{content:"\\e948"}.icon-pinterest[_ngcontent-%COMP%]:before{content:"\\ead1"}.icon-flag[_ngcontent-%COMP%]:before{content:"\\e945"}.icon-rotate-right[_ngcontent-%COMP%]:before{content:"\\e968"}.icon-rotate-left[_ngcontent-%COMP%]:before{content:"\\e93e"}.icon-zoom-out[_ngcontent-%COMP%]:before{content:"\\e940"}.icon-zoom-in[_ngcontent-%COMP%]:before{content:"\\e941"}.icon-last-alert[_ngcontent-%COMP%]:before{content:"\\e963"}.icon-megaphone[_ngcontent-%COMP%]:before{content:"\\e964"}.icon-past-month[_ngcontent-%COMP%]:before{content:"\\e967"}.icon-dots[_ngcontent-%COMP%]:before{content:"\\e969"}.icon-new-alert[_ngcontent-%COMP%]:before{content:"\\e96a"}.icon-bell-ring[_ngcontent-%COMP%]:before{content:"\\e971"}.icon-select[_ngcontent-%COMP%]:before{content:"\\e9d1"}.icon-location[_ngcontent-%COMP%]:before{content:"\\e9d0"}.icon-invisble[_ngcontent-%COMP%]:before{content:"\\e9cf"}.icon-visible[_ngcontent-%COMP%]:before{content:"\\e9ce"}.icon-filled-star[_ngcontent-%COMP%]:before{content:"\\e95f"}.icon-previous-icon[_ngcontent-%COMP%]:before{content:"\\e9cd"}.icon-user-log[_ngcontent-%COMP%]:before{content:"\\e903"}.icon-triangle-for-languages[_ngcontent-%COMP%]:before{content:"\\e959"}.icon-search2[_ngcontent-%COMP%]:before{content:"\\e95b"}.icon-alert-off[_ngcontent-%COMP%]:before{content:"\\e95d"}.icon-left-quote[_ngcontent-%COMP%]:before{content:"\\e95a"}.icon-getting-a-certificate[_ngcontent-%COMP%]:before{content:"\\e955"}.icon-payments[_ngcontent-%COMP%]:before{content:"\\e956"}.icon-premium-services[_ngcontent-%COMP%]:before{content:"\\e957"}.icon-technical-help[_ngcontent-%COMP%]:before{content:"\\e958"}.icon-bio[_ngcontent-%COMP%]:before{content:"\\e953"}.icon-camera[_ngcontent-%COMP%]:before{content:"\\e952"}.icon-address[_ngcontent-%COMP%]:before{content:"\\e954"}.icon-profile[_ngcontent-%COMP%]:before{content:"\\e94b"}.icon-education[_ngcontent-%COMP%]:before{content:"\\e94c"}.icon-professional[_ngcontent-%COMP%]:before{content:"\\e94d"}.icon-highlights-icon[_ngcontent-%COMP%]:before{content:"\\e94f"}.icon-left-arrow[_ngcontent-%COMP%]:before{content:"\\e93b"}.icon-right-arrow[_ngcontent-%COMP%]:before{content:"\\e93c"}.icon-technology[_ngcontent-%COMP%]:before{content:"\\e91e"}.icon-table[_ngcontent-%COMP%]:before{content:"\\e951"}.icon-bell[_ngcontent-%COMP%]:before{content:"\\e928"}.icon-send[_ngcontent-%COMP%]:before{content:"\\e915"}.icon-menu[_ngcontent-%COMP%]:before{content:"\\e929"}.icon-error[_ngcontent-%COMP%]:before{content:"\\e927"}.icon-leaf[_ngcontent-%COMP%]:before{content:"\\e926"}.icon-chat[_ngcontent-%COMP%]:before{content:"\\e918"}.icon-path[_ngcontent-%COMP%]:before{content:"\\e920"}.icon-cross[_ngcontent-%COMP%]:before{content:"\\e925"}.icon-suitcase[_ngcontent-%COMP%]:before{content:"\\e950"}.icon-star[_ngcontent-%COMP%]:before{content:"\\e921"}.icon-hat[_ngcontent-%COMP%]:before{content:"\\e90d"}.icon-student[_ngcontent-%COMP%]:before{content:"\\e90c"}.icon-clock[_ngcontent-%COMP%]:before{content:"\\e919"}.icon-controls[_ngcontent-%COMP%]:before{content:"\\e91a"}.icon-course[_ngcontent-%COMP%]:before{content:"\\e91b"}.icon-gears[_ngcontent-%COMP%]:before{content:"\\e91c"}.icon-heart[_ngcontent-%COMP%]:before{content:"\\e91d"}.icon-money[_ngcontent-%COMP%]:before{content:"\\e91f"}.icon-tag[_ngcontent-%COMP%]:before{content:"\\e922"}.icon-time[_ngcontent-%COMP%]:before{content:"\\e923"}.icon-trophy[_ngcontent-%COMP%]:before{content:"\\e924"}.icon-categories[_ngcontent-%COMP%]:before{content:"\\e914"}.icon-faq[_ngcontent-%COMP%]:before{content:"\\e90f"}.icon-globe[_ngcontent-%COMP%]:before{content:"\\e910"}.icon-hand[_ngcontent-%COMP%]:before{content:"\\e911"}.icon-news[_ngcontent-%COMP%]:before{content:"\\e913"}.icon-shop[_ngcontent-%COMP%]:before{content:"\\e917"}.icon-search[_ngcontent-%COMP%]:before{content:"\\e90a"}.icon-envelope[_ngcontent-%COMP%]:before{content:"\\e909"}.icon-lock[_ngcontent-%COMP%]:before{content:"\\e908"}.icon-windows[_ngcontent-%COMP%]:before{content:"\\e905"}.icon-twitter[_ngcontent-%COMP%]:before{content:"\\e94e"}.icon-facebook[_ngcontent-%COMP%]:before{content:"\\e92a"}.icon-google[_ngcontent-%COMP%]:before{content:"\\e901"}.icon-linkedin[_ngcontent-%COMP%]:before{content:"\\e902"}.icon-yahoo[_ngcontent-%COMP%]:before{content:"\\e904"}.icon-mail[_ngcontent-%COMP%]:before{content:"\\e912"}.icon-share[_ngcontent-%COMP%]:before{content:"\\e90b"}.icon-chevron-down[_ngcontent-%COMP%]:before{content:"\\e916"}.icon-suit-case[_ngcontent-%COMP%]:before{content:"\\e92d"}.icon-book[_ngcontent-%COMP%]:before{content:"\\e92e"}.icon-calculator[_ngcontent-%COMP%]:before{content:"\\e92f"}.icon-chemistry[_ngcontent-%COMP%]:before{content:"\\e930"}.icon-computer[_ngcontent-%COMP%]:before{content:"\\e931"}.icon-full-heart[_ngcontent-%COMP%]:before{content:"\\e932"}.icon-messages[_ngcontent-%COMP%]:before{content:"\\e933"}.icon-target[_ngcontent-%COMP%]:before{content:"\\e935"}.icon-world[_ngcontent-%COMP%]:before{content:"\\e936"}.icon-skills[_ngcontent-%COMP%]:before{content:"\\e960"}.icon-user[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-circle-group[_ngcontent-%COMP%]:before{content:"\\e942"}.icon-bag[_ngcontent-%COMP%]:before{content:"\\e96c"}.icon-bell-line[_ngcontent-%COMP%]:before{content:"\\e96d"}.icon-cart[_ngcontent-%COMP%]:before{content:"\\e96e"}.icon-faq-line[_ngcontent-%COMP%]:before{content:"\\e96f"}.icon-home[_ngcontent-%COMP%]:before{content:"\\e970"}.icon-paths[_ngcontent-%COMP%]:before{content:"\\e949"}.icon-geography[_ngcontent-%COMP%]:before{content:"\\e934"}.icon-time-lapse[_ngcontent-%COMP%]:before{content:"\\e900"}.icon-home2[_ngcontent-%COMP%]:before{content:"\\e906"}.icon-courses[_ngcontent-%COMP%]:before{content:"\\e907"}.icon-flashTesting[_ngcontent-%COMP%]:before{content:"\\e92c"}.icon-studyGroups[_ngcontent-%COMP%]:before{content:"\\e92b"}.icon-publishing[_ngcontent-%COMP%]:before{content:"\\e937"}.icon-communityMain[_ngcontent-%COMP%]:before{content:"\\e98b"}.icon-about[_ngcontent-%COMP%]:before{content:"\\e93a"}.icon-alisonShop[_ngcontent-%COMP%]:before{content:"\\e938"}.icon-category[_ngcontent-%COMP%]:before{content:"\\e9b6"}.icon-document-file-zip[_ngcontent-%COMP%]:before{content:"\\ea31"}.icon-checkmark2[_ngcontent-%COMP%]:before{content:"\\ea0c"}.icon-lock2[_ngcontent-%COMP%]:before{content:"\\ea0a"}.icon-printer[_ngcontent-%COMP%]:before{content:"\\e9c1"}.icon-arrow-thin-right[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-nav-learning[_ngcontent-%COMP%]:before{content:"\\e932"}.icon-build[_ngcontent-%COMP%]:before{content:"\\e931"}.icon-earn[_ngcontent-%COMP%]:before{content:"\\e930"}.icon-megaphone-alt1[_ngcontent-%COMP%]:before{content:"\\e983"}.icon-megaphone-alt[_ngcontent-%COMP%]:before{content:"\\e984";color:#6ea21f}@media (min-width: 768px){.mobile-only[_ngcontent-%COMP%]{display:none}}.desktop-only[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.desktop-only[_ngcontent-%COMP%]{display:initial}}.premium-le[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;position:relative;padding:34px 16px 40px;min-height:100vh;width:100%}@media (min-width: 768px){.premium-le[_ngcontent-%COMP%]{padding:50px 118px}.premium-le-step-0[_ngcontent-%COMP%]:before{content:url(/html/site/img/angular-shop/study-icon-ads.svg);position:absolute;top:51px;left:0}.premium-le-step-1[_ngcontent-%COMP%]:before{content:url(/html/site/img/angular-shop/study-icon-payment.svg);position:absolute;top:20px;left:-16px}}@media (max-width: 1350px) and (min-width: 1250px){.premium-le[_ngcontent-%COMP%]{padding:50px}}.premium-le__title[_ngcontent-%COMP%]{font: 900 18px/28px Roboto;letter-spacing:.36px}@media (min-width: 768px){.premium-le__title[_ngcontent-%COMP%]{font: 900 28px/32px Roboto;letter-spacing:0px}}.premium-le__subtitle[_ngcontent-%COMP%]{font: 500 14px/32px Roboto;color:#7b8993}.premium-le__button[_ngcontent-%COMP%]{cursor:pointer;color:#fff;font: 500 14px/19px Roboto;background:#0092CA;border-radius:8px;border:none;padding:8px 27px;width:auto}.premium-le__button[_ngcontent-%COMP%]:hover, .premium-le__button[_ngcontent-%COMP%]:focus{background:#1581AF}.premium-le__button[_ngcontent-%COMP%]:disabled{cursor:initial;background:#CFCFCF}', ".premium-le__congrats[_ngcontent-%COMP%]{padding:20px 33px;text-align:center}@media (min-width: 1070px){.premium-le__congrats[_ngcontent-%COMP%]{padding:57px 33px}}.premium-le__congrats__title[_ngcontent-%COMP%]{line-height:26px}@media (min-width: 1070px){.premium-le__congrats__title[_ngcontent-%COMP%]{line-height:32px}}.premium-le__congrats__subtitle[_ngcontent-%COMP%]{font: 500 14px/32px Roboto;color:#5d676e;margin-top:8px}@media (min-width: 1070px){.premium-le__congrats__subtitle[_ngcontent-%COMP%]{font: 500 24px/32px Roboto;margin-top:16px}}.premium-le__congrats__content[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:center}@media (min-width: 1070px){.premium-le__congrats__content[_ngcontent-%COMP%]{min-height:437px}}.premium-le__congrats__content__background[_ngcontent-%COMP%]{content:url(/html/site/img/angular-shop/free-learning-background-mobile.svg);max-width:100%}@media (min-width: 1070px){.premium-le__congrats__content__background[_ngcontent-%COMP%]{content:url(/html/site/img/angular-shop/free-learning-background.svg)}}.premium-le__congrats__content[_ngcontent-%COMP%]   .premium-le__button[_ngcontent-%COMP%]{margin-top:12px}@media (min-width: 1070px){.premium-le__congrats__content[_ngcontent-%COMP%]   .premium-le__button[_ngcontent-%COMP%]{position:absolute;right:auto;bottom:25px;left:auto;margin:0 auto}}.premium-le__congrats__button[_ngcontent-%COMP%]{font-weight:500;padding:12px 45px}"]
                }),
                H
            })();
            var K = function (A) {
                    return A.WELCOME_SCREEN = "chooseOfferType",
                    A.PAYMENT = "paymentStep",
                    A
                }(K || {}),
                ne = n(3766),
                re = n(3424),
                _ = n(25),
                p = n(3041),
                R = n(7214),
                W = n(9680);
            function J(A, H) {
                1 & A && (t.TgZ(0, "p", 25), t._uU(1), t.ALo(2, "translate"), t.qZA()),
                2 & A && (t.xp6(1), t.hij(" ", t.lcZ(2, 1, "shopping.ONE_MONTH_PLAN"), " "))
            }
            function G(A, H) {
                if (1 & A && t._UZ(0, "p", 26), 2 & A) {
                    const j = t.oxw();
                    t.Q6J("innerHTML", "\u201c" + j.courseName + "\u201d", t.oJD)
                }
            }
            function X(A, H) {
                1 & A && (t.TgZ(0, "p", 27), t._uU(1), t.ALo(2, "translate"), t.ALo(3, "translate"), t.ALo(4, "translate"), t.qZA()),
                2 & A && (t.xp6(1), t.lnq(" ", t.lcZ(2, 3, "shopping.NO_ADVERT"), ". ", t.lcZ(3, 5, "shopping.NO_DISTRACTIONS"), ". ", t.lcZ(4, 7, "shopping.SPACE_TO_LEARN"), ". "))
            }
            const oe = function (A) {
                return ["premium-le__payment__close", A]
            };
            let le = (() => {
                var A;
                class H {
                    constructor(h, v, F) {
                        this._shoppingCartService = h,
                        this._notificationService = v,
                        this._courseService = F,
                        this.startCourse = new t.vpe,
                        this.PremiumOfferLeAds = _.b,
                        this.subscriptions = []
                    }
                    ngOnInit() {
                        this.courseName = this._courseService.getCourseName(),
                        this.subscriptions.push(this._shoppingCartService.getUserInfo().subscribe(h => {
                            this.user = h
                        })),
                        this.subscriptions.push(this._shoppingCartService.getPaymentMethods().subscribe(h => {
                            this.paymentMethodOptions = {
                                stripe: h.find(v => "stripe_credit_card" === v.code),
                                paypal: h.find(v => "paypal_account" === v.code)
                            }
                        }))
                    }
                    ngOnDestroy() {
                        this.subscriptions.forEach(h => h.unsubscribe())
                    }
                    returnToAds() {
                        this.startCourse.emit(0)
                    }
                    doCheckout(h) {
                        if (!h || !this.user) 
                            return this._notificationService.notify("You cannot complete the order. Please contact support", re.E.Error);
                        
                        $(".loading").fadeIn(),
                        this.subscriptions.push(this._shoppingCartService.doCheckout(this.user.id, h.id).subscribe(v => {
                            "paypal" === v.type && ($(".loading").fadeOut(), window.open(v.value, "_self")),
                            "stripe" === v.type && Stripe(w.N.stripePublishableKey).redirectToCheckout({sessionId: v.value}).then(F => {
                                $(".loading").fadeOut(),
                                console.log(F)
                            })
                        }))
                    }
                }
                return(A = H).\u0275fac = function (h) {
                    return new(h || A)(t.Y36(p.F), t.Y36(R.g), t.Y36(W.U))
                },
                A.\u0275cmp = t.Xpm({
                    type: A,
                    selectors: [
                        ["app-premium-le-payment"]
                    ],
                    inputs: {
                        selectedPlan: "selectedPlan"
                    },
                    outputs: {
                        startCourse: "startCourse"
                    },
                    decls: 42,
                    vars: 24,
                    consts: [
                        [
                            1, "premium-le__payment"
                        ],
                        [
                            3, "ngClass", "click"
                        ],
                        [
                            1, "premium-le__title", "desktop-only"
                        ],
                        [
                            1, "mobile-only"
                        ],
                        [
                            1, "premium-le__title"
                        ],
                        [
                            1, "premium-le__subtitle"
                        ],
                        [
                            1, "premium-le__payment__list"
                        ],
                        [
                            1,
                            "premium-le__payment__list__item",
                            "premium-le__payment__list__item--paypal",
                            3,
                            "click"
                        ],
                        [
                            "src",
                            "/html/site/img/angular-shop/paypal-logo.svg",
                            "alt",
                            "pay with paypal",
                            "width",
                            "116",
                            "height",
                            "30",
                            1,
                            "premium-le__payment__list__item__image"
                        ],
                        [
                            1, "premium-le__payment__list__item__title"
                        ],
                        [
                            1, "desktop-only"
                        ],
                        [
                            1,
                            "premium-le__payment__list__item",
                            "premium-le__payment__list__item--card",
                            3,
                            "click"
                        ],
                        [
                            "src",
                            "/html/site/img/angular-shop/bank-card.svg",
                            "alt",
                            "pay with debit card",
                            "width",
                            "58",
                            "height",
                            "41",
                            1,
                            "premium-le__payment__list__item__image"
                        ],
                        [
                            1, "premium-le__payment__plan"
                        ],
                        [
                            1, "premium-le__payment__plan__title"
                        ],
                        [
                            1, "premium-le__payment__plan__title__label"
                        ],
                        [
                            1, "premium-le__payment__plan__content"
                        ],
                        [
                            1, "premium-le__payment__plan__content__left"
                        ],
                        [
                            1, "premium-le__payment__plan__content__left__title", 3, "innerHTML"
                        ],
                        [
                            "class", "premium-le__payment__plan__content__left__description", 4, "ngIf"
                        ],
                        [
                            "class",
                            "premium-le__payment__plan__content__left__description premium-le__payment__plan__content__left__description--light",
                            3,
                            "innerHTML",
                            4,
                            "ngIf"
                        ],
                        [
                            "class", "premium-le__payment__plan__content__left__benefits", 4, "ngIf"
                        ],
                        [
                            1, "premium-le__payment__plan__content__right"
                        ],
                        [
                            1, "premium-le__payment__plan__content__right__title"
                        ],
                        [
                            1, "premium-le__payment__plan__content__right__price"
                        ],
                        [
                            1, "premium-le__payment__plan__content__left__description"
                        ],
                        [
                            1,
                            "premium-le__payment__plan__content__left__description",
                            "premium-le__payment__plan__content__left__description--light",
                            3,
                            "innerHTML"
                        ],
                        [
                            1, "premium-le__payment__plan__content__left__benefits"
                        ]
                    ],
                    template: function (h, v) {
                        1 & h && (t.TgZ(0, "section", 0)(1, "span", 1),
                        t.NdJ("click", function () {
                            return v.returnToAds()
                        }),
                        t.qZA(),
                        t.TgZ(2, "h3", 2),
                        t._uU(3),
                        t.ALo(4, "translate"),
                        t.qZA(),
                        t.TgZ(5, "div", 3)(6, "h3", 4),
                        t._uU(7, " Go Ads Free, Join Alison Premium "),
                        t.qZA(),
                        t.TgZ(8, "h4", 5),
                        t._uU(9),
                        t.ALo(10, "translate"),
                        t.qZA()(),
                        t.TgZ(11, "div", 6)(12, "article", 7),
                        t.NdJ("click", function () {
                            return v.doCheckout(null == v.paymentMethodOptions ? null : v.paymentMethodOptions.paypal)
                        }),
                        t._UZ(13, "img", 8),
                        t.TgZ(14, "p", 9)(15, "span", 10),
                        t._uU(16, "Pay with"),
                        t.qZA(),
                        t._uU(17, " Paypal "),
                        t.qZA()(),
                        t.TgZ(18, "article", 11),
                        t.NdJ("click", function () {
                            return v.doCheckout(null == v.paymentMethodOptions ? null : v.paymentMethodOptions.stripe)
                        }),
                        t._UZ(19, "img", 12),
                        t.TgZ(20, "p", 9)(21, "span", 10),
                        t._uU(22, "Pay with"),
                        t.qZA(),
                        t._uU(23),
                        t.ALo(24, "translate"),
                        t.qZA()()(),
                        t.TgZ(25, "div", 13)(26, "p", 14)(27, "span", 15),
                        t._uU(28),
                        t.ALo(29, "translate"),
                        t.qZA()(),
                        t.TgZ(30, "div", 16)(31, "div", 17),
                        t._UZ(32, "p", 18),
                        t.YNc(33, J, 3, 3, "p", 19),
                        t.YNc(34, G, 1, 1, "p", 20),
                        t.YNc(35, X, 5, 9, "p", 21),
                        t.qZA(),
                        t.TgZ(36, "div", 22)(37, "p", 23),
                        t._uU(38),
                        t.qZA(),
                        t.TgZ(39, "p", 24),
                        t._uU(40),
                        t.ALo(41, "currency"),
                        t.qZA()()()()()),
                        2 & h && (t.xp6(1), t.Q6J("ngClass", t.VKq(22, oe, (null == v.selectedPlan ? null : v.selectedPlan.name) === v.PremiumOfferLeAds.ONE_TIME_PURCHASE ? "premium-le__payment__close--one-time-purchase" : "premium-le__payment__close--monthly-plan")), t.xp6(2), t.hij(" ", t.lcZ(4, 11, "shopping.PAYMENT_CHOICE_TITLE"), " "), t.xp6(6), t.hij(" ", t.lcZ(10, 13, "shopping.PAYMENT_CHOICE_TITLE"), " "), t.xp6(14), t.hij(" ", t.lcZ(24, 15, "b2b.CREDIT_DEBIT_CARD"), " "), t.xp6(5), t.hij(" ", t.lcZ(29, 17, "shopping.SELECTED_PLAN"), " "), t.xp6(4), t.Q6J("innerHTML", null == v.selectedPlan ? null : v.selectedPlan.description, t.oJD), t.xp6(1), t.Q6J("ngIf", (null == v.selectedPlan ? null : v.selectedPlan.name) === v.PremiumOfferLeAds.MONTHLY), t.xp6(1), t.Q6J("ngIf", (null == v.selectedPlan ? null : v.selectedPlan.name) === v.PremiumOfferLeAds.ONE_TIME_PURCHASE), t.xp6(1), t.Q6J("ngIf", (null == v.selectedPlan ? null : v.selectedPlan.name) === v.PremiumOfferLeAds.MONTHLY), t.xp6(3), t.hij(" ", null == v.selectedPlan ? null : v.selectedPlan.name, " "), t.xp6(2), t.hij(" ", t.xi3(41, 19, null == v.selectedPlan ? null : v.selectedPlan.price, "EUR"), " "))
                    },
                    dependencies: [
                        l.mk, l.O5, l.H9, Q.X$
                    ],
                    styles: ['@charset "UTF-8";.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{text-align:center;font-weight:bolder}.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border:1px solid;border-bottom:0}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{min-height:78px;flex:1}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{display:flex}.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{float:left;flex:1;display:flex;flex-direction:column;align-items:stretch}.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{pointer-events:all!important}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{min-height:100px}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right:initial;border-left:1px solid}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border-bottom:1px solid}.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;float:left}.cal-month-view[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]{flex:1;align-items:flex-end;margin:3px;line-height:10px;display:flex;flex-wrap:wrap}.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-in-month.cal-has-events[_ngcontent-%COMP%]{cursor:pointer}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{opacity:.1;cursor:default}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:1.9em}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{padding:15px}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{position:relative;top:2px}.cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%], .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{opacity:.3}.cal-month-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%]{cursor:move}.cal-month-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]{cursor:pointer}.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]:hover{text-decoration:underline}.cal-month-view[_ngcontent-%COMP%]{background-color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]:hover{background-color:#fafafa}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]:hover, .cal-month-view[_ngcontent-%COMP%]   .cal-cell.cal-has-events.cal-open[_ngcontent-%COMP%]{background-color:#ededed}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right-color:initial;border-left-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border-bottom-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{background-color:#b94a48;color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#8b0000}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]{background-color:#e8fde7}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-drag-over[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{color:#fff;background-color:#555;box-shadow:inset 0 0 15px #00000080}.cal-week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{display:flex;padding-left:70px;border:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{padding-left:initial;padding-right:70px}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{flex:1;text-align:center;padding:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right:initial;border-left:1px solid}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left:initial;border-right:1px solid}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;opacity:.5}.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{flex-grow:1;border-left:solid 1px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left:initial;border-right:solid 1px}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{font-size:12px;border:1px solid;direction:ltr}.cal-week-view[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%]{width:70px;height:100%}.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{position:absolute;width:100%;height:2px;z-index:2}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]{border:solid 1px;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;position:absolute;top:0;z-index:0}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%]{position:relative;height:31px;margin-left:70px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]{display:inline-block;position:absolute}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container.resize-active[_ngcontent-%COMP%]{z-index:1;pointer-events:none}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:5px;border-bottom-left-radius:5px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:initial;border-bottom-left-radius:initial;border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-right-radius:initial;border-bottom-right-radius:initial;border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%]{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{right:0}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{right:initial;left:0}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]{pointer-events:none;z-index:1}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]{position:relative;border:solid 1px;border-top:0;display:flex}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]{display:flex;flex-grow:1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]{position:absolute;z-index:1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%]{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{bottom:0}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]:after{content:"\\a0"}.cal-week-view[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]:not(.cal-draggable){cursor:pointer}.cal-week-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%]{cursor:move}.cal-week-view[_ngcontent-%COMP%]   mwl-calendar-week-view-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{display:block}.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%]{border-bottom:thin dashed}.cal-week-view[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%]{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment.cal-after-hour-start[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%]{display:none}.cal-week-view[_ngcontent-%COMP%]   .cal-starts-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-ends-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view[_ngcontent-%COMP%]{background-color:#fff;border-top:solid 1px #e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{border-color:#e1e1e1;border-top:0}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right-color:initial;border-left:solid 1px #e1e1e1!important}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:hover, .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-today[_ngcontent-%COMP%]{background-color:#e8fde7}.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-weekend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8b0000}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]:not(.cal-resize-active)   .cal-hour-segment[_ngcontent-%COMP%]:hover{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-odd[_ngcontent-%COMP%]{background-color:#fafafa}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%]{border-bottom-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{background-color:#ea4334}.cal-day-view[_ngcontent-%COMP%]   mwl-calendar-week-view-header[_ngcontent-%COMP%]{display:none}.cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{margin-left:70px}[dir=rtl][_ngcontent-%COMP%]   .cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-day-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left:0}.cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{margin-left:70px;width:calc(100% - 70px)}[dir=rtl][_ngcontent-%COMP%]   .cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-tooltip[_ngcontent-%COMP%]{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]{padding:0 5px;margin-left:-3px}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px}.cal-tooltip-inner[_ngcontent-%COMP%]{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem}.cal-tooltip-arrow[_ngcontent-%COMP%]{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-top-color:#000}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-left-color:#000}.cal-tooltip-inner[_ngcontent-%COMP%]{color:#fff;background-color:#000}@media screen and (max-width: 768px){.hide--mobile[_ngcontent-%COMP%]{display:none!important}}@media screen and (min-width: 768px){.hide--pc[_ngcontent-%COMP%]{display:none!important}}.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after{content:unset;display:table}.clearfix[_ngcontent-%COMP%]:after{clear:both}.container[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container[_ngcontent-%COMP%]:before, .container[_ngcontent-%COMP%]:after{content:unset;display:table}.container[_ngcontent-%COMP%]:after{clear:both}@media (min-width: 768px){.container[_ngcontent-%COMP%]{width:750px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{width:970px}.col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%]{float:left}.col-md-1[_ngcontent-%COMP%]{width:8.3333333333%}.col-md-2[_ngcontent-%COMP%]{width:16.6666666667%}.col-md-3[_ngcontent-%COMP%]{width:25%}.col-md-4[_ngcontent-%COMP%]{width:33.3333333333%}.col-md-5[_ngcontent-%COMP%]{width:41.6666666667%}.col-md-6[_ngcontent-%COMP%]{width:50%}.col-md-7[_ngcontent-%COMP%]{width:58.3333333333%}.col-md-8[_ngcontent-%COMP%]{width:66.6666666667%}.col-md-9[_ngcontent-%COMP%]{width:75%}.col-md-10[_ngcontent-%COMP%]{width:83.3333333333%}.col-md-11[_ngcontent-%COMP%]{width:91.6666666667%}.col-md-12[_ngcontent-%COMP%]{width:100%}.col-md-pull-0[_ngcontent-%COMP%]{right:auto}.col-md-pull-1[_ngcontent-%COMP%]{right:8.3333333333%}.col-md-pull-2[_ngcontent-%COMP%]{right:16.6666666667%}.col-md-pull-3[_ngcontent-%COMP%]{right:25%}.col-md-pull-4[_ngcontent-%COMP%]{right:33.3333333333%}.col-md-pull-5[_ngcontent-%COMP%]{right:41.6666666667%}.col-md-pull-6[_ngcontent-%COMP%]{right:50%}.col-md-pull-7[_ngcontent-%COMP%]{right:58.3333333333%}.col-md-pull-8[_ngcontent-%COMP%]{right:66.6666666667%}.col-md-pull-9[_ngcontent-%COMP%]{right:75%}.col-md-pull-10[_ngcontent-%COMP%]{right:83.3333333333%}.col-md-pull-11[_ngcontent-%COMP%]{right:91.6666666667%}.col-md-pull-12[_ngcontent-%COMP%]{right:100%}.col-md-push-0[_ngcontent-%COMP%]{left:auto}.col-md-push-1[_ngcontent-%COMP%]{left:8.3333333333%}.col-md-push-2[_ngcontent-%COMP%]{left:16.6666666667%}.col-md-push-3[_ngcontent-%COMP%]{left:25%}.col-md-push-4[_ngcontent-%COMP%]{left:33.3333333333%}.col-md-push-5[_ngcontent-%COMP%]{left:41.6666666667%}.col-md-push-6[_ngcontent-%COMP%]{left:50%}.col-md-push-7[_ngcontent-%COMP%]{left:58.3333333333%}.col-md-push-8[_ngcontent-%COMP%]{left:66.6666666667%}.col-md-push-9[_ngcontent-%COMP%]{left:75%}.col-md-push-10[_ngcontent-%COMP%]{left:83.3333333333%}.col-md-push-11[_ngcontent-%COMP%]{left:91.6666666667%}.col-md-push-12[_ngcontent-%COMP%]{left:100%}.col-md-offset-0[_ngcontent-%COMP%]{margin-left:0}.col-md-offset-1[_ngcontent-%COMP%]{margin-left:8.3333333333%}.col-md-offset-2[_ngcontent-%COMP%]{margin-left:16.6666666667%}.col-md-offset-3[_ngcontent-%COMP%]{margin-left:25%}.col-md-offset-4[_ngcontent-%COMP%]{margin-left:33.3333333333%}.col-md-offset-5[_ngcontent-%COMP%]{margin-left:41.6666666667%}.col-md-offset-6[_ngcontent-%COMP%]{margin-left:50%}.col-md-offset-7[_ngcontent-%COMP%]{margin-left:58.3333333333%}.col-md-offset-8[_ngcontent-%COMP%]{margin-left:66.6666666667%}.col-md-offset-9[_ngcontent-%COMP%]{margin-left:75%}.col-md-offset-10[_ngcontent-%COMP%]{margin-left:83.3333333333%}.col-md-offset-11[_ngcontent-%COMP%]{margin-left:91.6666666667%}.col-md-offset-12[_ngcontent-%COMP%]{margin-left:100%}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;min-height:100%;font-family:Roboto,sans-serif}body[_ngcontent-%COMP%]{line-height:1}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:"";content:none}b[_ngcontent-%COMP%]{font-weight:700}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}*[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-tap-highlight-color:transparent}a[_ngcontent-%COMP%]{outline:none;text-decoration:none}body[_ngcontent-%COMP%]{background:#fff;font-weight:400;font-size:1em;letter-spacing:0;line-height:1.3em;position:relative;overflow-x:hidden}p[_ngcontent-%COMP%]{font-weight:400;font-size:.875em;line-height:1.5em;margin:0 0 20px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}input.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border:1px solid #ff3d71!important}select.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border:1px solid #ff3d71!important}[hidden][_ngcontent-%COMP%]{display:none!important}.center[_ngcontent-%COMP%]{margin:0;padding:0}.app-loader-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column}.app-loader[_ngcontent-%COMP%], .app-loader[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.app-loader[_ngcontent-%COMP%]{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #bababa;transform:translateZ(0);animation:_ngcontent-%COMP%_load8 1.1s infinite linear}.app-loader.min[_ngcontent-%COMP%]{margin:0 auto;font-size:5px}.app-loader.micro[_ngcontent-%COMP%]{margin:0 auto;font-size:2px}.app-loader.loader-button[_ngcontent-%COMP%]{margin:0 auto;font-size:3px}@keyframes _ngcontent-%COMP%_load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button[_ngcontent-%COMP%]{transition:background-color .3s ease-in-out}.animate-fast[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.mr-10[_ngcontent-%COMP%]{margin-right:10px}.mr-25[_ngcontent-%COMP%]{margin-right:25px}.mb-10[_ngcontent-%COMP%]{margin-bottom:10px}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.mb-30[_ngcontent-%COMP%]{margin-bottom:30px}.mb-40[_ngcontent-%COMP%]{margin-bottom:40px}.mt-10[_ngcontent-%COMP%]{margin-top:10px}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-80[_ngcontent-%COMP%]{margin-top:80px}.w-100[_ngcontent-%COMP%]{width:100%}.w-50[_ngcontent-%COMP%]{width:50%}.pb-35[_ngcontent-%COMP%]{padding-bottom:35px!important}.mt-auto[_ngcontent-%COMP%]{margin-top:auto}.position-relative[_ngcontent-%COMP%]{position:relative}.min-height-100[_ngcontent-%COMP%]{min-height:100%}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-container.column[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.flex-container.row[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-container[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.flex-container[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%]{flex:1}.flex-container[_ngcontent-%COMP%]   .flex-2[_ngcontent-%COMP%]{flex:2}.flex-container[_ngcontent-%COMP%]   .flex-3[_ngcontent-%COMP%]{flex:3}.flex-container[_ngcontent-%COMP%]   .flex-4[_ngcontent-%COMP%]{flex:4}.flex-container[_ngcontent-%COMP%]   .flex-5[_ngcontent-%COMP%]{flex:5}.flex-container[_ngcontent-%COMP%]   .justify-content-center[_ngcontent-%COMP%]{justify-content:center}.flex-container[_ngcontent-%COMP%]   .justify-content-space-between[_ngcontent-%COMP%]{justify-content:space-between}.flex-container[_ngcontent-%COMP%]   .justify-content-space-around[_ngcontent-%COMP%]{justify-content:space-around}.flex-container[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%]{justify-content:end}.flex-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{align-items:center}.flex-container[_ngcontent-%COMP%]   .flex-none[_ngcontent-%COMP%]{flex:none}.flex-container[_ngcontent-%COMP%]   .align-self-center[_ngcontent-%COMP%]{align-self:center}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.z-index-1[_ngcontent-%COMP%]{z-index:1}.slick-slider[_ngcontent-%COMP%]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[_ngcontent-%COMP%]{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list[_ngcontent-%COMP%]:focus{outline:none}.slick-list.dragging[_ngcontent-%COMP%]{cursor:pointer;cursor:hand}.slick-slider[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%]{transform:translateZ(0)}.slick-track[_ngcontent-%COMP%]{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track[_ngcontent-%COMP%]:before, .slick-track[_ngcontent-%COMP%]:after{display:table;content:""}.slick-track[_ngcontent-%COMP%]:after{clear:both}.slick-loading[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%]{visibility:hidden}.slick-slide[_ngcontent-%COMP%]{display:none;float:left;height:100%;min-height:1px}[dir=rtl][_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{float:right}.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.slick-slide.slick-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.slick-slide.dragging[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{pointer-events:none}.slick-initialized[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{display:block}.slick-loading[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{visibility:hidden}.slick-vertical[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[_ngcontent-%COMP%]{display:none}.slick-arrow.slick-prev[_ngcontent-%COMP%], .slick-arrow.slick-next[_ngcontent-%COMP%]{font-size:0;line-height:0;position:absolute;top:50%;display:block;padding:0;transform:translateY(-50%);cursor:pointer;color:transparent;border:none;outline:0;width:40px;height:40px;background-repeat:no-repeat;background-position:8px 12px;background-color:#fff;border-radius:50%;box-shadow:0 2px 6px #32323266;z-index:1}.slick-arrow.slick-prev[_ngcontent-%COMP%]{left:-15px;background-image:url(/html/site/img/category-page/arrow-active-left.png)}.slick-arrow.slick-prev.slick-disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-left.png)}.slick-arrow.slick-next[_ngcontent-%COMP%]{right:-15px;background-image:url(/html/site/img/category-page/arrow-active-right.png)}.slick-arrow.slick-next.slick-disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-right.png)}.slick-slide[_ngcontent-%COMP%]{min-height:375px;margin:0 5px}.slick-slide[_ngcontent-%COMP%]   .course-block[_ngcontent-%COMP%]   .course-block-content[_ngcontent-%COMP%]{padding:20px 10px 90px;text-align:left;background:#f3f6f7}.slick-slide[_ngcontent-%COMP%]   .course-block[_ngcontent-%COMP%]   .course-block-intro[_ngcontent-%COMP%]{background:#f3f6f7}.slick-track[_ngcontent-%COMP%]{min-height:400px}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px}}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:700;font-size:22px;margin-left:6px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px!important}}@media screen and (max-width: 398px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{line-height:23px}}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{color:#89959d}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]{max-width:100%}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{position:relative}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-has-events[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#fff!important;opacity:1}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]{position:absolute;top:0;width:32px;margin:0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-radius:6px;width:32px;height:32px;margin:0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]:not(.best-day){background-color:#1794c9}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event.best-day[_ngcontent-%COMP%]{background-image:url(/html/site/img/angular-shop/learner-report/best_day_big_icon.png);background-size:contain;background-color:unset}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:32px;min-height:32px}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{min-height:23px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{display:none!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border:none!important;margin:10px 0}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{margin:0!important}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{border-bottom:1px solid #F3F6F7!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{color:#89959d;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:14px;padding:0 0 16px}@media screen and (min-width: 320px) and (max-width: 360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{font-size:12px}}@media screen and (min-width: 360px) and (max-width: 650px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{padding:0 0 11px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%], #monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border:none!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{height:224px;margin-top:20px;margin-bottom:45px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{margin-top:0!important}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#b3bdc0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{max-width:32px;min-height:32px;height:32px;margin:0 16px}@media screen and (min-width: 320px) and (max-width: 359px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 auto;min-height:30px}}@media screen and (min-width: 1200px) and (max-width: 1360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 12px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#5d676e;font-size:12px!important;font-weight:700;margin:0}@media screen and (max-width: 360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{margin:0}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#5d676e}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]{background-color:transparent}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:12px!important}.learning-stats-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]{width:100%;height:130px;background-color:#fff;box-shadow:0 3px 6px #96969640;border-radius:12px}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-spend[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .day-time[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-spend[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .day-time[_ngcontent-%COMP%]{color:#465159;font-size:16px;font-weight:700}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-type[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-type[_ngcontent-%COMP%]{text-transform:uppercase;color:#89959d;font-size:12px;font-weight:700}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]{margin-left:5px}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.less[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.less[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.less[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.less[_ngcontent-%COMP%]{color:#e32726}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.more[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.more[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.more[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.more[_ngcontent-%COMP%]{color:#108445}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.additional-actions[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:32px;margin-bottom:10px}.additional-actions[_ngcontent-%COMP%]   .reminders-msg[_ngcontent-%COMP%], .additional-actions[_ngcontent-%COMP%]   .keep-learning-msg[_ngcontent-%COMP%]{color:#465159;font-size:14px}.additional-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:196px;width:100%;height:42px;background-color:#1794c9;border-radius:50px;color:#fff;border:unset;margin-left:10px;cursor:pointer;font-weight:500}.additional-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#1783b1}@font-face{font-family:icomoon;src:url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff2?ueshyb) format("woff2"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.ttf?ueshyb) format("truetype"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff?ueshyb) format("woff"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.svg?ueshyb#icomoon) format("svg");font-weight:400;font-style:normal}[class^=icon-][_ngcontent-%COMP%], [class*=" icon-"][_ngcontent-%COMP%]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-filter_up[_ngcontent-%COMP%]:before{content:"\\ea73";color:#fff}.icon-filter_down[_ngcontent-%COMP%]:before{content:"\\ea74";color:#fff}.icon-seo-and-web-1[_ngcontent-%COMP%]:before{content:"\\ea6e"}.icon-discount[_ngcontent-%COMP%]:before{content:"\\ea6f"}.icon-tick-mark[_ngcontent-%COMP%]:before{content:"\\ea70"}.icon-student1[_ngcontent-%COMP%]:before{content:"\\ea71"}.icon-cart1[_ngcontent-%COMP%]:before{content:"\\ea72"}.icon-close-group[_ngcontent-%COMP%]:before{content:"\\ea67"}.icon-user-list[_ngcontent-%COMP%]:before{content:"\\ea68"}.icon-new-group[_ngcontent-%COMP%]:before{content:"\\ea69"}.icon-privileges[_ngcontent-%COMP%]:before{content:"\\ea6a"}.icon-statistics[_ngcontent-%COMP%]:before{content:"\\ea6b"}.icon-group-members[_ngcontent-%COMP%]:before{content:"\\ea6c"}.icon-group-details[_ngcontent-%COMP%]:before{content:"\\ea6d"}.icon-blue-search[_ngcontent-%COMP%]:before{content:"\\ea60";color:#0094c9}.icon-clipboard[_ngcontent-%COMP%]:before{content:"\\ea61";color:#0094c9}.icon-share-link[_ngcontent-%COMP%]:before{content:"\\ea62";color:#0094c9}.icon-speaker[_ngcontent-%COMP%]:before{content:"\\ea63";color:#0094c9}.icon-purple-display-upload[_ngcontent-%COMP%]:before{content:"\\ea59";color:#5900b1}.icon-purple-form[_ngcontent-%COMP%]:before{content:"\\ea5a";color:#5900b1}.icon-purple-display-done[_ngcontent-%COMP%]:before{content:"\\ea5b";color:#5900b1}.icon-purple-web[_ngcontent-%COMP%]:before{content:"\\ea54";color:#5900b1}.icon-purple-group[_ngcontent-%COMP%]:before{content:"\\ea55";color:#5900b1}.icon-purple-rocket[_ngcontent-%COMP%]:before{content:"\\ea56";color:#5900b1}.icon-purple-screen[_ngcontent-%COMP%]:before{content:"\\ea57";color:#5900b1}.icon-purple-wisdom[_ngcontent-%COMP%]:before{content:"\\ea58";color:#5900b1}.icon-pd-dashboard[_ngcontent-%COMP%]:before{content:"\\ea49";color:#aaa}.icon-pd-help[_ngcontent-%COMP%]:before{content:"\\ea4a";color:#aaa}.icon-pd-logout[_ngcontent-%COMP%]:before{content:"\\ea4b";color:#0094c9}.icon-pd-play-button[_ngcontent-%COMP%]:before{content:"\\ea4c";color:#0094c9}.icon-pd-settings[_ngcontent-%COMP%]:before{content:"\\ea4d";color:#aaa}.icon-nb-active-courses[_ngcontent-%COMP%]:before{content:"\\ea3d"}.icon-nb-career[_ngcontent-%COMP%]:before{content:"\\ea3e"}.icon-nb-categories[_ngcontent-%COMP%]:before{content:"\\ea3f"}.icon-nb-dashboard[_ngcontent-%COMP%]:before{content:"\\ea40"}.icon-nb-help[_ngcontent-%COMP%]:before{content:"\\ea41"}.icon-nb-hubs[_ngcontent-%COMP%]:before{content:"\\ea42"}.icon-nb-login[_ngcontent-%COMP%]:before{content:"\\ea43"}.icon-nb-logout[_ngcontent-%COMP%]:before{content:"\\ea44"}.icon-nb-menu[_ngcontent-%COMP%]:before{content:"\\ea45"}.icon-nb-resume[_ngcontent-%COMP%]:before{content:"\\ea46"}.icon-nb-shop[_ngcontent-%COMP%]:before{content:"\\ea47"}.icon-hp-english-hub[_ngcontent-%COMP%]:before{content:"\\ea2c"}.icon-hp-healthcare-hub[_ngcontent-%COMP%]:before{content:"\\ea2d"}.icon-hp-learning-path[_ngcontent-%COMP%]:before{content:"\\ea2e"}.icon-hp-project-man-hub[_ngcontent-%COMP%]:before{content:"\\ea2f"}.icon-accreditation[_ngcontent-%COMP%]:before{content:"\\ea76"}.icon-full-screen-arrows[_ngcontent-%COMP%]:before{content:"\\ea23"}.icon-assessment-dark[_ngcontent-%COMP%]:before{content:"\\ea11"}.icon-careers[_ngcontent-%COMP%]:before{content:"\\ea12"}.icon-certification[_ngcontent-%COMP%]:before{content:"\\ea13"}.icon-comments[_ngcontent-%COMP%]:before{content:"\\ea14"}.icon-download-study-notes[_ngcontent-%COMP%]:before{content:"\\ea15"}.icon-duration-dark[_ngcontent-%COMP%]:before{content:"\\ea16"}.icon-email-study-notes[_ngcontent-%COMP%]:before{content:"\\ea17"}.icon-points[_ngcontent-%COMP%]:before{content:"\\ea18"}.icon-publisher-dark[_ngcontent-%COMP%]:before{content:"\\ea19"}.icon-responsive-dark[_ngcontent-%COMP%]:before{content:"\\ea1a"}.icon-students[_ngcontent-%COMP%]:before{content:"\\ea1b"}.icon-study-notes[_ngcontent-%COMP%]:before{content:"\\ea1c"}.icon-text-version-dark[_ngcontent-%COMP%]:before{content:"\\ea1d"}.icon-category-business[_ngcontent-%COMP%]:before{content:"\\e98c"}.icon-category-health[_ngcontent-%COMP%]:before{content:"\\e98d"}.icon-category-humanities[_ngcontent-%COMP%]:before{content:"\\e98e"}.icon-category-it[_ngcontent-%COMP%]:before{content:"\\e98f"}.icon-category-language[_ngcontent-%COMP%]:before{content:"\\e990"}.icon-category-lifestyle[_ngcontent-%COMP%]:before{content:"\\e991"}.icon-category-marketing[_ngcontent-%COMP%]:before{content:"\\e992"}.icon-category-math[_ngcontent-%COMP%]:before{content:"\\e993"}.icon-category-science[_ngcontent-%COMP%]:before{content:"\\e9e4"}.icon-discount-tag[_ngcontent-%COMP%]:before{content:"\\ea75"}.icon-brain[_ngcontent-%COMP%]:before{content:"\\ea66"}.icon-check-mark-button[_ngcontent-%COMP%]:before{content:"\\ea65";color:#0094c9}.icon-calendar-bell[_ngcontent-%COMP%]:before{content:"\\ea64";color:#fff}.icon-happy-man[_ngcontent-%COMP%]:before{content:"\\ea5f"}.icon-finish[_ngcontent-%COMP%]:before{content:"\\ea5d"}.icon-quiz-man[_ngcontent-%COMP%]:before{content:"\\ea5e"}.icon-minimize[_ngcontent-%COMP%]:before{content:"\\ea5c"}.icon-group[_ngcontent-%COMP%]:before{content:"\\ea53"}.icon-calendar[_ngcontent-%COMP%]:before{content:"\\ea4f"}.icon-idea[_ngcontent-%COMP%]:before{content:"\\ea50"}.icon-students1[_ngcontent-%COMP%]:before{content:"\\ea51"}.icon-study[_ngcontent-%COMP%]:before{content:"\\ea52"}.icon-award[_ngcontent-%COMP%]:before{content:"\\ea4e"}.icon-resume[_ngcontent-%COMP%]:before{content:"\\ea48"}.icon-skills-and-guidance[_ngcontent-%COMP%]:before{content:"\\ea3a"}.icon-specific-jobs[_ngcontent-%COMP%]:before{content:"\\ea3b"}.icon-soldier[_ngcontent-%COMP%]:before{content:"\\ea39"}.icon-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.icon-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.icon-android-app[_ngcontent-%COMP%]:before{content:"\\f17b"}.icon-whatsapp[_ngcontent-%COMP%]:before{content:"\\ea32"}.icon-home1[_ngcontent-%COMP%]:before{content:"\\f015"}.icon-thick-phone[_ngcontent-%COMP%]:before{content:"\\ea30"}.icon-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.icon-quote-right[_ngcontent-%COMP%]:before{content:"\\ea0b"}.icon-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.icon-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.icon-copy[_ngcontent-%COMP%]:before{content:"\\f0c5"}.icon-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.icon-angle-double-right[_ngcontent-%COMP%]:before{content:"\\e9d4"}.icon-paypal[_ngcontent-%COMP%]:before{content:"\\e9d3"}.icon-alison-premium-monthly[_ngcontent-%COMP%]:before{content:"\\ea33"}.icon-chevrons-left[_ngcontent-%COMP%]:before{content:"\\ea07"}.icon-alison-premium[_ngcontent-%COMP%]:before{content:"\\ea09"}.icon-chevrons[_ngcontent-%COMP%]:before{content:"\\ea08"}.icon-en-devices[_ngcontent-%COMP%]:before{content:"\\e9fd"}.icon-en-follow[_ngcontent-%COMP%]:before{content:"\\e9fe"}.icon-en-levels[_ngcontent-%COMP%]:before{content:"\\e9ff"}.icon-en-listen[_ngcontent-%COMP%]:before{content:"\\ea00"}.icon-en-read[_ngcontent-%COMP%]:before{content:"\\ea01"}.icon-en-rich[_ngcontent-%COMP%]:before{content:"\\ea02"}.icon-en-speak[_ngcontent-%COMP%]:before{content:"\\ea03"}.icon-en-speakers[_ngcontent-%COMP%]:before{content:"\\ea04"}.icon-en-tabbed[_ngcontent-%COMP%]:before{content:"\\ea05"}.icon-en-write[_ngcontent-%COMP%]:before{content:"\\ea06"}.icon-mobile-applications[_ngcontent-%COMP%]:before{content:"\\e9fc"}.icon-eng-control[_ngcontent-%COMP%]:before{content:"\\e9f9"}.icon-eng-focus[_ngcontent-%COMP%]:before{content:"\\e9fa"}.icon-eng-opportunity[_ngcontent-%COMP%]:before{content:"\\e9fb"}.icon-learner[_ngcontent-%COMP%]:before{content:"\\e9f7"}.icon-library[_ngcontent-%COMP%]:before{content:"\\e9f8"}.icon-alp-icon[_ngcontent-%COMP%]:before{content:"\\e9f5"}.icon-tshirt2[_ngcontent-%COMP%]:before{content:"\\e9f6"}.icon-alc-icon[_ngcontent-%COMP%]:before{content:"\\e9f4"}.icon-location2[_ngcontent-%COMP%]:before{content:"\\e9ef"}.icon-qualified[_ngcontent-%COMP%]:before{content:"\\e9f0"}.icon-proctored[_ngcontent-%COMP%]:before{content:"\\e9f1"}.icon-community[_ngcontent-%COMP%]:before{content:"\\e9f2"}.icon-support[_ngcontent-%COMP%]:before{content:"\\e9f3"}.icon-caregiving[_ngcontent-%COMP%]:before{content:"\\e9e5"}.icon-customer-service[_ngcontent-%COMP%]:before{content:"\\e9e6"}.icon-data[_ngcontent-%COMP%]:before{content:"\\e9e7"}.icon-financial[_ngcontent-%COMP%]:before{content:"\\e9e8"}.icon-healthcare[_ngcontent-%COMP%]:before{content:"\\e9e9"}.icon-marketing2[_ngcontent-%COMP%]:before{content:"\\e9ea"}.icon-nursing[_ngcontent-%COMP%]:before{content:"\\e9eb"}.icon-operations[_ngcontent-%COMP%]:before{content:"\\e9ec"}.icon-software[_ngcontent-%COMP%]:before{content:"\\e9ed"}.icon-teaching[_ngcontent-%COMP%]:before{content:"\\e9ee"}.icon-track[_ngcontent-%COMP%]:before{content:"\\e976"}.icon-smartphone[_ngcontent-%COMP%]:before{content:"\\e9e3"}.icon-alternative[_ngcontent-%COMP%]:before{content:"\\e9e0"}.icon-corrections[_ngcontent-%COMP%]:before{content:"\\e9e1"}.icon-refugees[_ngcontent-%COMP%]:before{content:"\\e9e2"}.icon-graduate[_ngcontent-%COMP%]:before{content:"\\e9df"}.icon-wechat[_ngcontent-%COMP%]:before{content:"\\f1d7"}.icon-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.icon-google1[_ngcontent-%COMP%]:before{content:"\\ea38"}.icon-move[_ngcontent-%COMP%]:before{content:"\\ea37"}.icon-sad[_ngcontent-%COMP%]:before{content:"\\e9d5"}.icon-stumbleupon[_ngcontent-%COMP%]:before{content:"\\e93d"}.icon-reddit[_ngcontent-%COMP%]:before{content:"\\e9d2"}.icon-twitter2[_ngcontent-%COMP%]:before{content:"\\e944"}.icon-facebook-logo[_ngcontent-%COMP%]:before{content:"\\e9c7"}.icon-google-plus[_ngcontent-%COMP%]:before{content:"\\e9c8"}.icon-google-plus-footer[_ngcontent-%COMP%]:before{content:"\\e9de"}.icon-linkedin-logo2[_ngcontent-%COMP%]:before{content:"\\e9c9"}.icon-outlook-icon[_ngcontent-%COMP%]:before{content:"\\e9ca"}.icon-yahoo-logo[_ngcontent-%COMP%]:before{content:"\\e9cb"}.icon-WDP-icon[_ngcontent-%COMP%]:before{content:"\\ea35"}.icon-new-upload[_ngcontent-%COMP%]:before{content:"\\ea34";color:#0094c9}.icon-lightbulb[_ngcontent-%COMP%]:before{content:"\\ea2a"}.icon-rocket[_ngcontent-%COMP%]:before{content:"\\ea2b"}.icon-hub-awareness[_ngcontent-%COMP%]:before{content:"\\ea24"}.icon-hub-caregiving[_ngcontent-%COMP%]:before{content:"\\ea25"}.icon-hub-fitness[_ngcontent-%COMP%]:before{content:"\\ea26"}.icon-hub-nursing[_ngcontent-%COMP%]:before{content:"\\ea27"}.icon-hub-nutrition[_ngcontent-%COMP%]:before{content:"\\ea28"}.icon-hub-pharmacology[_ngcontent-%COMP%]:before{content:"\\ea29"}.icon-the-hub[_ngcontent-%COMP%]:before{content:"\\ea22"}.icon-modules[_ngcontent-%COMP%]:before{content:"\\ea1f"}.icon-topics[_ngcontent-%COMP%]:before{content:"\\ea21"}.icon-complete[_ngcontent-%COMP%]:before{content:"\\ea1e"}.icon-start-topic[_ngcontent-%COMP%]:before{content:"\\ea20"}.icon-growth[_ngcontent-%COMP%]:before{content:"\\ea0d"}.icon-skills2[_ngcontent-%COMP%]:before{content:"\\ea0e"}.icon-arrow-right2[_ngcontent-%COMP%]:before{content:"\\ea3c"}.icon-tshirt[_ngcontent-%COMP%]:before{content:"\\e9dd"}.icon-ive-been-referred[_ngcontent-%COMP%]:before{content:"\\e9d6"}.icon-ive-referred-my-friends[_ngcontent-%COMP%]:before{content:"\\e9d7"}.icon-how-donations-work[_ngcontent-%COMP%]:before{content:"\\e9d8"}.icon-donations[_ngcontent-%COMP%]:before{content:"\\e9d9"}.icon-refer-a-friend[_ngcontent-%COMP%]:before{content:"\\e9db"}.icon-popular[_ngcontent-%COMP%]:before{content:"\\e94a"}.icon-recent[_ngcontent-%COMP%]:before{content:"\\e95c"}.icon-trending[_ngcontent-%COMP%]:before{content:"\\e977"}.icon-new-filter[_ngcontent-%COMP%]:before{content:"\\e9c6"}.icon-broaden[_ngcontent-%COMP%]:before{content:"\\e9c3"}.icon-master[_ngcontent-%COMP%]:before{content:"\\e9c4"}.icon-progress[_ngcontent-%COMP%]:before{content:"\\e9c5"}.icon-PDF-Filled[_ngcontent-%COMP%]:before{content:"\\e9c2"}.icon-Gift-Filled[_ngcontent-%COMP%]:before{content:"\\e9ba"}.icon-Graduation-Cap-Filled[_ngcontent-%COMP%]:before{content:"\\e9bb"}.icon-Literature-Filled[_ngcontent-%COMP%]:before{content:"\\e9bd"}.icon-User-Groups-Filled[_ngcontent-%COMP%]:before{content:"\\e9be"}.icon-step3[_ngcontent-%COMP%]:before{content:"\\e9ac"}.icon-step32[_ngcontent-%COMP%]:before{content:"\\e9dc"}.icon-step6[_ngcontent-%COMP%]:before{content:"\\e9b0"}.icon-step5[_ngcontent-%COMP%]:before{content:"\\e9b1"}.icon-step4[_ngcontent-%COMP%]:before{content:"\\e9b7"}.icon-step2[_ngcontent-%COMP%]:before{content:"\\e9b8"}.icon-step1[_ngcontent-%COMP%]:before{content:"\\e9b9"}.icon-info[_ngcontent-%COMP%]:before{content:"\\e9ab"}.icon-success[_ngcontent-%COMP%]:before{content:"\\e99b"}.icon-save[_ngcontent-%COMP%]:before{content:"\\e995"}.icon-download[_ngcontent-%COMP%]:before{content:"\\e994"}.icon-fav[_ngcontent-%COMP%]:before{content:"\\e96b"}.icon-fav2[_ngcontent-%COMP%]:before{content:"\\e983"}.icon-rocket-line[_ngcontent-%COMP%]:before{content:"\\e9a5"}.icon-management[_ngcontent-%COMP%]:before{content:"\\e978"}.icon-marketing[_ngcontent-%COMP%]:before{content:"\\e979"}.icon-lifestyle[_ngcontent-%COMP%]:before{content:"\\e97a"}.icon-health[_ngcontent-%COMP%]:before{content:"\\e97b"}.icon-environment[_ngcontent-%COMP%]:before{content:"\\e97c"}.icon-people[_ngcontent-%COMP%]:before{content:"\\e97d"}.icon-science[_ngcontent-%COMP%]:before{content:"\\e97e"}.icon-maths[_ngcontent-%COMP%]:before{content:"\\e97f"}.icon-technology2[_ngcontent-%COMP%]:before{content:"\\e980"}.icon-filter[_ngcontent-%COMP%]:before{content:"\\e981"}.icon-help[_ngcontent-%COMP%]:before{content:"\\e982"}.icon-linkedin-logo[_ngcontent-%COMP%]:before{content:"\\e975"}.icon-phone[_ngcontent-%COMP%]:before{content:"\\e972"}.icon-pin[_ngcontent-%COMP%]:before{content:"\\e973"}.icon-upload2[_ngcontent-%COMP%]:before{content:"\\e95e"}.icon-upload[_ngcontent-%COMP%]:before{content:"\\e943"}.icon-pencil1[_ngcontent-%COMP%]:before{content:"\\e939"}.icon-undo[_ngcontent-%COMP%]:before{content:"\\e965"}.icon-redo[_ngcontent-%COMP%]:before{content:"\\e966"}.icon-stats-bars[_ngcontent-%COMP%]:before{content:"\\e99c"}.icon-rocket2[_ngcontent-%COMP%]:before{content:"\\e9bc"}.icon-meter[_ngcontent-%COMP%]:before{content:"\\e9a6"}.icon-tree[_ngcontent-%COMP%]:before{content:"\\e9cc"}.icon-heart2[_ngcontent-%COMP%]:before{content:"\\e9da"}.icon-cross2[_ngcontent-%COMP%]:before{content:"\\ea0f"}.icon-checkmark[_ngcontent-%COMP%]:before{content:"\\ea10"}.icon-pencil[_ngcontent-%COMP%]:before{content:"\\ea36"}.icon-thumb-up[_ngcontent-%COMP%]:before{content:"\\e946"}.icon-thumb-down[_ngcontent-%COMP%]:before{content:"\\e947"}.icon-thick-chevron-down[_ngcontent-%COMP%]:before{content:"\\e9bf"}.icon-thick-chevron-up[_ngcontent-%COMP%]:before{content:"\\e9c0"}.icon-payment-options[_ngcontent-%COMP%]:before{content:"\\e9a7"}.icon-description[_ngcontent-%COMP%]:before{content:"\\e998"}.icon-diploma-label[_ngcontent-%COMP%]:before{content:"\\e9aa"}.icon-outcome[_ngcontent-%COMP%]:before{content:"\\e9ad"}.icon-assessment[_ngcontent-%COMP%]:before{content:"\\e9ae"}.icon-chapter[_ngcontent-%COMP%]:before{content:"\\e9af"}.icon-course-plan[_ngcontent-%COMP%]:before{content:"\\e9b2"}.icon-module[_ngcontent-%COMP%]:before{content:"\\e9b3"}.icon-play[_ngcontent-%COMP%]:before{content:"\\e9b4"}.icon-ressources[_ngcontent-%COMP%]:before{content:"\\e9b5"}.icon-accreditation1[_ngcontent-%COMP%]:before{content:"\\e99f"}.icon-account[_ngcontent-%COMP%]:before{content:"\\e9a0"}.icon-certification-and-payments[_ngcontent-%COMP%]:before{content:"\\e9a1"}.icon-getting-started[_ngcontent-%COMP%]:before{content:"\\e9a2"}.icon-login-issues[_ngcontent-%COMP%]:before{content:"\\e9a3"}.icon-my-account[_ngcontent-%COMP%]:before{content:"\\e9a4"}.icon-tracking-and-delivery[_ngcontent-%COMP%]:before{content:"\\e9a8"}.icon-upgrade[_ngcontent-%COMP%]:before{content:"\\e9a9"}.icon-warning[_ngcontent-%COMP%]:before{content:"\\e99d"}.icon-danger[_ngcontent-%COMP%]:before{content:"\\e99e"}.icon-crown[_ngcontent-%COMP%]:before{content:"\\e999"}.icon-present[_ngcontent-%COMP%]:before{content:"\\e99a"}.icon-rate[_ngcontent-%COMP%]:before{content:"\\e997"}.icon-search-bar-categories[_ngcontent-%COMP%]:before{content:"\\e996"}.icon-video[_ngcontent-%COMP%]:before{content:"\\e987"}.icon-audio[_ngcontent-%COMP%]:before{content:"\\e988"}.icon-certificate[_ngcontent-%COMP%]:before{content:"\\e989"}.icon-responsive[_ngcontent-%COMP%]:before{content:"\\e98a"}.icon-sort[_ngcontent-%COMP%]:before{content:"\\e986"}.icon-book2[_ngcontent-%COMP%]:before{content:"\\e985"}.icon-learning[_ngcontent-%COMP%]:before{content:"\\e984"}.icon-checked[_ngcontent-%COMP%]:before{content:"\\e974"}.icon-minus[_ngcontent-%COMP%]:before{content:"\\e962"}.icon-plus[_ngcontent-%COMP%]:before{content:"\\e961"}.icon-check[_ngcontent-%COMP%]:before{content:"\\e93f"}.icon-cross3[_ngcontent-%COMP%]:before{content:"\\e948"}.icon-pinterest[_ngcontent-%COMP%]:before{content:"\\ead1"}.icon-flag[_ngcontent-%COMP%]:before{content:"\\e945"}.icon-rotate-right[_ngcontent-%COMP%]:before{content:"\\e968"}.icon-rotate-left[_ngcontent-%COMP%]:before{content:"\\e93e"}.icon-zoom-out[_ngcontent-%COMP%]:before{content:"\\e940"}.icon-zoom-in[_ngcontent-%COMP%]:before{content:"\\e941"}.icon-last-alert[_ngcontent-%COMP%]:before{content:"\\e963"}.icon-megaphone[_ngcontent-%COMP%]:before{content:"\\e964"}.icon-past-month[_ngcontent-%COMP%]:before{content:"\\e967"}.icon-dots[_ngcontent-%COMP%]:before{content:"\\e969"}.icon-new-alert[_ngcontent-%COMP%]:before{content:"\\e96a"}.icon-bell-ring[_ngcontent-%COMP%]:before{content:"\\e971"}.icon-select[_ngcontent-%COMP%]:before{content:"\\e9d1"}.icon-location[_ngcontent-%COMP%]:before{content:"\\e9d0"}.icon-invisble[_ngcontent-%COMP%]:before{content:"\\e9cf"}.icon-visible[_ngcontent-%COMP%]:before{content:"\\e9ce"}.icon-filled-star[_ngcontent-%COMP%]:before{content:"\\e95f"}.icon-previous-icon[_ngcontent-%COMP%]:before{content:"\\e9cd"}.icon-user-log[_ngcontent-%COMP%]:before{content:"\\e903"}.icon-triangle-for-languages[_ngcontent-%COMP%]:before{content:"\\e959"}.icon-search2[_ngcontent-%COMP%]:before{content:"\\e95b"}.icon-alert-off[_ngcontent-%COMP%]:before{content:"\\e95d"}.icon-left-quote[_ngcontent-%COMP%]:before{content:"\\e95a"}.icon-getting-a-certificate[_ngcontent-%COMP%]:before{content:"\\e955"}.icon-payments[_ngcontent-%COMP%]:before{content:"\\e956"}.icon-premium-services[_ngcontent-%COMP%]:before{content:"\\e957"}.icon-technical-help[_ngcontent-%COMP%]:before{content:"\\e958"}.icon-bio[_ngcontent-%COMP%]:before{content:"\\e953"}.icon-camera[_ngcontent-%COMP%]:before{content:"\\e952"}.icon-address[_ngcontent-%COMP%]:before{content:"\\e954"}.icon-profile[_ngcontent-%COMP%]:before{content:"\\e94b"}.icon-education[_ngcontent-%COMP%]:before{content:"\\e94c"}.icon-professional[_ngcontent-%COMP%]:before{content:"\\e94d"}.icon-highlights-icon[_ngcontent-%COMP%]:before{content:"\\e94f"}.icon-left-arrow[_ngcontent-%COMP%]:before{content:"\\e93b"}.icon-right-arrow[_ngcontent-%COMP%]:before{content:"\\e93c"}.icon-technology[_ngcontent-%COMP%]:before{content:"\\e91e"}.icon-table[_ngcontent-%COMP%]:before{content:"\\e951"}.icon-bell[_ngcontent-%COMP%]:before{content:"\\e928"}.icon-send[_ngcontent-%COMP%]:before{content:"\\e915"}.icon-menu[_ngcontent-%COMP%]:before{content:"\\e929"}.icon-error[_ngcontent-%COMP%]:before{content:"\\e927"}.icon-leaf[_ngcontent-%COMP%]:before{content:"\\e926"}.icon-chat[_ngcontent-%COMP%]:before{content:"\\e918"}.icon-path[_ngcontent-%COMP%]:before{content:"\\e920"}.icon-cross[_ngcontent-%COMP%]:before{content:"\\e925"}.icon-suitcase[_ngcontent-%COMP%]:before{content:"\\e950"}.icon-star[_ngcontent-%COMP%]:before{content:"\\e921"}.icon-hat[_ngcontent-%COMP%]:before{content:"\\e90d"}.icon-student[_ngcontent-%COMP%]:before{content:"\\e90c"}.icon-clock[_ngcontent-%COMP%]:before{content:"\\e919"}.icon-controls[_ngcontent-%COMP%]:before{content:"\\e91a"}.icon-course[_ngcontent-%COMP%]:before{content:"\\e91b"}.icon-gears[_ngcontent-%COMP%]:before{content:"\\e91c"}.icon-heart[_ngcontent-%COMP%]:before{content:"\\e91d"}.icon-money[_ngcontent-%COMP%]:before{content:"\\e91f"}.icon-tag[_ngcontent-%COMP%]:before{content:"\\e922"}.icon-time[_ngcontent-%COMP%]:before{content:"\\e923"}.icon-trophy[_ngcontent-%COMP%]:before{content:"\\e924"}.icon-categories[_ngcontent-%COMP%]:before{content:"\\e914"}.icon-faq[_ngcontent-%COMP%]:before{content:"\\e90f"}.icon-globe[_ngcontent-%COMP%]:before{content:"\\e910"}.icon-hand[_ngcontent-%COMP%]:before{content:"\\e911"}.icon-news[_ngcontent-%COMP%]:before{content:"\\e913"}.icon-shop[_ngcontent-%COMP%]:before{content:"\\e917"}.icon-search[_ngcontent-%COMP%]:before{content:"\\e90a"}.icon-envelope[_ngcontent-%COMP%]:before{content:"\\e909"}.icon-lock[_ngcontent-%COMP%]:before{content:"\\e908"}.icon-windows[_ngcontent-%COMP%]:before{content:"\\e905"}.icon-twitter[_ngcontent-%COMP%]:before{content:"\\e94e"}.icon-facebook[_ngcontent-%COMP%]:before{content:"\\e92a"}.icon-google[_ngcontent-%COMP%]:before{content:"\\e901"}.icon-linkedin[_ngcontent-%COMP%]:before{content:"\\e902"}.icon-yahoo[_ngcontent-%COMP%]:before{content:"\\e904"}.icon-mail[_ngcontent-%COMP%]:before{content:"\\e912"}.icon-share[_ngcontent-%COMP%]:before{content:"\\e90b"}.icon-chevron-down[_ngcontent-%COMP%]:before{content:"\\e916"}.icon-suit-case[_ngcontent-%COMP%]:before{content:"\\e92d"}.icon-book[_ngcontent-%COMP%]:before{content:"\\e92e"}.icon-calculator[_ngcontent-%COMP%]:before{content:"\\e92f"}.icon-chemistry[_ngcontent-%COMP%]:before{content:"\\e930"}.icon-computer[_ngcontent-%COMP%]:before{content:"\\e931"}.icon-full-heart[_ngcontent-%COMP%]:before{content:"\\e932"}.icon-messages[_ngcontent-%COMP%]:before{content:"\\e933"}.icon-target[_ngcontent-%COMP%]:before{content:"\\e935"}.icon-world[_ngcontent-%COMP%]:before{content:"\\e936"}.icon-skills[_ngcontent-%COMP%]:before{content:"\\e960"}.icon-user[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-circle-group[_ngcontent-%COMP%]:before{content:"\\e942"}.icon-bag[_ngcontent-%COMP%]:before{content:"\\e96c"}.icon-bell-line[_ngcontent-%COMP%]:before{content:"\\e96d"}.icon-cart[_ngcontent-%COMP%]:before{content:"\\e96e"}.icon-faq-line[_ngcontent-%COMP%]:before{content:"\\e96f"}.icon-home[_ngcontent-%COMP%]:before{content:"\\e970"}.icon-paths[_ngcontent-%COMP%]:before{content:"\\e949"}.icon-geography[_ngcontent-%COMP%]:before{content:"\\e934"}.icon-time-lapse[_ngcontent-%COMP%]:before{content:"\\e900"}.icon-home2[_ngcontent-%COMP%]:before{content:"\\e906"}.icon-courses[_ngcontent-%COMP%]:before{content:"\\e907"}.icon-flashTesting[_ngcontent-%COMP%]:before{content:"\\e92c"}.icon-studyGroups[_ngcontent-%COMP%]:before{content:"\\e92b"}.icon-publishing[_ngcontent-%COMP%]:before{content:"\\e937"}.icon-communityMain[_ngcontent-%COMP%]:before{content:"\\e98b"}.icon-about[_ngcontent-%COMP%]:before{content:"\\e93a"}.icon-alisonShop[_ngcontent-%COMP%]:before{content:"\\e938"}.icon-category[_ngcontent-%COMP%]:before{content:"\\e9b6"}.icon-document-file-zip[_ngcontent-%COMP%]:before{content:"\\ea31"}.icon-checkmark2[_ngcontent-%COMP%]:before{content:"\\ea0c"}.icon-lock2[_ngcontent-%COMP%]:before{content:"\\ea0a"}.icon-printer[_ngcontent-%COMP%]:before{content:"\\e9c1"}.icon-arrow-thin-right[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-nav-learning[_ngcontent-%COMP%]:before{content:"\\e932"}.icon-build[_ngcontent-%COMP%]:before{content:"\\e931"}.icon-earn[_ngcontent-%COMP%]:before{content:"\\e930"}.icon-megaphone-alt1[_ngcontent-%COMP%]:before{content:"\\e983"}.icon-megaphone-alt[_ngcontent-%COMP%]:before{content:"\\e984";color:#6ea21f}@media (min-width: 768px){.mobile-only[_ngcontent-%COMP%]{display:none}}.desktop-only[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.desktop-only[_ngcontent-%COMP%]{display:initial}}.premium-le[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;position:relative;padding:34px 16px 40px;min-height:100vh;width:100%}@media (min-width: 768px){.premium-le[_ngcontent-%COMP%]{padding:50px 118px}.premium-le-step-0[_ngcontent-%COMP%]:before{content:url(/html/site/img/angular-shop/study-icon-ads.svg);position:absolute;top:51px;left:0}.premium-le-step-1[_ngcontent-%COMP%]:before{content:url(/html/site/img/angular-shop/study-icon-payment.svg);position:absolute;top:20px;left:-16px}}@media (max-width: 1350px) and (min-width: 1250px){.premium-le[_ngcontent-%COMP%]{padding:50px}}.premium-le__title[_ngcontent-%COMP%]{font: 900 18px/28px Roboto;letter-spacing:.36px}@media (min-width: 768px){.premium-le__title[_ngcontent-%COMP%]{font: 900 28px/32px Roboto;letter-spacing:0px}}.premium-le__subtitle[_ngcontent-%COMP%]{font: 500 14px/32px Roboto;color:#7b8993}.premium-le__button[_ngcontent-%COMP%]{cursor:pointer;color:#fff;font: 500 14px/19px Roboto;background:#0092CA;border-radius:8px;border:none;padding:8px 27px;width:auto}.premium-le__button[_ngcontent-%COMP%]:hover, .premium-le__button[_ngcontent-%COMP%]:focus{background:#1581AF}.premium-le__button[_ngcontent-%COMP%]:disabled{cursor:initial;background:#CFCFCF}', 'app-premium-le-payment[_ngcontent-%COMP%]{display:block;width:100%}.premium-le__payment[_ngcontent-%COMP%]{text-align:center;padding-top:15px}@media (min-width: 1070px){.premium-le__payment[_ngcontent-%COMP%]{padding-top:17px}}.premium-le__payment__close[_ngcontent-%COMP%]{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjAxNjgiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIwMTY4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iTWFza19Hcm91cF8xMjExNjUiIGRhdGEtbmFtZT0iTWFzayBHcm91cCAxMjExNjUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLWNhbmNlbCIgZGF0YS1uYW1lPSJJY29uIG1hdGVyaWFsLWNhbmNlbCIgZD0iTTE3LDNBMTQsMTQsMCwxLDAsMzEsMTcsMTMuOTg3LDEzLjk4NywwLDAsMCwxNywzWm03LDE5LjAyNkwyMi4wMjYsMjQsMTcsMTguOTc0LDExLjk3NCwyNCwxMCwyMi4wMjYsMTUuMDI2LDE3LDEwLDExLjk3NCwxMS45NzQsMTAsMTcsMTUuMDI2LDIyLjAyNiwxMCwyNCwxMS45NzQsMTguOTc0LDE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIiBmaWxsPSIjY2ZjZmNmIi8+CiAgPC9nPgo8L3N2Zz4K);cursor:pointer;position:absolute;top:12px;right:12px;z-index:999}.premium-le__payment__close--monthly-plan[_ngcontent-%COMP%]:hover, .premium-le__payment__close--monthly-plan[_ngcontent-%COMP%]:focus{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjAxNjgiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIwMTY4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iTWFza19Hcm91cF8xMjExNjUiIGRhdGEtbmFtZT0iTWFzayBHcm91cCAxMjExNjUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLWNhbmNlbCIgZGF0YS1uYW1lPSJJY29uIG1hdGVyaWFsLWNhbmNlbCIgZD0iTTE3LDNBMTQsMTQsMCwxLDAsMzEsMTcsMTMuOTg3LDEzLjk4NywwLDAsMCwxNywzWm03LDE5LjAyNkwyMi4wMjYsMjQsMTcsMTguOTc0LDExLjk3NCwyNCwxMCwyMi4wMjYsMTUuMDI2LDE3LDEwLDExLjk3NCwxMS45NzQsMTAsMTcsMTUuMDI2LDIyLjAyNiwxMCwyNCwxMS45NzQsMTguOTc0LDE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIiBmaWxsPSIjMDAwIi8+CiAgPC9nPgo8L3N2Zz4K)}.premium-le__payment__close--one-time-purchase[_ngcontent-%COMP%]:hover, .premium-le__payment__close--one-time-purchase[_ngcontent-%COMP%]:focus{content:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjAxNjgiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDIwMTY4IiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI0UzNDg1MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iTWFza19Hcm91cF8xMjExNjUiIGRhdGEtbmFtZT0iTWFzayBHcm91cCAxMjExNjUiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJJY29uX21hdGVyaWFsLWNhbmNlbCIgZGF0YS1uYW1lPSJJY29uIG1hdGVyaWFsLWNhbmNlbCIgZD0iTTE3LDNBMTQsMTQsMCwxLDAsMzEsMTcsMTMuOTg3LDEzLjk4NywwLDAsMCwxNywzWm03LDE5LjAyNkwyMi4wMjYsMjQsMTcsMTguOTc0LDExLjk3NCwyNCwxMCwyMi4wMjYsMTUuMDI2LDE3LDEwLDExLjk3NCwxMS45NzQsMTAsMTcsMTUuMDI2LDIyLjAyNiwxMCwyNCwxMS45NzQsMTguOTc0LDE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIiBmaWxsPSIjRTM0ODUwIi8+CiAgPC9nPgo8L3N2Zz4K)}@media (min-width: 1070px){.premium-le__payment__close[_ngcontent-%COMP%]{top:36px;right:39px}}.premium-le__payment__list[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:24px 0 8px}@media (min-width: 1070px){.premium-le__payment__list[_ngcontent-%COMP%]{flex-direction:row;margin:62px 0 60px}}.premium-le__payment__list__item[_ngcontent-%COMP%]{cursor:pointer;background:#FBFCFD;border:1px solid #B3BDC0;border-radius:4px;display:flex;justify-content:center;align-items:center;transition:ease-in-out .1s;margin:0 0 20px;height:96px;width:228px}@media (min-width: 1070px){.premium-le__payment__list__item[_ngcontent-%COMP%]{flex-direction:column;margin:0 10px;height:186px;width:272px}}.premium-le__payment__list__item__title[_ngcontent-%COMP%]{color:#465159;font: 500 14px/32px Roboto;margin:0 0 0 15px}@media (min-width: 1070px){.premium-le__payment__list__item__title[_ngcontent-%COMP%]{font: 500 16px/27px Roboto;margin:11px 0 0}}.premium-le__payment__list__item--paypal[_ngcontent-%COMP%]   .premium-le__payment__list__item__title[_ngcontent-%COMP%]{margin-top:-4px}@media (min-width: 1070px){.premium-le__payment__list__item--paypal[_ngcontent-%COMP%]   .premium-le__payment__list__item__title[_ngcontent-%COMP%]{margin-top:7px}}.premium-le__payment__list__item--paypal[_ngcontent-%COMP%]   .premium-le__payment__list__item__image[_ngcontent-%COMP%]{height:15px;width:60px}@media (min-width: 1070px){.premium-le__payment__list__item--paypal[_ngcontent-%COMP%]   .premium-le__payment__list__item__image[_ngcontent-%COMP%]{height:30px;width:116px}}.premium-le__payment__list__item--card[_ngcontent-%COMP%]   .premium-le__payment__list__item__image[_ngcontent-%COMP%]{height:29px;width:42px}@media (min-width: 1070px){.premium-le__payment__list__item--card[_ngcontent-%COMP%]   .premium-le__payment__list__item__image[_ngcontent-%COMP%]{height:41px;width:58px}}.premium-le__payment__list__item[_ngcontent-%COMP%]:hover{background:#F2FCFF;border:2px solid #1794C9;transform:scale(1.05)}.premium-le__payment__plan[_ngcontent-%COMP%]{text-align:left}.premium-le__payment__plan__title[_ngcontent-%COMP%]{display:flex;position:relative;margin-bottom:16px}@media (min-width: 1070px){.premium-le__payment__plan__title[_ngcontent-%COMP%]{margin-bottom:34px;min-width:820px}}@media (max-width: 1350px) and (min-width: 1250px){.premium-le__payment__plan__title[_ngcontent-%COMP%]{min-width:719px}}.premium-le__payment__plan__title[_ngcontent-%COMP%]:after{content:"";background:#465159;position:absolute;bottom:0;left:-16px;height:3px;width:calc(100% + 32px)}@media (min-width: 768px){.premium-le__payment__plan__title[_ngcontent-%COMP%]:after{left:-118px;width:calc(100% + 236px)}}@media (min-width: 1070px){.premium-le__payment__plan__title[_ngcontent-%COMP%]:after{left:-40px;width:calc(100% + 80px)}}.premium-le__payment__plan__title__label[_ngcontent-%COMP%]{display:inline-block;color:#fff;font: 500 12px/28px Roboto;background:#465159;border-radius:4px 4px 0 0;margin:0 auto;padding:0 16px}@media (min-width: 1070px){.premium-le__payment__plan__title__label[_ngcontent-%COMP%]{margin:0 0 0 46px}}.premium-le__payment__plan__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;text-align:center}@media (min-width: 1070px){.premium-le__payment__plan__content[_ngcontent-%COMP%]{flex-direction:row;text-align:initial}}.premium-le__payment__plan__content__left__title[_ngcontent-%COMP%]{color:#465159;font: 14px/21px Roboto;letter-spacing:.28px;margin-bottom:10px}@media (min-width: 1070px){.premium-le__payment__plan__content__left__title[_ngcontent-%COMP%]{font: 18px/21px Roboto;letter-spacing:.36px;margin-bottom:16px}}.premium-le__payment__plan__content__left__description[_ngcontent-%COMP%]{color:#5d676e;font: 500 12px/18px Roboto;margin-bottom:0}@media (min-width: 1070px){.premium-le__payment__plan__content__left__description[_ngcontent-%COMP%]{font: 700 16px/24px Roboto;letter-spacing:.32px}}@media (min-width: 1070px){.premium-le__payment__plan__content__left__description.desktop-only[_ngcontent-%COMP%]{display:block}}.premium-le__payment__plan__content__left__description--light[_ngcontent-%COMP%]{font: 500 12px/18px Roboto;margin-bottom:12px}@media (min-width: 1070px){.premium-le__payment__plan__content__left__description--light[_ngcontent-%COMP%]{font: 500 16px/24px Roboto;margin-bottom:0;max-width:389px}}.premium-le__payment__plan__content__left__benefits[_ngcontent-%COMP%]{color:#5d676e;font: 500 12px/18px Roboto;letter-spacing:.32px;margin-bottom:12px}@media (min-width: 1070px){.premium-le__payment__plan__content__left__benefits[_ngcontent-%COMP%]{font: 500 16px/24px Roboto;margin-bottom:0}}.premium-le__payment__plan__content__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center}.premium-le__payment__plan__content__right__title[_ngcontent-%COMP%]{order:1;color:#465159;font: 700 14px/19px Roboto;letter-spacing:.28px}@media (min-width: 1070px){.premium-le__payment__plan__content__right__title[_ngcontent-%COMP%]{order:0;font: 900 16px/21px Roboto;letter-spacing:.32px;margin-bottom:10px}}.premium-le__payment__plan__content__right__price[_ngcontent-%COMP%]{color:#2d3941;font: 900 24px/32px Roboto;margin-bottom:0}@media (min-width: 1070px){.premium-le__payment__plan__content__right__price[_ngcontent-%COMP%]{font: 900 44px/58px Roboto}}']
                }),
                H
            })();
            const u = function (A) {
                return ["premium-le__ads__box", A]
            };
            function i(A, H) {
                if (1 & A) {
                    const j = t.EpF();
                    t.ynx(0),
                    t.TgZ(1, "article", 11),
                    t.NdJ("click", function () {
                        const F = t.CHM(j).$implicit,
                            ce = t.oxw(2);
                        return t.KtG(ce.doNextStep(F))
                    }),
                    t.TgZ(2, "div", 12)(3, "div", 13),
                    t._UZ(4, "img", 14),
                    t.qZA()(),
                    t.TgZ(5, "div", 15)(6, "h4", 16),
                    t._uU(7),
                    t.qZA(),
                    t._UZ(8, "p", 17),
                    t.TgZ(9, "p", 18),
                    t._uU(10),
                    t.ALo(11, "currency"),
                    t.qZA(),
                    t.TgZ(12, "button", 19),
                    t._uU(13, " Remove Ads Now "),
                    t.qZA()(),
                    t.O4$(),
                    t.TgZ(14, "svg", 20),
                    t._UZ(15, "path", 21),
                    t.qZA()(),
                    t.BQk()
                }
                if (2 & A) {
                    const j = H.$implicit,
                        h = H.even;
                    t.xp6(1),
                    t.Q6J("ngClass", t.VKq(8, u, h ? "premium-le__ads__box--grey" : "premium-le__ads__box--green")),
                    t.xp6(3),
                    t.s9C("src", j.image, t.LSH),
                    t.xp6(3),
                    t.hij(" ", j.name, " "),
                    t.xp6(1),
                    t.Q6J("innerHTML", j.description, t.oJD),
                    t.xp6(2),
                    t.hij(" ", t.xi3(11, 5, j.price, "EUR"), " ")
                }
            }
            function f(A, H) {
                if (1 & A) {
                    const j = t.EpF();
                    t.TgZ(0, "section", 1)(1, "h3", 2),
                    t._uU(2),
                    t.ALo(3, "translate"),
                    t.qZA(),
                    t.TgZ(4, "ul", 3)(5, "li", 4),
                    t._UZ(6, "span", 5),
                    t._uU(7),
                    t.ALo(8, "translate"),
                    t.qZA(),
                    t.TgZ(9, "li", 4),
                    t._UZ(10, "span", 5),
                    t._uU(11),
                    t.ALo(12, "translate"),
                    t.qZA(),
                    t.TgZ(13, "li", 4),
                    t._UZ(14, "span", 5),
                    t._uU(15),
                    t.ALo(16, "translate"),
                    t.qZA()(),
                    t.TgZ(17, "div", 6),
                    t.YNc(18, i, 16, 10, "ng-container", 7),
                    t.qZA(),
                    t.TgZ(19, "div", 8)(20, "p", 9),
                    t._uU(21),
                    t.ALo(22, "translate"),
                    t.ALo(23, "translate"),
                    t.qZA(),
                    t.TgZ(24, "button", 10),
                    t.NdJ("click", function () {
                        t.CHM(j);
                        const v = t.oxw();
                        return t.KtG(v.closeAds())
                    }),
                    t._uU(25),
                    t.ALo(26, "translate"),
                    t.qZA()()()
                }
                if (2 & A) {
                    const j = t.oxw();
                    t.xp6(2),
                    t.hij(" ", t.lcZ(3, 10, "shopping.ADS_FREE_LE"), " "),
                    t.xp6(5),
                    t.hij(" ", t.lcZ(8, 12, "shopping.NO_ADVERT"), " "),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(12, 14, "shopping.NO_DISTRACTIONS"), " "),
                    t.xp6(4),
                    t.hij(" ", t.lcZ(16, 16, "shopping.SPACE_TO_LEARN"), " "),
                    t.xp6(3),
                    t.Q6J("ngForOf", j.subscriptionPlans),
                    t.xp6(3),
                    t.lnq(" ", t.lcZ(22, 18, "shopping.NEXT_TOPIC"), " ", j.timer, " ", t.lcZ(23, 20, "keywords.SECONDS"), ".. "),
                    t.xp6(3),
                    t.Q6J("disabled", 0 !== j.timer),
                    t.xp6(1),
                    t.hij(" ", t.lcZ(26, 22, "shopping.START_NEXT_TOPIC"), " ")
                }
            }
            let O = (() => {
                var A;
                class H {
                    constructor(h, v) {
                        this._shoppingCartService = h,
                        this._courseService = v,
                        this.finishStep = new t.vpe,
                        this.startCourse = new t.vpe,
                        this.subscriptionPlans = [],
                        this.subscriptions = []
                    }
                    showAds() {
                        this._shoppingCartService.startAdsTimer()
                    }
                    ngOnInit() {
                        this.timer = this._shoppingCartService.adsCountdown,
                        this.subscriptions.push(this._shoppingCartService.getAdsFreeLEPremiumProducts().subscribe(h => {
                            this.subscriptionPlans = h
                        })),
                        this.subscriptions.push(this._shoppingCartService.getUserInfo().subscribe(h => {
                            this.user = h
                        })),
                        this.subscriptions.push(this._shoppingCartService.adsTimer.subscribe(h => this.timer = h)),
                        this._shoppingCartService.getAutoStartAdsTimer() && this._shoppingCartService.startAdsTimer()
                    }
                    closeAds() {
                        this.startCourse.emit()
                    }
                    ngOnDestroy() {
                        this.subscriptions.forEach(h => h.unsubscribe())
                    }
                    doNextStep(h) {
                        let v = h,
                            F = {
                                price: 100 *v.price,
                                originalPrice: v.originalPrice,
                                quantity: 1,
                                currency: {
                                    code: v.currency ? v.currency.code : "EUR",
                                    id: v.currency ? v.currency.id : 1
                                },
                                currency_id: v.currency ? v.currency.id : 1,
                                product_id: v.id,
                                recurring: v.recurringTypeId,
                                period: v.period
                            };
                        h.name === _.b.ONE_TIME_PURCHASE && (F.course_id = this._courseService.getCourseId()),
                        v.voucherUuid && (F.voucher_uuids =[... v.voucherUuid]),
                        this.updateShoppingCartCache(F).subscribe(ce => this.finishStep.emit(h))
                    }
                    updateShoppingCartCache(h) {
                        return this._shoppingCartService.updateShoppingCartCache(this.user.id, {
                            stage: K.PAYMENT,
                            user_id: this.user.id,
                            address_id: this.user.addressId,
                            shipping: {
                                shipping_method_id: 1
                            },
                            items: [h]
                        })
                    }
                }
                return(A = H).\u0275fac = function (h) {
                    return new(h || A)(t.Y36(p.F), t.Y36(W.U))
                },
                A.\u0275cmp = t.Xpm({
                    type: A,
                    selectors: [
                        ["app-premium-le-ads"]
                    ],
                    hostBindings: function (h, v) {
                        1 & h && t.NdJ("start:timer", function (ce) {
                            return v.showAds(ce)
                        }, !1, t.evT)
                    },
                    outputs: {
                        finishStep: "finishStep",
                        startCourse: "startCourse"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        [
                            "class", "premium-le__ads", 4, "ngIf"
                        ],
                        [
                            1, "premium-le__ads"
                        ],
                        [
                            1, "premium-le__title"
                        ],
                        [
                            1, "premium-le__ads__benefits"
                        ],
                        [
                            1, "premium-le__ads__benefits__item"
                        ],
                        [
                            1, "icon-checked"
                        ],
                        [
                            1, "premium-le__ads__plans"
                        ],
                        [
                            4, "ngFor", "ngForOf"
                        ],
                        [
                            1, "premium-le__ads__footer"
                        ],
                        [
                            1, "premium-le__ads__footer__text"
                        ],
                        [
                            1,
                            "premium-le__button",
                            3,
                            "disabled",
                            "click"
                        ],
                        [
                            3, "ngClass", "click"
                        ],
                        [
                            1, "premium-le__ads__box__icon__wrapper"
                        ],
                        [
                            1, "premium-le__ads__box__icon"
                        ],
                        [
                            "width",
                            "50",
                            "height",
                            "64",
                            "alt",
                            "monthly-plan-ads",
                            3,
                            "src"
                        ],
                        [
                            1, "premium-le__ads__box__content"
                        ],
                        [
                            1, "premium-le__ads__box__title"
                        ],
                        [
                            1, "premium-le__ads__box__description", 3, "innerHTML"
                        ],
                        [
                            1, "premium-le__ads__box__price"
                        ],
                        [
                            1, "premium-le__ads__box__button"
                        ],
                        [
                            "xmlns",
                            "http://www.w3.org/2000/svg",
                            "width",
                            "9.094",
                            "height",
                            "15.905",
                            "viewBox",
                            "0 0 9.094 15.905",
                            1,
                            "icon-forward",
                            "mobile-only"
                        ],
                        [
                            "fill",
                            "#2D3941",
                            "id",
                            "Icon_ionic-ios-arrow-forward",
                            "data-name",
                            "Icon ionic-ios-arrow-forward",
                            "d",
                            "M17.6,14.146,11.58,8.132a1.132,1.132,0,0,1,0-1.605,1.146,1.146,0,0,1,1.61,0l6.819,6.814a1.135,1.135,0,0,1,.033,1.567L13.2,21.77a1.137,1.137,0,0,1-1.61-1.605Z",
                            "transform",
                            "translate(-11.246 -6.196)"
                        ]
                    ],
                    template: function (h, v) {
                        1 & h && t.YNc(0, f, 27, 24, "section", 0),
                        2 & h && t.Q6J("ngIf", v.subscriptionPlans.length > 0)
                    },
                    dependencies: [
                        l.mk,
                        l.sg,
                        l.O5,
                        l.H9,
                        Q.X$
                    ],
                    styles: [
                        '@charset "UTF-8";.cal-month-view .cal-header{text-align:center;font-weight:bolder}.cal-month-view .cal-header .cal-cell{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view .cal-days{border:1px solid;border-bottom:0}.cal-month-view .cal-cell-top{min-height:78px;flex:1}.cal-month-view .cal-cell-row{display:flex}.cal-month-view .cal-cell{float:left;flex:1;display:flex;flex-direction:column;align-items:stretch}.cal-month-view .cal-cell .cal-event{pointer-events:all!important}.cal-month-view .cal-day-cell{min-height:100px}.cal-month-view .cal-day-cell:not(:last-child){border-right:1px solid}[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child){border-right:initial;border-left:1px solid}.cal-month-view .cal-days .cal-cell-row{border-bottom:1px solid}.cal-month-view .cal-day-badge{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;float:left}.cal-month-view .cal-day-number{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view .cal-events{flex:1;align-items:flex-end;margin:3px;line-height:10px;display:flex;flex-wrap:wrap}.cal-month-view .cal-event{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px}.cal-month-view .cal-day-cell.cal-in-month.cal-has-events{cursor:pointer}.cal-month-view .cal-day-cell.cal-out-month .cal-day-number{opacity:.1;cursor:default}.cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:1.9em}.cal-month-view .cal-open-day-events{padding:15px}.cal-month-view .cal-open-day-events .cal-event{position:relative;top:2px}.cal-month-view .cal-out-month .cal-day-badge,.cal-month-view .cal-out-month .cal-event{opacity:.3}.cal-month-view .cal-draggable{cursor:move}.cal-month-view .cal-drag-active *{pointer-events:none}.cal-month-view .cal-event-title{cursor:pointer}.cal-month-view .cal-event-title:hover{text-decoration:underline}.cal-month-view{background-color:#fff}.cal-month-view .cal-cell-row:hover{background-color:#fafafa}.cal-month-view .cal-cell-row .cal-cell:hover,.cal-month-view .cal-cell.cal-has-events.cal-open{background-color:#ededed}.cal-month-view .cal-days{border-color:#e1e1e1}.cal-month-view .cal-day-cell:not(:last-child){border-right-color:#e1e1e1}[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child){border-right-color:initial;border-left-color:#e1e1e1}.cal-month-view .cal-days .cal-cell-row{border-bottom-color:#e1e1e1}.cal-month-view .cal-day-badge{background-color:#b94a48;color:#fff}.cal-month-view .cal-event{background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#8b0000}.cal-month-view .cal-day-cell.cal-today{background-color:#e8fde7}.cal-month-view .cal-day-cell.cal-drag-over{background-color:#e0e0e0!important}.cal-month-view .cal-open-day-events{color:#fff;background-color:#555;box-shadow:inset 0 0 15px #00000080}.cal-week-view *{box-sizing:border-box}.cal-week-view .cal-day-headers{display:flex;padding-left:70px;border:1px solid}[dir=rtl] .cal-week-view .cal-day-headers{padding-left:initial;padding-right:70px}.cal-week-view .cal-day-headers .cal-header{flex:1;text-align:center;padding:5px}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:1px solid}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:initial;border-left:1px solid}.cal-week-view .cal-day-headers .cal-header:first-child{border-left:1px solid}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child{border-left:initial;border-right:1px solid}.cal-week-view .cal-day-headers span{font-weight:400;opacity:.5}.cal-week-view .cal-day-column{flex-grow:1;border-left:solid 1px}[dir=rtl] .cal-week-view .cal-day-column{border-left:initial;border-right:solid 1px}.cal-week-view .cal-event{font-size:12px;border:1px solid;direction:ltr}.cal-week-view .cal-time-label-column{width:70px;height:100%}.cal-week-view .cal-current-time-marker{position:absolute;width:100%;height:2px;z-index:2}.cal-week-view .cal-all-day-events{border:solid 1px;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view .cal-all-day-events .cal-day-columns{height:100%;width:100%;display:flex;position:absolute;top:0;z-index:0}.cal-week-view .cal-all-day-events .cal-events-row{position:relative;height:31px;margin-left:70px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-events-row{margin-left:initial;margin-right:70px}.cal-week-view .cal-all-day-events .cal-event-container{display:inline-block;position:absolute}.cal-week-view .cal-all-day-events .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-week-view .cal-all-day-events .cal-event{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:5px;border-bottom-left-radius:5px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:initial;border-bottom-left-radius:initial;border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:5px;border-bottom-right-radius:5px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:initial;border-bottom-right-radius:initial;border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view .cal-all-day-events .cal-time-label-column{display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view .cal-all-day-events .cal-resize-handle{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:0}[dir=rtl] .cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:initial;left:0}.cal-week-view .cal-event,.cal-week-view .cal-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view .cal-drag-active{pointer-events:none;z-index:1}.cal-week-view .cal-drag-active *{pointer-events:none}.cal-week-view .cal-time-events{position:relative;border:solid 1px;border-top:0;display:flex}.cal-week-view .cal-time-events .cal-day-columns{display:flex;flex-grow:1}.cal-week-view .cal-time-events .cal-day-column,.cal-week-view .cal-time-events .cal-events-container{position:relative}.cal-week-view .cal-time-events .cal-event-container{position:absolute;z-index:1}.cal-week-view .cal-time-events .cal-event{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view .cal-time-events .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-week-view .cal-hour-segment{position:relative}.cal-week-view .cal-hour-segment:after{content:"\\a0"}.cal-week-view .cal-event-container:not(.cal-draggable){cursor:pointer}.cal-week-view .cal-draggable{cursor:move}.cal-week-view mwl-calendar-week-view-hour-segment,.cal-week-view .cal-hour-segment{display:block}.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-week-view .cal-time{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-week-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view{background-color:#fff;border-top:solid 1px #e1e1e1}.cal-week-view .cal-day-headers{border-color:#e1e1e1;border-top:0}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:initial;border-left:solid 1px #e1e1e1!important}.cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:hover,.cal-week-view .cal-day-headers .cal-drag-over{background-color:#ededed}.cal-week-view .cal-day-column{border-left-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-column{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view .cal-all-day-events{border-color:#e1e1e1}.cal-week-view .cal-header.cal-today{background-color:#e8fde7}.cal-week-view .cal-header.cal-weekend span{color:#8b0000}.cal-week-view .cal-time-events{border-color:#e1e1e1}.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover{background-color:#ededed}.cal-week-view .cal-hour-odd{background-color:#fafafa}.cal-week-view .cal-drag-over .cal-hour-segment{background-color:#ededed}.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-week-view .cal-current-time-marker{background-color:#ea4334}.cal-day-view mwl-calendar-week-view-header{display:none}.cal-day-view .cal-events-container{margin-left:70px}[dir=rtl] .cal-day-view .cal-events-container{margin-left:initial;margin-right:70px}.cal-day-view .cal-day-column{border-left:0}.cal-day-view .cal-current-time-marker{margin-left:70px;width:calc(100% - 70px)}[dir=rtl] .cal-day-view .cal-current-time-marker{margin-left:initial;margin-right:70px}.cal-tooltip{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left{padding:0 5px;margin-left:-3px}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px}.cal-tooltip-inner{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem}.cal-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{border-top-color:#000}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{border-left-color:#000}.cal-tooltip-inner{color:#fff;background-color:#000}@media screen and (max-width: 768px){.hide--mobile{display:none!important}}@media screen and (min-width: 768px){.hide--pc{display:none!important}}.clearfix:before,.clearfix:after{content:unset;display:table}.clearfix:after{clear:both}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container:before,.container:after{content:unset;display:table}.container:after{clear:both}@media (min-width: 768px){.container{width:750px}}@media (min-width: 992px){.container{width:970px}.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-1{width:8.3333333333%}.col-md-2{width:16.6666666667%}.col-md-3{width:25%}.col-md-4{width:33.3333333333%}.col-md-5{width:41.6666666667%}.col-md-6{width:50%}.col-md-7{width:58.3333333333%}.col-md-8{width:66.6666666667%}.col-md-9{width:75%}.col-md-10{width:83.3333333333%}.col-md-11{width:91.6666666667%}.col-md-12{width:100%}.col-md-pull-0{right:auto}.col-md-pull-1{right:8.3333333333%}.col-md-pull-2{right:16.6666666667%}.col-md-pull-3{right:25%}.col-md-pull-4{right:33.3333333333%}.col-md-pull-5{right:41.6666666667%}.col-md-pull-6{right:50%}.col-md-pull-7{right:58.3333333333%}.col-md-pull-8{right:66.6666666667%}.col-md-pull-9{right:75%}.col-md-pull-10{right:83.3333333333%}.col-md-pull-11{right:91.6666666667%}.col-md-pull-12{right:100%}.col-md-push-0{left:auto}.col-md-push-1{left:8.3333333333%}.col-md-push-2{left:16.6666666667%}.col-md-push-3{left:25%}.col-md-push-4{left:33.3333333333%}.col-md-push-5{left:41.6666666667%}.col-md-push-6{left:50%}.col-md-push-7{left:58.3333333333%}.col-md-push-8{left:66.6666666667%}.col-md-push-9{left:75%}.col-md-push-10{left:83.3333333333%}.col-md-push-11{left:91.6666666667%}.col-md-push-12{left:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.3333333333%}.col-md-offset-2{margin-left:16.6666666667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.3333333333%}.col-md-offset-5{margin-left:41.6666666667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.3333333333%}.col-md-offset-8{margin-left:66.6666666667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.3333333333%}.col-md-offset-11{margin-left:91.6666666667%}.col-md-offset-12{margin-left:100%}}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html,body{height:100%;min-height:100%;font-family:Roboto,sans-serif}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}b{font-weight:700}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-tap-highlight-color:transparent}a{outline:none;text-decoration:none}body{background:#fff;font-weight:400;font-size:1em;letter-spacing:0;line-height:1.3em;position:relative;overflow-x:hidden}p{font-weight:400;font-size:.875em;line-height:1.5em;margin:0 0 20px}.cursor-pointer{cursor:pointer}input.ng-touched.ng-invalid:not(.ng-pristine){border:1px solid #ff3d71!important}select.ng-touched.ng-invalid:not(.ng-pristine){border:1px solid #ff3d71!important}[hidden]{display:none!important}.center{margin:0;padding:0}.app-loader-wrapper{display:flex;justify-content:space-between;flex-direction:column}.app-loader,.app-loader:after{border-radius:50%;width:10em;height:10em}.app-loader{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #bababa;transform:translateZ(0);animation:load8 1.1s infinite linear}.app-loader.min{margin:0 auto;font-size:5px}.app-loader.micro{margin:0 auto;font-size:2px}.app-loader.loader-button{margin:0 auto;font-size:3px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button{transition:background-color .3s ease-in-out}.animate-fast{transition:all .3s ease-in-out}.mr-10{margin-right:10px}.mr-25{margin-right:25px}.mb-10{margin-bottom:10px}.mb-20{margin-bottom:20px}.mb-30{margin-bottom:30px}.mb-40{margin-bottom:40px}.mt-10{margin-top:10px}.mt-20{margin-top:20px}.mt-30{margin-top:30px}.mt-40{margin-top:40px}.mt-80{margin-top:80px}.w-100{width:100%}.w-50{width:50%}.pb-35{padding-bottom:35px!important}.mt-auto{margin-top:auto}.position-relative{position:relative}.min-height-100{min-height:100%}.flex-container{display:flex;flex-direction:row}.flex-container.column,.flex-container .column{display:flex;flex-direction:column}.flex-container.row,.flex-container .row{display:flex;flex-direction:row}.flex-container .wrap{flex-wrap:wrap}.flex-container .flex-1{flex:1}.flex-container .flex-2{flex:2}.flex-container .flex-3{flex:3}.flex-container .flex-4{flex:4}.flex-container .flex-5{flex:5}.flex-container .justify-content-center{justify-content:center}.flex-container .justify-content-space-between{justify-content:space-between}.flex-container .justify-content-space-around{justify-content:space-around}.flex-container .justify-content-end{justify-content:end}.flex-container .center{align-items:center}.flex-container .flex-none{flex:none}.flex-container .align-self-center{align-self:center}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.z-index-1{z-index:1}.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:none}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-track,.slick-slider .slick-list{transform:translateZ(0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:before,.slick-track:after{display:table;content:""}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.slick-arrow.slick-prev,.slick-arrow.slick-next{font-size:0;line-height:0;position:absolute;top:50%;display:block;padding:0;transform:translateY(-50%);cursor:pointer;color:transparent;border:none;outline:0;width:40px;height:40px;background-repeat:no-repeat;background-position:8px 12px;background-color:#fff;border-radius:50%;box-shadow:0 2px 6px #32323266;z-index:1}.slick-arrow.slick-prev{left:-15px;background-image:url(/html/site/img/category-page/arrow-active-left.png)}.slick-arrow.slick-prev.slick-disabled{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-left.png)}.slick-arrow.slick-next{right:-15px;background-image:url(/html/site/img/category-page/arrow-active-right.png)}.slick-arrow.slick-next.slick-disabled{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-right.png)}.slick-slide{min-height:375px;margin:0 5px}.slick-slide .course-block .course-block-content{padding:20px 10px 90px;text-align:left;background:#f3f6f7}.slick-slide .course-block .course-block-intro{background:#f3f6f7}.slick-track{min-height:400px}#monthly-learner-report .title-wrap{width:100%;display:flex;align-items:center}#monthly-learner-report .title-wrap img{width:36px;height:36px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .title-wrap img{width:32px;height:32px}}#monthly-learner-report .title-wrap .title{font-family:Roboto,sans-serif;font-weight:700;font-size:22px;margin-left:6px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .title-wrap .title{font-size:16px!important}}@media screen and (max-width: 398px){#monthly-learner-report .title-wrap .title{line-height:23px}}#monthly-learner-report .title-wrap .title .month{color:#89959d}#monthly-learner-report .cal-month-view{max-width:100%}#monthly-learner-report .cal-month-view .cal-cell{position:relative}#monthly-learner-report .cal-month-view .cal-has-events .cal-day-number{color:#fff!important;opacity:1}#monthly-learner-report .cal-month-view .cal-events{position:absolute;top:0;width:32px;margin:0}#monthly-learner-report .cal-month-view .cal-events .cal-event{border-radius:6px;width:32px;height:32px;margin:0}#monthly-learner-report .cal-month-view .cal-events .cal-event:not(.best-day){background-color:#1794c9}#monthly-learner-report .cal-month-view .cal-events .cal-event.best-day{background-image:url(/html/site/img/angular-shop/learner-report/best_day_big_icon.png);background-size:contain;background-color:unset}#monthly-learner-report .cal-month-view .cal-cell-top{position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:32px;min-height:32px}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-cell-top{min-height:23px}}#monthly-learner-report .cal-month-view .cal-cell-top .cal-day-badge{display:none!important}#monthly-learner-report .cal-month-view .cal-cell-row{border:none!important;margin:10px 0}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-cell-row{margin:0!important}}#monthly-learner-report .cal-month-view .cal-header{border-bottom:1px solid #F3F6F7!important}#monthly-learner-report .cal-month-view .cal-header .cal-cell{color:#89959d;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:14px;padding:0 0 16px}@media screen and (min-width: 320px) and (max-width: 360px){#monthly-learner-report .cal-month-view .cal-header .cal-cell{font-size:12px}}@media screen and (min-width: 360px) and (max-width: 650px){#monthly-learner-report .cal-month-view .cal-header .cal-cell{padding:0 0 11px}}#monthly-learner-report .cal-month-view .cal-cell,#monthly-learner-report .cal-month-view .cal-days{border:none!important}#monthly-learner-report .cal-month-view .cal-days{height:224px;margin-top:20px;margin-bottom:45px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-days{margin-top:0!important}}#monthly-learner-report .cal-month-view .cal-out-month .cal-day-number{color:#b3bdc0}#monthly-learner-report .cal-month-view .cal-day-cell{max-width:32px;min-height:32px;height:32px;margin:0 16px}@media screen and (min-width: 320px) and (max-width: 359px){#monthly-learner-report .cal-month-view .cal-day-cell{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-day-cell{margin:0 auto;min-height:30px}}@media screen and (min-width: 1200px) and (max-width: 1360px){#monthly-learner-report .cal-month-view .cal-day-cell{margin:0 12px}}#monthly-learner-report .cal-month-view .cal-day-cell .cal-day-number{color:#5d676e;font-size:12px!important;font-weight:700;margin:0}@media screen and (max-width: 360px){#monthly-learner-report .cal-month-view .cal-day-cell .cal-day-number{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-day-cell .cal-day-number{margin:0}}#monthly-learner-report .cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#5d676e}#monthly-learner-report .cal-month-view .cal-day-cell.cal-today{background-color:transparent}#monthly-learner-report .cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:12px!important}.learning-stats-wrap p,.goals-and-achievements p{margin:0}.learning-stats-wrap .right-wrap .total-box,.goals-and-achievements .right-wrap .total-box{width:100%;height:130px;background-color:#fff;box-shadow:0 3px 6px #96969640;border-radius:12px}.learning-stats-wrap .right-wrap .total-box .time-spend,.learning-stats-wrap .right-wrap .total-box .day-time,.goals-and-achievements .right-wrap .total-box .time-spend,.goals-and-achievements .right-wrap .total-box .day-time{color:#465159;font-size:16px;font-weight:700}.learning-stats-wrap .right-wrap .total-box .time-type,.goals-and-achievements .right-wrap .total-box .time-type{text-transform:uppercase;color:#89959d;font-size:12px;font-weight:700}.learning-stats-wrap .result-comparison,.goals-and-achievements .result-comparison{display:flex;align-items:center;font-size:12px}.learning-stats-wrap .result-comparison .days-comparison,.learning-stats-wrap .result-comparison .medals-comparison,.goals-and-achievements .result-comparison .days-comparison,.goals-and-achievements .result-comparison .medals-comparison{margin-left:5px}.learning-stats-wrap .result-comparison .days-comparison.less,.learning-stats-wrap .result-comparison .medals-comparison.less,.goals-and-achievements .result-comparison .days-comparison.less,.goals-and-achievements .result-comparison .medals-comparison.less{color:#e32726}.learning-stats-wrap .result-comparison .days-comparison.more,.learning-stats-wrap .result-comparison .medals-comparison.more,.goals-and-achievements .result-comparison .days-comparison.more,.goals-and-achievements .result-comparison .medals-comparison.more{color:#108445}.learning-stats-wrap .result-comparison .days-comparison span,.learning-stats-wrap .result-comparison .medals-comparison span,.goals-and-achievements .result-comparison .days-comparison span,.goals-and-achievements .result-comparison .medals-comparison span{font-weight:700}.additional-actions{width:100%;text-align:center;margin-top:32px;margin-bottom:10px}.additional-actions .reminders-msg,.additional-actions .keep-learning-msg{color:#465159;font-size:14px}.additional-actions button{max-width:196px;width:100%;height:42px;background-color:#1794c9;border-radius:50px;color:#fff;border:unset;margin-left:10px;cursor:pointer;font-weight:500}.additional-actions button:hover{background-color:#1783b1}@font-face{font-family:icomoon;src:url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff2?ueshyb) format("woff2"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.ttf?ueshyb) format("truetype"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff?ueshyb) format("woff"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.svg?ueshyb#icomoon) format("svg");font-weight:400;font-style:normal}[class^=icon-],[class*=" icon-"]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-filter_up:before{content:"\\ea73";color:#fff}.icon-filter_down:before{content:"\\ea74";color:#fff}.icon-seo-and-web-1:before{content:"\\ea6e"}.icon-discount:before{content:"\\ea6f"}.icon-tick-mark:before{content:"\\ea70"}.icon-student1:before{content:"\\ea71"}.icon-cart1:before{content:"\\ea72"}.icon-close-group:before{content:"\\ea67"}.icon-user-list:before{content:"\\ea68"}.icon-new-group:before{content:"\\ea69"}.icon-privileges:before{content:"\\ea6a"}.icon-statistics:before{content:"\\ea6b"}.icon-group-members:before{content:"\\ea6c"}.icon-group-details:before{content:"\\ea6d"}.icon-blue-search:before{content:"\\ea60";color:#0094c9}.icon-clipboard:before{content:"\\ea61";color:#0094c9}.icon-share-link:before{content:"\\ea62";color:#0094c9}.icon-speaker:before{content:"\\ea63";color:#0094c9}.icon-purple-display-upload:before{content:"\\ea59";color:#5900b1}.icon-purple-form:before{content:"\\ea5a";color:#5900b1}.icon-purple-display-done:before{content:"\\ea5b";color:#5900b1}.icon-purple-web:before{content:"\\ea54";color:#5900b1}.icon-purple-group:before{content:"\\ea55";color:#5900b1}.icon-purple-rocket:before{content:"\\ea56";color:#5900b1}.icon-purple-screen:before{content:"\\ea57";color:#5900b1}.icon-purple-wisdom:before{content:"\\ea58";color:#5900b1}.icon-pd-dashboard:before{content:"\\ea49";color:#aaa}.icon-pd-help:before{content:"\\ea4a";color:#aaa}.icon-pd-logout:before{content:"\\ea4b";color:#0094c9}.icon-pd-play-button:before{content:"\\ea4c";color:#0094c9}.icon-pd-settings:before{content:"\\ea4d";color:#aaa}.icon-nb-active-courses:before{content:"\\ea3d"}.icon-nb-career:before{content:"\\ea3e"}.icon-nb-categories:before{content:"\\ea3f"}.icon-nb-dashboard:before{content:"\\ea40"}.icon-nb-help:before{content:"\\ea41"}.icon-nb-hubs:before{content:"\\ea42"}.icon-nb-login:before{content:"\\ea43"}.icon-nb-logout:before{content:"\\ea44"}.icon-nb-menu:before{content:"\\ea45"}.icon-nb-resume:before{content:"\\ea46"}.icon-nb-shop:before{content:"\\ea47"}.icon-hp-english-hub:before{content:"\\ea2c"}.icon-hp-healthcare-hub:before{content:"\\ea2d"}.icon-hp-learning-path:before{content:"\\ea2e"}.icon-hp-project-man-hub:before{content:"\\ea2f"}.icon-accreditation:before{content:"\\ea76"}.icon-full-screen-arrows:before{content:"\\ea23"}.icon-assessment-dark:before{content:"\\ea11"}.icon-careers:before{content:"\\ea12"}.icon-certification:before{content:"\\ea13"}.icon-comments:before{content:"\\ea14"}.icon-download-study-notes:before{content:"\\ea15"}.icon-duration-dark:before{content:"\\ea16"}.icon-email-study-notes:before{content:"\\ea17"}.icon-points:before{content:"\\ea18"}.icon-publisher-dark:before{content:"\\ea19"}.icon-responsive-dark:before{content:"\\ea1a"}.icon-students:before{content:"\\ea1b"}.icon-study-notes:before{content:"\\ea1c"}.icon-text-version-dark:before{content:"\\ea1d"}.icon-category-business:before{content:"\\e98c"}.icon-category-health:before{content:"\\e98d"}.icon-category-humanities:before{content:"\\e98e"}.icon-category-it:before{content:"\\e98f"}.icon-category-language:before{content:"\\e990"}.icon-category-lifestyle:before{content:"\\e991"}.icon-category-marketing:before{content:"\\e992"}.icon-category-math:before{content:"\\e993"}.icon-category-science:before{content:"\\e9e4"}.icon-discount-tag:before{content:"\\ea75"}.icon-brain:before{content:"\\ea66"}.icon-check-mark-button:before{content:"\\ea65";color:#0094c9}.icon-calendar-bell:before{content:"\\ea64";color:#fff}.icon-happy-man:before{content:"\\ea5f"}.icon-finish:before{content:"\\ea5d"}.icon-quiz-man:before{content:"\\ea5e"}.icon-minimize:before{content:"\\ea5c"}.icon-group:before{content:"\\ea53"}.icon-calendar:before{content:"\\ea4f"}.icon-idea:before{content:"\\ea50"}.icon-students1:before{content:"\\ea51"}.icon-study:before{content:"\\ea52"}.icon-award:before{content:"\\ea4e"}.icon-resume:before{content:"\\ea48"}.icon-skills-and-guidance:before{content:"\\ea3a"}.icon-specific-jobs:before{content:"\\ea3b"}.icon-soldier:before{content:"\\ea39"}.icon-envelope-o:before{content:"\\f003"}.icon-envelope-open-o:before{content:"\\f2b7"}.icon-android-app:before{content:"\\f17b"}.icon-whatsapp:before{content:"\\ea32"}.icon-home1:before{content:"\\f015"}.icon-thick-phone:before{content:"\\ea30"}.icon-instagram:before{content:"\\f16d"}.icon-quote-right:before{content:"\\ea0b"}.icon-thumbs-o-up:before{content:"\\f087"}.icon-thumbs-o-down:before{content:"\\f088"}.icon-copy:before{content:"\\f0c5"}.icon-files-o:before{content:"\\f0c5"}.icon-angle-double-right:before{content:"\\e9d4"}.icon-paypal:before{content:"\\e9d3"}.icon-alison-premium-monthly:before{content:"\\ea33"}.icon-chevrons-left:before{content:"\\ea07"}.icon-alison-premium:before{content:"\\ea09"}.icon-chevrons:before{content:"\\ea08"}.icon-en-devices:before{content:"\\e9fd"}.icon-en-follow:before{content:"\\e9fe"}.icon-en-levels:before{content:"\\e9ff"}.icon-en-listen:before{content:"\\ea00"}.icon-en-read:before{content:"\\ea01"}.icon-en-rich:before{content:"\\ea02"}.icon-en-speak:before{content:"\\ea03"}.icon-en-speakers:before{content:"\\ea04"}.icon-en-tabbed:before{content:"\\ea05"}.icon-en-write:before{content:"\\ea06"}.icon-mobile-applications:before{content:"\\e9fc"}.icon-eng-control:before{content:"\\e9f9"}.icon-eng-focus:before{content:"\\e9fa"}.icon-eng-opportunity:before{content:"\\e9fb"}.icon-learner:before{content:"\\e9f7"}.icon-library:before{content:"\\e9f8"}.icon-alp-icon:before{content:"\\e9f5"}.icon-tshirt2:before{content:"\\e9f6"}.icon-alc-icon:before{content:"\\e9f4"}.icon-location2:before{content:"\\e9ef"}.icon-qualified:before{content:"\\e9f0"}.icon-proctored:before{content:"\\e9f1"}.icon-community:before{content:"\\e9f2"}.icon-support:before{content:"\\e9f3"}.icon-caregiving:before{content:"\\e9e5"}.icon-customer-service:before{content:"\\e9e6"}.icon-data:before{content:"\\e9e7"}.icon-financial:before{content:"\\e9e8"}.icon-healthcare:before{content:"\\e9e9"}.icon-marketing2:before{content:"\\e9ea"}.icon-nursing:before{content:"\\e9eb"}.icon-operations:before{content:"\\e9ec"}.icon-software:before{content:"\\e9ed"}.icon-teaching:before{content:"\\e9ee"}.icon-track:before{content:"\\e976"}.icon-smartphone:before{content:"\\e9e3"}.icon-alternative:before{content:"\\e9e0"}.icon-corrections:before{content:"\\e9e1"}.icon-refugees:before{content:"\\e9e2"}.icon-graduate:before{content:"\\e9df"}.icon-wechat:before{content:"\\f1d7"}.icon-weixin:before{content:"\\f1d7"}.icon-google1:before{content:"\\ea38"}.icon-move:before{content:"\\ea37"}.icon-sad:before{content:"\\e9d5"}.icon-stumbleupon:before{content:"\\e93d"}.icon-reddit:before{content:"\\e9d2"}.icon-twitter2:before{content:"\\e944"}.icon-facebook-logo:before{content:"\\e9c7"}.icon-google-plus:before{content:"\\e9c8"}.icon-google-plus-footer:before{content:"\\e9de"}.icon-linkedin-logo2:before{content:"\\e9c9"}.icon-outlook-icon:before{content:"\\e9ca"}.icon-yahoo-logo:before{content:"\\e9cb"}.icon-WDP-icon:before{content:"\\ea35"}.icon-new-upload:before{content:"\\ea34";color:#0094c9}.icon-lightbulb:before{content:"\\ea2a"}.icon-rocket:before{content:"\\ea2b"}.icon-hub-awareness:before{content:"\\ea24"}.icon-hub-caregiving:before{content:"\\ea25"}.icon-hub-fitness:before{content:"\\ea26"}.icon-hub-nursing:before{content:"\\ea27"}.icon-hub-nutrition:before{content:"\\ea28"}.icon-hub-pharmacology:before{content:"\\ea29"}.icon-the-hub:before{content:"\\ea22"}.icon-modules:before{content:"\\ea1f"}.icon-topics:before{content:"\\ea21"}.icon-complete:before{content:"\\ea1e"}.icon-start-topic:before{content:"\\ea20"}.icon-growth:before{content:"\\ea0d"}.icon-skills2:before{content:"\\ea0e"}.icon-arrow-right2:before{content:"\\ea3c"}.icon-tshirt:before{content:"\\e9dd"}.icon-ive-been-referred:before{content:"\\e9d6"}.icon-ive-referred-my-friends:before{content:"\\e9d7"}.icon-how-donations-work:before{content:"\\e9d8"}.icon-donations:before{content:"\\e9d9"}.icon-refer-a-friend:before{content:"\\e9db"}.icon-popular:before{content:"\\e94a"}.icon-recent:before{content:"\\e95c"}.icon-trending:before{content:"\\e977"}.icon-new-filter:before{content:"\\e9c6"}.icon-broaden:before{content:"\\e9c3"}.icon-master:before{content:"\\e9c4"}.icon-progress:before{content:"\\e9c5"}.icon-PDF-Filled:before{content:"\\e9c2"}.icon-Gift-Filled:before{content:"\\e9ba"}.icon-Graduation-Cap-Filled:before{content:"\\e9bb"}.icon-Literature-Filled:before{content:"\\e9bd"}.icon-User-Groups-Filled:before{content:"\\e9be"}.icon-step3:before{content:"\\e9ac"}.icon-step32:before{content:"\\e9dc"}.icon-step6:before{content:"\\e9b0"}.icon-step5:before{content:"\\e9b1"}.icon-step4:before{content:"\\e9b7"}.icon-step2:before{content:"\\e9b8"}.icon-step1:before{content:"\\e9b9"}.icon-info:before{content:"\\e9ab"}.icon-success:before{content:"\\e99b"}.icon-save:before{content:"\\e995"}.icon-download:before{content:"\\e994"}.icon-fav:before{content:"\\e96b"}.icon-fav2:before{content:"\\e983"}.icon-rocket-line:before{content:"\\e9a5"}.icon-management:before{content:"\\e978"}.icon-marketing:before{content:"\\e979"}.icon-lifestyle:before{content:"\\e97a"}.icon-health:before{content:"\\e97b"}.icon-environment:before{content:"\\e97c"}.icon-people:before{content:"\\e97d"}.icon-science:before{content:"\\e97e"}.icon-maths:before{content:"\\e97f"}.icon-technology2:before{content:"\\e980"}.icon-filter:before{content:"\\e981"}.icon-help:before{content:"\\e982"}.icon-linkedin-logo:before{content:"\\e975"}.icon-phone:before{content:"\\e972"}.icon-pin:before{content:"\\e973"}.icon-upload2:before{content:"\\e95e"}.icon-upload:before{content:"\\e943"}.icon-pencil1:before{content:"\\e939"}.icon-undo:before{content:"\\e965"}.icon-redo:before{content:"\\e966"}.icon-stats-bars:before{content:"\\e99c"}.icon-rocket2:before{content:"\\e9bc"}.icon-meter:before{content:"\\e9a6"}.icon-tree:before{content:"\\e9cc"}.icon-heart2:before{content:"\\e9da"}.icon-cross2:before{content:"\\ea0f"}.icon-checkmark:before{content:"\\ea10"}.icon-pencil:before{content:"\\ea36"}.icon-thumb-up:before{content:"\\e946"}.icon-thumb-down:before{content:"\\e947"}.icon-thick-chevron-down:before{content:"\\e9bf"}.icon-thick-chevron-up:before{content:"\\e9c0"}.icon-payment-options:before{content:"\\e9a7"}.icon-description:before{content:"\\e998"}.icon-diploma-label:before{content:"\\e9aa"}.icon-outcome:before{content:"\\e9ad"}.icon-assessment:before{content:"\\e9ae"}.icon-chapter:before{content:"\\e9af"}.icon-course-plan:before{content:"\\e9b2"}.icon-module:before{content:"\\e9b3"}.icon-play:before{content:"\\e9b4"}.icon-ressources:before{content:"\\e9b5"}.icon-accreditation1:before{content:"\\e99f"}.icon-account:before{content:"\\e9a0"}.icon-certification-and-payments:before{content:"\\e9a1"}.icon-getting-started:before{content:"\\e9a2"}.icon-login-issues:before{content:"\\e9a3"}.icon-my-account:before{content:"\\e9a4"}.icon-tracking-and-delivery:before{content:"\\e9a8"}.icon-upgrade:before{content:"\\e9a9"}.icon-warning:before{content:"\\e99d"}.icon-danger:before{content:"\\e99e"}.icon-crown:before{content:"\\e999"}.icon-present:before{content:"\\e99a"}.icon-rate:before{content:"\\e997"}.icon-search-bar-categories:before{content:"\\e996"}.icon-video:before{content:"\\e987"}.icon-audio:before{content:"\\e988"}.icon-certificate:before{content:"\\e989"}.icon-responsive:before{content:"\\e98a"}.icon-sort:before{content:"\\e986"}.icon-book2:before{content:"\\e985"}.icon-learning:before{content:"\\e984"}.icon-checked:before{content:"\\e974"}.icon-minus:before{content:"\\e962"}.icon-plus:before{content:"\\e961"}.icon-check:before{content:"\\e93f"}.icon-cross3:before{content:"\\e948"}.icon-pinterest:before{content:"\\ead1"}.icon-flag:before{content:"\\e945"}.icon-rotate-right:before{content:"\\e968"}.icon-rotate-left:before{content:"\\e93e"}.icon-zoom-out:before{content:"\\e940"}.icon-zoom-in:before{content:"\\e941"}.icon-last-alert:before{content:"\\e963"}.icon-megaphone:before{content:"\\e964"}.icon-past-month:before{content:"\\e967"}.icon-dots:before{content:"\\e969"}.icon-new-alert:before{content:"\\e96a"}.icon-bell-ring:before{content:"\\e971"}.icon-select:before{content:"\\e9d1"}.icon-location:before{content:"\\e9d0"}.icon-invisble:before{content:"\\e9cf"}.icon-visible:before{content:"\\e9ce"}.icon-filled-star:before{content:"\\e95f"}.icon-previous-icon:before{content:"\\e9cd"}.icon-user-log:before{content:"\\e903"}.icon-triangle-for-languages:before{content:"\\e959"}.icon-search2:before{content:"\\e95b"}.icon-alert-off:before{content:"\\e95d"}.icon-left-quote:before{content:"\\e95a"}.icon-getting-a-certificate:before{content:"\\e955"}.icon-payments:before{content:"\\e956"}.icon-premium-services:before{content:"\\e957"}.icon-technical-help:before{content:"\\e958"}.icon-bio:before{content:"\\e953"}.icon-camera:before{content:"\\e952"}.icon-address:before{content:"\\e954"}.icon-profile:before{content:"\\e94b"}.icon-education:before{content:"\\e94c"}.icon-professional:before{content:"\\e94d"}.icon-highlights-icon:before{content:"\\e94f"}.icon-left-arrow:before{content:"\\e93b"}.icon-right-arrow:before{content:"\\e93c"}.icon-technology:before{content:"\\e91e"}.icon-table:before{content:"\\e951"}.icon-bell:before{content:"\\e928"}.icon-send:before{content:"\\e915"}.icon-menu:before{content:"\\e929"}.icon-error:before{content:"\\e927"}.icon-leaf:before{content:"\\e926"}.icon-chat:before{content:"\\e918"}.icon-path:before{content:"\\e920"}.icon-cross:before{content:"\\e925"}.icon-suitcase:before{content:"\\e950"}.icon-star:before{content:"\\e921"}.icon-hat:before{content:"\\e90d"}.icon-student:before{content:"\\e90c"}.icon-clock:before{content:"\\e919"}.icon-controls:before{content:"\\e91a"}.icon-course:before{content:"\\e91b"}.icon-gears:before{content:"\\e91c"}.icon-heart:before{content:"\\e91d"}.icon-money:before{content:"\\e91f"}.icon-tag:before{content:"\\e922"}.icon-time:before{content:"\\e923"}.icon-trophy:before{content:"\\e924"}.icon-categories:before{content:"\\e914"}.icon-faq:before{content:"\\e90f"}.icon-globe:before{content:"\\e910"}.icon-hand:before{content:"\\e911"}.icon-news:before{content:"\\e913"}.icon-shop:before{content:"\\e917"}.icon-search:before{content:"\\e90a"}.icon-envelope:before{content:"\\e909"}.icon-lock:before{content:"\\e908"}.icon-windows:before{content:"\\e905"}.icon-twitter:before{content:"\\e94e"}.icon-facebook:before{content:"\\e92a"}.icon-google:before{content:"\\e901"}.icon-linkedin:before{content:"\\e902"}.icon-yahoo:before{content:"\\e904"}.icon-mail:before{content:"\\e912"}.icon-share:before{content:"\\e90b"}.icon-chevron-down:before{content:"\\e916"}.icon-suit-case:before{content:"\\e92d"}.icon-book:before{content:"\\e92e"}.icon-calculator:before{content:"\\e92f"}.icon-chemistry:before{content:"\\e930"}.icon-computer:before{content:"\\e931"}.icon-full-heart:before{content:"\\e932"}.icon-messages:before{content:"\\e933"}.icon-target:before{content:"\\e935"}.icon-world:before{content:"\\e936"}.icon-skills:before{content:"\\e960"}.icon-user:before{content:"\\e90e"}.icon-circle-group:before{content:"\\e942"}.icon-bag:before{content:"\\e96c"}.icon-bell-line:before{content:"\\e96d"}.icon-cart:before{content:"\\e96e"}.icon-faq-line:before{content:"\\e96f"}.icon-home:before{content:"\\e970"}.icon-paths:before{content:"\\e949"}.icon-geography:before{content:"\\e934"}.icon-time-lapse:before{content:"\\e900"}.icon-home2:before{content:"\\e906"}.icon-courses:before{content:"\\e907"}.icon-flashTesting:before{content:"\\e92c"}.icon-studyGroups:before{content:"\\e92b"}.icon-publishing:before{content:"\\e937"}.icon-communityMain:before{content:"\\e98b"}.icon-about:before{content:"\\e93a"}.icon-alisonShop:before{content:"\\e938"}.icon-category:before{content:"\\e9b6"}.icon-document-file-zip:before{content:"\\ea31"}.icon-checkmark2:before{content:"\\ea0c"}.icon-lock2:before{content:"\\ea0a"}.icon-printer:before{content:"\\e9c1"}.icon-arrow-thin-right:before{content:"\\e90e"}.icon-nav-learning:before{content:"\\e932"}.icon-build:before{content:"\\e931"}.icon-earn:before{content:"\\e930"}.icon-megaphone-alt1:before{content:"\\e983"}.icon-megaphone-alt:before{content:"\\e984";color:#6ea21f}@media (min-width: 768px){.mobile-only{display:none}}.desktop-only{display:none}@media (min-width: 768px){.desktop-only{display:initial}}.premium-le{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;position:relative;padding:34px 16px 40px;min-height:100vh;width:100%}@media (min-width: 768px){.premium-le{padding:50px 118px}.premium-le-step-0:before{content:url(/html/site/img/angular-shop/study-icon-ads.svg);position:absolute;top:51px;left:0}.premium-le-step-1:before{content:url(/html/site/img/angular-shop/study-icon-payment.svg);position:absolute;top:20px;left:-16px}}@media (max-width: 1350px) and (min-width: 1250px){.premium-le{padding:50px}}.premium-le__title{font: 900 18px/28px Roboto;letter-spacing:.36px}@media (min-width: 768px){.premium-le__title{font: 900 28px/32px Roboto;letter-spacing:0px}}.premium-le__subtitle{font: 500 14px/32px Roboto;color:#7b8993}.premium-le__button{cursor:pointer;color:#fff;font: 500 14px/19px Roboto;background:#0092CA;border-radius:8px;border:none;padding:8px 27px;width:auto}.premium-le__button:hover,.premium-le__button:focus{background:#1581AF}.premium-le__button:disabled{cursor:initial;background:#CFCFCF}\n', ".premium-le__ads{position:relative;font-family:Roboto,Arial,sans-serif;text-align:center}.premium-le__ads__benefits{display:flex;justify-content:center;flex-wrap:wrap;margin:8px 0 36px}@media (min-width: 1070px){.premium-le__ads__benefits{margin:20px 0 27px}}.premium-le__ads__benefits__item{display:inline-block;color:#7b8993;font: 12px/24px Roboto;margin:0 7px}.premium-le__ads__benefits__item .icon-checked:before{color:#83c124}@media (min-width: 1070px){.premium-le__ads__benefits__item{font: 500 14px/24px Roboto,sans-serif;margin:0 11.5px}}.premium-le__ads__plans{display:flex;flex-direction:column}@media (min-width: 1070px){.premium-le__ads__plans{flex-direction:row;flex-wrap:no-wrap}}.premium-le__ads__box{display:flex;flex-direction:row;align-items:center;cursor:pointer;position:relative;color:#2d3941;text-align:left;border-radius:20px;transition:ease-in-out .1s;padding:17px 20px 19px;margin-bottom:20px}@media (min-width: 1070px){.premium-le__ads__box{text-align:center;flex-direction:column;padding:67px 32px 24px;margin:53px 20px 0}}.premium-le__ads__box__content{display:flex;flex-direction:column;flex:1}.premium-le__ads__box__icon{display:inline-block;background:#FFF;border:4px solid #FFFFFF;border-radius:50%;padding:2px 9px}@media (min-width: 1070px){.premium-le__ads__box__icon{padding:15px 24px;margin-bottom:10px}}.premium-le__ads__box__icon__wrapper{display:flex;align-items:center;margin-right:14px}@media (min-width: 1070px){.premium-le__ads__box__icon__wrapper{display:block;position:absolute;top:-53px;left:0;right:0;margin:0 auto}}.premium-le__ads__box__icon img{transform:translateY(4px);height:38px;width:28px}@media (min-width: 1070px){.premium-le__ads__box__icon img{height:64px;width:50px}}.premium-le__ads__box__title{font: 900 14px/19px Roboto;letter-spacing:.28px;margin-bottom:2px}@media (min-width: 1070px){.premium-le__ads__box__title{font: 700 22px/29px Roboto;letter-spacing:.44px;margin-bottom:8px}}.premium-le__ads__box__description{font: 12px/18px Roboto;letter-spacing:.24px;order:1;margin-bottom:0}.premium-le__ads__box__description b:hover{text-decoration:underline}@media (min-width: 1070px){.premium-le__ads__box__description{font: 14px/24px Roboto;order:0;letter-spacing:.28px;margin-bottom:12px}}.premium-le__ads__box__price{font: 900 28px/37px Roboto;margin-bottom:4px}@media (min-width: 1070px){.premium-le__ads__box__price{font: 900 44px/58px Roboto;margin-bottom:20px}}.premium-le__ads__box__button{display:none;cursor:pointer;color:#687984;font: 700 16px/21px Roboto;border:1px solid #FFFFFF;background:#FFFFFF;border-radius:8px;padding:16px 41px}@media (min-width: 1070px){.premium-le__ads__box__button{display:inline-block}}.premium-le__ads__box:hover{transform:scale(1.1)}.premium-le__ads__box--grey{background:#E9EEF3}.premium-le__ads__box--grey .icon-forward path{fill:#2d3941}.premium-le__ads__box--grey:hover .premium-le__ads__box__button{color:#00a94f;border:1px solid #00A94F}@media (min-width: 1070px){.premium-le__ads__box--grey .premium-le__ads__box__icon{background:#E9EEF3}}.premium-le__ads__box--green{color:#fff;background:#00A94F}.premium-le__ads__box--green .icon-forward path{fill:#fff;opacity:.74}.premium-le__ads__box--green:hover .premium-le__ads__box__button{color:#00a94f}@media (min-width: 1070px){.premium-le__ads__box--green .premium-le__ads__box__icon{background:#FFF;border:8px solid #00A94F}}.premium-le__ads__box--green .premium-le__ads__box__button{color:#2d3941}.premium-le__ads__footer{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:30px}@media (min-width: 1070px){.premium-le__ads__footer{flex-direction:row;margin-top:36px}}.premium-le__ads__footer__text{color:#465159;font: 12px/16px Roboto;margin-bottom:12px}@media (min-width: 1070px){.premium-le__ads__footer__text{font: 400 14px/19px Roboto;margin:0 24px 0 0}}\n"
                    ],
                    encapsulation: 2
                }),
                H
            })();
            function L(A, H) {
                if (1 & A && t.GkF(0, 5), 2 & A) {
                    t.oxw(2);
                    const j = t.MAs(2);
                    t.Q6J("ngTemplateOutlet", j)
                }
            }
            function C(A, H) {
                if (1 & A && t.GkF(0, 5), 2 & A) {
                    t.oxw(2);
                    const j = t.MAs(4);
                    t.Q6J("ngTemplateOutlet", j)
                }
            }
            const U = function (A) {
                return ["premium-le", A]
            };
            function D(A, H) {
                if (1 & A && (t.TgZ(0, "div", 3), t.YNc(1, L, 1, 1, "ng-container", 4), t.YNc(2, C, 1, 1, "ng-container", 4), t.qZA()), 2 & A) {
                    const j = t.oxw();
                    t.Q6J("ngSwitch", j.currentStep)("ngClass", t.VKq(4, U, "premium-le-step-" + j.stepIterator)),
                    t.xp6(1),
                    t.Q6J("ngSwitchCase", j.PREMIUM_LE_STEPS.WELCOME_SCREEN),
                    t.xp6(1),
                    t.Q6J("ngSwitchCase", j.PREMIUM_LE_STEPS.PAYMENT)
                }
            }
            function z(A, H) {
                if (1 & A) {
                    const j = t.EpF();
                    t.TgZ(0, "app-premium-le-ads", 6),
                    t.NdJ("finishStep", function (v) {
                        t.CHM(j);
                        const F = t.oxw();
                        return t.KtG(F.finishStep(v))
                    })("startCourse", function () {
                        t.CHM(j);
                        const v = t.oxw();
                        return t.KtG(v.startCourse())
                    }),
                    t.qZA()
                }
            }
            function V(A, H) {
                if (1 & A) {
                    const j = t.EpF();
                    t.TgZ(0, "app-premium-le-payment", 7),
                    t.NdJ("startCourse", function (v) {
                        t.CHM(j);
                        const F = t.oxw();
                        return t.KtG(F.startCourse(v))
                    }),
                    t.qZA()
                }
                if (2 & A) {
                    const j = t.oxw();
                    t.Q6J("selectedPlan", j.selectedPlan)
                }
            }
            let ae = (() => {
                var A;
                class H {
                    constructor(h) {
                        this._appendScript = h,
                        this.PREMIUM_LE_STEPS = K,
                        this.show = !0,
                        this.steps = Object.values(K),
                        this.stepIterator = 0,
                        this.currentStep = this.steps[this.stepIterator]
                    }
                    ngOnInit() {
                        this._appendScript.appendStripe()
                    }
                    startCourse(h) {
                        if (void 0 !== h) 
                            return this.stepIterator = h,
                            void(this.currentStep = this.steps[h]);
                        
                        this.show = !1;
                        const v = document.querySelector(".div_absolute_iframe--white");
                        v && (v.style.display = "none"),
                        document.querySelector(".player-header.player-header--hide") ?. classList.remove("player-header--hide"),
                        document.dispatchEvent(new Event("start:course"))
                    }
                    finishStep(h) {
                        this.stepIterator ++,
                        this.selectedPlan = h,
                        this.currentStep = this.steps[this.stepIterator]
                    }
                }
                return(A = H).\u0275fac = function (h) {
                    return new(h || A)(t.Y36(ne.E))
                },
                A.\u0275cmp = t.Xpm({
                    type: A,
                    selectors: [
                        ["app-premium-le"]
                    ],
                    decls: 5,
                    vars: 1,
                    consts: [
                        [
                            3,
                            "ngSwitch",
                            "ngClass",
                            4,
                            "ngIf"
                        ],
                        [
                            "welcome", ""
                        ],
                        [
                            "payment", ""
                        ],
                        [
                            3, "ngSwitch", "ngClass"
                        ],
                        [
                            3, "ngTemplateOutlet", 4, "ngSwitchCase"
                        ],
                        [
                            3, "ngTemplateOutlet"
                        ],
                        [
                            3, "finishStep", "startCourse"
                        ],
                        [
                            3, "selectedPlan", "startCourse"
                        ]
                    ],
                    template: function (h, v) {
                        1 & h && (t.YNc(0, D, 3, 6, "div", 0), t.YNc(1, z, 1, 0, "ng-template", null, 1, t.W1O), t.YNc(3, V, 1, 1, "ng-template", null, 2, t.W1O)),
                        2 & h && t.Q6J("ngIf", v.show)
                    },
                    dependencies: [
                        l.mk,
                        l.O5,
                        l.tP,
                        l.RF,
                        l.n9,
                        le,
                        O
                    ],
                    styles: ['@charset "UTF-8";.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{text-align:center;font-weight:bolder}.cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border:1px solid;border-bottom:0}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{min-height:78px;flex:1}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{display:flex}.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{float:left;flex:1;display:flex;flex-direction:column;align-items:stretch}.cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{pointer-events:all!important}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{min-height:100px}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right:initial;border-left:1px solid}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border-bottom:1px solid}.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;float:left}.cal-month-view[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]{flex:1;align-items:flex-end;margin:3px;line-height:10px;display:flex;flex-wrap:wrap}.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-in-month.cal-has-events[_ngcontent-%COMP%]{cursor:pointer}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{opacity:.1;cursor:default}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:1.9em}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{padding:15px}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{position:relative;top:2px}.cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%], .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{opacity:.3}.cal-month-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%]{cursor:move}.cal-month-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]{cursor:pointer}.cal-month-view[_ngcontent-%COMP%]   .cal-event-title[_ngcontent-%COMP%]:hover{text-decoration:underline}.cal-month-view[_ngcontent-%COMP%]{background-color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]:hover{background-color:#fafafa}.cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]:hover, .cal-month-view[_ngcontent-%COMP%]   .cal-cell.cal-has-events.cal-open[_ngcontent-%COMP%]{background-color:#ededed}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]:not(:last-child){border-right-color:initial;border-left-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border-bottom-color:#e1e1e1}.cal-month-view[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{background-color:#b94a48;color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#8b0000}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]{background-color:#e8fde7}.cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-drag-over[_ngcontent-%COMP%]{background-color:#e0e0e0!important}.cal-month-view[_ngcontent-%COMP%]   .cal-open-day-events[_ngcontent-%COMP%]{color:#fff;background-color:#555;box-shadow:inset 0 0 15px #00000080}.cal-week-view[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{box-sizing:border-box}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{display:flex;padding-left:70px;border:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{padding-left:initial;padding-right:70px}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{flex:1;text-align:center;padding:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right:initial;border-left:1px solid}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left:1px solid}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left:initial;border-right:1px solid}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:400;opacity:.5}.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{flex-grow:1;border-left:solid 1px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left:initial;border-right:solid 1px}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{font-size:12px;border:1px solid;direction:ltr}.cal-week-view[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%]{width:70px;height:100%}.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{position:absolute;width:100%;height:2px;z-index:2}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]{border:solid 1px;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]{height:100%;width:100%;display:flex;position:absolute;top:0;z-index:0}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%]{position:relative;height:31px;margin-left:70px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-events-row[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]{display:inline-block;position:absolute}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event-container.resize-active[_ngcontent-%COMP%]{z-index:1;pointer-events:none}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:5px;border-bottom-left-radius:5px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-starts-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:initial;border-bottom-left-radius:initial;border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-right-radius:5px;border-bottom-right-radius:5px}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-ends-within-week[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-right-radius:initial;border-bottom-right-radius:initial;border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-time-label-column[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%]{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{right:0}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{right:initial;left:0}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]{pointer-events:none;z-index:1}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-active[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]{position:relative;border:solid 1px;border-top:0;display:flex}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]{display:flex;flex-grow:1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]{position:absolute;z-index:1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle[_ngcontent-%COMP%]{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-resize-handle.cal-resize-handle-after-end[_ngcontent-%COMP%]{bottom:0}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{position:relative}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]:after{content:"\\a0"}.cal-week-view[_ngcontent-%COMP%]   .cal-event-container[_ngcontent-%COMP%]:not(.cal-draggable){cursor:pointer}.cal-week-view[_ngcontent-%COMP%]   .cal-draggable[_ngcontent-%COMP%]{cursor:move}.cal-week-view[_ngcontent-%COMP%]   mwl-calendar-week-view-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{display:block}.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%]{border-bottom:thin dashed}.cal-week-view[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%]{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-segment.cal-after-hour-start[_ngcontent-%COMP%]   .cal-time[_ngcontent-%COMP%]{display:none}.cal-week-view[_ngcontent-%COMP%]   .cal-starts-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view[_ngcontent-%COMP%]   .cal-ends-within-day[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view[_ngcontent-%COMP%]{background-color:#fff;border-top:solid 1px #e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]{border-color:#e1e1e1;border-top:0}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:not(:last-child){border-right-color:initial;border-left:solid 1px #e1e1e1!important}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:first-child{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]:hover, .cal-week-view[_ngcontent-%COMP%]   .cal-day-headers[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left-color:#e1e1e1}[dir=rtl][_ngcontent-%COMP%]   .cal-week-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view[_ngcontent-%COMP%]   .cal-all-day-events[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-today[_ngcontent-%COMP%]{background-color:#e8fde7}.cal-week-view[_ngcontent-%COMP%]   .cal-header.cal-weekend[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8b0000}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]{border-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-time-events[_ngcontent-%COMP%]   .cal-day-columns[_ngcontent-%COMP%]:not(.cal-resize-active)   .cal-hour-segment[_ngcontent-%COMP%]:hover{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-hour-odd[_ngcontent-%COMP%]{background-color:#fafafa}.cal-week-view[_ngcontent-%COMP%]   .cal-drag-over[_ngcontent-%COMP%]   .cal-hour-segment[_ngcontent-%COMP%]{background-color:#ededed}.cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%], .cal-week-view[_ngcontent-%COMP%]   .cal-hour[_ngcontent-%COMP%]:last-child   [_ngcontent-%COMP%]:not(:last-child)   .cal-hour-segment[_ngcontent-%COMP%]{border-bottom-color:#e1e1e1}.cal-week-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{background-color:#ea4334}.cal-day-view[_ngcontent-%COMP%]   mwl-calendar-week-view-header[_ngcontent-%COMP%]{display:none}.cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{margin-left:70px}[dir=rtl][_ngcontent-%COMP%]   .cal-day-view[_ngcontent-%COMP%]   .cal-events-container[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-day-view[_ngcontent-%COMP%]   .cal-day-column[_ngcontent-%COMP%]{border-left:0}.cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{margin-left:70px;width:calc(100% - 70px)}[dir=rtl][_ngcontent-%COMP%]   .cal-day-view[_ngcontent-%COMP%]   .cal-current-time-marker[_ngcontent-%COMP%]{margin-left:initial;margin-right:70px}.cal-tooltip[_ngcontent-%COMP%]{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]{padding:0 5px;margin-left:-3px}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px}.cal-tooltip-inner[_ngcontent-%COMP%]{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem}.cal-tooltip-arrow[_ngcontent-%COMP%]{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-top-color:#000}.cal-tooltip.cal-tooltip-right[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left[_ngcontent-%COMP%]   .cal-tooltip-arrow[_ngcontent-%COMP%]{border-left-color:#000}.cal-tooltip-inner[_ngcontent-%COMP%]{color:#fff;background-color:#000}@media screen and (max-width: 768px){.hide--mobile[_ngcontent-%COMP%]{display:none!important}}@media screen and (min-width: 768px){.hide--pc[_ngcontent-%COMP%]{display:none!important}}.clearfix[_ngcontent-%COMP%]:before, .clearfix[_ngcontent-%COMP%]:after{content:unset;display:table}.clearfix[_ngcontent-%COMP%]:after{clear:both}.container[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container[_ngcontent-%COMP%]:before, .container[_ngcontent-%COMP%]:after{content:unset;display:table}.container[_ngcontent-%COMP%]:after{clear:both}@media (min-width: 768px){.container[_ngcontent-%COMP%]{width:750px}}@media (min-width: 992px){.container[_ngcontent-%COMP%]{width:970px}.col-md-1[_ngcontent-%COMP%], .col-md-2[_ngcontent-%COMP%], .col-md-3[_ngcontent-%COMP%], .col-md-4[_ngcontent-%COMP%], .col-md-5[_ngcontent-%COMP%], .col-md-6[_ngcontent-%COMP%], .col-md-7[_ngcontent-%COMP%], .col-md-8[_ngcontent-%COMP%], .col-md-9[_ngcontent-%COMP%], .col-md-10[_ngcontent-%COMP%], .col-md-11[_ngcontent-%COMP%], .col-md-12[_ngcontent-%COMP%]{float:left}.col-md-1[_ngcontent-%COMP%]{width:8.3333333333%}.col-md-2[_ngcontent-%COMP%]{width:16.6666666667%}.col-md-3[_ngcontent-%COMP%]{width:25%}.col-md-4[_ngcontent-%COMP%]{width:33.3333333333%}.col-md-5[_ngcontent-%COMP%]{width:41.6666666667%}.col-md-6[_ngcontent-%COMP%]{width:50%}.col-md-7[_ngcontent-%COMP%]{width:58.3333333333%}.col-md-8[_ngcontent-%COMP%]{width:66.6666666667%}.col-md-9[_ngcontent-%COMP%]{width:75%}.col-md-10[_ngcontent-%COMP%]{width:83.3333333333%}.col-md-11[_ngcontent-%COMP%]{width:91.6666666667%}.col-md-12[_ngcontent-%COMP%]{width:100%}.col-md-pull-0[_ngcontent-%COMP%]{right:auto}.col-md-pull-1[_ngcontent-%COMP%]{right:8.3333333333%}.col-md-pull-2[_ngcontent-%COMP%]{right:16.6666666667%}.col-md-pull-3[_ngcontent-%COMP%]{right:25%}.col-md-pull-4[_ngcontent-%COMP%]{right:33.3333333333%}.col-md-pull-5[_ngcontent-%COMP%]{right:41.6666666667%}.col-md-pull-6[_ngcontent-%COMP%]{right:50%}.col-md-pull-7[_ngcontent-%COMP%]{right:58.3333333333%}.col-md-pull-8[_ngcontent-%COMP%]{right:66.6666666667%}.col-md-pull-9[_ngcontent-%COMP%]{right:75%}.col-md-pull-10[_ngcontent-%COMP%]{right:83.3333333333%}.col-md-pull-11[_ngcontent-%COMP%]{right:91.6666666667%}.col-md-pull-12[_ngcontent-%COMP%]{right:100%}.col-md-push-0[_ngcontent-%COMP%]{left:auto}.col-md-push-1[_ngcontent-%COMP%]{left:8.3333333333%}.col-md-push-2[_ngcontent-%COMP%]{left:16.6666666667%}.col-md-push-3[_ngcontent-%COMP%]{left:25%}.col-md-push-4[_ngcontent-%COMP%]{left:33.3333333333%}.col-md-push-5[_ngcontent-%COMP%]{left:41.6666666667%}.col-md-push-6[_ngcontent-%COMP%]{left:50%}.col-md-push-7[_ngcontent-%COMP%]{left:58.3333333333%}.col-md-push-8[_ngcontent-%COMP%]{left:66.6666666667%}.col-md-push-9[_ngcontent-%COMP%]{left:75%}.col-md-push-10[_ngcontent-%COMP%]{left:83.3333333333%}.col-md-push-11[_ngcontent-%COMP%]{left:91.6666666667%}.col-md-push-12[_ngcontent-%COMP%]{left:100%}.col-md-offset-0[_ngcontent-%COMP%]{margin-left:0}.col-md-offset-1[_ngcontent-%COMP%]{margin-left:8.3333333333%}.col-md-offset-2[_ngcontent-%COMP%]{margin-left:16.6666666667%}.col-md-offset-3[_ngcontent-%COMP%]{margin-left:25%}.col-md-offset-4[_ngcontent-%COMP%]{margin-left:33.3333333333%}.col-md-offset-5[_ngcontent-%COMP%]{margin-left:41.6666666667%}.col-md-offset-6[_ngcontent-%COMP%]{margin-left:50%}.col-md-offset-7[_ngcontent-%COMP%]{margin-left:58.3333333333%}.col-md-offset-8[_ngcontent-%COMP%]{margin-left:66.6666666667%}.col-md-offset-9[_ngcontent-%COMP%]{margin-left:75%}.col-md-offset-10[_ngcontent-%COMP%]{margin-left:83.3333333333%}.col-md-offset-11[_ngcontent-%COMP%]{margin-left:91.6666666667%}.col-md-offset-12[_ngcontent-%COMP%]{margin-left:100%}}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], details[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], section[_ngcontent-%COMP%]{display:block}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;min-height:100%;font-family:Roboto,sans-serif}body[_ngcontent-%COMP%]{line-height:1}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{list-style:none}blockquote[_ngcontent-%COMP%], q[_ngcontent-%COMP%]{quotes:none}blockquote[_ngcontent-%COMP%]:before, blockquote[_ngcontent-%COMP%]:after, q[_ngcontent-%COMP%]:before, q[_ngcontent-%COMP%]:after{content:"";content:none}b[_ngcontent-%COMP%]{font-weight:700}table[_ngcontent-%COMP%]{border-collapse:collapse;border-spacing:0}*[_ngcontent-%COMP%]{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-tap-highlight-color:transparent}a[_ngcontent-%COMP%]{outline:none;text-decoration:none}body[_ngcontent-%COMP%]{background:#fff;font-weight:400;font-size:1em;letter-spacing:0;line-height:1.3em;position:relative;overflow-x:hidden}p[_ngcontent-%COMP%]{font-weight:400;font-size:.875em;line-height:1.5em;margin:0 0 20px}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}input.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border:1px solid #ff3d71!important}select.ng-touched.ng-invalid[_ngcontent-%COMP%]:not(.ng-pristine){border:1px solid #ff3d71!important}[hidden][_ngcontent-%COMP%]{display:none!important}.center[_ngcontent-%COMP%]{margin:0;padding:0}.app-loader-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column}.app-loader[_ngcontent-%COMP%], .app-loader[_ngcontent-%COMP%]:after{border-radius:50%;width:10em;height:10em}.app-loader[_ngcontent-%COMP%]{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #bababa;transform:translateZ(0);animation:_ngcontent-%COMP%_load8 1.1s infinite linear}.app-loader.min[_ngcontent-%COMP%]{margin:0 auto;font-size:5px}.app-loader.micro[_ngcontent-%COMP%]{margin:0 auto;font-size:2px}.app-loader.loader-button[_ngcontent-%COMP%]{margin:0 auto;font-size:3px}@keyframes _ngcontent-%COMP%_load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button[_ngcontent-%COMP%]{transition:background-color .3s ease-in-out}.animate-fast[_ngcontent-%COMP%]{transition:all .3s ease-in-out}.mr-10[_ngcontent-%COMP%]{margin-right:10px}.mr-25[_ngcontent-%COMP%]{margin-right:25px}.mb-10[_ngcontent-%COMP%]{margin-bottom:10px}.mb-20[_ngcontent-%COMP%]{margin-bottom:20px}.mb-30[_ngcontent-%COMP%]{margin-bottom:30px}.mb-40[_ngcontent-%COMP%]{margin-bottom:40px}.mt-10[_ngcontent-%COMP%]{margin-top:10px}.mt-20[_ngcontent-%COMP%]{margin-top:20px}.mt-30[_ngcontent-%COMP%]{margin-top:30px}.mt-40[_ngcontent-%COMP%]{margin-top:40px}.mt-80[_ngcontent-%COMP%]{margin-top:80px}.w-100[_ngcontent-%COMP%]{width:100%}.w-50[_ngcontent-%COMP%]{width:50%}.pb-35[_ngcontent-%COMP%]{padding-bottom:35px!important}.mt-auto[_ngcontent-%COMP%]{margin-top:auto}.position-relative[_ngcontent-%COMP%]{position:relative}.min-height-100[_ngcontent-%COMP%]{min-height:100%}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-container.column[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.flex-container.row[_ngcontent-%COMP%], .flex-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-container[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]{flex-wrap:wrap}.flex-container[_ngcontent-%COMP%]   .flex-1[_ngcontent-%COMP%]{flex:1}.flex-container[_ngcontent-%COMP%]   .flex-2[_ngcontent-%COMP%]{flex:2}.flex-container[_ngcontent-%COMP%]   .flex-3[_ngcontent-%COMP%]{flex:3}.flex-container[_ngcontent-%COMP%]   .flex-4[_ngcontent-%COMP%]{flex:4}.flex-container[_ngcontent-%COMP%]   .flex-5[_ngcontent-%COMP%]{flex:5}.flex-container[_ngcontent-%COMP%]   .justify-content-center[_ngcontent-%COMP%]{justify-content:center}.flex-container[_ngcontent-%COMP%]   .justify-content-space-between[_ngcontent-%COMP%]{justify-content:space-between}.flex-container[_ngcontent-%COMP%]   .justify-content-space-around[_ngcontent-%COMP%]{justify-content:space-around}.flex-container[_ngcontent-%COMP%]   .justify-content-end[_ngcontent-%COMP%]{justify-content:end}.flex-container[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{align-items:center}.flex-container[_ngcontent-%COMP%]   .flex-none[_ngcontent-%COMP%]{flex:none}.flex-container[_ngcontent-%COMP%]   .align-self-center[_ngcontent-%COMP%]{align-self:center}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.z-index-1[_ngcontent-%COMP%]{z-index:1}.slick-slider[_ngcontent-%COMP%]{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list[_ngcontent-%COMP%]{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list[_ngcontent-%COMP%]:focus{outline:none}.slick-list.dragging[_ngcontent-%COMP%]{cursor:pointer;cursor:hand}.slick-slider[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%], .slick-slider[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%]{transform:translateZ(0)}.slick-track[_ngcontent-%COMP%]{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track[_ngcontent-%COMP%]:before, .slick-track[_ngcontent-%COMP%]:after{display:table;content:""}.slick-track[_ngcontent-%COMP%]:after{clear:both}.slick-loading[_ngcontent-%COMP%]   .slick-track[_ngcontent-%COMP%]{visibility:hidden}.slick-slide[_ngcontent-%COMP%]{display:none;float:left;height:100%;min-height:1px}[dir=rtl][_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{float:right}.slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.slick-slide.slick-loading[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.slick-slide.dragging[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{pointer-events:none}.slick-initialized[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{display:block}.slick-loading[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{visibility:hidden}.slick-vertical[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden[_ngcontent-%COMP%]{display:none}.slick-arrow.slick-prev[_ngcontent-%COMP%], .slick-arrow.slick-next[_ngcontent-%COMP%]{font-size:0;line-height:0;position:absolute;top:50%;display:block;padding:0;transform:translateY(-50%);cursor:pointer;color:transparent;border:none;outline:0;width:40px;height:40px;background-repeat:no-repeat;background-position:8px 12px;background-color:#fff;border-radius:50%;box-shadow:0 2px 6px #32323266;z-index:1}.slick-arrow.slick-prev[_ngcontent-%COMP%]{left:-15px;background-image:url(/html/site/img/category-page/arrow-active-left.png)}.slick-arrow.slick-prev.slick-disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-left.png)}.slick-arrow.slick-next[_ngcontent-%COMP%]{right:-15px;background-image:url(/html/site/img/category-page/arrow-active-right.png)}.slick-arrow.slick-next.slick-disabled[_ngcontent-%COMP%]{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-right.png)}.slick-slide[_ngcontent-%COMP%]{min-height:375px;margin:0 5px}.slick-slide[_ngcontent-%COMP%]   .course-block[_ngcontent-%COMP%]   .course-block-content[_ngcontent-%COMP%]{padding:20px 10px 90px;text-align:left;background:#f3f6f7}.slick-slide[_ngcontent-%COMP%]   .course-block[_ngcontent-%COMP%]   .course-block-intro[_ngcontent-%COMP%]{background:#f3f6f7}.slick-track[_ngcontent-%COMP%]{min-height:400px}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:36px;height:36px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px}}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Roboto,sans-serif;font-weight:700;font-size:22px;margin-left:6px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:16px!important}}@media screen and (max-width: 398px){#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{line-height:23px}}#monthly-learner-report[_ngcontent-%COMP%]   .title-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]{color:#89959d}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]{max-width:100%}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{position:relative}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-has-events[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#fff!important;opacity:1}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]{position:absolute;top:0;width:32px;margin:0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]{border-radius:6px;width:32px;height:32px;margin:0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event[_ngcontent-%COMP%]:not(.best-day){background-color:#1794c9}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-events[_ngcontent-%COMP%]   .cal-event.best-day[_ngcontent-%COMP%]{background-image:url(/html/site/img/angular-shop/learner-report/best_day_big_icon.png);background-size:contain;background-color:unset}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:32px;min-height:32px}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]{min-height:23px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-top[_ngcontent-%COMP%]   .cal-day-badge[_ngcontent-%COMP%]{display:none!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{border:none!important;margin:10px 0}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell-row[_ngcontent-%COMP%]{margin:0!important}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]{border-bottom:1px solid #F3F6F7!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{color:#89959d;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:14px;padding:0 0 16px}@media screen and (min-width: 320px) and (max-width: 360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{font-size:12px}}@media screen and (min-width: 360px) and (max-width: 650px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-header[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%]{padding:0 0 11px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-cell[_ngcontent-%COMP%], #monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{border:none!important}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{height:224px;margin-top:20px;margin-bottom:45px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-days[_ngcontent-%COMP%]{margin-top:0!important}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-out-month[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#b3bdc0}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{max-width:32px;min-height:32px;height:32px;margin:0 16px}@media screen and (min-width: 320px) and (max-width: 359px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 auto;min-height:30px}}@media screen and (min-width: 1200px) and (max-width: 1360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]{margin:0 12px}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#5d676e;font-size:12px!important;font-weight:700;margin:0}@media screen and (max-width: 360px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{margin:0}}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-weekend[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{color:#5d676e}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]{background-color:transparent}#monthly-learner-report[_ngcontent-%COMP%]   .cal-month-view[_ngcontent-%COMP%]   .cal-day-cell.cal-today[_ngcontent-%COMP%]   .cal-day-number[_ngcontent-%COMP%]{font-size:12px!important}.learning-stats-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]{width:100%;height:130px;background-color:#fff;box-shadow:0 3px 6px #96969640;border-radius:12px}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-spend[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .day-time[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-spend[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .day-time[_ngcontent-%COMP%]{color:#465159;font-size:16px;font-weight:700}.learning-stats-wrap[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-type[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .right-wrap[_ngcontent-%COMP%]   .total-box[_ngcontent-%COMP%]   .time-type[_ngcontent-%COMP%]{text-transform:uppercase;color:#89959d;font-size:12px;font-weight:700}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:12px}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]{margin-left:5px}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.less[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.less[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.less[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.less[_ngcontent-%COMP%]{color:#e32726}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.more[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.more[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison.more[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison.more[_ngcontent-%COMP%]{color:#108445}.learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .learning-stats-wrap[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .days-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .goals-and-achievements[_ngcontent-%COMP%]   .result-comparison[_ngcontent-%COMP%]   .medals-comparison[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.additional-actions[_ngcontent-%COMP%]{width:100%;text-align:center;margin-top:32px;margin-bottom:10px}.additional-actions[_ngcontent-%COMP%]   .reminders-msg[_ngcontent-%COMP%], .additional-actions[_ngcontent-%COMP%]   .keep-learning-msg[_ngcontent-%COMP%]{color:#465159;font-size:14px}.additional-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:196px;width:100%;height:42px;background-color:#1794c9;border-radius:50px;color:#fff;border:unset;margin-left:10px;cursor:pointer;font-weight:500}.additional-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#1783b1}@font-face{font-family:icomoon;src:url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff2?ueshyb) format("woff2"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.ttf?ueshyb) format("truetype"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff?ueshyb) format("woff"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.svg?ueshyb#icomoon) format("svg");font-weight:400;font-style:normal}[class^=icon-][_ngcontent-%COMP%], [class*=" icon-"][_ngcontent-%COMP%]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-filter_up[_ngcontent-%COMP%]:before{content:"\\ea73";color:#fff}.icon-filter_down[_ngcontent-%COMP%]:before{content:"\\ea74";color:#fff}.icon-seo-and-web-1[_ngcontent-%COMP%]:before{content:"\\ea6e"}.icon-discount[_ngcontent-%COMP%]:before{content:"\\ea6f"}.icon-tick-mark[_ngcontent-%COMP%]:before{content:"\\ea70"}.icon-student1[_ngcontent-%COMP%]:before{content:"\\ea71"}.icon-cart1[_ngcontent-%COMP%]:before{content:"\\ea72"}.icon-close-group[_ngcontent-%COMP%]:before{content:"\\ea67"}.icon-user-list[_ngcontent-%COMP%]:before{content:"\\ea68"}.icon-new-group[_ngcontent-%COMP%]:before{content:"\\ea69"}.icon-privileges[_ngcontent-%COMP%]:before{content:"\\ea6a"}.icon-statistics[_ngcontent-%COMP%]:before{content:"\\ea6b"}.icon-group-members[_ngcontent-%COMP%]:before{content:"\\ea6c"}.icon-group-details[_ngcontent-%COMP%]:before{content:"\\ea6d"}.icon-blue-search[_ngcontent-%COMP%]:before{content:"\\ea60";color:#0094c9}.icon-clipboard[_ngcontent-%COMP%]:before{content:"\\ea61";color:#0094c9}.icon-share-link[_ngcontent-%COMP%]:before{content:"\\ea62";color:#0094c9}.icon-speaker[_ngcontent-%COMP%]:before{content:"\\ea63";color:#0094c9}.icon-purple-display-upload[_ngcontent-%COMP%]:before{content:"\\ea59";color:#5900b1}.icon-purple-form[_ngcontent-%COMP%]:before{content:"\\ea5a";color:#5900b1}.icon-purple-display-done[_ngcontent-%COMP%]:before{content:"\\ea5b";color:#5900b1}.icon-purple-web[_ngcontent-%COMP%]:before{content:"\\ea54";color:#5900b1}.icon-purple-group[_ngcontent-%COMP%]:before{content:"\\ea55";color:#5900b1}.icon-purple-rocket[_ngcontent-%COMP%]:before{content:"\\ea56";color:#5900b1}.icon-purple-screen[_ngcontent-%COMP%]:before{content:"\\ea57";color:#5900b1}.icon-purple-wisdom[_ngcontent-%COMP%]:before{content:"\\ea58";color:#5900b1}.icon-pd-dashboard[_ngcontent-%COMP%]:before{content:"\\ea49";color:#aaa}.icon-pd-help[_ngcontent-%COMP%]:before{content:"\\ea4a";color:#aaa}.icon-pd-logout[_ngcontent-%COMP%]:before{content:"\\ea4b";color:#0094c9}.icon-pd-play-button[_ngcontent-%COMP%]:before{content:"\\ea4c";color:#0094c9}.icon-pd-settings[_ngcontent-%COMP%]:before{content:"\\ea4d";color:#aaa}.icon-nb-active-courses[_ngcontent-%COMP%]:before{content:"\\ea3d"}.icon-nb-career[_ngcontent-%COMP%]:before{content:"\\ea3e"}.icon-nb-categories[_ngcontent-%COMP%]:before{content:"\\ea3f"}.icon-nb-dashboard[_ngcontent-%COMP%]:before{content:"\\ea40"}.icon-nb-help[_ngcontent-%COMP%]:before{content:"\\ea41"}.icon-nb-hubs[_ngcontent-%COMP%]:before{content:"\\ea42"}.icon-nb-login[_ngcontent-%COMP%]:before{content:"\\ea43"}.icon-nb-logout[_ngcontent-%COMP%]:before{content:"\\ea44"}.icon-nb-menu[_ngcontent-%COMP%]:before{content:"\\ea45"}.icon-nb-resume[_ngcontent-%COMP%]:before{content:"\\ea46"}.icon-nb-shop[_ngcontent-%COMP%]:before{content:"\\ea47"}.icon-hp-english-hub[_ngcontent-%COMP%]:before{content:"\\ea2c"}.icon-hp-healthcare-hub[_ngcontent-%COMP%]:before{content:"\\ea2d"}.icon-hp-learning-path[_ngcontent-%COMP%]:before{content:"\\ea2e"}.icon-hp-project-man-hub[_ngcontent-%COMP%]:before{content:"\\ea2f"}.icon-accreditation[_ngcontent-%COMP%]:before{content:"\\ea76"}.icon-full-screen-arrows[_ngcontent-%COMP%]:before{content:"\\ea23"}.icon-assessment-dark[_ngcontent-%COMP%]:before{content:"\\ea11"}.icon-careers[_ngcontent-%COMP%]:before{content:"\\ea12"}.icon-certification[_ngcontent-%COMP%]:before{content:"\\ea13"}.icon-comments[_ngcontent-%COMP%]:before{content:"\\ea14"}.icon-download-study-notes[_ngcontent-%COMP%]:before{content:"\\ea15"}.icon-duration-dark[_ngcontent-%COMP%]:before{content:"\\ea16"}.icon-email-study-notes[_ngcontent-%COMP%]:before{content:"\\ea17"}.icon-points[_ngcontent-%COMP%]:before{content:"\\ea18"}.icon-publisher-dark[_ngcontent-%COMP%]:before{content:"\\ea19"}.icon-responsive-dark[_ngcontent-%COMP%]:before{content:"\\ea1a"}.icon-students[_ngcontent-%COMP%]:before{content:"\\ea1b"}.icon-study-notes[_ngcontent-%COMP%]:before{content:"\\ea1c"}.icon-text-version-dark[_ngcontent-%COMP%]:before{content:"\\ea1d"}.icon-category-business[_ngcontent-%COMP%]:before{content:"\\e98c"}.icon-category-health[_ngcontent-%COMP%]:before{content:"\\e98d"}.icon-category-humanities[_ngcontent-%COMP%]:before{content:"\\e98e"}.icon-category-it[_ngcontent-%COMP%]:before{content:"\\e98f"}.icon-category-language[_ngcontent-%COMP%]:before{content:"\\e990"}.icon-category-lifestyle[_ngcontent-%COMP%]:before{content:"\\e991"}.icon-category-marketing[_ngcontent-%COMP%]:before{content:"\\e992"}.icon-category-math[_ngcontent-%COMP%]:before{content:"\\e993"}.icon-category-science[_ngcontent-%COMP%]:before{content:"\\e9e4"}.icon-discount-tag[_ngcontent-%COMP%]:before{content:"\\ea75"}.icon-brain[_ngcontent-%COMP%]:before{content:"\\ea66"}.icon-check-mark-button[_ngcontent-%COMP%]:before{content:"\\ea65";color:#0094c9}.icon-calendar-bell[_ngcontent-%COMP%]:before{content:"\\ea64";color:#fff}.icon-happy-man[_ngcontent-%COMP%]:before{content:"\\ea5f"}.icon-finish[_ngcontent-%COMP%]:before{content:"\\ea5d"}.icon-quiz-man[_ngcontent-%COMP%]:before{content:"\\ea5e"}.icon-minimize[_ngcontent-%COMP%]:before{content:"\\ea5c"}.icon-group[_ngcontent-%COMP%]:before{content:"\\ea53"}.icon-calendar[_ngcontent-%COMP%]:before{content:"\\ea4f"}.icon-idea[_ngcontent-%COMP%]:before{content:"\\ea50"}.icon-students1[_ngcontent-%COMP%]:before{content:"\\ea51"}.icon-study[_ngcontent-%COMP%]:before{content:"\\ea52"}.icon-award[_ngcontent-%COMP%]:before{content:"\\ea4e"}.icon-resume[_ngcontent-%COMP%]:before{content:"\\ea48"}.icon-skills-and-guidance[_ngcontent-%COMP%]:before{content:"\\ea3a"}.icon-specific-jobs[_ngcontent-%COMP%]:before{content:"\\ea3b"}.icon-soldier[_ngcontent-%COMP%]:before{content:"\\ea39"}.icon-envelope-o[_ngcontent-%COMP%]:before{content:"\\f003"}.icon-envelope-open-o[_ngcontent-%COMP%]:before{content:"\\f2b7"}.icon-android-app[_ngcontent-%COMP%]:before{content:"\\f17b"}.icon-whatsapp[_ngcontent-%COMP%]:before{content:"\\ea32"}.icon-home1[_ngcontent-%COMP%]:before{content:"\\f015"}.icon-thick-phone[_ngcontent-%COMP%]:before{content:"\\ea30"}.icon-instagram[_ngcontent-%COMP%]:before{content:"\\f16d"}.icon-quote-right[_ngcontent-%COMP%]:before{content:"\\ea0b"}.icon-thumbs-o-up[_ngcontent-%COMP%]:before{content:"\\f087"}.icon-thumbs-o-down[_ngcontent-%COMP%]:before{content:"\\f088"}.icon-copy[_ngcontent-%COMP%]:before{content:"\\f0c5"}.icon-files-o[_ngcontent-%COMP%]:before{content:"\\f0c5"}.icon-angle-double-right[_ngcontent-%COMP%]:before{content:"\\e9d4"}.icon-paypal[_ngcontent-%COMP%]:before{content:"\\e9d3"}.icon-alison-premium-monthly[_ngcontent-%COMP%]:before{content:"\\ea33"}.icon-chevrons-left[_ngcontent-%COMP%]:before{content:"\\ea07"}.icon-alison-premium[_ngcontent-%COMP%]:before{content:"\\ea09"}.icon-chevrons[_ngcontent-%COMP%]:before{content:"\\ea08"}.icon-en-devices[_ngcontent-%COMP%]:before{content:"\\e9fd"}.icon-en-follow[_ngcontent-%COMP%]:before{content:"\\e9fe"}.icon-en-levels[_ngcontent-%COMP%]:before{content:"\\e9ff"}.icon-en-listen[_ngcontent-%COMP%]:before{content:"\\ea00"}.icon-en-read[_ngcontent-%COMP%]:before{content:"\\ea01"}.icon-en-rich[_ngcontent-%COMP%]:before{content:"\\ea02"}.icon-en-speak[_ngcontent-%COMP%]:before{content:"\\ea03"}.icon-en-speakers[_ngcontent-%COMP%]:before{content:"\\ea04"}.icon-en-tabbed[_ngcontent-%COMP%]:before{content:"\\ea05"}.icon-en-write[_ngcontent-%COMP%]:before{content:"\\ea06"}.icon-mobile-applications[_ngcontent-%COMP%]:before{content:"\\e9fc"}.icon-eng-control[_ngcontent-%COMP%]:before{content:"\\e9f9"}.icon-eng-focus[_ngcontent-%COMP%]:before{content:"\\e9fa"}.icon-eng-opportunity[_ngcontent-%COMP%]:before{content:"\\e9fb"}.icon-learner[_ngcontent-%COMP%]:before{content:"\\e9f7"}.icon-library[_ngcontent-%COMP%]:before{content:"\\e9f8"}.icon-alp-icon[_ngcontent-%COMP%]:before{content:"\\e9f5"}.icon-tshirt2[_ngcontent-%COMP%]:before{content:"\\e9f6"}.icon-alc-icon[_ngcontent-%COMP%]:before{content:"\\e9f4"}.icon-location2[_ngcontent-%COMP%]:before{content:"\\e9ef"}.icon-qualified[_ngcontent-%COMP%]:before{content:"\\e9f0"}.icon-proctored[_ngcontent-%COMP%]:before{content:"\\e9f1"}.icon-community[_ngcontent-%COMP%]:before{content:"\\e9f2"}.icon-support[_ngcontent-%COMP%]:before{content:"\\e9f3"}.icon-caregiving[_ngcontent-%COMP%]:before{content:"\\e9e5"}.icon-customer-service[_ngcontent-%COMP%]:before{content:"\\e9e6"}.icon-data[_ngcontent-%COMP%]:before{content:"\\e9e7"}.icon-financial[_ngcontent-%COMP%]:before{content:"\\e9e8"}.icon-healthcare[_ngcontent-%COMP%]:before{content:"\\e9e9"}.icon-marketing2[_ngcontent-%COMP%]:before{content:"\\e9ea"}.icon-nursing[_ngcontent-%COMP%]:before{content:"\\e9eb"}.icon-operations[_ngcontent-%COMP%]:before{content:"\\e9ec"}.icon-software[_ngcontent-%COMP%]:before{content:"\\e9ed"}.icon-teaching[_ngcontent-%COMP%]:before{content:"\\e9ee"}.icon-track[_ngcontent-%COMP%]:before{content:"\\e976"}.icon-smartphone[_ngcontent-%COMP%]:before{content:"\\e9e3"}.icon-alternative[_ngcontent-%COMP%]:before{content:"\\e9e0"}.icon-corrections[_ngcontent-%COMP%]:before{content:"\\e9e1"}.icon-refugees[_ngcontent-%COMP%]:before{content:"\\e9e2"}.icon-graduate[_ngcontent-%COMP%]:before{content:"\\e9df"}.icon-wechat[_ngcontent-%COMP%]:before{content:"\\f1d7"}.icon-weixin[_ngcontent-%COMP%]:before{content:"\\f1d7"}.icon-google1[_ngcontent-%COMP%]:before{content:"\\ea38"}.icon-move[_ngcontent-%COMP%]:before{content:"\\ea37"}.icon-sad[_ngcontent-%COMP%]:before{content:"\\e9d5"}.icon-stumbleupon[_ngcontent-%COMP%]:before{content:"\\e93d"}.icon-reddit[_ngcontent-%COMP%]:before{content:"\\e9d2"}.icon-twitter2[_ngcontent-%COMP%]:before{content:"\\e944"}.icon-facebook-logo[_ngcontent-%COMP%]:before{content:"\\e9c7"}.icon-google-plus[_ngcontent-%COMP%]:before{content:"\\e9c8"}.icon-google-plus-footer[_ngcontent-%COMP%]:before{content:"\\e9de"}.icon-linkedin-logo2[_ngcontent-%COMP%]:before{content:"\\e9c9"}.icon-outlook-icon[_ngcontent-%COMP%]:before{content:"\\e9ca"}.icon-yahoo-logo[_ngcontent-%COMP%]:before{content:"\\e9cb"}.icon-WDP-icon[_ngcontent-%COMP%]:before{content:"\\ea35"}.icon-new-upload[_ngcontent-%COMP%]:before{content:"\\ea34";color:#0094c9}.icon-lightbulb[_ngcontent-%COMP%]:before{content:"\\ea2a"}.icon-rocket[_ngcontent-%COMP%]:before{content:"\\ea2b"}.icon-hub-awareness[_ngcontent-%COMP%]:before{content:"\\ea24"}.icon-hub-caregiving[_ngcontent-%COMP%]:before{content:"\\ea25"}.icon-hub-fitness[_ngcontent-%COMP%]:before{content:"\\ea26"}.icon-hub-nursing[_ngcontent-%COMP%]:before{content:"\\ea27"}.icon-hub-nutrition[_ngcontent-%COMP%]:before{content:"\\ea28"}.icon-hub-pharmacology[_ngcontent-%COMP%]:before{content:"\\ea29"}.icon-the-hub[_ngcontent-%COMP%]:before{content:"\\ea22"}.icon-modules[_ngcontent-%COMP%]:before{content:"\\ea1f"}.icon-topics[_ngcontent-%COMP%]:before{content:"\\ea21"}.icon-complete[_ngcontent-%COMP%]:before{content:"\\ea1e"}.icon-start-topic[_ngcontent-%COMP%]:before{content:"\\ea20"}.icon-growth[_ngcontent-%COMP%]:before{content:"\\ea0d"}.icon-skills2[_ngcontent-%COMP%]:before{content:"\\ea0e"}.icon-arrow-right2[_ngcontent-%COMP%]:before{content:"\\ea3c"}.icon-tshirt[_ngcontent-%COMP%]:before{content:"\\e9dd"}.icon-ive-been-referred[_ngcontent-%COMP%]:before{content:"\\e9d6"}.icon-ive-referred-my-friends[_ngcontent-%COMP%]:before{content:"\\e9d7"}.icon-how-donations-work[_ngcontent-%COMP%]:before{content:"\\e9d8"}.icon-donations[_ngcontent-%COMP%]:before{content:"\\e9d9"}.icon-refer-a-friend[_ngcontent-%COMP%]:before{content:"\\e9db"}.icon-popular[_ngcontent-%COMP%]:before{content:"\\e94a"}.icon-recent[_ngcontent-%COMP%]:before{content:"\\e95c"}.icon-trending[_ngcontent-%COMP%]:before{content:"\\e977"}.icon-new-filter[_ngcontent-%COMP%]:before{content:"\\e9c6"}.icon-broaden[_ngcontent-%COMP%]:before{content:"\\e9c3"}.icon-master[_ngcontent-%COMP%]:before{content:"\\e9c4"}.icon-progress[_ngcontent-%COMP%]:before{content:"\\e9c5"}.icon-PDF-Filled[_ngcontent-%COMP%]:before{content:"\\e9c2"}.icon-Gift-Filled[_ngcontent-%COMP%]:before{content:"\\e9ba"}.icon-Graduation-Cap-Filled[_ngcontent-%COMP%]:before{content:"\\e9bb"}.icon-Literature-Filled[_ngcontent-%COMP%]:before{content:"\\e9bd"}.icon-User-Groups-Filled[_ngcontent-%COMP%]:before{content:"\\e9be"}.icon-step3[_ngcontent-%COMP%]:before{content:"\\e9ac"}.icon-step32[_ngcontent-%COMP%]:before{content:"\\e9dc"}.icon-step6[_ngcontent-%COMP%]:before{content:"\\e9b0"}.icon-step5[_ngcontent-%COMP%]:before{content:"\\e9b1"}.icon-step4[_ngcontent-%COMP%]:before{content:"\\e9b7"}.icon-step2[_ngcontent-%COMP%]:before{content:"\\e9b8"}.icon-step1[_ngcontent-%COMP%]:before{content:"\\e9b9"}.icon-info[_ngcontent-%COMP%]:before{content:"\\e9ab"}.icon-success[_ngcontent-%COMP%]:before{content:"\\e99b"}.icon-save[_ngcontent-%COMP%]:before{content:"\\e995"}.icon-download[_ngcontent-%COMP%]:before{content:"\\e994"}.icon-fav[_ngcontent-%COMP%]:before{content:"\\e96b"}.icon-fav2[_ngcontent-%COMP%]:before{content:"\\e983"}.icon-rocket-line[_ngcontent-%COMP%]:before{content:"\\e9a5"}.icon-management[_ngcontent-%COMP%]:before{content:"\\e978"}.icon-marketing[_ngcontent-%COMP%]:before{content:"\\e979"}.icon-lifestyle[_ngcontent-%COMP%]:before{content:"\\e97a"}.icon-health[_ngcontent-%COMP%]:before{content:"\\e97b"}.icon-environment[_ngcontent-%COMP%]:before{content:"\\e97c"}.icon-people[_ngcontent-%COMP%]:before{content:"\\e97d"}.icon-science[_ngcontent-%COMP%]:before{content:"\\e97e"}.icon-maths[_ngcontent-%COMP%]:before{content:"\\e97f"}.icon-technology2[_ngcontent-%COMP%]:before{content:"\\e980"}.icon-filter[_ngcontent-%COMP%]:before{content:"\\e981"}.icon-help[_ngcontent-%COMP%]:before{content:"\\e982"}.icon-linkedin-logo[_ngcontent-%COMP%]:before{content:"\\e975"}.icon-phone[_ngcontent-%COMP%]:before{content:"\\e972"}.icon-pin[_ngcontent-%COMP%]:before{content:"\\e973"}.icon-upload2[_ngcontent-%COMP%]:before{content:"\\e95e"}.icon-upload[_ngcontent-%COMP%]:before{content:"\\e943"}.icon-pencil1[_ngcontent-%COMP%]:before{content:"\\e939"}.icon-undo[_ngcontent-%COMP%]:before{content:"\\e965"}.icon-redo[_ngcontent-%COMP%]:before{content:"\\e966"}.icon-stats-bars[_ngcontent-%COMP%]:before{content:"\\e99c"}.icon-rocket2[_ngcontent-%COMP%]:before{content:"\\e9bc"}.icon-meter[_ngcontent-%COMP%]:before{content:"\\e9a6"}.icon-tree[_ngcontent-%COMP%]:before{content:"\\e9cc"}.icon-heart2[_ngcontent-%COMP%]:before{content:"\\e9da"}.icon-cross2[_ngcontent-%COMP%]:before{content:"\\ea0f"}.icon-checkmark[_ngcontent-%COMP%]:before{content:"\\ea10"}.icon-pencil[_ngcontent-%COMP%]:before{content:"\\ea36"}.icon-thumb-up[_ngcontent-%COMP%]:before{content:"\\e946"}.icon-thumb-down[_ngcontent-%COMP%]:before{content:"\\e947"}.icon-thick-chevron-down[_ngcontent-%COMP%]:before{content:"\\e9bf"}.icon-thick-chevron-up[_ngcontent-%COMP%]:before{content:"\\e9c0"}.icon-payment-options[_ngcontent-%COMP%]:before{content:"\\e9a7"}.icon-description[_ngcontent-%COMP%]:before{content:"\\e998"}.icon-diploma-label[_ngcontent-%COMP%]:before{content:"\\e9aa"}.icon-outcome[_ngcontent-%COMP%]:before{content:"\\e9ad"}.icon-assessment[_ngcontent-%COMP%]:before{content:"\\e9ae"}.icon-chapter[_ngcontent-%COMP%]:before{content:"\\e9af"}.icon-course-plan[_ngcontent-%COMP%]:before{content:"\\e9b2"}.icon-module[_ngcontent-%COMP%]:before{content:"\\e9b3"}.icon-play[_ngcontent-%COMP%]:before{content:"\\e9b4"}.icon-ressources[_ngcontent-%COMP%]:before{content:"\\e9b5"}.icon-accreditation1[_ngcontent-%COMP%]:before{content:"\\e99f"}.icon-account[_ngcontent-%COMP%]:before{content:"\\e9a0"}.icon-certification-and-payments[_ngcontent-%COMP%]:before{content:"\\e9a1"}.icon-getting-started[_ngcontent-%COMP%]:before{content:"\\e9a2"}.icon-login-issues[_ngcontent-%COMP%]:before{content:"\\e9a3"}.icon-my-account[_ngcontent-%COMP%]:before{content:"\\e9a4"}.icon-tracking-and-delivery[_ngcontent-%COMP%]:before{content:"\\e9a8"}.icon-upgrade[_ngcontent-%COMP%]:before{content:"\\e9a9"}.icon-warning[_ngcontent-%COMP%]:before{content:"\\e99d"}.icon-danger[_ngcontent-%COMP%]:before{content:"\\e99e"}.icon-crown[_ngcontent-%COMP%]:before{content:"\\e999"}.icon-present[_ngcontent-%COMP%]:before{content:"\\e99a"}.icon-rate[_ngcontent-%COMP%]:before{content:"\\e997"}.icon-search-bar-categories[_ngcontent-%COMP%]:before{content:"\\e996"}.icon-video[_ngcontent-%COMP%]:before{content:"\\e987"}.icon-audio[_ngcontent-%COMP%]:before{content:"\\e988"}.icon-certificate[_ngcontent-%COMP%]:before{content:"\\e989"}.icon-responsive[_ngcontent-%COMP%]:before{content:"\\e98a"}.icon-sort[_ngcontent-%COMP%]:before{content:"\\e986"}.icon-book2[_ngcontent-%COMP%]:before{content:"\\e985"}.icon-learning[_ngcontent-%COMP%]:before{content:"\\e984"}.icon-checked[_ngcontent-%COMP%]:before{content:"\\e974"}.icon-minus[_ngcontent-%COMP%]:before{content:"\\e962"}.icon-plus[_ngcontent-%COMP%]:before{content:"\\e961"}.icon-check[_ngcontent-%COMP%]:before{content:"\\e93f"}.icon-cross3[_ngcontent-%COMP%]:before{content:"\\e948"}.icon-pinterest[_ngcontent-%COMP%]:before{content:"\\ead1"}.icon-flag[_ngcontent-%COMP%]:before{content:"\\e945"}.icon-rotate-right[_ngcontent-%COMP%]:before{content:"\\e968"}.icon-rotate-left[_ngcontent-%COMP%]:before{content:"\\e93e"}.icon-zoom-out[_ngcontent-%COMP%]:before{content:"\\e940"}.icon-zoom-in[_ngcontent-%COMP%]:before{content:"\\e941"}.icon-last-alert[_ngcontent-%COMP%]:before{content:"\\e963"}.icon-megaphone[_ngcontent-%COMP%]:before{content:"\\e964"}.icon-past-month[_ngcontent-%COMP%]:before{content:"\\e967"}.icon-dots[_ngcontent-%COMP%]:before{content:"\\e969"}.icon-new-alert[_ngcontent-%COMP%]:before{content:"\\e96a"}.icon-bell-ring[_ngcontent-%COMP%]:before{content:"\\e971"}.icon-select[_ngcontent-%COMP%]:before{content:"\\e9d1"}.icon-location[_ngcontent-%COMP%]:before{content:"\\e9d0"}.icon-invisble[_ngcontent-%COMP%]:before{content:"\\e9cf"}.icon-visible[_ngcontent-%COMP%]:before{content:"\\e9ce"}.icon-filled-star[_ngcontent-%COMP%]:before{content:"\\e95f"}.icon-previous-icon[_ngcontent-%COMP%]:before{content:"\\e9cd"}.icon-user-log[_ngcontent-%COMP%]:before{content:"\\e903"}.icon-triangle-for-languages[_ngcontent-%COMP%]:before{content:"\\e959"}.icon-search2[_ngcontent-%COMP%]:before{content:"\\e95b"}.icon-alert-off[_ngcontent-%COMP%]:before{content:"\\e95d"}.icon-left-quote[_ngcontent-%COMP%]:before{content:"\\e95a"}.icon-getting-a-certificate[_ngcontent-%COMP%]:before{content:"\\e955"}.icon-payments[_ngcontent-%COMP%]:before{content:"\\e956"}.icon-premium-services[_ngcontent-%COMP%]:before{content:"\\e957"}.icon-technical-help[_ngcontent-%COMP%]:before{content:"\\e958"}.icon-bio[_ngcontent-%COMP%]:before{content:"\\e953"}.icon-camera[_ngcontent-%COMP%]:before{content:"\\e952"}.icon-address[_ngcontent-%COMP%]:before{content:"\\e954"}.icon-profile[_ngcontent-%COMP%]:before{content:"\\e94b"}.icon-education[_ngcontent-%COMP%]:before{content:"\\e94c"}.icon-professional[_ngcontent-%COMP%]:before{content:"\\e94d"}.icon-highlights-icon[_ngcontent-%COMP%]:before{content:"\\e94f"}.icon-left-arrow[_ngcontent-%COMP%]:before{content:"\\e93b"}.icon-right-arrow[_ngcontent-%COMP%]:before{content:"\\e93c"}.icon-technology[_ngcontent-%COMP%]:before{content:"\\e91e"}.icon-table[_ngcontent-%COMP%]:before{content:"\\e951"}.icon-bell[_ngcontent-%COMP%]:before{content:"\\e928"}.icon-send[_ngcontent-%COMP%]:before{content:"\\e915"}.icon-menu[_ngcontent-%COMP%]:before{content:"\\e929"}.icon-error[_ngcontent-%COMP%]:before{content:"\\e927"}.icon-leaf[_ngcontent-%COMP%]:before{content:"\\e926"}.icon-chat[_ngcontent-%COMP%]:before{content:"\\e918"}.icon-path[_ngcontent-%COMP%]:before{content:"\\e920"}.icon-cross[_ngcontent-%COMP%]:before{content:"\\e925"}.icon-suitcase[_ngcontent-%COMP%]:before{content:"\\e950"}.icon-star[_ngcontent-%COMP%]:before{content:"\\e921"}.icon-hat[_ngcontent-%COMP%]:before{content:"\\e90d"}.icon-student[_ngcontent-%COMP%]:before{content:"\\e90c"}.icon-clock[_ngcontent-%COMP%]:before{content:"\\e919"}.icon-controls[_ngcontent-%COMP%]:before{content:"\\e91a"}.icon-course[_ngcontent-%COMP%]:before{content:"\\e91b"}.icon-gears[_ngcontent-%COMP%]:before{content:"\\e91c"}.icon-heart[_ngcontent-%COMP%]:before{content:"\\e91d"}.icon-money[_ngcontent-%COMP%]:before{content:"\\e91f"}.icon-tag[_ngcontent-%COMP%]:before{content:"\\e922"}.icon-time[_ngcontent-%COMP%]:before{content:"\\e923"}.icon-trophy[_ngcontent-%COMP%]:before{content:"\\e924"}.icon-categories[_ngcontent-%COMP%]:before{content:"\\e914"}.icon-faq[_ngcontent-%COMP%]:before{content:"\\e90f"}.icon-globe[_ngcontent-%COMP%]:before{content:"\\e910"}.icon-hand[_ngcontent-%COMP%]:before{content:"\\e911"}.icon-news[_ngcontent-%COMP%]:before{content:"\\e913"}.icon-shop[_ngcontent-%COMP%]:before{content:"\\e917"}.icon-search[_ngcontent-%COMP%]:before{content:"\\e90a"}.icon-envelope[_ngcontent-%COMP%]:before{content:"\\e909"}.icon-lock[_ngcontent-%COMP%]:before{content:"\\e908"}.icon-windows[_ngcontent-%COMP%]:before{content:"\\e905"}.icon-twitter[_ngcontent-%COMP%]:before{content:"\\e94e"}.icon-facebook[_ngcontent-%COMP%]:before{content:"\\e92a"}.icon-google[_ngcontent-%COMP%]:before{content:"\\e901"}.icon-linkedin[_ngcontent-%COMP%]:before{content:"\\e902"}.icon-yahoo[_ngcontent-%COMP%]:before{content:"\\e904"}.icon-mail[_ngcontent-%COMP%]:before{content:"\\e912"}.icon-share[_ngcontent-%COMP%]:before{content:"\\e90b"}.icon-chevron-down[_ngcontent-%COMP%]:before{content:"\\e916"}.icon-suit-case[_ngcontent-%COMP%]:before{content:"\\e92d"}.icon-book[_ngcontent-%COMP%]:before{content:"\\e92e"}.icon-calculator[_ngcontent-%COMP%]:before{content:"\\e92f"}.icon-chemistry[_ngcontent-%COMP%]:before{content:"\\e930"}.icon-computer[_ngcontent-%COMP%]:before{content:"\\e931"}.icon-full-heart[_ngcontent-%COMP%]:before{content:"\\e932"}.icon-messages[_ngcontent-%COMP%]:before{content:"\\e933"}.icon-target[_ngcontent-%COMP%]:before{content:"\\e935"}.icon-world[_ngcontent-%COMP%]:before{content:"\\e936"}.icon-skills[_ngcontent-%COMP%]:before{content:"\\e960"}.icon-user[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-circle-group[_ngcontent-%COMP%]:before{content:"\\e942"}.icon-bag[_ngcontent-%COMP%]:before{content:"\\e96c"}.icon-bell-line[_ngcontent-%COMP%]:before{content:"\\e96d"}.icon-cart[_ngcontent-%COMP%]:before{content:"\\e96e"}.icon-faq-line[_ngcontent-%COMP%]:before{content:"\\e96f"}.icon-home[_ngcontent-%COMP%]:before{content:"\\e970"}.icon-paths[_ngcontent-%COMP%]:before{content:"\\e949"}.icon-geography[_ngcontent-%COMP%]:before{content:"\\e934"}.icon-time-lapse[_ngcontent-%COMP%]:before{content:"\\e900"}.icon-home2[_ngcontent-%COMP%]:before{content:"\\e906"}.icon-courses[_ngcontent-%COMP%]:before{content:"\\e907"}.icon-flashTesting[_ngcontent-%COMP%]:before{content:"\\e92c"}.icon-studyGroups[_ngcontent-%COMP%]:before{content:"\\e92b"}.icon-publishing[_ngcontent-%COMP%]:before{content:"\\e937"}.icon-communityMain[_ngcontent-%COMP%]:before{content:"\\e98b"}.icon-about[_ngcontent-%COMP%]:before{content:"\\e93a"}.icon-alisonShop[_ngcontent-%COMP%]:before{content:"\\e938"}.icon-category[_ngcontent-%COMP%]:before{content:"\\e9b6"}.icon-document-file-zip[_ngcontent-%COMP%]:before{content:"\\ea31"}.icon-checkmark2[_ngcontent-%COMP%]:before{content:"\\ea0c"}.icon-lock2[_ngcontent-%COMP%]:before{content:"\\ea0a"}.icon-printer[_ngcontent-%COMP%]:before{content:"\\e9c1"}.icon-arrow-thin-right[_ngcontent-%COMP%]:before{content:"\\e90e"}.icon-nav-learning[_ngcontent-%COMP%]:before{content:"\\e932"}.icon-build[_ngcontent-%COMP%]:before{content:"\\e931"}.icon-earn[_ngcontent-%COMP%]:before{content:"\\e930"}.icon-megaphone-alt1[_ngcontent-%COMP%]:before{content:"\\e983"}.icon-megaphone-alt[_ngcontent-%COMP%]:before{content:"\\e984";color:#6ea21f}@media (min-width: 768px){.mobile-only[_ngcontent-%COMP%]{display:none}}.desktop-only[_ngcontent-%COMP%]{display:none}@media (min-width: 768px){.desktop-only[_ngcontent-%COMP%]{display:initial}}.premium-le[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;position:relative;padding:34px 16px 40px;min-height:100vh;width:100%}@media (min-width: 768px){.premium-le[_ngcontent-%COMP%]{padding:50px 118px}.premium-le-step-0[_ngcontent-%COMP%]:before{content:url(/html/site/img/angular-shop/study-icon-ads.svg);position:absolute;top:51px;left:0}.premium-le-step-1[_ngcontent-%COMP%]:before{content:url(/html/site/img/angular-shop/study-icon-payment.svg);position:absolute;top:20px;left:-16px}}@media (max-width: 1350px) and (min-width: 1250px){.premium-le[_ngcontent-%COMP%]{padding:50px}}.premium-le__title[_ngcontent-%COMP%]{font: 900 18px/28px Roboto;letter-spacing:.36px}@media (min-width: 768px){.premium-le__title[_ngcontent-%COMP%]{font: 900 28px/32px Roboto;letter-spacing:0px}}.premium-le__subtitle[_ngcontent-%COMP%]{font: 500 14px/32px Roboto;color:#7b8993}.premium-le__button[_ngcontent-%COMP%]{cursor:pointer;color:#fff;font: 500 14px/19px Roboto;background:#0092CA;border-radius:8px;border:none;padding:8px 27px;width:auto}.premium-le__button[_ngcontent-%COMP%]:hover, .premium-le__button[_ngcontent-%COMP%]:focus{background:#1581AF}.premium-le__button[_ngcontent-%COMP%]:disabled{cursor:initial;background:#CFCFCF}']
                }),
                H
            })();
            var ge = n(1105),
                se = n(4510),
                ie = n(4860),
                Pe = n(2669);
            function pe(A, H) {
                1 & A && (t.TgZ(0, "div", 1), t._UZ(1, "img", 2), t.qZA())
            }
            let _e = (() => {
                var A;
                class H {
                    constructor(h, v, F, ce, ue, fe, he, xe, Ce, Te, Ae, Ee, ye, q, Oe) {
                        this.elementRef = v,
                        this.document = F,
                        this.serviceDiscussion = ce,
                        this._courseService = ue,
                        this.shoppingCartService = fe,
                        this.affiliateService = he,
                        this.httpClient = xe,
                        this._componentFactoryResolver = Ce,
                        this._applicationRef = Te,
                        this.injector = Ae,
                        this.router = Ee,
                        this.translate = ye,
                        this.loadingService = q,
                        this.platformId = Oe;
                        const Ie = h.nativeElement.getAttribute("data-course-id"),
                            Se = h.nativeElement.getAttribute("data-sco-id"),
                            Re = h.nativeElement.getAttribute("data-topics"),
                            De = h.nativeElement.getAttribute("data-course-theme"),
                            Ue = h.nativeElement.getAttribute("data-isAssessment"),
                            je = h.nativeElement.getAttribute("data-course-name"),
                            Ne = h.nativeElement.getAttribute("data-course-completed"),
                            Le = h.nativeElement.getAttribute("data-canPassAssessment");
                        ye.setDefaultLang(T.English),
                        ye.use(T.English);
                        const we = h.nativeElement.getAttribute("target_url");
                        this.serviceDiscussion.setCourseId(h.nativeElement.getAttribute("course_id")),
                        this.serviceDiscussion.setCourseName(h.nativeElement.getAttribute("course_name")),
                        this.shoppingCartService.setSaleEnd(h.nativeElement.getAttribute("sale-time-end")),
                        this._courseService.courseId = Number(Ie),
                        this._courseService.courseName = je,
                        this._courseService.scoId = Number(Se),
                        this._courseService.topics = JSON.parse(Re || "[]"),
                        this._courseService.courseTheme = Number(De),
                        this._courseService.completed = !! Ne,
                        this._courseService.isAssessment = Number(Ue),
                        this._courseService.canPassAssessment = !!Number(Le),
                        this.shoppingCartService.setAutoStartAdsTimer(h.nativeElement.getAttribute("auto_start_timer")),
                        we && this.router.navigateByUrl(we, {
                            skipLocationChange: !0
                        }),
                        !(0, l.PM)(this.platformId) && ! S.YH.includes(window ?. location.pathname) && ! S.f5.some(Me => window ?. location.pathname.match(Me)) && xe.get(`${
                            w.N.apiUrl
                        }/environment-variables`).subscribe(Me => {
                            w.N.stripePublishableKey = Me.stripe_publishable_key
                        })
                    }
                    initializeComponent(h, v, F) {
                        const ce = document.querySelector(h);
                        if (ce) {
                            const ue = new s.u0(ce, this._componentFactoryResolver, this._applicationRef, this.injector);
                            F && F(ce);
                            const fe = new s.C5(v);
                            ue.attach(fe)
                        }
                    }
                    injectAngularComponent() {
                        this.initializeComponent(".js-angular-ads-premium-promotion", ae, h => {
                            this.serviceDiscussion.setCourseId(h.getAttribute("data-course-id") ?? ""),
                            this.serviceDiscussion.setCourseName(h.getAttribute("data-course-name") ?? ""),
                            this.shoppingCartService.setAutoStartAdsTimer(h.getAttribute("data-auto-timer") ?? "")
                        }),
                        this.initializeComponent(".js-angular-course-player", ee.n, h => {
                            const v = h.getAttribute("data-course-id"),
                                F = h.getAttribute("data-sco-id"),
                                ce = h.getAttribute("data-course-theme"),
                                ue = h.getAttribute("data-course-name"),
                                fe = h.getAttribute("data-isAssessment"),
                                he = h.getAttribute("data-topics"),
                                xe = h.getAttribute("data-course-completed"),
                                Ce = h.getAttribute("data-canPassAssessment");
                            v && F && ce && fe && Ce && he && (this._courseService.courseId = Number(v), this._courseService.scoId = Number(F), this._courseService.courseTheme = Number(ce), this._courseService.courseName = ue || "", this._courseService.completed =!! Number(xe), this._courseService.isAssessment = Number(fe), this._courseService.topics = JSON.parse(he || "[]"), this._courseService.canPassAssessment =!! Number(Ce))
                        }),
                        this.initializeComponent(".js-angular-ads-premium-promotion-congrats", Y)
                    }
                    ngOnInit() {
                        this.injectAngularComponent(),
                        this.router.events.pipe((0, x.h)(h => h instanceof g.m2), (0, m.b)(h => {
                            h.url.includes("/fr/") ? this.changeLanguage(T.French) : this.router.url.includes("/es/") ? this.changeLanguage(T.Spanish) : this.router.url.includes("/it/") ? this.changeLanguage(T.Italian) : this.router.url.includes("/pt-BR/") ? this.changeLanguage(T.BrazilianPortuguese) : this.changeLanguage(T.English)
                        })).subscribe(() => {}),
                        this.listenHeaderHeightChange(),
                        this.listenGlobalLoading()
                    }
                    changeLanguage(h) {
                        this.translate.use(h)
                    }
                    checkChartTooltip() {
                        setTimeout(() => {
                            const h = this.elementRef.nativeElement.getElementsByClassName("ngx-charts-tooltip-content");
                            this.affiliateService.setChartTooltip(null != h ? h[0] : null)
                        }, 500)
                    }
                    listenGlobalLoading() {
                        this.loading$ = this.loadingService.listen()
                    }
                    listenHeaderHeightChange() {
                        (0, l.PM)(this.platformId) || (0, e.a)([
                            (0, b.R)(this.document, "click").pipe(
                                (0, P.O)(null)
                            ),
                            (0, b.R)(window, "resize").pipe(
                                (0, P.O)(null)
                            )
                        ]).pipe((0, k.b)(100), (0, y.U)(h => {
                            const v = this.document.querySelector("header");
                            return Math.round(v ?. getBoundingClientRect() ?. height || 0)
                        }), (0, I.x)((h, v) => h === v)).subscribe(h => {
                            const v = this.document.documentElement;
                            let ce = this.document.getElementById("angularApp") ?. getBoundingClientRect() ?. left;
                            v.style.setProperty(
                                "--alison-header-height",
                                `${
                                    h || 0
                                }px`
                            ),
                            v.style.setProperty(
                                "--alison-sidebar-width",
                                `${
                                    ce || 0
                                }px`
                            )
                        })
                    }
                }
                return(A = H).\u0275fac = function (h) {
                    return new(h || A)(t.Y36(t.SBq), t.Y36(t.SBq), t.Y36(l.K0), t.Y36(W.U), t.Y36(ge.N), t.Y36(p.F), t.Y36(se.C), t.Y36(ie.eN), t.Y36(t._Vd), t.Y36(t.z2F), t.Y36(t.zs3), t.Y36(g.F0), t.Y36(Q.sK), t.Y36(Pe.b), t.Y36(t.Lbi))
                },
                A.\u0275cmp = t.Xpm({
                    type: A,
                    selectors: [
                        ["app-root"]
                    ],
                    viewQuery: function (h, v) {
                        if (1 & h && t.Gf(M.us, 5), 2 & h) {
                            let F;
                            t.iGM(F = t.CRH()) && (v.tooltipChart = F.first)
                        }
                    },
                    decls: 3,
                    vars: 3,
                    consts: [
                        [
                            "class", "loading", 4, "ngIf"
                        ],
                        [
                            1, "loading"
                        ],
                        [
                            "data-src",
                            "https://cdn01.alison-static.net/public/html/site/img/loader.gif",
                            "alt",
                            "Loading",
                            "src",
                            "https://cdn01.alison-static.net/public/html/site/img/loader.gif",
                            1,
                            "lazyloaded"
                        ]
                    ],
                    template: function (h, v) {
                        1 & h && (t._UZ(0, "router-outlet"), t.YNc(1, pe, 2, 0, "div", 0), t.ALo(2, "async")),
                        2 & h && (t.xp6(1), t.Q6J("ngIf", t.lcZ(2, 1, v.loading$)))
                    },
                    dependencies: [
                        l.O5, g.lC, l.Ov
                    ],
                    styles: ['@charset "UTF-8";.cal-month-view .cal-header{text-align:center;font-weight:bolder}.cal-month-view .cal-header .cal-cell{padding:5px 0;overflow:hidden;text-overflow:ellipsis;display:block;white-space:nowrap}.cal-month-view .cal-days{border:1px solid;border-bottom:0}.cal-month-view .cal-cell-top{min-height:78px;flex:1}.cal-month-view .cal-cell-row{display:flex}.cal-month-view .cal-cell{float:left;flex:1;display:flex;flex-direction:column;align-items:stretch}.cal-month-view .cal-cell .cal-event{pointer-events:all!important}.cal-month-view .cal-day-cell{min-height:100px}.cal-month-view .cal-day-cell:not(:last-child){border-right:1px solid}[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child){border-right:initial;border-left:1px solid}.cal-month-view .cal-days .cal-cell-row{border-bottom:1px solid}.cal-month-view .cal-day-badge{margin-top:18px;margin-left:10px;display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:middle;border-radius:10px;float:left}.cal-month-view .cal-day-number{font-size:1.2em;font-weight:400;opacity:.5;margin-top:15px;margin-right:15px;float:right;margin-bottom:10px}.cal-month-view .cal-events{flex:1;align-items:flex-end;margin:3px;line-height:10px;display:flex;flex-wrap:wrap}.cal-month-view .cal-event{width:10px;height:10px;border-radius:50%;display:inline-block;margin:2px}.cal-month-view .cal-day-cell.cal-in-month.cal-has-events{cursor:pointer}.cal-month-view .cal-day-cell.cal-out-month .cal-day-number{opacity:.1;cursor:default}.cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:1.9em}.cal-month-view .cal-open-day-events{padding:15px}.cal-month-view .cal-open-day-events .cal-event{position:relative;top:2px}.cal-month-view .cal-out-month .cal-day-badge,.cal-month-view .cal-out-month .cal-event{opacity:.3}.cal-month-view .cal-draggable{cursor:move}.cal-month-view .cal-drag-active *{pointer-events:none}.cal-month-view .cal-event-title{cursor:pointer}.cal-month-view .cal-event-title:hover{text-decoration:underline}.cal-month-view{background-color:#fff}.cal-month-view .cal-cell-row:hover{background-color:#fafafa}.cal-month-view .cal-cell-row .cal-cell:hover,.cal-month-view .cal-cell.cal-has-events.cal-open{background-color:#ededed}.cal-month-view .cal-days{border-color:#e1e1e1}.cal-month-view .cal-day-cell:not(:last-child){border-right-color:#e1e1e1}[dir=rtl] .cal-month-view .cal-day-cell:not(:last-child){border-right-color:initial;border-left-color:#e1e1e1}.cal-month-view .cal-days .cal-cell-row{border-bottom-color:#e1e1e1}.cal-month-view .cal-day-badge{background-color:#b94a48;color:#fff}.cal-month-view .cal-event{background-color:#1e90ff;border-color:#d1e8ff;color:#fff}.cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#8b0000}.cal-month-view .cal-day-cell.cal-today{background-color:#e8fde7}.cal-month-view .cal-day-cell.cal-drag-over{background-color:#e0e0e0!important}.cal-month-view .cal-open-day-events{color:#fff;background-color:#555;box-shadow:inset 0 0 15px #00000080}.cal-week-view *{box-sizing:border-box}.cal-week-view .cal-day-headers{display:flex;padding-left:70px;border:1px solid}[dir=rtl] .cal-week-view .cal-day-headers{padding-left:initial;padding-right:70px}.cal-week-view .cal-day-headers .cal-header{flex:1;text-align:center;padding:5px}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:1px solid}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right:initial;border-left:1px solid}.cal-week-view .cal-day-headers .cal-header:first-child{border-left:1px solid}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child{border-left:initial;border-right:1px solid}.cal-week-view .cal-day-headers span{font-weight:400;opacity:.5}.cal-week-view .cal-day-column{flex-grow:1;border-left:solid 1px}[dir=rtl] .cal-week-view .cal-day-column{border-left:initial;border-right:solid 1px}.cal-week-view .cal-event{font-size:12px;border:1px solid;direction:ltr}.cal-week-view .cal-time-label-column{width:70px;height:100%}.cal-week-view .cal-current-time-marker{position:absolute;width:100%;height:2px;z-index:2}.cal-week-view .cal-all-day-events{border:solid 1px;border-top:0;border-bottom-width:3px;padding-top:3px;position:relative}.cal-week-view .cal-all-day-events .cal-day-columns{height:100%;width:100%;display:flex;position:absolute;top:0;z-index:0}.cal-week-view .cal-all-day-events .cal-events-row{position:relative;height:31px;margin-left:70px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-events-row{margin-left:initial;margin-right:70px}.cal-week-view .cal-all-day-events .cal-event-container{display:inline-block;position:absolute}.cal-week-view .cal-all-day-events .cal-event-container.resize-active{z-index:1;pointer-events:none}.cal-week-view .cal-all-day-events .cal-event{padding:0 5px;margin-left:2px;margin-right:2px;height:28px;line-height:28px}.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:5px;border-bottom-left-radius:5px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event{border-top-left-radius:initial;border-bottom-left-radius:initial;border-top-right-radius:5px!important;border-bottom-right-radius:5px!important}.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:5px;border-bottom-right-radius:5px}[dir=rtl] .cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event{border-top-right-radius:initial;border-bottom-right-radius:initial;border-top-left-radius:5px;border-bottom-left-radius:5px}.cal-week-view .cal-all-day-events .cal-time-label-column{display:flex;align-items:center;justify-content:center;font-size:14px}.cal-week-view .cal-all-day-events .cal-resize-handle{width:6px;height:100%;cursor:col-resize;position:absolute;top:0}.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:0}[dir=rtl] .cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end{right:initial;left:0}.cal-week-view .cal-event,.cal-week-view .cal-header{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cal-week-view .cal-drag-active{pointer-events:none;z-index:1}.cal-week-view .cal-drag-active *{pointer-events:none}.cal-week-view .cal-time-events{position:relative;border:solid 1px;border-top:0;display:flex}.cal-week-view .cal-time-events .cal-day-columns{display:flex;flex-grow:1}.cal-week-view .cal-time-events .cal-day-column,.cal-week-view .cal-time-events .cal-events-container{position:relative}.cal-week-view .cal-time-events .cal-event-container{position:absolute;z-index:1}.cal-week-view .cal-time-events .cal-event{width:calc(100% - 2px);height:calc(100% - 2px);margin:1px;padding:0 5px;line-height:25px}.cal-week-view .cal-time-events .cal-resize-handle{width:100%;height:4px;cursor:row-resize;position:absolute}.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end{bottom:0}.cal-week-view .cal-hour-segment{position:relative}.cal-week-view .cal-hour-segment:after{content:"\\a0"}.cal-week-view .cal-event-container:not(.cal-draggable){cursor:pointer}.cal-week-view .cal-draggable{cursor:move}.cal-week-view mwl-calendar-week-view-hour-segment,.cal-week-view .cal-hour-segment{display:block}.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom:thin dashed}.cal-week-view .cal-time{font-weight:700;padding-top:5px;width:70px;text-align:center}.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time{display:none}.cal-week-view .cal-starts-within-day .cal-event{border-top-left-radius:5px;border-top-right-radius:5px}.cal-week-view .cal-ends-within-day .cal-event{border-bottom-left-radius:5px;border-bottom-right-radius:5px}.cal-week-view{background-color:#fff;border-top:solid 1px #e1e1e1}.cal-week-view .cal-day-headers{border-color:#e1e1e1;border-top:0}.cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:not(:last-child){border-right-color:initial;border-left:solid 1px #e1e1e1!important}.cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-headers .cal-header:first-child{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view .cal-day-headers .cal-header:hover,.cal-week-view .cal-day-headers .cal-drag-over{background-color:#ededed}.cal-week-view .cal-day-column{border-left-color:#e1e1e1}[dir=rtl] .cal-week-view .cal-day-column{border-left-color:initial;border-right-color:#e1e1e1}.cal-week-view .cal-event{background-color:#d1e8ff;border-color:#1e90ff;color:#1e90ff}.cal-week-view .cal-all-day-events{border-color:#e1e1e1}.cal-week-view .cal-header.cal-today{background-color:#e8fde7}.cal-week-view .cal-header.cal-weekend span{color:#8b0000}.cal-week-view .cal-time-events{border-color:#e1e1e1}.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover{background-color:#ededed}.cal-week-view .cal-hour-odd{background-color:#fafafa}.cal-week-view .cal-drag-over .cal-hour-segment{background-color:#ededed}.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,.cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment{border-bottom-color:#e1e1e1}.cal-week-view .cal-current-time-marker{background-color:#ea4334}.cal-day-view mwl-calendar-week-view-header{display:none}.cal-day-view .cal-events-container{margin-left:70px}[dir=rtl] .cal-day-view .cal-events-container{margin-left:initial;margin-right:70px}.cal-day-view .cal-day-column{border-left:0}.cal-day-view .cal-current-time-marker{margin-left:70px;width:calc(100% - 70px)}[dir=rtl] .cal-day-view .cal-current-time-marker{margin-left:initial;margin-right:70px}.cal-tooltip{position:absolute;z-index:1070;display:block;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:11px;word-wrap:break-word;opacity:.9}.cal-tooltip.cal-tooltip-top{padding:5px 0;margin-top:-3px}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0}.cal-tooltip.cal-tooltip-right{padding:0 5px;margin-left:3px}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0}.cal-tooltip.cal-tooltip-bottom{padding:5px 0;margin-top:3px}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px}.cal-tooltip.cal-tooltip-left{padding:0 5px;margin-left:-3px}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px}.cal-tooltip-inner{max-width:200px;padding:3px 8px;text-align:center;border-radius:.25rem}.cal-tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow{border-top-color:#000}.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow{border-right-color:#000}.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow{border-bottom-color:#000}.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow{border-left-color:#000}.cal-tooltip-inner{color:#fff;background-color:#000}@media screen and (max-width: 768px){.hide--mobile{display:none!important}}@media screen and (min-width: 768px){.hide--pc{display:none!important}}.clearfix:before,.clearfix:after{content:unset;display:table}.clearfix:after{clear:both}.container{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}.container:before,.container:after{content:unset;display:table}.container:after{clear:both}@media (min-width: 768px){.container{width:750px}}@media (min-width: 992px){.container{width:970px}.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-1{width:8.3333333333%}.col-md-2{width:16.6666666667%}.col-md-3{width:25%}.col-md-4{width:33.3333333333%}.col-md-5{width:41.6666666667%}.col-md-6{width:50%}.col-md-7{width:58.3333333333%}.col-md-8{width:66.6666666667%}.col-md-9{width:75%}.col-md-10{width:83.3333333333%}.col-md-11{width:91.6666666667%}.col-md-12{width:100%}.col-md-pull-0{right:auto}.col-md-pull-1{right:8.3333333333%}.col-md-pull-2{right:16.6666666667%}.col-md-pull-3{right:25%}.col-md-pull-4{right:33.3333333333%}.col-md-pull-5{right:41.6666666667%}.col-md-pull-6{right:50%}.col-md-pull-7{right:58.3333333333%}.col-md-pull-8{right:66.6666666667%}.col-md-pull-9{right:75%}.col-md-pull-10{right:83.3333333333%}.col-md-pull-11{right:91.6666666667%}.col-md-pull-12{right:100%}.col-md-push-0{left:auto}.col-md-push-1{left:8.3333333333%}.col-md-push-2{left:16.6666666667%}.col-md-push-3{left:25%}.col-md-push-4{left:33.3333333333%}.col-md-push-5{left:41.6666666667%}.col-md-push-6{left:50%}.col-md-push-7{left:58.3333333333%}.col-md-push-8{left:66.6666666667%}.col-md-push-9{left:75%}.col-md-push-10{left:83.3333333333%}.col-md-push-11{left:91.6666666667%}.col-md-push-12{left:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.3333333333%}.col-md-offset-2{margin-left:16.6666666667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.3333333333%}.col-md-offset-5{margin-left:41.6666666667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.3333333333%}.col-md-offset-8{margin-left:66.6666666667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.3333333333%}.col-md-offset-11{margin-left:91.6666666667%}.col-md-offset-12{margin-left:100%}}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}html,body{height:100%;min-height:100%;font-family:Roboto,sans-serif}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}b{font-weight:700}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-tap-highlight-color:transparent}a{outline:none;text-decoration:none}body{background:#fff;font-weight:400;font-size:1em;letter-spacing:0;line-height:1.3em;position:relative;overflow-x:hidden}p{font-weight:400;font-size:.875em;line-height:1.5em;margin:0 0 20px}.cursor-pointer{cursor:pointer}input.ng-touched.ng-invalid:not(.ng-pristine){border:1px solid #ff3d71!important}select.ng-touched.ng-invalid:not(.ng-pristine){border:1px solid #ff3d71!important}[hidden]{display:none!important}.center{margin:0;padding:0}.app-loader-wrapper{display:flex;justify-content:space-between;flex-direction:column}.app-loader,.app-loader:after{border-radius:50%;width:10em;height:10em}.app-loader{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(255,255,255,.2);border-right:1.1em solid rgba(255,255,255,.2);border-bottom:1.1em solid rgba(255,255,255,.2);border-left:1.1em solid #bababa;transform:translateZ(0);animation:load8 1.1s infinite linear}.app-loader.min{margin:0 auto;font-size:5px}.app-loader.micro{margin:0 auto;font-size:2px}.app-loader.loader-button{margin:0 auto;font-size:3px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.button{transition:background-color .3s ease-in-out}.animate-fast{transition:all .3s ease-in-out}.mr-10{margin-right:10px}.mr-25{margin-right:25px}.mb-10{margin-bottom:10px}.mb-20{margin-bottom:20px}.mb-30{margin-bottom:30px}.mb-40{margin-bottom:40px}.mt-10{margin-top:10px}.mt-20{margin-top:20px}.mt-30{margin-top:30px}.mt-40{margin-top:40px}.mt-80{margin-top:80px}.w-100{width:100%}.w-50{width:50%}.pb-35{padding-bottom:35px!important}.mt-auto{margin-top:auto}.position-relative{position:relative}.min-height-100{min-height:100%}.flex-container{display:flex;flex-direction:row}.flex-container.column,.flex-container .column{display:flex;flex-direction:column}.flex-container.row,.flex-container .row{display:flex;flex-direction:row}.flex-container .wrap{flex-wrap:wrap}.flex-container .flex-1{flex:1}.flex-container .flex-2{flex:2}.flex-container .flex-3{flex:3}.flex-container .flex-4{flex:4}.flex-container .flex-5{flex:5}.flex-container .justify-content-center{justify-content:center}.flex-container .justify-content-space-between{justify-content:space-between}.flex-container .justify-content-space-around{justify-content:space-around}.flex-container .justify-content-end{justify-content:end}.flex-container .center{align-items:center}.flex-container .flex-none{flex:none}.flex-container .align-self-center{align-self:center}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.z-index-1{z-index:1}.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}.slick-list:focus{outline:none}.slick-list.dragging{cursor:pointer;cursor:hand}.slick-slider .slick-track,.slick-slider .slick-list{transform:translateZ(0)}.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}.slick-track:before,.slick-track:after{display:table;content:""}.slick-track:after{clear:both}.slick-loading .slick-track{visibility:hidden}.slick-slide{display:none;float:left;height:100%;min-height:1px}[dir=rtl] .slick-slide{float:right}.slick-slide img{display:block}.slick-slide.slick-loading img{display:none}.slick-slide.dragging img{pointer-events:none}.slick-initialized .slick-slide{display:block}.slick-loading .slick-slide{visibility:hidden}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}.slick-arrow.slick-hidden{display:none}.slick-arrow.slick-prev,.slick-arrow.slick-next{font-size:0;line-height:0;position:absolute;top:50%;display:block;padding:0;transform:translateY(-50%);cursor:pointer;color:transparent;border:none;outline:0;width:40px;height:40px;background-repeat:no-repeat;background-position:8px 12px;background-color:#fff;border-radius:50%;box-shadow:0 2px 6px #32323266;z-index:1}.slick-arrow.slick-prev{left:-15px;background-image:url(/html/site/img/category-page/arrow-active-left.png)}.slick-arrow.slick-prev.slick-disabled{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-left.png)}.slick-arrow.slick-next{right:-15px;background-image:url(/html/site/img/category-page/arrow-active-right.png)}.slick-arrow.slick-next.slick-disabled{cursor:not-allowed;background-image:url(/html/site/img/category-page/arrow-inactive-right.png)}.slick-slide{min-height:375px;margin:0 5px}.slick-slide .course-block .course-block-content{padding:20px 10px 90px;text-align:left;background:#f3f6f7}.slick-slide .course-block .course-block-intro{background:#f3f6f7}.slick-track{min-height:400px}#monthly-learner-report .title-wrap{width:100%;display:flex;align-items:center}#monthly-learner-report .title-wrap img{width:36px;height:36px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .title-wrap img{width:32px;height:32px}}#monthly-learner-report .title-wrap .title{font-family:Roboto,sans-serif;font-weight:700;font-size:22px;margin-left:6px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .title-wrap .title{font-size:16px!important}}@media screen and (max-width: 398px){#monthly-learner-report .title-wrap .title{line-height:23px}}#monthly-learner-report .title-wrap .title .month{color:#89959d}#monthly-learner-report .cal-month-view{max-width:100%}#monthly-learner-report .cal-month-view .cal-cell{position:relative}#monthly-learner-report .cal-month-view .cal-has-events .cal-day-number{color:#fff!important;opacity:1}#monthly-learner-report .cal-month-view .cal-events{position:absolute;top:0;width:32px;margin:0}#monthly-learner-report .cal-month-view .cal-events .cal-event{border-radius:6px;width:32px;height:32px;margin:0}#monthly-learner-report .cal-month-view .cal-events .cal-event:not(.best-day){background-color:#1794c9}#monthly-learner-report .cal-month-view .cal-events .cal-event.best-day{background-image:url(/html/site/img/angular-shop/learner-report/best_day_big_icon.png);background-size:contain;background-color:unset}#monthly-learner-report .cal-month-view .cal-cell-top{position:absolute;top:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:32px;min-height:32px}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-cell-top{min-height:23px}}#monthly-learner-report .cal-month-view .cal-cell-top .cal-day-badge{display:none!important}#monthly-learner-report .cal-month-view .cal-cell-row{border:none!important;margin:10px 0}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-cell-row{margin:0!important}}#monthly-learner-report .cal-month-view .cal-header{border-bottom:1px solid #F3F6F7!important}#monthly-learner-report .cal-month-view .cal-header .cal-cell{color:#89959d;text-transform:uppercase;font-family:Roboto,sans-serif;font-size:14px;padding:0 0 16px}@media screen and (min-width: 320px) and (max-width: 360px){#monthly-learner-report .cal-month-view .cal-header .cal-cell{font-size:12px}}@media screen and (min-width: 360px) and (max-width: 650px){#monthly-learner-report .cal-month-view .cal-header .cal-cell{padding:0 0 11px}}#monthly-learner-report .cal-month-view .cal-cell,#monthly-learner-report .cal-month-view .cal-days{border:none!important}#monthly-learner-report .cal-month-view .cal-days{height:224px;margin-top:20px;margin-bottom:45px}@media screen and (min-width: 320px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-days{margin-top:0!important}}#monthly-learner-report .cal-month-view .cal-out-month .cal-day-number{color:#b3bdc0}#monthly-learner-report .cal-month-view .cal-day-cell{max-width:32px;min-height:32px;height:32px;margin:0 16px}@media screen and (min-width: 320px) and (max-width: 359px){#monthly-learner-report .cal-month-view .cal-day-cell{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-day-cell{margin:0 auto;min-height:30px}}@media screen and (min-width: 1200px) and (max-width: 1360px){#monthly-learner-report .cal-month-view .cal-day-cell{margin:0 12px}}#monthly-learner-report .cal-month-view .cal-day-cell .cal-day-number{color:#5d676e;font-size:12px!important;font-weight:700;margin:0}@media screen and (max-width: 360px){#monthly-learner-report .cal-month-view .cal-day-cell .cal-day-number{margin:0 auto}}@media screen and (min-width: 360px) and (max-width: 768px){#monthly-learner-report .cal-month-view .cal-day-cell .cal-day-number{margin:0}}#monthly-learner-report .cal-month-view .cal-day-cell.cal-weekend .cal-day-number{color:#5d676e}#monthly-learner-report .cal-month-view .cal-day-cell.cal-today{background-color:transparent}#monthly-learner-report .cal-month-view .cal-day-cell.cal-today .cal-day-number{font-size:12px!important}.learning-stats-wrap p,.goals-and-achievements p{margin:0}.learning-stats-wrap .right-wrap .total-box,.goals-and-achievements .right-wrap .total-box{width:100%;height:130px;background-color:#fff;box-shadow:0 3px 6px #96969640;border-radius:12px}.learning-stats-wrap .right-wrap .total-box .time-spend,.learning-stats-wrap .right-wrap .total-box .day-time,.goals-and-achievements .right-wrap .total-box .time-spend,.goals-and-achievements .right-wrap .total-box .day-time{color:#465159;font-size:16px;font-weight:700}.learning-stats-wrap .right-wrap .total-box .time-type,.goals-and-achievements .right-wrap .total-box .time-type{text-transform:uppercase;color:#89959d;font-size:12px;font-weight:700}.learning-stats-wrap .result-comparison,.goals-and-achievements .result-comparison{display:flex;align-items:center;font-size:12px}.learning-stats-wrap .result-comparison .days-comparison,.learning-stats-wrap .result-comparison .medals-comparison,.goals-and-achievements .result-comparison .days-comparison,.goals-and-achievements .result-comparison .medals-comparison{margin-left:5px}.learning-stats-wrap .result-comparison .days-comparison.less,.learning-stats-wrap .result-comparison .medals-comparison.less,.goals-and-achievements .result-comparison .days-comparison.less,.goals-and-achievements .result-comparison .medals-comparison.less{color:#e32726}.learning-stats-wrap .result-comparison .days-comparison.more,.learning-stats-wrap .result-comparison .medals-comparison.more,.goals-and-achievements .result-comparison .days-comparison.more,.goals-and-achievements .result-comparison .medals-comparison.more{color:#108445}.learning-stats-wrap .result-comparison .days-comparison span,.learning-stats-wrap .result-comparison .medals-comparison span,.goals-and-achievements .result-comparison .days-comparison span,.goals-and-achievements .result-comparison .medals-comparison span{font-weight:700}.additional-actions{width:100%;text-align:center;margin-top:32px;margin-bottom:10px}.additional-actions .reminders-msg,.additional-actions .keep-learning-msg{color:#465159;font-size:14px}.additional-actions button{max-width:196px;width:100%;height:42px;background-color:#1794c9;border-radius:50px;color:#fff;border:unset;margin-left:10px;cursor:pointer;font-weight:500}.additional-actions button:hover{background-color:#1783b1}@font-face{font-family:icomoon;src:url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff2?ueshyb) format("woff2"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.ttf?ueshyb) format("truetype"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.woff?ueshyb) format("woff"),url(https://cdn01.alison-static.net/public/html/site/css/fonts/icomoon.svg?ueshyb#icomoon) format("svg");font-weight:400;font-style:normal}[class^=icon-],[class*=" icon-"]{font-family:icomoon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-filter_up:before{content:"\\ea73";color:#fff}.icon-filter_down:before{content:"\\ea74";color:#fff}.icon-seo-and-web-1:before{content:"\\ea6e"}.icon-discount:before{content:"\\ea6f"}.icon-tick-mark:before{content:"\\ea70"}.icon-student1:before{content:"\\ea71"}.icon-cart1:before{content:"\\ea72"}.icon-close-group:before{content:"\\ea67"}.icon-user-list:before{content:"\\ea68"}.icon-new-group:before{content:"\\ea69"}.icon-privileges:before{content:"\\ea6a"}.icon-statistics:before{content:"\\ea6b"}.icon-group-members:before{content:"\\ea6c"}.icon-group-details:before{content:"\\ea6d"}.icon-blue-search:before{content:"\\ea60";color:#0094c9}.icon-clipboard:before{content:"\\ea61";color:#0094c9}.icon-share-link:before{content:"\\ea62";color:#0094c9}.icon-speaker:before{content:"\\ea63";color:#0094c9}.icon-purple-display-upload:before{content:"\\ea59";color:#5900b1}.icon-purple-form:before{content:"\\ea5a";color:#5900b1}.icon-purple-display-done:before{content:"\\ea5b";color:#5900b1}.icon-purple-web:before{content:"\\ea54";color:#5900b1}.icon-purple-group:before{content:"\\ea55";color:#5900b1}.icon-purple-rocket:before{content:"\\ea56";color:#5900b1}.icon-purple-screen:before{content:"\\ea57";color:#5900b1}.icon-purple-wisdom:before{content:"\\ea58";color:#5900b1}.icon-pd-dashboard:before{content:"\\ea49";color:#aaa}.icon-pd-help:before{content:"\\ea4a";color:#aaa}.icon-pd-logout:before{content:"\\ea4b";color:#0094c9}.icon-pd-play-button:before{content:"\\ea4c";color:#0094c9}.icon-pd-settings:before{content:"\\ea4d";color:#aaa}.icon-nb-active-courses:before{content:"\\ea3d"}.icon-nb-career:before{content:"\\ea3e"}.icon-nb-categories:before{content:"\\ea3f"}.icon-nb-dashboard:before{content:"\\ea40"}.icon-nb-help:before{content:"\\ea41"}.icon-nb-hubs:before{content:"\\ea42"}.icon-nb-login:before{content:"\\ea43"}.icon-nb-logout:before{content:"\\ea44"}.icon-nb-menu:before{content:"\\ea45"}.icon-nb-resume:before{content:"\\ea46"}.icon-nb-shop:before{content:"\\ea47"}.icon-hp-english-hub:before{content:"\\ea2c"}.icon-hp-healthcare-hub:before{content:"\\ea2d"}.icon-hp-learning-path:before{content:"\\ea2e"}.icon-hp-project-man-hub:before{content:"\\ea2f"}.icon-accreditation:before{content:"\\ea76"}.icon-full-screen-arrows:before{content:"\\ea23"}.icon-assessment-dark:before{content:"\\ea11"}.icon-careers:before{content:"\\ea12"}.icon-certification:before{content:"\\ea13"}.icon-comments:before{content:"\\ea14"}.icon-download-study-notes:before{content:"\\ea15"}.icon-duration-dark:before{content:"\\ea16"}.icon-email-study-notes:before{content:"\\ea17"}.icon-points:before{content:"\\ea18"}.icon-publisher-dark:before{content:"\\ea19"}.icon-responsive-dark:before{content:"\\ea1a"}.icon-students:before{content:"\\ea1b"}.icon-study-notes:before{content:"\\ea1c"}.icon-text-version-dark:before{content:"\\ea1d"}.icon-category-business:before{content:"\\e98c"}.icon-category-health:before{content:"\\e98d"}.icon-category-humanities:before{content:"\\e98e"}.icon-category-it:before{content:"\\e98f"}.icon-category-language:before{content:"\\e990"}.icon-category-lifestyle:before{content:"\\e991"}.icon-category-marketing:before{content:"\\e992"}.icon-category-math:before{content:"\\e993"}.icon-category-science:before{content:"\\e9e4"}.icon-discount-tag:before{content:"\\ea75"}.icon-brain:before{content:"\\ea66"}.icon-check-mark-button:before{content:"\\ea65";color:#0094c9}.icon-calendar-bell:before{content:"\\ea64";color:#fff}.icon-happy-man:before{content:"\\ea5f"}.icon-finish:before{content:"\\ea5d"}.icon-quiz-man:before{content:"\\ea5e"}.icon-minimize:before{content:"\\ea5c"}.icon-group:before{content:"\\ea53"}.icon-calendar:before{content:"\\ea4f"}.icon-idea:before{content:"\\ea50"}.icon-students1:before{content:"\\ea51"}.icon-study:before{content:"\\ea52"}.icon-award:before{content:"\\ea4e"}.icon-resume:before{content:"\\ea48"}.icon-skills-and-guidance:before{content:"\\ea3a"}.icon-specific-jobs:before{content:"\\ea3b"}.icon-soldier:before{content:"\\ea39"}.icon-envelope-o:before{content:"\\f003"}.icon-envelope-open-o:before{content:"\\f2b7"}.icon-android-app:before{content:"\\f17b"}.icon-whatsapp:before{content:"\\ea32"}.icon-home1:before{content:"\\f015"}.icon-thick-phone:before{content:"\\ea30"}.icon-instagram:before{content:"\\f16d"}.icon-quote-right:before{content:"\\ea0b"}.icon-thumbs-o-up:before{content:"\\f087"}.icon-thumbs-o-down:before{content:"\\f088"}.icon-copy:before{content:"\\f0c5"}.icon-files-o:before{content:"\\f0c5"}.icon-angle-double-right:before{content:"\\e9d4"}.icon-paypal:before{content:"\\e9d3"}.icon-alison-premium-monthly:before{content:"\\ea33"}.icon-chevrons-left:before{content:"\\ea07"}.icon-alison-premium:before{content:"\\ea09"}.icon-chevrons:before{content:"\\ea08"}.icon-en-devices:before{content:"\\e9fd"}.icon-en-follow:before{content:"\\e9fe"}.icon-en-levels:before{content:"\\e9ff"}.icon-en-listen:before{content:"\\ea00"}.icon-en-read:before{content:"\\ea01"}.icon-en-rich:before{content:"\\ea02"}.icon-en-speak:before{content:"\\ea03"}.icon-en-speakers:before{content:"\\ea04"}.icon-en-tabbed:before{content:"\\ea05"}.icon-en-write:before{content:"\\ea06"}.icon-mobile-applications:before{content:"\\e9fc"}.icon-eng-control:before{content:"\\e9f9"}.icon-eng-focus:before{content:"\\e9fa"}.icon-eng-opportunity:before{content:"\\e9fb"}.icon-learner:before{content:"\\e9f7"}.icon-library:before{content:"\\e9f8"}.icon-alp-icon:before{content:"\\e9f5"}.icon-tshirt2:before{content:"\\e9f6"}.icon-alc-icon:before{content:"\\e9f4"}.icon-location2:before{content:"\\e9ef"}.icon-qualified:before{content:"\\e9f0"}.icon-proctored:before{content:"\\e9f1"}.icon-community:before{content:"\\e9f2"}.icon-support:before{content:"\\e9f3"}.icon-caregiving:before{content:"\\e9e5"}.icon-customer-service:before{content:"\\e9e6"}.icon-data:before{content:"\\e9e7"}.icon-financial:before{content:"\\e9e8"}.icon-healthcare:before{content:"\\e9e9"}.icon-marketing2:before{content:"\\e9ea"}.icon-nursing:before{content:"\\e9eb"}.icon-operations:before{content:"\\e9ec"}.icon-software:before{content:"\\e9ed"}.icon-teaching:before{content:"\\e9ee"}.icon-track:before{content:"\\e976"}.icon-smartphone:before{content:"\\e9e3"}.icon-alternative:before{content:"\\e9e0"}.icon-corrections:before{content:"\\e9e1"}.icon-refugees:before{content:"\\e9e2"}.icon-graduate:before{content:"\\e9df"}.icon-wechat:before{content:"\\f1d7"}.icon-weixin:before{content:"\\f1d7"}.icon-google1:before{content:"\\ea38"}.icon-move:before{content:"\\ea37"}.icon-sad:before{content:"\\e9d5"}.icon-stumbleupon:before{content:"\\e93d"}.icon-reddit:before{content:"\\e9d2"}.icon-twitter2:before{content:"\\e944"}.icon-facebook-logo:before{content:"\\e9c7"}.icon-google-plus:before{content:"\\e9c8"}.icon-google-plus-footer:before{content:"\\e9de"}.icon-linkedin-logo2:before{content:"\\e9c9"}.icon-outlook-icon:before{content:"\\e9ca"}.icon-yahoo-logo:before{content:"\\e9cb"}.icon-WDP-icon:before{content:"\\ea35"}.icon-new-upload:before{content:"\\ea34";color:#0094c9}.icon-lightbulb:before{content:"\\ea2a"}.icon-rocket:before{content:"\\ea2b"}.icon-hub-awareness:before{content:"\\ea24"}.icon-hub-caregiving:before{content:"\\ea25"}.icon-hub-fitness:before{content:"\\ea26"}.icon-hub-nursing:before{content:"\\ea27"}.icon-hub-nutrition:before{content:"\\ea28"}.icon-hub-pharmacology:before{content:"\\ea29"}.icon-the-hub:before{content:"\\ea22"}.icon-modules:before{content:"\\ea1f"}.icon-topics:before{content:"\\ea21"}.icon-complete:before{content:"\\ea1e"}.icon-start-topic:before{content:"\\ea20"}.icon-growth:before{content:"\\ea0d"}.icon-skills2:before{content:"\\ea0e"}.icon-arrow-right2:before{content:"\\ea3c"}.icon-tshirt:before{content:"\\e9dd"}.icon-ive-been-referred:before{content:"\\e9d6"}.icon-ive-referred-my-friends:before{content:"\\e9d7"}.icon-how-donations-work:before{content:"\\e9d8"}.icon-donations:before{content:"\\e9d9"}.icon-refer-a-friend:before{content:"\\e9db"}.icon-popular:before{content:"\\e94a"}.icon-recent:before{content:"\\e95c"}.icon-trending:before{content:"\\e977"}.icon-new-filter:before{content:"\\e9c6"}.icon-broaden:before{content:"\\e9c3"}.icon-master:before{content:"\\e9c4"}.icon-progress:before{content:"\\e9c5"}.icon-PDF-Filled:before{content:"\\e9c2"}.icon-Gift-Filled:before{content:"\\e9ba"}.icon-Graduation-Cap-Filled:before{content:"\\e9bb"}.icon-Literature-Filled:before{content:"\\e9bd"}.icon-User-Groups-Filled:before{content:"\\e9be"}.icon-step3:before{content:"\\e9ac"}.icon-step32:before{content:"\\e9dc"}.icon-step6:before{content:"\\e9b0"}.icon-step5:before{content:"\\e9b1"}.icon-step4:before{content:"\\e9b7"}.icon-step2:before{content:"\\e9b8"}.icon-step1:before{content:"\\e9b9"}.icon-info:before{content:"\\e9ab"}.icon-success:before{content:"\\e99b"}.icon-save:before{content:"\\e995"}.icon-download:before{content:"\\e994"}.icon-fav:before{content:"\\e96b"}.icon-fav2:before{content:"\\e983"}.icon-rocket-line:before{content:"\\e9a5"}.icon-management:before{content:"\\e978"}.icon-marketing:before{content:"\\e979"}.icon-lifestyle:before{content:"\\e97a"}.icon-health:before{content:"\\e97b"}.icon-environment:before{content:"\\e97c"}.icon-people:before{content:"\\e97d"}.icon-science:before{content:"\\e97e"}.icon-maths:before{content:"\\e97f"}.icon-technology2:before{content:"\\e980"}.icon-filter:before{content:"\\e981"}.icon-help:before{content:"\\e982"}.icon-linkedin-logo:before{content:"\\e975"}.icon-phone:before{content:"\\e972"}.icon-pin:before{content:"\\e973"}.icon-upload2:before{content:"\\e95e"}.icon-upload:before{content:"\\e943"}.icon-pencil1:before{content:"\\e939"}.icon-undo:before{content:"\\e965"}.icon-redo:before{content:"\\e966"}.icon-stats-bars:before{content:"\\e99c"}.icon-rocket2:before{content:"\\e9bc"}.icon-meter:before{content:"\\e9a6"}.icon-tree:before{content:"\\e9cc"}.icon-heart2:before{content:"\\e9da"}.icon-cross2:before{content:"\\ea0f"}.icon-checkmark:before{content:"\\ea10"}.icon-pencil:before{content:"\\ea36"}.icon-thumb-up:before{content:"\\e946"}.icon-thumb-down:before{content:"\\e947"}.icon-thick-chevron-down:before{content:"\\e9bf"}.icon-thick-chevron-up:before{content:"\\e9c0"}.icon-payment-options:before{content:"\\e9a7"}.icon-description:before{content:"\\e998"}.icon-diploma-label:before{content:"\\e9aa"}.icon-outcome:before{content:"\\e9ad"}.icon-assessment:before{content:"\\e9ae"}.icon-chapter:before{content:"\\e9af"}.icon-course-plan:before{content:"\\e9b2"}.icon-module:before{content:"\\e9b3"}.icon-play:before{content:"\\e9b4"}.icon-ressources:before{content:"\\e9b5"}.icon-accreditation1:before{content:"\\e99f"}.icon-account:before{content:"\\e9a0"}.icon-certification-and-payments:before{content:"\\e9a1"}.icon-getting-started:before{content:"\\e9a2"}.icon-login-issues:before{content:"\\e9a3"}.icon-my-account:before{content:"\\e9a4"}.icon-tracking-and-delivery:before{content:"\\e9a8"}.icon-upgrade:before{content:"\\e9a9"}.icon-warning:before{content:"\\e99d"}.icon-danger:before{content:"\\e99e"}.icon-crown:before{content:"\\e999"}.icon-present:before{content:"\\e99a"}.icon-rate:before{content:"\\e997"}.icon-search-bar-categories:before{content:"\\e996"}.icon-video:before{content:"\\e987"}.icon-audio:before{content:"\\e988"}.icon-certificate:before{content:"\\e989"}.icon-responsive:before{content:"\\e98a"}.icon-sort:before{content:"\\e986"}.icon-book2:before{content:"\\e985"}.icon-learning:before{content:"\\e984"}.icon-checked:before{content:"\\e974"}.icon-minus:before{content:"\\e962"}.icon-plus:before{content:"\\e961"}.icon-check:before{content:"\\e93f"}.icon-cross3:before{content:"\\e948"}.icon-pinterest:before{content:"\\ead1"}.icon-flag:before{content:"\\e945"}.icon-rotate-right:before{content:"\\e968"}.icon-rotate-left:before{content:"\\e93e"}.icon-zoom-out:before{content:"\\e940"}.icon-zoom-in:before{content:"\\e941"}.icon-last-alert:before{content:"\\e963"}.icon-megaphone:before{content:"\\e964"}.icon-past-month:before{content:"\\e967"}.icon-dots:before{content:"\\e969"}.icon-new-alert:before{content:"\\e96a"}.icon-bell-ring:before{content:"\\e971"}.icon-select:before{content:"\\e9d1"}.icon-location:before{content:"\\e9d0"}.icon-invisble:before{content:"\\e9cf"}.icon-visible:before{content:"\\e9ce"}.icon-filled-star:before{content:"\\e95f"}.icon-previous-icon:before{content:"\\e9cd"}.icon-user-log:before{content:"\\e903"}.icon-triangle-for-languages:before{content:"\\e959"}.icon-search2:before{content:"\\e95b"}.icon-alert-off:before{content:"\\e95d"}.icon-left-quote:before{content:"\\e95a"}.icon-getting-a-certificate:before{content:"\\e955"}.icon-payments:before{content:"\\e956"}.icon-premium-services:before{content:"\\e957"}.icon-technical-help:before{content:"\\e958"}.icon-bio:before{content:"\\e953"}.icon-camera:before{content:"\\e952"}.icon-address:before{content:"\\e954"}.icon-profile:before{content:"\\e94b"}.icon-education:before{content:"\\e94c"}.icon-professional:before{content:"\\e94d"}.icon-highlights-icon:before{content:"\\e94f"}.icon-left-arrow:before{content:"\\e93b"}.icon-right-arrow:before{content:"\\e93c"}.icon-technology:before{content:"\\e91e"}.icon-table:before{content:"\\e951"}.icon-bell:before{content:"\\e928"}.icon-send:before{content:"\\e915"}.icon-menu:before{content:"\\e929"}.icon-error:before{content:"\\e927"}.icon-leaf:before{content:"\\e926"}.icon-chat:before{content:"\\e918"}.icon-path:before{content:"\\e920"}.icon-cross:before{content:"\\e925"}.icon-suitcase:before{content:"\\e950"}.icon-star:before{content:"\\e921"}.icon-hat:before{content:"\\e90d"}.icon-student:before{content:"\\e90c"}.icon-clock:before{content:"\\e919"}.icon-controls:before{content:"\\e91a"}.icon-course:before{content:"\\e91b"}.icon-gears:before{content:"\\e91c"}.icon-heart:before{content:"\\e91d"}.icon-money:before{content:"\\e91f"}.icon-tag:before{content:"\\e922"}.icon-time:before{content:"\\e923"}.icon-trophy:before{content:"\\e924"}.icon-categories:before{content:"\\e914"}.icon-faq:before{content:"\\e90f"}.icon-globe:before{content:"\\e910"}.icon-hand:before{content:"\\e911"}.icon-news:before{content:"\\e913"}.icon-shop:before{content:"\\e917"}.icon-search:before{content:"\\e90a"}.icon-envelope:before{content:"\\e909"}.icon-lock:before{content:"\\e908"}.icon-windows:before{content:"\\e905"}.icon-twitter:before{content:"\\e94e"}.icon-facebook:before{content:"\\e92a"}.icon-google:before{content:"\\e901"}.icon-linkedin:before{content:"\\e902"}.icon-yahoo:before{content:"\\e904"}.icon-mail:before{content:"\\e912"}.icon-share:before{content:"\\e90b"}.icon-chevron-down:before{content:"\\e916"}.icon-suit-case:before{content:"\\e92d"}.icon-book:before{content:"\\e92e"}.icon-calculator:before{content:"\\e92f"}.icon-chemistry:before{content:"\\e930"}.icon-computer:before{content:"\\e931"}.icon-full-heart:before{content:"\\e932"}.icon-messages:before{content:"\\e933"}.icon-target:before{content:"\\e935"}.icon-world:before{content:"\\e936"}.icon-skills:before{content:"\\e960"}.icon-user:before{content:"\\e90e"}.icon-circle-group:before{content:"\\e942"}.icon-bag:before{content:"\\e96c"}.icon-bell-line:before{content:"\\e96d"}.icon-cart:before{content:"\\e96e"}.icon-faq-line:before{content:"\\e96f"}.icon-home:before{content:"\\e970"}.icon-paths:before{content:"\\e949"}.icon-geography:before{content:"\\e934"}.icon-time-lapse:before{content:"\\e900"}.icon-home2:before{content:"\\e906"}.icon-courses:before{content:"\\e907"}.icon-flashTesting:before{content:"\\e92c"}.icon-studyGroups:before{content:"\\e92b"}.icon-publishing:before{content:"\\e937"}.icon-communityMain:before{content:"\\e98b"}.icon-about:before{content:"\\e93a"}.icon-alisonShop:before{content:"\\e938"}.icon-category:before{content:"\\e9b6"}.icon-document-file-zip:before{content:"\\ea31"}.icon-checkmark2:before{content:"\\ea0c"}.icon-lock2:before{content:"\\ea0a"}.icon-printer:before{content:"\\e9c1"}.icon-arrow-thin-right:before{content:"\\e90e"}.icon-nav-learning:before{content:"\\e932"}.icon-build:before{content:"\\e931"}.icon-earn:before{content:"\\e930"}.icon-megaphone-alt1:before{content:"\\e983"}.icon-megaphone-alt:before{content:"\\e984";color:#6ea21f}.loading{position:fixed;z-index:9999999;top:0;left:0;width:100%;height:100%;background:rgba(45,57,66,.4);display:flex;align-items:center;justify-content:center}.loading img{display:block;pointer-events:none;min-width:175px;min-height:175px;max-width:175px;max-height:175px;width:100%;height:100%;box-sizing:border-box;padding:30px;background:#fff;border-radius:50%;box-shadow:0 0 7px #0000004d}\n'],
                    encapsulation: 3
                }),
                H
            })()
        },
        9575: (N, E, n) => {
            "use strict";
            n.d(E, {
                b9: () => O,
                YH: () => oe,
                f5: () => le
            });
            var s = n(1699),
                l = n(6480),
                t = n(4860),
                g = n(7104),
                M = n(6575),
                e = n(6406);
            function b(C, U) {
                return C.map(D => ({path: D, loadChildren: U}))
            }
            const x = [];
            function m() {
                return "/"
            }
            x.push(... b([
                "shop",
                "es/tienda",
                "fr/boutique",
                "it/negozio",
                "pt-BR/loja"
            ], () => Promise.all([n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"), n.e("default-src_app_dashboard_dashboard_service_ts-src_app_flms-b2b_employees_employees_service_t-bd04c7"), n.e("common"), n.e("src_app_shopping-cart_shopping-cart_module_ts")]).then(n.bind(n, 7445)).then(C => C.ShoppingCartModule)), ... b([
                "hubs/english-test",
                "es/hubs/prueba-ingl\xe9s",
                "fr/concentrateurs/test-en-anglais",
                "it/hub/english-test",
                "pt-BR/hubs/english-test"
            ], () => Promise.all([n.e("common"), n.e("src_app_english-test_english-test_module_ts")]).then(n.bind(n, 4065)).then(C => C.EnglishTestModule)), ... b([
                "topic/learn/:id/:course",
                "es/tema/aprender/:id/:course",
                "fr/sujet/apprendre/:id/:course",
                "it/argomento/impara/:id/:course",
                "pt-BR/t\xf3pico/aprender/:id/:course"
            ], () => n.e("src_app_course-discussion_course-discussion_module_ts").then(n.bind(n, 9858)).then(C => C.CourseDiscussionModule)), ... b(["course-player"], () => Promise.resolve().then(n.bind(n, 564)).then(C => C.CourseModule)), ... b([
                "shop/business",
                "es/tienda/negocios",
                "es/tienda/b2b",
                "fr/magasin/entreprise",
                "fr/magasin/b2b",
                "it/negozio/business",
                "it/negozio/b2b",
                "pt-BR/loja/neg\xf3cios",
                "pt-BR/loja/b2b"
            ], () => Promise.all([n.e("common"), n.e("src_app_b2b_b2b_module_ts")]).then(n.bind(n, 9796)).then(C => C.B2bModule)), ... b([
                "shop/complete-bank-transfer",
                "es/tienda/aprobaci\xf3n-transferencia-bancaria",
                "fr/magasin/approbation-transfert-bancaire",
                "it/negozio/approva-bonifico-bancario",
                "pt-BR/loja/aprovar-banco-transfer\xeancia"
            ], () => Promise.all([n.e("common"), n.e("src_app_approve-bank-transfer_approve-bank-transfer_module_ts")]).then(n.bind(n, 8918)).then(C => C.ApproveBankTransferModule)), ... b([
                "dashboard",
                "es/tablero",
                "fr/tableau-de-bord",
                "it/dashboard",
                "pt-BR/painel"
            ], () => Promise.all([
                n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"),
                n.e("default-src_app_dashboard_dashboard_service_ts-src_app_flms-b2b_employees_employees_service_t-bd04c7"),
                n.e("default-src_app_resume_resume_pdf_service_ts"),
                n.e("default-src_app_flms-b2b_shared_components_courses-filters-search-wrap_courses-filters-search-27f018"),
                n.e("default-src_shared_components_shared-components_modal-dashboard_modal-dashboard_component_ts--e7f97c"),
                n.e("common"),
                n.e("src_app_dashboard_dashboard_module_ts")
            ]).then(n.bind(n, 5763)).then(C => C.DashboardModule)), ... b(["learner-report"], () => Promise.all([n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"), n.e("default-src_shared_components_shared-components_modal-dashboard_modal-dashboard_component_ts--e7f97c"), n.e("common"), n.e("src_app_learner-report_learner-report_module_ts")]).then(n.bind(n, 9172)).then(C => C.LearnerReportModule)), ... b([
                "affiliate-dashboard",
                "es/panel-de-afiliados",
                "fr/tableau-de-bord-d-affiliation",
                "it/dashboard-di-affiliazione",
                "pt-BR/painel-de-afiliados"
            ], () => Promise.all([n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"), n.e("common"), n.e("src_app_affiliate-dashboard_affiliate-dashboard_module_ts")]).then(n.bind(n, 8889)).then(C => C.AffiliateDashboardModule)), ... b([
                "cv",
                "fr/cv",
                "es/cv",
                "it/cv",
                "pt-BR/cv",
                "resume_cv",
                "es/resume_cv",
                "fr/resume_cv",
                "it/resume_cv",
                "pt-BR/resume_cv",
                "resume_cv/:id",
                "es/resume_cv/:id",
                "fr/resume_cv/:id",
                "it/resume_cv/:id",
                "pt-BR/resume_cv/:id"
            ], () => Promise.all([n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"), n.e("default-src_app_resume_resume_pdf_service_ts"), n.e("default-node_modules_angular_material-moment-adapter_fesm2022_material-moment-adapter_mjs-nod-7a0f69"), n.e("src_app_resume_resume_module_ts")]).then(n.bind(n, 293)).then(C => C.ResumeModule)), ... b([
                "user/recommendations",
                "es/usuario/recomendaciones",
                "fr/utilisateur/recommandations",
                "it/utente/raccomandazioni",
                "pt-BR/usu\xe1rio/recomenda\xe7\xf5es"
            ], () => Promise.all([n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"), n.e("default-src_app_user-questionnaire_questionnaire_questionnaire_component_ts-src_app_user-ques-2d3608"), n.e("common"), n.e("src_app_for-you_for-you_module_ts")]).then(n.bind(n, 7499)).then(C => C.ForYouModule)), ... b([
                "user/questionnaire",
                "es/usuario/cuestionario",
                "fr/utilisateur/questionnaire",
                "it/utente/questionario",
                "pt-BR/usu\xe1rio/question\xe1rio"
            ], () => Promise.all([n.e("default-src_app_user-questionnaire_questionnaire_questionnaire_component_ts-src_app_user-ques-2d3608"), n.e("src_app_user-questionnaire_user-questionnaire_module_ts-src_shared_components_shared-componen-2ca942")]).then(n.bind(n, 5789)).then(C => C.UserQuestionnaireModule)), ... b(["flms"], () => Promise.all([
                n.e("default-src_app_resume_resume_service_ts-src_shared_components_shared-components_shared-compo-b73aa4"),
                n.e("default-src_app_dashboard_dashboard_service_ts-src_app_flms-b2b_employees_employees_service_t-bd04c7"),
                n.e("default-node_modules_angular_material-moment-adapter_fesm2022_material-moment-adapter_mjs-nod-7a0f69"),
                n.e("default-src_app_flms-b2b_shared_components_courses-filters-search-wrap_courses-filters-search-27f018"),
                n.e("common"),
                n.e("src_app_flms-b2b_flms-b2b_module_ts")
            ]).then(n.bind(n, 5450)).then(C => C.FlmsB2bModule)));
            let P = (() => {
                var C;
                class U {}
                return(C = U).\u0275fac = function (z) {
                    return new(z || C)
                },
                C.\u0275mod = s.oAB({type: C}),
                C.\u0275inj = s.cJS({
                    providers: [
                        {
                            provide: M.mr,
                            useFactory: m
                        }
                    ],
                    imports: [
                        e.Bz.forRoot(x, {
                            initialNavigation: "enabledNonBlocking",
                            paramsInheritanceStrategy: "always",
                            scrollPositionRestoration: "top",
                            enableTracing: !1
                        }),
                        e.Bz
                    ]
                }),
                U
            })();
            var k = n(553),
                y = n(3252),
                I = n(2389),
                w = n(768);
            let T = (() => {
                    var C;
                    class U {
                        constructor() {
                            this.AUTH_HEADER = "Authorization",
                            this.X_HEADER_HOST = "oTbrPD9HRO+jdciawiXuh4vUgB8="
                        }
                        intercept(z, V) {
                            return z.headers.has("Content-Type") || (z = z.clone({
                                headers: z.headers.set("Content-Type", "application/json")
                            })),
                            z.headers.get("Content-Type") === w.$.HEADER_CONTENT_TYPE_IGNORE && (z = z.clone({headers: z.headers.delete("Content-Type")})),
                            z = this.addAdditionalHeaders(z),
                            z = this.addAuthenticationToken(z),
                            V.handle(z).pipe((0, I.K)(ae => (ae && 401 === ae.status && k.N.production && (console.log(ae), window.location.href = k.N.appUrl + "/login"), (0, y._)(ae))))
                        }
                        addAuthenticationToken(z) {
                            if (z.url.match(/auth\/backend-api/)) 
                                return z;
                            
                            const V = window.sessionId;
                            return z.url.match(k.N.dataApiUrl) || z.url.match(k.N.coursewareApi) ? V ? z.clone({
                                headers: z.headers.set(this.AUTH_HEADER, "Cookie " + V),
                                url: z.url
                            }) : z : z.url.match(k.N.apiUrl) && V ? z.url.includes("flms") && !z.url.includes("employee") ? z.clone({
                                headers: z.headers.set(this.AUTH_HEADER, "Bearer " + localStorage.getItem("flms-token"))
                            }) : z.clone({
                                headers: z.headers.set(this.AUTH_HEADER, "Cookie " + V).set("X-CSRF-Token", window.csrf || "")
                            }) : z
                        }
                        addAdditionalHeaders(z) {
                            return(z.url.match(k.N.dataApiUrl) || z.url.match(k.N.apiUrl)) && k.N.production ? z.clone({
                                headers: z.headers.set("x-header-host", this.X_HEADER_HOST),
                                url: z.url
                            }) : z
                        }
                    }
                    return(C = U).\u0275fac = function (z) {
                        return new(z || C)
                    },
                    C.\u0275prov = s.Yz7({token: C, factory: C.\u0275fac}),
                    U
                })(),
                S = (() => {
                    var C;
                    class U {
                        handleError(z) {
                            k.N.local && console.error(z),
                            /Loading chunk [\d]+ failed/.test(z.message) && (console.error(`Unhandled exception: ${
                                z.message
                            }`), window.location.reload())
                        }
                    }
                    return(C = U).\u0275fac = function (z) {
                        return new(z || C)
                    },
                    C.\u0275prov = s.Yz7({token: C, factory: C.\u0275fac}),
                    U
                })();
            var ee = n(2868),
                Q = n(3738);
            let Y = (() => {
                var C;
                class U {
                    constructor() {}
                    intercept(z, V) {
                        const ae = Date.now(),
                            ge = z.method,
                            se = z.url;
                        return console.log(`Running server request ${ae}: ${
                            z.method
                        } ${
                            z.url
                        }`),
                        ("POST" === z.method || "PUT" === z.method) && z.body && (console.log("Request body:"), console.log(z.body)),
                        V.handle(z).pipe((0, Q.b)(ie => {
                            ie instanceof t.Zn && (console.log(`Got server response ${ae} ${ge} ${se}: ${
                                ie.status
                            }`), console.log(ie.body))
                        }, ie => {
                            ie instanceof t.UA && console.log(`Got server error response ${ae} ${ge} ${se}: ${
                                ie.status
                            } ${
                                JSON.stringify(ie.error) ?? ""
                            } ${
                                ie.message ?? ""
                            }`)
                        }))
                    }
                }
                return(C = U).\u0275fac = function (z) {
                    return new(z || C)
                },
                C.\u0275prov = s.Yz7({token: C, factory: C.\u0275fac}),
                U
            })();
            var K = n(5939),
                ne = n(614),
                re = n(8849),
                _ = n(257),
                p = n(6669),
                R = n(1035),
                W = n(6418);
            let J = (() => {
                var C;
                class U {}
                return(C = U).\u0275fac = function (z) {
                    return new(z || C)
                },
                C.\u0275mod = s.oAB({type: C}),
                C.\u0275inj = s.cJS({
                    imports: [M.ez, re.u5, K.aw, e.Bz]
                }),
                U
            })();
            var G = n(564),
                X = n(9435);
            const oe = [
                    "/hubs/english-test",
                    "/hubs/english-test/intro",
                    "/hubs/english-test/test",
                    "/hubs/english-test/results",
                    "/flms",
                    "/flms/login",
                    "/flms/sign-up"
                ],
                le = [/\/cv\/shared\/\d+/, /\/flms\/invitation\/sign-up|activate\/\w+/];
            function u() {
                return() => {
                    const C = k.N.local ? k.N.appUrl : `${
                        window.location.protocol
                    }//${
                        window.location.hostname
                    }`;
                    k.N.appUrl = C,
                    k.N.apiUrl = C + "/api/v1",
                    k.N.authUrl = C + "/auth/backend-api",
                    ("https://alison.com" === k.N.appUrl || "https://admin.alison.com" === k.N.appUrl) && (k.N.dataApiUrl = "https://api.alison.com/v0.1")
                }
            }
            let f = P,
                O = (() => {
                    var C;
                    class U {}
                    return(C = U).\u0275fac = function (z) {
                        return new(z || C)
                    },
                    C.\u0275mod = s.oAB({
                        type: C,
                        bootstrap: [g.y]
                    }),
                    C.\u0275inj = s.cJS({
                        providers: [
                            {
                                provide: s.ip1,
                                useFactory: u,
                                deps: [],
                                multi: !0
                            },
                            {
                                provide: t.TP,
                                useClass: T,
                                multi: !0
                            },
                            {
                                provide: t.TP,
                                useClass: Y,
                                multi: !0
                            },
                            {
                                provide: s.qLn,
                                useClass: S
                            }, {
                                provide: s.EJc,
                                useValue: "EUR"
                            }, {
                                provide: "SocialAuthServiceConfig",
                                useValue: {
                                    autoLogin: !1,
                                    providers: [
                                        {
                                            id: X.tV.PROVIDER_ID,
                                            provider: new X.tV(k.N.googleAccountsClientId)
                                        }, {
                                            id: X.zA.PROVIDER_ID,
                                            provider: new X.zA(k.N.microsoftAccountClientId)
                                        }
                                    ],
                                    onError: D => {
                                        console.error(D)
                                    }
                                }
                            }
                        ],
                        imports: [
                            l.b2.withServerTransition(
                                {appId: "serverApp"}
                            ),
                            ee.PW,
                            [f],
                            R.yj,
                            p.FA,
                            _.XK,
                            J,
                            G.CourseModule,
                            [f],
                            K.aw.forRoot(
                                {
                                    loader: {
                                        provide: K.Zw,
                                        useFactory: L,
                                        deps: [t.eN]
                                    }
                                }
                            ),
                            t.JF,
                            re.UX,
                            W.uw
                        ]
                    }),
                    U
                })();
            function L(C) {
                return new ne.w(C, "/html/site/ng/assets/i18n/", ".json")
            }
        },
        9680: (N, E, n) => {
            "use strict";
            n.d(E, {
                U: () => m
            });
            var s = n(3252),
                l = n(553),
                t = n(3246),
                g = n(2389),
                M = n(3424),
                e = n(1699),
                b = n(4860),
                x = n(7214);
            let m = (() => {
                var P;
                class k {
                    constructor(I, w) {
                        this.httpClient = I,
                        this.notificationService = w
                    }
                    setCourseId(I) {
                        this.id = I
                    }
                    getCourseId() {
                        return this.id
                    }
                    setCourseName(I) {
                        this._name = I
                    }
                    getCourseName() {
                        return this._name
                    }
                    setComment(I) {
                        return this.httpClient.post(`${
                            l.N.apiUrl
                        }/comments`, I).pipe((0, t.j)("data"), (0, g.K)(w => (this.notificationService.notify("Error. Please contact support", M.E.Error), (0, s._)(w))))
                    }
                    setCommentReply(I) {
                        return this.httpClient.post(`${
                            l.N.apiUrl
                        }/comments`, I).pipe((0, t.j)("data"), (0, g.K)(w => (this.notificationService.notify("Error. Please contact support", M.E.Error), (0, s._)(w))))
                    }
                    getComments(I, w, T = 1, S = 5) {
                        return this.httpClient.get("recent" == w || "top" == w ? `${
                            l.N.apiUrl
                        }/comments?course_id=${I}&filter[tab]=${w}&per_page=${S}&page=${T}` : `${
                            l.N.apiUrl
                        }/comments?filter[tab]=${w}&per_page=${S}&page=${T}`)
                    }
                    getCommentsFromJson(I) {
                        return I.map(w => ({
                            id: w.id,
                            type: w.type,
                            course_id: w.course_id,
                            course: {
                                id: w.course.id,
                                name: w.course.name,
                                slug: w.course.slug,
                                headline: w.course.headline,
                                url: w.course.url,
                                created_at: w.course.created_at,
                                updated_at: w.course.updated_at
                            },
                            parent_id: w.parent_id,
                            user_id: w.user_id,
                            user: {
                                id: w.user.id,
                                is_public: w.user.is_public,
                                firstname: w.user.firstname,
                                lastname: w.user.lastname,
                                avatar: w.user.avatar,
                                country_id: w.user.country_id,
                                upvotes_count: w.user.upvotes_count,
                                created_at: w.user.created_at,
                                updated_at: w.user
                            },
                            content: w.content,
                            upvotes: w.upvotes,
                            was_upvoted: w.was_upvoted,
                            created_at: w.created_at,
                            updated_at: w.updated_at,
                            replies_count: w.replies_count,
                            replies: w.replies.map(T => ({
                                id: T.id,
                                type: T.type,
                                course_id: T.course_id,
                                parent_id: T.parent_id,
                                user_id: T.user_id,
                                user: {
                                    id: T.user.id,
                                    is_public: T.user.is_public,
                                    firstname: T.user.firstname,
                                    lastname: T.user.lastname,
                                    avatar: T.user.avatar,
                                    country_id: T.user.country_id,
                                    upvotes_count: T.user.upvotes_count,
                                    created_at: T.user.created_at,
                                    updated_at: T.user.updated_at
                                },
                                content: T.content,
                                upvotes: T.upvotes,
                                was_upvoted: T.was_upvoted,
                                created_at: T.created_at,
                                updated_at: T.updated_at
                            })),
                            unread_replies_count: w.unread_replies_count,
                            course_resume: w.course_resume
                        }))
                    }
                    upvoteComment(I) {
                        return this.httpClient.post(`${
                            l.N.apiUrl
                        }/comments/upvote`, I).pipe((0, t.j)("data"), (0, g.K)(w => (this.notificationService.notify("Error. Please contact support", M.E.Error), (0, s._)(w))))
                    }
                    setFlagToComment(I) {
                        return this.httpClient.post(`${
                            l.N.apiUrl
                        }/comments/flag`, I).pipe((0, t.j)("data"), (0, g.K)(w => (this.notificationService.notify("Error. Please contact support", M.E.Error), (0, s._)(w))))
                    }
                    getCommentsSuggestions(I, w) {
                        return this.httpClient.get(`${
                            l.N.dataApiUrl
                        }/user/suggested-comments?course_id=${I}&content=${w}`)
                    }
                    searchComments(I) {
                        let w = "";
                        return I.forEach((T, S) => {
                            0 == S ? w = "ids[]=" + T : w += "&ids[]=" + T
                        }),
                        this.httpClient.get(`${
                            l.N.apiUrl
                        }/comments/search?${w}`).pipe((0, t.j)("data"), (0, g.K)(T => (this.notificationService.notify("Error. Please contact support", M.E.Error), (0, s._)(T))))
                    }
                    getCommentById(I) {
                        return this.httpClient.get(`${
                            l.N.apiUrl
                        }/comments/${I}`).pipe((0, t.j)("data"), (0, g.K)(w => (this.notificationService.notify("Error. Please contact support", M.E.Error), (0, s._)(w))))
                    }
                }
                return(P = k).\u0275fac = function (I) {
                    return new(I || P)(e.LFG(b.eN), e.LFG(x.g))
                },
                P.\u0275prov = e.Yz7({token: P, factory: P.\u0275fac, providedIn: "root"}),
                k
            })()
        },
        564: (N, E, n) => {
            "use strict";
            n.r(E),
            n.d(E, {
                CourseModule: () => I
            });
            var s = n(3989),
                l = n(6575),
                t = n(8849),
                g = n(7401),
                M = n(6406),
                e = n(5904),
                b = n(5939),
                x = n(6578),
                m = n(9099),
                P = n(4320),
                k = n(1699);
            const y = [{
                    path: "",
                    component: P.n
                }];
            let I = (() => {
                var w;
                class T {}
                return(w = T).\u0275fac = function (ee) {
                    return new(ee || w)
                },
                w.\u0275mod = k.oAB({type: w}),
                w.\u0275inj = k.cJS({
                    imports: [
                        l.ez,
                        t.u5,
                        s._t,
                        t.UX,
                        m.q,
                        g.Is,
                        x.D,
                        e.e,
                        M.Bz.forChild(y),
                        b.aw,
                        M.Bz
                    ]
                }),
                T
            })()
        },
        1197: (N, E, n) => {
            "use strict";
            n.d(E, {
                L: () => g
            });
            var s = n(1699),
                l = n(6575);
            function t(M, e) {
                if (1 & M && (s.TgZ(0, "span", 4), s._uU(1), s.qZA()), 2 & M) {
                    const b = s.oxw();
                    s.xp6(1),
                    s.hij(" ", b.content.caption, " ")
                }
            }
            let g = (() => {
                var M;
                class e {
                    constructor() {
                        this.noCaption = !1
                    }
                    get width() {
                        return this.content.styleOptions ?. width || ""
                    }
                }
                return(M = e).\u0275fac = function (x) {
                    return new(x || M)
                },
                M.\u0275cmp = s.Xpm({
                    type: M,
                    selectors: [
                        ["app-course-player-audio"]
                    ],
                    hostVars: 2,
                    hostBindings: function (x, m) {
                        2 & x && s.Udp("max-width", m.width)
                    },
                    inputs: {
                        content: "content",
                        noCaption: "noCaption"
                    },
                    decls: 5,
                    vars: 2,
                    consts: [
                        [
                            1, "m-course-player__audio"
                        ],
                        [
                            "controls", ""
                        ],
                        [
                            3, "src"
                        ],
                        [
                            "class", "m-course-player__caption", 4, "ngIf"
                        ],
                        [
                            1, "m-course-player__caption"
                        ]
                    ],
                    template: function (x, m) {
                        1 & x && (s.TgZ(0, "div", 0)(1, "audio", 1),
                        s._UZ(2, "source", 2),
                        s._uU(3, " Your browser does not support the audio element. "),
                        s.qZA(),
                        s.YNc(4, t, 2, 1, "span", 3),
                        s.qZA()),
                        2 & x && (s.xp6(2), s.Q6J("src", m.content.content, s.LSH), s.xp6(2), s.Q6J("ngIf", ! m.noCaption && (null == m.content ? null : m.content.caption) && ((null == m.content ? null : m.content.caption) || "").length > 0))
                    },
                    dependencies: [l.O5],
                    styles: [".m-course-player .m-course-player__audio{color:#333;line-height:20px}  .m-course-player .m-course-player__audio audio{display:inline-block;width:100%}"]
                }),
                e
            })()
        },
        4664: (N, E, n) => {
            "use strict";
            n.d(E, {
                M: () => g
            });
            var s = n(1699),
                l = n(6575);
            function t(M, e) {
                if (1 & M && (s.TgZ(0, "div", 3), s._uU(1), s.qZA()), 2 & M) {
                    const b = s.oxw();
                    s.xp6(1),
                    s.hij(" ", b.content.caption, " ")
                }
            }
            let g = (() => {
                var M;
                class e {
                    constructor() {
                        this.imageClick = new s.vpe
                    }
                    get width() {
                        return this.content.styleOptions ?. width || ""
                    }
                    onImageClick(x) {
                        this.imageClick.emit(x)
                    }
                }
                return(M = e).\u0275fac = function (x) {
                    return new(x || M)
                },
                M.\u0275cmp = s.Xpm({
                    type: M,
                    selectors: [
                        ["app-course-player-image"]
                    ],
                    hostVars: 2,
                    hostBindings: function (x, m) {
                        2 & x && s.Udp("max-width", m.width)
                    },
                    inputs: {
                        content: "content"
                    },
                    outputs: {
                        imageClick: "imageClick"
                    },
                    decls: 3,
                    vars: 3,
                    consts: [
                        [
                            1, "m-course-player__image"
                        ],
                        [
                            3, "src", "alt", "click"
                        ],
                        [
                            "class", "m-course-player__caption", 4, "ngIf"
                        ],
                        [
                            1, "m-course-player__caption"
                        ]
                    ],
                    template: function (x, m) {
                        1 & x && (s.TgZ(0, "div", 0)(1, "img", 1),
                        s.NdJ("click", function (k) {
                            return m.onImageClick(k)
                        }),
                        s.qZA(),
                        s.YNc(2, t, 2, 1, "div", 2),
                        s.qZA()),
                        2 & x && (s.xp6(1), s.Q6J("src", m.content.content, s.LSH)("alt", m.content.caption),
                        s.xp6(1),
                        s.Q6J("ngIf", m.content.caption && ((null == m.content ? null : m.content.caption) || "").length > 0))
                    },
                    dependencies: [l.O5],
                    styles: [".m-course-player .m-course-player__image img{display:block;margin:0 auto;max-width:100%}\n"],
                    encapsulation: 2
                }),
                e
            })()
        },
        4320: (N, E, n) => {
            "use strict";
            n.d(E, {
                n: () => Et
            });
            var s = n(8540),
                l = n(2389),
                t = n(3252),
                g = function (o) {
                    return o[o.TOPIC = 0] = "TOPIC",
                    o[o.INTERIM = 1] = "INTERIM",
                    o[o.FINAL = 2] = "FINAL",
                    o
                }(g || {}),
                M = n(553),
                e = n(1699),
                b = n(1105),
                x = n(3041),
                m = n(6575),
                P = n(1197);
            const k = function (o, d, c) {
                return {"m-course-player__head--noBackground": o, "m-course-player__head--centered": d, "m-course-player__head--right": c}
            };
            let y = (() => {
                var o;
                class d {}
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-header"]
                    ],
                    inputs: {
                        content: "content"
                    },
                    decls: 1,
                    vars: 6,
                    consts: [
                        [
                            1,
                            "m-course-player__head",
                            3,
                            "ngClass",
                            "innerHTML"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && e._UZ(0, "div", 0),
                        2 & r && e.Q6J("ngClass", e.kEZ(2, k, "background" === (null == a.content.styleOptions ? null : a.content.styleOptions.backgroundColor), "center" === (null == a.content.styleOptions ? null : a.content.styleOptions.alignment), "right" === (null == a.content.styleOptions ? null : a.content.styleOptions.alignment)))("innerHTML", a.content.content, e.oJD)
                    },
                    dependencies: [m.mk],
                    styles: [".m-course-player .m-course-player__head{padding:10px 10px 5px}.m-course-player .m-course-player__head h1,.m-course-player .m-course-player__head h1 p,.m-course-player .m-course-player__head h2,.m-course-player .m-course-player__head h2 p,.m-course-player .m-course-player__head h3,.m-course-player .m-course-player__head h3 p,.m-course-player .m-course-player__head h4,.m-course-player .m-course-player__head h4 p,.m-course-player .m-course-player__head h5,.m-course-player .m-course-player__head h6,.m-course-player .m-course-player__head h6 p{color:#fff}.m-course-player .m-course-player__head.m-course-player__head--noBackground{color:#465159;background:none}.m-course-player .m-course-player__head.m-course-player__head--noBackground h1,.m-course-player .m-course-player__head.m-course-player__head--noBackground h1 p,.m-course-player .m-course-player__head.m-course-player__head--noBackground h2,.m-course-player .m-course-player__head.m-course-player__head--noBackground h2 p,.m-course-player .m-course-player__head.m-course-player__head--noBackground h3,.m-course-player .m-course-player__head.m-course-player__head--noBackground h3 p,.m-course-player .m-course-player__head.m-course-player__head--noBackground h4,.m-course-player .m-course-player__head.m-course-player__head--noBackground h4 p,.m-course-player .m-course-player__head.m-course-player__head--noBackground h5,.m-course-player .m-course-player__head.m-course-player__head--noBackground h6,.m-course-player .m-course-player__head.m-course-player__head--noBackground h6 p{color:#465159}.m-course-player .m-course-player__head--centered{text-align:center}.m-course-player .m-course-player__head--right{text-align:right}.m-course-player .m-course-player__head h1,.m-course-player .m-course-player__head h2,.m-course-player .m-course-player__head h3,.m-course-player .m-course-player__head h4,.m-course-player .m-course-player__head h5,.m-course-player .m-course-player__head h6{margin:0}.m-course-player .m-course-player__head h1{font:400 40px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:45px}.m-course-player .m-course-player__head h2{font:400 37px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:40px}.m-course-player .m-course-player__head h3{font:400 30px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:35px}.m-course-player .m-course-player__head h4{font:400 24px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:27px}.m-course-player .m-course-player__head h5{font:600 18px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:21px}.m-course-player .m-course-player__head h6{font:600 16px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:20px}\n"],
                    encapsulation: 2
                }),
                d
            })();
            var I = n(4664);
            const w = function (o) {
                    return {colored: o}
                },
                T = function (o) {
                    return {width: o}
                };
            function S(o, d) {
                if (1 & o && e._UZ(0, "td", 7), 2 & o) {
                    const c = d.$implicit;
                    e.Q6J("ngClass", e.VKq(3, w, c.invertedColor))("innerHtml", c.content, e.oJD)("ngStyle", e.VKq(5, T, c.width || "calc(50% - 2px)"))
                }
            }
            function ee(o, d) {
                if (1 & o && (e.TgZ(0, "tr", 5), e.YNc(1, S, 1, 7, "td", 6), e.qZA()), 2 & o) {
                    const c = d.$implicit;
                    e.xp6(1),
                    e.Q6J("ngForOf", c)
                }
            }
            let Q = (() => {
                var o;
                class d {
                    get width() {
                        return this.content.styleOptions ?. width || ""
                    }
                    ngOnInit() {
                        this.languageContents = this.content.content
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-language"]
                    ],
                    hostVars: 2,
                    hostBindings: function (r, a) {
                        2 & r && e.Udp("max-width", a.width)
                    },
                    inputs: {
                        content: "content"
                    },
                    decls: 7,
                    vars: 2,
                    consts: [
                        [
                            1, "m-course-player__language"
                        ],
                        [
                            "controls", "", "controlslist", "nodownload"
                        ],
                        [
                            3, "src"
                        ],
                        [
                            1, "m-course-player__table"
                        ],
                        [
                            "class",
                            "m-course-player__table__item",
                            4,
                            "ngFor",
                            "ngForOf"
                        ],
                        [
                            1, "m-course-player__table__item"
                        ],
                        [
                            3,
                            "ngClass",
                            "innerHtml",
                            "ngStyle",
                            4,
                            "ngFor",
                            "ngForOf"
                        ],
                        [
                            3, "ngClass", "innerHtml", "ngStyle"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.TgZ(0, "div", 0)(1, "audio", 1),
                        e._UZ(2, "source", 2),
                        e._uU(3, " Your browser does not support the audio element. "),
                        e.qZA(),
                        e.TgZ(4, "table", 3)(5, "tbody"),
                        e.YNc(6, ee, 2, 1, "tr", 4),
                        e.qZA()()()),
                        2 & r && (e.xp6(2), e.Q6J("src", a.languageContents.path || a.languageContents.filePath, e.LSH), e.xp6(4), e.Q6J("ngForOf", a.languageContents.table))
                    },
                    dependencies: [
                        m.mk, m.sg, m.PC
                    ],
                    styles: [
                        ".m-course-player .m-course-player__language{position:relative;overflow:hidden}.m-course-player .m-course-player__language audio{position:absolute;top:calc(50% - 23px);float:left;width:110px;height:50px}.m-course-player .m-course-player__language .m-course-player__table{float:right;width:calc(100% - 110px)}\n", "app-course-player-table{display:block;overflow:hidden}.m-course-player .m-course-player__table{color:#3f4a52;border-collapse:collapse;border-spacing:5px;padding:0;font:400 14px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:22px;margin:0;max-width:100%;min-height:24px;resize:none;width:100%}.m-course-player .m-course-player__table tr{display:table-row;width:auto;clear:both}.m-course-player .m-course-player__table td{float:left;display:table-column;vertical-align:baseline;background-color:#dce0e3;color:#465159;padding:13px;margin:0;text-overflow:ellipsis;margin-bottom:-99999px!important;padding-bottom:99999px!important;border:2px solid #fff}\n"
                    ],
                    encapsulation: 2
                }),
                d
            })();
            var Y = n(7401);
            let K = (() => {
                    var o;
                    class d {
                        constructor(r, a) {
                            this.dialogRef = r,
                            this.data = a
                        }
                        onClose() {
                            this.dialogRef.close()
                        }
                    }
                    return(o = d).\u0275fac = function (r) {
                        return new(r || o)(e.Y36(Y.so), e.Y36(Y.WI))
                    },
                    o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [
                            ["app-course-player-popup-dialog"]
                        ],
                        standalone: !0,
                        features: [e.jDz],
                        decls: 11,
                        vars: 4,
                        consts: [
                            [
                                1, "m-course-player-modal"
                            ],
                            [
                                1, "m-course-player-modal__header"
                            ],
                            [
                                1, "m-course-player-modal__header__title"
                            ],
                            [
                                1, "m-course-player-modal__header__close", 3, "click"
                            ],
                            [
                                1, "m-course-player-modal__body"
                            ],
                            [
                                1, "m-course-player-modal__body__image"
                            ],
                            [
                                3, "src", "alt"
                            ],
                            [
                                1, "m-course-player-modal__body__text"
                            ]
                        ],
                        template: function (r, a) {
                            1 & r && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h3", 2),
                            e._uU(3),
                            e.qZA(),
                            e.TgZ(4, "small", 3),
                            e.NdJ("click", function () {
                                return a.onClose()
                            }),
                            e._uU(5, "\xd7"),
                            e.qZA()(),
                            e.TgZ(6, "div", 4)(7, "div", 5),
                            e._UZ(8, "img", 6),
                            e.qZA(),
                            e.TgZ(9, "p", 7),
                            e._uU(10),
                            e.qZA()()()),
                            2 & r && (e.xp6(3), e.Oqu(a.data.popupTitle), e.xp6(5), e.MGl("alt", "", a.data.popupText, " summary"), e.Q6J("src", a.data.path, e.LSH), e.xp6(2), e.Oqu(a.data.popupText))
                        },
                        dependencies: [Y.Is],
                        styles: [".m-course-player-modal-container{padding:0 15px;max-width:745px!important;width:100%}@media (min-width: 768px){.m-course-player-modal-container{padding:0;width:60%}}.m-course-player-modal__header{display:flex;justify-content:space-between;align-items:center;padding:10px}.m-course-player-modal__header__title{font:400 37px Roboto,helvetica neue,Helvetica,Arial,sans-serif;margin:0;line-height:40px}.m-course-player-modal__header__close{cursor:pointer;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#fff;font-size:40px;font-weight:700;text-shadow:0 1px 0 #fff;opacity:.2}.m-course-player-modal__header__close:hover{color:#000;opacity:.5}.m-course-player-modal__body{display:flex;flex-direction:column;padding:15px}@media (min-width: 768px){.m-course-player-modal__body{flex-direction:row;padding:10px 16px;min-height:400px}}.m-course-player-modal__body__image{margin-bottom:10px}@media (min-width: 768px){.m-course-player-modal__body__image{margin:10px 10px 0 0;width:40%}}.m-course-player-modal__body__image img{display:block;height:auto;max-width:100%}\n"],
                        encapsulation: 2
                    }),
                    d
                })(),
                ne = (() => {
                    var o;
                    class d {
                        constructor(r, a) {
                            this.dialog = r,
                            this._courseService = a
                        }
                        ngOnInit() {
                            this.popupContent = this.content.content
                        }
                        openDialog() {
                            this.dialog.open(K, {
                                data: {
                                    ...this.popupContent
                                },
                                panelClass: ["m-course-player-modal-container", `m-course-player--${
                                        this._courseService.courseTheme
                                    }`]
                            }).afterClosed().subscribe(() => {
                                console.log("The dialog was closed")
                            })
                        }
                        get width() {
                            return this.content.styleOptions ?. width || ""
                        }
                    }
                    return(o = d).\u0275fac = function (r) {
                        return new(r || o)(e.Y36(Y.uw), e.Y36(b.N))
                    },
                    o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [
                            ["app-course-player-popup"]
                        ],
                        hostVars: 2,
                        hostBindings: function (r, a) {
                            2 & r && e.Udp("max-width", a.width)
                        },
                        inputs: {
                            content: "content"
                        },
                        decls: 5,
                        vars: 2,
                        consts: [
                            [
                                1, "m-course-player__popup"
                            ],
                            [
                                1, "m-course-player__popup__text"
                            ],
                            [
                                1, "m-course-player__popup__button", 3, "click"
                            ],
                            [
                                "src",
                                "https://cdn01.alison-static.net/publishing/dist/img/popup.png",
                                1,
                                "m-course-player__popup__button__image",
                                3,
                                "alt"
                            ]
                        ],
                        template: function (r, a) {
                            1 & r && (e.TgZ(0, "div", 0)(1, "p", 1),
                            e._uU(2),
                            e.qZA(),
                            e.TgZ(3, "button", 2),
                            e.NdJ("click", function () {
                                return a.openDialog()
                            }),
                            e._UZ(4, "img", 3),
                            e.qZA()()),
                            2 & r && (e.xp6(2), e.Oqu(a.popupContent.buttonText), e.xp6(2), e.MGl("alt", "open ", a.popupContent.buttonText, " modal"))
                        },
                        styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale3d(0,0,0)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0!important;box-sizing:content-box!important;height:0!important}@keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}.mat-focus-indicator{position:relative}.mat-focus-indicator:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border:var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus:before{content:\"\"}.cdk-high-contrast-active{--mat-focus-indicator-display: block}.mat-mdc-focus-indicator{position:relative}.mat-mdc-focus-indicator:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-mdc-focus-indicator-display, none);border:var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);border-radius:var(--mat-mdc-focus-indicator-border-radius, 4px)}.mat-mdc-focus-indicator:focus:before{content:\"\"}.cdk-high-contrast-active{--mat-mdc-focus-indicator-display: block}.mat-ripple-element{background-color:#0000001a}html{--mat-option-selected-state-label-text-color:#673ab7;--mat-option-label-text-color:rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color:rgba(0, 0, 0, .04)}.mat-accent{--mat-option-selected-state-label-text-color:#ffd740}.mat-warn{--mat-option-selected-state-label-text-color:#f44336}html{--mat-optgroup-label-text-color:rgba(0, 0, 0, .87)}.mat-pseudo-checkbox-full{color:#0000008a}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#673ab7}.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#673ab7}.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#ffd740}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#ffd740}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#ffd740}.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#ffd740}.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#f44336}.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#f44336}.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#b0b0b0}.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:#000000de}.mat-elevation-z0,.mat-mdc-elevation-specific.mat-elevation-z0{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-elevation-z1,.mat-mdc-elevation-specific.mat-elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.mat-elevation-z2,.mat-mdc-elevation-specific.mat-elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-elevation-z3,.mat-mdc-elevation-specific.mat-elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.mat-elevation-z4,.mat-mdc-elevation-specific.mat-elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-elevation-z5,.mat-mdc-elevation-specific.mat-elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.mat-elevation-z6,.mat-mdc-elevation-specific.mat-elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-elevation-z7,.mat-mdc-elevation-specific.mat-elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.mat-elevation-z8,.mat-mdc-elevation-specific.mat-elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z9,.mat-mdc-elevation-specific.mat-elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.mat-elevation-z10,.mat-mdc-elevation-specific.mat-elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.mat-elevation-z11,.mat-mdc-elevation-specific.mat-elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.mat-elevation-z12,.mat-mdc-elevation-specific.mat-elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-elevation-z13,.mat-mdc-elevation-specific.mat-elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.mat-elevation-z14,.mat-mdc-elevation-specific.mat-elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.mat-elevation-z15,.mat-mdc-elevation-specific.mat-elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.mat-elevation-z16,.mat-mdc-elevation-specific.mat-elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-elevation-z17,.mat-mdc-elevation-specific.mat-elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.mat-elevation-z18,.mat-mdc-elevation-specific.mat-elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.mat-elevation-z19,.mat-mdc-elevation-specific.mat-elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.mat-elevation-z20,.mat-mdc-elevation-specific.mat-elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.mat-elevation-z21,.mat-mdc-elevation-specific.mat-elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.mat-elevation-z22,.mat-mdc-elevation-specific.mat-elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.mat-elevation-z23,.mat-mdc-elevation-specific.mat-elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.mat-elevation-z24,.mat-mdc-elevation-specific.mat-elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-theme-loaded-marker{display:none}html{--mat-option-label-text-font:Roboto, sans-serif;--mat-option-label-text-line-height:24px;--mat-option-label-text-size:16px;--mat-option-label-text-tracking:.03125em;--mat-option-label-text-weight:400}html{--mat-optgroup-label-text-font:Roboto, sans-serif;--mat-optgroup-label-text-line-height:24px;--mat-optgroup-label-text-size:16px;--mat-optgroup-label-text-tracking:.03125em;--mat-optgroup-label-text-weight:400}.mat-mdc-card{--mdc-elevated-card-container-color:white;--mdc-elevated-card-container-elevation:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-outlined-card-container-color:white;--mdc-outlined-card-outline-color:rgba(0, 0, 0, .12);--mdc-outlined-card-container-elevation:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-card-subtitle-text-color:rgba(0, 0, 0, .54)}.mat-mdc-card{--mat-card-title-text-font:Roboto, sans-serif;--mat-card-title-text-line-height:32px;--mat-card-title-text-size:20px;--mat-card-title-text-tracking:.0125em;--mat-card-title-text-weight:500;--mat-card-subtitle-text-font:Roboto, sans-serif;--mat-card-subtitle-text-line-height:22px;--mat-card-subtitle-text-size:14px;--mat-card-subtitle-text-tracking:.0071428571em;--mat-card-subtitle-text-weight:500}.mat-mdc-progress-bar{--mdc-linear-progress-active-indicator-color:#673ab7;--mdc-linear-progress-track-color:rgba(103, 58, 183, .25)}.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots{background-color:#673ab740;background-color:var(--mdc-linear-progress-track-color, rgba(103, 58, 183, .25))}@media (forced-colors: active){.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots{background-color:#0000;background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(103, 58, 183, 0.25)'/%3E%3C/svg%3E\")}}.mat-mdc-progress-bar .mdc-linear-progress__buffer-bar{background-color:#673ab740;background-color:var(--mdc-linear-progress-track-color, rgba(103, 58, 183, .25))}.mat-mdc-progress-bar.mat-accent{--mdc-linear-progress-active-indicator-color:#ffd740;--mdc-linear-progress-track-color:rgba(255, 215, 64, .25)}.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots{background-color:#ffd74040;background-color:var(--mdc-linear-progress-track-color, rgba(255, 215, 64, .25))}@media (forced-colors: active){.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots{background-color:#0000;background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255, 215, 64, 0.25)'/%3E%3C/svg%3E\")}}.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-bar{background-color:#ffd74040;background-color:var(--mdc-linear-progress-track-color, rgba(255, 215, 64, .25))}.mat-mdc-progress-bar.mat-warn{--mdc-linear-progress-active-indicator-color:#f44336;--mdc-linear-progress-track-color:rgba(244, 67, 54, .25)}@keyframes mdc-linear-progress-buffering{}.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots{background-color:#f4433640;background-color:var(--mdc-linear-progress-track-color, rgba(244, 67, 54, .25))}@media (forced-colors: active){.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots{background-color:#0000;background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E\")}}.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-bar{background-color:#f4433640;background-color:var(--mdc-linear-progress-track-color, rgba(244, 67, 54, .25))}.mat-mdc-tooltip{--mdc-plain-tooltip-container-color:#616161;--mdc-plain-tooltip-supporting-text-color:#fff}.mat-mdc-tooltip{--mdc-plain-tooltip-supporting-text-font:Roboto, sans-serif;--mdc-plain-tooltip-supporting-text-size:12px;--mdc-plain-tooltip-supporting-text-weight:400;--mdc-plain-tooltip-supporting-text-tracking:.0333333333em}html{--mdc-filled-text-field-caret-color:#673ab7;--mdc-filled-text-field-focus-active-indicator-color:#673ab7;--mdc-filled-text-field-focus-label-text-color:rgba(103, 58, 183, .87);--mdc-filled-text-field-container-color:whitesmoke;--mdc-filled-text-field-disabled-container-color:#fafafa;--mdc-filled-text-field-label-text-color:rgba(0, 0, 0, .6);--mdc-filled-text-field-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-color:rgba(0, 0, 0, .87);--mdc-filled-text-field-disabled-input-text-color:rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-placeholder-color:rgba(0, 0, 0, .6);--mdc-filled-text-field-error-focus-label-text-color:#f44336;--mdc-filled-text-field-error-label-text-color:#f44336;--mdc-filled-text-field-error-caret-color:#f44336;--mdc-filled-text-field-active-indicator-color:rgba(0, 0, 0, .42);--mdc-filled-text-field-disabled-active-indicator-color:rgba(0, 0, 0, .06);--mdc-filled-text-field-hover-active-indicator-color:rgba(0, 0, 0, .87);--mdc-filled-text-field-error-active-indicator-color:#f44336;--mdc-filled-text-field-error-focus-active-indicator-color:#f44336;--mdc-filled-text-field-error-hover-active-indicator-color:#f44336;--mdc-outlined-text-field-caret-color:#673ab7;--mdc-outlined-text-field-focus-outline-color:#673ab7;--mdc-outlined-text-field-focus-label-text-color:rgba(103, 58, 183, .87);--mdc-outlined-text-field-label-text-color:rgba(0, 0, 0, .6);--mdc-outlined-text-field-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-color:rgba(0, 0, 0, .87);--mdc-outlined-text-field-disabled-input-text-color:rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-placeholder-color:rgba(0, 0, 0, .6);--mdc-outlined-text-field-error-caret-color:#f44336;--mdc-outlined-text-field-error-focus-label-text-color:#f44336;--mdc-outlined-text-field-error-label-text-color:#f44336;--mdc-outlined-text-field-outline-color:rgba(0, 0, 0, .38);--mdc-outlined-text-field-disabled-outline-color:rgba(0, 0, 0, .06);--mdc-outlined-text-field-hover-outline-color:rgba(0, 0, 0, .87);--mdc-outlined-text-field-error-focus-outline-color:#f44336;--mdc-outlined-text-field-error-hover-outline-color:#f44336;--mdc-outlined-text-field-error-outline-color:#f44336;--mat-form-field-disabled-input-text-placeholder-color:rgba(0, 0, 0, .38)}.mat-mdc-form-field-error{color:var(--mdc-theme-error, #f44336)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{background-color:#000000de}.mat-mdc-form-field:hover .mat-mdc-form-field-focus-overlay{opacity:.04}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:.12}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix:after{color:#0000008a}.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-primary .mat-mdc-form-field-infix:after{color:#673ab7de}.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-accent .mat-mdc-form-field-infix:after{color:#ffd740de}.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-warn .mat-mdc-form-field-infix:after{color:#f44336de}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix:after{color:#00000061}.mat-mdc-form-field.mat-accent{--mdc-filled-text-field-caret-color:#ffd740;--mdc-filled-text-field-focus-active-indicator-color:#ffd740;--mdc-filled-text-field-focus-label-text-color:rgba(255, 215, 64, .87);--mdc-outlined-text-field-caret-color:#ffd740;--mdc-outlined-text-field-focus-outline-color:#ffd740;--mdc-outlined-text-field-focus-label-text-color:rgba(255, 215, 64, .87)}.mat-mdc-form-field.mat-warn{--mdc-filled-text-field-caret-color:#f44336;--mdc-filled-text-field-focus-active-indicator-color:#f44336;--mdc-filled-text-field-focus-label-text-color:rgba(244, 67, 54, .87);--mdc-outlined-text-field-caret-color:#f44336;--mdc-outlined-text-field-focus-outline-color:#f44336;--mdc-outlined-text-field-focus-label-text-color:rgba(244, 67, 54, .87)}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:56px}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:28px}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY( -34.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:16px;padding-bottom:16px}.mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{padding-top:24px;padding-bottom:8px}.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:16px;padding-bottom:16px}html{--mdc-filled-text-field-label-text-font:Roboto, sans-serif;--mdc-filled-text-field-label-text-size:16px;--mdc-filled-text-field-label-text-tracking:.03125em;--mdc-filled-text-field-label-text-weight:400;--mdc-outlined-text-field-label-text-font:Roboto, sans-serif;--mdc-outlined-text-field-label-text-size:16px;--mdc-outlined-text-field-label-text-tracking:.03125em;--mdc-outlined-text-field-label-text-weight:400;--mat-form-field-container-text-font:Roboto, sans-serif;--mat-form-field-container-text-line-height:24px;--mat-form-field-container-text-size:16px;--mat-form-field-container-text-tracking:.03125em;--mat-form-field-container-text-weight:400;--mat-form-field-outlined-label-text-populated-size:16px;--mat-form-field-subscript-text-font:Roboto, sans-serif;--mat-form-field-subscript-text-line-height:20px;--mat-form-field-subscript-text-size:12px;--mat-form-field-subscript-text-tracking:.0333333333em;--mat-form-field-subscript-text-weight:400}html{--mat-select-panel-background-color:white;--mat-select-enabled-trigger-text-color:rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color:rgba(0, 0, 0, .38);--mat-select-placeholder-text-color:rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color:rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color:rgba(0, 0, 0, .38);--mat-select-focused-arrow-color:rgba(103, 58, 183, .87);--mat-select-invalid-arrow-color:rgba(244, 67, 54, .87)}html .mat-mdc-form-field.mat-accent{--mat-select-panel-background-color:white;--mat-select-enabled-trigger-text-color:rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color:rgba(0, 0, 0, .38);--mat-select-placeholder-text-color:rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color:rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color:rgba(0, 0, 0, .38);--mat-select-focused-arrow-color:rgba(255, 215, 64, .87);--mat-select-invalid-arrow-color:rgba(244, 67, 54, .87)}html .mat-mdc-form-field.mat-warn{--mat-select-panel-background-color:white;--mat-select-enabled-trigger-text-color:rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color:rgba(0, 0, 0, .38);--mat-select-placeholder-text-color:rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color:rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color:rgba(0, 0, 0, .38);--mat-select-focused-arrow-color:rgba(244, 67, 54, .87);--mat-select-invalid-arrow-color:rgba(244, 67, 54, .87)}html{--mat-select-trigger-text-font:Roboto, sans-serif;--mat-select-trigger-text-line-height:24px;--mat-select-trigger-text-size:16px;--mat-select-trigger-text-tracking:.03125em;--mat-select-trigger-text-weight:400}html{--mat-autocomplete-background-color:white}.mat-mdc-dialog-container{--mdc-dialog-container-color:white;--mdc-dialog-subhead-color:rgba(0, 0, 0, .87);--mdc-dialog-supporting-text-color:rgba(0, 0, 0, .6)}.mat-mdc-dialog-container{--mdc-dialog-subhead-font:Roboto, sans-serif;--mdc-dialog-subhead-line-height:32px;--mdc-dialog-subhead-size:20px;--mdc-dialog-subhead-weight:500;--mdc-dialog-subhead-tracking:.0125em;--mdc-dialog-supporting-text-font:Roboto, sans-serif;--mdc-dialog-supporting-text-line-height:24px;--mdc-dialog-supporting-text-size:16px;--mdc-dialog-supporting-text-weight:400;--mdc-dialog-supporting-text-tracking:.03125em}.mat-mdc-standard-chip{--mdc-chip-disabled-label-text-color:#212121;--mdc-chip-elevated-container-color:#e0e0e0;--mdc-chip-elevated-disabled-container-color:#e0e0e0;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:#212121;--mdc-chip-with-icon-icon-color:#212121;--mdc-chip-with-icon-disabled-icon-color:#212121;--mdc-chip-with-icon-selected-icon-color:#212121;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:#212121;--mdc-chip-with-trailing-icon-trailing-icon-color:#212121}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-primary,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-primary{--mdc-chip-disabled-label-text-color:white;--mdc-chip-elevated-container-color:#673ab7;--mdc-chip-elevated-disabled-container-color:#673ab7;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:white;--mdc-chip-with-icon-icon-color:white;--mdc-chip-with-icon-disabled-icon-color:white;--mdc-chip-with-icon-selected-icon-color:white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:white;--mdc-chip-with-trailing-icon-trailing-icon-color:white}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-accent,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-accent{--mdc-chip-disabled-label-text-color:rgba(0, 0, 0, .87);--mdc-chip-elevated-container-color:#ffd740;--mdc-chip-elevated-disabled-container-color:#ffd740;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:rgba(0, 0, 0, .87);--mdc-chip-with-icon-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-icon-disabled-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-icon-selected-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-trailing-icon-color:rgba(0, 0, 0, .87)}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-warn,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-warn{--mdc-chip-disabled-label-text-color:white;--mdc-chip-elevated-container-color:#f44336;--mdc-chip-elevated-disabled-container-color:#f44336;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:white;--mdc-chip-with-icon-icon-color:white;--mdc-chip-with-icon-disabled-icon-color:white;--mdc-chip-with-icon-selected-icon-color:white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:white;--mdc-chip-with-trailing-icon-trailing-icon-color:white}.mat-mdc-chip.mat-mdc-standard-chip{--mdc-chip-container-height:32px}.mat-mdc-standard-chip{--mdc-chip-label-text-font:Roboto, sans-serif;--mdc-chip-label-text-line-height:20px;--mdc-chip-label-text-size:14px;--mdc-chip-label-text-tracking:.0178571429em;--mdc-chip-label-text-weight:400}.mat-mdc-slide-toggle{--mdc-switch-selected-focus-state-layer-color:#5e35b1;--mdc-switch-selected-handle-color:#5e35b1;--mdc-switch-selected-hover-state-layer-color:#5e35b1;--mdc-switch-selected-pressed-state-layer-color:#5e35b1;--mdc-switch-selected-focus-handle-color:#311b92;--mdc-switch-selected-hover-handle-color:#311b92;--mdc-switch-selected-pressed-handle-color:#311b92;--mdc-switch-selected-focus-track-color:#9575cd;--mdc-switch-selected-hover-track-color:#9575cd;--mdc-switch-selected-pressed-track-color:#9575cd;--mdc-switch-selected-track-color:#9575cd;--mdc-switch-disabled-selected-handle-color:#424242;--mdc-switch-disabled-selected-icon-color:#fff;--mdc-switch-disabled-selected-track-color:#424242;--mdc-switch-disabled-unselected-handle-color:#424242;--mdc-switch-disabled-unselected-icon-color:#fff;--mdc-switch-disabled-unselected-track-color:#424242;--mdc-switch-handle-surface-color:var(--mdc-theme-surface, #fff);--mdc-switch-handle-elevation-shadow:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-switch-handle-shadow-color:black;--mdc-switch-disabled-handle-elevation-shadow:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mdc-switch-selected-icon-color:#fff;--mdc-switch-unselected-focus-handle-color:#212121;--mdc-switch-unselected-focus-state-layer-color:#424242;--mdc-switch-unselected-focus-track-color:#e0e0e0;--mdc-switch-unselected-handle-color:#616161;--mdc-switch-unselected-hover-handle-color:#212121;--mdc-switch-unselected-hover-state-layer-color:#424242;--mdc-switch-unselected-hover-track-color:#e0e0e0;--mdc-switch-unselected-icon-color:#fff;--mdc-switch-unselected-pressed-handle-color:#212121;--mdc-switch-unselected-pressed-state-layer-color:#424242;--mdc-switch-unselected-pressed-track-color:#e0e0e0;--mdc-switch-unselected-track-color:#e0e0e0}.mat-mdc-slide-toggle .mdc-form-field{color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:#00000061}.mat-mdc-slide-toggle.mat-accent{--mdc-switch-selected-focus-state-layer-color:#ffb300;--mdc-switch-selected-handle-color:#ffb300;--mdc-switch-selected-hover-state-layer-color:#ffb300;--mdc-switch-selected-pressed-state-layer-color:#ffb300;--mdc-switch-selected-focus-handle-color:#ff6f00;--mdc-switch-selected-hover-handle-color:#ff6f00;--mdc-switch-selected-pressed-handle-color:#ff6f00;--mdc-switch-selected-focus-track-color:#ffd54f;--mdc-switch-selected-hover-track-color:#ffd54f;--mdc-switch-selected-pressed-track-color:#ffd54f;--mdc-switch-selected-track-color:#ffd54f}.mat-mdc-slide-toggle.mat-warn{--mdc-switch-selected-focus-state-layer-color:#e53935;--mdc-switch-selected-handle-color:#e53935;--mdc-switch-selected-hover-state-layer-color:#e53935;--mdc-switch-selected-pressed-state-layer-color:#e53935;--mdc-switch-selected-focus-handle-color:#b71c1c;--mdc-switch-selected-hover-handle-color:#b71c1c;--mdc-switch-selected-pressed-handle-color:#b71c1c;--mdc-switch-selected-focus-track-color:#e57373;--mdc-switch-selected-hover-track-color:#e57373;--mdc-switch-selected-pressed-track-color:#e57373;--mdc-switch-selected-track-color:#e57373}.mat-mdc-slide-toggle{--mdc-switch-state-layer-size:48px}.mat-mdc-slide-toggle{--mat-slide-toggle-label-text-font:Roboto, sans-serif;--mat-slide-toggle-label-text-size:14px;--mat-slide-toggle-label-text-tracking:.0178571429em;--mat-slide-toggle-label-text-line-height:20px;--mat-slide-toggle-label-text-weight:400}.mat-mdc-slide-toggle .mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mat-mdc-radio-button .mdc-form-field{color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mat-mdc-radio-button.mat-primary{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#673ab7;--mdc-radio-selected-hover-icon-color:#673ab7;--mdc-radio-selected-icon-color:#673ab7;--mdc-radio-selected-pressed-icon-color:#673ab7;--mat-radio-ripple-color:#000;--mat-radio-checked-ripple-color:#673ab7;--mat-radio-disabled-label-color:rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-accent{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#ffd740;--mdc-radio-selected-hover-icon-color:#ffd740;--mdc-radio-selected-icon-color:#ffd740;--mdc-radio-selected-pressed-icon-color:#ffd740;--mat-radio-ripple-color:#000;--mat-radio-checked-ripple-color:#ffd740;--mat-radio-disabled-label-color:rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-warn{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#f44336;--mdc-radio-selected-hover-icon-color:#f44336;--mdc-radio-selected-icon-color:#f44336;--mdc-radio-selected-pressed-icon-color:#f44336;--mat-radio-ripple-color:#000;--mat-radio-checked-ripple-color:#f44336;--mat-radio-disabled-label-color:rgba(0, 0, 0, .38)}.mat-mdc-radio-button .mdc-radio{--mdc-radio-state-layer-size:40px}.mat-mdc-radio-button .mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-body2-font-size, 14px);line-height:var(--mdc-typography-body2-line-height, 20px);font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:var(--mdc-typography-body2-text-transform, none)}.mat-mdc-slider{--mdc-slider-label-container-color:black;--mdc-slider-label-label-text-color:white;--mdc-slider-disabled-handle-color:#000;--mdc-slider-disabled-active-track-color:#000;--mdc-slider-disabled-inactive-track-color:#000;--mdc-slider-with-tick-marks-disabled-container-color:#000;--mat-mdc-slider-value-indicator-opacity: .6}.mat-mdc-slider.mat-primary{--mdc-slider-handle-color:#673ab7;--mdc-slider-focus-handle-color:#673ab7;--mdc-slider-hover-handle-color:#673ab7;--mdc-slider-active-track-color:#673ab7;--mdc-slider-inactive-track-color:#673ab7;--mdc-slider-with-tick-marks-active-container-color:#fff;--mdc-slider-with-tick-marks-inactive-container-color:#673ab7;--mat-mdc-slider-ripple-color: #673ab7;--mat-mdc-slider-hover-ripple-color: rgba(103, 58, 183, .05);--mat-mdc-slider-focus-ripple-color: rgba(103, 58, 183, .2)}.mat-mdc-slider.mat-accent{--mdc-slider-handle-color:#ffd740;--mdc-slider-focus-handle-color:#ffd740;--mdc-slider-hover-handle-color:#ffd740;--mdc-slider-active-track-color:#ffd740;--mdc-slider-inactive-track-color:#ffd740;--mdc-slider-with-tick-marks-active-container-color:#000;--mdc-slider-with-tick-marks-inactive-container-color:#ffd740;--mat-mdc-slider-ripple-color: #ffd740;--mat-mdc-slider-hover-ripple-color: rgba(255, 215, 64, .05);--mat-mdc-slider-focus-ripple-color: rgba(255, 215, 64, .2)}.mat-mdc-slider.mat-warn{--mdc-slider-handle-color:#f44336;--mdc-slider-focus-handle-color:#f44336;--mdc-slider-hover-handle-color:#f44336;--mdc-slider-active-track-color:#f44336;--mdc-slider-inactive-track-color:#f44336;--mdc-slider-with-tick-marks-active-container-color:#fff;--mdc-slider-with-tick-marks-inactive-container-color:#f44336;--mat-mdc-slider-ripple-color: #f44336;--mat-mdc-slider-hover-ripple-color: rgba(244, 67, 54, .05);--mat-mdc-slider-focus-ripple-color: rgba(244, 67, 54, .2)}.mat-mdc-slider{--mdc-slider-label-label-text-font:Roboto, sans-serif;--mdc-slider-label-label-text-size:14px;--mdc-slider-label-label-text-line-height:22px;--mdc-slider-label-label-text-tracking:.0071428571em;--mdc-slider-label-label-text-weight:500}html{--mat-menu-item-label-text-color:rgba(0, 0, 0, .87);--mat-menu-item-icon-color:rgba(0, 0, 0, .87);--mat-menu-item-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-menu-item-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-menu-container-color:white}html{--mat-menu-item-label-text-font:Roboto, sans-serif;--mat-menu-item-label-text-size:16px;--mat-menu-item-label-text-tracking:.03125em;--mat-menu-item-label-text-line-height:24px;--mat-menu-item-label-text-weight:400}.mat-mdc-list-base{--mdc-list-list-item-label-text-color:rgba(0, 0, 0, .87);--mdc-list-list-item-supporting-text-color:rgba(0, 0, 0, .54);--mdc-list-list-item-leading-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-supporting-text-color:rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-selected-trailing-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-disabled-label-text-color:black;--mdc-list-list-item-disabled-leading-icon-color:black;--mdc-list-list-item-disabled-trailing-icon-color:black;--mdc-list-list-item-hover-label-text-color:rgba(0, 0, 0, .87);--mdc-list-list-item-hover-leading-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-hover-trailing-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-focus-label-text-color:rgba(0, 0, 0, .87);--mdc-list-list-item-hover-state-layer-color:black;--mdc-list-list-item-hover-state-layer-opacity:.04;--mdc-list-list-item-focus-state-layer-color:black;--mdc-list-list-item-focus-state-layer-opacity:.12}.mdc-list-item__start,.mdc-list-item__end{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#673ab7;--mdc-radio-selected-hover-icon-color:#673ab7;--mdc-radio-selected-icon-color:#673ab7;--mdc-radio-selected-pressed-icon-color:#673ab7}.mat-accent .mdc-list-item__start,.mat-accent .mdc-list-item__end{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#ffd740;--mdc-radio-selected-hover-icon-color:#ffd740;--mdc-radio-selected-icon-color:#ffd740;--mdc-radio-selected-pressed-icon-color:#ffd740}.mat-warn .mdc-list-item__start,.mat-warn .mdc-list-item__end{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#f44336;--mdc-radio-selected-hover-icon-color:#f44336;--mdc-radio-selected-icon-color:#f44336;--mdc-radio-selected-pressed-icon-color:#f44336}.mat-mdc-list-option{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#673ab7;--mdc-checkbox-selected-hover-icon-color:#673ab7;--mdc-checkbox-selected-icon-color:#673ab7;--mdc-checkbox-selected-pressed-icon-color:#673ab7;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#673ab7;--mdc-checkbox-selected-hover-state-layer-color:#673ab7;--mdc-checkbox-selected-pressed-state-layer-color:#673ab7;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-list-option.mat-accent{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#000;--mdc-checkbox-selected-focus-icon-color:#ffd740;--mdc-checkbox-selected-hover-icon-color:#ffd740;--mdc-checkbox-selected-icon-color:#ffd740;--mdc-checkbox-selected-pressed-icon-color:#ffd740;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#ffd740;--mdc-checkbox-selected-hover-state-layer-color:#ffd740;--mdc-checkbox-selected-pressed-state-layer-color:#ffd740;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-list-option.mat-warn{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#f44336;--mdc-checkbox-selected-hover-icon-color:#f44336;--mdc-checkbox-selected-icon-color:#f44336;--mdc-checkbox-selected-pressed-icon-color:#f44336;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#f44336;--mdc-checkbox-selected-hover-state-layer-color:#f44336;--mdc-checkbox-selected-pressed-state-layer-color:#f44336;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#673ab7}.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__content,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mat-mdc-list-base{--mdc-list-list-item-one-line-container-height:48px;--mdc-list-list-item-two-line-container-height:64px;--mdc-list-list-item-three-line-container-height:88px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mat-mdc-list-base{--mdc-list-list-item-label-text-font:Roboto, sans-serif;--mdc-list-list-item-label-text-line-height:24px;--mdc-list-list-item-label-text-size:16px;--mdc-list-list-item-label-text-tracking:.03125em;--mdc-list-list-item-label-text-weight:400;--mdc-list-list-item-supporting-text-font:Roboto, sans-serif;--mdc-list-list-item-supporting-text-line-height:20px;--mdc-list-list-item-supporting-text-size:14px;--mdc-list-list-item-supporting-text-tracking:.0178571429em;--mdc-list-list-item-supporting-text-weight:400;--mdc-list-list-item-trailing-supporting-text-font:Roboto, sans-serif;--mdc-list-list-item-trailing-supporting-text-line-height:20px;--mdc-list-list-item-trailing-supporting-text-size:12px;--mdc-list-list-item-trailing-supporting-text-tracking:.0333333333em;--mdc-list-list-item-trailing-supporting-text-weight:400}.mdc-list-group__subheader{font-size:16px;font-weight:400;line-height:28px;font-family:Roboto,sans-serif;letter-spacing:.009375em}html{--mat-paginator-container-text-color:rgba(0, 0, 0, .87);--mat-paginator-container-background-color:white;--mat-paginator-enabled-icon-color:rgba(0, 0, 0, .54);--mat-paginator-disabled-icon-color:rgba(0, 0, 0, .12)}html{--mat-paginator-container-size:56px}.mat-mdc-paginator .mat-mdc-form-field-infix{min-height:40px}.mat-mdc-paginator .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:20px}.mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY( -26.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}.mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}.mat-mdc-paginator .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}.mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-floating-label{display:none}html{--mat-paginator-container-text-font:Roboto, sans-serif;--mat-paginator-container-text-line-height:20px;--mat-paginator-container-text-size:12px;--mat-paginator-container-text-tracking:.0333333333em;--mat-paginator-container-text-weight:400;--mat-paginator-select-trigger-text-size:12px}.mat-mdc-tab-group,.mat-mdc-tab-nav-bar{--mdc-tab-indicator-active-indicator-color:#673ab7;--mat-tab-header-disabled-ripple-color:rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color:#000;--mat-tab-header-inactive-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color:#673ab7;--mat-tab-header-active-ripple-color:#673ab7;--mat-tab-header-inactive-ripple-color:#673ab7;--mat-tab-header-inactive-focus-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color:#673ab7;--mat-tab-header-active-hover-label-text-color:#673ab7;--mat-tab-header-active-focus-indicator-color:#673ab7;--mat-tab-header-active-hover-indicator-color:#673ab7}.mat-mdc-tab-group.mat-accent,.mat-mdc-tab-nav-bar.mat-accent{--mdc-tab-indicator-active-indicator-color:#ffd740;--mat-tab-header-disabled-ripple-color:rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color:#000;--mat-tab-header-inactive-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color:#ffd740;--mat-tab-header-active-ripple-color:#ffd740;--mat-tab-header-inactive-ripple-color:#ffd740;--mat-tab-header-inactive-focus-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color:#ffd740;--mat-tab-header-active-hover-label-text-color:#ffd740;--mat-tab-header-active-focus-indicator-color:#ffd740;--mat-tab-header-active-hover-indicator-color:#ffd740}.mat-mdc-tab-group.mat-warn,.mat-mdc-tab-nav-bar.mat-warn{--mdc-tab-indicator-active-indicator-color:#f44336;--mat-tab-header-disabled-ripple-color:rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color:#000;--mat-tab-header-inactive-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color:#f44336;--mat-tab-header-active-ripple-color:#f44336;--mat-tab-header-inactive-ripple-color:#f44336;--mat-tab-header-inactive-focus-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color:#f44336;--mat-tab-header-active-hover-label-text-color:#f44336;--mat-tab-header-active-focus-indicator-color:#f44336;--mat-tab-header-active-hover-indicator-color:#f44336}.mat-mdc-tab-group.mat-background-primary,.mat-mdc-tab-nav-bar.mat-background-primary{--mat-tab-header-with-background-background-color:#673ab7;--mat-tab-header-with-background-foreground-color:white}.mat-mdc-tab-group.mat-background-accent,.mat-mdc-tab-nav-bar.mat-background-accent{--mat-tab-header-with-background-background-color:#ffd740;--mat-tab-header-with-background-foreground-color:rgba(0, 0, 0, .87)}.mat-mdc-tab-group.mat-background-warn,.mat-mdc-tab-nav-bar.mat-background-warn{--mat-tab-header-with-background-background-color:#f44336;--mat-tab-header-with-background-foreground-color:white}.mat-mdc-tab-header{--mdc-secondary-navigation-tab-container-height:48px}.mat-mdc-tab-header{--mat-tab-header-label-text-font:Roboto, sans-serif;--mat-tab-header-label-text-size:14px;--mat-tab-header-label-text-tracking:.0892857143em;--mat-tab-header-label-text-line-height:36px;--mat-tab-header-label-text-weight:500}html{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#000;--mdc-checkbox-selected-focus-icon-color:#ffd740;--mdc-checkbox-selected-hover-icon-color:#ffd740;--mdc-checkbox-selected-icon-color:#ffd740;--mdc-checkbox-selected-pressed-icon-color:#ffd740;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#ffd740;--mdc-checkbox-selected-hover-state-layer-color:#ffd740;--mdc-checkbox-selected-pressed-state-layer-color:#ffd740;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-checkbox.mat-primary{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#673ab7;--mdc-checkbox-selected-hover-icon-color:#673ab7;--mdc-checkbox-selected-icon-color:#673ab7;--mdc-checkbox-selected-pressed-icon-color:#673ab7;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#673ab7;--mdc-checkbox-selected-hover-state-layer-color:#673ab7;--mdc-checkbox-selected-pressed-state-layer-color:#673ab7;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-checkbox.mat-warn{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#f44336;--mdc-checkbox-selected-hover-icon-color:#f44336;--mdc-checkbox-selected-icon-color:#f44336;--mdc-checkbox-selected-pressed-icon-color:#f44336;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#f44336;--mdc-checkbox-selected-hover-state-layer-color:#f44336;--mdc-checkbox-selected-pressed-state-layer-color:#f44336;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-checkbox .mdc-form-field{color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:#00000061}html{--mdc-checkbox-state-layer-size:40px}.mat-mdc-checkbox .mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-body2-font-size, 14px);line-height:var(--mdc-typography-body2-line-height, 20px);font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:var(--mdc-typography-body2-text-transform, none)}.mat-mdc-button.mat-unthemed{--mdc-text-button-label-text-color:#000}.mat-mdc-button.mat-primary{--mdc-text-button-label-text-color:#673ab7}.mat-mdc-button.mat-accent{--mdc-text-button-label-text-color:#ffd740}.mat-mdc-button.mat-warn{--mdc-text-button-label-text-color:#f44336}.mat-mdc-button[disabled][disabled]{--mdc-text-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-text-button-label-text-color:rgba(0, 0, 0, .38)}.mat-mdc-unelevated-button.mat-unthemed{--mdc-filled-button-container-color:#fff;--mdc-filled-button-label-text-color:#000}.mat-mdc-unelevated-button.mat-primary{--mdc-filled-button-container-color:#673ab7;--mdc-filled-button-label-text-color:#fff}.mat-mdc-unelevated-button.mat-accent{--mdc-filled-button-container-color:#ffd740;--mdc-filled-button-label-text-color:#000}.mat-mdc-unelevated-button.mat-warn{--mdc-filled-button-container-color:#f44336;--mdc-filled-button-label-text-color:#fff}.mat-mdc-unelevated-button[disabled][disabled]{--mdc-filled-button-disabled-container-color:rgba(0, 0, 0, .12);--mdc-filled-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-filled-button-container-color:rgba(0, 0, 0, .12);--mdc-filled-button-label-text-color:rgba(0, 0, 0, .38)}.mat-mdc-raised-button.mat-unthemed{--mdc-protected-button-container-color:#fff;--mdc-protected-button-label-text-color:#000}.mat-mdc-raised-button.mat-primary{--mdc-protected-button-container-color:#673ab7;--mdc-protected-button-label-text-color:#fff}.mat-mdc-raised-button.mat-accent{--mdc-protected-button-container-color:#ffd740;--mdc-protected-button-label-text-color:#000}.mat-mdc-raised-button.mat-warn{--mdc-protected-button-container-color:#f44336;--mdc-protected-button-label-text-color:#fff}.mat-mdc-raised-button[disabled][disabled]{--mdc-protected-button-disabled-container-color:rgba(0, 0, 0, .12);--mdc-protected-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-protected-button-container-color:rgba(0, 0, 0, .12);--mdc-protected-button-label-text-color:rgba(0, 0, 0, .38);--mdc-protected-button-container-elevation:0}.mat-mdc-outlined-button{--mdc-outlined-button-outline-color:rgba(0, 0, 0, .12)}.mat-mdc-outlined-button.mat-unthemed{--mdc-outlined-button-label-text-color:#000}.mat-mdc-outlined-button.mat-primary{--mdc-outlined-button-label-text-color:#673ab7}.mat-mdc-outlined-button.mat-accent{--mdc-outlined-button-label-text-color:#ffd740}.mat-mdc-outlined-button.mat-warn{--mdc-outlined-button-label-text-color:#f44336}.mat-mdc-outlined-button[disabled][disabled]{--mdc-outlined-button-label-text-color:rgba(0, 0, 0, .38);--mdc-outlined-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-outlined-button-outline-color:rgba(0, 0, 0, .12);--mdc-outlined-button-disabled-outline-color:rgba(0, 0, 0, .12)}.mat-mdc-button,.mat-mdc-outlined-button{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-button:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-button.mat-primary,.mat-mdc-outlined-button.mat-primary{--mat-mdc-button-persistent-ripple-color: #673ab7;--mat-mdc-button-ripple-color: rgba(103, 58, 183, .1)}.mat-mdc-button.mat-accent,.mat-mdc-outlined-button.mat-accent{--mat-mdc-button-persistent-ripple-color: #ffd740;--mat-mdc-button-ripple-color: rgba(255, 215, 64, .1)}.mat-mdc-button.mat-warn,.mat-mdc-outlined-button.mat-warn{--mat-mdc-button-persistent-ripple-color: #f44336;--mat-mdc-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-raised-button,.mat-mdc-unelevated-button{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-raised-button.mat-primary,.mat-mdc-unelevated-button.mat-primary{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-raised-button.mat-accent,.mat-mdc-unelevated-button.mat-accent{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-raised-button.mat-warn,.mat-mdc-unelevated-button.mat-warn{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-button.mat-mdc-button-base,.mat-mdc-raised-button.mat-mdc-button-base,.mat-mdc-unelevated-button.mat-mdc-button-base,.mat-mdc-outlined-button.mat-mdc-button-base{height:36px}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-button-font-size, 14px);line-height:var(--mdc-typography-button-line-height, 36px);font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:var(--mdc-typography-button-text-transform, none)}.mat-mdc-icon-button{--mdc-icon-button-icon-color:inherit;--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-icon-button.mat-primary{--mat-mdc-button-persistent-ripple-color: #6200ee;--mat-mdc-button-ripple-color: rgba(98, 0, 238, .1)}.mat-mdc-icon-button.mat-accent{--mat-mdc-button-persistent-ripple-color: #018786;--mat-mdc-button-ripple-color: rgba(1, 135, 134, .1)}.mat-mdc-icon-button.mat-warn{--mat-mdc-button-persistent-ripple-color: #b00020;--mat-mdc-button-ripple-color: rgba(176, 0, 32, .1)}.mat-mdc-icon-button.mat-primary{--mdc-icon-button-icon-color:#673ab7;--mat-mdc-button-persistent-ripple-color: #673ab7;--mat-mdc-button-ripple-color: rgba(103, 58, 183, .1)}.mat-mdc-icon-button.mat-accent{--mdc-icon-button-icon-color:#ffd740;--mat-mdc-button-persistent-ripple-color: #ffd740;--mat-mdc-button-ripple-color: rgba(255, 215, 64, .1)}.mat-mdc-icon-button.mat-warn{--mdc-icon-button-icon-color:#f44336;--mat-mdc-button-persistent-ripple-color: #f44336;--mat-mdc-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-icon-button[disabled][disabled]{--mdc-icon-button-icon-color:rgba(0, 0, 0, .38);--mdc-icon-button-disabled-icon-color:rgba(0, 0, 0, .38)}.mat-mdc-icon-button.mat-mdc-button-base{--mdc-icon-button-state-layer-size:48px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:12px}.mat-mdc-fab,.mat-mdc-mini-fab{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-fab.mat-primary,.mat-mdc-mini-fab.mat-primary{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-fab.mat-accent,.mat-mdc-mini-fab.mat-accent{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-fab.mat-warn,.mat-mdc-mini-fab.mat-warn{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-fab[disabled][disabled],.mat-mdc-mini-fab[disabled][disabled]{--mdc-fab-container-color:rgba(0, 0, 0, .12);--mdc-fab-icon-color:rgba(0, 0, 0, .38);--mat-mdc-fab-color: rgba(0, 0, 0, .38)}.mat-mdc-fab.mat-unthemed,.mat-mdc-mini-fab.mat-unthemed{--mdc-fab-container-color:white;--mdc-fab-icon-color:black;--mat-mdc-fab-color: #000}.mat-mdc-fab.mat-primary,.mat-mdc-mini-fab.mat-primary{--mdc-fab-container-color:#673ab7;--mdc-fab-icon-color:white;--mat-mdc-fab-color: #fff}.mat-mdc-fab.mat-accent,.mat-mdc-mini-fab.mat-accent{--mdc-fab-container-color:#ffd740;--mdc-fab-icon-color:black;--mat-mdc-fab-color: #000}.mat-mdc-fab.mat-warn,.mat-mdc-mini-fab.mat-warn{--mdc-fab-container-color:#f44336;--mdc-fab-icon-color:white;--mat-mdc-fab-color: #fff}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-button-font-size, 14px);line-height:var(--mdc-typography-button-line-height, 36px);font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:var(--mdc-typography-button-text-transform, none)}.mat-mdc-extended-fab{--mdc-extended-fab-label-text-font:Roboto, sans-serif;--mdc-extended-fab-label-text-size:14px;--mdc-extended-fab-label-text-tracking:.0892857143em;--mdc-extended-fab-label-text-weight:500}.mat-mdc-snack-bar-container{--mdc-snackbar-container-color:#333333;--mdc-snackbar-supporting-text-color:rgba(255, 255, 255, .87);--mat-snack-bar-button-color:#ffd740}.mat-mdc-snack-bar-container{--mdc-snackbar-supporting-text-font:Roboto, sans-serif;--mdc-snackbar-supporting-text-line-height:20px;--mdc-snackbar-supporting-text-size:14px;--mdc-snackbar-supporting-text-weight:400}html{--mat-table-background-color:white;--mat-table-header-headline-color:rgba(0, 0, 0, .87);--mat-table-row-item-label-text-color:rgba(0, 0, 0, .87);--mat-table-row-item-outline-color:rgba(0, 0, 0, .12)}html{--mat-table-header-container-height:56px;--mat-table-footer-container-height:52px;--mat-table-row-item-container-height:52px}html{--mat-table-header-headline-font:Roboto, sans-serif;--mat-table-header-headline-line-height:22px;--mat-table-header-headline-size:14px;--mat-table-header-headline-weight:500;--mat-table-header-headline-tracking:.0071428571em;--mat-table-row-item-label-text-font:Roboto, sans-serif;--mat-table-row-item-label-text-line-height:20px;--mat-table-row-item-label-text-size:14px;--mat-table-row-item-label-text-weight:400;--mat-table-row-item-label-text-tracking:.0178571429em;--mat-table-footer-supporting-text-font:Roboto, sans-serif;--mat-table-footer-supporting-text-line-height:20px;--mat-table-footer-supporting-text-size:14px;--mat-table-footer-supporting-text-weight:400;--mat-table-footer-supporting-text-tracking:.0178571429em}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-color:#673ab7}.mat-mdc-progress-spinner.mat-accent{--mdc-circular-progress-active-indicator-color:#ffd740}.mat-mdc-progress-spinner.mat-warn{--mdc-circular-progress-active-indicator-color:#f44336}.mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:Roboto,sans-serif;font-family:var(--mat-badge-text-font, Roboto, sans-serif);font-size:12px;font-size:var(--mat-badge-text-size, 12px);font-weight:600;font-weight:var(--mat-badge-text-weight, 600)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px;font-size:9px;font-size:var(--mat-badge-small-size-text-size, 9px)}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px;font-size:24px;font-size:var(--mat-badge-large-size-text-size, 24px)}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}html{--mat-badge-background-color:#673ab7;--mat-badge-text-color:white;--mat-badge-disabled-state-background-color:#b9b9b9;--mat-badge-disabled-state-text-color:rgba(0, 0, 0, .38)}.mat-badge-accent{--mat-badge-background-color:#ffd740;--mat-badge-text-color:rgba(0, 0, 0, .87)}.mat-badge-warn{--mat-badge-background-color:#f44336;--mat-badge-text-color:white}html{--mat-badge-text-font:Roboto, sans-serif;--mat-badge-text-size:12px;--mat-badge-text-weight:600;--mat-badge-small-size-text-size:9px;--mat-badge-large-size-text-size:24px}html{--mat-bottom-sheet-container-text-color:rgba(0, 0, 0, .87);--mat-bottom-sheet-container-background-color:white}html{--mat-bottom-sheet-container-text-font:Roboto, sans-serif;--mat-bottom-sheet-container-text-line-height:20px;--mat-bottom-sheet-container-text-size:14px;--mat-bottom-sheet-container-text-tracking:.0178571429em;--mat-bottom-sheet-container-text-weight:400}html{--mat-legacy-button-toggle-text-color:rgba(0, 0, 0, .38);--mat-legacy-button-toggle-state-layer-color:rgba(0, 0, 0, .12);--mat-legacy-button-toggle-selected-state-text-color:rgba(0, 0, 0, .54);--mat-legacy-button-toggle-selected-state-background-color:#e0e0e0;--mat-legacy-button-toggle-disabled-state-text-color:rgba(0, 0, 0, .26);--mat-legacy-button-toggle-disabled-state-background-color:#eeeeee;--mat-legacy-button-toggle-disabled-selected-state-background-color:#bdbdbd;--mat-standard-button-toggle-text-color:rgba(0, 0, 0, .87);--mat-standard-button-toggle-background-color:white;--mat-standard-button-toggle-state-layer-color:black;--mat-standard-button-toggle-selected-state-background-color:#e0e0e0;--mat-standard-button-toggle-selected-state-text-color:rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-state-text-color:rgba(0, 0, 0, .26);--mat-standard-button-toggle-disabled-state-background-color:white;--mat-standard-button-toggle-disabled-selected-state-text-color:rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-selected-state-background-color:#bdbdbd;--mat-standard-button-toggle-divider-color:#e0e0e0}html{--mat-standard-button-toggle-height:48px}html{--mat-legacy-button-toggle-text-font:Roboto, sans-serif;--mat-standard-button-toggle-text-font:Roboto, sans-serif}html{--mat-datepicker-calendar-date-selected-state-text-color:white;--mat-datepicker-calendar-date-selected-state-background-color:#673ab7;--mat-datepicker-calendar-date-selected-disabled-state-background-color:rgba(103, 58, 183, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color:white;--mat-datepicker-calendar-date-focus-state-background-color:rgba(103, 58, 183, .3);--mat-datepicker-calendar-date-hover-state-background-color:rgba(103, 58, 183, .3);--mat-datepicker-toggle-active-state-icon-color:#673ab7;--mat-datepicker-calendar-date-in-range-state-background-color:rgba(103, 58, 183, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color:rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color:#a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color:#46a35e;--mat-datepicker-toggle-icon-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-body-label-text-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-period-button-icon-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-navigation-button-icon-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-header-divider-color:rgba(0, 0, 0, .12);--mat-datepicker-calendar-header-text-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-date-today-outline-color:rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-today-disabled-state-outline-color:rgba(0, 0, 0, .18);--mat-datepicker-calendar-date-text-color:rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-outline-color:transparent;--mat-datepicker-calendar-date-disabled-state-text-color:rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-preview-state-outline-color:rgba(0, 0, 0, .24);--mat-datepicker-range-input-separator-color:rgba(0, 0, 0, .87);--mat-datepicker-range-input-disabled-state-separator-color:rgba(0, 0, 0, .38);--mat-datepicker-range-input-disabled-state-text-color:rgba(0, 0, 0, .38);--mat-datepicker-calendar-container-background-color:white;--mat-datepicker-calendar-container-text-color:rgba(0, 0, 0, .87)}.mat-datepicker-content.mat-accent{--mat-datepicker-calendar-date-selected-state-text-color:rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-selected-state-background-color:#ffd740;--mat-datepicker-calendar-date-selected-disabled-state-background-color:rgba(255, 215, 64, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color:rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-focus-state-background-color:rgba(255, 215, 64, .3);--mat-datepicker-calendar-date-hover-state-background-color:rgba(255, 215, 64, .3);--mat-datepicker-calendar-date-in-range-state-background-color:rgba(255, 215, 64, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color:rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color:#a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color:#46a35e}.mat-datepicker-content.mat-warn{--mat-datepicker-calendar-date-selected-state-text-color:white;--mat-datepicker-calendar-date-selected-state-background-color:#f44336;--mat-datepicker-calendar-date-selected-disabled-state-background-color:rgba(244, 67, 54, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color:white;--mat-datepicker-calendar-date-focus-state-background-color:rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-hover-state-background-color:rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-in-range-state-background-color:rgba(244, 67, 54, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color:rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color:#a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color:#46a35e}.mat-datepicker-toggle-active.mat-accent{--mat-datepicker-toggle-active-state-icon-color:#ffd740}.mat-datepicker-toggle-active.mat-warn{--mat-datepicker-toggle-active-state-icon-color:#f44336}.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base{--mdc-icon-button-state-layer-size:40px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:8px}.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base .mat-mdc-button-touch-target{display:none}html{--mat-datepicker-calendar-text-font:Roboto, sans-serif;--mat-datepicker-calendar-text-size:13px;--mat-datepicker-calendar-body-label-text-size:14px;--mat-datepicker-calendar-body-label-text-weight:500;--mat-datepicker-calendar-period-button-text-size:14px;--mat-datepicker-calendar-period-button-text-weight:500;--mat-datepicker-calendar-header-text-size:11px;--mat-datepicker-calendar-header-text-weight:400}html{--mat-divider-color:rgba(0, 0, 0, .12)}html{--mat-expansion-container-background-color:white;--mat-expansion-container-text-color:rgba(0, 0, 0, .87);--mat-expansion-actions-divider-color:rgba(0, 0, 0, .12);--mat-expansion-header-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-expansion-header-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-expansion-header-disabled-state-text-color:rgba(0, 0, 0, .26);--mat-expansion-header-text-color:rgba(0, 0, 0, .87);--mat-expansion-header-description-color:rgba(0, 0, 0, .54);--mat-expansion-header-indicator-color:rgba(0, 0, 0, .54)}html{--mat-expansion-header-collapsed-state-height:48px;--mat-expansion-header-expanded-state-height:64px}html{--mat-expansion-header-text-font:Roboto, sans-serif;--mat-expansion-header-text-size:14px;--mat-expansion-header-text-weight:500;--mat-expansion-header-text-line-height:inherit;--mat-expansion-header-text-tracking:inherit;--mat-expansion-container-text-font:Roboto, sans-serif;--mat-expansion-container-text-line-height:20px;--mat-expansion-container-text-size:14px;--mat-expansion-container-text-tracking:.0178571429em;--mat-expansion-container-text-weight:400}html{--mat-grid-list-tile-header-primary-text-size:14px;--mat-grid-list-tile-header-secondary-text-size:12px;--mat-grid-list-tile-footer-primary-text-size:14px;--mat-grid-list-tile-footer-secondary-text-size:12px}html{--mat-icon-color:inherit}.mat-icon.mat-primary{--mat-icon-color:#673ab7}.mat-icon.mat-accent{--mat-icon-color:#ffd740}.mat-icon.mat-warn{--mat-icon-color:#f44336}html{--mat-sidenav-container-divider-color:rgba(0, 0, 0, .12);--mat-sidenav-container-background-color:white;--mat-sidenav-container-text-color:rgba(0, 0, 0, .87);--mat-sidenav-content-background-color:#fafafa;--mat-sidenav-content-text-color:rgba(0, 0, 0, .87);--mat-sidenav-scrim-color:rgba(0, 0, 0, .6)}html{--mat-stepper-header-icon-foreground-color:white;--mat-stepper-header-selected-state-icon-background-color:#673ab7;--mat-stepper-header-selected-state-icon-foreground-color:white;--mat-stepper-header-done-state-icon-background-color:#673ab7;--mat-stepper-header-done-state-icon-foreground-color:white;--mat-stepper-header-edit-state-icon-background-color:#673ab7;--mat-stepper-header-edit-state-icon-foreground-color:white;--mat-stepper-container-color:white;--mat-stepper-line-color:rgba(0, 0, 0, .12);--mat-stepper-header-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-stepper-header-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-stepper-header-label-text-color:rgba(0, 0, 0, .54);--mat-stepper-header-optional-label-text-color:rgba(0, 0, 0, .54);--mat-stepper-header-selected-state-label-text-color:rgba(0, 0, 0, .87);--mat-stepper-header-error-state-label-text-color:#f44336;--mat-stepper-header-icon-background-color:rgba(0, 0, 0, .54);--mat-stepper-header-error-state-icon-foreground-color:#f44336;--mat-stepper-header-error-state-icon-background-color:transparent}html .mat-step-header.mat-accent{--mat-stepper-header-icon-foreground-color:rgba(0, 0, 0, .87);--mat-stepper-header-selected-state-icon-background-color:#ffd740;--mat-stepper-header-selected-state-icon-foreground-color:rgba(0, 0, 0, .87);--mat-stepper-header-done-state-icon-background-color:#ffd740;--mat-stepper-header-done-state-icon-foreground-color:rgba(0, 0, 0, .87);--mat-stepper-header-edit-state-icon-background-color:#ffd740;--mat-stepper-header-edit-state-icon-foreground-color:rgba(0, 0, 0, .87)}html .mat-step-header.mat-warn{--mat-stepper-header-icon-foreground-color:white;--mat-stepper-header-selected-state-icon-background-color:#f44336;--mat-stepper-header-selected-state-icon-foreground-color:white;--mat-stepper-header-done-state-icon-background-color:#f44336;--mat-stepper-header-done-state-icon-foreground-color:white;--mat-stepper-header-edit-state-icon-background-color:#f44336;--mat-stepper-header-edit-state-icon-foreground-color:white}html{--mat-stepper-header-height:72px}html{--mat-stepper-container-text-font:Roboto, sans-serif;--mat-stepper-header-label-text-font:Roboto, sans-serif;--mat-stepper-header-label-text-size:14px;--mat-stepper-header-label-text-weight:400;--mat-stepper-header-error-state-label-text-size:16px;--mat-stepper-header-selected-state-label-text-size:16px;--mat-stepper-header-selected-state-label-text-weight:400}.mat-sort-header-arrow{color:#757575}html{--mat-toolbar-container-background-color:whitesmoke;--mat-toolbar-container-text-color:rgba(0, 0, 0, .87)}.mat-toolbar.mat-primary{--mat-toolbar-container-background-color:#673ab7;--mat-toolbar-container-text-color:white}.mat-toolbar.mat-accent{--mat-toolbar-container-background-color:#ffd740;--mat-toolbar-container-text-color:rgba(0, 0, 0, .87)}.mat-toolbar.mat-warn{--mat-toolbar-container-background-color:#f44336;--mat-toolbar-container-text-color:white}html{--mat-toolbar-standard-height:64px;--mat-toolbar-mobile-height:56px}html{--mat-toolbar-title-text-font:Roboto, sans-serif;--mat-toolbar-title-text-line-height:32px;--mat-toolbar-title-text-size:20px;--mat-toolbar-title-text-tracking:.0125em;--mat-toolbar-title-text-weight:500}.mat-tree{background:#fff}.mat-tree-node,.mat-nested-tree-node{color:#000000de}.mat-tree-node{min-height:48px}.mat-tree{font-family:Roboto,sans-serif}.mat-tree-node,.mat-nested-tree-node{font-weight:400;font-size:14px}.mat-h1,.mat-headline-5,.mat-typography .mat-h1,.mat-typography .mat-headline-5,.mat-typography h1{font-size:24px;font-weight:400;line-height:32px;font-family:Roboto,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-headline-6,.mat-typography .mat-h2,.mat-typography .mat-headline-6,.mat-typography h2{font-size:20px;font-weight:500;line-height:32px;font-family:Roboto,sans-serif;letter-spacing:.0125em;margin:0 0 16px}.mat-h3,.mat-subtitle-1,.mat-typography .mat-h3,.mat-typography .mat-subtitle-1,.mat-typography h3{font-size:16px;font-weight:400;line-height:28px;font-family:Roboto,sans-serif;letter-spacing:.009375em;margin:0 0 16px}.mat-h4,.mat-body-1,.mat-typography .mat-h4,.mat-typography .mat-body-1,.mat-typography h4{font-size:16px;font-weight:400;line-height:24px;font-family:Roboto,sans-serif;letter-spacing:.03125em;margin:0 0 16px}.mat-h5,.mat-typography .mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography .mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,sans-serif;margin:0 0 12px}.mat-body-strong,.mat-subtitle-2,.mat-typography .mat-body-strong,.mat-typography .mat-subtitle-2{font-size:14px;font-weight:500;line-height:22px;font-family:Roboto,sans-serif;letter-spacing:.0071428571em}.mat-body,.mat-body-2,.mat-typography .mat-body,.mat-typography .mat-body-2,.mat-typography{font-size:14px;font-weight:400;line-height:20px;font-family:Roboto,sans-serif;letter-spacing:.0178571429em}.mat-body p,.mat-body-2 p,.mat-typography .mat-body p,.mat-typography .mat-body-2 p,.mat-typography p{margin:0 0 12px}.mat-small,.mat-caption,.mat-typography .mat-small,.mat-typography .mat-caption{font-size:12px;font-weight:400;line-height:20px;font-family:Roboto,sans-serif;letter-spacing:.0333333333em}.mat-headline-1,.mat-typography .mat-headline-1{font-size:96px;font-weight:300;line-height:96px;font-family:Roboto,sans-serif;letter-spacing:-.015625em;margin:0 0 56px}.mat-headline-2,.mat-typography .mat-headline-2{font-size:60px;font-weight:300;line-height:60px;font-family:Roboto,sans-serif;letter-spacing:-.0083333333em;margin:0 0 64px}.mat-headline-3,.mat-typography .mat-headline-3{font-size:48px;font-weight:400;line-height:50px;font-family:Roboto,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-headline-4,.mat-typography .mat-headline-4{font-size:34px;font-weight:400;line-height:40px;font-family:Roboto,sans-serif;letter-spacing:.0073529412em;margin:0 0 64px}.m-course-player .m-course-player__popup{display:flex;align-items:center;margin-top:10px;min-height:50px}.m-course-player .m-course-player__popup__text{color:gray;font-weight:700;padding-left:10px;padding-right:10px;margin:0}.m-course-player .m-course-player__popup__button{outline:none!important;cursor:pointer;display:inline-flex;justify-content:center;align-items:center;height:26px;width:38px}.m-course-player .m-course-player__popup__button:hover{border:none!important}.m-course-player .m-course-player__popup__button:hover .m-course-player__popup__button__image{max-width:14px}.m-course-player .m-course-player__popup__button__image{display:block;height:auto;max-width:17px}.m-course-player--1 .m-course-player-modal__header{color:#fff;background:#5d448e}.m-course-player--1 .m-course-player__popup__button:hover{background:#7457ae!important}.m-course-player--2 .m-course-player-modal__header{color:#fff;background:#995730}.m-course-player--2 .m-course-player__popup__button:hover{background:#c06d3c!important}.m-course-player--3 .m-course-player-modal__header{color:#fff;background:#547b9b}.m-course-player--3 .m-course-player__popup__button:hover{background:#7094b2!important}.m-course-player--4 .m-course-player-modal__header{color:#fff;background:#2c7769}.m-course-player--4 .m-course-player__popup__button:hover{background:#3a9c8a!important}.m-course-player--5 .m-course-player-modal__header{color:#fff;background:#69944a}.m-course-player--5 .m-course-player__popup__button:hover{background:#82b061!important}.m-course-player--6 .m-course-player-modal__header{color:#fff;background:#813359}.m-course-player--6 .m-course-player__popup__button:hover{background:#a64172!important}.m-course-player--7 .m-course-player-modal__header{color:#fff;background:#856b53}.m-course-player--7 .m-course-player__popup__button:hover{background:#a28469!important}.m-course-player--8 .m-course-player-modal__header{color:#fff;background:#914a74}.m-course-player--8 .m-course-player__popup__button:hover{background:#ae608e!important}.m-course-player--9 .m-course-player-modal__header{color:#fff;background:#443e80}.m-course-player--9 .m-course-player__popup__button:hover{background:#564fa2!important}\n"],
                        encapsulation: 2
                    }),
                    d
                })();
            var re = n(1670),
                _ = n(7147),
                p = function (o) {
                    return o[o.TRUE_OR_FALSE = 1] = "TRUE_OR_FALSE",
                    o[o.MULTIPLE_CHOICE = 2] = "MULTIPLE_CHOICE",
                    o[o.MULTIPLE_RESPONSE = 3] = "MULTIPLE_RESPONSE",
                    o[o.FILL_THE_BLANK = 4] = "FILL_THE_BLANK",
                    o[o.WORD_BANK = 5] = "WORD_BANK",
                    o[o.MATCHING_DRAG_AND_DROP = 6] = "MATCHING_DRAG_AND_DROP",
                    o[o.MATCHING_DROPDOWN = 7] = "MATCHING_DROPDOWN",
                    o[o.SEQUENCE_DRAG_AND_DROP = 8] = "SEQUENCE_DRAG_AND_DROP",
                    o[o.SEQUENCE_DROPDOWN = 9] = "SEQUENCE_DROPDOWN",
                    o[o.NUMERIC = 10] = "NUMERIC",
                    o[o.HOTSPOT = 11] = "HOTSPOT",
                    o
                }(p || {}),
                R = n(9074);
            const W = ["questionTypeComponent"];
            function J(o, d) {}
            let G = (() => {
                var o;
                class d {
                    constructor(r, a) {
                        this._courseService = r,
                        this._snackBar = a,
                        this.preview = !1,
                        this.sendAnswer = new e.vpe,
                        this.buttonText = "Submit answer",
                        this.responseData = {},
                        this.userResponse = {},
                        this._components = new Map,
                        this.CourseQuestionTypeEnum = p
                    }
                    ngOnInit() {
                        this.loadDynamicallyQuestion()
                    }
                    ngOnChanges() {
                        this.loadDynamicallyQuestion()
                    }
                    loadDynamicallyQuestion() {
                        var r = this;
                        return(0, re.Z)(function*() {
                            const a = r.content ?. type.replace(/_/g, "-").replace(/\s/g, "-").toLowerCase(),
                                Z = `CoursePlayerQuestion${
                                    r.content ?. type.split(" ").map(de => de.charAt(0).toUpperCase() + de.slice(1)).join("")
                                }Component`,
                                me = yield n(4015)(`./${a}/${a}.component`);
                            r._questionTypeComponent ?. clear();
                            const te = r._questionTypeComponent.createComponent(me[Z]),
                                be = {
                                    ... r.content
                                };
                            be.question = be.question ?. replace(/\$+(.+?)\$+/g, de => _.Z.renderToString(de.replace(/\$/g, "") || "", {
                                throwOnError: !1
                            })),
                            Array.isArray(be.variants) && (be.variants = be.variants.map(de => {
                                if ("string" == typeof de) {
                                    const ze = document.createElement("textarea");
                                    return ze.innerText = de,
                                    ze.innerHTML
                                }
                                return de
                            })),
                            te.setInput("buttonText", r.buttonText),
                            te.setInput("preview", r.preview),
                            te.setInput("data", be),
                            te.instance.sendAnswer.subscribe(de => {
                                r.submitQuestion(de)
                            }),
                            r.id && (te.setInput("responseData", r.responseData[r.id]), te.setInput("userResponse", r.userResponse[r.id]), r._components.set(r.id, te))
                        })()
                    }
                    submitQuestion(r) {
                        const a = r.get("response") ?. value;
                        if (this.id && (!Array.isArray(a) && null !== a || Array.isArray(a) && a.join("").length > 0)) {
                            let B = a;
                            if (Array.isArray(a) && (B = a.map(Z => {
                                if ("string" == typeof Z) {
                                    const me = document.createElement("textarea");
                                    return me.innerHTML = Z,
                                    me.value
                                }
                                return Z
                            })), "string" == typeof a) {
                                const Z = document.createElement("textarea");
                                Z.innerHTML = a,
                                B = Z.value
                            }
                            this._courseService.checkQuestion(this.id, B).subscribe(Z => {
                                let me = null;
                                if (Array.isArray(Z.data.correct_answer)) 
                                    me = Z.data.correct_answer.map(te => te.answer ? te.anwser : te);
                                 else {
                                    const te = Z.data.correct_answer;
                                    null != te && (me =[], me.push(te.answer ? te.answer : te))
                                }
                                this.responseData[Z.data.id] = {
                                    correct: Z.data.result,
                                    correct_answer: me,
                                    feedback_correct: Z.data.feedback_correct,
                                    feedback_incorrect: Z.data.feedback_incorrect
                                },
                                this.userResponse[Z.data.id] = a,
                                this._components.get(Z.data.id) ?. setInput("responseData", this.responseData[Z.data.id]),
                                this._components.get(Z.data.id) ?. setInput("submitForm", !0)
                            }),
                            this.sendAnswer.emit({responseData: this.responseData, userResponse: this.userResponse})
                        } else 
                            this._snackBar.open("Please enter your response", void 0, {
                                verticalPosition: "top",
                                horizontalPosition: "center",
                                duration: 2e3
                            }),
                            this.sendAnswer.emit({responseData: this.responseData, userResponse: this.userResponse})
                        
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.Y36(b.N), e.Y36(R.pl))
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-question"]
                    ],
                    viewQuery: function (r, a) {
                        if (1 & r && e.Gf(W, 5, e.s_b), 2 & r) {
                            let B;
                            e.iGM(B = e.CRH()) && (a._questionTypeComponent = B.first)
                        }
                    },
                    inputs: {
                        content: "content",
                        id: "id",
                        preview: "preview",
                        buttonText: "buttonText",
                        responseData: "responseData",
                        userResponse: "userResponse"
                    },
                    outputs: {
                        sendAnswer: "sendAnswer"
                    },
                    features: [e.TTD],
                    decls: 3,
                    vars: 1,
                    consts: [
                        [
                            1, "m-course-player__question"
                        ],
                        [
                            "questionTypeComponent", ""
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.TgZ(0, "div", 0), e.YNc(1, J, 0, 0, "ng-template", null, 1, e.W1O), e.qZA()),
                        2 & r && e.uIk("data-question-id", a.id)
                    },
                    styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale3d(0,0,0)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;inset:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0!important;box-sizing:content-box!important;height:0!important}@keyframes cdk-text-field-autofill-start{}@keyframes cdk-text-field-autofill-end{}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}.mat-focus-indicator{position:relative}.mat-focus-indicator:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border:var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus:before{content:\"\"}.cdk-high-contrast-active{--mat-focus-indicator-display: block}.mat-mdc-focus-indicator{position:relative}.mat-mdc-focus-indicator:before{inset:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-mdc-focus-indicator-display, none);border:var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);border-radius:var(--mat-mdc-focus-indicator-border-radius, 4px)}.mat-mdc-focus-indicator:focus:before{content:\"\"}.cdk-high-contrast-active{--mat-mdc-focus-indicator-display: block}.mat-ripple-element{background-color:#0000001a}html{--mat-option-selected-state-label-text-color:#673ab7;--mat-option-label-text-color:rgba(0, 0, 0, .87);--mat-option-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-option-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-option-selected-state-layer-color:rgba(0, 0, 0, .04)}.mat-accent{--mat-option-selected-state-label-text-color:#ffd740}.mat-warn{--mat-option-selected-state-label-text-color:#f44336}html{--mat-optgroup-label-text-color:rgba(0, 0, 0, .87)}.mat-pseudo-checkbox-full{color:#0000008a}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{color:#b0b0b0}.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#673ab7}.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#673ab7}.mat-primary .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-primary .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#ffd740}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#ffd740}.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#ffd740}.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#ffd740}.mat-accent .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-accent .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#f44336}.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#f44336}.mat-warn .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full:after,.mat-warn .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full:after{color:#fafafa}.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-minimal:after,.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-minimal:after{color:#b0b0b0}.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-full,.mat-pseudo-checkbox-disabled.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-full{background:#b0b0b0}.mat-app-background{background-color:#fafafa;color:#000000de}.mat-elevation-z0,.mat-mdc-elevation-specific.mat-elevation-z0{box-shadow:0 0 #0003,0 0 #00000024,0 0 #0000001f}.mat-elevation-z1,.mat-mdc-elevation-specific.mat-elevation-z1{box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}.mat-elevation-z2,.mat-mdc-elevation-specific.mat-elevation-z2{box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f}.mat-elevation-z3,.mat-mdc-elevation-specific.mat-elevation-z3{box-shadow:0 3px 3px -2px #0003,0 3px 4px #00000024,0 1px 8px #0000001f}.mat-elevation-z4,.mat-mdc-elevation-specific.mat-elevation-z4{box-shadow:0 2px 4px -1px #0003,0 4px 5px #00000024,0 1px 10px #0000001f}.mat-elevation-z5,.mat-mdc-elevation-specific.mat-elevation-z5{box-shadow:0 3px 5px -1px #0003,0 5px 8px #00000024,0 1px 14px #0000001f}.mat-elevation-z6,.mat-mdc-elevation-specific.mat-elevation-z6{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}.mat-elevation-z7,.mat-mdc-elevation-specific.mat-elevation-z7{box-shadow:0 4px 5px -2px #0003,0 7px 10px 1px #00000024,0 2px 16px 1px #0000001f}.mat-elevation-z8,.mat-mdc-elevation-specific.mat-elevation-z8{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.mat-elevation-z9,.mat-mdc-elevation-specific.mat-elevation-z9{box-shadow:0 5px 6px -3px #0003,0 9px 12px 1px #00000024,0 3px 16px 2px #0000001f}.mat-elevation-z10,.mat-mdc-elevation-specific.mat-elevation-z10{box-shadow:0 6px 6px -3px #0003,0 10px 14px 1px #00000024,0 4px 18px 3px #0000001f}.mat-elevation-z11,.mat-mdc-elevation-specific.mat-elevation-z11{box-shadow:0 6px 7px -4px #0003,0 11px 15px 1px #00000024,0 4px 20px 3px #0000001f}.mat-elevation-z12,.mat-mdc-elevation-specific.mat-elevation-z12{box-shadow:0 7px 8px -4px #0003,0 12px 17px 2px #00000024,0 5px 22px 4px #0000001f}.mat-elevation-z13,.mat-mdc-elevation-specific.mat-elevation-z13{box-shadow:0 7px 8px -4px #0003,0 13px 19px 2px #00000024,0 5px 24px 4px #0000001f}.mat-elevation-z14,.mat-mdc-elevation-specific.mat-elevation-z14{box-shadow:0 7px 9px -4px #0003,0 14px 21px 2px #00000024,0 5px 26px 4px #0000001f}.mat-elevation-z15,.mat-mdc-elevation-specific.mat-elevation-z15{box-shadow:0 8px 9px -5px #0003,0 15px 22px 2px #00000024,0 6px 28px 5px #0000001f}.mat-elevation-z16,.mat-mdc-elevation-specific.mat-elevation-z16{box-shadow:0 8px 10px -5px #0003,0 16px 24px 2px #00000024,0 6px 30px 5px #0000001f}.mat-elevation-z17,.mat-mdc-elevation-specific.mat-elevation-z17{box-shadow:0 8px 11px -5px #0003,0 17px 26px 2px #00000024,0 6px 32px 5px #0000001f}.mat-elevation-z18,.mat-mdc-elevation-specific.mat-elevation-z18{box-shadow:0 9px 11px -5px #0003,0 18px 28px 2px #00000024,0 7px 34px 6px #0000001f}.mat-elevation-z19,.mat-mdc-elevation-specific.mat-elevation-z19{box-shadow:0 9px 12px -6px #0003,0 19px 29px 2px #00000024,0 7px 36px 6px #0000001f}.mat-elevation-z20,.mat-mdc-elevation-specific.mat-elevation-z20{box-shadow:0 10px 13px -6px #0003,0 20px 31px 3px #00000024,0 8px 38px 7px #0000001f}.mat-elevation-z21,.mat-mdc-elevation-specific.mat-elevation-z21{box-shadow:0 10px 13px -6px #0003,0 21px 33px 3px #00000024,0 8px 40px 7px #0000001f}.mat-elevation-z22,.mat-mdc-elevation-specific.mat-elevation-z22{box-shadow:0 10px 14px -6px #0003,0 22px 35px 3px #00000024,0 8px 42px 7px #0000001f}.mat-elevation-z23,.mat-mdc-elevation-specific.mat-elevation-z23{box-shadow:0 11px 14px -7px #0003,0 23px 36px 3px #00000024,0 9px 44px 8px #0000001f}.mat-elevation-z24,.mat-mdc-elevation-specific.mat-elevation-z24{box-shadow:0 11px 15px -7px #0003,0 24px 38px 3px #00000024,0 9px 46px 8px #0000001f}.mat-theme-loaded-marker{display:none}html{--mat-option-label-text-font:Roboto, sans-serif;--mat-option-label-text-line-height:24px;--mat-option-label-text-size:16px;--mat-option-label-text-tracking:.03125em;--mat-option-label-text-weight:400}html{--mat-optgroup-label-text-font:Roboto, sans-serif;--mat-optgroup-label-text-line-height:24px;--mat-optgroup-label-text-size:16px;--mat-optgroup-label-text-tracking:.03125em;--mat-optgroup-label-text-weight:400}.mat-mdc-card{--mdc-elevated-card-container-color:white;--mdc-elevated-card-container-elevation:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-outlined-card-container-color:white;--mdc-outlined-card-outline-color:rgba(0, 0, 0, .12);--mdc-outlined-card-container-elevation:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mat-card-subtitle-text-color:rgba(0, 0, 0, .54)}.mat-mdc-card{--mat-card-title-text-font:Roboto, sans-serif;--mat-card-title-text-line-height:32px;--mat-card-title-text-size:20px;--mat-card-title-text-tracking:.0125em;--mat-card-title-text-weight:500;--mat-card-subtitle-text-font:Roboto, sans-serif;--mat-card-subtitle-text-line-height:22px;--mat-card-subtitle-text-size:14px;--mat-card-subtitle-text-tracking:.0071428571em;--mat-card-subtitle-text-weight:500}.mat-mdc-progress-bar{--mdc-linear-progress-active-indicator-color:#673ab7;--mdc-linear-progress-track-color:rgba(103, 58, 183, .25)}.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots{background-color:#673ab740;background-color:var(--mdc-linear-progress-track-color, rgba(103, 58, 183, .25))}@media (forced-colors: active){.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mat-mdc-progress-bar .mdc-linear-progress__buffer-dots{background-color:#0000;background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(103, 58, 183, 0.25)'/%3E%3C/svg%3E\")}}.mat-mdc-progress-bar .mdc-linear-progress__buffer-bar{background-color:#673ab740;background-color:var(--mdc-linear-progress-track-color, rgba(103, 58, 183, .25))}.mat-mdc-progress-bar.mat-accent{--mdc-linear-progress-active-indicator-color:#ffd740;--mdc-linear-progress-track-color:rgba(255, 215, 64, .25)}.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots{background-color:#ffd74040;background-color:var(--mdc-linear-progress-track-color, rgba(255, 215, 64, .25))}@media (forced-colors: active){.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-dots{background-color:#0000;background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(255, 215, 64, 0.25)'/%3E%3C/svg%3E\")}}.mat-mdc-progress-bar.mat-accent .mdc-linear-progress__buffer-bar{background-color:#ffd74040;background-color:var(--mdc-linear-progress-track-color, rgba(255, 215, 64, .25))}.mat-mdc-progress-bar.mat-warn{--mdc-linear-progress-active-indicator-color:#f44336;--mdc-linear-progress-track-color:rgba(244, 67, 54, .25)}@keyframes mdc-linear-progress-buffering{}.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots{background-color:#f4433640;background-color:var(--mdc-linear-progress-track-color, rgba(244, 67, 54, .25))}@media (forced-colors: active){.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}@media all and (-ms-high-contrast: none),(-ms-high-contrast: active){.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-dots{background-color:#0000;background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(244, 67, 54, 0.25)'/%3E%3C/svg%3E\")}}.mat-mdc-progress-bar.mat-warn .mdc-linear-progress__buffer-bar{background-color:#f4433640;background-color:var(--mdc-linear-progress-track-color, rgba(244, 67, 54, .25))}.mat-mdc-tooltip{--mdc-plain-tooltip-container-color:#616161;--mdc-plain-tooltip-supporting-text-color:#fff}.mat-mdc-tooltip{--mdc-plain-tooltip-supporting-text-font:Roboto, sans-serif;--mdc-plain-tooltip-supporting-text-size:12px;--mdc-plain-tooltip-supporting-text-weight:400;--mdc-plain-tooltip-supporting-text-tracking:.0333333333em}html{--mdc-filled-text-field-caret-color:#673ab7;--mdc-filled-text-field-focus-active-indicator-color:#673ab7;--mdc-filled-text-field-focus-label-text-color:rgba(103, 58, 183, .87);--mdc-filled-text-field-container-color:whitesmoke;--mdc-filled-text-field-disabled-container-color:#fafafa;--mdc-filled-text-field-label-text-color:rgba(0, 0, 0, .6);--mdc-filled-text-field-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-color:rgba(0, 0, 0, .87);--mdc-filled-text-field-disabled-input-text-color:rgba(0, 0, 0, .38);--mdc-filled-text-field-input-text-placeholder-color:rgba(0, 0, 0, .6);--mdc-filled-text-field-error-focus-label-text-color:#f44336;--mdc-filled-text-field-error-label-text-color:#f44336;--mdc-filled-text-field-error-caret-color:#f44336;--mdc-filled-text-field-active-indicator-color:rgba(0, 0, 0, .42);--mdc-filled-text-field-disabled-active-indicator-color:rgba(0, 0, 0, .06);--mdc-filled-text-field-hover-active-indicator-color:rgba(0, 0, 0, .87);--mdc-filled-text-field-error-active-indicator-color:#f44336;--mdc-filled-text-field-error-focus-active-indicator-color:#f44336;--mdc-filled-text-field-error-hover-active-indicator-color:#f44336;--mdc-outlined-text-field-caret-color:#673ab7;--mdc-outlined-text-field-focus-outline-color:#673ab7;--mdc-outlined-text-field-focus-label-text-color:rgba(103, 58, 183, .87);--mdc-outlined-text-field-label-text-color:rgba(0, 0, 0, .6);--mdc-outlined-text-field-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-color:rgba(0, 0, 0, .87);--mdc-outlined-text-field-disabled-input-text-color:rgba(0, 0, 0, .38);--mdc-outlined-text-field-input-text-placeholder-color:rgba(0, 0, 0, .6);--mdc-outlined-text-field-error-caret-color:#f44336;--mdc-outlined-text-field-error-focus-label-text-color:#f44336;--mdc-outlined-text-field-error-label-text-color:#f44336;--mdc-outlined-text-field-outline-color:rgba(0, 0, 0, .38);--mdc-outlined-text-field-disabled-outline-color:rgba(0, 0, 0, .06);--mdc-outlined-text-field-hover-outline-color:rgba(0, 0, 0, .87);--mdc-outlined-text-field-error-focus-outline-color:#f44336;--mdc-outlined-text-field-error-hover-outline-color:#f44336;--mdc-outlined-text-field-error-outline-color:#f44336;--mat-form-field-disabled-input-text-placeholder-color:rgba(0, 0, 0, .38)}.mat-mdc-form-field-error{color:var(--mdc-theme-error, #f44336)}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align:before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font);line-height:var(--mat-form-field-subscript-text-line-height);font-size:var(--mat-form-field-subscript-text-size);letter-spacing:var(--mat-form-field-subscript-text-tracking);font-weight:var(--mat-form-field-subscript-text-weight)}.mat-mdc-form-field-focus-overlay{background-color:#000000de}.mat-mdc-form-field:hover .mat-mdc-form-field-focus-overlay{opacity:.04}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:.12}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix:after{color:#0000008a}.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-primary .mat-mdc-form-field-infix:after{color:#673ab7de}.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-accent .mat-mdc-form-field-infix:after{color:#ffd740de}.mat-mdc-form-field-type-mat-native-select.mat-focused.mat-warn .mat-mdc-form-field-infix:after{color:#f44336de}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix:after{color:#00000061}.mat-mdc-form-field.mat-accent{--mdc-filled-text-field-caret-color:#ffd740;--mdc-filled-text-field-focus-active-indicator-color:#ffd740;--mdc-filled-text-field-focus-label-text-color:rgba(255, 215, 64, .87);--mdc-outlined-text-field-caret-color:#ffd740;--mdc-outlined-text-field-focus-outline-color:#ffd740;--mdc-outlined-text-field-focus-label-text-color:rgba(255, 215, 64, .87)}.mat-mdc-form-field.mat-warn{--mdc-filled-text-field-caret-color:#f44336;--mdc-filled-text-field-focus-active-indicator-color:#f44336;--mdc-filled-text-field-focus-label-text-color:rgba(244, 67, 54, .87);--mdc-outlined-text-field-caret-color:#f44336;--mdc-outlined-text-field-focus-outline-color:#f44336;--mdc-outlined-text-field-focus-label-text-color:rgba(244, 67, 54, .87)}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:56px}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:28px}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY( -34.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:16px;padding-bottom:16px}.mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{padding-top:24px;padding-bottom:8px}.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:16px;padding-bottom:16px}html{--mdc-filled-text-field-label-text-font:Roboto, sans-serif;--mdc-filled-text-field-label-text-size:16px;--mdc-filled-text-field-label-text-tracking:.03125em;--mdc-filled-text-field-label-text-weight:400;--mdc-outlined-text-field-label-text-font:Roboto, sans-serif;--mdc-outlined-text-field-label-text-size:16px;--mdc-outlined-text-field-label-text-tracking:.03125em;--mdc-outlined-text-field-label-text-weight:400;--mat-form-field-container-text-font:Roboto, sans-serif;--mat-form-field-container-text-line-height:24px;--mat-form-field-container-text-size:16px;--mat-form-field-container-text-tracking:.03125em;--mat-form-field-container-text-weight:400;--mat-form-field-outlined-label-text-populated-size:16px;--mat-form-field-subscript-text-font:Roboto, sans-serif;--mat-form-field-subscript-text-line-height:20px;--mat-form-field-subscript-text-size:12px;--mat-form-field-subscript-text-tracking:.0333333333em;--mat-form-field-subscript-text-weight:400}html{--mat-select-panel-background-color:white;--mat-select-enabled-trigger-text-color:rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color:rgba(0, 0, 0, .38);--mat-select-placeholder-text-color:rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color:rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color:rgba(0, 0, 0, .38);--mat-select-focused-arrow-color:rgba(103, 58, 183, .87);--mat-select-invalid-arrow-color:rgba(244, 67, 54, .87)}html .mat-mdc-form-field.mat-accent{--mat-select-panel-background-color:white;--mat-select-enabled-trigger-text-color:rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color:rgba(0, 0, 0, .38);--mat-select-placeholder-text-color:rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color:rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color:rgba(0, 0, 0, .38);--mat-select-focused-arrow-color:rgba(255, 215, 64, .87);--mat-select-invalid-arrow-color:rgba(244, 67, 54, .87)}html .mat-mdc-form-field.mat-warn{--mat-select-panel-background-color:white;--mat-select-enabled-trigger-text-color:rgba(0, 0, 0, .87);--mat-select-disabled-trigger-text-color:rgba(0, 0, 0, .38);--mat-select-placeholder-text-color:rgba(0, 0, 0, .6);--mat-select-enabled-arrow-color:rgba(0, 0, 0, .54);--mat-select-disabled-arrow-color:rgba(0, 0, 0, .38);--mat-select-focused-arrow-color:rgba(244, 67, 54, .87);--mat-select-invalid-arrow-color:rgba(244, 67, 54, .87)}html{--mat-select-trigger-text-font:Roboto, sans-serif;--mat-select-trigger-text-line-height:24px;--mat-select-trigger-text-size:16px;--mat-select-trigger-text-tracking:.03125em;--mat-select-trigger-text-weight:400}html{--mat-autocomplete-background-color:white}.mat-mdc-dialog-container{--mdc-dialog-container-color:white;--mdc-dialog-subhead-color:rgba(0, 0, 0, .87);--mdc-dialog-supporting-text-color:rgba(0, 0, 0, .6)}.mat-mdc-dialog-container{--mdc-dialog-subhead-font:Roboto, sans-serif;--mdc-dialog-subhead-line-height:32px;--mdc-dialog-subhead-size:20px;--mdc-dialog-subhead-weight:500;--mdc-dialog-subhead-tracking:.0125em;--mdc-dialog-supporting-text-font:Roboto, sans-serif;--mdc-dialog-supporting-text-line-height:24px;--mdc-dialog-supporting-text-size:16px;--mdc-dialog-supporting-text-weight:400;--mdc-dialog-supporting-text-tracking:.03125em}.mat-mdc-standard-chip{--mdc-chip-disabled-label-text-color:#212121;--mdc-chip-elevated-container-color:#e0e0e0;--mdc-chip-elevated-disabled-container-color:#e0e0e0;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:#212121;--mdc-chip-with-icon-icon-color:#212121;--mdc-chip-with-icon-disabled-icon-color:#212121;--mdc-chip-with-icon-selected-icon-color:#212121;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:#212121;--mdc-chip-with-trailing-icon-trailing-icon-color:#212121}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-primary,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-primary{--mdc-chip-disabled-label-text-color:white;--mdc-chip-elevated-container-color:#673ab7;--mdc-chip-elevated-disabled-container-color:#673ab7;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:white;--mdc-chip-with-icon-icon-color:white;--mdc-chip-with-icon-disabled-icon-color:white;--mdc-chip-with-icon-selected-icon-color:white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:white;--mdc-chip-with-trailing-icon-trailing-icon-color:white}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-accent,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-accent{--mdc-chip-disabled-label-text-color:rgba(0, 0, 0, .87);--mdc-chip-elevated-container-color:#ffd740;--mdc-chip-elevated-disabled-container-color:#ffd740;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:rgba(0, 0, 0, .87);--mdc-chip-with-icon-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-icon-disabled-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-icon-selected-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:rgba(0, 0, 0, .87);--mdc-chip-with-trailing-icon-trailing-icon-color:rgba(0, 0, 0, .87)}.mat-mdc-standard-chip.mat-mdc-chip-selected.mat-warn,.mat-mdc-standard-chip.mat-mdc-chip-highlighted.mat-warn{--mdc-chip-disabled-label-text-color:white;--mdc-chip-elevated-container-color:#f44336;--mdc-chip-elevated-disabled-container-color:#f44336;--mdc-chip-focus-state-layer-color:black;--mdc-chip-focus-state-layer-opacity:.12;--mdc-chip-label-text-color:white;--mdc-chip-with-icon-icon-color:white;--mdc-chip-with-icon-disabled-icon-color:white;--mdc-chip-with-icon-selected-icon-color:white;--mdc-chip-with-trailing-icon-disabled-trailing-icon-color:white;--mdc-chip-with-trailing-icon-trailing-icon-color:white}.mat-mdc-chip.mat-mdc-standard-chip{--mdc-chip-container-height:32px}.mat-mdc-standard-chip{--mdc-chip-label-text-font:Roboto, sans-serif;--mdc-chip-label-text-line-height:20px;--mdc-chip-label-text-size:14px;--mdc-chip-label-text-tracking:.0178571429em;--mdc-chip-label-text-weight:400}.mat-mdc-slide-toggle{--mdc-switch-selected-focus-state-layer-color:#5e35b1;--mdc-switch-selected-handle-color:#5e35b1;--mdc-switch-selected-hover-state-layer-color:#5e35b1;--mdc-switch-selected-pressed-state-layer-color:#5e35b1;--mdc-switch-selected-focus-handle-color:#311b92;--mdc-switch-selected-hover-handle-color:#311b92;--mdc-switch-selected-pressed-handle-color:#311b92;--mdc-switch-selected-focus-track-color:#9575cd;--mdc-switch-selected-hover-track-color:#9575cd;--mdc-switch-selected-pressed-track-color:#9575cd;--mdc-switch-selected-track-color:#9575cd;--mdc-switch-disabled-selected-handle-color:#424242;--mdc-switch-disabled-selected-icon-color:#fff;--mdc-switch-disabled-selected-track-color:#424242;--mdc-switch-disabled-unselected-handle-color:#424242;--mdc-switch-disabled-unselected-icon-color:#fff;--mdc-switch-disabled-unselected-track-color:#424242;--mdc-switch-handle-surface-color:var(--mdc-theme-surface, #fff);--mdc-switch-handle-elevation-shadow:0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12);--mdc-switch-handle-shadow-color:black;--mdc-switch-disabled-handle-elevation-shadow:0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);--mdc-switch-selected-icon-color:#fff;--mdc-switch-unselected-focus-handle-color:#212121;--mdc-switch-unselected-focus-state-layer-color:#424242;--mdc-switch-unselected-focus-track-color:#e0e0e0;--mdc-switch-unselected-handle-color:#616161;--mdc-switch-unselected-hover-handle-color:#212121;--mdc-switch-unselected-hover-state-layer-color:#424242;--mdc-switch-unselected-hover-track-color:#e0e0e0;--mdc-switch-unselected-icon-color:#fff;--mdc-switch-unselected-pressed-handle-color:#212121;--mdc-switch-unselected-pressed-state-layer-color:#424242;--mdc-switch-unselected-pressed-track-color:#e0e0e0;--mdc-switch-unselected-track-color:#e0e0e0}.mat-mdc-slide-toggle .mdc-form-field{color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mat-mdc-slide-toggle .mdc-switch--disabled+label{color:#00000061}.mat-mdc-slide-toggle.mat-accent{--mdc-switch-selected-focus-state-layer-color:#ffb300;--mdc-switch-selected-handle-color:#ffb300;--mdc-switch-selected-hover-state-layer-color:#ffb300;--mdc-switch-selected-pressed-state-layer-color:#ffb300;--mdc-switch-selected-focus-handle-color:#ff6f00;--mdc-switch-selected-hover-handle-color:#ff6f00;--mdc-switch-selected-pressed-handle-color:#ff6f00;--mdc-switch-selected-focus-track-color:#ffd54f;--mdc-switch-selected-hover-track-color:#ffd54f;--mdc-switch-selected-pressed-track-color:#ffd54f;--mdc-switch-selected-track-color:#ffd54f}.mat-mdc-slide-toggle.mat-warn{--mdc-switch-selected-focus-state-layer-color:#e53935;--mdc-switch-selected-handle-color:#e53935;--mdc-switch-selected-hover-state-layer-color:#e53935;--mdc-switch-selected-pressed-state-layer-color:#e53935;--mdc-switch-selected-focus-handle-color:#b71c1c;--mdc-switch-selected-hover-handle-color:#b71c1c;--mdc-switch-selected-pressed-handle-color:#b71c1c;--mdc-switch-selected-focus-track-color:#e57373;--mdc-switch-selected-hover-track-color:#e57373;--mdc-switch-selected-pressed-track-color:#e57373;--mdc-switch-selected-track-color:#e57373}.mat-mdc-slide-toggle{--mdc-switch-state-layer-size:48px}.mat-mdc-slide-toggle{--mat-slide-toggle-label-text-font:Roboto, sans-serif;--mat-slide-toggle-label-text-size:14px;--mat-slide-toggle-label-text-tracking:.0178571429em;--mat-slide-toggle-label-text-line-height:20px;--mat-slide-toggle-label-text-weight:400}.mat-mdc-slide-toggle .mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto,sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:.875rem;font-size:var(--mdc-typography-body2-font-size, .875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mat-mdc-radio-button .mdc-form-field{color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mat-mdc-radio-button.mat-primary{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#673ab7;--mdc-radio-selected-hover-icon-color:#673ab7;--mdc-radio-selected-icon-color:#673ab7;--mdc-radio-selected-pressed-icon-color:#673ab7;--mat-radio-ripple-color:#000;--mat-radio-checked-ripple-color:#673ab7;--mat-radio-disabled-label-color:rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-accent{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#ffd740;--mdc-radio-selected-hover-icon-color:#ffd740;--mdc-radio-selected-icon-color:#ffd740;--mdc-radio-selected-pressed-icon-color:#ffd740;--mat-radio-ripple-color:#000;--mat-radio-checked-ripple-color:#ffd740;--mat-radio-disabled-label-color:rgba(0, 0, 0, .38)}.mat-mdc-radio-button.mat-warn{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#f44336;--mdc-radio-selected-hover-icon-color:#f44336;--mdc-radio-selected-icon-color:#f44336;--mdc-radio-selected-pressed-icon-color:#f44336;--mat-radio-ripple-color:#000;--mat-radio-checked-ripple-color:#f44336;--mat-radio-disabled-label-color:rgba(0, 0, 0, .38)}.mat-mdc-radio-button .mdc-radio{--mdc-radio-state-layer-size:40px}.mat-mdc-radio-button .mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-body2-font-size, 14px);line-height:var(--mdc-typography-body2-line-height, 20px);font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:var(--mdc-typography-body2-text-transform, none)}.mat-mdc-slider{--mdc-slider-label-container-color:black;--mdc-slider-label-label-text-color:white;--mdc-slider-disabled-handle-color:#000;--mdc-slider-disabled-active-track-color:#000;--mdc-slider-disabled-inactive-track-color:#000;--mdc-slider-with-tick-marks-disabled-container-color:#000;--mat-mdc-slider-value-indicator-opacity: .6}.mat-mdc-slider.mat-primary{--mdc-slider-handle-color:#673ab7;--mdc-slider-focus-handle-color:#673ab7;--mdc-slider-hover-handle-color:#673ab7;--mdc-slider-active-track-color:#673ab7;--mdc-slider-inactive-track-color:#673ab7;--mdc-slider-with-tick-marks-active-container-color:#fff;--mdc-slider-with-tick-marks-inactive-container-color:#673ab7;--mat-mdc-slider-ripple-color: #673ab7;--mat-mdc-slider-hover-ripple-color: rgba(103, 58, 183, .05);--mat-mdc-slider-focus-ripple-color: rgba(103, 58, 183, .2)}.mat-mdc-slider.mat-accent{--mdc-slider-handle-color:#ffd740;--mdc-slider-focus-handle-color:#ffd740;--mdc-slider-hover-handle-color:#ffd740;--mdc-slider-active-track-color:#ffd740;--mdc-slider-inactive-track-color:#ffd740;--mdc-slider-with-tick-marks-active-container-color:#000;--mdc-slider-with-tick-marks-inactive-container-color:#ffd740;--mat-mdc-slider-ripple-color: #ffd740;--mat-mdc-slider-hover-ripple-color: rgba(255, 215, 64, .05);--mat-mdc-slider-focus-ripple-color: rgba(255, 215, 64, .2)}.mat-mdc-slider.mat-warn{--mdc-slider-handle-color:#f44336;--mdc-slider-focus-handle-color:#f44336;--mdc-slider-hover-handle-color:#f44336;--mdc-slider-active-track-color:#f44336;--mdc-slider-inactive-track-color:#f44336;--mdc-slider-with-tick-marks-active-container-color:#fff;--mdc-slider-with-tick-marks-inactive-container-color:#f44336;--mat-mdc-slider-ripple-color: #f44336;--mat-mdc-slider-hover-ripple-color: rgba(244, 67, 54, .05);--mat-mdc-slider-focus-ripple-color: rgba(244, 67, 54, .2)}.mat-mdc-slider{--mdc-slider-label-label-text-font:Roboto, sans-serif;--mdc-slider-label-label-text-size:14px;--mdc-slider-label-label-text-line-height:22px;--mdc-slider-label-label-text-tracking:.0071428571em;--mdc-slider-label-label-text-weight:500}html{--mat-menu-item-label-text-color:rgba(0, 0, 0, .87);--mat-menu-item-icon-color:rgba(0, 0, 0, .87);--mat-menu-item-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-menu-item-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-menu-container-color:white}html{--mat-menu-item-label-text-font:Roboto, sans-serif;--mat-menu-item-label-text-size:16px;--mat-menu-item-label-text-tracking:.03125em;--mat-menu-item-label-text-line-height:24px;--mat-menu-item-label-text-weight:400}.mat-mdc-list-base{--mdc-list-list-item-label-text-color:rgba(0, 0, 0, .87);--mdc-list-list-item-supporting-text-color:rgba(0, 0, 0, .54);--mdc-list-list-item-leading-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-supporting-text-color:rgba(0, 0, 0, .38);--mdc-list-list-item-trailing-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-selected-trailing-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-disabled-label-text-color:black;--mdc-list-list-item-disabled-leading-icon-color:black;--mdc-list-list-item-disabled-trailing-icon-color:black;--mdc-list-list-item-hover-label-text-color:rgba(0, 0, 0, .87);--mdc-list-list-item-hover-leading-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-hover-trailing-icon-color:rgba(0, 0, 0, .38);--mdc-list-list-item-focus-label-text-color:rgba(0, 0, 0, .87);--mdc-list-list-item-hover-state-layer-color:black;--mdc-list-list-item-hover-state-layer-opacity:.04;--mdc-list-list-item-focus-state-layer-color:black;--mdc-list-list-item-focus-state-layer-opacity:.12}.mdc-list-item__start,.mdc-list-item__end{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#673ab7;--mdc-radio-selected-hover-icon-color:#673ab7;--mdc-radio-selected-icon-color:#673ab7;--mdc-radio-selected-pressed-icon-color:#673ab7}.mat-accent .mdc-list-item__start,.mat-accent .mdc-list-item__end{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#ffd740;--mdc-radio-selected-hover-icon-color:#ffd740;--mdc-radio-selected-icon-color:#ffd740;--mdc-radio-selected-pressed-icon-color:#ffd740}.mat-warn .mdc-list-item__start,.mat-warn .mdc-list-item__end{--mdc-radio-disabled-selected-icon-color:#000;--mdc-radio-disabled-unselected-icon-color:#000;--mdc-radio-unselected-hover-icon-color:#212121;--mdc-radio-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-radio-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-radio-selected-focus-icon-color:#f44336;--mdc-radio-selected-hover-icon-color:#f44336;--mdc-radio-selected-icon-color:#f44336;--mdc-radio-selected-pressed-icon-color:#f44336}.mat-mdc-list-option{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#673ab7;--mdc-checkbox-selected-hover-icon-color:#673ab7;--mdc-checkbox-selected-icon-color:#673ab7;--mdc-checkbox-selected-pressed-icon-color:#673ab7;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#673ab7;--mdc-checkbox-selected-hover-state-layer-color:#673ab7;--mdc-checkbox-selected-pressed-state-layer-color:#673ab7;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-list-option.mat-accent{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#000;--mdc-checkbox-selected-focus-icon-color:#ffd740;--mdc-checkbox-selected-hover-icon-color:#ffd740;--mdc-checkbox-selected-icon-color:#ffd740;--mdc-checkbox-selected-pressed-icon-color:#ffd740;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#ffd740;--mdc-checkbox-selected-hover-state-layer-color:#ffd740;--mdc-checkbox-selected-pressed-state-layer-color:#ffd740;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-list-option.mat-warn{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#f44336;--mdc-checkbox-selected-hover-icon-color:#f44336;--mdc-checkbox-selected-icon-color:#f44336;--mdc-checkbox-selected-pressed-icon-color:#f44336;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#f44336;--mdc-checkbox-selected-hover-state-layer-color:#f44336;--mdc-checkbox-selected-pressed-state-layer-color:#f44336;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated .mdc-list-item__primary-text,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--selected.mdc-list-item--with-leading-icon .mdc-list-item__start,.mat-mdc-list-base.mat-mdc-list-base .mdc-list-item--activated.mdc-list-item--with-leading-icon .mdc-list-item__start{color:#673ab7}.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__content,.mat-mdc-list-base .mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mat-mdc-list-base{--mdc-list-list-item-one-line-container-height:48px;--mdc-list-list-item-two-line-container-height:64px;--mdc-list-list-item-three-line-container-height:88px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-one-line,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-one-line{height:56px}.mat-mdc-list-item.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines,.mat-mdc-list-item.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines{height:72px}.mat-mdc-list-base{--mdc-list-list-item-label-text-font:Roboto, sans-serif;--mdc-list-list-item-label-text-line-height:24px;--mdc-list-list-item-label-text-size:16px;--mdc-list-list-item-label-text-tracking:.03125em;--mdc-list-list-item-label-text-weight:400;--mdc-list-list-item-supporting-text-font:Roboto, sans-serif;--mdc-list-list-item-supporting-text-line-height:20px;--mdc-list-list-item-supporting-text-size:14px;--mdc-list-list-item-supporting-text-tracking:.0178571429em;--mdc-list-list-item-supporting-text-weight:400;--mdc-list-list-item-trailing-supporting-text-font:Roboto, sans-serif;--mdc-list-list-item-trailing-supporting-text-line-height:20px;--mdc-list-list-item-trailing-supporting-text-size:12px;--mdc-list-list-item-trailing-supporting-text-tracking:.0333333333em;--mdc-list-list-item-trailing-supporting-text-weight:400}.mdc-list-group__subheader{font-size:16px;font-weight:400;line-height:28px;font-family:Roboto,sans-serif;letter-spacing:.009375em}html{--mat-paginator-container-text-color:rgba(0, 0, 0, .87);--mat-paginator-container-background-color:white;--mat-paginator-enabled-icon-color:rgba(0, 0, 0, .54);--mat-paginator-disabled-icon-color:rgba(0, 0, 0, .12)}html{--mat-paginator-container-size:56px}.mat-mdc-paginator .mat-mdc-form-field-infix{min-height:40px}.mat-mdc-paginator .mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:20px}.mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY( -26.75px) scale(var(--mat-mdc-form-field-floating-label-scale, .75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-paginator .mat-mdc-text-field-wrapper.mdc-text-field--outlined .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}.mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}.mat-mdc-paginator .mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mat-mdc-form-field-infix{padding-top:8px;padding-bottom:8px}.mat-mdc-paginator .mat-mdc-text-field-wrapper:not(.mdc-text-field--outlined) .mat-mdc-floating-label{display:none}html{--mat-paginator-container-text-font:Roboto, sans-serif;--mat-paginator-container-text-line-height:20px;--mat-paginator-container-text-size:12px;--mat-paginator-container-text-tracking:.0333333333em;--mat-paginator-container-text-weight:400;--mat-paginator-select-trigger-text-size:12px}.mat-mdc-tab-group,.mat-mdc-tab-nav-bar{--mdc-tab-indicator-active-indicator-color:#673ab7;--mat-tab-header-disabled-ripple-color:rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color:#000;--mat-tab-header-inactive-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color:#673ab7;--mat-tab-header-active-ripple-color:#673ab7;--mat-tab-header-inactive-ripple-color:#673ab7;--mat-tab-header-inactive-focus-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color:#673ab7;--mat-tab-header-active-hover-label-text-color:#673ab7;--mat-tab-header-active-focus-indicator-color:#673ab7;--mat-tab-header-active-hover-indicator-color:#673ab7}.mat-mdc-tab-group.mat-accent,.mat-mdc-tab-nav-bar.mat-accent{--mdc-tab-indicator-active-indicator-color:#ffd740;--mat-tab-header-disabled-ripple-color:rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color:#000;--mat-tab-header-inactive-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color:#ffd740;--mat-tab-header-active-ripple-color:#ffd740;--mat-tab-header-inactive-ripple-color:#ffd740;--mat-tab-header-inactive-focus-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color:#ffd740;--mat-tab-header-active-hover-label-text-color:#ffd740;--mat-tab-header-active-focus-indicator-color:#ffd740;--mat-tab-header-active-hover-indicator-color:#ffd740}.mat-mdc-tab-group.mat-warn,.mat-mdc-tab-nav-bar.mat-warn{--mdc-tab-indicator-active-indicator-color:#f44336;--mat-tab-header-disabled-ripple-color:rgba(0, 0, 0, .38);--mat-tab-header-pagination-icon-color:#000;--mat-tab-header-inactive-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-label-text-color:#f44336;--mat-tab-header-active-ripple-color:#f44336;--mat-tab-header-inactive-ripple-color:#f44336;--mat-tab-header-inactive-focus-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-inactive-hover-label-text-color:rgba(0, 0, 0, .6);--mat-tab-header-active-focus-label-text-color:#f44336;--mat-tab-header-active-hover-label-text-color:#f44336;--mat-tab-header-active-focus-indicator-color:#f44336;--mat-tab-header-active-hover-indicator-color:#f44336}.mat-mdc-tab-group.mat-background-primary,.mat-mdc-tab-nav-bar.mat-background-primary{--mat-tab-header-with-background-background-color:#673ab7;--mat-tab-header-with-background-foreground-color:white}.mat-mdc-tab-group.mat-background-accent,.mat-mdc-tab-nav-bar.mat-background-accent{--mat-tab-header-with-background-background-color:#ffd740;--mat-tab-header-with-background-foreground-color:rgba(0, 0, 0, .87)}.mat-mdc-tab-group.mat-background-warn,.mat-mdc-tab-nav-bar.mat-background-warn{--mat-tab-header-with-background-background-color:#f44336;--mat-tab-header-with-background-foreground-color:white}.mat-mdc-tab-header{--mdc-secondary-navigation-tab-container-height:48px}.mat-mdc-tab-header{--mat-tab-header-label-text-font:Roboto, sans-serif;--mat-tab-header-label-text-size:14px;--mat-tab-header-label-text-tracking:.0892857143em;--mat-tab-header-label-text-line-height:36px;--mat-tab-header-label-text-weight:500}html{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#000;--mdc-checkbox-selected-focus-icon-color:#ffd740;--mdc-checkbox-selected-hover-icon-color:#ffd740;--mdc-checkbox-selected-icon-color:#ffd740;--mdc-checkbox-selected-pressed-icon-color:#ffd740;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#ffd740;--mdc-checkbox-selected-hover-state-layer-color:#ffd740;--mdc-checkbox-selected-pressed-state-layer-color:#ffd740;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-checkbox.mat-primary{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#673ab7;--mdc-checkbox-selected-hover-icon-color:#673ab7;--mdc-checkbox-selected-icon-color:#673ab7;--mdc-checkbox-selected-pressed-icon-color:#673ab7;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#673ab7;--mdc-checkbox-selected-hover-state-layer-color:#673ab7;--mdc-checkbox-selected-pressed-state-layer-color:#673ab7;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-checkbox.mat-warn{--mdc-checkbox-disabled-selected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-disabled-unselected-icon-color:rgba(0, 0, 0, .38);--mdc-checkbox-selected-checkmark-color:#fff;--mdc-checkbox-selected-focus-icon-color:#f44336;--mdc-checkbox-selected-hover-icon-color:#f44336;--mdc-checkbox-selected-icon-color:#f44336;--mdc-checkbox-selected-pressed-icon-color:#f44336;--mdc-checkbox-unselected-focus-icon-color:#212121;--mdc-checkbox-unselected-hover-icon-color:#212121;--mdc-checkbox-unselected-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-unselected-pressed-icon-color:rgba(0, 0, 0, .54);--mdc-checkbox-selected-focus-state-layer-color:#f44336;--mdc-checkbox-selected-hover-state-layer-color:#f44336;--mdc-checkbox-selected-pressed-state-layer-color:#f44336;--mdc-checkbox-unselected-focus-state-layer-color:black;--mdc-checkbox-unselected-hover-state-layer-color:black;--mdc-checkbox-unselected-pressed-state-layer-color:black}.mat-mdc-checkbox .mdc-form-field{color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, .87))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:#00000061}html{--mdc-checkbox-state-layer-size:40px}.mat-mdc-checkbox .mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-body2-font-size, 14px);line-height:var(--mdc-typography-body2-line-height, 20px);font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:var(--mdc-typography-body2-letter-spacing, .0178571429em);-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:var(--mdc-typography-body2-text-transform, none)}.mat-mdc-button.mat-unthemed{--mdc-text-button-label-text-color:#000}.mat-mdc-button.mat-primary{--mdc-text-button-label-text-color:#673ab7}.mat-mdc-button.mat-accent{--mdc-text-button-label-text-color:#ffd740}.mat-mdc-button.mat-warn{--mdc-text-button-label-text-color:#f44336}.mat-mdc-button[disabled][disabled]{--mdc-text-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-text-button-label-text-color:rgba(0, 0, 0, .38)}.mat-mdc-unelevated-button.mat-unthemed{--mdc-filled-button-container-color:#fff;--mdc-filled-button-label-text-color:#000}.mat-mdc-unelevated-button.mat-primary{--mdc-filled-button-container-color:#673ab7;--mdc-filled-button-label-text-color:#fff}.mat-mdc-unelevated-button.mat-accent{--mdc-filled-button-container-color:#ffd740;--mdc-filled-button-label-text-color:#000}.mat-mdc-unelevated-button.mat-warn{--mdc-filled-button-container-color:#f44336;--mdc-filled-button-label-text-color:#fff}.mat-mdc-unelevated-button[disabled][disabled]{--mdc-filled-button-disabled-container-color:rgba(0, 0, 0, .12);--mdc-filled-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-filled-button-container-color:rgba(0, 0, 0, .12);--mdc-filled-button-label-text-color:rgba(0, 0, 0, .38)}.mat-mdc-raised-button.mat-unthemed{--mdc-protected-button-container-color:#fff;--mdc-protected-button-label-text-color:#000}.mat-mdc-raised-button.mat-primary{--mdc-protected-button-container-color:#673ab7;--mdc-protected-button-label-text-color:#fff}.mat-mdc-raised-button.mat-accent{--mdc-protected-button-container-color:#ffd740;--mdc-protected-button-label-text-color:#000}.mat-mdc-raised-button.mat-warn{--mdc-protected-button-container-color:#f44336;--mdc-protected-button-label-text-color:#fff}.mat-mdc-raised-button[disabled][disabled]{--mdc-protected-button-disabled-container-color:rgba(0, 0, 0, .12);--mdc-protected-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-protected-button-container-color:rgba(0, 0, 0, .12);--mdc-protected-button-label-text-color:rgba(0, 0, 0, .38);--mdc-protected-button-container-elevation:0}.mat-mdc-outlined-button{--mdc-outlined-button-outline-color:rgba(0, 0, 0, .12)}.mat-mdc-outlined-button.mat-unthemed{--mdc-outlined-button-label-text-color:#000}.mat-mdc-outlined-button.mat-primary{--mdc-outlined-button-label-text-color:#673ab7}.mat-mdc-outlined-button.mat-accent{--mdc-outlined-button-label-text-color:#ffd740}.mat-mdc-outlined-button.mat-warn{--mdc-outlined-button-label-text-color:#f44336}.mat-mdc-outlined-button[disabled][disabled]{--mdc-outlined-button-label-text-color:rgba(0, 0, 0, .38);--mdc-outlined-button-disabled-label-text-color:rgba(0, 0, 0, .38);--mdc-outlined-button-outline-color:rgba(0, 0, 0, .12);--mdc-outlined-button-disabled-outline-color:rgba(0, 0, 0, .12)}.mat-mdc-button,.mat-mdc-outlined-button{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-button:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-button.mat-primary,.mat-mdc-outlined-button.mat-primary{--mat-mdc-button-persistent-ripple-color: #673ab7;--mat-mdc-button-ripple-color: rgba(103, 58, 183, .1)}.mat-mdc-button.mat-accent,.mat-mdc-outlined-button.mat-accent{--mat-mdc-button-persistent-ripple-color: #ffd740;--mat-mdc-button-ripple-color: rgba(255, 215, 64, .1)}.mat-mdc-button.mat-warn,.mat-mdc-outlined-button.mat-warn{--mat-mdc-button-persistent-ripple-color: #f44336;--mat-mdc-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-raised-button,.mat-mdc-unelevated-button{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-raised-button.mat-primary,.mat-mdc-unelevated-button.mat-primary{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-raised-button.mat-accent,.mat-mdc-unelevated-button.mat-accent{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-raised-button.mat-warn,.mat-mdc-unelevated-button.mat-warn{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-button.mat-mdc-button-base,.mat-mdc-raised-button.mat-mdc-button-base,.mat-mdc-unelevated-button.mat-mdc-button-base,.mat-mdc-outlined-button.mat-mdc-button-base{height:36px}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-button-font-size, 14px);line-height:var(--mdc-typography-button-line-height, 36px);font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:var(--mdc-typography-button-text-transform, none)}.mat-mdc-icon-button{--mdc-icon-button-icon-color:inherit;--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-icon-button.mat-primary{--mat-mdc-button-persistent-ripple-color: #6200ee;--mat-mdc-button-ripple-color: rgba(98, 0, 238, .1)}.mat-mdc-icon-button.mat-accent{--mat-mdc-button-persistent-ripple-color: #018786;--mat-mdc-button-ripple-color: rgba(1, 135, 134, .1)}.mat-mdc-icon-button.mat-warn{--mat-mdc-button-persistent-ripple-color: #b00020;--mat-mdc-button-ripple-color: rgba(176, 0, 32, .1)}.mat-mdc-icon-button.mat-primary{--mdc-icon-button-icon-color:#673ab7;--mat-mdc-button-persistent-ripple-color: #673ab7;--mat-mdc-button-ripple-color: rgba(103, 58, 183, .1)}.mat-mdc-icon-button.mat-accent{--mdc-icon-button-icon-color:#ffd740;--mat-mdc-button-persistent-ripple-color: #ffd740;--mat-mdc-button-ripple-color: rgba(255, 215, 64, .1)}.mat-mdc-icon-button.mat-warn{--mdc-icon-button-icon-color:#f44336;--mat-mdc-button-persistent-ripple-color: #f44336;--mat-mdc-button-ripple-color: rgba(244, 67, 54, .1)}.mat-mdc-icon-button[disabled][disabled]{--mdc-icon-button-icon-color:rgba(0, 0, 0, .38);--mdc-icon-button-disabled-icon-color:rgba(0, 0, 0, .38)}.mat-mdc-icon-button.mat-mdc-button-base{--mdc-icon-button-state-layer-size:48px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:12px}.mat-mdc-fab,.mat-mdc-mini-fab{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-fab:hover .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab:hover .mat-mdc-button-persistent-ripple:before{opacity:.04}.mat-mdc-fab.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab.cdk-program-focused .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab.cdk-keyboard-focused .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-fab:active .mat-mdc-button-persistent-ripple:before,.mat-mdc-mini-fab:active .mat-mdc-button-persistent-ripple:before{opacity:.12}.mat-mdc-fab.mat-primary,.mat-mdc-mini-fab.mat-primary{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-fab.mat-accent,.mat-mdc-mini-fab.mat-accent{--mat-mdc-button-persistent-ripple-color: #000;--mat-mdc-button-ripple-color: rgba(0, 0, 0, .1)}.mat-mdc-fab.mat-warn,.mat-mdc-mini-fab.mat-warn{--mat-mdc-button-persistent-ripple-color: #fff;--mat-mdc-button-ripple-color: rgba(255, 255, 255, .1)}.mat-mdc-fab[disabled][disabled],.mat-mdc-mini-fab[disabled][disabled]{--mdc-fab-container-color:rgba(0, 0, 0, .12);--mdc-fab-icon-color:rgba(0, 0, 0, .38);--mat-mdc-fab-color: rgba(0, 0, 0, .38)}.mat-mdc-fab.mat-unthemed,.mat-mdc-mini-fab.mat-unthemed{--mdc-fab-container-color:white;--mdc-fab-icon-color:black;--mat-mdc-fab-color: #000}.mat-mdc-fab.mat-primary,.mat-mdc-mini-fab.mat-primary{--mdc-fab-container-color:#673ab7;--mdc-fab-icon-color:white;--mat-mdc-fab-color: #fff}.mat-mdc-fab.mat-accent,.mat-mdc-mini-fab.mat-accent{--mdc-fab-container-color:#ffd740;--mdc-fab-icon-color:black;--mat-mdc-fab-color: #000}.mat-mdc-fab.mat-warn,.mat-mdc-mini-fab.mat-warn{--mdc-fab-container-color:#f44336;--mdc-fab-icon-color:white;--mat-mdc-fab-color: #fff}.mdc-fab--extended{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:var(--mdc-typography-button-font-size, 14px);line-height:var(--mdc-typography-button-line-height, 36px);font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:var(--mdc-typography-button-letter-spacing, .0892857143em);-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:var(--mdc-typography-button-text-transform, none)}.mat-mdc-extended-fab{--mdc-extended-fab-label-text-font:Roboto, sans-serif;--mdc-extended-fab-label-text-size:14px;--mdc-extended-fab-label-text-tracking:.0892857143em;--mdc-extended-fab-label-text-weight:500}.mat-mdc-snack-bar-container{--mdc-snackbar-container-color:#333333;--mdc-snackbar-supporting-text-color:rgba(255, 255, 255, .87);--mat-snack-bar-button-color:#ffd740}.mat-mdc-snack-bar-container{--mdc-snackbar-supporting-text-font:Roboto, sans-serif;--mdc-snackbar-supporting-text-line-height:20px;--mdc-snackbar-supporting-text-size:14px;--mdc-snackbar-supporting-text-weight:400}html{--mat-table-background-color:white;--mat-table-header-headline-color:rgba(0, 0, 0, .87);--mat-table-row-item-label-text-color:rgba(0, 0, 0, .87);--mat-table-row-item-outline-color:rgba(0, 0, 0, .12)}html{--mat-table-header-container-height:56px;--mat-table-footer-container-height:52px;--mat-table-row-item-container-height:52px}html{--mat-table-header-headline-font:Roboto, sans-serif;--mat-table-header-headline-line-height:22px;--mat-table-header-headline-size:14px;--mat-table-header-headline-weight:500;--mat-table-header-headline-tracking:.0071428571em;--mat-table-row-item-label-text-font:Roboto, sans-serif;--mat-table-row-item-label-text-line-height:20px;--mat-table-row-item-label-text-size:14px;--mat-table-row-item-label-text-weight:400;--mat-table-row-item-label-text-tracking:.0178571429em;--mat-table-footer-supporting-text-font:Roboto, sans-serif;--mat-table-footer-supporting-text-line-height:20px;--mat-table-footer-supporting-text-size:14px;--mat-table-footer-supporting-text-weight:400;--mat-table-footer-supporting-text-tracking:.0178571429em}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-color:#673ab7}.mat-mdc-progress-spinner.mat-accent{--mdc-circular-progress-active-indicator-color:#ffd740}.mat-mdc-progress-spinner.mat-warn{--mdc-circular-progress-active-indicator-color:#f44336}.mat-badge{position:relative}.mat-badge.mat-badge{overflow:visible}.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:transform .2s ease-in-out;transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none;background-color:var(--mat-badge-background-color);color:var(--mat-badge-text-color);font-family:Roboto,sans-serif;font-family:var(--mat-badge-text-font, Roboto, sans-serif);font-size:12px;font-size:var(--mat-badge-text-size, 12px);font-weight:600;font-weight:var(--mat-badge-text-weight, 600)}.cdk-high-contrast-active .mat-badge-content{outline:solid 1px;border-radius:0}.mat-badge-disabled .mat-badge-content{background-color:var(--mat-badge-disabled-state-background-color);color:var(--mat-badge-disabled-state-text-color)}.mat-badge-hidden .mat-badge-content{display:none}.ng-animate-disabled .mat-badge-content,.mat-badge-content._mat-animation-noopable{transition:none}.mat-badge-content.mat-badge-active{transform:none}.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px;font-size:9px;font-size:var(--mat-badge-small-size-text-size, 9px)}.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px;font-size:24px;font-size:var(--mat-badge-large-size-text-size, 24px)}.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}html{--mat-badge-background-color:#673ab7;--mat-badge-text-color:white;--mat-badge-disabled-state-background-color:#b9b9b9;--mat-badge-disabled-state-text-color:rgba(0, 0, 0, .38)}.mat-badge-accent{--mat-badge-background-color:#ffd740;--mat-badge-text-color:rgba(0, 0, 0, .87)}.mat-badge-warn{--mat-badge-background-color:#f44336;--mat-badge-text-color:white}html{--mat-badge-text-font:Roboto, sans-serif;--mat-badge-text-size:12px;--mat-badge-text-weight:600;--mat-badge-small-size-text-size:9px;--mat-badge-large-size-text-size:24px}html{--mat-bottom-sheet-container-text-color:rgba(0, 0, 0, .87);--mat-bottom-sheet-container-background-color:white}html{--mat-bottom-sheet-container-text-font:Roboto, sans-serif;--mat-bottom-sheet-container-text-line-height:20px;--mat-bottom-sheet-container-text-size:14px;--mat-bottom-sheet-container-text-tracking:.0178571429em;--mat-bottom-sheet-container-text-weight:400}html{--mat-legacy-button-toggle-text-color:rgba(0, 0, 0, .38);--mat-legacy-button-toggle-state-layer-color:rgba(0, 0, 0, .12);--mat-legacy-button-toggle-selected-state-text-color:rgba(0, 0, 0, .54);--mat-legacy-button-toggle-selected-state-background-color:#e0e0e0;--mat-legacy-button-toggle-disabled-state-text-color:rgba(0, 0, 0, .26);--mat-legacy-button-toggle-disabled-state-background-color:#eeeeee;--mat-legacy-button-toggle-disabled-selected-state-background-color:#bdbdbd;--mat-standard-button-toggle-text-color:rgba(0, 0, 0, .87);--mat-standard-button-toggle-background-color:white;--mat-standard-button-toggle-state-layer-color:black;--mat-standard-button-toggle-selected-state-background-color:#e0e0e0;--mat-standard-button-toggle-selected-state-text-color:rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-state-text-color:rgba(0, 0, 0, .26);--mat-standard-button-toggle-disabled-state-background-color:white;--mat-standard-button-toggle-disabled-selected-state-text-color:rgba(0, 0, 0, .87);--mat-standard-button-toggle-disabled-selected-state-background-color:#bdbdbd;--mat-standard-button-toggle-divider-color:#e0e0e0}html{--mat-standard-button-toggle-height:48px}html{--mat-legacy-button-toggle-text-font:Roboto, sans-serif;--mat-standard-button-toggle-text-font:Roboto, sans-serif}html{--mat-datepicker-calendar-date-selected-state-text-color:white;--mat-datepicker-calendar-date-selected-state-background-color:#673ab7;--mat-datepicker-calendar-date-selected-disabled-state-background-color:rgba(103, 58, 183, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color:white;--mat-datepicker-calendar-date-focus-state-background-color:rgba(103, 58, 183, .3);--mat-datepicker-calendar-date-hover-state-background-color:rgba(103, 58, 183, .3);--mat-datepicker-toggle-active-state-icon-color:#673ab7;--mat-datepicker-calendar-date-in-range-state-background-color:rgba(103, 58, 183, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color:rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color:#a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color:#46a35e;--mat-datepicker-toggle-icon-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-body-label-text-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-period-button-icon-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-navigation-button-icon-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-header-divider-color:rgba(0, 0, 0, .12);--mat-datepicker-calendar-header-text-color:rgba(0, 0, 0, .54);--mat-datepicker-calendar-date-today-outline-color:rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-today-disabled-state-outline-color:rgba(0, 0, 0, .18);--mat-datepicker-calendar-date-text-color:rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-outline-color:transparent;--mat-datepicker-calendar-date-disabled-state-text-color:rgba(0, 0, 0, .38);--mat-datepicker-calendar-date-preview-state-outline-color:rgba(0, 0, 0, .24);--mat-datepicker-range-input-separator-color:rgba(0, 0, 0, .87);--mat-datepicker-range-input-disabled-state-separator-color:rgba(0, 0, 0, .38);--mat-datepicker-range-input-disabled-state-text-color:rgba(0, 0, 0, .38);--mat-datepicker-calendar-container-background-color:white;--mat-datepicker-calendar-container-text-color:rgba(0, 0, 0, .87)}.mat-datepicker-content.mat-accent{--mat-datepicker-calendar-date-selected-state-text-color:rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-selected-state-background-color:#ffd740;--mat-datepicker-calendar-date-selected-disabled-state-background-color:rgba(255, 215, 64, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color:rgba(0, 0, 0, .87);--mat-datepicker-calendar-date-focus-state-background-color:rgba(255, 215, 64, .3);--mat-datepicker-calendar-date-hover-state-background-color:rgba(255, 215, 64, .3);--mat-datepicker-calendar-date-in-range-state-background-color:rgba(255, 215, 64, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color:rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color:#a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color:#46a35e}.mat-datepicker-content.mat-warn{--mat-datepicker-calendar-date-selected-state-text-color:white;--mat-datepicker-calendar-date-selected-state-background-color:#f44336;--mat-datepicker-calendar-date-selected-disabled-state-background-color:rgba(244, 67, 54, .4);--mat-datepicker-calendar-date-today-selected-state-outline-color:white;--mat-datepicker-calendar-date-focus-state-background-color:rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-hover-state-background-color:rgba(244, 67, 54, .3);--mat-datepicker-calendar-date-in-range-state-background-color:rgba(244, 67, 54, .2);--mat-datepicker-calendar-date-in-comparison-range-state-background-color:rgba(249, 171, 0, .2);--mat-datepicker-calendar-date-in-overlap-range-state-background-color:#a8dab5;--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color:#46a35e}.mat-datepicker-toggle-active.mat-accent{--mat-datepicker-toggle-active-state-icon-color:#ffd740}.mat-datepicker-toggle-active.mat-warn{--mat-datepicker-toggle-active-state-icon-color:#f44336}.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base{--mdc-icon-button-state-layer-size:40px;width:var(--mdc-icon-button-state-layer-size);height:var(--mdc-icon-button-state-layer-size);padding:8px}.mat-calendar-controls .mat-mdc-icon-button.mat-mdc-button-base .mat-mdc-button-touch-target{display:none}html{--mat-datepicker-calendar-text-font:Roboto, sans-serif;--mat-datepicker-calendar-text-size:13px;--mat-datepicker-calendar-body-label-text-size:14px;--mat-datepicker-calendar-body-label-text-weight:500;--mat-datepicker-calendar-period-button-text-size:14px;--mat-datepicker-calendar-period-button-text-weight:500;--mat-datepicker-calendar-header-text-size:11px;--mat-datepicker-calendar-header-text-weight:400}html{--mat-divider-color:rgba(0, 0, 0, .12)}html{--mat-expansion-container-background-color:white;--mat-expansion-container-text-color:rgba(0, 0, 0, .87);--mat-expansion-actions-divider-color:rgba(0, 0, 0, .12);--mat-expansion-header-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-expansion-header-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-expansion-header-disabled-state-text-color:rgba(0, 0, 0, .26);--mat-expansion-header-text-color:rgba(0, 0, 0, .87);--mat-expansion-header-description-color:rgba(0, 0, 0, .54);--mat-expansion-header-indicator-color:rgba(0, 0, 0, .54)}html{--mat-expansion-header-collapsed-state-height:48px;--mat-expansion-header-expanded-state-height:64px}html{--mat-expansion-header-text-font:Roboto, sans-serif;--mat-expansion-header-text-size:14px;--mat-expansion-header-text-weight:500;--mat-expansion-header-text-line-height:inherit;--mat-expansion-header-text-tracking:inherit;--mat-expansion-container-text-font:Roboto, sans-serif;--mat-expansion-container-text-line-height:20px;--mat-expansion-container-text-size:14px;--mat-expansion-container-text-tracking:.0178571429em;--mat-expansion-container-text-weight:400}html{--mat-grid-list-tile-header-primary-text-size:14px;--mat-grid-list-tile-header-secondary-text-size:12px;--mat-grid-list-tile-footer-primary-text-size:14px;--mat-grid-list-tile-footer-secondary-text-size:12px}html{--mat-icon-color:inherit}.mat-icon.mat-primary{--mat-icon-color:#673ab7}.mat-icon.mat-accent{--mat-icon-color:#ffd740}.mat-icon.mat-warn{--mat-icon-color:#f44336}html{--mat-sidenav-container-divider-color:rgba(0, 0, 0, .12);--mat-sidenav-container-background-color:white;--mat-sidenav-container-text-color:rgba(0, 0, 0, .87);--mat-sidenav-content-background-color:#fafafa;--mat-sidenav-content-text-color:rgba(0, 0, 0, .87);--mat-sidenav-scrim-color:rgba(0, 0, 0, .6)}html{--mat-stepper-header-icon-foreground-color:white;--mat-stepper-header-selected-state-icon-background-color:#673ab7;--mat-stepper-header-selected-state-icon-foreground-color:white;--mat-stepper-header-done-state-icon-background-color:#673ab7;--mat-stepper-header-done-state-icon-foreground-color:white;--mat-stepper-header-edit-state-icon-background-color:#673ab7;--mat-stepper-header-edit-state-icon-foreground-color:white;--mat-stepper-container-color:white;--mat-stepper-line-color:rgba(0, 0, 0, .12);--mat-stepper-header-hover-state-layer-color:rgba(0, 0, 0, .04);--mat-stepper-header-focus-state-layer-color:rgba(0, 0, 0, .04);--mat-stepper-header-label-text-color:rgba(0, 0, 0, .54);--mat-stepper-header-optional-label-text-color:rgba(0, 0, 0, .54);--mat-stepper-header-selected-state-label-text-color:rgba(0, 0, 0, .87);--mat-stepper-header-error-state-label-text-color:#f44336;--mat-stepper-header-icon-background-color:rgba(0, 0, 0, .54);--mat-stepper-header-error-state-icon-foreground-color:#f44336;--mat-stepper-header-error-state-icon-background-color:transparent}html .mat-step-header.mat-accent{--mat-stepper-header-icon-foreground-color:rgba(0, 0, 0, .87);--mat-stepper-header-selected-state-icon-background-color:#ffd740;--mat-stepper-header-selected-state-icon-foreground-color:rgba(0, 0, 0, .87);--mat-stepper-header-done-state-icon-background-color:#ffd740;--mat-stepper-header-done-state-icon-foreground-color:rgba(0, 0, 0, .87);--mat-stepper-header-edit-state-icon-background-color:#ffd740;--mat-stepper-header-edit-state-icon-foreground-color:rgba(0, 0, 0, .87)}html .mat-step-header.mat-warn{--mat-stepper-header-icon-foreground-color:white;--mat-stepper-header-selected-state-icon-background-color:#f44336;--mat-stepper-header-selected-state-icon-foreground-color:white;--mat-stepper-header-done-state-icon-background-color:#f44336;--mat-stepper-header-done-state-icon-foreground-color:white;--mat-stepper-header-edit-state-icon-background-color:#f44336;--mat-stepper-header-edit-state-icon-foreground-color:white}html{--mat-stepper-header-height:72px}html{--mat-stepper-container-text-font:Roboto, sans-serif;--mat-stepper-header-label-text-font:Roboto, sans-serif;--mat-stepper-header-label-text-size:14px;--mat-stepper-header-label-text-weight:400;--mat-stepper-header-error-state-label-text-size:16px;--mat-stepper-header-selected-state-label-text-size:16px;--mat-stepper-header-selected-state-label-text-weight:400}.mat-sort-header-arrow{color:#757575}html{--mat-toolbar-container-background-color:whitesmoke;--mat-toolbar-container-text-color:rgba(0, 0, 0, .87)}.mat-toolbar.mat-primary{--mat-toolbar-container-background-color:#673ab7;--mat-toolbar-container-text-color:white}.mat-toolbar.mat-accent{--mat-toolbar-container-background-color:#ffd740;--mat-toolbar-container-text-color:rgba(0, 0, 0, .87)}.mat-toolbar.mat-warn{--mat-toolbar-container-background-color:#f44336;--mat-toolbar-container-text-color:white}html{--mat-toolbar-standard-height:64px;--mat-toolbar-mobile-height:56px}html{--mat-toolbar-title-text-font:Roboto, sans-serif;--mat-toolbar-title-text-line-height:32px;--mat-toolbar-title-text-size:20px;--mat-toolbar-title-text-tracking:.0125em;--mat-toolbar-title-text-weight:500}.mat-tree{background:#fff}.mat-tree-node,.mat-nested-tree-node{color:#000000de}.mat-tree-node{min-height:48px}.mat-tree{font-family:Roboto,sans-serif}.mat-tree-node,.mat-nested-tree-node{font-weight:400;font-size:14px}.mat-h1,.mat-headline-5,.mat-typography .mat-h1,.mat-typography .mat-headline-5,.mat-typography h1{font-size:24px;font-weight:400;line-height:32px;font-family:Roboto,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-headline-6,.mat-typography .mat-h2,.mat-typography .mat-headline-6,.mat-typography h2{font-size:20px;font-weight:500;line-height:32px;font-family:Roboto,sans-serif;letter-spacing:.0125em;margin:0 0 16px}.mat-h3,.mat-subtitle-1,.mat-typography .mat-h3,.mat-typography .mat-subtitle-1,.mat-typography h3{font-size:16px;font-weight:400;line-height:28px;font-family:Roboto,sans-serif;letter-spacing:.009375em;margin:0 0 16px}.mat-h4,.mat-body-1,.mat-typography .mat-h4,.mat-typography .mat-body-1,.mat-typography h4{font-size:16px;font-weight:400;line-height:24px;font-family:Roboto,sans-serif;letter-spacing:.03125em;margin:0 0 16px}.mat-h5,.mat-typography .mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography .mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,sans-serif;margin:0 0 12px}.mat-body-strong,.mat-subtitle-2,.mat-typography .mat-body-strong,.mat-typography .mat-subtitle-2{font-size:14px;font-weight:500;line-height:22px;font-family:Roboto,sans-serif;letter-spacing:.0071428571em}.mat-body,.mat-body-2,.mat-typography .mat-body,.mat-typography .mat-body-2,.mat-typography{font-size:14px;font-weight:400;line-height:20px;font-family:Roboto,sans-serif;letter-spacing:.0178571429em}.mat-body p,.mat-body-2 p,.mat-typography .mat-body p,.mat-typography .mat-body-2 p,.mat-typography p{margin:0 0 12px}.mat-small,.mat-caption,.mat-typography .mat-small,.mat-typography .mat-caption{font-size:12px;font-weight:400;line-height:20px;font-family:Roboto,sans-serif;letter-spacing:.0333333333em}.mat-headline-1,.mat-typography .mat-headline-1{font-size:96px;font-weight:300;line-height:96px;font-family:Roboto,sans-serif;letter-spacing:-.015625em;margin:0 0 56px}.mat-headline-2,.mat-typography .mat-headline-2{font-size:60px;font-weight:300;line-height:60px;font-family:Roboto,sans-serif;letter-spacing:-.0083333333em;margin:0 0 64px}.mat-headline-3,.mat-typography .mat-headline-3{font-size:48px;font-weight:400;line-height:50px;font-family:Roboto,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-headline-4,.mat-typography .mat-headline-4{font-size:34px;font-weight:400;line-height:40px;font-family:Roboto,sans-serif;letter-spacing:.0073529412em;margin:0 0 64px}.m-course-player .m-course-player__question{background:url(https://cdn01.alison-static.net/publishing/dist/img/bg.png) no-repeat #f4f4f4;padding:10px 5px 20px}@media (min-width: 769px){.m-course-player .m-course-player__question{padding:10px 20px 20px}}.m-course-player .m-course-player__question app-course-player-audio{display:block;margin:60px auto 20px;max-width:400px}.m-course-player .m-course-player__question app-course-player-audio .m-course-player__audio audio{box-shadow:0 0 5px #0006;display:block!important}.m-course-player .m-course-player__question .katex .mathnormal{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal}.m-course-player .m-course-player__question .match:after{color:#fff;border-radius:100%;position:absolute;right:6px;height:25px;line-height:25px;text-align:center;top:0;bottom:0;margin:auto;width:25px}.m-course-player .m-course-player__question .match.matching-1:after{content:\"1\"}.m-course-player .m-course-player__question .match.matching-2:after{content:\"2\"}.m-course-player .m-course-player__question .match.matching-3:after{content:\"3\"}.m-course-player .m-course-player__question .match.matching-4:after{content:\"4\"}.m-course-player .m-course-player__question .match.matching-5:after{content:\"5\"}.m-course-player .m-course-player__question .match.matching-6:after{content:\"6\"}.m-course-player .m-course-player__question .match.matching-7:after{content:\"7\"}.m-course-player .m-course-player__question .match.matching-8:after{content:\"8\"}.m-course-player .m-course-player__question .match.matching-9:after{content:\"9\"}.m-course-player .m-course-player__question .match.matching-10:after{content:\"10\"}.m-course-player .m-course-player__question .match.matching-11:after{content:\"11\"}.m-course-player .m-course-player__question .match.matching-invalid:after{background-color:red}.m-course-player .m-course-player__question .match.matching-correct:after{background-color:#149d4d}.m-course-player .m-course-player__question .overlay{height:100%;inset:0;position:absolute;width:100%;z-index:999}.m-course-player .m-course-player__question .result:after{background-size:cover!important;content:\"\";color:#78c698;height:25px;line-height:25px;margin-top:-13px;position:absolute;right:-12px;text-align:center;top:50%;width:25px}.m-course-player .m-course-player__question .result.invalid:after{background:url(https://cdn01.alison-static.net/publishing/dist/img/incorrect.png) no-repeat}.m-course-player .m-course-player__question .result.valid:after{background:url(https://cdn01.alison-static.net/publishing/dist/img/correct.png) no-repeat}.m-course-player .m-course-player__question app-course-player-image{display:block;margin:60px auto 20px;max-width:655px}.m-course-player .m-course-player__question__header{display:block;font-family:Roboto,helvetica neue,Helvetica,Arial,sans-serif;color:#3f4a52;font-weight:400;line-height:24px;padding:9.5px;font-size:16px;max-width:700px;margin:20px auto;white-space:pre-wrap}.m-course-player .m-course-player__question__header .katex-error{color:#3f4a52!important}.m-course-player .m-course-player__question__instructions{display:flex;justify-content:space-between}.m-course-player .m-course-player__question__instructions button{margin-left:auto}.m-course-player .m-course-player__question__instructions p{padding:10px;max-width:350px}.m-course-player .m-course-player__question__feedback{text-align:center;color:#fff;border-radius:8px;padding:20px 40px 20px 60px;max-width:600px;margin:20px auto}.m-course-player .m-course-player__question__feedback--wrong{background:url(https://cdn01.alison-static.net/publishing/dist/img/incorrect.png) left 6px center no-repeat rgba(0,0,0,.6);background-size:35px 35px}.m-course-player .m-course-player__question__feedback--correct{background:url(https://cdn01.alison-static.net/publishing/dist/img/correct.png) left 6px center no-repeat rgba(0,0,0,.6)}.m-course-player .m-course-player__question__answers{display:flex;flex-direction:column;background:rgba(129,51,89,.45);border-radius:30px;max-width:700px;margin:10px auto 25px;padding:20px;position:relative}.m-course-player .m-course-player__question__answers__item{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;position:relative;display:block;cursor:pointer;color:#fff;font-size:14px;background:rgba(0,0,0,.4);padding:7px;margin:0 0 20px}.m-course-player .m-course-player__question__answers__item .katex-error{color:#fff!important}.m-course-player .m-course-player__question__answers__item--active{background:rgba(0,0,0,.4);border:2px solid #fff}.m-course-player .m-course-player__question__answers__item input{position:absolute;height:100%;top:0;left:0;margin:0;visibility:hidden;width:100%}.m-course-player .m-course-player__question__footer button{margin:20px auto 55px}\n"],
                    encapsulation: 2
                }),
                d
            })();
            var X = n(6033),
                oe = n(6655);
            const le = function (o) {
                    return {colored: o}
                },
                u = function (o) {
                    return {width: o}
                };
            function i(o, d) {
                if (1 & o && (e._UZ(0, "td", 5), e.ALo(1, "safeHtml"), e.ALo(2, "mathAnnotation")), 2 & o) {
                    const c = d.$implicit;
                    let r;
                    e.Q6J("ngClass", e.VKq(7, le, c.invertedColor))("innerHtml", e.lcZ(1, 3, e.lcZ(2, 5, c.content)), e.oJD)("ngStyle", e.VKq(9, u, null !== (r = c.width) && void 0 !== r ? r : "calc(50% - 2px)"))
                }
            }
            function f(o, d) {
                if (1 & o && (e.TgZ(0, "tr", 3), e.YNc(1, i, 3, 11, "td", 4), e.qZA()), 2 & o) {
                    const c = d.$implicit;
                    e.xp6(1),
                    e.Q6J("ngForOf", c)
                }
            }
            function O(o, d) {
                if (1 & o && (e.TgZ(0, "div", 6), e._uU(1), e.qZA()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.hij(" ", c.content.caption, " ")
                }
            }
            let L = (() => {
                var o;
                class d {
                    ngOnInit() {
                        this.tableContents = this.content.content
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-table"]
                    ],
                    inputs: {
                        content: "content"
                    },
                    decls: 4,
                    vars: 2,
                    consts: [
                        [
                            1, "m-course-player__table"
                        ],
                        [
                            "class",
                            "m-course-player__table__item",
                            4,
                            "ngFor",
                            "ngForOf"
                        ],
                        [
                            "class", "m-course-player__caption", 4, "ngIf"
                        ],
                        [
                            1, "m-course-player__table__item"
                        ],
                        [
                            3,
                            "ngClass",
                            "innerHtml",
                            "ngStyle",
                            4,
                            "ngFor",
                            "ngForOf"
                        ],
                        [
                            3, "ngClass", "innerHtml", "ngStyle"
                        ],
                        [
                            1, "m-course-player__caption"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.TgZ(0, "table", 0)(1, "tbody"),
                        e.YNc(2, f, 2, 1, "tr", 1),
                        e.qZA()(),
                        e.YNc(3, O, 2, 1, "div", 2)),
                        2 & r && (e.xp6(2), e.Q6J("ngForOf", a.tableContents.table), e.xp6(1), e.Q6J("ngIf", a.content.caption && ((null == a.content ? null : a.content.caption) || "").length > 0))
                    },
                    dependencies: [
                        m.mk,
                        m.sg,
                        m.O5,
                        m.PC,
                        X.z,
                        oe.B
                    ],
                    styles: ["app-course-player-table{display:block;overflow:hidden}.m-course-player .m-course-player__table{color:#3f4a52;border-collapse:collapse;border-spacing:5px;padding:0;font:400 14px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:22px;margin:0;max-width:100%;min-height:24px;resize:none;width:100%}.m-course-player .m-course-player__table tr{display:table-row;width:auto;clear:both}.m-course-player .m-course-player__table td{float:left;display:table-column;vertical-align:baseline;background-color:#dce0e3;color:#465159;padding:13px;margin:0;text-overflow:ellipsis;margin-bottom:-99999px!important;padding-bottom:99999px!important;border:2px solid #fff}\n"],
                    encapsulation: 2
                }),
                d
            })();
            var C = n(8071),
                U = n(275);
            let D = (() => {
                var o;
                class d {
                    constructor(r, a) {
                        this.viewportRuler = r,
                        this.ngZone = a,
                        this._currentScreen$ = new C.X({
                            mobile: !0,
                            tablet: !1,
                            desktop: !1
                        }),
                        this.viewportChange = this.viewportRuler.change(200).subscribe(() => this.ngZone.run(() => this.setSize())),
                        this.setSize()
                    }
                    get currentScreen() {
                        return this._currentScreen$.asObservable()
                    }
                    ngOnDestroy() {
                        this.viewportChange.unsubscribe()
                    }
                    setSize() {
                        const {width: r} = this.viewportRuler.getViewportSize();
                        this._currentScreen$.next({
                            mobile: r < 768,
                            tablet: r > 767 && r < 1024,
                            desktop: r > 1024
                        })
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.LFG(U.rL), e.LFG(e.R0b))
                },
                o.\u0275prov = e.Yz7({token: o, factory: o.\u0275fac, providedIn: "root"}),
                d
            })();
            var z = n(5787),
                V = n(3101);
            function ae(o, d) {
                1 & o && e.GkF(0)
            }
            function ge(o, d) {
                if (1 & o && e._UZ(0, "span", 9), 2 & o) {
                    const c = e.oxw().$implicit;
                    e.Q6J("innerHtml", c.tabTitle, e.oJD)
                }
            }
            const se = function (o) {
                return {mix: o}
            };
            function ie(o, d) {
                if (1 & o && e._UZ(0, "img", 10), 2 & o) {
                    const c = e.oxw().$implicit;
                    e.Q6J("ngClass", e.VKq(2, se, "mix" === c.type))("src", c.tabContent.filePath || c.tabContent.path, e.LSH)
                }
            }
            function Pe(o, d) {
                if (1 & o && (e.ynx(0), e.TgZ(1, "mat-tab"), e.YNc(2, ge, 1, 1, "ng-template", 6), e.YNc(3, ie, 1, 4, "img", 7), e._UZ(4, "div", 8), e.ALo(5, "safeHtml"), e.ALo(6, "mathAnnotation"), e.qZA(), e.BQk()), 2 & o) {
                    const c = d.$implicit;
                    e.xp6(3),
                    e.Q6J("ngIf", "image" === c.tabContent.fileType || "image" === c.tabContent.type),
                    e.xp6(1),
                    e.Q6J("innerHTML", e.lcZ(5, 2, e.lcZ(6, 4, c.tabContent.text)), e.oJD)
                }
            }
            function pe(o, d) {
                if (1 & o && (e.TgZ(0, "mat-tab-group", 4), e.YNc(1, Pe, 7, 6, "ng-container", 5), e.qZA()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.Q6J("ngForOf", c.tabsContents)
                }
            }
            function _e(o, d) {
                if (1 & o && e._UZ(0, "img", 10), 2 & o) {
                    const c = e.oxw().$implicit;
                    e.Q6J("ngClass", e.VKq(2, se, "mix" === c.type))("src", c.tabContent.filePath || c.tabContent.path, e.LSH)
                }
            }
            function A(o, d) {
                if (1 & o && (e.ynx(0), e.TgZ(1, "mat-expansion-panel", 12)(2, "mat-expansion-panel-header"),
                e._UZ(3, "mat-panel-title", 8),
                e.qZA(),
                e.TgZ(4, "div"),
                e.YNc(5, _e, 1, 4, "img", 7),
                e._UZ(6, "div", 8),
                e.ALo(7, "safeHtml"),
                e.ALo(8, "mathAnnotation"),
                e.qZA()(),
                e.BQk()), 2 & o) {
                    const c = d.$implicit,
                        r = d.index;
                    e.xp6(1),
                    e.Q6J("expanded", 0 === r),
                    e.xp6(2),
                    e.Q6J("innerHTML", c.tabTitle, e.oJD),
                    e.xp6(2),
                    e.Q6J("ngIf", "image" === c.tabContent.fileType || "image" === c.tabContent.type),
                    e.xp6(1),
                    e.Q6J("innerHTML", e.lcZ(7, 4, e.lcZ(8, 6, c.tabContent.text)), e.oJD)
                }
            }
            function H(o, d) {
                if (1 & o && (e.TgZ(0, "mat-accordion", 11), e.YNc(1, A, 9, 8, "ng-container", 5), e.qZA()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.Q6J("ngForOf", c.tabsContents)
                }
            }
            const j = function (o, d, c) {
                return {"m-tabs--horizontal": o, "m-tabs--vertical": d, "m-tabs--accordion": c}
            };
            let h = (() => {
                var o;
                class d {
                    constructor(r) {
                        this._responsiveService = r
                    }
                    get width() {
                        return this.content.styleOptions ?. width || ""
                    }
                    ngOnInit() {
                        this.orientation = this.content.styleOptions ?. orientation,
                        this.tabsContents = this.content.content,
                        this._responsiveService.currentScreen.subscribe(r => {
                            this.screenTarget = r
                        })
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.Y36(D))
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-tabs"]
                    ],
                    hostVars: 2,
                    hostBindings: function (r, a) {
                        2 & r && e.Udp("max-width", a.width)
                    },
                    inputs: {
                        content: "content"
                    },
                    decls: 6,
                    vars: 8,
                    consts: [
                        [
                            1, "m-tabs", 3, "ngClass"
                        ],
                        [
                            4, "ngIf", "ngIfThen", "ngIfElse"
                        ],
                        [
                            "tabs", ""
                        ],
                        [
                            "accordion", ""
                        ],
                        [
                            "disableRipple",
                            "",
                            "disablePagination",
                            "",
                            "animationDuration",
                            "0ms"
                        ],
                        [
                            4, "ngFor", "ngForOf"
                        ],
                        [
                            "mat-tab-label", ""
                        ],
                        [
                            3,
                            "ngClass",
                            "src",
                            4,
                            "ngIf"
                        ],
                        [
                            3, "innerHTML"
                        ],
                        [
                            3, "innerHtml"
                        ],
                        [
                            3, "ngClass", "src"
                        ],
                        [
                            "hideToggle", ""
                        ],
                        [
                            3, "expanded"
                        ]
                    ],
                    template: function (r, a) {
                        if (1 & r && (e.TgZ(0, "section", 0), e.YNc(1, ae, 1, 0, "ng-container", 1), e.YNc(2, pe, 2, 1, "ng-template", null, 2, e.W1O), e.YNc(4, H, 2, 1, "ng-template", null, 3, e.W1O), e.qZA()), 2 & r) {
                            const B = e.MAs(3),
                                Z = e.MAs(5);
                            e.Q6J("ngClass", e.kEZ(4, j, "horizontal" === a.orientation, "vertical" === a.orientation, "accordion" === a.orientation)),
                            e.xp6(1),
                            e.Q6J("ngIf", "accordion" !== a.orientation && ! a.screenTarget.mobile)("ngIfThen", B)("ngIfElse", Z)
                        }
                    },
                    dependencies: [
                        m.mk,
                        m.sg,
                        m.O5,
                        z.pp,
                        z.ib,
                        z.yz,
                        z.yK,
                        V.SK,
                        V.gz,
                        V.R7,
                        X.z,
                        oe.B
                    ],
                    styles: ['.m-course-player .m-tabs{border:1px solid #bfbfbf}.m-course-player .m-tabs .mat-expansion-panel{border-radius:0!important}.m-course-player .m-tabs .mat-expansion-panel.mat-expansion-panel-spacing{margin:0}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-body{color:#3f4a52;line-height:22px;padding:30px}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-body img{display:block;margin:0 auto;max-width:100%}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-body img.mix{margin:0 20px 0 0;float:left;width:27%}.m-course-player .m-tabs .mat-expansion-panel.mat-expanded{cursor:pointer}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header{position:relative;border-radius:0;color:#3f4a52;font:500 .9375em/1.5em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;background-color:#dce0e3;border:1px solid #d8d8d8;padding:8px 0}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]):hover{background-color:#dce0e3}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header:hover{color:#fff}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#813359;color:#fff;cursor:pointer;pointer-events:none;background:#813359}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded:before,.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded:after{background-color:#fff;transform:rotate(0)}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded .mat-expansion-panel-header-title{color:#fff}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header:before{transform:rotate(-90deg)}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header:before,.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header:after{left:auto;border-radius:unset;border:none;right:15px;width:17px;height:3px;background-color:#b4b4b4;content:"";display:block;position:absolute;top:50%;transform-origin:50% 50%;will-change:transform;transition:all .25s}.m-course-player .m-tabs .mat-expansion-panel .mat-expansion-panel-header-title{font:400 15px Roboto,helvetica neue,Helvetica,Arial,sans-serif;padding:2px 25px}.m-course-player .m-tabs .mat-tab-labels .mat-tab-label{flex:1;min-width:initial!important;color:#fff;font:500 .9375em/1.5em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;background-color:#7f7f7f;padding:13px 3.15%;opacity:1;margin-right:2px;height:auto}.m-course-player .m-tabs .mat-tab-labels .mat-tab-label .mat-tab-label-content span{white-space:initial}.m-course-player .m-tabs .mat-tab-labels .mat-tab-label:hover{background:#ababab}.m-course-player .m-tabs .mat-tab-labels .mat-tab-label:last-child{margin-right:0}.m-course-player .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active{background:#813359}.m-course-player .m-tabs .mat-tab-body-content{color:#3f4a52;line-height:22px}.m-course-player .m-tabs .mat-tab-body-content img{display:block;margin:0 auto;max-width:100%}.m-course-player .m-tabs .mat-tab-body-content img.mix{float:left;padding:0 15px 15px;margin:0 20px 0 0;width:27%}.m-course-player .m-tabs .mat-tab-body-wrapper{padding:15px 10px}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-group{flex-direction:row}.m-course-player .m-tabs.m-tabs--vertical .mat-ink-bar{display:none}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-labels{flex-direction:column}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-labels .mat-tab-label{margin-right:0}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-body-content img.mix{width:40%}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-header{width:30%}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-header .mat-tab-header-pagination{display:none!important}.m-course-player .m-tabs.m-tabs--vertical .mat-tab-body-wrapper{width:68%}\n'],
                    encapsulation: 2
                }),
                d
            })();
            const v = function (o) {
                    return {"font-size": o}
                },
                F = function (o, d) {
                    return {"m-course-player__text--bordered": o, "m-course-player__text--bordered-bottom": d}
                };
            let ce = (() => {
                var o;
                class d {
                    get rawedContent() {
                        return this.content.content
                    }
                    get width() {
                        return this.content.styleOptions ?. width || ""
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-text"]
                    ],
                    hostVars: 2,
                    hostBindings: function (r, a) {
                        2 & r && e.Udp("max-width", a.width)
                    },
                    inputs: {
                        content: "content"
                    },
                    decls: 3,
                    vars: 12,
                    consts: [
                        [
                            1,
                            "m-course-player__text",
                            3,
                            "ngStyle",
                            "ngClass",
                            "innerHTML"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e._UZ(0, "div", 0), e.ALo(1, "safeHtml"), e.ALo(2, "mathAnnotation")),
                        2 & r && e.Q6J("ngStyle", e.VKq(7, v, null == a.content.styleOptions ? null : a.content.styleOptions.fontSize))("ngClass", e.WLB(9, F, "all" === (null == a.content.styleOptions ? null : a.content.styleOptions.border), "bottom" === (null == a.content.styleOptions ? null : a.content.styleOptions.border)))("innerHTML", e.lcZ(1, 3, e.lcZ(2, 5, a.rawedContent)), e.oJD)
                    },
                    dependencies: [
                        m.mk, m.PC, X.z, oe.B
                    ],
                    styles: ['.m-course-player .m-course-player__text{color:#3f4a52;background:0 0;padding:6px 10px;font:400 14px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:22px;margin:0;max-width:100%;min-height:24px}.m-course-player .m-course-player__text--bordered{border:1px solid #ccc}.m-course-player .m-course-player__text--bordered-bottom{border-bottom:1px solid #ccc}.m-course-player .m-course-player__text h4{color:#465159;font:700 1.3em Roboto,helvetica neue,Helvetica,Arial,sans-serif;padding:0 10px 10px 0;margin:0}.m-course-player .m-course-player__text ul{margin:0;padding:0}.m-course-player .m-course-player__text ul li{padding-left:30px;position:relative;margin-bottom:10px;list-style:none;line-height:1.5em}.m-course-player .m-course-player__text ul li:before{background:#392f2f;content:"";display:block;height:5px;left:10px;position:absolute;top:6px;width:5px}\n'],
                    encapsulation: 2
                }),
                d
            })();
            var ue = n(6480),
                fe = n(5904);
            function he(o, d) {
                if (1 & o && (e.TgZ(0, "div", 5), e._uU(1), e.qZA()), 2 & o) {
                    const c = e.oxw(2);
                    e.xp6(1),
                    e.hij(" ", c.content.caption, " ")
                }
            }
            const xe = function (o) {
                return {"m-course-player__video--loaded": o}
            };
            function Ce(o, d) {
                if (1 & o && (e.ynx(0), e.TgZ(1, "div", 2), e._UZ(2, "iframe", 3), e.qZA(), e.YNc(3, he, 2, 1, "div", 4), e.BQk()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.Q6J("ngClass", e.VKq(3, xe, !0 === c.videoLoaded)),
                    e.xp6(1),
                    e.Q6J("src", c.safeVideoId, e.uOi),
                    e.xp6(1),
                    e.Q6J("ngIf", c.content && c.content.caption && ((null == c.content ? null : c.content.caption) || "").length > 0)
                }
            }
            function Te(o, d) {
                if (1 & o && (e.TgZ(0, "div", 5), e._uU(1), e.qZA()), 2 & o) {
                    const c = e.oxw(2);
                    e.xp6(1),
                    e.hij(" ", c.content.caption, " ")
                }
            }
            function Ae(o, d) {
                if (1 & o && (e.ynx(0), e._UZ(1, "youtube-player", 6), e.YNc(2, Te, 2, 1, "div", 4), e.BQk()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.s9C("videoId", c.videoId),
                    e.xp6(1),
                    e.Q6J("ngIf", c.content && c.content.caption && ((null == c.content ? null : c.content.caption) || "").length > 0)
                }
            }
            function Ee(o, d) {
                if (1 & o && (e.TgZ(0, "div", 7)(1, "p", 8),
                e._uU(2, "Oops...Temporary Error"),
                e.qZA(),
                e.TgZ(3, "p", 9),
                e._uU(4, " Please "),
                e.TgZ(5, "a", 10),
                e._uU(6, "reload this page"),
                e.qZA(),
                e._uU(7, " or "),
                e.TgZ(8, "a", 11),
                e._uU(9, "contact customer support"),
                e.qZA(),
                e._uU(10, " if issue persist "),
                e.qZA(),
                e.TgZ(11, "p", 9),
                e._uU(12),
                e.qZA()()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(12),
                    e.Oqu(c.error)
                }
            }
            let ye = (() => {
                var o;
                class d {
                    constructor(r) {
                        this._sanitizer = r,
                        this.videoType = "vimeo",
                        this.videoLoaded = !1,
                        this.apiLoaded = !1
                    }
                    ngOnInit() {
                        if (this.videoLink = this.content ?. content, this.videoLink ?. indexOf("youtube.com") > 0) {
                            this.videoType = "youtube";
                            const r = new URL(this.videoLink);
                            if (this.videoId = r.searchParams.get("v") ?? "", !this.apiLoaded) {
                                const a = document.createElement("script");
                                a.src = "https://www.youtube.com/iframe_api",
                                document.body.appendChild(a),
                                this.apiLoaded = !0
                            }
                        }
                        "vimeo" === this.videoType && (this.videoId = this.videoLink.replace(/\D/g, ""), this.safeVideoId = this._sanitizer.bypassSecurityTrustResourceUrl(`https://player.vimeo.com/video/${
                            this.videoId
                        }?quality=720p`))
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.Y36(ue.H7))
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-video"]
                    ],
                    inputs: {
                        content: "content"
                    },
                    decls: 3,
                    vars: 3,
                    consts: [
                        [
                            4, "ngIf"
                        ],
                        [
                            "class", "m-course-player__error", 4, "ngIf"
                        ],
                        [
                            1, "m-course-player__video", 3, "ngClass"
                        ],
                        [
                            "frameborder",
                            "0",
                            "allowfullscreen",
                            "",
                            3,
                            "src"
                        ],
                        [
                            "class", "m-course-player__caption", 4, "ngIf"
                        ],
                        [
                            1, "m-course-player__caption"
                        ],
                        [
                            "suggestedQuality", "hd720", 3, "videoId"
                        ],
                        [
                            1, "m-course-player__error"
                        ],
                        [
                            1, "m-course-player__error__title"
                        ],
                        [
                            1, "m-course-player__error__text"
                        ],
                        [
                            "href", "javascript:window.location.reload(true)"
                        ],
                        [
                            "href", "mailto:support@alison.com"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.YNc(0, Ce, 4, 5, "ng-container", 0), e.YNc(1, Ae, 3, 2, "ng-container", 0), e.YNc(2, Ee, 13, 1, "div", 1)),
                        2 & r && (e.Q6J("ngIf", "vimeo" === a.videoType), e.xp6(1), e.Q6J("ngIf", "youtube" === a.videoType), e.xp6(1), e.Q6J("ngIf", a.error))
                    },
                    dependencies: [
                        m.mk, m.O5, fe.D
                    ],
                    styles: [".m-course-player .m-course-player__video{padding-bottom:53.5%;margin:10px;height:0;padding-top:25px;position:relative;overflow:hidden}.m-course-player .m-course-player__video iframe{top:0;left:0;width:100%;height:100%;position:absolute}\n"],
                    encapsulation: 2
                }),
                d
            })();
            const q = new Map;
            q.set("Header", y),
            q.set("Text", ce),
            q.set("Tabs", h),
            q.set("Table", L),
            q.set("Popup", ne),
            q.set("Video", ye),
            q.set("Image", I.M),
            q.set("Audio", P.L),
            q.set("Language", Q),
            q.set("True Or False", G),
            q.set("Multiple Response", G),
            q.set("Multiple Choice", G),
            q.set("Fill The Blank", G),
            q.set("Sequence Dropdown", G),
            q.set("Matching Drag And Drop", G),
            q.set("Word Bank", G),
            q.set("Matching Dropdown", G),
            q.set("Sequence Drag And Drop", G),
            q.set("Numeric", G),
            q.set("Hot Spot", G);
            const Oe = o => q.get(o);
            let Ie = (() => {
                var o;
                class d {
                    constructor(r, a) {
                        this._templateRef = r,
                        this._viewContainer = a
                    }
                    ngOnChanges() {
                        if (this.slide) {
                            if (this._viewContainer.createEmbeddedView(this._templateRef), !Array.isArray(this.slide.content)) {
                                const r = Oe(this.slide.content.type);
                                if (r) {
                                    const a = this._viewContainer.createComponent(r);
                                    a.instance.content = this.slide.content,
                                    a.instance.id = this.slide.id
                                }
                                return
                            }
                            this.slide.content.forEach(r => {
                                const a = Oe(r.type);
                                a && (this._viewContainer.createComponent(a).instance.content = r)
                            })
                        }
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.Y36(e.Rgc), e.Y36(e.s_b))
                },
                o.\u0275dir = e.lG2({
                    type: o,
                    selectors: [
                        ["", "appFormatCourse", ""]
                    ],
                    inputs: {
                        slide: ["appFormatCourse", "slide"]
                    },
                    features: [e.TTD]
                }),
                d
            })();
            function Se(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " This is the Final Assessment for the course, and after you pass this assessment you can get your certification! "), e._UZ(2, "br")(3, "br"),
                e._uU(4, " But before you can take this Assessment, you must read through the following Topics in the course. "),
                e._UZ(5, "br")(6, "br"),
                e._uU(7, " Here is a list of the other Topics you must complete first. "),
                e.BQk())
            }
            function Re(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " You must read through the following Topics before you can take this Assessment. "), e.BQk())
            }
            function De(o, d) {
                1 & o && e._UZ(0, "br")
            }
            function Ue(o, d) {
                if (1 & o && (e.ynx(0), e.TgZ(1, "a", 5), e._uU(2), e.qZA(), e.YNc(3, De, 1, 0, "br", 3), e.BQk()), 2 & o) {
                    const c = d.$implicit,
                        r = d.index,
                        a = e.oxw();
                    e.xp6(1),
                    e.s9C("href", c.url, e.LSH),
                    e.s9C("title", c.name),
                    e.xp6(1),
                    e.Oqu(c.name),
                    e.xp6(1),
                    e.Q6J("ngIf", r !== a.topicList.length - 1)
                }
            }
            let je = (() => {
                var o;
                class d {
                    get topicList() {
                        if (!Array.isArray(this.topics)) {
                            const r = this.topics;
                            return Object.keys(r).map(B => r[B])
                        }
                        return this.topics
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-assessment-locked"]
                    ],
                    inputs: {
                        topics: "topics",
                        assessmentType: "assessmentType"
                    },
                    decls: 8,
                    vars: 3,
                    consts: [
                        [
                            1, "m-course-player-assessment-locked"
                        ],
                        [
                            1, "m-course-player-assessment-locked__icon"
                        ],
                        [
                            1, "m-course-player-assessment-locked__text"
                        ],
                        [
                            4, "ngIf"
                        ],
                        [
                            4, "ngFor", "ngForOf"
                        ],
                        [
                            3, "href", "title"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.TgZ(0, "div", 0)(1, "div", 1),
                        e._UZ(2, "i")(3, "div"),
                        e.TgZ(4, "p", 2),
                        e.YNc(5, Se, 8, 0, "ng-container", 3),
                        e.YNc(6, Re, 2, 0, "ng-container", 3),
                        e.qZA(),
                        e.YNc(7, Ue, 4, 4, "ng-container", 4),
                        e.qZA()()),
                        2 & r && (e.xp6(5), e.Q6J("ngIf", 2 === a.assessmentType), e.xp6(1), e.Q6J("ngIf", 1 === a.assessmentType), e.xp6(1), e.Q6J("ngForOf", a.topicList))
                    },
                    dependencies: [
                        m.sg, m.O5
                    ],
                    styles: ['.m-course-player-assessment-locked[_ngcontent-%COMP%]{font:400 1em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;color:#5d666d;padding:30px;text-align:center}.m-course-player-assessment-locked__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:32px}.m-course-player-assessment-locked__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{content:"\\ea0a";font-family:icomoon;font-style:normal;font-variant:normal;font-weight:400;line-height:1;text-transform:none}.m-course-player-assessment-locked__text[_ngcontent-%COMP%]{margin-top:5px}.m-course-player-assessment-locked[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{outline:none;text-decoration:none;transition:all .25s ease-in;color:#0094c9;line-height:30px}']
                }),
                d
            })();
            const Ne = function (o) {
                return {"m-course-player-assessment__wrapper__content--tiny": o}
            };
            let Le = (() => {
                var o;
                class d {
                    constructor() {
                        this.tinyContainer = !1,
                        this.buttonClicked = new e.vpe
                    }
                    buttonPressed() {
                        this.buttonClicked.emit()
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-assessment-welcome"]
                    ],
                    inputs: {
                        heading: "heading",
                        banner: "banner",
                        content: "content",
                        buttonText: "buttonText",
                        tinyContainer: "tinyContainer"
                    },
                    outputs: {
                        buttonClicked: "buttonClicked"
                    },
                    decls: 10,
                    vars: 7,
                    consts: [
                        [
                            1, "m-course-player-assessment__wrapper", "m-course-player-assessment__background"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__container"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__heading"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__content", 3, "ngClass"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__banner", 3, "innerHTML"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__text", 3, "innerHTML"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__actions"
                        ],
                        [
                            3, "click"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2),
                        e._uU(3),
                        e.qZA(),
                        e.TgZ(4, "div", 3),
                        e._UZ(5, "h4", 4)(6, "p", 5),
                        e.qZA(),
                        e.TgZ(7, "div", 6)(8, "button", 7),
                        e.NdJ("click", function () {
                            return a.buttonPressed()
                        }),
                        e._uU(9),
                        e.qZA()()()()),
                        2 & r && (e.xp6(3), e.hij(" ", a.heading, " "), e.xp6(1), e.Q6J("ngClass", e.VKq(5, Ne, a.tinyContainer)), e.xp6(1), e.Q6J("innerHTML", a.banner, e.oJD), e.xp6(1), e.Q6J("innerHTML", a.content, e.oJD), e.xp6(3), e.hij(" ", a.buttonText, " "))
                    },
                    dependencies: [m.mk],
                    styles: [".m-course-player-assessment__wrapper{color:#3f4a52;padding:10px 20px 80px;margin:0 auto;letter-spacing:.04em;max-width:765px}.m-course-player-assessment__wrapper__heading{font-size:30px;font-weight:500;line-height:33px;color:#3f4a52;margin:40px 0 0;word-break:break-word;text-align:center}.m-course-player-assessment__wrapper__content{background:rgba(129,51,89,.05);margin:40px 0 20px;min-height:290px}.m-course-player-assessment__wrapper__content--tiny{margin:40px auto 20px;max-width:600px;padding:0}.m-course-player-assessment__wrapper__banner{font-size:18px;line-height:1.1;font-weight:500;color:#fff;background:#813359;border-top-left-radius:5px;border-top-right-radius:5px;display:block;padding:20px 15px;margin:0;text-align:center}.m-course-player-assessment__wrapper__banner__subtitle{display:block;font-size:12px;padding-top:14px}.m-course-player-assessment__wrapper__banner__subtitle .bold{font-weight:700;font-size:20px}.m-course-player-assessment__wrapper__text{padding:35px 20px;max-height:250px;overflow:auto;line-height:24px;white-space:pre-line}.m-course-player-assessment__wrapper__actions{display:flex;justify-content:center;margin-top:20px}.m-course-player-assessment__wrapper__actions button{margin:15px;display:inline-block}\n"],
                    encapsulation: 2
                }),
                d
            })();
            function we(o, d) {
                1 & o && (e.ynx(0), e._uU(1, "Question 0/0"), e.BQk())
            }
            function Me(o, d) {
                if (1 & o && (e.ynx(0), e._uU(1), e.BQk()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.AsE("Question ", c.currentIndex, "/", c.numberOfItem, "")
                }
            }
            const ve = function (o) {
                    return {width: o}
                },
                ke = function (o, d) {
                    return {"m-course-player-assessment__progress__item__bar__inner--active": o, "m-course-player-assessment__progress__item__bar__inner--completed": d}
                };
            let Be = (() => {
                    var o;
                    class d {
                        calculateProgress(r = 1) {
                            if (!this.numberOfItem || !this.startTracking) 
                                return null;
                            
                            let a = this.numberOfItem / 4;
                            if (this.currentIndex >= a * r) 
                                return "100%";
                            
                            if (!(this.currentIndex >= a * (r - 1) && this.currentIndex <= a * r)) 
                                return null;
                            
                            const B = 100 * (this.currentIndex -(r - 1) * a) / a;
                            return 0 === B ? null : `${B}%`
                        }
                    }
                    return(o = d).\u0275fac = function (r) {
                        return new(r || o)
                    },
                    o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [
                            ["app-course-player-assessment-tracking"]
                        ],
                        inputs: {
                            numberOfItem: "numberOfItem",
                            currentIndex: "currentIndex",
                            startTracking: "startTracking"
                        },
                        decls: 17,
                        vars: 30,
                        consts: [
                            [
                                1, "m-course-player-assessment__tracking"
                            ],
                            [
                                1, "m-course-player-assessment__progress"
                            ],
                            [
                                1, "m-course-player-assessment__progress__item"
                            ],
                            [
                                1, "m-course-player-assessment__progress__item__bar"
                            ],
                            [
                                1,
                                "m-course-player-assessment__progress__item__bar__inner",
                                3,
                                "ngStyle",
                                "ngClass"
                            ],
                            [
                                1, "m-course-player-assessment__tracking__text"
                            ],
                            [
                                4, "ngIf"
                            ]
                        ],
                        template: function (r, a) {
                            1 & r && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3),
                            e._UZ(4, "div", 4),
                            e.qZA()(),
                            e.TgZ(5, "div", 2)(6, "div", 3),
                            e._UZ(7, "div", 4),
                            e.qZA()(),
                            e.TgZ(8, "div", 2)(9, "div", 3),
                            e._UZ(10, "div", 4),
                            e.qZA()(),
                            e.TgZ(11, "div", 2)(12, "div", 3),
                            e._UZ(13, "div", 4),
                            e.qZA()()(),
                            e.TgZ(14, "div", 5),
                            e.YNc(15, we, 2, 0, "ng-container", 6),
                            e.YNc(16, Me, 2, 2, "ng-container", 6),
                            e.qZA()()),
                            2 & r && (e.xp6(4), e.Q6J("ngStyle", e.VKq(10, ve, a.calculateProgress(1)))("ngClass", e.WLB(12, ke, null !== a.calculateProgress(1) && "100%" !== a.calculateProgress(1), "100%" === a.calculateProgress(1))),
                            e.xp6(3),
                            e.Q6J("ngStyle", e.VKq(15, ve, a.calculateProgress(2)))("ngClass", e.WLB(17, ke, null !== a.calculateProgress(2) && "100%" !== a.calculateProgress(2), "100%" === a.calculateProgress(2))),
                            e.xp6(3),
                            e.Q6J("ngStyle", e.VKq(20, ve, a.calculateProgress(3)))("ngClass", e.WLB(22, ke, null !== a.calculateProgress(3) && "100%" !== a.calculateProgress(3), "100%" === a.calculateProgress(3))),
                            e.xp6(3),
                            e.Q6J("ngStyle", e.VKq(25, ve, a.calculateProgress(4)))("ngClass", e.WLB(27, ke, null !== a.calculateProgress(4) && "100%" !== a.calculateProgress(4), "100%" === a.calculateProgress(4))),
                            e.xp6(2),
                            e.Q6J("ngIf", ! a.numberOfItem),
                            e.xp6(1),
                            e.Q6J("ngIf", a.numberOfItem))
                        },
                        dependencies: [
                            m.mk, m.O5, m.PC
                        ],
                        styles: ['.m-course-player-assessment__tracking[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-top:30px;align-items:center}.m-course-player-assessment__tracking__text[_ngcontent-%COMP%]{font-size:14px;padding-left:24px}.m-course-player-assessment__progress[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:65%}@media (min-width: 781px){.m-course-player-assessment__progress[_ngcontent-%COMP%]{width:80%}}.m-course-player-assessment__progress__item[_ngcontent-%COMP%]{border-right:none;box-shadow:0 2px 5px #32323233;height:5px;position:relative;width:25%}.m-course-player-assessment__progress__item[_ngcontent-%COMP%]:after{background:#b5b5b5;content:"";height:5px;position:absolute;right:-5px;top:0;transition:all .3s ease-in;transition-delay:.3s;width:9px;z-index:9}.m-course-player-assessment__progress__item[_ngcontent-%COMP%]:last-child:after{background:url(https://cdn01.alison-static.net/public/html/site/img/done.svg) no-repeat;height:26px;right:-12px;top:-27px;width:24px}.m-course-player-assessment__progress__item__bar[_ngcontent-%COMP%]{background:#fff;height:5px;width:100%}.m-course-player-assessment__progress__item__bar__inner[_ngcontent-%COMP%]{background:#f99d26;height:5px;position:relative;transition:all .3s cubic-bezier(.69,.08,.9,.51);width:0}.m-course-player-assessment__progress__item__bar__inner--active[_ngcontent-%COMP%]:after{opacity:1!important}.m-course-player-assessment__progress__item__bar__inner--completed[_ngcontent-%COMP%]{background:#00a950!important}.m-course-player-assessment__progress__item__bar__inner--completed[_ngcontent-%COMP%]:after{opacity:0!important}.m-course-player-assessment__progress__item__bar__inner[_ngcontent-%COMP%]:after{background:#f99d26;border-radius:100%;content:"";height:10px;opacity:0;position:absolute;right:0;top:50%;transform:translateY(-50%);transition:all .3s ease-in;width:10px}']
                    }),
                    d
                })(),
                Ze = (() => {
                    var o;
                    class d {
                        constructor() {
                            this.retry = new e.vpe,
                            this.review = new e.vpe
                        }
                        onRetry() {
                            this.retry.emit()
                        }
                        onReview() {
                            this.review.emit()
                        }
                    }
                    return(o = d).\u0275fac = function (r) {
                        return new(r || o)
                    },
                    o.\u0275cmp = e.Xpm({
                        type: o,
                        selectors: [
                            ["app-course-player-assessment-score"]
                        ],
                        inputs: {
                            passingScore: "passingScore",
                            score: "score",
                            title: "title",
                            icon: "icon",
                            description: "description",
                            actionButtonText: "actionButtonText"
                        },
                        outputs: {
                            retry: "retry",
                            review: "review"
                        },
                        decls: 31,
                        vars: 14,
                        consts: [
                            [
                                1, "m-course-player-assessment__wrapper", "m-course-player-assessment__wrapper--score", "m-course-player-assessment__background"
                            ],
                            [
                                1, "m-course-player-assessment__wrapper__container"
                            ],
                            [
                                1, "m-course-player-assessment__wrapper__heading"
                            ],
                            [
                                1, "m-course-player-assessment__wrapper__content"
                            ],
                            [
                                1, "m-course-player-assessment__wrapper__text"
                            ],
                            [
                                1, "fill-circle"
                            ],
                            [
                                1, "text"
                            ],
                            [
                                1, "content"
                            ],
                            [
                                1, "finalScore"
                            ],
                            [
                                1, "info"
                            ],
                            [
                                1, "fill"
                            ],
                            [
                                1, "m-course-player-assessment__wrapper__actions"
                            ],
                            [
                                3, "click"
                            ]
                        ],
                        template: function (r, a) {
                            1 & r && (e.TgZ(0, "div", 0)(1, "div", 1)(2, "h2", 2),
                            e._uU(3),
                            e.qZA(),
                            e.TgZ(4, "div", 3)(5, "h4"),
                            e._uU(6),
                            e.qZA(),
                            e.TgZ(7, "div", 4)(8, "p", 5)(9, "span", 6)(10, "span", 7)(11, "span", 8),
                            e._uU(12),
                            e.qZA(),
                            e._uU(13, "% "),
                            e.qZA(),
                            e.TgZ(14, "span", 9),
                            e._uU(15, "Your score"),
                            e.qZA()(),
                            e._UZ(16, "span", 10),
                            e.qZA(),
                            e.TgZ(17, "p", 5)(18, "span", 6)(19, "span", 7)(20, "span", 8),
                            e._uU(21),
                            e.qZA(),
                            e._uU(22, "% "),
                            e.qZA(),
                            e.TgZ(23, "span", 9),
                            e._uU(24, "Passing score"),
                            e.qZA()(),
                            e._UZ(25, "span", 10),
                            e.qZA()()(),
                            e.TgZ(26, "div", 11)(27, "button", 12),
                            e.NdJ("click", function () {
                                return a.onRetry()
                            }),
                            e._uU(28),
                            e.qZA(),
                            e.TgZ(29, "button", 12),
                            e.NdJ("click", function () {
                                return a.onReview()
                            }),
                            e._uU(30, " Review "),
                            e.qZA()()()()),
                            2 & r && (e.xp6(3), e.hij(" ", a.title, " "), e.xp6(2), e.Gre("m-course-player-assessment__wrapper__banner m-course-player-assessment__wrapper__banner--", a.icon, ""), e.xp6(1), e.hij(" ", a.description, " "), e.xp6(6), e.Oqu(a.score), e.xp6(4), e.Jzz("height: ", a.score, "%;"), e.xp6(5), e.Oqu(a.passingScore), e.xp6(4), e.Jzz("height: ", a.passingScore, "%;"), e.xp6(3), e.hij(" ", a.actionButtonText, " "))
                        },
                        styles: [
                            ".m-course-player-assessment__wrapper{color:#3f4a52;padding:10px 20px 80px;margin:0 auto;letter-spacing:.04em;max-width:765px}.m-course-player-assessment__wrapper__heading{font-size:30px;font-weight:500;line-height:33px;color:#3f4a52;margin:40px 0 0;word-break:break-word;text-align:center}.m-course-player-assessment__wrapper__content{background:rgba(129,51,89,.05);margin:40px 0 20px;min-height:290px}.m-course-player-assessment__wrapper__content--tiny{margin:40px auto 20px;max-width:600px;padding:0}.m-course-player-assessment__wrapper__banner{font-size:18px;line-height:1.1;font-weight:500;color:#fff;background:#813359;border-top-left-radius:5px;border-top-right-radius:5px;display:block;padding:20px 15px;margin:0;text-align:center}.m-course-player-assessment__wrapper__banner__subtitle{display:block;font-size:12px;padding-top:14px}.m-course-player-assessment__wrapper__banner__subtitle .bold{font-weight:700;font-size:20px}.m-course-player-assessment__wrapper__text{padding:35px 20px;max-height:250px;overflow:auto;line-height:24px;white-space:pre-line}.m-course-player-assessment__wrapper__actions{display:flex;justify-content:center;margin-top:20px}.m-course-player-assessment__wrapper__actions button{margin:15px;display:inline-block}\n", '.m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__container{margin:0 auto;max-width:550px}.m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{font-size:16px;font-weight:400;position:relative}.m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner--success:after{content:"";background:url(https://cdn01.alison-static.net/publishing/dist/img/success.png) no-repeat;background-size:cover;display:block;position:absolute;top:-20px;right:0;height:50px;width:50px}.m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner--failed:after{content:"";background:url(https://cdn01.alison-static.net/publishing/dist/img/failed.png) no-repeat;background-size:cover;display:block;position:absolute;top:-20px;right:0;height:50px;width:50px}.m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__text{display:flex}.m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__content{background:none}\n'
                        ],
                        encapsulation: 2
                    }),
                    d
                })();
            function Fe(o, d) {
                if (1 & o && (e.TgZ(0, "span"), e._uU(1), e.qZA()), 2 & o) {
                    const c = e.oxw(2).index;
                    e.xp6(1),
                    e.hij("Q", c + 1, "")
                }
            }
            function Ke(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "app-course-player-question", 10),
                    e.NdJ("sendAnswer", function () {
                        e.CHM(c);
                        const a = e.oxw(4);
                        return e.KtG(a.return())
                    }),
                    e.qZA()
                }
                if (2 & o) {
                    const c = e.oxw(2).$implicit,
                        r = e.oxw(2);
                    e.Q6J("id", c.id)("responseData", r.response)("userResponse", r.userResponse)("content", c.content)("preview", !0)
                }
            }
            function He(o, d) {
                1 & o && (e.TgZ(0, "mat-tab"), e.YNc(1, Fe, 2, 1, "ng-template", 8), e.YNc(2, Ke, 1, 5, "ng-template", 9), e.qZA())
            }
            function Ye(o, d) {
                if (1 & o && (e.ynx(0), e.YNc(1, He, 3, 0, "mat-tab", 7), e.BQk()), 2 & o) {
                    const c = d.$implicit;
                    e.xp6(1),
                    e.Q6J("ngIf", c.id)
                }
            }
            function We(o, d) {
                if (1 & o && (e.TgZ(0, "div", 1)(1, "div", 2)(2, "h2", 3),
                e._uU(3, " Your score: "),
                e.TgZ(4, "strong"),
                e._uU(5),
                e.qZA()(),
                e.TgZ(6, "div", 4)(7, "mat-tab-group", 5),
                e.YNc(8, Ye, 2, 1, "ng-container", 6),
                e.qZA()()()()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(5),
                    e.hij("", c.score, "%"),
                    e.xp6(3),
                    e.Q6J("ngForOf", c.assessment.slides)
                }
            }
            let Xe = (() => {
                var o;
                class d {
                    constructor() {
                        this.returnBack = new e.vpe
                    }
                    return() {
                        this.returnBack.emit()
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-assessment-review"]
                    ],
                    inputs: {
                        score: "score",
                        assessment: "assessment",
                        response: "response",
                        userResponse: "userResponse"
                    },
                    outputs: {
                        returnBack: "returnBack"
                    },
                    decls: 1,
                    vars: 1,
                    consts: [
                        [
                            "class", "m-course-player-assessment__wrapper m-course-player-assessment__wrapper--review m-course-player-assessment__background", 4, "ngIf"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper", "m-course-player-assessment__wrapper--review", "m-course-player-assessment__background"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__container"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__heading"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper__content"
                        ],
                        [
                            "disablePagination",
                            "",
                            "disableRipple",
                            "",
                            "mat-stretch-tabs",
                            "false",
                            "animationDuration",
                            "0ms"
                        ],
                        [
                            4, "ngFor", "ngForOf"
                        ],
                        [
                            4, "ngIf"
                        ],
                        [
                            "mat-tab-label", ""
                        ],
                        [
                            "matTabContent", ""
                        ],
                        [
                            "buttonText",
                            "Return",
                            3,
                            "id",
                            "responseData",
                            "userResponse",
                            "content",
                            "preview",
                            "sendAnswer"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && e.YNc(0, We, 9, 2, "div", 0),
                        2 & r && e.Q6J("ngIf", a.assessment)
                    },
                    dependencies: [
                        m.sg,
                        m.O5,
                        V.SK,
                        V.gz,
                        V.R7,
                        V.Ql,
                        G
                    ],
                    styles: [
                        ".m-course-player-assessment__wrapper{color:#3f4a52;padding:10px 20px 80px;margin:0 auto;letter-spacing:.04em;max-width:765px}.m-course-player-assessment__wrapper__heading{font-size:30px;font-weight:500;line-height:33px;color:#3f4a52;margin:40px 0 0;word-break:break-word;text-align:center}.m-course-player-assessment__wrapper__content{background:rgba(129,51,89,.05);margin:40px 0 20px;min-height:290px}.m-course-player-assessment__wrapper__content--tiny{margin:40px auto 20px;max-width:600px;padding:0}.m-course-player-assessment__wrapper__banner{font-size:18px;line-height:1.1;font-weight:500;color:#fff;background:#813359;border-top-left-radius:5px;border-top-right-radius:5px;display:block;padding:20px 15px;margin:0;text-align:center}.m-course-player-assessment__wrapper__banner__subtitle{display:block;font-size:12px;padding-top:14px}.m-course-player-assessment__wrapper__banner__subtitle .bold{font-weight:700;font-size:20px}.m-course-player-assessment__wrapper__text{padding:35px 20px;max-height:250px;overflow:auto;line-height:24px;white-space:pre-line}.m-course-player-assessment__wrapper__actions{display:flex;justify-content:center;margin-top:20px}.m-course-player-assessment__wrapper__actions button{margin:15px;display:inline-block}\n", ".m-course-player-assessment__wrapper--review .m-course-player-assessment__wrapper__heading{font-weight:400}.m-course-player-assessment__wrapper--review .m-course-player-assessment__wrapper__content{background:none;margin-top:60px}.m-course-player-assessment__wrapper--review .m-course-player__question__answers{max-width:700px}.m-course-player-assessment__wrapper--review .m-course-player__question{background:none}.m-course-player-assessment__wrapper--review .mat-tab-labels{background:rgba(0,0,0,.15);flex-wrap:wrap;justify-content:center}.m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{color:#fff;opacity:1;padding:12px 16px;margin:3px;flex-grow:initial!important;height:auto;min-width:initial}.m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{background:#FFF}\n"
                    ],
                    encapsulation: 2
                }),
                d
            })();
            function Je(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " Once you pass this Assessment you can get your official Certification! "), e.BQk())
            }
            function $e(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " You\u2019ve done over 25% of the Assessment! Well Done! "), e.BQk())
            }
            function Ge(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " You\u2019re halfway there, keep going! "), e.BQk())
            }
            function Qe(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " Just a few more questions and you can get your official Certification! "), e.BQk())
            }
            function Ve(o, d) {
                if (1 & o && (e.ynx(0), e.YNc(1, Je, 2, 0, "ng-container", 13), e.YNc(2, $e, 2, 0, "ng-container", 13), e.YNc(3, Ge, 2, 0, "ng-container", 13), e.YNc(4, Qe, 2, 0, "ng-container", 13), e.BQk()), 2 & o) {
                    const c = e.oxw(2);
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage < 25),
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage >= 25 && c.progressPercentage < 50),
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage >= 50 && c.progressPercentage < 75),
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage >= 75)
                }
            }
            function qe(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " You must pass all Assessments in this course to get your official Certification. Let\u2019s go! "), e.BQk())
            }
            function et(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " You\u2019ve done over 25% of the Assessment! Well Done! "), e.BQk())
            }
            function tt(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " You\u2019re halfway there, keep going! "), e.BQk())
            }
            function nt(o, d) {
                1 & o && (e.ynx(0), e._uU(1, " Just a few more questions, you\u2019re almost there! "), e.BQk())
            }
            function ot(o, d) {
                if (1 & o && (e.ynx(0), e.YNc(1, qe, 2, 0, "ng-container", 13), e.YNc(2, et, 2, 0, "ng-container", 13), e.YNc(3, tt, 2, 0, "ng-container", 13), e.YNc(4, nt, 2, 0, "ng-container", 13), e.BQk()), 2 & o) {
                    const c = e.oxw(2);
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage < 25),
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage >= 25 && c.progressPercentage < 50),
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage >= 50 && c.progressPercentage < 75),
                    e.xp6(1),
                    e.Q6J("ngIf", c.progressPercentage >= 75)
                }
            }
            function at(o, d) {
                if (1 & o && (e.TgZ(0, "h3", 12), e.YNc(1, Ve, 5, 4, "ng-container", 13), e.YNc(2, ot, 5, 4, "ng-container", 13), e.qZA()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.Q6J("ngIf", 2 === c.assessmentType),
                    e.xp6(1),
                    e.Q6J("ngIf", 1 === c.assessmentType)
                }
            }
            function ct(o, d) {
                1 & o && e.GkF(0)
            }
            function rt(o, d) {
                1 & o && e.GkF(0)
            }
            function it(o, d) {
                1 & o && e.GkF(0)
            }
            function lt(o, d) {
                1 & o && e.GkF(0)
            }
            function st(o, d) {
                1 & o && e.GkF(0)
            }
            function dt(o, d) {
                1 & o && e.GkF(0)
            }
            function mt(o, d) {
                1 & o && e.GkF(0)
            }
            function pt(o, d) {
                if (1 & o && (e.TgZ(0, "div", 14), e._uU(1), e._UZ(2, "br"), e._uU(3, " You can now claim your official "), e.TgZ(4, "a", 15), e._uU(5, "certification here!"), e.qZA(), e._UZ(6, "br"), e.qZA()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.hij(" Congratulations! You have completed ", c.courseName, "! "),
                    e.xp6(3),
                    e.hYB("href", "", c.appUrl, "/shop?course=", c.courseId, "", e.LSH)
                }
            }
            function gt(o, d) {
                if (1 & o && e._UZ(0, "app-course-player-assessment-locked", 17), 2 & o) {
                    const c = e.oxw(2);
                    e.Q6J("topics", c.topics)("assessmentType", c.assessmentType)
                }
            }
            function ft(o, d) {
                if (1 & o && e.YNc(0, gt, 1, 2, "app-course-player-assessment-locked", 16), 2 & o) {
                    const c = e.oxw();
                    e.Q6J("ngIf", ! c.canPassAssessment)
                }
            }
            function bt(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "app-course-player-assessment-welcome", 19),
                    e.NdJ("buttonClicked", function () {
                        e.CHM(c);
                        const a = e.oxw(2);
                        return e.KtG(a.goNextSlide())
                    }),
                    e.qZA()
                }
                if (2 & o) {
                    const c = e.oxw(2);
                    e.Q6J("heading", c.welcomeTexts[c.currentSlide].heading)("tinyContainer", c.welcomeTexts[c.currentSlide].tinyContainer)("banner", c.welcomeTexts[c.currentSlide].banner)("content", c.welcomeTexts[c.currentSlide].content)("buttonText", c.welcomeTexts[c.currentSlide].buttonText)
                }
            }
            function ut(o, d) {
                if (1 & o && e.YNc(0, bt, 1, 5, "app-course-player-assessment-welcome", 18), 2 & o) {
                    const c = e.oxw();
                    e.Q6J("ngIf", c.canPassAssessment && c.assessment)
                }
            }
            function _t(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "button", 25),
                    e.NdJ("click", function () {
                        e.CHM(c);
                        const a = e.oxw(2);
                        return e.KtG(a.takeQuestion())
                    }),
                    e._uU(1, " Next "),
                    e.qZA()
                }
            }
            function ht(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "button", 26),
                    e.NdJ("click", function () {
                        e.CHM(c);
                        const a = e.oxw(2);
                        return e.KtG(a.seeResult())
                    }),
                    e._uU(1, " Finish "),
                    e.qZA()
                }
            }
            function xt(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "div", 20)(1, "app-course-player-question", 21),
                    e.NdJ("sendAnswer", function (a) {
                        e.CHM(c);
                        const B = e.oxw();
                        return e.KtG(B.takeQuestion(a))
                    }),
                    e.qZA(),
                    e.TgZ(2, "div", 22),
                    e.YNc(3, _t, 2, 0, "button", 23),
                    e.YNc(4, ht, 2, 0, "button", 24),
                    e.qZA()()
                }
                if (2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.Q6J("content", c.currentQuestionContent)("id", c.questionId),
                    e.xp6(2),
                    e.Q6J("ngIf", ! c.goToResultScreen),
                    e.xp6(1),
                    e.Q6J("ngIf", c.goToResultScreen)
                }
            }
            function Ct(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "app-course-player-assessment-score", 27),
                    e.NdJ("retry", function () {
                        e.CHM(c);
                        const a = e.oxw();
                        return e.KtG(a.retry())
                    })("review", function () {
                        e.CHM(c);
                        const a = e.oxw();
                        return e.KtG(a.review())
                    }),
                    e.qZA()
                }
                if (2 & o) {
                    const c = e.oxw();
                    e.Q6J("passingScore", c.assessment ? "" + c.assessment.passing_score : "100")("score", c.score)
                }
            }
            function Pt(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "app-course-player-assessment-score", 28),
                    e.NdJ("retry", function () {
                        e.CHM(c);
                        const a = e.oxw();
                        return e.KtG(a.finish())
                    })("review", function () {
                        e.CHM(c);
                        const a = e.oxw();
                        return e.KtG(a.review())
                    }),
                    e.qZA()
                }
                if (2 & o) {
                    const c = e.oxw();
                    e.Q6J("passingScore", c.assessment ? "" + c.assessment.passing_score : "100")("score", c.score)
                }
            }
            function yt(o, d) {
                if (1 & o) {
                    const c = e.EpF();
                    e.TgZ(0, "app-course-player-assessment-review", 29),
                    e.NdJ("returnBack", function () {
                        e.CHM(c);
                        const a = e.oxw();
                        return e.KtG(a.closeReview())
                    }),
                    e.qZA()
                }
                if (2 & o) {
                    const c = e.oxw();
                    e.Q6J("score", c.score)("response", c.responseData)("userResponse", c.userResponse)("assessment", c.assessment)
                }
            }
            let Mt = (() => {
                var o;
                class d {
                    constructor(r, a) {
                        this._courseService = r,
                        this._shoppingCartService = a,
                        this.score = "0",
                        this.attempt = 1,
                        this.questionIndex = 1,
                        this.showQuestion = !1,
                        this.completed = !1,
                        this.resultScreen = !1,
                        this.reviewScreen = !1,
                        this.goToResultScreen = !1,
                        this.progressPercentage = 0,
                        this.topics = [],
                        this.responseData = {},
                        this.userResponse = {},
                        this.welcomeTexts = [],
                        this.currentSlide = 0,
                        this._processedExit = !1
                    }
                    ngOnInit() {
                        this.completed = this._courseService.completed,
                        this.appUrl = M.N.appUrl,
                        this.startTime = performance.now(),
                        this.topics = this._courseService.topics,
                        this.courseName = this._courseService.courseName,
                        this.courseId = "" + this._courseService.courseId,
                        this.progressPercentage = 100 * this.questionIndex / (this.assessment ?. number_of_questions || 1),
                        this.canPassAssessment = this._courseService.canPassAssessment,
                        this.assessmentType = this._courseService.isAssessment,
                        this.welcomeTexts.push({
                            heading: this.assessment ?. name || "",
                            tinyContainer: !1,
                            banner: `Your Assessment\n            <span class="m-course-player-assessment__wrapper__banner__subtitle">\n                (you need to score <span class="bold">${
                                this.assessment ?. passing_score
                            }%</span> or more to pass)\n            </span>`,
                            content: `${
                                this.assessment ?. description
                            }`,
                            buttonText: "Next"
                        }),
                        this.welcomeTexts.push({
                            heading: this.assessment ?. name || "",
                            tinyContainer: !0,
                            banner: "Learning Outcomes",
                            content: `${
                                this.assessment ?. learning_outcomes
                            }`,
                            buttonText: "Start"
                        }),
                        this._shoppingCartService.getUserInfo().subscribe(r => {
                            this.user = r
                        }),
                        this.currentQuestionContent = this.assessment ?. slides[this.questionIndex - 1].content,
                        this.questionId = this.assessment ?. slides[this.questionIndex - 1].id
                    }
                    onExiting(r) {
                        const a = performance.now(),
                            B = s.utc(a - this.startTime).format("HH:mm:ss.SS");
                        return this._courseService.trackUser(this.user ?. id, B, this.attempt, r)
                    }
                    ngOnDestroy() {
                        this.startTime = 0
                    }
                    takeQuestion(r) {
                        if (r ?. responseData && (this.responseData = r ?. responseData, this.userResponse = r ?. userResponse), !this.questionId || !this.responseData[this.questionId]) 
                            return;
                        
                        const a = this.questionIndex + 1;
                        this.progressPercentage = 100 * a / (this.assessment ?. number_of_questions || 1),
                        this.assessment && a <= this.assessment.number_of_questions && (this.questionIndex = a, this.currentQuestionContent = this.assessment ?. slides[this.questionIndex - 1].content, this.questionId = this.assessment ?. slides[this.questionIndex - 1].id),
                        this.goToResultScreen = this.questionIndex === this.assessment ?. number_of_questions
                    }
                    closeReview() {
                        this.reviewScreen = !1,
                        this.resultScreen = !0
                    }
                    onIOSPageNext() {
                        !0 !== this._processedExit && (this._processedExit =! 0, navigator.platform && /iPad|iPhone|iPod|MacIntel/.test(navigator.platform) && typeof this.succeed > "u" && this._courseService.isAssessment !== g.TOPIC && this.onExiting({cmi__core__lesson_status: "incomplete"}))
                    }
                    visibilitychange() {
                        !0 !== this._processedExit && (this._processedExit =! 0, typeof this.succeed > "u" && this._courseService.isAssessment !== g.TOPIC && this.onExiting({cmi__core__lesson_status: "incomplete"}))
                    }
                    seeResult() {
                        const r = Object.keys(this.responseData).filter(a => this.responseData[a] ?. correct);
                        this.assessment ?. number_of_questions && (this.score =( 100 * r.length / this.assessment ?. number_of_questions).toFixed(0)),
                        this.succeed = typeof this.assessment ?. passing_score < "u" && Number(this.score) >= this.assessment ?. passing_score,
                        this.succeed && this.assessmentType === g.FINAL ? this.onExiting({
                            cmi__core__score__raw: Number(this.score),
                            cmi__core__score__max: 100,
                            cmi__core__exit: "suspend",
                            attempt: this.attempt
                        }).subscribe(() => {
                            document.dispatchEvent(new CustomEvent("course:player:assessment:finished", {
                                detail: {
                                    score: Number(this.score)
                                }
                            }))
                        }) : (this.resultScreen =! 0, this.onExiting({
                            cmi__core__score__raw: Number(this.score),
                            attempt: this.attempt
                        }).subscribe())
                    }
                    finish() {
                        const r = document.querySelector(".player-nav--top a");
                        r ?. href && (window.location.href = r ?. href)
                    }
                    retry() {
                        this.showQuestion = !0,
                        this.questionIndex = 1,
                        this.resultScreen = !1,
                        this.goToResultScreen = !1,
                        this.questionId = this.assessment ?. slides[this.questionIndex - 1].id,
                        this.currentQuestionContent = this.assessment ?. slides[this.questionIndex - 1].content,
                        this.responseData = {},
                        this.userResponse = {},
                        this.attempt = this.attempt + 1
                    }
                    review() {
                        this.reviewScreen = !0,
                        this.resultScreen = !1
                    }
                    goNextSlide() {
                        this.currentSlide = this.currentSlide + 1,
                        this.showQuestion = typeof this.welcomeTexts[this.currentSlide] > "u"
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.Y36(b.N), e.Y36(x.F))
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player-assessment"]
                    ],
                    hostBindings: function (r, a) {
                        1 & r && e.NdJ("pagehide", function (Z) {
                            return a.onIOSPageNext(Z)
                        }, !1, e.Jf7)("beforeunload", function (Z) {
                            return a.visibilitychange(Z)
                        }, !1, e.Jf7)
                    },
                    inputs: {
                        assessment: "assessment",
                        theme: "theme"
                    },
                    decls: 26,
                    vars: 21,
                    consts: [
                        [
                            1, "m-course-player-assessment"
                        ],
                        [
                            "class", "m-course-player-assessment__title", 4, "ngIf"
                        ],
                        [
                            3, "startTracking", "numberOfItem", "currentIndex"
                        ],
                        [
                            1, "m-course-player-assessment__content"
                        ],
                        [
                            4, "ngIf", "ngIfThen"
                        ],
                        [
                            "passed", ""
                        ],
                        [
                            "locked", ""
                        ],
                        [
                            "assessmentPresentation", ""
                        ],
                        [
                            "assessmentQuestion", ""
                        ],
                        [
                            "assessmentScoreFailed", ""
                        ],
                        [
                            "assessmentScoreSucess", ""
                        ],
                        [
                            "assessmentReview", ""
                        ],
                        [
                            1, "m-course-player-assessment__title"
                        ],
                        [
                            4, "ngIf"
                        ],
                        [
                            1, "buy-here"
                        ],
                        [
                            "title", "Buy your cert", 3, "href"
                        ],
                        [
                            3,
                            "topics",
                            "assessmentType",
                            4,
                            "ngIf"
                        ],
                        [
                            3, "topics", "assessmentType"
                        ],
                        [
                            3,
                            "heading",
                            "tinyContainer",
                            "banner",
                            "content",
                            "buttonText",
                            "buttonClicked",
                            4,
                            "ngIf"
                        ],
                        [
                            3,
                            "heading",
                            "tinyContainer",
                            "banner",
                            "content",
                            "buttonText",
                            "buttonClicked"
                        ],
                        [
                            1, "m-course-player-assessment__wrapper", "m-course-player-assessment__background"
                        ],
                        [
                            3, "content", "id", "sendAnswer"
                        ],
                        [
                            1, "m-course-player-assessment__actions"
                        ],
                        [
                            "class",
                            "next-button",
                            3,
                            "click",
                            4,
                            "ngIf"
                        ],
                        [
                            "class",
                            "finish-button",
                            3,
                            "click",
                            4,
                            "ngIf"
                        ],
                        [
                            1, "next-button", 3, "click"
                        ],
                        [
                            1, "finish-button", 3, "click"
                        ],
                        [
                            "title",
                            "Sorry! You failed.",
                            "description",
                            "You can always try the assessment again.",
                            "actionButtonText",
                            "Retry",
                            "icon",
                            "failed",
                            3,
                            "passingScore",
                            "score",
                            "retry",
                            "review"
                        ],
                        [
                            "title",
                            "Congratulations You've Passed",
                            "description",
                            "Well Done on passing your Assessment.",
                            "actionButtonText",
                            "Finish",
                            "icon",
                            "success",
                            3,
                            "passingScore",
                            "score",
                            "retry",
                            "review"
                        ],
                        [
                            3,
                            "score",
                            "response",
                            "userResponse",
                            "assessment",
                            "returnBack"
                        ]
                    ],
                    template: function (r, a) {
                        if (1 & r && (e.TgZ(0, "div")(1, "div", 0),
                        e.YNc(2, at, 3, 2, "h3", 1),
                        e._UZ(3, "app-course-player-assessment-tracking", 2),
                        e.TgZ(4, "div", 3),
                        e.YNc(5, ct, 1, 0, "ng-container", 4),
                        e.YNc(6, rt, 1, 0, "ng-container", 4),
                        e.YNc(7, it, 1, 0, "ng-container", 4),
                        e.YNc(8, lt, 1, 0, "ng-container", 4),
                        e.YNc(9, st, 1, 0, "ng-container", 4),
                        e.YNc(10, dt, 1, 0, "ng-container", 4),
                        e.YNc(11, mt, 1, 0, "ng-container", 4),
                        e.qZA()()(),
                        e.YNc(12, pt, 7, 3, "ng-template", null, 5, e.W1O),
                        e.YNc(14, ft, 1, 1, "ng-template", null, 6, e.W1O),
                        e.YNc(16, ut, 1, 1, "ng-template", null, 7, e.W1O),
                        e.YNc(18, xt, 5, 4, "ng-template", null, 8, e.W1O),
                        e.YNc(20, Ct, 1, 2, "ng-template", null, 9, e.W1O),
                        e.YNc(22, Pt, 1, 2, "ng-template", null, 10, e.W1O),
                        e.YNc(24, yt, 1, 4, "ng-template", null, 11, e.W1O)), 2 & r) {
                            const B = e.MAs(13),
                                Z = e.MAs(15),
                                me = e.MAs(17),
                                te = e.MAs(19),
                                be = e.MAs(21),
                                de = e.MAs(23),
                                ze = e.MAs(25);
                            e.Gre("m-course-player m-course-player--", a.theme, ""),
                            e.xp6(2),
                            e.Q6J("ngIf", ! a.resultScreen && ! a.reviewScreen),
                            e.xp6(1),
                            e.Q6J("startTracking", a.showQuestion)("numberOfItem", null == a.assessment ? null : a.assessment.number_of_questions)("currentIndex", a.questionIndex),
                            e.xp6(2),
                            e.Q6J("ngIf", a.completed)("ngIfThen", B),
                            e.xp6(1),
                            e.Q6J("ngIf", ! a.canPassAssessment)("ngIfThen", Z),
                            e.xp6(1),
                            e.Q6J("ngIf", ! a.showQuestion && a.canPassAssessment && ! a.resultScreen && ! a.reviewScreen)("ngIfThen", me),
                            e.xp6(1),
                            e.Q6J("ngIf", a.showQuestion && a.currentQuestionContent && ! a.resultScreen && ! a.reviewScreen)("ngIfThen", te),
                            e.xp6(1),
                            e.Q6J("ngIf", a.resultScreen && ! a.succeed && ! a.reviewScreen)("ngIfThen", be),
                            e.xp6(1),
                            e.Q6J("ngIf", a.resultScreen && a.succeed && ! a.reviewScreen)("ngIfThen", de),
                            e.xp6(1),
                            e.Q6J("ngIf", a.reviewScreen && a.assessment)("ngIfThen", ze)
                        }
                    },
                    dependencies: [
                        m.O5,
                        je,
                        G,
                        Le,
                        Be,
                        Ze,
                        Xe
                    ],
                    styles: [".m-course-player-assessment{font-family:Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;margin:20px auto 0;max-width:900px}.m-course-player-assessment .fill-circle{display:flex;align-items:center;justify-content:center;text-align:center;border:4px solid rgba(44,119,105,.4);border-radius:50%;color:#3f4a52;height:160px;margin:0 auto;position:relative;overflow:hidden;width:160px;white-space:inherit}.m-course-player-assessment .fill-circle .content{font-size:30px;margin-bottom:5px}.m-course-player-assessment .fill-circle .finalScore{font-size:50px}.m-course-player-assessment .fill-circle .text{display:flex;flex-direction:column}.m-course-player-assessment .fill-circle .fill{background:rgba(44,119,105,.4);bottom:0;height:100%;position:absolute;left:0;width:100%;z-index:0}.m-course-player-assessment__background{background:url(https://cdn01.alison-static.net/publishing/dist/img/bg.png) no-repeat #f4f4f4;background-size:contain;background-position-y:70px}.m-course-player-assessment__title{font-size:20px;font-weight:500;margin:0 0 10px;text-align:center}.m-course-player-assessment__content{background-color:#fff;box-shadow:0 3px 3px #32323233;margin:20px 0 35px;min-height:586px;position:relative;width:100%}.m-course-player-assessment__actions{display:flex;justify-content:flex-end}.m-course-player-assessment__actions button{display:block}.m-course-player-assessment .m-course-player__question{padding:0}.m-course-player-assessment .m-course-player__question__answers{max-width:initial}.m-course-player-assessment .m-course-player__question__answers__item{font-size:16px;padding:12px 15px}\n"],
                    encapsulation: 2
                }),
                d
            })();
            function Ot(o, d) {
                if (1 & o && (e.TgZ(0, "div", 6), e._uU(1), e._UZ(2, "br"), e._uU(3, " You can now claim your official "), e.TgZ(4, "a", 7), e._uU(5, "certification here!"), e.qZA(), e._UZ(6, "br"), e.qZA()), 2 & o) {
                    const c = e.oxw(2);
                    e.xp6(1),
                    e.hij(" Congratulations! You have completed ", c.courseName, "! "),
                    e.xp6(3),
                    e.hYB("href", "", c.appUrl, "/shop?course=", c.courseId, "", e.LSH)
                }
            }
            function wt(o, d) {
                1 & o && e.GkF(0)
            }
            function vt(o, d) {
                if (1 & o && (e.ynx(0), e.TgZ(1, "section", 8), e.YNc(2, wt, 1, 0, "ng-container", 9), e.qZA(), e.BQk()), 2 & o) {
                    const c = e.oxw().$implicit;
                    e.xp6(2),
                    e.Q6J("appFormatCourse", c)
                }
            }
            function kt(o, d) {
                if (1 & o && (e.ynx(0), e.YNc(1, vt, 3, 1, "ng-container", 2), e.BQk()), 2 & o) {
                    const c = d.index,
                        r = e.oxw(2);
                    e.xp6(1),
                    e.Q6J("ngIf", c === r.currentSlide)
                }
            }
            function zt(o, d) {
                if (1 & o && (e.TgZ(0, "div"), e.YNc(1, Ot, 7, 3, "div", 3), e.TgZ(2, "div", 4), e.YNc(3, kt, 2, 1, "ng-container", 5), e.qZA()()), 2 & o) {
                    const c = e.oxw();
                    e.Gre("m-course-player m-course-player--", c.theme, ""),
                    e.xp6(1),
                    e.Q6J("ngIf", c.completed),
                    e.xp6(2),
                    e.Q6J("ngForOf", null == c.currentCourse ? null : c.currentCourse.data)
                }
            }
            function Tt(o, d) {
                if (1 & o && (e.TgZ(0, "div", 10)(1, "p", 11),
                e._uU(2, "Oops...Temporary Error"),
                e.qZA(),
                e.TgZ(3, "p", 12),
                e._uU(4, " Please "),
                e.TgZ(5, "a", 13),
                e._uU(6, "reload this page"),
                e.qZA(),
                e._uU(7, " or "),
                e.TgZ(8, "a", 14),
                e._uU(9, "contact customer support"),
                e.qZA(),
                e._uU(10, " if issue persist "),
                e.qZA(),
                e.TgZ(11, "p", 12),
                e._uU(12),
                e.qZA()()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(12),
                    e.hij("Error: ", c.error, "")
                }
            }
            function At(o, d) {
                if (1 & o && (e.ynx(0), e._UZ(1, "app-course-player-assessment", 15), e.BQk()), 2 & o) {
                    const c = e.oxw();
                    e.xp6(1),
                    e.Q6J("theme", c.theme)("assessment", c.currentAssessment)
                }
            }
            let Et = (() => {
                var o;
                class d {
                    get currentSlide() {
                        return this._currentSlide
                    }
                    set currentSlide(r) {
                        const a = this.currentCourse,
                            B = document.querySelector(".player-nav__prev ");
                        if (r > 0 ? B ?. classList.remove("disabled") : B ?. classList.add("disabled"), a) {
                            if (! a || r >= a ?. data.length || r < 0) 
                                return;
                            
                            this._currentSlide = r
                        }
                    }
                    constructor(r, a) {
                        this._courseService = r,
                        this._shoppingCartService = a,
                        this.attempt = 1,
                        this._processedExit = !1,
                        this._lastSlide = !1,
                        this._currentSlide = 0,
                        this._subscriptions = []
                    }
                    onIOSPageNext() {
                        !0 !== this._processedExit && (this._processedExit =! 0, navigator.platform && /iPad|iPhone|iPod|MacIntel/.test(navigator.platform) && this._courseService.isAssessment === g.TOPIC && this.onExiting(this._lastSlide).subscribe(() => {}))
                    }
                    visibilitychange() {
                        !0 !== this._processedExit && (this._processedExit =! 0, this._courseService.isAssessment === g.TOPIC && this.onExiting(this._lastSlide).subscribe(() => {}))
                    }
                    ngOnInit() {
                        this.appUrl = M.N.appUrl,
                        this.courseName = this._courseService.courseName,
                        this.completed = this._courseService.completed,
                        this.courseId = this._courseService.courseId,
                        this.startTime = performance.now(),
                        this.theme = this._courseService.courseTheme,
                        this.isAssessment = this._courseService.isAssessment;
                        let r = null;
                        this._shoppingCartService.getUserInfo().subscribe(a => {
                            this.user = a
                        }),
                        r = this.isAssessment === g.TOPIC ? this._courseService.getCurrentCourseContent().pipe((0, l.K)(a => (this.error = a.message, (0, t._)(a)))).subscribe(a => {
                            if (!a) 
                                return;
                            
                            this.currentCourse = a;
                            const B = document.querySelector("#iframe_container");
                            B && (B.style.minHeight = "auto"),
                            document.dispatchEvent(new Event("course:player:initialized"))
                        }) : this._courseService.getCurrentAssessmentContent().pipe((0, l.K)(a => (this.error = a.message, (0, t._)(a)))).subscribe(a => {
                            if (!a) 
                                return;
                            
                            this.currentAssessment = a.data;
                            const B = document.querySelector("#iframe_container");
                            B && (B.style.minHeight = "auto"),
                            document.dispatchEvent(new Event("course:player:initialized"))
                        }),
                        this._subscriptions.push(r)
                    }
                    onExiting(r) {
                        const a = performance.now(),
                            B = s.utc(a - this.startTime).format("HH:mm:ss.SS");
                        return this._courseService.trackUser(this.user.id, B, this.attempt, {
                            cmi__core__lesson_status: r ? "completed" : "incomplete"
                        })
                    }
                    ngOnDestroy() {
                        this._subscriptions.forEach(r => r.unsubscribe())
                    }
                    next(r) {
                        const a = r.detail ?. nextPage;
                        this.currentSlide + 1 === this.currentCourse ?. data.length && a && (this._lastSlide =! 0, window.location.href = a),
                        this.currentSlide ++
                    }
                    previous() {
                        this.currentSlide --
                    }
                }
                return(o = d).\u0275fac = function (r) {
                    return new(r || o)(e.Y36(b.N), e.Y36(x.F))
                },
                o.\u0275cmp = e.Xpm({
                    type: o,
                    selectors: [
                        ["app-course-player"]
                    ],
                    hostBindings: function (r, a) {
                        1 & r && e.NdJ("pagehide", function (Z) {
                            return a.onIOSPageNext(Z)
                        }, !1, e.Jf7)("beforeunload", function (Z) {
                            return a.visibilitychange(Z)
                        }, !1, e.Jf7)("course:player:next", function (Z) {
                            return a.next(Z)
                        },
                        !1,
                        e.evT)("course:player:previous", function () {
                            return a.previous()
                        },
                        !1,
                        e.evT)
                    },
                    decls: 3,
                    vars: 3,
                    consts: [
                        [
                            3, "class", 4, "ngIf"
                        ],
                        [
                            "class", "m-course-player__error", 4, "ngIf"
                        ],
                        [
                            4, "ngIf"
                        ],
                        [
                            "class", "buy-here no-margin", 4, "ngIf"
                        ],
                        [
                            "id", "page_main"
                        ],
                        [
                            4, "ngFor", "ngForOf"
                        ],
                        [
                            1, "buy-here", "no-margin"
                        ],
                        [
                            "title", "Buy your cert", 3, "href"
                        ],
                        [
                            1, "maintree"
                        ],
                        [
                            4, "appFormatCourse"
                        ],
                        [
                            1, "m-course-player__error"
                        ],
                        [
                            1, "m-course-player__error__title"
                        ],
                        [
                            1, "m-course-player__error__text"
                        ],
                        [
                            "href", "javascript:window.location.reload(true)"
                        ],
                        [
                            "href", "mailto:support@alison.com"
                        ],
                        [
                            3, "theme", "assessment"
                        ]
                    ],
                    template: function (r, a) {
                        1 & r && (e.YNc(0, zt, 4, 5, "div", 0), e.YNc(1, Tt, 13, 1, "div", 1), e.YNc(2, At, 2, 2, "ng-container", 2)),
                        2 & r && (e.Q6J("ngIf", a.currentCourse && ! a.isAssessment), e.xp6(1), e.Q6J("ngIf", a.error), e.xp6(1), e.Q6J("ngIf", a.isAssessment && a.currentAssessment))
                    },
                    dependencies: [
                        m.sg, m.O5, Ie, Mt
                    ],
                    styles: [
                        '@font-face{font-family:KaTeX_AMS;src:url(/html/site/ng/KaTeX_AMS-Regular.a79f1c3119cd700d.woff2) format("woff2"),url(/html/site/ng/KaTeX_AMS-Regular.1608a09b4aff30c2.woff) format("woff"),url(/html/site/ng/KaTeX_AMS-Regular.4aafdb685c2bf1c9.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(/html/site/ng/KaTeX_Caligraphic-Bold.ec17d132645b2c86.woff2) format("woff2"),url(/html/site/ng/KaTeX_Caligraphic-Bold.b67709187bb0654a.woff) format("woff"),url(/html/site/ng/KaTeX_Caligraphic-Bold.cce5b8ecea35407a.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(/html/site/ng/KaTeX_Caligraphic-Regular.55fac25845c12663.woff2) format("woff2"),url(/html/site/ng/KaTeX_Caligraphic-Regular.dad44a7fc678e2ca.woff) format("woff"),url(/html/site/ng/KaTeX_Caligraphic-Regular.07ef19e7b06429d4.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(/html/site/ng/KaTeX_Fraktur-Bold.d42a5579b0283025.woff2) format("woff2"),url(/html/site/ng/KaTeX_Fraktur-Bold.9f256b8593ce632e.woff) format("woff"),url(/html/site/ng/KaTeX_Fraktur-Bold.b18f59e1d1359581.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(/html/site/ng/KaTeX_Fraktur-Regular.d3c882a649b3f4fa.woff2) format("woff2"),url(/html/site/ng/KaTeX_Fraktur-Regular.7c1871215eef4da8.woff) format("woff"),url(/html/site/ng/KaTeX_Fraktur-Regular.ed38e79f5799ceca.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(/html/site/ng/KaTeX_Main-Bold.c3fb5ac22fd413f2.woff2) format("woff2"),url(/html/site/ng/KaTeX_Main-Bold.d181c4650dd0c0fe.woff) format("woff"),url(/html/site/ng/KaTeX_Main-Bold.b74a1a8b2c5d73c2.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(/html/site/ng/KaTeX_Main-BoldItalic.6f2bb1dff24614a5.woff2) format("woff2"),url(/html/site/ng/KaTeX_Main-BoldItalic.e3f82f9d2724733a.woff) format("woff"),url(/html/site/ng/KaTeX_Main-BoldItalic.70d8b0a530ab8484.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(/html/site/ng/KaTeX_Main-Italic.8916142bec8821e7.woff2) format("woff2"),url(/html/site/ng/KaTeX_Main-Italic.9024d815ba48fa55.woff) format("woff"),url(/html/site/ng/KaTeX_Main-Italic.47373d1e512354bb.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(/html/site/ng/KaTeX_Main-Regular.0462f03bdf9d9e26.woff2) format("woff2"),url(/html/site/ng/KaTeX_Main-Regular.7f51fe034014000e.woff) format("woff"),url(/html/site/ng/KaTeX_Main-Regular.b7f8fe9b5f78a977.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(/html/site/ng/KaTeX_Math-BoldItalic.572d331f69425f62.woff2) format("woff2"),url(/html/site/ng/KaTeX_Math-BoldItalic.f1035d8d5d945108.woff) format("woff"),url(/html/site/ng/KaTeX_Math-BoldItalic.a879cf8383e22737.ttf) format("truetype");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(/html/site/ng/KaTeX_Math-Italic.f28c23acad0b6d75.woff2) format("woff2"),url(/html/site/ng/KaTeX_Math-Italic.5295ba483ad9f51a.woff) format("woff"),url(/html/site/ng/KaTeX_Math-Italic.939bc64440a13865.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(/html/site/ng/KaTeX_SansSerif-Bold.8c5b5494b63adb73.woff2) format("woff2"),url(/html/site/ng/KaTeX_SansSerif-Bold.bf59d231c34de257.woff) format("woff"),url(/html/site/ng/KaTeX_SansSerif-Bold.94e1e8dc5ff5d517.ttf) format("truetype");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_SansSerif;src:url(/html/site/ng/KaTeX_SansSerif-Italic.3b1e59b3ba055bda.woff2) format("woff2"),url(/html/site/ng/KaTeX_SansSerif-Italic.7c9bc82b17fa2586.woff) format("woff"),url(/html/site/ng/KaTeX_SansSerif-Italic.b4c20c84d8259773.ttf) format("truetype");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_SansSerif;src:url(/html/site/ng/KaTeX_SansSerif-Regular.ba21ed5f8468b2b7.woff2) format("woff2"),url(/html/site/ng/KaTeX_SansSerif-Regular.740484788f643b19.woff) format("woff"),url(/html/site/ng/KaTeX_SansSerif-Regular.d4d7ba480428fe6e.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(/html/site/ng/KaTeX_Script-Regular.03e9641d6f9e9223.woff2) format("woff2"),url(/html/site/ng/KaTeX_Script-Regular.0750571032beef1a.woff) format("woff"),url(/html/site/ng/KaTeX_Script-Regular.fe9cbbe1a0f37727.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(/html/site/ng/KaTeX_Size1-Regular.eae34984b3dc1874.woff2) format("woff2"),url(/html/site/ng/KaTeX_Size1-Regular.e1e279cbdd2feecd.woff) format("woff"),url(/html/site/ng/KaTeX_Size1-Regular.fabc004aab10cb40.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(/html/site/ng/KaTeX_Size2-Regular.5916a24fa3ab2b17.woff2) format("woff2"),url(/html/site/ng/KaTeX_Size2-Regular.577270225ea69a74.woff) format("woff"),url(/html/site/ng/KaTeX_Size2-Regular.d6b476ecd3949434.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(/html/site/ng/KaTeX_Size3-Regular.b4230e7e83f57db8.woff2) format("woff2"),url(/html/site/ng/KaTeX_Size3-Regular.9acaf01c6476f53a.woff) format("woff"),url(/html/site/ng/KaTeX_Size3-Regular.a144ef5840bbd063.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(/html/site/ng/KaTeX_Size4-Regular.10d95fd3a2a3c8c5.woff2) format("woff2"),url(/html/site/ng/KaTeX_Size4-Regular.7a996c9da2ec18e6.woff) format("woff"),url(/html/site/ng/KaTeX_Size4-Regular.fbccdabe0ae624b8.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(/html/site/ng/KaTeX_Typewriter-Regular.a8709e36220dee77.woff2) format("woff2"),url(/html/site/ng/KaTeX_Typewriter-Regular.6258592bdc9387b6.woff) format("woff"),url(/html/site/ng/KaTeX_Typewriter-Regular.d97aaf4a1ebf38b0.ttf) format("truetype");font-weight:400;font-style:normal}.katex{font: 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none!important}.katex *{border-color:currentColor}.katex .katex-version:after{content:"0.16.8"}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;display:inline-block;white-space:nowrap;width:min-content}.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:700;font-style:italic}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed;border-collapse:collapse}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .vbox{display:inline-flex;flex-direction:column;align-items:baseline}.katex .hbox{display:inline-flex;flex-direction:row;width:100%}.katex .thinbox{display:inline-flex;flex-direction:row;width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline,.katex .hdashline,.katex .rule{min-height:1px}.katex .mspace{display:inline-block}.katex .llap,.katex .rlap,.katex .clap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner,.katex .clap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix,.katex .clap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner,.katex .clap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:solid 0;position:relative}.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .sizing.reset-size1.size1,.katex .fontsize-ensurer.reset-size1.size1{font-size:1em}.katex .sizing.reset-size1.size2,.katex .fontsize-ensurer.reset-size1.size2{font-size:1.2em}.katex .sizing.reset-size1.size3,.katex .fontsize-ensurer.reset-size1.size3{font-size:1.4em}.katex .sizing.reset-size1.size4,.katex .fontsize-ensurer.reset-size1.size4{font-size:1.6em}.katex .sizing.reset-size1.size5,.katex .fontsize-ensurer.reset-size1.size5{font-size:1.8em}.katex .sizing.reset-size1.size6,.katex .fontsize-ensurer.reset-size1.size6{font-size:2em}.katex .sizing.reset-size1.size7,.katex .fontsize-ensurer.reset-size1.size7{font-size:2.4em}.katex .sizing.reset-size1.size8,.katex .fontsize-ensurer.reset-size1.size8{font-size:2.88em}.katex .sizing.reset-size1.size9,.katex .fontsize-ensurer.reset-size1.size9{font-size:3.456em}.katex .sizing.reset-size1.size10,.katex .fontsize-ensurer.reset-size1.size10{font-size:4.148em}.katex .sizing.reset-size1.size11,.katex .fontsize-ensurer.reset-size1.size11{font-size:4.976em}.katex .sizing.reset-size2.size1,.katex .fontsize-ensurer.reset-size2.size1{font-size:.83333333em}.katex .sizing.reset-size2.size2,.katex .fontsize-ensurer.reset-size2.size2{font-size:1em}.katex .sizing.reset-size2.size3,.katex .fontsize-ensurer.reset-size2.size3{font-size:1.16666667em}.katex .sizing.reset-size2.size4,.katex .fontsize-ensurer.reset-size2.size4{font-size:1.33333333em}.katex .sizing.reset-size2.size5,.katex .fontsize-ensurer.reset-size2.size5{font-size:1.5em}.katex .sizing.reset-size2.size6,.katex .fontsize-ensurer.reset-size2.size6{font-size:1.66666667em}.katex .sizing.reset-size2.size7,.katex .fontsize-ensurer.reset-size2.size7{font-size:2em}.katex .sizing.reset-size2.size8,.katex .fontsize-ensurer.reset-size2.size8{font-size:2.4em}.katex .sizing.reset-size2.size9,.katex .fontsize-ensurer.reset-size2.size9{font-size:2.88em}.katex .sizing.reset-size2.size10,.katex .fontsize-ensurer.reset-size2.size10{font-size:3.45666667em}.katex .sizing.reset-size2.size11,.katex .fontsize-ensurer.reset-size2.size11{font-size:4.14666667em}.katex .sizing.reset-size3.size1,.katex .fontsize-ensurer.reset-size3.size1{font-size:.71428571em}.katex .sizing.reset-size3.size2,.katex .fontsize-ensurer.reset-size3.size2{font-size:.85714286em}.katex .sizing.reset-size3.size3,.katex .fontsize-ensurer.reset-size3.size3{font-size:1em}.katex .sizing.reset-size3.size4,.katex .fontsize-ensurer.reset-size3.size4{font-size:1.14285714em}.katex .sizing.reset-size3.size5,.katex .fontsize-ensurer.reset-size3.size5{font-size:1.28571429em}.katex .sizing.reset-size3.size6,.katex .fontsize-ensurer.reset-size3.size6{font-size:1.42857143em}.katex .sizing.reset-size3.size7,.katex .fontsize-ensurer.reset-size3.size7{font-size:1.71428571em}.katex .sizing.reset-size3.size8,.katex .fontsize-ensurer.reset-size3.size8{font-size:2.05714286em}.katex .sizing.reset-size3.size9,.katex .fontsize-ensurer.reset-size3.size9{font-size:2.46857143em}.katex .sizing.reset-size3.size10,.katex .fontsize-ensurer.reset-size3.size10{font-size:2.96285714em}.katex .sizing.reset-size3.size11,.katex .fontsize-ensurer.reset-size3.size11{font-size:3.55428571em}.katex .sizing.reset-size4.size1,.katex .fontsize-ensurer.reset-size4.size1{font-size:.625em}.katex .sizing.reset-size4.size2,.katex .fontsize-ensurer.reset-size4.size2{font-size:.75em}.katex .sizing.reset-size4.size3,.katex .fontsize-ensurer.reset-size4.size3{font-size:.875em}.katex .sizing.reset-size4.size4,.katex .fontsize-ensurer.reset-size4.size4{font-size:1em}.katex .sizing.reset-size4.size5,.katex .fontsize-ensurer.reset-size4.size5{font-size:1.125em}.katex .sizing.reset-size4.size6,.katex .fontsize-ensurer.reset-size4.size6{font-size:1.25em}.katex .sizing.reset-size4.size7,.katex .fontsize-ensurer.reset-size4.size7{font-size:1.5em}.katex .sizing.reset-size4.size8,.katex .fontsize-ensurer.reset-size4.size8{font-size:1.8em}.katex .sizing.reset-size4.size9,.katex .fontsize-ensurer.reset-size4.size9{font-size:2.16em}.katex .sizing.reset-size4.size10,.katex .fontsize-ensurer.reset-size4.size10{font-size:2.5925em}.katex .sizing.reset-size4.size11,.katex .fontsize-ensurer.reset-size4.size11{font-size:3.11em}.katex .sizing.reset-size5.size1,.katex .fontsize-ensurer.reset-size5.size1{font-size:.55555556em}.katex .sizing.reset-size5.size2,.katex .fontsize-ensurer.reset-size5.size2{font-size:.66666667em}.katex .sizing.reset-size5.size3,.katex .fontsize-ensurer.reset-size5.size3{font-size:.77777778em}.katex .sizing.reset-size5.size4,.katex .fontsize-ensurer.reset-size5.size4{font-size:.88888889em}.katex .sizing.reset-size5.size5,.katex .fontsize-ensurer.reset-size5.size5{font-size:1em}.katex .sizing.reset-size5.size6,.katex .fontsize-ensurer.reset-size5.size6{font-size:1.11111111em}.katex .sizing.reset-size5.size7,.katex .fontsize-ensurer.reset-size5.size7{font-size:1.33333333em}.katex .sizing.reset-size5.size8,.katex .fontsize-ensurer.reset-size5.size8{font-size:1.6em}.katex .sizing.reset-size5.size9,.katex .fontsize-ensurer.reset-size5.size9{font-size:1.92em}.katex .sizing.reset-size5.size10,.katex .fontsize-ensurer.reset-size5.size10{font-size:2.30444444em}.katex .sizing.reset-size5.size11,.katex .fontsize-ensurer.reset-size5.size11{font-size:2.76444444em}.katex .sizing.reset-size6.size1,.katex .fontsize-ensurer.reset-size6.size1{font-size:.5em}.katex .sizing.reset-size6.size2,.katex .fontsize-ensurer.reset-size6.size2{font-size:.6em}.katex .sizing.reset-size6.size3,.katex .fontsize-ensurer.reset-size6.size3{font-size:.7em}.katex .sizing.reset-size6.size4,.katex .fontsize-ensurer.reset-size6.size4{font-size:.8em}.katex .sizing.reset-size6.size5,.katex .fontsize-ensurer.reset-size6.size5{font-size:.9em}.katex .sizing.reset-size6.size6,.katex .fontsize-ensurer.reset-size6.size6{font-size:1em}.katex .sizing.reset-size6.size7,.katex .fontsize-ensurer.reset-size6.size7{font-size:1.2em}.katex .sizing.reset-size6.size8,.katex .fontsize-ensurer.reset-size6.size8{font-size:1.44em}.katex .sizing.reset-size6.size9,.katex .fontsize-ensurer.reset-size6.size9{font-size:1.728em}.katex .sizing.reset-size6.size10,.katex .fontsize-ensurer.reset-size6.size10{font-size:2.074em}.katex .sizing.reset-size6.size11,.katex .fontsize-ensurer.reset-size6.size11{font-size:2.488em}.katex .sizing.reset-size7.size1,.katex .fontsize-ensurer.reset-size7.size1{font-size:.41666667em}.katex .sizing.reset-size7.size2,.katex .fontsize-ensurer.reset-size7.size2{font-size:.5em}.katex .sizing.reset-size7.size3,.katex .fontsize-ensurer.reset-size7.size3{font-size:.58333333em}.katex .sizing.reset-size7.size4,.katex .fontsize-ensurer.reset-size7.size4{font-size:.66666667em}.katex .sizing.reset-size7.size5,.katex .fontsize-ensurer.reset-size7.size5{font-size:.75em}.katex .sizing.reset-size7.size6,.katex .fontsize-ensurer.reset-size7.size6{font-size:.83333333em}.katex .sizing.reset-size7.size7,.katex .fontsize-ensurer.reset-size7.size7{font-size:1em}.katex .sizing.reset-size7.size8,.katex .fontsize-ensurer.reset-size7.size8{font-size:1.2em}.katex .sizing.reset-size7.size9,.katex .fontsize-ensurer.reset-size7.size9{font-size:1.44em}.katex .sizing.reset-size7.size10,.katex .fontsize-ensurer.reset-size7.size10{font-size:1.72833333em}.katex .sizing.reset-size7.size11,.katex .fontsize-ensurer.reset-size7.size11{font-size:2.07333333em}.katex .sizing.reset-size8.size1,.katex .fontsize-ensurer.reset-size8.size1{font-size:.34722222em}.katex .sizing.reset-size8.size2,.katex .fontsize-ensurer.reset-size8.size2{font-size:.41666667em}.katex .sizing.reset-size8.size3,.katex .fontsize-ensurer.reset-size8.size3{font-size:.48611111em}.katex .sizing.reset-size8.size4,.katex .fontsize-ensurer.reset-size8.size4{font-size:.55555556em}.katex .sizing.reset-size8.size5,.katex .fontsize-ensurer.reset-size8.size5{font-size:.625em}.katex .sizing.reset-size8.size6,.katex .fontsize-ensurer.reset-size8.size6{font-size:.69444444em}.katex .sizing.reset-size8.size7,.katex .fontsize-ensurer.reset-size8.size7{font-size:.83333333em}.katex .sizing.reset-size8.size8,.katex .fontsize-ensurer.reset-size8.size8{font-size:1em}.katex .sizing.reset-size8.size9,.katex .fontsize-ensurer.reset-size8.size9{font-size:1.2em}.katex .sizing.reset-size8.size10,.katex .fontsize-ensurer.reset-size8.size10{font-size:1.44027778em}.katex .sizing.reset-size8.size11,.katex .fontsize-ensurer.reset-size8.size11{font-size:1.72777778em}.katex .sizing.reset-size9.size1,.katex .fontsize-ensurer.reset-size9.size1{font-size:.28935185em}.katex .sizing.reset-size9.size2,.katex .fontsize-ensurer.reset-size9.size2{font-size:.34722222em}.katex .sizing.reset-size9.size3,.katex .fontsize-ensurer.reset-size9.size3{font-size:.40509259em}.katex .sizing.reset-size9.size4,.katex .fontsize-ensurer.reset-size9.size4{font-size:.46296296em}.katex .sizing.reset-size9.size5,.katex .fontsize-ensurer.reset-size9.size5{font-size:.52083333em}.katex .sizing.reset-size9.size6,.katex .fontsize-ensurer.reset-size9.size6{font-size:.5787037em}.katex .sizing.reset-size9.size7,.katex .fontsize-ensurer.reset-size9.size7{font-size:.69444444em}.katex .sizing.reset-size9.size8,.katex .fontsize-ensurer.reset-size9.size8{font-size:.83333333em}.katex .sizing.reset-size9.size9,.katex .fontsize-ensurer.reset-size9.size9{font-size:1em}.katex .sizing.reset-size9.size10,.katex .fontsize-ensurer.reset-size9.size10{font-size:1.20023148em}.katex .sizing.reset-size9.size11,.katex .fontsize-ensurer.reset-size9.size11{font-size:1.43981481em}.katex .sizing.reset-size10.size1,.katex .fontsize-ensurer.reset-size10.size1{font-size:.24108004em}.katex .sizing.reset-size10.size2,.katex .fontsize-ensurer.reset-size10.size2{font-size:.28929605em}.katex .sizing.reset-size10.size3,.katex .fontsize-ensurer.reset-size10.size3{font-size:.33751205em}.katex .sizing.reset-size10.size4,.katex .fontsize-ensurer.reset-size10.size4{font-size:.38572806em}.katex .sizing.reset-size10.size5,.katex .fontsize-ensurer.reset-size10.size5{font-size:.43394407em}.katex .sizing.reset-size10.size6,.katex .fontsize-ensurer.reset-size10.size6{font-size:.48216008em}.katex .sizing.reset-size10.size7,.katex .fontsize-ensurer.reset-size10.size7{font-size:.57859209em}.katex .sizing.reset-size10.size8,.katex .fontsize-ensurer.reset-size10.size8{font-size:.69431051em}.katex .sizing.reset-size10.size9,.katex .fontsize-ensurer.reset-size10.size9{font-size:.83317261em}.katex .sizing.reset-size10.size10,.katex .fontsize-ensurer.reset-size10.size10{font-size:1em}.katex .sizing.reset-size10.size11,.katex .fontsize-ensurer.reset-size10.size11{font-size:1.19961427em}.katex .sizing.reset-size11.size1,.katex .fontsize-ensurer.reset-size11.size1{font-size:.20096463em}.katex .sizing.reset-size11.size2,.katex .fontsize-ensurer.reset-size11.size2{font-size:.24115756em}.katex .sizing.reset-size11.size3,.katex .fontsize-ensurer.reset-size11.size3{font-size:.28135048em}.katex .sizing.reset-size11.size4,.katex .fontsize-ensurer.reset-size11.size4{font-size:.32154341em}.katex .sizing.reset-size11.size5,.katex .fontsize-ensurer.reset-size11.size5{font-size:.36173633em}.katex .sizing.reset-size11.size6,.katex .fontsize-ensurer.reset-size11.size6{font-size:.40192926em}.katex .sizing.reset-size11.size7,.katex .fontsize-ensurer.reset-size11.size7{font-size:.48231511em}.katex .sizing.reset-size11.size8,.katex .fontsize-ensurer.reset-size11.size8{font-size:.57877814em}.katex .sizing.reset-size11.size9,.katex .fontsize-ensurer.reset-size11.size9{font-size:.69453376em}.katex .sizing.reset-size11.size10,.katex .fontsize-ensurer.reset-size11.size10{font-size:.83360129em}.katex .sizing.reset-size11.size11,.katex .fontsize-ensurer.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy:before,.katex .stretchy:after{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .x-arrow,.katex .mover,.katex .munder{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{box-sizing:border-box;border-top:.049em solid;border-right:.049em solid;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{counter-increment:katexEqnNo;content:"(" counter(katexEqnNo) ")"}.katex .mml-eqn-num:before{counter-increment:mmlEqnNo;content:"(" counter(mmlEqnNo) ")"}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;position:absolute;left:calc(50% + .3em);text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}#page_main{position:relative;background-position-y:65px;overflow:hidden;margin:auto;padding:0 0 60px;max-width:765px;width:100%}#page_main .maintree{font:400 14px Roboto,Helvetica neue,Helvetica,Arial,sans-serif}#page_main .maintree h6{font:600 16px Roboto,helvetica neue,Helvetica,Arial,sans-serif;line-height:20px}#page_main .maintree>app-course-player-image,#page_main .maintree>app-course-player-text,#page_main .maintree>app-course-player-header,#page_main .maintree>app-course-player-tabs,#page_main .maintree>app-course-player-table,#page_main .maintree>app-course-player-video,#page_main .maintree>app-course-player-audio,#page_main .maintree>app-course-player-language,#page_main .maintree>app-course-player-popup{display:block;float:left;width:100%}#page_main .maintree>app-course-player-image,#page_main .maintree>app-course-player-text,#page_main .maintree>app-course-player-tabs,#page_main .maintree>app-course-player-table,#page_main .maintree>app-course-player-video,#page_main .maintree>app-course-player-audio,#page_main .maintree>app-course-player-language,#page_main .maintree>app-course-player-popup{margin:2px 0}.buy-here{color:#fff;line-height:26px;padding:12px 20px;text-align:center}.buy-here.no-margin{margin:-10px -10px 20px}.buy-here a{text-decoration:none;border-bottom:1px solid #fff;color:#fff}button{display:inherit;cursor:pointer;font:400 14px Roboto,helvetica neue,Helvetica,Arial,sans-serif;border-radius:3px;color:#fff;background:#813359;border:2px solid #813359;padding:10px 15px;outline:0;transition:all .2s ease-in;max-width:160px;width:100%}button:hover{color:#3f4a52!important;background:0 0!important;border:2px solid #4a1d33!important}.m-course-player{margin:8px}.m-course-player__caption{font:300 .8em Roboto,Helvetica Neue,Helvetica,Arial,sans-serif;padding:10px;color:#465159}.m-course-player__error{padding:20px}.m-course-player__error__title{font:700 32px Roboto,Helvetica Neue,Helvetica,Arial,sans-serif}.m-course-player__error__text{font:400 16px Roboto,Helvetica Neue,Helvetica,Arial,sans-serif}*{box-sizing:border-box}\n',
                        ".m-course-player--1 .maintree .m-course-player__head{background:#5d448e;color:#fff}.m-course-player--1 .buy-here,.m-course-player--1 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--1 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--1 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#5d448e}.m-course-player--1 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#5d448e}.m-course-player--1 .maintree .m-course-player__question__answers,.m-course-player--1 .m-course-player-assessment .m-course-player__question__answers{background:rgba(93,68,142,.45)}.m-course-player--1 .maintree .m-course-player__table__item .colored{background-color:#cabee0}.m-course-player--1 .maintree button,.m-course-player--1 .m-course-player-assessment button{background:#5d448e;border:2px solid #5d448e}.m-course-player--1 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#46336c}.m-course-player--1 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--1 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(93,68,142,.8)}.m-course-player--1 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#5d448e}.m-course-player--1 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#46336c;color:#fff}.m-course-player--1 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#5d448e}\n",
                        ".m-course-player--2 .maintree .m-course-player__head{background:#995730;color:#fff}.m-course-player--2 .buy-here,.m-course-player--2 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--2 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--2 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#995730}.m-course-player--2 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#995730}.m-course-player--2 .maintree .m-course-player__question__answers,.m-course-player--2 .m-course-player-assessment .m-course-player__question__answers{background:rgba(153,87,48,.45)}.m-course-player--2 .maintree .m-course-player__table__item .colored{background-color:#e6c3af}.m-course-player--2 .maintree button,.m-course-player--2 .m-course-player-assessment button{background:#995730;border:2px solid #995730}.m-course-player--2 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#724124}.m-course-player--2 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--2 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(153,87,48,.8)}.m-course-player--2 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#995730}.m-course-player--2 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#724124;color:#fff}.m-course-player--2 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#995730}\n",
                        ".m-course-player--3 .maintree .m-course-player__head{background:#547b9b;color:#fff}.m-course-player--3 .buy-here,.m-course-player--3 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--3 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--3 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#547b9b}.m-course-player--3 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#547b9b}.m-course-player--3 .maintree .m-course-player__question__answers,.m-course-player--3 .m-course-player-assessment .m-course-player__question__answers{background:rgba(84,123,155,.45)}.m-course-player--3 .maintree .m-course-player__table__item .colored{background-color:#b2c6d6}.m-course-player--3 .maintree button,.m-course-player--3 .m-course-player-assessment button{background:#547b9b;border:2px solid #547b9b}.m-course-player--3 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#42617a}.m-course-player--3 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--3 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(84,123,155,.8)}.m-course-player--3 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#547b9b}.m-course-player--3 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#42617a;color:#fff}.m-course-player--3 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#547b9b}\n",
                        ".m-course-player--4 .maintree .m-course-player__head{background:#2c7769;color:#fff}.m-course-player--4 .buy-here,.m-course-player--4 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--4 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--4 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#2c7769}.m-course-player--4 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#2c7769}.m-course-player--4 .maintree .m-course-player__question__answers,.m-course-player--4 .m-course-player-assessment .m-course-player__question__answers{background:rgba(44,119,105,.45)}.m-course-player--4 .maintree .m-course-player__table__item .colored{background-color:#97d8cc}.m-course-player--4 .maintree button,.m-course-player--4 .m-course-player-assessment button{background:#2c7769;border:2px solid #2c7769}.m-course-player--4 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#1e5248}.m-course-player--4 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--4 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(44,119,105,.8)}.m-course-player--4 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#2c7769}.m-course-player--4 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#1e5248;color:#fff}.m-course-player--4 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#2c7769}\n",
                        ".m-course-player--5 .maintree .m-course-player__head{background:#69944a;color:#fff}.m-course-player--5 .buy-here,.m-course-player--5 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--5 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--5 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#69944a}.m-course-player--5 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#69944a}.m-course-player--5 .maintree .m-course-player__question__answers,.m-course-player--5 .m-course-player-assessment .m-course-player__question__answers{background:rgba(105,148,74,.45)}.m-course-player--5 .maintree .m-course-player__table__item .colored{background-color:#d3e3c7}.m-course-player--5 .maintree button,.m-course-player--5 .m-course-player-assessment button{background:#69944a;border:2px solid #69944a}.m-course-player--5 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#517239}.m-course-player--5 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--5 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(105,148,74,.8)}.m-course-player--5 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#69944a}.m-course-player--5 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#517239;color:#fff}.m-course-player--5 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#69944a}\n",
                        ".m-course-player--6 .maintree .m-course-player__head{background:#813359;color:#fff}.m-course-player--6 .buy-here,.m-course-player--6 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--6 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--6 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#813359}.m-course-player--6 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#813359}.m-course-player--6 .maintree .m-course-player__question__answers,.m-course-player--6 .m-course-player-assessment .m-course-player__question__answers{background:rgba(129,51,89,.45)}.m-course-player--6 .maintree .m-course-player__table__item .colored{background-color:#dba5bf}.m-course-player--6 .maintree button,.m-course-player--6 .m-course-player-assessment button{background:#813359;border:2px solid #813359}.m-course-player--6 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#5c2540}.m-course-player--6 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--6 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(129,51,89,.8)}.m-course-player--6 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#813359}.m-course-player--6 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#5c2540;color:#fff}.m-course-player--6 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#813359}\n",
                        ".m-course-player--7 .maintree .m-course-player__head{background:#856b53;color:#fff}.m-course-player--7 .buy-here,.m-course-player--7 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--7 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--7 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#856b53}.m-course-player--7 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#856b53}.m-course-player--7 .maintree .m-course-player__question__answers,.m-course-player--7 .m-course-player-assessment .m-course-player__question__answers{background:rgba(133,107,83,.45)}.m-course-player--7 .maintree .m-course-player__table__item .colored{background-color:#dcd2c8}.m-course-player--7 .maintree button,.m-course-player--7 .m-course-player-assessment button{background:#856b53;border:2px solid #856b53}.m-course-player--7 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#66523f}.m-course-player--7 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--7 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(133,107,83,.8)}.m-course-player--7 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#856b53}.m-course-player--7 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#66523f;color:#fff}.m-course-player--7 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#856b53}\n",
                        ".m-course-player--8 .maintree .m-course-player__head{background:#914a74;color:#fff}.m-course-player--8 .buy-here,.m-course-player--8 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--8 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--8 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#914a74}.m-course-player--8 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#914a74}.m-course-player--8 .maintree .m-course-player__question__answers,.m-course-player--8 .m-course-player-assessment .m-course-player__question__answers{background:rgba(145,74,116,.45)}.m-course-player--8 .maintree .m-course-player__table__item .colored{background-color:#e2c5d6}.m-course-player--8 .maintree button,.m-course-player--8 .m-course-player-assessment button{background:#914a74;border:2px solid #914a74}.m-course-player--8 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#6f3959}.m-course-player--8 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--8 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(145,74,116,.8)}.m-course-player--8 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#914a74}.m-course-player--8 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#6f3959;color:#fff}.m-course-player--8 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#914a74}\n",
                        ".m-course-player--9 .maintree .m-course-player__head{background:#443e80;color:#fff}.m-course-player--9 .buy-here,.m-course-player--9 .maintree .m-tabs .mat-tab-labels .mat-tab-label.mat-tab-label-active,.m-course-player--9 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded,.m-course-player--9 .m-course-player-assessment .m-course-player-assessment__wrapper__banner{background:#443e80}.m-course-player--9 .maintree .m-tabs .mat-expansion-panel .mat-expansion-panel-header.mat-expanded{border:#443e80}.m-course-player--9 .maintree .m-course-player__question__answers,.m-course-player--9 .m-course-player-assessment .m-course-player__question__answers{background:rgba(68,62,128,.45)}.m-course-player--9 .maintree .m-course-player__table__item .colored{background-color:#b5b1d9}.m-course-player--9 .maintree button,.m-course-player--9 .m-course-player-assessment button{background:#443e80;border:2px solid #443e80}.m-course-player--9 .m-course-player-assessment .m-course-player-assessment__wrapper--score .m-course-player-assessment__wrapper__banner{background:#322d5e}.m-course-player--9 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__item,.m-course-player--9 .m-course-player__question--matching-drag-and-drop .m-course-player__question__answers__placeholder .m-course-player__question__answers__item--filled{background:rgba(68,62,128,.8)}.m-course-player--9 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label{background:#443e80}.m-course-player--9 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label:hover{background:#322d5e;color:#fff}.m-course-player--9 .m-course-player-assessment__wrapper--review .mat-tab-labels .mat-tab-label.mat-tab-label-active{color:#443e80}\n"
                    ],
                    encapsulation: 3
                }),
                d
            })()
        },
        1105: (N, E, n) => {
            "use strict";
            n.d(E, {
                N: () => e
            });
            var s = n(6360),
                l = n(4980),
                t = n(553),
                g = n(1699),
                M = n(4860);
            let e = (() => {
                var b;
                class x {
                    constructor(P) {
                        this._http = P,
                        this._topics = []
                    }
                    get courseTheme() {
                        return this._courseTheme
                    }
                    set courseTheme(P) {
                        this._courseTheme = P
                    }
                    get courseName() {
                        return this._courseName
                    }
                    set courseName(P) {
                        this._courseName = P
                    }
                    get topics() {
                        return this._topics
                    }
                    set topics(P) {
                        this._topics = P
                    }
                    get isAssessment() {
                        return this._isAssessment
                    }
                    set isAssessment(P) {
                        this._isAssessment = P
                    }
                    get completed() {
                        return this._completed
                    }
                    set completed(P) {
                        this._completed = P
                    }
                    get canPassAssessment() {
                        return this._canPassAssessment
                    }
                    set canPassAssessment(P) {
                        this._canPassAssessment = P
                    }
                    set courseId(P) {
                        P && (this._courseId = P)
                    }
                    get courseId() {
                        return this._courseId
                    }
                    set scoId(P) {
                        P && (this._scoId = P)
                    }
                    getCurrentAssessmentContent() {
                        return this._http.get(`${
                            t.N.coursewareApi
                        }courseware/courses/${
                            this._courseId
                        }/assessments/${
                            this._scoId
                        }/slides`).pipe((0, s.X)(2))
                    }
                    getCurrentCourseContent() {
                        return this._courseId && this._scoId ? this._http.get(`${
                            t.N.coursewareApi
                        }courseware/courses/${
                            this._courseId
                        }/topics/${
                            this._scoId
                        }/slides`).pipe((0, s.X)(2)) : (0, l.of)(null)
                    }
                    trackUser(P, k, y, I) {
                        const w = window.csrf,
                            T = new FormData;
                        let S = {
                            _token: w,
                            cmi__core__total_time: k,
                            cmi__core__lesson_status: "completed",
                            attempt: y,
                            scoid: this._scoId
                        };
                        return I && (S = Object.assign(S, I)),
                        Object.keys(S).forEach(ee => {
                            T.append(ee, S[ee])
                        }),
                        navigator.sendBeacon(`${
                            t.N.appUrl
                        }/datamodel`, T) ? (0, l.of)(S) : this._http.post(`${
                            t.N.appUrl
                        }/datamodel`, T)
                    }
                    checkQuestion(P, k) {
                        return this._http.post(`${
                            t.N.coursewareApi
                        }courseware/questions/${P}/check`, {answer: k})
                    }
                }
                return(b = x).\u0275fac = function (P) {
                    return new(P || b)(g.LFG(M.eN))
                },
                b.\u0275prov = g.Yz7({token: b, factory: b.\u0275fac, providedIn: "root"}),
                x
            })()
        },
        9099: (N, E, n) => {
            "use strict";
            n.d(E, {
                q: () => Pe
            });
            var s = n(3170),
                l = n(4362),
                t = n(3989),
                g = n(3517),
                M = n(275),
                e = n(3507),
                b = n(845),
                x = n(6747),
                m = n(4585),
                P = n(5392),
                k = n(8740),
                y = n(8654),
                I = n(727),
                w = n(7665),
                T = n(5550),
                S = n(8940),
                ee = n(6272),
                Q = n(6669),
                Y = n(1035),
                K = n(9400),
                ne = n(5787),
                re = n(647),
                _ = n(6515),
                p = n(166),
                R = n(8245),
                W = n(662),
                J = n(257),
                G = n(7796),
                X = n(5029),
                oe = n(3401),
                le = n(5659),
                u = n(6418),
                i = n(1465),
                f = n(2098),
                O = n(4650),
                L = n(9074),
                C = n(7963),
                U = n(4847),
                D = n(3101),
                z = n(2484),
                V = n(2899),
                ae = n(7321),
                ge = n(2698),
                se = n(4352),
                ie = n(1699);
            let Pe = (() => {
                var pe;
                class _e {}
                return(pe = _e).\u0275fac = function (H) {
                    return new(H || pe)
                },
                pe.\u0275mod = ie.oAB({type: pe}),
                pe.\u0275inj = ie.cJS({
                    providers: [
                        {
                            provide: J.Ad,
                            useValue: "en-US"
                        }
                    ],
                    imports: [
                        se.wp,
                        s.rt,
                        l.Iq,
                        e.U5,
                        b.HT,
                        x.nZ,
                        t._t,
                        m.D8,
                        P.g,
                        g.eL,
                        k._r,
                        y.yu,
                        I.vV,
                        w.IF,
                        T.Zh,
                        S.yD,
                        ee.T5,
                        Q.FA,
                        Y.yj,
                        K.t,
                        ne.To,
                        re.N6,
                        _.Ps,
                        p.x4,
                        R.gR,
                        W.jT,
                        J.XK,
                        G.gf,
                        X.jc,
                        oe.UK,
                        le.Xo,
                        J.si,
                        u.uw,
                        i.SJ,
                        f.XF,
                        O.Wd,
                        L.y,
                        C.JX,
                        U.U5,
                        D.Nn,
                        z.g0,
                        V.AA,
                        ae.dp,
                        ge.U8,
                        g.eL,
                        M.Cl,
                        se.wp
                    ]
                }),
                _e
            })()
        },
        3041: (N, E, n) => {
            "use strict";
            n.d(E, {
                F: () => G
            });
            var s = n(5400),
                l = n(8071),
                t = n(9877),
                g = n(530),
                M = n(4980),
                e = n(3252),
                b = n(2235),
                x = n(274),
                m = n(9736),
                P = n(3738),
                k = n(6360),
                y = n(3246),
                I = n(1831),
                w = n(2389),
                T = function (X) {
                    return X.Certificate = "/html/site/img/angular-shop/Alison-Certificate-Sample.png",
                    X.Diploma = "/html/site/img/angular-shop/Alison-Diploma-Sample.png",
                    X
                }(T || {}),
                S = n(553),
                ee = n(6575),
                Q = n(3424),
                Y = n(3369),
                K = n(2055),
                ne = n(25),
                re = n(8540),
                _ = n(7910),
                p = n(8159),
                R = n(1699),
                W = n(4860),
                J = n(7214);
            let G = (() => {
                var X;
                class oe {
                    constructor(u, i) {
                        this.httpClient = u,
                        this.notificationService = i,
                        this._finishedCoursesBS = new s.t(1),
                        this._courseProductsBS = new s.t(1),
                        this._userInfoBS = new s.t(1),
                        this._shoppingCartCacheBS = new s.t(1),
                        this._paymentMethodBS = new s.t(1),
                        this._vouchersBS = new s.t(1),
                        this._courseIdsWIthPurchasedDigitalCertBS = new s.t(1),
                        this._courseIdsWIthFreeDigitalCertBS = new s.t(1),
                        this._adsCountdown = 8,
                        this._adsTimer = new l.X(8),
                        this._stopAdsTimer = new t.x,
                        this.finishedCourses = this._finishedCoursesBS.asObservable(),
                        this.courseProducts = this._courseProductsBS.asObservable(),
                        this.userInfo = this._userInfoBS.asObservable(),
                        this.shoppingCartCache = this._shoppingCartCacheBS.asObservable(),
                        this.paymentMethods = this._paymentMethodBS.asObservable(),
                        this.vouchers = this._vouchersBS.asObservable(),
                        this.courseIdsWIthPurchasedDigitalCert = this._courseIdsWIthPurchasedDigitalCertBS.asObservable(),
                        this.courseIdsWIthFreeDigitalCert = this._courseIdsWIthFreeDigitalCertBS.asObservable(),
                        this.getIdsCoursesWithFreeDigitalCerts().subscribe(),
                        this.userInfo$ = this.getUserInfo("addresses", "vouchers", "country", "bogd")
                    }
                    setSaleEnd(u) {
                        this.sale_time_end = u
                    }
                    getSaleEnd() {
                        return this.sale_time_end
                    }
                    setAutoStartAdsTimer(u) {
                        this.auto_start_ads_timer = !!u
                    }
                    getAutoStartAdsTimer() {
                        return this.auto_start_ads_timer
                    }
                    get adsCountdown() {
                        return this._adsCountdown
                    }
                    get adsTimer() {
                        return this._adsTimer
                    }
                    startAdsTimer() {
                        this._stopAdsTimer.next(null),
                        this._stopAdsTimer.complete(),
                        this._stopAdsTimer = new t.x,
                        (0, g.H)(1e3, 1e3).pipe((0, x.R)(this._stopAdsTimer), (0, m.U)(u => (this._adsCountdown - u == -1 && (this._stopAdsTimer.next(null), this._stopAdsTimer.complete()), this._adsCountdown - u))).subscribe(u => this._adsTimer.next(u))
                    }
                    getFinishedCourses() {
                        return this.httpClient.get(`${
                            S.N.dataApiUrl
                        }/user/courses-completed`).pipe((0, m.U)(u => 0 == u.total ? [] : u.result.map(i => ({
                            id: i.id,
                            courseImage: T.Certificate,
                            completionDate: re.utc(i.completionDate).format("LL").toString(),
                            courseTitle: i.name,
                            courseType: i.course_type_id === _.C.Certificate ? p.l.Certificate : p.l.Diploma,
                            printsAmount: 1,
                            completionDateString: re.utc(i.completionDate).format("YYYY-MM-DD HH:mm:ss").toString()
                        }))), (0, P.b)(u => this._finishedCoursesBS.next(u)), (0, k.X)(2))
                    }
                    getAllProducts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products?type=certification`).pipe((0, y.j)("data"), (0, m.U)(u => u.map(i => {
                            const f = i.prices.one_time.find(O => !O.is_default_price) ? i.prices.one_time.find(O => !O.is_default_price) : 3 === i.prices.length ? i.prices.one_time[2] : i.prices.one_time[1] || i.prices.one_time[0];
                            return {
                                id: i.id,
                                type: i.code,
                                name: i.name,
                                description: i.description,
                                price: f ? f.price / 100 : 0,
                                originalPrice: i.prices.one_time[0].price,
                                currency: {
                                    code: f.currency ? f.currency.code : "EUR",
                                    id: f.currency ? f.currency.id : 1
                                },
                                shippable: i.shippable,
                                incrementable: i.incrementable,
                                recurringTypeId: f ? f.type_id : K.Q.NoRecurring
                            }
                        })), (0, k.X)(2))
                    }
                    getB2BProducts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => i.code === Y.k.B2BSolo || i.code === Y.k.B2BBusiness || i.code === Y.k.B2BBusinessPlus)), (0, m.U)(u => u.map(i => {
                            const f = i.prices.one_time ? i.prices.one_time : i.prices.recurring ? i.prices.recurring : i.prices.per_user_recurring,
                                O = 3 === f.length ? f[2] : f[1] || f[0],
                                L = O.sale;
                            return {
                                id: i.id,
                                type: i.code,
                                name: i.name,
                                description: i.code === Y.k.B2BSolo ? "Per month" : "Per user/Per month",
                                price: O.price / 100,
                                recurringTypeId: O.type_id,
                                discountedPrice: L ? L.price / 100 : -1,
                                saleDiscount: L ? L.discount : void 0,
                                saleId: L ? L.id : void 0,
                                shippable: i.shippable,
                                incrementable: i.incrementable,
                                organisation: i.organisation,
                                trialable: i.trialable
                            }
                        })), (0, k.X)(2))
                    }
                    getEnterpriseProducts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => i.code === Y.k.B2BApi)), (0, m.U)(u => u.map(i => {
                            const f = i.prices.one_time ? i.prices.one_time : i.prices.recurring ? i.prices.recurring : i.prices.per_user_recurring,
                                O = 3 === f.length ? f[2] : f[1] || f[0],
                                L = O.sale;
                            return {
                                id: i.id,
                                type: i.code,
                                name: "Annual Licence Fee",
                                description: i.description,
                                price: O.price / 100,
                                recurringTypeId: O.type_id,
                                discountedPrice: L ? L.price / 100 : -1,
                                saleDiscount: L ? L.discount : void 0,
                                saleId: L ? L.id : void 0,
                                shippable: i.shippable,
                                incrementable: i.incrementable,
                                organisation: i.organisation,
                                trialable: i.trialable
                            }
                        })), (0, k.X)(2))
                    }
                    getMemberProducts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products?type=masks&embed=masked`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => i.code === Y.k.VoucherDigCert100 || i.code === Y.k.VoucherDigDip100)), (0, m.U)(u => u.map(i => {
                            const f = i,
                                O = i._embed.masked,
                                L = f.prices.one_time.find(U => !U.is_default_price) ? f.prices.one_time.find(U => !U.is_default_price) : 3 === f.prices.length ? f.prices.one_time[2] : f.prices.one_time[1] || f.prices.one_time[0],
                                C = O.prices.one_time.find(U => !U.is_default_price) ? O.prices.one_time.find(U => !U.is_default_price) : 3 === O.prices.length ? O.prices.one_time[2] : O.prices.one_time[1] || O.prices.one_time[0];
                            return {
                                id: f.id,
                                type: f.code,
                                name: O.name,
                                description: O.description,
                                onlyUIPrice: C.price / 100,
                                price: L.price / 100,
                                currency: {
                                    ... L.currency
                                },
                                recurringTypeId: L.type_id,
                                shippable: f.shippable,
                                incrementable: f.incrementable
                            }
                        })))
                    }
                    getBulkCertifications() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products?type=masks&embed=masked`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => i.code === Y.k.VoucherDigCert100 || i.code === Y.k.VoucherDigDip100)), (0, m.U)(u => u.map(i => {
                            const O = i._embed.masked,
                                L = 3 === i.prices.length ? i.prices.one_time[2] : i.prices.one_time[1] || i.prices.one_time[0];
                            return {
                                id: i.id,
                                type: i.code,
                                name: O.name,
                                description: O.description,
                                onlyUIPrice: i.prices.one_time[0].price / 100,
                                price: L.price / 100,
                                recurringTypeId: L.type_id,
                                courseImage: i.images.large,
                                shippable: i.shippable,
                                incrementable: i.incrementable,
                                currency: {
                                    ...i.currency
                                },
                                bulkPrice: i.prices.one_time.filter(U => U.options).map(U => {
                                    let D = U.options.bulk.split("-").map(V => parseInt(V));
                                    return D[0] = 1 === D[0] ? 0 : D[0], {
                                        fromAmount: D[0],
                                        toAmount: D[1] ?? 1e9,
                                        price: U.price / 100
                                    }
                                })
                            }
                        })))
                    }
                    getAdsFreeLEPremiumProducts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => i.code === Y.k.PremiumSubscription || i.code === Y.k.PremiumLESubscription)), (0, m.U)(u => {
                            const i = [];
                            return u.forEach(f => {
                                const O = (f.prices.one_time && f.prices.one_time[0]) ?? f.prices.recurring[0];
                                i.push(O.is_default_price && "monthly" === O.period ? {
                                    id: f.id,
                                    type: f.code,
                                    name: ne.b.MONTHLY,
                                    description: "Remove Ads From <b>All Courses</b>",
                                    image: "/html/site/img/angular-shop/monthly-plan.png",
                                    shippable: f.shippable,
                                    incrementable: f.incrementable,
                                    recurringTypeId: O.type_id,
                                    price: O.price / 100,
                                    period: O.period,
                                    currency: {
                                        code: O.currency ? O.currency.code : "EUR",
                                        id: O.currency ? O.currency.id : 1
                                    }
                                } : {
                                    id: f.id,
                                    type: f.code,
                                    name: ne.b.ONE_TIME_PURCHASE,
                                    description: "Remove Ads From <b>This Course</b>",
                                    image: "/html/site/img/angular-shop/one-time-purchase.png",
                                    shippable: f.shippable,
                                    incrementable: f.incrementable,
                                    recurringTypeId: O.type_id,
                                    price: O.price / 100,
                                    period: O.period,
                                    currency: {
                                        code: O.currency ? O.currency.code : "EUR",
                                        id: O.currency ? O.currency.id : 1
                                    }
                                })
                            }),
                            i.sort((f, O) => O.price - f.price)
                        }), (0, k.X)(2))
                    }
                    getPremiumProducts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => i.code === Y.k.PremiumSubscription)), (0, m.U)(u => {
                            const i = u[0],
                                f = [];
                            return i.prices.recurring.filter(C => 1 === C.currency.id).forEach(C => {
                                f.push({
                                    id: i.id,
                                    type: i.code,
                                    name: `${
                                        i.name
                                    } ${
                                        this.capitalizeFirstLetter(C.period)
                                    }`,
                                    description: `(pay each ${
                                        "monthly" === C.period ? "month" : "year"
                                    })`,
                                    shippable: i.shippable,
                                    incrementable: i.incrementable,
                                    recurringTypeId: C.type_id,
                                    price: C.price / 100,
                                    period: C.period,
                                    currency: {
                                        code: C.currency ? C.currency.code : "EUR",
                                        id: C.currency ? C.currency.id : 1
                                    }
                                })
                            }),
                            f.sort((C, U) => C.price - U.price)
                        }), (0, k.X)(2))
                    }
                    getCourseProducts(u) {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/products?type=certification&course_id=${u}`).pipe((0, y.j)("data"), (0, m.U)(i => i.map(f => {
                            let O = f.prices.one_time ? f.prices.one_time.find(D => null != D.course_id) : null;
                            const L = f.prices.one_time ? O || (f.prices.one_time.find(D => !D.is_default_price) ? f.prices.one_time.find(D => !D.is_default_price) : f.prices.one_time[2] || f.prices.one_time[1] || f.prices.one_time[0]) : null,
                                U = L.b2b_price || L.sale;
                            return {
                                id: f.id,
                                type: f.code,
                                name: f.name,
                                description: f.description,
                                price: L ? L.price / 100 : 0,
                                originalPrice: f.prices.one_time.find(D => D.is_default_price) ?. price / 100 || null,
                                currency: {
                                    code: L.currency ? L.currency.code : "USD",
                                    id: L.currency ? L.currency.id : 1
                                },
                                discountedPrice: U ? U.price / 100 : -1,
                                saleDiscount: U ? U.discount : null,
                                saleId: U ? U.id : null,
                                shippable: f.shippable,
                                incrementable: f.incrementable,
                                recurringTypeId: L.type_id
                            }
                        })), (0, P.b)(i => this._courseProductsBS.next(i)), (0, k.X)(2))
                    }
                    getUserInfo(...u) {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/users${
                            u.length ? "?embed=" + u.toString() : ""
                        }`).pipe((0, y.j)("data"), (0, m.U)(i => {
                            const f = i[0],
                                O = f._embed ?. addresses ?. find(D => D.default),
                                L = f._embed ?. vouchers || [],
                                C = f._embed ?. managed_groups || [],
                                U = f._embed ?. bogd || {};
                            return {
                                id: f.id,
                                addressId: O ?. id,
                                addressLine1: O ?. line1,
                                addressLine2: O ?. line2,
                                city: O ?. city,
                                country: f._embed ?. country,
                                countryId: f._embed ?. country ?. id,
                                firstName: f.firstname,
                                lastName: f.lastname,
                                addressName: f.firstname + " " + (
                                f.lastname ? f.lastname : ""
                            ),
                                email: f.email,
                                phone: O ?. telephone,
                                poBox: O ?. pobox,
                                postcode: O ?. postcode && "0" !== O ?. postcode ? O ?. postcode : "",
                                stateOrCounty: O ?. state,
                                created_at: f.created_at,
                                flms_employee: f.flms_employee,
                                managedGroups: C.map(D => ({name: D.name, id: D.id})),
                                voucherList: L.filter(D => {
                                    const z = (new Date).toISOString().substring(0, (new Date).toISOString().indexOf("."));
                                    return new Date(z).getTime() <= new Date(D.expires.toString().replace(/ /g, "T")).getTime()
                                }).map(D => ({
                                    id: D.id,
                                    productId: D.product_id,
                                    discount: D.discount,
                                    presale: !!D.presale,
                                    uuid: D.uuid,
                                    expired: !1,
                                    used: !!D.order_id,
                                    distributor_id: D.distributor_id
                                })),
                                avatar: f.avatar,
                                bogd: U.active
                            }
                        }), (0, I.d)(), (0, P.b)(i => this._userInfoBS.next(i)))
                    }
                    getEnrollmentsSummary(u) {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/enrollments-summaries/${u}`).pipe((0, y.j)("data"), (0, m.U)(i => ({
                            completionsCount: i.completions_count,
                            enrollmentsCount: i.enrollments_count,
                            userId: i.user_id,
                            lastLearnedAt: i.last_learned_at,
                            lastLearnedCourseId: i.last_learned_course_id
                        })), (0, k.X)(2))
                    }
                    getDefaultParchmentPreview() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/parchment-previews`).pipe((0, y.j)("data"), (0, m.U)(u => u.length ? (u.map(i => ({userId: i.user_id, courseId: i.course_id, url: i.url})), u[0]) : {}), (0, k.X)(2))
                    }
                    getParchmentPreviews(u) {
                        return u.length ? this.httpClient.get(`${
                            S.N.apiUrl
                        }/parchment-previews`, {
                            params: {
                                course_id: u.join()
                            }
                        }).pipe((0, y.j)("data"), (0, m.U)(i => i.map(f => ({userId: f.user_id, courseId: f.course_id, url: f.url}))), (0, k.X)(2)) : (0, M.of)([])
                    }
                    updateUsersName(u) {
                        return this.httpClient.patch(`${
                            S.N.apiUrl
                        }/users/${
                            u.id
                        }`, {
                            firstname: u.firstName,
                            lastname: u.lastName
                        })
                    }
                    createVoucher(u) {
                        const i = {
                                presale: !0,
                                product_id: u
                            },
                            f = new Date;
                        return this.httpClient.post(`${
                            S.N.apiUrl
                        }/vouchers`, i).pipe((0, y.j)("data"), (0, m.U)(O => ({
                            id: O.id,
                            productId: O.product_id,
                            discount: O.discount,
                            presale: !!O.presale,
                            uuid: O.uuid,
                            expired: f.getTime() >= new Date(O.expires).getTime(),
                            used: !!O.order_id,
                            distributor_id: O.distributor_id
                        })))
                    }
                    applyVoucherByUuid(u, i) {
                        const f = new Date;
                        return this.httpClient.patch(`${
                            S.N.apiUrl
                        }/vouchers/${u}`, {user_id: i}).pipe((0, y.j)("data"), (0, m.U)(O => ({
                            id: O.id,
                            productId: O.product_id,
                            discount: O.discount,
                            presale: !!O.presale,
                            uuid: O.uuid,
                            expired: f.getTime() >= new Date(O.expires).getTime(),
                            used: !!O.order_id
                        })))
                    }
                    doVoucherValidationByUuid(u, i) {
                        const f = new Date;
                        return this.httpClient.post(`${
                            S.N.apiUrl
                        }/vouchers/check`, {
                            product_id: u,
                            voucher_uuids: i
                        }).pipe((0, y.j)("data"), (0, m.U)(O => ({
                            id: O.id,
                            productId: O.product_id,
                            discount: O.discount,
                            presale: !!O.presale,
                            uuid: O.uuid,
                            expired: f.getTime() >= new Date(O.expires).getTime(),
                            used: !!O.order_id
                        })), (0, k.X)(2), (0, w.K)(O => (this.notificationService.notify(O ?. error ?. errors ?. voucher, Q.E.Error), (0, e._)(O))))
                    }
                    updateShoppingCartCache(u, i) {
                        return this.httpClient.put(`${
                            S.N.apiUrl
                        }/shopping-carts/${u}`, i).pipe((0, y.j)("data"), (0, k.X)(2), (0, w.K)(f => (this.notificationService.notify("Error. Please contact support", Q.E.Error), (0, e._)(f))))
                    }
                    deleteShoppingCartCache(u) {
                        return this.httpClient.delete(`${
                            S.N.apiUrl
                        }/shopping-carts/${u}`)
                    }
                    getShoppingCartCache(u) {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/shopping-carts/${u}`).pipe((0, y.j)("data"), (0, P.b)(i => this._shoppingCartCacheBS.next(i)), (0, k.X)(2))
                    }
                    getPaymentMethods() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/payment-methods?active=1`).pipe((0, y.j)("data"), (0, P.b)(u => this._paymentMethodBS.next(u)), (0, k.X)(2))
                    }
                    postNewAddress(u) {
                        return this.httpClient.post(`${
                            S.N.apiUrl
                        }/addresses`, u).pipe((0, y.j)("data"))
                    }
                    doCheckout(u, i, f) {
                        return this.httpClient.post(`${
                            S.N.apiUrl
                        }/shopping-carts/${u}/checkout`, i ? {
                            payment_method_id: i
                        } : f ? {
                            payment_method_id: i,
                            currency_id: f
                        } : {}).pipe((0, y.j)("data"), (0, k.X)(2))
                    }
                    getOrders() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/orders?sort=-id&per_page=100`).pipe((0, y.j)("data"), (0, m.U)(u => u.map(i => ({
                            id: i.id,
                            userId: i.user_id,
                            quote: i.quote,
                            status: i.status,
                            adminStatus: i.admin_status,
                            notes: i.notes,
                            subtotal: i.subtotal,
                            total: i.total,
                            createdAt: i.created_at,
                            updatedAt: i.updated_at
                        }))), (0, k.X)(2))
                    }
                    completeBankTransfer(u) {
                        return this.httpClient.patch(`${
                            S.N.apiUrl
                        }/orders/${u}/bank-transfer-complete`, {}).pipe((0, y.j)("data"))
                    }
                    getIdsCoursesWithPurchasedDigitalCerts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/orders?status=completed&embed=items`).pipe((0, y.j)("data"), (0, m.U)(u => u.filter(i => "completed" === i.status).map(i => i._embed && i._embed.items ? i._embed.items.filter(f => "pdf" === f.product_type || "diploma-pdf" === f.product_type).map(f => f.course_id) : []).flat()), (0, P.b)(u => this._courseIdsWIthPurchasedDigitalCertBS.next(u)), (0, k.X)(2))
                    }
                    getIdsCoursesWithFreeDigitalCerts() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/courses?per_page=500&free_pdf=1`).pipe((0, y.j)("data"), (0, m.U)(u => u.map(i => i.id)), (0, P.b)(u => {
                            this._courseIdsWIthFreeDigitalCertBS.next(u)
                        }), (0, k.X)(2), (0, I.d)())
                    }
                    getOrganizations() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/organisations?embed=plan`).pipe((0, y.j)("data"), (0, m.U)(u => u.map(i => ({
                            id: i.id,
                            logo: i.logo,
                            name: i.name,
                            trial: !!i ?. _embed ?. plan ?. trial
                        }))))
                    }
                    getSubscriptions() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/subscriptions`).pipe((0, y.j)("data"), (0, m.U)(u => u.map(i => ({
                            productId: i.product_id,
                            productCode: i.product_code,
                            active: i.active,
                            solo: i.product_code === Y.k.B2BSolo,
                            business: i.product_code === Y.k.B2BBusiness || i.product_code === Y.k.B2BBusinessPlus
                        }))))
                    }
                    getImage(u) {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/organisations/${u}/logos`).pipe((0, y.j)("data"), (0, y.j)("url"))
                    }
                    uploadImage(u, i) {
                        return new b.y(O => {
                            const L = new Headers,
                                C = window.sessionId;
                            L.append("Authorization", `Cookie ${C}`),
                            L.append("X-CSRF-Token", window.csrf);
                            const U = new FormData;
                            U.append("logo", i, i.name),
                            fetch(`${
                                S.N.apiUrl
                            }/organisations/${u}/logos`, {
                                method: "POST",
                                headers: L,
                                body: U,
                                redirect: "follow"
                            }).then(z => z.json()).then(z => O.next(z)).catch(z => O.error(z))
                        })
                    }
                    getSaleData() {
                        return this.httpClient.get(`${
                            S.N.apiUrl
                        }/sales/active`).pipe((0, y.j)("data"), (0, P.b)(u => u), (0, k.X)(2))
                    }
                    capitalizeFirstLetter(u) {
                        return u.charAt(0).toUpperCase() + u.slice(1)
                    }
                    getParseCompletedCoursesEmployeeInShop(u) {
                        return u.map(i => ({
                            id: i.id,
                            courseTitle: i.course_name,
                            completionDate: (0, ee.p6)(i.completed_at, "MMMM d, yyyy", "en"),
                            courseType: "certificate",
                            printsAmount: 1,
                            courseImage: i.image,
                            completionDateString: re.utc(i.completed_at).format("YYYY-MM-DD HH:mm:ss").toString()
                        }))
                    }
                }
                return(X = oe).\u0275fac = function (u) {
                    return new(u || X)(R.LFG(W.eN), R.LFG(J.g))
                },
                X.\u0275prov = R.Yz7({token: X, factory: X.\u0275fac, providedIn: "root"}),
                oe
            })()
        },
        8949: (N, E, n) => {
            "use strict";
            n.d(E, {
                V6: () => t,
                Ze: () => s,
                nj: () => l
            });
            var s = function (g) {
                    return g.LINKS = "Your Affiliate Links",
                    g.TRACK_STATS = "Track Stats",
                    g.YOUR_EARNINGS = "Your Earnings",
                    g.LEADERBOARD = "Leaderboard",
                    g.TOP_TIPS = "Top Tips",
                    g
                }(s || {}),
                l = function (g) {
                    return g.month = "month",
                    g.threeMonths = "threeMonths",
                    g.sixMonths = "sixMonths",
                    g.year = "year",
                    g.allTime = "all-time",
                    g
                }(l || {}),
                t = function (g) {
                    return g.allTime = "all-time",
                    g.week = "week",
                    g
                }(t || {})
        },
        7910: (N, E, n) => {
            "use strict";
            n.d(E, {
                C: () => s
            });
            var s = function (l) {
                return l[l.Certificate = 1] = "Certificate",
                l[l.Diploma = 2] = "Diploma",
                l
            }(s || {})
        },
        8159: (N, E, n) => {
            "use strict";
            n.d(E, {
                l: () => s
            });
            var s = function (l) {
                return l.Certificate = "certificate",
                l.Diploma = "diploma",
                l
            }(s || {})
        },
        8423: (N, E, n) => {
            "use strict";
            n.d(E, {
                F: () => s
            });
            var s = function (l) {
                return l.GLOBAL = "global",
                l.LOCAL = "local",
                l
            }(s || {})
        },
        3424: (N, E, n) => {
            "use strict";
            n.d(E, {
                E: () => s
            });
            var s = function (l) {
                return l[l.Error = 0] = "Error",
                l[l.Success = 1] = "Success",
                l[l.Info = 2] = "Info",
                l
            }(s || {})
        },
        25: (N, E, n) => {
            "use strict";
            n.d(E, {
                b: () => s
            });
            var s = function (l) {
                return l.MONTHLY = "Monthly Plan",
                l.ONE_TIME_PURCHASE = "One Time Purchase",
                l
            }(s || {})
        },
        3369: (N, E, n) => {
            "use strict";
            n.d(E, {
                k: () => s
            });
            var s = function (l) {
                return l.B2BSolo = "b2b-solo",
                l.B2BBusiness = "b2b-business",
                l.B2BBusinessPlus = "b2b-business-plus",
                l.B2BApi = "b2b-api",
                l.VoucherDigCert100 = "voucher-dig-cert-100",
                l.VoucherDigDip100 = "voucher-dig-dip-100",
                l.PremiumSubscription = "subscription-premium-monthly-launch",
                l.PremiumLESubscription = "adsfree-course",
                l
            }(s || {})
        },
        2055: (N, E, n) => {
            "use strict";
            n.d(E, {
                Q: () => s
            });
            var s = function (l) {
                return l[l.NoRecurring = 0] = "NoRecurring",
                l[l.PerMonth = 1] = "PerMonth",
                l[l.PerUserPerMonth = 2] = "PerUserPerMonth",
                l
            }(s || {})
        },
        553: (N, E, n) => {
            "use strict";
            n.d(E, {
                N: () => s
            });
            const s = {
                production: !0,
                local: !1,
                imageDirectory: "/html/site/img/angular-shop",
                appUrl: "",
                apiUrl: "",
                authUrl: "",
                dataApiUrl: "https://api.alison.com/v0.1",
                stripePublishableKey: "",
                authToken: "",
                dataApiAuthToken: "",
                microsoftAccountClientId: "4d4dd7e8-abb9-40be-95f5-a646fdde5ee9",
                googleAccountsClientId: "523987296695-rr6pdccqdmcq2lj5c7uh6d8c3tlee106.apps.googleusercontent.com",
                client_secret: "xVDWrrDlFVx6bpeWumSh4IWWrIZ8p4e1H976Qswi",
                client_id: 1,
                coursewareApi: "https://courseware.alison.com/api/"
            }
        },
        4913: (N, E, n) => {
            "use strict";
            var s = n(6480),
                l = n(1699),
                t = n(9575);
            n(553).N.production && (0, l.G48)(),
            s.q6().bootstrapModule(t.b9).catch(M => console.error(M))
        },
        3766: (N, E, n) => {
            "use strict";
            n.d(E, {
                E: () => t
            });
            var s = n(553),
                l = n(1699);
            let t = (() => {
                var g;
                class M {
                    constructor() {}
                    appendSlickJS() {
                        const b = document.createElement("script");
                        b.setAttribute("src", `${
                            s.N.appUrl
                        }/html/vendor/js/slick.js`),
                        document.head.appendChild(b)
                    }
                    appendStripe() {
                        const b = document.createElement("script");
                        b.setAttribute("src", "https://js.stripe.com/v3/"),
                        document.head.appendChild(b)
                    }
                    appendGapi(b) {
                        const x = document.createElement("script");
                        x.setAttribute("src", "https://apis.google.com/js/api.js"),
                        b && (x.onload = b),
                        document.head.appendChild(x)
                    }
                    appendGsi(b) {
                        const x = document.createElement("script");
                        x.setAttribute("src", "https://accounts.google.com/gsi/client"),
                        b && (x.onload = b),
                        document.head.appendChild(x)
                    }
                }
                return(g = M).\u0275fac = function (b) {
                    return new(b || g)
                },
                g.\u0275prov = l.Yz7({token: g, factory: g.\u0275fac, providedIn: "root"}),
                M
            })()
        },
        7214: (N, E, n) => {
            "use strict";
            n.d(E, {
                g: () => g
            });
            var s = n(8071),
                l = n(3424),
                t = n(1699);
            let g = (() => {
                var M;
                class e {
                    constructor() {
                        this._notification$ = new s.X({
                            show: !1
                        }),
                        this.notification$ = this._notification$.asObservable()
                    }
                    notify(x, m) {
                        this._notification$.next({
                            show: !0,
                            type: m,
                            message: x
                        }),
                        setTimeout(() => this._notification$.next({
                            show: !1,
                            type: m,
                            message: x
                        }), 3e3)
                    }
                    error(x) {
                        return this.notify(x, l.E.Error)
                    }
                    info(x) {
                        return this.notify(x, l.E.Info)
                    }
                    success(x) {
                        return this.notify(x, l.E.Success)
                    }
                }
                return(M = e).\u0275fac = function (x) {
                    return new(x || M)
                },
                M.\u0275prov = t.Yz7({token: M, factory: M.\u0275fac, providedIn: "root"}),
                e
            })()
        },
        768: (N, E, n) => {
            "use strict";
            n.d(E, {
                $: () => s
            });
            var s = function (l) {
                return l.HEADER_CONTENT_TYPE_IGNORE = "ignore",
                l
            }(s || {})
        },
        2669: (N, E, n) => {
            "use strict";
            n.d(E, {
                b: () => x
            });
            var s = n(655),
                l = n(4520),
                t = n(9736),
                g = n(3317),
                M = n(8071),
                e = n(8423),
                b = n(1699);
            let x = (() => {
                var m;
                class P {
                    set loadingItems(y) {
                        this._loadingItems = y || [],
                        this.loadingChange.next(this._loadingItems)
                    }
                    get loadingItemsList() {
                        return this._loadingItems
                    }
                    constructor() {
                        this._loadingItems = [],
                        this.loadingChange = new M.X(this.loadingItemsList)
                    }
                    on(y = e.F.GLOBAL, I) {
                        const w = (new Date).getTime(),
                            T = I || `loading-${w}`;
                        return this.loadingItems = [
                            {
                                loading: y,
                                name: T
                            },
                            ...this.loadingItemsList
                        ],
                        T
                    }
                    off(y = e.F.GLOBAL) {
                        const I = this.loadingItemsList ?. length;
                        return this.loadingItems = this.loadingItemsList.filter(w => w.name !== y && w.loading !== y),
                        I !== this.loadingItemsList.length
                    }
                    listen(y = e.F.GLOBAL) {
                        return this.loadingChange.asObservable().pipe((0, s.b)(10), (0, l.h)(I => 0 === I ?. length || !!I ?. find(w => w.loading === y || w.name === y)), (0, t.U)(I => !!I ?. find(w => w.loading === y || w.name === y)), (0, g.x)())
                    }
                }
                return(m = P).\u0275fac = function (y) {
                    return new(y || m)
                },
                m.\u0275prov = b.Yz7({token: m, factory: m.\u0275fac, providedIn: "root"}),
                P
            })()
        },
        4643: (N, E, n) => {
            "use strict";
            n.d(E, {
                x: () => t
            });
            var s = n(1670),
                l = n(1699);
            let t = (() => {
                var g;
                class M {
                    transform({file: b, type: x}) {
                        return(0, s.Z)(function*() {
                            let m;
                            return b && (m = yield(k = b, new Promise((y, I) => {
                                const w = new FileReader;
                                w.onloadend = () => {
                                    const T = new Image;
                                    T.src = w.result,
                                    T.onload = () => {
                                        let S = {};
                                        S[x + "_file"] = w.result,
                                        S[x + "_file_info"] = {
                                            square_crop: {
                                                width: T.width,
                                                height: T.height,
                                                y: 0,
                                                x: 0
                                            }
                                        },
                                        y(S)
                                    },
                                    T.onerror = () => {
                                        I("couldn't read image")
                                    }
                                },
                                w.readAsDataURL(k)
                            }))),
                            m;
                            var k
                        })()
                    }
                }
                return(g = M).\u0275fac = function (b) {
                    return new(b || g)
                },
                g.\u0275pipe = l.Yjl({
                    name: "buildFileData",
                    type: g,
                    pure: !0
                }),
                M
            })()
        },
        832: (N, E, n) => {
            "use strict";
            n.d(E, {
                r: () => t
            });
            var s = n(6575),
                l = n(1699);
            let t = (() => {
                var g;
                class M {
                    transform(b) {
                        const x = new s.uU("en-US"),
                            m = b.getFullYear(),
                            P = b.getMonth(),
                            k = new Date(m, P, 1),
                            y = new Date(m, P + 1, 0);
                        return {
                            start_date: x.transform(k, "YYYY-MM-dd"),
                            end_date: x.transform(y, "YYYY-MM-dd")
                        }
                    }
                }
                return(g = M).\u0275fac = function (b) {
                    return new(b || g)
                },
                g.\u0275pipe = l.Yjl({
                    name: "firstLastMonthDays",
                    type: g,
                    pure: !0
                }),
                M
            })()
        },
        1043: (N, E, n) => {
            "use strict";
            n.d(E, {
                M: () => g
            });
            var s = n(8540),
                t = n(1699);
            let g = (() => {
                var M;
                class e {
                    transform(x) {
                        return s.utc(x).local().fromNow()
                    }
                }
                return(M = e).\u0275fac = function (x) {
                    return new(x || M)
                },
                M.\u0275pipe = t.Yjl({
                    name: "localTimeFromNow",
                    type: M,
                    pure: !0
                }),
                e
            })()
        },
        4779: (N, E, n) => {
            "use strict";
            n.d(E, {
                n: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e, b, x) {
                        const m = "Showing ";
                        if (0 == x || 0 == b) 
                            return `${m} 0 of ${x}`;
                        
                        const P = e * b;
                        return `${m} ${
                            P + 1
                        } - ${
                            P < (x = Math.max(x, 0)) ? Math.min(P + b, x) : P + b
                        } of ${x}`
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "getMatPaginatorRangeLabel",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        9068: (N, E, n) => {
            "use strict";
            n.d(E, {
                s: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e, b = !1) {
                        return e.page = e.current_page || 1,
                        (({
                            page: x,
                            per_page: m,
                            last_page: P,
                            total: k,
                            from: y,
                            to: I
                        }) => ({
                            page: x,
                            per_page: m,
                            last_page: P,
                            total: k,
                            from: y,
                            to: I
                        }))(e)
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "paginationProps",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        6071: (N, E, n) => {
            "use strict";
            n.d(E, {
                l: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e, b, x = "", m = "") {
                        if (!e) 
                            return null;
                        
                        const P = e.reduce((k, y) => {
                            let I = y[b] || x;
                            return y[b] && (I = m + " " + I),
                            k[I] ? k[I].push(y) : k[I] = [y],
                            k
                        }, {});
                        return Object.keys(P).sort((k, y) => k.localeCompare(y)).map(k => ({key: k, value: P[k]}))
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "groupBy",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        6655: (N, E, n) => {
            "use strict";
            n.d(E, {
                B: () => t
            });
            var s = n(7147),
                l = n(1699);
            let t = (() => {
                var g;
                class M {
                    transform(b) {
                        return b.replace(/\$\$+(.+?)\$\$+/g, m => s.Z.renderToString(m.replace(/&nbsp;/g, "").replace(/\$/g, "") || "", {
                            throwOnError: !1
                        }))
                    }
                }
                return(g = M).\u0275fac = function (b) {
                    return new(b || g)
                },
                g.\u0275pipe = l.Yjl({
                    name: "mathAnnotation",
                    type: g,
                    pure: !0
                }),
                M
            })()
        },
        222: (N, E, n) => {
            "use strict";
            n.d(E, {
                y: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e) {
                        let b = Math.floor(e / 3600),
                            x = Math.floor(e % 3600 / 60);
                        return b = b < 10 ? + ("0" + b) : b,
                        x = x < 10 ? + ("0" + x) : x,
                        0 === b ? {
                            minutes: x
                        } : 0 === x ? {
                            hours: b
                        } : {
                            hours: b,
                            minutes: x
                        }
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "toHrsMins",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        8761: (N, E, n) => {
            "use strict";
            n.d(E, {
                z: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e) {
                        return Object.fromEntries(Object.entries(e).filter(([b, x]) => null != x && "" !== x && 0 !== x && 0 !== x.length))
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "removeObjBlankVals",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        6033: (N, E, n) => {
            "use strict";
            n.d(E, {
                z: () => t
            });
            var s = n(1699),
                l = n(6480);
            let t = (() => {
                var g;
                class M {
                    constructor(b) {
                        this._sanitized = b
                    }
                    transform(b) {
                        return this._sanitized.bypassSecurityTrustHtml(b || "")
                    }
                }
                return(g = M).\u0275fac = function (b) {
                    return new(b || g)(s.Y36(l.H7, 16))
                },
                g.\u0275pipe = s.Yjl({
                    name: "safeHtml",
                    type: g,
                    pure: !0
                }),
                M
            })()
        },
        6578: (N, E, n) => {
            "use strict";
            n.d(E, {
                D: () => w
            });
            var s = n(6575),
                l = n(832),
                t = n(222),
                g = n(7652),
                M = n(8761),
                e = n(6712),
                b = n(1699);
            let x = (() => {
                var T;
                class S {
                    transform(Q, Y, K) {
                        if (K >= Q.length) {
                            let ne = K - Q.length + 1;
                            for (; ne--;) 
                                Q.push(void 0)
                            
                        }
                        return Q.splice(K, 0, Q.splice(Y, 1)[0]),
                        Q
                    }
                }
                return(T = S).\u0275fac = function (Q) {
                    return new(Q || T)
                },
                T.\u0275pipe = b.Yjl({
                    name: "moveInArr",
                    type: T,
                    pure: !0
                }),
                S
            })();
            var m = n(9068),
                P = n(4779),
                k = n(4643),
                y = n(6071),
                I = n(1043);
            let w = (() => {
                var T;
                class S {}
                return(T = S).\u0275fac = function (Q) {
                    return new(Q || T)
                },
                T.\u0275mod = b.oAB({type: T}),
                T.\u0275inj = b.cJS({
                    providers: [
                        l.r,
                        t.y,
                        M.z,
                        e.R,
                        x,
                        g.H,
                        m.s,
                        P.n,
                        k.x,
                        y.l,
                        I.M
                    ],
                    imports: [s.ez]
                }),
                S
            })()
        },
        7652: (N, E, n) => {
            "use strict";
            n.d(E, {
                H: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e) {
                        return(new DOMParser).parseFromString(e, "text/html").body.textContent || ""
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "stripTags",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        6712: (N, E, n) => {
            "use strict";
            n.d(E, {
                R: () => l
            });
            var s = n(1699);
            let l = (() => {
                var t;
                class g {
                    transform(e, b) {
                        let x = 0,
                            m = 0;
                        return x += e.reduce((P, k) => P + k.hours ?. min, 0) || 0,
                        m += e.reduce((P, k) => P + k.hours ?. max, 0) || 0,
                        0 === m && 0 === x ? 0 : `${x}-${m}`
                    }
                }
                return(t = g).\u0275fac = function (e) {
                    return new(e || t)
                },
                t.\u0275pipe = s.Yjl({
                    name: "sumHrs",
                    type: t,
                    pure: !0
                }),
                g
            })()
        },
        6700: (N, E, n) => {
            var s = {
                "./af": 5528,
                "./af.js": 5528,
                "./ar": 1036,
                "./ar-dz": 7579,
                "./ar-dz.js": 7579,
                "./ar-kw": 9588,
                "./ar-kw.js": 9588,
                "./ar-ly": 1650,
                "./ar-ly.js": 1650,
                "./ar-ma": 3258,
                "./ar-ma.js": 3258,
                "./ar-sa": 4085,
                "./ar-sa.js": 4085,
                "./ar-tn": 287,
                "./ar-tn.js": 287,
                "./ar.js": 1036,
                "./az": 9757,
                "./az.js": 9757,
                "./be": 9620,
                "./be.js": 9620,
                "./bg": 1139,
                "./bg.js": 1139,
                "./bm": 4042,
                "./bm.js": 4042,
                "./bn": 9641,
                "./bn-bd": 9126,
                "./bn-bd.js": 9126,
                "./bn.js": 9641,
                "./bo": 494,
                "./bo.js": 494,
                "./br": 934,
                "./br.js": 934,
                "./bs": 6274,
                "./bs.js": 6274,
                "./ca": 5831,
                "./ca.js": 5831,
                "./cs": 2354,
                "./cs.js": 2354,
                "./cv": 9692,
                "./cv.js": 9692,
                "./cy": 8774,
                "./cy.js": 8774,
                "./da": 8955,
                "./da.js": 8955,
                "./de": 1557,
                "./de-at": 4954,
                "./de-at.js": 4954,
                "./de-ch": 1881,
                "./de-ch.js": 1881,
                "./de.js": 1557,
                "./dv": 6475,
                "./dv.js": 6475,
                "./el": 8877,
                "./el.js": 8877,
                "./en-au": 454,
                "./en-au.js": 454,
                "./en-ca": 7356,
                "./en-ca.js": 7356,
                "./en-gb": 456,
                "./en-gb.js": 456,
                "./en-ie": 8789,
                "./en-ie.js": 8789,
                "./en-il": 5471,
                "./en-il.js": 5471,
                "./en-in": 9664,
                "./en-in.js": 9664,
                "./en-nz": 7672,
                "./en-nz.js": 7672,
                "./en-sg": 805,
                "./en-sg.js": 805,
                "./eo": 7390,
                "./eo.js": 7390,
                "./es": 1564,
                "./es-do": 1473,
                "./es-do.js": 1473,
                "./es-mx": 2089,
                "./es-mx.js": 2089,
                "./es-us": 4156,
                "./es-us.js": 4156,
                "./es.js": 1564,
                "./et": 6513,
                "./et.js": 6513,
                "./eu": 7856,
                "./eu.js": 7856,
                "./fa": 2378,
                "./fa.js": 2378,
                "./fi": 2687,
                "./fi.js": 2687,
                "./fil": 32,
                "./fil.js": 32,
                "./fo": 6845,
                "./fo.js": 6845,
                "./fr": 8875,
                "./fr-ca": 6425,
                "./fr-ca.js": 6425,
                "./fr-ch": 1746,
                "./fr-ch.js": 1746,
                "./fr.js": 8875,
                "./fy": 7037,
                "./fy.js": 7037,
                "./ga": 1217,
                "./ga.js": 1217,
                "./gd": 7010,
                "./gd.js": 7010,
                "./gl": 1931,
                "./gl.js": 1931,
                "./gom-deva": 4488,
                "./gom-deva.js": 4488,
                "./gom-latn": 8032,
                "./gom-latn.js": 8032,
                "./gu": 4984,
                "./gu.js": 4984,
                "./he": 9090,
                "./he.js": 9090,
                "./hi": 2085,
                "./hi.js": 2085,
                "./hr": 8787,
                "./hr.js": 8787,
                "./hu": 2901,
                "./hu.js": 2901,
                "./hy-am": 9819,
                "./hy-am.js": 9819,
                "./id": 4074,
                "./id.js": 4074,
                "./is": 715,
                "./is.js": 715,
                "./it": 3838,
                "./it-ch": 7040,
                "./it-ch.js": 7040,
                "./it.js": 3838,
                "./ja": 3180,
                "./ja.js": 3180,
                "./jv": 4346,
                "./jv.js": 4346,
                "./ka": 5538,
                "./ka.js": 5538,
                "./kk": 9772,
                "./kk.js": 9772,
                "./km": 7905,
                "./km.js": 7905,
                "./kn": 9125,
                "./kn.js": 9125,
                "./ko": 9140,
                "./ko.js": 9140,
                "./ku": 6780,
                "./ku.js": 6780,
                "./ky": 3768,
                "./ky.js": 3768,
                "./lb": 4016,
                "./lb.js": 4016,
                "./lo": 3169,
                "./lo.js": 3169,
                "./lt": 2353,
                "./lt.js": 2353,
                "./lv": 3243,
                "./lv.js": 3243,
                "./me": 2338,
                "./me.js": 2338,
                "./mi": 5555,
                "./mi.js": 5555,
                "./mk": 5794,
                "./mk.js": 5794,
                "./ml": 3151,
                "./ml.js": 3151,
                "./mn": 6458,
                "./mn.js": 6458,
                "./mr": 9165,
                "./mr.js": 9165,
                "./ms": 8680,
                "./ms-my": 7477,
                "./ms-my.js": 7477,
                "./ms.js": 8680,
                "./mt": 9684,
                "./mt.js": 9684,
                "./my": 285,
                "./my.js": 285,
                "./nb": 5922,
                "./nb.js": 5922,
                "./ne": 9040,
                "./ne.js": 9040,
                "./nl": 5066,
                "./nl-be": 4460,
                "./nl-be.js": 4460,
                "./nl.js": 5066,
                "./nn": 3693,
                "./nn.js": 3693,
                "./oc-lnc": 8676,
                "./oc-lnc.js": 8676,
                "./pa-in": 2341,
                "./pa-in.js": 2341,
                "./pl": 7416,
                "./pl.js": 7416,
                "./pt": 4344,
                "./pt-br": 113,
                "./pt-br.js": 113,
                "./pt.js": 4344,
                "./ro": 2643,
                "./ro.js": 2643,
                "./ru": 1305,
                "./ru.js": 1305,
                "./sd": 6095,
                "./sd.js": 6095,
                "./se": 4486,
                "./se.js": 4486,
                "./si": 8742,
                "./si.js": 8742,
                "./sk": 6722,
                "./sk.js": 6722,
                "./sl": 3345,
                "./sl.js": 3345,
                "./sq": 2416,
                "./sq.js": 2416,
                "./sr": 9450,
                "./sr-cyrl": 501,
                "./sr-cyrl.js": 501,
                "./sr.js": 9450,
                "./ss": 2222,
                "./ss.js": 2222,
                "./sv": 9454,
                "./sv.js": 9454,
                "./sw": 9638,
                "./sw.js": 9638,
                "./ta": 6494,
                "./ta.js": 6494,
                "./te": 4435,
                "./te.js": 4435,
                "./tet": 5003,
                "./tet.js": 5003,
                "./tg": 3706,
                "./tg.js": 3706,
                "./th": 6025,
                "./th.js": 6025,
                "./tk": 9780,
                "./tk.js": 9780,
                "./tl-ph": 2068,
                "./tl-ph.js": 2068,
                "./tlh": 9167,
                "./tlh.js": 9167,
                "./tr": 2494,
                "./tr.js": 2494,
                "./tzl": 8707,
                "./tzl.js": 8707,
                "./tzm": 1296,
                "./tzm-latn": 4532,
                "./tzm-latn.js": 4532,
                "./tzm.js": 1296,
                "./ug-cn": 2086,
                "./ug-cn.js": 2086,
                "./uk": 5069,
                "./uk.js": 5069,
                "./ur": 9304,
                "./ur.js": 9304,
                "./uz": 5115,
                "./uz-latn": 7609,
                "./uz-latn.js": 7609,
                "./uz.js": 5115,
                "./vi": 4802,
                "./vi.js": 4802,
                "./x-pseudo": 5605,
                "./x-pseudo.js": 5605,
                "./yo": 8456,
                "./yo.js": 8456,
                "./zh-cn": 3272,
                "./zh-cn.js": 3272,
                "./zh-hk": 9402,
                "./zh-hk.js": 9402,
                "./zh-mo": 8101,
                "./zh-mo.js": 8101,
                "./zh-tw": 262,
                "./zh-tw.js": 262
            };
            function l(g) {
                var M = t(g);
                return n(M)
            }
            function t(g) {
                if (!n.o(s, g)) {
                    var M = new Error("Cannot find module '" + g + "'");
                    throw M.code = "MODULE_NOT_FOUND",
                    M
                }
                return s[g]
            }
            l.keys = function () {
                return Object.keys(s)
            },
            l.resolve = t,
            N.exports = l,
            l.id = 6700
        },
        4015: (N, E, n) => {
            var s = {
                "./fill-the-blank/fill-the-blank.component": [
                    7044, "src_app_course_player_components_questions_types_fill-the-blank_fill-the-blank_component_ts"
                ],
                "./hot-spot/hot-spot.component": [
                    6265, "src_app_course_player_components_questions_types_hot-spot_hot-spot_component_ts"
                ],
                "./matching-drag-and-drop/matching-drag-and-drop.component": [
                    9324, "src_app_course_player_components_questions_types_matching-drag-and-drop_matching-drag-and-dro-fed84f"
                ],
                "./matching-dropdown/matching-dropdown.component": [
                    2945, "src_app_course_player_components_questions_types_matching-dropdown_matching-dropdown_component_ts"
                ],
                "./multiple-choice/multiple-choice.component": [
                    9572, "src_app_course_player_components_questions_types_multiple-choice_multiple-choice_component_ts"
                ],
                "./multiple-response/multiple-response.component": [
                    4005, "src_app_course_player_components_questions_types_multiple-response_multiple-response_component_ts"
                ],
                "./numeric/numeric.component": [
                    2635, "src_app_course_player_components_questions_types_numeric_numeric_component_ts"
                ],
                "./sequence-drag-and-drop/sequence-drag-and-drop.component": [
                    9051, "src_app_course_player_components_questions_types_sequence-drag-and-drop_sequence-drag-and-dro-e7198c"
                ],
                "./sequence-dropdown/sequence-dropdown.component": [
                    4321, "src_app_course_player_components_questions_types_sequence-dropdown_sequence-dropdown_component_ts"
                ],
                "./true-or-false/true-or-false.component": [
                    1773, "src_app_course_player_components_questions_types_true-or-false_true-or-false_component_ts"
                ],
                "./word-bank/word-bank.component": [684, "src_app_course_player_components_questions_types_word-bank_word-bank_component_ts"]
            };
            function l(t) {
                if (!n.o(s, t)) 
                    return Promise.resolve().then(() => {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND",
                        e
                    });
                
                var g = s[t],
                    M = g[0];
                return n.e(g[1]).then(() => n(M))
            }
            l.keys = () => Object.keys(s),
            l.id = 4015,
            N.exports = l
        }
    },
    N => {
        N.O(0, ["vendor"], () => N(N.s = 4913)),
        N.O()
    }
]);
// # sourceMappingURL=main.2631240303439731.js.map
