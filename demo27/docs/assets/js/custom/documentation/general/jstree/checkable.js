"use strict";

// Class definition
var KTJSTreeCheckable = function() {
    // Private functions
    var exampleCheckable = function() {
        $('#kt_docs_jstree_checkable').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },
                'data': [{
                        "text": "Same but with checkboxes",
                        "children": [{
                            "text": "initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "custom icon",
                            "icon": "ki-solid ki-timer text-danger"
                        }, {
                            "text": "initially open",
                            "icon" : "ki-solid ki-folder text-default",
                            "state": {
                                "opened": true
                            },
                            "children": ["Another node"]
                        }, {
                            "text": "custom icon",
                            "icon": "ki-solid ki-timer text-waring"
                        }, {
                            "text": "disabled node",
                            "icon": "ki-solid ki-check text-success",
                            "state": {
                                "disabled": true
                            }
                        }]
                    },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "ki-solid ki-folder text-warning"
                },
                "file" : {
                    "icon" : "ki-solid ki-file  text-warning"
                }
            },
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleCheckable();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeCheckable.init();
});
