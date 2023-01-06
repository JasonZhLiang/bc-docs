module.exports = async function myPlugin(context, options) {
    // ...
    return {
        name: 'intercom',
        async loadContent() {
            /* ... */
            //     // cannot use window here, it's not the browser that js can run on it
            //     wondow.intercomSettings = { app_id: 'ede963a7c7b854938c1196bb83dc3a0924951055' };
            //     (function intercom() {
            //         var w = window;
            //         var ic = w.Intercom;
            //         if (typeof ic === "function") {
            //             ic('reattach_activator');
            //             ic('update', intercomSettings);
            //         } else {
            //             var d = document;
            //             var i = function () {
            //                 i.c(arguments)
            //             };
            //             i.q = [];
            //             i.c = function (args) {
            //                 i.q.push(args)
            //             };
            //             w.Intercom = i;

            //             function l() {
            //                 var s = d.createElement('script');
            //                 s.type = 'text/javascript';
            //                 s.async = true;
            //                 s.src = 'https://widget.intercom.io/widget/ede963a7c7b854938c1196bb83dc3a0924951055';
            //                 var x = d.getElementsByTagName('script')[0];
            //                 x.parentNode.insertBefore(s, x);
            //             }
            //             if (w.attachEvent) {
            //                 w.attachEvent('onload', l);
            //             } else {
            //                 w.addEventListener('load', l, false);
            //             }
            //         }
            //     })()
        },
        async contentLoaded({ content, actions }) {
            /* ... */
        },
        /* other lifecycle API */
    };
};