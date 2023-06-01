"use strict";

// Class definition
var KTJSTreeBasic = function() {
    // Private functions
    var exampleBasic = function() {
        $('#kt_docs_jstree_basic').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }
            },
            "types" : {
                "default" : {
                    "icon" : "ki-outline ki-folder"
                },
                "file" : {
                    "icon" : "ki-outline ki-file"
                }
            },
            "plugins": ["types"]
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeBasic.init();
});
