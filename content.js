console.log("🔥 SHIVA EXTENSION LOADED");

let inputBuffer = "";
let lastURL = location.href;


// ===============================
// SHOW SHIVA SCREEN
// ===============================

function showShivaScreen() {

    if (document.getElementById("shiva-hacked-overlay")) {
        return;
    }

    const overlay = document.createElement("div");

    overlay.id = "shiva-hacked-overlay";

    overlay.innerHTML = `
        <div class="scanlines"></div>

        <div class="hacked-container">

            <div class="warning">
                ⚠ SYSTEM OVERRIDE DETECTED ⚠
            </div>

            <div class="main-title">
                HACKED BY SHIVA
            </div>

            <div class="subtitle">
                MENTORPICK SYSTEM OVERRIDE
            </div>

            <div class="terminal">

                <div>Initializing connection...</div>

                <div>Scanning interface...</div>

                <div>Accessing page...</div>

                <div class="success">
                    ACCESS GRANTED ✓
                </div>

            </div>

            <div class="progress-container">

                <div class="progress-bar"></div>

            </div>

            <div class="status">
                TYPE "SHIVA" + ENTER TO RESTORE SYSTEM
            </div>

        </div>
    `;

    document.body.appendChild(overlay);

    console.log("💀 SHIVA SCREEN ACTIVATED");
}


// ===============================
// HIDE SHIVA SCREEN
// ===============================

function hideShivaScreen() {

    const overlay =
        document.getElementById("shiva-hacked-overlay");

    if (!overlay) {
        return;
    }

    overlay.classList.add("shiva-fade-out");

    setTimeout(() => {

        overlay.remove();

        console.log("✅ SYSTEM RESTORED");

    }, 1000);
}


// ===============================
// CHECK CURRENT PAGE
// ===============================

function checkPage() {

    const isProblemset =
        location.pathname.startsWith("/coursev2/my-courses");

    console.log(
        "Current page:",
        location.pathname
    );

    if (isProblemset) {

        showShivaScreen();

    } else {

        const overlay =
            document.getElementById("shiva-hacked-overlay");

        if (overlay) {
            overlay.remove();
        }
    }
}


// ===============================
// INITIAL CHECK
// ===============================

checkPage();


// ===============================
// WATCH URL CHANGES
// ===============================

// Mentorpick may change pages without
// doing a full browser refresh.

setInterval(() => {

    if (location.href !== lastURL) {

        console.log("🔄 URL CHANGED");

        lastURL = location.href;

        inputBuffer = "";

        checkPage();
    }

}, 300);


// ===============================
// KEYBOARD
// ===============================

document.addEventListener("keydown", (event) => {

    // ENTER
    if (event.key === "Enter") {

        if (
            inputBuffer
                .toLowerCase()
                .trim() === "shiva"
        ) {

            hideShivaScreen();

        }

        inputBuffer = "";

        return;
    }


    // NORMAL CHARACTERS
    if (event.key.length === 1) {

        inputBuffer += event.key;

        // Keep only last 10 characters

        if (inputBuffer.length > 10) {

            inputBuffer =
                inputBuffer.slice(-10);

        }

    }

});