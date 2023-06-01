"use strict";

// Class definition
var KTJSTreeContextual = function() {
    // Private functions
    var exampleContextual = function() {
        $("#kt_docs_jstree_contextual").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "ki-solid ki-calendar text-danger fs-4"
                        }, {
                            "text": "Initially open",
                            "icon" : "ki-solid ki-folder text-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "ki-solid ki-file text-waring"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "ki-solid ki-user text-warning fs-4"
                        }, {
                            "text": "Disabled Node",
                            "icon": "ki-solid ki-check text-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "ki-solid ki-folder text-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "ki-solid ki-file text-waring"},
                                {"text": "Item 2", "icon" : "ki-solid ki-file text-success"},
                                {"text": "Item 3", "icon" : "ki-solid ki-file text-default"},
                                {"text": "Item 4", "icon" : "ki-solid ki-file text-danger"},
                                {"text": "Item 5", "icon" : "ki-solid ki-file text-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "ki-solid ki-folder text-primary"
                },
                "file" : {
                    "icon" : "ki-solid ki-file text-primary"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "state", "types" ]
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleContextual();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeContextual.init();
});
