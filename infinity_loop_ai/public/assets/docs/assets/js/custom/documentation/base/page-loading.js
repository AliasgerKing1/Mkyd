"use strict";

// Class definition
var KTBasePageLoadingDemos = function() {
    // Private functions
    var exampleBasic = function(element) {
        // Toggle 
        const button = document.querySelector("#kt_page_loading_basic");

        // Handle toggle click event
        button.addEventListener("click", function() {
			// Populate the page loading element dynamically(optionally it can be appended to body in advance)
			const loadingEl = document.createElement("div");
			document.body.prepend(loadingEl);
			loadingEl.classList.add("page-loader");
			loadingEl.innerHTML = `
				<span class="spinner-border text-primary" role="status">
					<span class="visually-hidden">Loading...</span>
				</span>
			`;	

			// Show page loading
            KTApp.showPageLoading();

            // Hide after 3 seconds
            setTimeout(function() {
                KTApp.hidePageLoading();
				loadingEl.remove();
            }, 3000);
        });
    }

	var exampleMessage = function(element) {
        // Toggle 
        const button = document.querySelector("#kt_page_loading_message");

        // Handle toggle click event
        button.addEventListener("click", function() {
			// Populate the page loading element dynamically(optionally it can be appended to body in advance)
			const loadingEl = document.createElement("div");
			document.body.prepend(loadingEl);
			loadingEl.classList.add("page-loader");
			loadingEl.classList.add("flex-column");			
			loadingEl.innerHTML = `
				<span class="spinner-border text-primary" role="status"></span>
				<span class="text-muted fs-6 fw-semibold mt-5">Loading...</span>
			`;	

			// Show page loading
            KTApp.showPageLoading();

            // Hide after 3 seconds
            setTimeout(function() {
                KTApp.hidePageLoading();
				loadingEl.remove();
            }, 3000);
        });
    }

	var exampleOverlay = function(element) {
        // Toggle 
        const button = document.querySelector("#kt_page_loading_overlay");

        // Handle toggle click event
        button.addEventListener("click", function() {
			// Populate the page loading element dynamically(optionally it can be appended to body in advance)
			const loadingEl = document.createElement("div");
			document.body.prepend(loadingEl);
			loadingEl.classList.add("page-loader");
			loadingEl.classList.add("flex-column");
			loadingEl.classList.add("bg-dark");			
			loadingEl.classList.add("bg-opacity-25");			
			loadingEl.innerHTML = `
				<span class="spinner-border text-primary" role="status"></span>
				<span class="text-gray-800 fs-6 fw-semibold mt-5">Loading...</span>
			`;	

			// Show page loading
            KTApp.showPageLoading();

            // Hide after 3 seconds
            setTimeout(function() {
                KTApp.hidePageLoading();
				loadingEl.remove();
            }, 3000);
        });
    }

    return {
        // Public Functions
        init: function(element) {
            exampleBasic();
			exampleMessage();
			exampleOverlay();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTBasePageLoadingDemos.init();
});