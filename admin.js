/* ============================================
   Farius admin form handler
   Usage:
     <script src="../admin.js"></script>
     <script>setup('poll')</script>
     <script>setup('announcement')</script>
   ============================================ */

(function () {
  'use strict';

  /* --------------------------------------------
     Map of type → API endpoint
     -------------------------------------------- */
  var ENDPOINTS = {
    poll: '/api/polls',
    announcement: '/api/announcements'
  };

  /* --------------------------------------------
     setup(type)
     Wires up the form and handles submit.
     -------------------------------------------- */
  window.setup = function setup(type) {
    var form = document.getElementById('form');
    var msg = document.getElementById('msg');
    var pw = document.getElementById('password');

    if (!form) {
      console.warn('[admin] No #form found on the page');
      return;
    }

    if (!ENDPOINTS[type]) {
      console.warn('[admin] Unknown setup type:', type);
      return;
    }

    var endpoint = ENDPOINTS[type];

    /* ------------------------------------------
       Status helper
       ------------------------------------------ */
    function showMessage(text, isError) {
      if (!msg) return;
      msg.textContent = text || '';
      msg.classList.remove('ok', 'err');
      if (!text) return;
      msg.classList.add(isError ? 'err' : 'ok');
    }

    /* ------------------------------------------
       Build the payload from the form
       ------------------------------------------ */
    function buildPayload(raw) {
      var payload = {};

      // Password is sent as a header, not in the body
      Object.keys(raw).forEach(function (key) {
        if (key === 'password') return;
        payload[key] = raw[key];
      });

      if (type === 'poll') {
        payload.options = String(raw.options || '')
          .split('\n')
          .map(function (line) { return line.trim(); })
          .filter(function (line) { return line.length > 0; });

        var idx = Number(raw.correctIndex || 0);
        if (!Number.isInteger(idx) || idx < 0) idx = 0;
        if (payload.options.length > 0 && idx >= payload.options.length) {
          idx = payload.options.length - 1;
        }
        payload.correctIndex = idx;

        payload.active = true;
      }

      if (type === 'announcement') {
        var delay = Number(raw.delaySeconds || 0);
        if (!Number.isFinite(delay) || delay < 0) delay = 0;
        payload.delaySeconds = Math.floor(delay);
        payload.active = true;
      }

      return payload;
    }

    /* ------------------------------------------
       Validate before sending
       ------------------------------------------ */
    function validate(payload) {
      if (!pw || !pw.value.trim()) {
        return 'Admin password required.';
      }

      if (type === 'poll') {
        if (!payload.question || !payload.question.trim()) {
          return 'Poll question is required.';
        }
        if (payload.options.length < 2) {
          return 'Please add at least 2 answer options.';
        }
        if (payload.correctIndex < 0 || payload.correctIndex >= payload.options.length) {
          return 'The correct answer index is out of range.';
        }
      }

      if (type === 'announcement') {
        if (!payload.message || !payload.message.trim()) {
          return 'Announcement message is required.';
        }
      }

      return null;
    }

    /* ------------------------------------------
       Submit handler
       ------------------------------------------ */
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      showMessage('');

      var submitBtn = form.querySelector('button[type="submit"]') ||
                      form.querySelector('button');

      var raw = Object.fromEntries(new FormData(form));
      var payload = buildPayload(raw);

      var error = validate(payload);
      if (error) {
        showMessage(error, true);
        return;
      }

      // Disable the button and swap label
      var originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span>Saving...';
      }

      try {
        var response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-admin-password': pw.value
          },
          body: JSON.stringify(payload)
        });

        // Parse JSON defensively — server might return HTML on error
        var text = await response.text();
        var data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error(
            'Server returned an unexpected response (status ' + response.status + ').'
          );
        }

        if (!response.ok) {
          throw new Error(data.error || 'Request failed');
        }

        showMessage('Saved successfully.', false);

        // Reset form — but keep the password field populated so admin
        // doesn't have to retype it when making multiple changes.
        var savedPassword = pw.value;
        form.reset();
        if (pw) pw.value = savedPassword;

      } catch (err) {
        console.error('[admin] submit failed:', err);
        showMessage(err.message || 'Something went wrong.', true);

      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
      }
    });
  };
})();