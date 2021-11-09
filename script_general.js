(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"scrollBarWidth":10,"defaultVRPointer":"laser","start":"this.init()","desktopMipmappingEnabled":false,"horizontalAlign":"left","paddingLeft":0,"mediaActivationMode":"window","scrollBarColor":"#000000","backgroundOpacity":1,"paddingRight":0,"mouseWheelEnabled":true,"toolTipHorizontalAlign":"center","overflow":"hidden","propagateClick":false,"scrollBarOpacity":0.5,"scripts":{"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"clone":TDV.Tour.Script.clone,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"shareSocial":TDV.Tour.Script.shareSocial,"quizFinish":TDV.Tour.Script.quizFinish,"getKey":TDV.Tour.Script.getKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openLink":TDV.Tour.Script.openLink,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"registerKey":TDV.Tour.Script.registerKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"isPanorama":TDV.Tour.Script.isPanorama,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"playAudioList":TDV.Tour.Script.playAudioList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoForward":TDV.Tour.Script.historyGoForward,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"translate":TDV.Tour.Script.translate,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer},"borderRadius":0,"data":{"name":"Player446","defaultLocale":"en","textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"locales":{"en":"locale/en.txt"}},"backgroundPreloadEnabled":true,"width":"100%","downloadEnabled":false,"layout":"absolute","contentOpaque":false,"backgroundColorDirection":"vertical","definitions": [{"id":"mainPlayList","items":[{"media":"this.panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4","camera":"this.panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},"this.PanoramaPlayListItem_11B1C248_07FD_0C34_417A_A342A6D8D3B7","this.PanoramaPlayListItem_11B12248_07FD_0C34_4184_56642E8AB354","this.PanoramaPlayListItem_11B10248_07FD_0C34_4176_B77159C973B4","this.PanoramaPlayListItem_11B14249_07FD_0C34_417B_0E914853803E"],"class":"PlayList"},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_camera","initialSequence":"this.sequence_F0F3BC47_FF8B_343C_41EE_DC1C1CEF5253","class":"PanoramaCamera"},{"class":"Panorama","hfovMax":130,"id":"panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5","adjacentPanoramas":[{"distance":7.47,"yaw":94.4,"select":"this.overlay_F1E0D8C7_FF8D_1C3C_41E8_0FB3D3549DEC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F1E0D8C7_FF8D_1C3C_41E8_0FB3D3549DEC"},"panorama":"this.panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A","class":"AdjacentPanorama"},{"distance":5.29,"yaw":75.05,"select":"this.overlay_F01F7303_FF85_0C34_41D1_608E4196A6FD.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F01F7303_FF85_0C34_41D1_608E4196A6FD"},"panorama":"this.panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F","class":"AdjacentPanorama"}],"pitch":0,"vfov":180,"label":trans('panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5.label'),"frames":[{"thumbnailUrl":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_t.jpg","cube":{"levels":[{"colCount":66,"height":5632,"width":33792,"tags":"ondemand","rowCount":11,"class":"TiledImageResourceLevel","url":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_0/{face}/0/{row}_{column}.jpg"},{"colCount":36,"height":3072,"width":18432,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_0/{face}/1/{row}_{column}.jpg"},{"colCount":18,"height":1536,"width":9216,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_0/{face}/2/{row}_{column}.jpg"},{"colCount":12,"height":1024,"width":6144,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_0/{face}/3/{row}_{column}.jpg"},{"colCount":6,"height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_0/{face}/4/{row}_{column}.jpg"},{"colCount":6,"height":2048,"width":12288,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"data":{"label":"02A Left"},"partial":false,"thumbnailUrl":"media/panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_t.jpg","overlays":["this.overlay_F1E0D8C7_FF8D_1C3C_41E8_0FB3D3549DEC","this.overlay_F01F7303_FF85_0C34_41D1_608E4196A6FD","this.overlay_1344C06B_0785_0CF4_4163_AE325394F836"]},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_camera","initialSequence":"this.sequence_F3342E96_FF8D_345C_41D8_D1D47F8A73AC","class":"PanoramaCamera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_camera","initialSequence":"this.sequence_F2B3B18F_FFBF_0C4C_41E8_6CFFAC2FE7B1","class":"PanoramaCamera"},{"class":"Panorama","hfovMax":130,"id":"panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F","adjacentPanoramas":[{"distance":13.98,"yaw":166.21,"select":"this.overlay_EE635BE6_FF8B_13FD_41D5_CEEA58F8071F.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_EE635BE6_FF8B_13FD_41D5_CEEA58F8071F"},"panorama":"this.panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8","class":"AdjacentPanorama"},{"distance":7.37,"yaw":-1.5,"select":"this.overlay_EE4888A4_FF85_7C7C_41E1_9636455DE081.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_EE4888A4_FF85_7C7C_41E1_9636455DE081"},"panorama":"this.panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5","class":"AdjacentPanorama"}],"pitch":0,"vfov":180,"label":trans('panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F.label'),"frames":[{"thumbnailUrl":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_t.jpg","cube":{"levels":[{"colCount":66,"height":5632,"width":33792,"tags":"ondemand","rowCount":11,"class":"TiledImageResourceLevel","url":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_0/{face}/0/{row}_{column}.jpg"},{"colCount":36,"height":3072,"width":18432,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_0/{face}/1/{row}_{column}.jpg"},{"colCount":18,"height":1536,"width":9216,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_0/{face}/2/{row}_{column}.jpg"},{"colCount":12,"height":1024,"width":6144,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_0/{face}/3/{row}_{column}.jpg"},{"colCount":6,"height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_0/{face}/4/{row}_{column}.jpg"},{"colCount":6,"height":2048,"width":12288,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"data":{"label":"02A2 MSI"},"partial":false,"thumbnailUrl":"media/panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_t.jpg","overlays":["this.overlay_EE635BE6_FF8B_13FD_41D5_CEEA58F8071F","this.overlay_EE4888A4_FF85_7C7C_41E1_9636455DE081"]},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_camera","initialSequence":"this.sequence_F46081DC_FFBD_0FCC_41A0_B889A24D197B","class":"PanoramaCamera"},{"vfov":180,"data":{"label":"02A3 ROG"},"partial":false,"label":trans('panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8.label'),"frames":[{"thumbnailUrl":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_t.jpg","cube":{"levels":[{"colCount":66,"height":5632,"width":33792,"tags":"ondemand","rowCount":11,"class":"TiledImageResourceLevel","url":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_0/{face}/0/{row}_{column}.jpg"},{"colCount":36,"height":3072,"width":18432,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_0/{face}/1/{row}_{column}.jpg"},{"colCount":18,"height":1536,"width":9216,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_0/{face}/2/{row}_{column}.jpg"},{"colCount":12,"height":1024,"width":6144,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_0/{face}/3/{row}_{column}.jpg"},{"colCount":6,"height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_0/{face}/4/{row}_{column}.jpg"},{"colCount":6,"height":2048,"width":12288,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"thumbnailUrl":"media/panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_t.jpg","id":"panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8","hfovMax":130,"pitch":0,"class":"Panorama"},{"class":"Panorama","hfovMax":130,"id":"panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4","adjacentPanoramas":[{"distance":8.99,"yaw":62.84,"select":"this.overlay_F234AAC2_FFBD_3C34_41D2_8F754829A3F1.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F234AAC2_FFBD_3C34_41D2_8F754829A3F1"},"panorama":"this.panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5","class":"AdjacentPanorama"}],"pitch":0,"vfov":180,"label":trans('panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4.label'),"frames":[{"thumbnailUrl":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_t.jpg","cube":{"levels":[{"colCount":66,"height":5632,"width":33792,"tags":"ondemand","rowCount":11,"class":"TiledImageResourceLevel","url":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_0/{face}/0/{row}_{column}.jpg"},{"colCount":36,"height":3072,"width":18432,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_0/{face}/1/{row}_{column}.jpg"},{"colCount":18,"height":1536,"width":9216,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_0/{face}/2/{row}_{column}.jpg"},{"colCount":12,"height":1024,"width":6144,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_0/{face}/3/{row}_{column}.jpg"},{"colCount":6,"height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_0/{face}/4/{row}_{column}.jpg"},{"colCount":6,"height":2048,"width":12288,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"data":{"label":"01 Entrance"},"partial":false,"thumbnailUrl":"media/panorama_F57C3A58_FFBB_1CD4_41D4_2A68999366B4_t.jpg","overlays":["this.overlay_F234AAC2_FFBD_3C34_41D2_8F754829A3F1"]},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"id":"panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_camera","initialSequence":"this.sequence_F02AC3E9_FF85_13F4_41ED_DC87FE6FAA8C","class":"PanoramaCamera"},{"displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","zoomEnabled":true,"surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer"},{"subtitlesTextShadowOpacity":1,"progressHeight":10,"surfaceReticleColor":"#FFFFFF","width":"100%","surfaceReticleOpacity":0.6,"toolTipFontStyle":"normal","subtitlesFontWeight":"normal","paddingLeft":0,"toolTipShadowBlurRadius":3,"data":{"name":"Main Viewer"},"subtitlesBackgroundColor":"#000000","progressBorderRadius":0,"translationTransitionDuration":1000,"toolTipTextShadowOpacity":0,"playbackBarOpacity":1,"subtitlesShadow":false,"paddingRight":0,"subtitlesFontFamily":"Arial","progressLeft":0,"transitionDuration":500,"playbackBarBackgroundOpacity":1,"playbackBarLeft":0,"firstTransitionDuration":0,"propagateClick":false,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleSelectionOpacity":1,"toolTipFontColor":"#606060","playbackBarHeadHeight":15,"displayTooltipInTouchScreens":true,"toolTipPaddingRight":6,"toolTipBorderColor":"#767676","height":"100%","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBorderSize":0,"toolTipPaddingBottom":4,"doubleClickAction":"toggle_fullscreen","subtitlesGap":0,"toolTipBackgroundColor":"#F6F6F6","paddingBottom":0,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"paddingTop":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","minHeight":50,"subtitlesEnabled":true,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"minWidth":100,"vrPointerColor":"#FFFFFF","playbackBarBottom":5,"toolTipFontWeight":"normal","playbackBarHeadBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"toolTipPaddingTop":4,"toolTipShadowVerticalLength":0,"toolTipBorderSize":1,"toolTipShadowColor":"#333333","toolTipOpacity":1,"playbackBarRight":0,"playbackBarBorderSize":0,"class":"ViewerArea","playbackBarHeadWidth":6,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"toolTipShadowSpread":0,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundColorRatios":[0],"progressRight":0,"subtitlesPaddingLeft":5,"progressOpacity":1,"toolTipTextShadowBlurRadius":3,"progressBarBorderColor":"#000000","displayTooltipInSurfaceSelection":true,"toolTipHorizontalAlign":"center","progressBarBackgroundColorRatios":[0],"progressBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"vertical","subtitlesTop":0,"borderRadius":0,"subtitlesTextShadowColor":"#000000","toolTipBorderRadius":3,"toolTipShadowOpacity":1,"subtitlesHorizontalAlign":"center","subtitlesVerticalAlign":"bottom","progressBorderColor":"#000000","toolTipFontFamily":"Arial","subtitlesOpacity":1,"subtitlesTextShadowBlurRadius":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","transitionMode":"blending","playbackBarProgressOpacity":1,"subtitlesPaddingBottom":5,"toolTipFontSize":"1.11vmin","playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"progressBarOpacity":1,"toolTipTextShadowColor":"#000000","progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"id":"MainViewer","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","playbackBarProgressBorderSize":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"subtitlesTextDecoration":"none","subtitlesBottom":50,"progressBorderSize":0,"playbackBarHeadBorderSize":0,"subtitlesPaddingRight":5,"progressBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","toolTipShadowHorizontalLength":0,"shadow":false,"progressBarBorderSize":0,"borderSize":0,"playbackBarHeadShadow":true,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadOpacity":1,"subtitlesPaddingTop":5,"vrPointerSelectionColor":"#FF6600","toolTipDisplayTime":600,"vrPointerSelectionTime":2000},{"class":"Panorama","hfovMax":130,"id":"panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A","adjacentPanoramas":[{"distance":12.6,"yaw":-1.04,"select":"this.overlay_F1D21950_FF85_3CD4_41E8_8F3418AC64FC.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_F1D21950_FF85_3CD4_41E8_8F3418AC64FC"},"panorama":"this.panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8","class":"AdjacentPanorama"},{"distance":5.33,"yaw":-175.74,"select":"this.overlay_EEB0A199_FF87_0C54_41EB_D5A4C50B7B90.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_EEB0A199_FF87_0C54_41EB_D5A4C50B7B90"},"panorama":"this.panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5","class":"AdjacentPanorama"}],"pitch":0,"vfov":180,"label":trans('panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A.label'),"frames":[{"thumbnailUrl":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_t.jpg","cube":{"levels":[{"colCount":66,"height":5632,"width":33792,"tags":"ondemand","rowCount":11,"class":"TiledImageResourceLevel","url":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_0/{face}/0/{row}_{column}.jpg"},{"colCount":36,"height":3072,"width":18432,"tags":"ondemand","rowCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_0/{face}/1/{row}_{column}.jpg"},{"colCount":18,"height":1536,"width":9216,"tags":"ondemand","rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_0/{face}/2/{row}_{column}.jpg"},{"colCount":12,"height":1024,"width":6144,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_0/{face}/3/{row}_{column}.jpg"},{"colCount":6,"height":512,"width":3072,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_0/{face}/4/{row}_{column}.jpg"},{"colCount":6,"height":2048,"width":12288,"tags":"mobilevr2gen","rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_0/{face}/vr2gen/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfov":360,"data":{"label":"02A1 AOC"},"partial":false,"thumbnailUrl":"media/panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_t.jpg","overlays":["this.overlay_F1D21950_FF85_3CD4_41E8_8F3418AC64FC","this.overlay_EEB0A199_FF87_0C54_41EB_D5A4C50B7B90"]},{"media":"this.panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F35FB4EB_FFBF_15F4_41EE_17E6899D5EE5_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","id":"PanoramaPlayListItem_11B1C248_07FD_0C34_417A_A342A6D8D3B7","class":"PanoramaPlayListItem"},{"media":"this.panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F1023FB1_FF8D_1454_41EB_9A5A576D9B7A_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","id":"PanoramaPlayListItem_11B12248_07FD_0C34_4184_56642E8AB354","class":"PanoramaPlayListItem"},{"media":"this.panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F013EB1B_FF8B_1C54_41D6_2DCDE36E491F_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","id":"PanoramaPlayListItem_11B10248_07FD_0C34_4176_B77159C973B4","class":"PanoramaPlayListItem"},{"media":"this.panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_EE1162D8_FF85_0DD4_41C7_10560F53CFD8_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","id":"PanoramaPlayListItem_11B14249_07FD_0C34_417B_0E914853803E","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_F0F3BC47_FF8B_343C_41EE_DC1C1CEF5253","class":"PanoramaCameraSequence"},{"enabledInCardboard":true,"data":{"label":"Arrow 08b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_F1E0D8C7_FF8D_1C3C_41E8_0FB3D3549DEC","items":[{"distance":100,"yaw":94.4,"vfov":4.81,"rotationY":-10.34,"verticalAlign":"middle","horizontalAlign":"center","image":"this.AnimatedImageResource_11B54711_07FD_3454_417F_38C9BA906765","hfov":10.5,"roll":0.09,"data":{"label":"Arrow 08b"},"pitch":-12.82,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_F1EB68CC_FF8D_1DCC_41EA_DAFA25A5BFD7"]},{"enabledInCardboard":true,"data":{"label":"Arrow 08b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_F01F7303_FF85_0C34_41D1_608E4196A6FD","items":[{"distance":100,"yaw":75.05,"vfov":4.81,"rotationY":-10.34,"verticalAlign":"middle","horizontalAlign":"center","image":"this.AnimatedImageResource_11B56712_07FD_3454_4153_EF4FBE8DAAD0","hfov":10.5,"roll":3.59,"data":{"label":"Arrow 08b"},"pitch":-17.79,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_F0109306_FF85_0C3C_41CE_2C2BA90BF924"]},{"vertices":[{"yaw":1.7,"pitch":30.69,"class":"PanoramaPoint"},{"yaw":38.27,"pitch":24.74,"class":"PanoramaPoint"},{"yaw":37.89,"pitch":5.19,"class":"PanoramaPoint"},{"yaw":1.99,"pitch":7.13,"class":"PanoramaPoint"}],"useHandCursor":false,"class":"QuadFramePanoramaOverlay","click":"this.openLink(this.translate('LinkBehaviour_138C0AD0_0787_1DD4_416A_FBB5972DE140.source'), '_self')","height":720,"url":trans('overlay_1344C06B_0785_0CF4_4163_AE325394F836.url'),"contentInteractive":true,"id":"overlay_1344C06B_0785_0CF4_4163_AE325394F836","data":{"label":"Web"},"width":1280},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_F3342E96_FF8D_345C_41D8_D1D47F8A73AC","class":"PanoramaCameraSequence"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_F2B3B18F_FFBF_0C4C_41E8_6CFFAC2FE7B1","class":"PanoramaCameraSequence"},{"enabledInCardboard":true,"data":{"label":"Circle Point 02a","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_EE635BE6_FF8B_13FD_41D5_CEEA58F8071F","items":[{"distance":100,"yaw":166.21,"vfov":8.4,"rotationX":-62.17,"horizontalAlign":"center","image":"this.AnimatedImageResource_11B62713_07FD_3454_417B_0E4A38E9C50A","verticalAlign":"middle","hfov":10.5,"data":{"label":"Circle Point 02a"},"pitch":-6.92,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_EE616C08_FF8B_1434_41E1_D86525EFE101"]},{"enabledInCardboard":true,"data":{"label":"Arrow 08b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_EE4888A4_FF85_7C7C_41E1_9636455DE081","items":[{"distance":100,"yaw":-1.5,"vfov":4.81,"rotationX":-55.74,"horizontalAlign":"center","image":"this.AnimatedImageResource_11B64713_07FD_3454_417B_42213D104B18","verticalAlign":"middle","hfov":10.5,"roll":-1.15,"data":{"label":"Arrow 08b"},"pitch":-12.98,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_EE4628CA_FF85_7C34_41D3_AC726C7E0237"]},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_F46081DC_FFBD_0FCC_41A0_B889A24D197B","class":"PanoramaCameraSequence"},{"enabledInCardboard":true,"data":{"label":"GoTo02aLeft","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_F234AAC2_FFBD_3C34_41D2_8F754829A3F1","items":[{"distance":100,"yaw":62.84,"vfov":4.81,"data":{"label":"GoTo02aLeft"},"verticalAlign":"middle","horizontalAlign":"center","image":"this.AnimatedImageResource_11B50711_07FD_3454_4175_DD4FC00285E0","hfov":10.5,"scaleMode":"fit_inside","pitch":-10.69,"class":"HotspotPanoramaOverlayImage"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_F3A25B64_FFBD_3CFC_41E0_A4E6DDF7C26C"]},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_F02AC3E9_FF85_13F4_41ED_DC87FE6FAA8C","class":"PanoramaCameraSequence"},{"enabledInCardboard":true,"data":{"label":"Arrow 08b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_F1D21950_FF85_3CD4_41E8_8F3418AC64FC","items":[{"distance":100,"yaw":-1.04,"vfov":6.84,"rotationX":-47.63,"horizontalAlign":"center","image":"this.AnimatedImageResource_11B7F712_07FD_3454_417C_C3FFAFF9C179","verticalAlign":"middle","hfov":5.96,"data":{"label":"Arrow 08b"},"pitch":-7.67,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_F1BF9973_FF85_3CD4_41E1_8E7962126878"]},{"enabledInCardboard":true,"data":{"label":"Arrow 08b","hasPanoramaAction":true},"useHandCursor":true,"maps":[],"id":"overlay_EEB0A199_FF87_0C54_41EB_D5A4C50B7B90","items":[{"distance":100,"yaw":-175.74,"vfov":4.81,"rotationX":-37.16,"horizontalAlign":"center","image":"this.AnimatedImageResource_11B6E713_07FD_3454_414A_016CDE4A38F8","verticalAlign":"middle","hfov":10.5,"roll":4.37,"data":{"label":"Arrow 08b"},"pitch":-17.67,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_EEA241B8_FF87_0C54_41DB_897AD9E72CB2"]},{"frameDuration":41,"rowCount":7,"colCount":5,"id":"AnimatedImageResource_11B54711_07FD_3454_417F_38C9BA906765","levels":[{"url":"media/res_F0B0A7E1_FF85_33F4_41E0_074D80EAD4B1_0.png","height":385,"class":"ImageResourceLevel","width":600}],"class":"AnimatedImageResource","frameCount":32},{"id":"HotspotPanoramaOverlayArea_F1EB68CC_FF8D_1DCC_41EA_DAFA25A5BFD7","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B12248_07FD_0C34_4184_56642E8AB354, 88.06153846153845, -0.8307692307692238, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":7,"colCount":5,"id":"AnimatedImageResource_11B56712_07FD_3454_4153_EF4FBE8DAAD0","levels":[{"url":"media/res_F0B0A7E1_FF85_33F4_41E0_074D80EAD4B1_0.png","height":385,"class":"ImageResourceLevel","width":600}],"class":"AnimatedImageResource","frameCount":32},{"id":"HotspotPanoramaOverlayArea_F0109306_FF85_0C3C_41CE_2C2BA90BF924","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B10248_07FD_0C34_4176_B77159C973B4, 89.72307692307693, -0.8307692307692238, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 3)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":6,"colCount":4,"id":"AnimatedImageResource_11B62713_07FD_3454_417B_0E4A38E9C50A","levels":[{"url":"media/res_EE78B5CE_FF87_17CC_41EB_0BC2C2662C9A_0.png","height":1440,"class":"ImageResourceLevel","width":1200}],"class":"AnimatedImageResource","frameCount":24},{"id":"HotspotPanoramaOverlayArea_EE616C08_FF8B_1434_41E1_D86525EFE101","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B14249_07FD_0C34_417B_0E914853803E, 85.29230769230769, -0.27692307692306795, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 4)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":7,"colCount":5,"id":"AnimatedImageResource_11B64713_07FD_3454_417B_42213D104B18","levels":[{"url":"media/res_F0B0A7E1_FF85_33F4_41E0_074D80EAD4B1_0.png","height":385,"class":"ImageResourceLevel","width":600}],"class":"AnimatedImageResource","frameCount":32},{"id":"HotspotPanoramaOverlayArea_EE4628CA_FF85_7C34_41D3_AC726C7E0237","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B1C248_07FD_0C34_417A_A342A6D8D3B7, 26.584615384615404, 0.27692307692307794, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":7,"colCount":5,"id":"AnimatedImageResource_11B50711_07FD_3454_4175_DD4FC00285E0","levels":[{"url":"media/res_F0B0A7E1_FF85_33F4_41E0_074D80EAD4B1_0.png","height":385,"class":"ImageResourceLevel","width":600}],"class":"AnimatedImageResource","frameCount":32},{"id":"HotspotPanoramaOverlayArea_F3A25B64_FFBD_3CFC_41E0_A4E6DDF7C26C","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B1C248_07FD_0C34_417A_A342A6D8D3B7, 86.95384615384617, -0.8307692307692238, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":7,"colCount":5,"id":"AnimatedImageResource_11B7F712_07FD_3454_417C_C3FFAFF9C179","levels":[{"url":"media/res_F0B0A7E1_FF85_33F4_41E0_074D80EAD4B1_0.png","height":385,"class":"ImageResourceLevel","width":600}],"class":"AnimatedImageResource","frameCount":32},{"id":"HotspotPanoramaOverlayArea_F1BF9973_FF85_3CD4_41E1_8E7962126878","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B14249_07FD_0C34_417B_0E914853803E, 87.50769230769231, 0.27692307692307794, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 4)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"frameDuration":41,"rowCount":7,"colCount":5,"id":"AnimatedImageResource_11B6E713_07FD_3454_414A_016CDE4A38F8","levels":[{"url":"media/res_F0B0A7E1_FF85_33F4_41E0_074D80EAD4B1_0.png","height":385,"class":"ImageResourceLevel","width":600}],"class":"AnimatedImageResource","frameCount":32},{"id":"HotspotPanoramaOverlayArea_EEA241B8_FF87_0C54_41DB_897AD9E72CB2","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_11B1C248_07FD_0C34_417A_A342A6D8D3B7, 21.046153846153842, -0.27692307692306795, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"}],"backgroundColorRatios":[0],"children":["this.MainViewer"],"paddingBottom":0,"id":"rootPlayer","scrollBarMargin":2,"paddingTop":0,"scrollBarVisible":"rollOver","gap":10,"minHeight":20,"borderSize":0,"minWidth":20,"backgroundColor":["#FFFFFF"],"vrPolyfillScale":0.75,"shadow":false,"verticalAlign":"top","height":"100%","mobileMipmappingEnabled":false,"class":"Player"};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.12.js.map
//Generated with v2021.2.12, Tue Nov 9 2021