function checkForm(event) {
    // 1. Stop the page from reloading/freezing
    if (event) event.preventDefault();

    // List of all IDs that need to be checked (in order)
    var requiredFields = [
        "teamname", "firstname1", "email1", "phone1", "college1",
        "firstname2", "email2", "phone2", "college2",
        "firstname3", "email3", "phone3", "college3",
        "ques1"
    ];

    var errorFound = false;
    var errorFieldId = "";

    // 2. Loop through fields to check if they are empty
    for (var i = 0; i < requiredFields.length; i++) {
        var fieldId = requiredFields[i];
        var element = document.getElementById(fieldId);

        if (!element || element.value.trim().length === 0) {
            errorFound = true;
            errorFieldId = fieldId;
            break; // Stop checking after the first error is found
        }
    }

    // 3. Helper function to show the error modal
    function showError(message, focusId) {
        if (focusId) document.getElementById(focusId).focus();

        var msgElement = document.getElementById("modalStatusMsg");
        msgElement.style.display = 'block';
        msgElement.innerText = message;

        try {
            $("#_check").modal("show");
        } catch (e) {
            console.error("Bootstrap modal failed, using fallback:", e);
        }
        // Fallback/Ensure it is visible
        var modal = document.getElementById('_check');
        modal.style.display = 'block';
        modal.classList.add("in"); // Bootstrap 3 'in' class for opacity
        modal.style.opacity = '1';
    }

    // 4. Execute Logic
    if (errorFound) {
        showError("Fill all compulsory fields and try again", errorFieldId);
    }
    else if (!document.getElementById("cfaConsent").checked) {
        // Note: In your original code, you were changing the 'submit' button text here.
        // I corrected it to update the modal message instead.
        showError("Please check the mandatory checkbox to proceed", "cfaConsent");
    }
    else {
        // 5. Success Case
        postToGoogle(); // Ensure this function does not reload the page!

        var msgElement = document.getElementById("modalStatusMsg");
        msgElement.style.display = 'block';
        msgElement.innerHTML = "<center><h1><b>You have successfully registered for ICC 2026.</b></h1></center> <br>Business Club conducts ICC every year in association with Kshitij. Kshitij is the annual techno-management fest of IIT Kharagpur. Kshitij organizes a wide range of events encompassing every genre of technology and management. Numerous events of the fest are cerified by World-renowned organizations like ACM, IEEE, ASME, ASHRAE and IMechE. This year Kshitij will be conducted on 16th, 17th and 18th January 2026.<br> <center><h1><b>For information regarding further rounds, you can register at: <a href='https://ktj.in/' target='_blank'>Kshitij 2026</a></b></h1></center>";

        try {
            $("#_check").modal("show");
        } catch (e) {
            console.error("Bootstrap modal failed, using fallback:", e);
        }
        var modal = document.getElementById('_check');
        modal.style.display = 'block';
        modal.classList.add("in");
        modal.style.opacity = '1';
    }
}

// Explicitly expose to window to avoid scope issues
window.closeModal = function () {
    console.log("closeModal called");
    var modal = document.getElementById('_check');
    if (modal) {
        console.log("Found modal, hiding...");
        modal.style.display = 'none';
        modal.classList.remove("in");
        modal.style.opacity = '0';
        modal.setAttribute('aria-hidden', 'true');
    } else {
        console.error("Modal #_check not found!");
    }

    // Force cleanup of Bootstrap artifacts to prevent freezing
    document.body.classList.remove('modal-open');
    document.body.style.paddingRight = '';

    var backdrops = document.getElementsByClassName('modal-backdrop');
    console.log("Found backdrops:", backdrops.length);
    while (backdrops.length > 0) {
        backdrops[0].parentNode.removeChild(backdrops[0]);
    }

    // Try Bootstrap hide as well
    if (window.jQuery && window.jQuery.fn.modal) {
        try {
            $("#_check").modal("hide");
        } catch (e) {
            console.error("Bootstrap hide failed", e);
        }
    }
};

// Add redundancy: Bind click events when document is ready
if (window.jQuery) {
    $(document).ready(function () {
        $('#_check .close, #_check .btn[data-dismiss="modal"]').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent bubbling issues
            window.closeModal();
        });

        // FIX: Prevent random reloads on form submit or Enter key
        $('#regform').on('submit', function (e) {
            e.preventDefault();
            return false;
        });

        $('#regform input').on('keydown', function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });
    });
}