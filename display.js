/**
 * Created by alexandre on 03/11/2016.
 */

var Display;
if (typeof Display === 'undefined') Display = eval('(function() { try { return Display || {} } catch(e) { return {} } })()');

(function() {

    Display.test = function() {
        return "salut";
    }

    Display.viewportWidth = function() {
        var body = document.body;
        var html = document.documentElement;

        return Math.max( body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth );
    }

    Display.viewportHeight = function() {
        var body = document.body;
        var html = document.documentElement;

        return Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    }

})();