"use strict";

const proxiedGameLinks = document.querySelectorAll(
    '.game-link[href^="/static/uv/service/"]'
);

async function waitForProxyController(registration) {
    const activeWorker = registration.active || registration.waiting || registration.installing;
    if (!activeWorker || activeWorker.state === "activated") return;

    await new Promise((resolve) => {
        activeWorker.addEventListener("statechange", () => {
            if (activeWorker.state === "activated") resolve();
        }, { once: true });
    });
}

proxiedGameLinks.forEach((link) => {
    link.addEventListener("click", async (event) => {
        event.preventDefault();
        link.classList.add("is-launching");

        try {
            const registration = await registerSW();
            await waitForProxyController(registration);
            window.location.assign(link.href);
        } catch (error) {
            link.classList.remove("is-launching");
            console.error("Farius proxy launch failed:", error);
            window.location.assign(link.href);
        }
    });
});