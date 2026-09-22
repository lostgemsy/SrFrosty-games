<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" type="image/png" href="png/logo.png">
<title>Chat — Farius</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 100%; height: 100%; overflow: hidden; }

body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #f7f7f7;
  color: #111;
  display: flex;
  flex-direction: column;
  background-image:
    radial-gradient(circle at 25% 15%, rgba(0,0,0,0.015) 0%, transparent 50%),
    radial-gradient(circle at 75% 85%, rgba(0,0,0,0.015) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23e0e0e0' stroke-width='1.2'%3E%3Cpath d='M0 0h120v120H0z'/%3E%3Cpath d='M60 0v120M0 60h120'/%3E%3Ccircle cx='60' cy='60' r='20'/%3E%3C/g%3E%3C/svg%3E");
  background-size: 120px 120px;
}

/* ============================================
   AUTH SCREEN
   ============================================ */
#auth-screen {
  position: fixed; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center;
  padding: 24px;
  background: rgba(247, 247, 247, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  transition: opacity 0.4s ease, visibility 0.4s ease;
  overflow-y: auto;
}
#auth-screen.hidden { opacity: 0; visibility: hidden; pointer-events: none; }

.auth-card {
  width: 100%; max-width: 440px;
  padding: 36px 32px;
  border-radius: 22px;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
  animation: fadeInUp 0.5s ease-out both;
  margin: auto;
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.auth-logo {
  font-size: 2rem; font-weight: 900;
  letter-spacing: -0.05em; text-align: center; margin-bottom: 4px;
}
.auth-tagline {
  text-align: center; color: #888; font-size: 0.75rem;
  font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase;
  margin-bottom: 28px;
}

.auth-tabs {
  display: flex; gap: 6px; padding: 5px;
  background: #f5f5f5; border: 2px solid #ececec;
  border-radius: 14px; margin-bottom: 24px;
}
.auth-tab {
  flex: 1; padding: 11px 14px;
  border: 0; border-radius: 10px; background: transparent;
  color: #777; font-family: inherit; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: all 0.2s ease;
}
.auth-tab:hover { color: #111; background: #ececec; }
.auth-tab.active { background: #111; color: #fff; }

.avatar-picker {
  display: flex; flex-direction: column; align-items: center;
  gap: 12px; margin-bottom: 22px;
}
.avatar-preview {
  width: 96px; height: 96px; border-radius: 50%;
  background: #f0f0f0 center / cover no-repeat;
  border: 3px solid #e8e8e8;
  display: flex; align-items: center; justify-content: center;
  color: #bbb; font-size: 32px; font-weight: 800;
  overflow: hidden; cursor: pointer;
  transition: border-color 0.25s ease, transform 0.2s ease;
}
.avatar-preview:hover { border-color: #111; transform: scale(1.03); }
.avatar-upload-label {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 9px 16px; border-radius: 11px;
  background: #f5f5f5; border: 2px solid #e0e0e0;
  color: #111; font-size: 12px; font-weight: 700;
  cursor: pointer; transition: all 0.2s ease;
}
.avatar-upload-label:hover {
  background: #111; border-color: #111; color: #fff;
}
.avatar-upload-label input { display: none; }

.auth-input {
  width: 100%; height: 54px; padding: 0 18px;
  border-radius: 14px; border: 2px solid #e0e0e0;
  background: #fafafa; color: #111;
  font-family: inherit; font-size: 15px; font-weight: 500;
  outline: none; margin-bottom: 14px;
  transition: border-color 0.25s ease, background 0.25s ease;
}
.auth-input:focus { border-color: #111; background: #fff; }
.auth-input::placeholder { color: #aaa; }

.auth-btn {
  width: 100%; height: 56px;
  border: 2px solid #111; border-radius: 14px;
  background: #111; color: #fff;
  font-family: inherit; font-size: 15px; font-weight: 700;
  cursor: pointer; transition: all 0.25s cubic-bezier(.2,.8,.2,1);
  margin-top: 6px;
}
.auth-btn:hover {
  background: #333; border-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}
.auth-btn:active { transform: translateY(0); }
.auth-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

.auth-error {
  margin-top: 14px; padding: 12px 16px;
  border-radius: 12px;
  background: #fff0f0; border: 2px solid #ffd4d4;
  color: #c0392b; font-size: 13px; font-weight: 600;
  text-align: center; display: none;
}
.auth-error.show { display: block; animation: shake 0.4s ease; }
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-6px); }
  75% { transform: translateX(6px); }
}

/* ============================================
   CHAT LAYOUT
   ============================================ */
#chat-app {
  display: flex; width: 100%; height: 100vh; overflow: hidden;
}

.sidebar {
  width: 280px; flex: none;
  display: flex; flex-direction: column;
  background: #ffffff;
  border-right: 2px solid #ececec;
  overflow: hidden;
}

.sidebar-top {
  padding: 18px 20px;
  border-bottom: 2px solid #f0f0f0;
  display: flex; align-items: center; gap: 12px;
}
.my-avatar {
  width: 42px; height: 42px; border-radius: 50%;
  object-fit: cover; border: 2px solid #e0e0e0; flex: none;
}
.my-info { flex: 1; min-width: 0; }
.my-name {
  font-size: 14px; font-weight: 800; color: #111;
  letter-spacing: -0.01em;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.my-status {
  font-size: 11px; color: #35a66b; font-weight: 700;
  display: flex; align-items: center; gap: 5px;
}
.my-status::before {
  content: ""; width: 7px; height: 7px;
  border-radius: 50%; background: #35a66b;
}
.signout-btn {
  width: 34px; height: 34px;
  border: 2px solid #e0e0e0; border-radius: 10px;
  background: #fafafa; color: #666;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: all 0.2s ease; flex: none;
}
.signout-btn:hover { background: #111; border-color: #111; color: #fff; }
.signout-btn svg {
  width: 16px; height: 16px;
  stroke: currentColor; fill: none; stroke-width: 2;
  stroke-linecap: round; stroke-linejoin: round;
}

.sidebar-section {
  padding: 18px 20px;
  border-bottom: 2px solid #f0f0f0;
}
.sidebar-section:last-child {
  flex: 1; overflow-y: auto; border-bottom: 0;
}
.section-title {
  font-size: 11px; font-weight: 800; color: #888;
  letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 12px;
  display: flex; align-items: center; justify-content: space-between;
}
.section-title .count {
  font-size: 10px; padding: 2px 8px;
  border-radius: 999px; background: #f0f0f0; color: #666;
}

.friend-search {
  display: flex; gap: 8px; margin-bottom: 14px;
}
.friend-search input {
  flex: 1; min-width: 0; height: 40px; padding: 0 14px;
  border-radius: 11px; border: 2px solid #e0e0e0;
  background: #fafafa; color: #111;
  font-family: inherit; font-size: 13px; font-weight: 500;
  outline: none; transition: border-color 0.2s ease;
}
.friend-search input:focus { border-color: #111; background: #fff; }
.friend-search button {
  width: 40px; height: 40px;
  border: 2px solid #111; border-radius: 11px;
  background: #111; color: #fff;
  cursor: pointer; font-family: inherit; font-weight: 700;
  transition: all 0.2s ease; flex: none;
}
.friend-search button:hover { background: #333; border-color: #333; }

.user-list { display: flex; flex-direction: column; gap: 6px; }
.user-item {
  display: flex; align-items: center; gap: 10px;
  padding: 9px 10px; border-radius: 11px;
  transition: background 0.18s ease;
}
.user-item:hover { background: #f5f5f5; }
.user-item img {
  width: 34px; height: 34px; border-radius: 50%;
  object-fit: cover; border: 2px solid #e8e8e8; flex: none;
}
.user-item .user-meta { flex: 1; min-width: 0; }
.user-item .user-name {
  font-size: 13px; font-weight: 700; color: #111;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.user-item .user-sub { font-size: 11px; color: #999; font-weight: 500; }
.user-item .user-action {
  padding: 6px 12px; border-radius: 8px;
  border: 2px solid #e0e0e0; background: #fafafa;
  color: #111; font-family: inherit; font-size: 11px; font-weight: 700;
  cursor: pointer; transition: all 0.18s ease; flex: none;
}
.user-item .user-action:hover {
  background: #111; border-color: #111; color: #fff;
}
.user-item .user-action.accept {
  background: #111; border-color: #111; color: #fff;
}
.user-item .user-action.accept:hover {
  background: #35a66b; border-color: #35a66b;
}
.user-item .user-action.decline:hover {
  background: #e74c3c; border-color: #e74c3c;
}

.empty-state {
  padding: 14px 10px; text-align: center;
  color: #bbb; font-size: 12px; font-weight: 600;
}

/* ============================================
   CHAT MAIN
   ============================================ */
.chat-main {
  flex: 1; display: flex; flex-direction: column;
  overflow: hidden; background: #fafafa; min-width: 0;
}
.chat-header {
  padding: 16px 24px;
  background: #ffffff; border-bottom: 2px solid #ececec;
  display: flex; align-items: center; justify-content: space-between;
  flex: none;
}
.chat-header h1 {
  font-size: 1.05rem; font-weight: 800; letter-spacing: -0.02em;
  display: flex; align-items: center; gap: 10px;
}
.chat-header h1 .room-badge {
  padding: 3px 10px; border-radius: 999px;
  background: #111; color: #fff;
  font-size: 10px; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase;
}
.chat-header .online-count {
  font-size: 12px; color: #888; font-weight: 700;
  display: flex; align-items: center; gap: 6px;
}
.chat-header .online-count::before {
  content: ""; width: 8px; height: 8px;
  border-radius: 50%; background: #35a66b;
  box-shadow: 0 0 8px rgba(53, 166, 107, 0.5);
}

/* ============================================
   PADLET-STYLE MESSAGE FEED
   ============================================ */
.messages {
  flex: 1; overflow-y: auto; padding: 20px 24px;
  display: flex; flex-direction: column; gap: 12px;
}
.messages::-webkit-scrollbar { width: 8px; }
.messages::-webkit-scrollbar-track { background: transparent; }
.messages::-webkit-scrollbar-thumb {
  background: #d8d8d8; border-radius: 10px;
}
.messages::-webkit-scrollbar-thumb:hover { background: #b8b8b8; }

/* Full-width stacked card */
.message {
  width: 100%;
  background: #ffffff;
  border: 2px solid #ececec;
  border-radius: 14px;
  padding: 14px 18px;
  display: flex;
  gap: 14px;
  position: relative;
  animation: msgIn 0.3s ease-out both;
  transition: border-color 0.2s ease;
}
.message:hover { border-color: #d0d0d0; }
.message.own { border-color: #111; }

@keyframes msgIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.message .avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e8e8e8;
  flex: none;
}

.message-body {
  flex: 1;
  min-width: 0;
}

.message-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.message-name {
  font-size: 13.5px;
  font-weight: 800;
  color: #111;
  letter-spacing: -0.01em;
}

.message-name.own-name {
  color: #111;
}

.message-badge-own {
  font-size: 9px;
  font-weight: 800;
  padding: 2px 7px;
  border-radius: 5px;
  background: #111;
  color: #fff;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.message-friend-badge {
  padding: 2px 7px;
  border-radius: 6px;
  background: #e8f5ee;
  color: #27764c;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.message-time {
  font-size: 11px;
  color: #aaa;
  font-weight: 600;
  margin-left: auto;
}

.message-text {
  font-size: 14.5px;
  color: #333;
  line-height: 1.55;
  word-break: break-word;
  margin-top: 2px;
}

/* Reply quote inside card */
.reply-quote {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin-bottom: 10px;
  border-left: 3px solid #bbb;
  background: #f7f7f7;
  border-radius: 8px;
  font-size: 12.5px;
  color: #666;
  max-width: 100%;
  overflow: hidden;
}
.reply-quote .rq-name {
  font-weight: 800;
  color: #111;
  flex: none;
}
.reply-quote .rq-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
}

/* Sticker inside card */
.sticker-img,
.sticker-video {
  max-width: 220px;
  max-height: 220px;
  border-radius: 10px;
  display: block;
  margin-top: 8px;
  background: #f0f0f0;
  object-fit: contain;
}

/* Reply button (only shows on hover) */
.reply-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  opacity: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e0e0e0;
  border-radius: 9px;
  background: #fff;
  color: #666;
  cursor: pointer;
  transition: all 0.18s ease;
  z-index: 2;
}
.message:hover .reply-btn { opacity: 1; }
.reply-btn:hover {
  background: #111;
  border-color: #111;
  color: #fff;
}
.reply-btn svg {
  width: 15px; height: 15px;
  stroke: currentColor; fill: none; stroke-width: 2.2;
  stroke-linecap: round; stroke-linejoin: round;
}

/* System messages stay centered but subtle */
.system {
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #999;
  font-weight: 600;
  padding: 6px 0;
}

/* ============================================
   REPLY BAR (above composer)
   ============================================ */
.reply-bar {
  display: none;
  align-items: center;
  gap: 10px;
  padding: 10px 24px;
  background: #f5f5f5;
  border-top: 2px solid #e8e8e8;
  font-size: 12px;
  color: #666;
}
.reply-bar.active { display: flex; }
.reply-bar .rb-content {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.reply-bar .rb-name {
  font-weight: 800;
  color: #111;
  margin-bottom: 2px;
}
.reply-bar .rb-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.reply-bar .rb-cancel {
  width: 28px;
  height: 28px;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: #fff;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
}
.reply-bar .rb-cancel:hover {
  background: #111;
  border-color: #111;
  color: #fff;
}

/* ============================================
   COMPOSER
   ============================================ */
.composer {
  display: flex; gap: 10px;
  padding: 16px 24px;
  background: #ffffff; border-top: 2px solid #ececec;
  flex: none;
}
.composer input {
  flex: 1; min-width: 0; height: 52px; padding: 0 20px;
  border-radius: 14px; border: 2px solid #e0e0e0;
  background: #fafafa; color: #111;
  font-family: inherit; font-size: 15px; font-weight: 500;
  outline: none;
  transition: border-color 0.25s ease, background 0.25s ease;
}
.composer input:focus { border-color: #111; background: #fff; }
.composer button[type="submit"] {
  padding: 0 28px; height: 52px;
  border: 2px solid #111; border-radius: 14px;
  background: #111; color: #fff;
  font-family: inherit; font-size: 14px; font-weight: 700;
  cursor: pointer; transition: all 0.2s ease; flex: none;
}
.composer button[type="submit"]:hover {
  background: #333; border-color: #333;
  transform: translateY(-2px);
}
.composer button[type="submit"]:active { transform: translateY(0); }

/* Sticker button */
.sticker-btn {
  width: 52px;
  height: 52px;
  border: 2px solid #e0e0e0;
  border-radius: 14px;
  background: #fafafa;
  color: #111;
  cursor: pointer;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.sticker-btn:hover {
  background: #111;
  border-color: #111;
  color: #fff;
}
.sticker-btn svg {
  width: 22px; height: 22px;
  stroke: currentColor; fill: none; stroke-width: 2.2;
  stroke-linecap: round; stroke-linejoin: round;
}

/* ============================================
   STICKER PICKER
   ============================================ */
.sticker-panel {
  position: fixed;
  bottom: 90px;
  right: 24px;
  z-index: 300;
  width: min(360px, calc(100vw - 48px));
  max-height: 480px;
  padding: 16px;
  border-radius: 18px;
  background: #ffffff;
  border: 2px solid #e8e8e8;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  display: none;
  flex-direction: column;
  gap: 12px;
  animation: fadeInUp 0.25s ease;
}
.sticker-panel.open { display: flex; }

.sticker-tabs {
  display: flex;
  gap: 6px;
  padding: 4px;
  background: #f5f5f5;
  border: 2px solid #ececec;
  border-radius: 12px;
}
.sticker-tab {
  flex: 1;
  padding: 8px 12px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #666;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}
.sticker-tab:hover { color: #111; background: #ececec; }
.sticker-tab.active { background: #111; color: #fff; }

.sticker-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  max-height: 300px;
  overflow-y: auto;
  padding: 4px;
}
.sticker-cell {
  aspect-ratio: 1;
  border-radius: 12px;
  border: 2px solid #ececec;
  background: #fafafa;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  position: relative;
}
.sticker-cell:hover {
  border-color: #111;
  transform: scale(1.04);
}
.sticker-cell img,
.sticker-cell video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.sticker-cell .del {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 0;
  cursor: pointer;
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sticker-cell .del:hover { background: #c0392b; }

.upload-btn {
  width: 100%;
  height: 46px;
  border: 2px dashed #ccc;
  border-radius: 12px;
  background: #fafafa;
  color: #111;
  font-family: inherit;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upload-btn:hover {
  background: #111;
  border-color: #111;
  color: #fff;
  border-style: solid;
}
.upload-btn input { display: none; }

/* ============================================
   MOBILE
   ============================================ */
.menu-btn {
  display: none; width: 40px; height: 40px;
  border: 2px solid #e0e0e0; border-radius: 11px;
  background: #fafafa; color: #111;
  cursor: pointer; align-items: center; justify-content: center;
}
.menu-btn svg {
  width: 18px; height: 18px;
  stroke: currentColor; fill: none; stroke-width: 2.2;
  stroke-linecap: round; stroke-linejoin: round;
}

.toast {
  position: fixed; left: 50%; bottom: 28px; z-index: 1000;
  padding: 12px 22px; border-radius: 14px;
  background: #111; color: #fff;
  font-size: 13px; font-weight: 700;
  opacity: 0; pointer-events: none;
  transform: translate(-50%, 20px);
  transition: opacity 0.25s ease, transform 0.3s cubic-bezier(.2,.8,.2,1);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
}
.toast.show { opacity: 1; transform: translate(-50%, 0); }

.sidebar-overlay {
  display: none; position: fixed; inset: 0; z-index: 55;
  background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px);
}
.sidebar-overlay.show { display: block; }

@media (max-width: 800px) {
  .sidebar {
    position: fixed; left: 0; top: 0; bottom: 0;
    z-index: 60; transform: translateX(-100%);
    transition: transform 0.3s cubic-bezier(.2,.8,.2,1);
    box-shadow: 20px 0 40px rgba(0, 0, 0, 0.15);
  }
  .sidebar.open { transform: translateX(0); }
  .menu-btn { display: flex; }
  .messages { padding: 14px; }
  .message { padding: 12px 14px; gap: 10px; }
  .message .avatar { width: 36px; height: 36px; }
  .composer { padding: 12px 16px; gap: 8px; }
  .composer input { padding: 0 16px; }
  .composer button[type="submit"] { padding: 0 20px; }
  .sticker-btn { width: 48px; height: 48px; }
  .chat-header { padding: 14px 16px; }
  .sticker-panel { bottom: 82px; right: 12px; }
  .reply-bar { padding: 10px 16px; }
}
</style>
</head>
<body>

<div id="auth-screen">
  <div class="auth-card">
    <div class="auth-logo">Farius</div>
    <div class="auth-tagline">Chat · Made by Hohogames</div>

    <div class="auth-tabs">
      <button class="auth-tab active" data-tab="signin">Sign in</button>
      <button class="auth-tab" data-tab="signup">Sign up</button>
    </div>

    <form id="signin-form">
      <input class="auth-input" id="signinUsername" type="text" placeholder="Username" autocomplete="username" required>
      <input class="auth-input" id="signinPassword" type="password" placeholder="Password" autocomplete="current-password" required>
      <button class="auth-btn" type="submit">Sign in</button>
      <div class="auth-error" id="signinError"></div>
    </form>

    <form id="signup-form" hidden>
      <div class="avatar-picker">
        <label class="avatar-preview" id="avatarPreview" for="avatarInput">
          <span style="font-size:24px;">+</span>
        </label>
        <label class="avatar-upload-label">
          Choose profile picture
          <input type="file" id="avatarInput" accept="image/*">
        </label>
      </div>
      <input class="auth-input" id="signupUsername" type="text" placeholder="Username" autocomplete="username" maxlength="20" required>
      <input class="auth-input" id="signupPassword" type="password" placeholder="Password (min 6 chars)" autocomplete="new-password" minlength="6" required>
      <input class="auth-input" id="signupConfirm" type="password" placeholder="Confirm password" autocomplete="new-password" required>
      <button class="auth-btn" type="submit">Create account</button>
      <div class="auth-error" id="signupError"></div>
    </form>
  </div>
</div>

<div id="chat-app" hidden>
  <div class="sidebar-overlay" id="sidebarOverlay"></div>

  <aside class="sidebar" id="sidebar">
    <div class="sidebar-top">
      <img class="my-avatar" id="myAvatar" src="png/logo.png" alt="">
      <div class="my-info">
        <div class="my-name" id="myName">—</div>
        <div class="my-status">Online</div>
      </div>
      <button class="signout-btn" id="signoutBtn" title="Sign out">
        <svg viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
          <path d="M16 17l5-5-5-5M21 12H9"/>
        </svg>
      </button>
    </div>

    <div class="sidebar-section">
      <div class="section-title">Find friends</div>
      <form class="friend-search" id="friendSearchForm">
        <input id="friendSearchInput" type="text" placeholder="Search username..." autocomplete="off">
        <button type="submit" title="Search">
          <svg viewBox="0 0 24 24" style="width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;">
            <circle cx="11" cy="11" r="7"/>
            <path d="m20 20-3.5-3.5"/>
          </svg>
        </button>
      </form>
      <div class="user-list" id="searchResults"></div>
    </div>

    <div class="sidebar-section" id="requestsSection" hidden>
      <div class="section-title">
        Friend requests
        <span class="count" id="requestsCount">0</span>
      </div>
      <div class="user-list" id="requestsList"></div>
    </div>

    <div class="sidebar-section">
      <div class="section-title">
        Friends
        <span class="count" id="friendsCount">0</span>
      </div>
      <div class="user-list" id="friendsList"></div>
    </div>
  </aside>

  <main class="chat-main">
    <header class="chat-header">
      <div style="display:flex;align-items:center;gap:12px;">
        <button class="menu-btn" id="menuBtn" title="Menu">
          <svg viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18"/>
          </svg>
        </button>
        <h1>
          Global Chat
          <span class="room-badge">#global</span>
        </h1>
      </div>
      <div class="online-count" id="onlineCount">0 online</div>
    </header>

    <div class="messages" id="messages"></div>

    <div class="reply-bar" id="replyBar">
      <div class="rb-content">
        <div class="rb-name" id="replyName">Replying to</div>
        <div class="rb-text" id="replyText">...</div>
      </div>
      <button type="button" class="rb-cancel" id="replyCancel">✕</button>
    </div>

    <form class="composer" id="composer">
      <button type="button" class="sticker-btn" id="stickerBtn" title="Stickers">
        <svg viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1"/>
          <circle cx="15" cy="10" r="1"/>
        </svg>
      </button>
      <input id="messageInput" type="text" placeholder="Type a message..." autocomplete="off" maxlength="500">
      <button type="submit">Send</button>
    </form>
  </main>
</div>

<div class="sticker-panel" id="stickerPanel">
  <div class="sticker-tabs">
    <button class="sticker-tab active" data-tab="builtin">Built-in</button>
    <button class="sticker-tab" data-tab="custom">My stickers</button>
  </div>
  <div class="sticker-grid" id="stickerGrid"></div>
  <label class="upload-btn">
    + Upload sticker (GIF, MP4, WEBM · max 10MB)
    <input type="file" id="stickerUploadInput" accept="image/gif,image/png,image/jpeg,image/webp,video/mp4,video/webm">
  </label>
</div>

<div class="toast" id="toast"></div>

<script src="/socket.io/socket.io.js"></script>

<script>
(function () {
  "use strict";

  const API = "";

  const authScreen = document.getElementById("auth-screen");
  const chatApp = document.getElementById("chat-app");
  const authTabs = document.querySelectorAll(".auth-tab");
  const signinForm = document.getElementById("signin-form");
  const signupForm = document.getElementById("signup-form");
  const signinError = document.getElementById("signinError");
  const signupError = document.getElementById("signupError");
  const avatarInput = document.getElementById("avatarInput");
  const avatarPreview = document.getElementById("avatarPreview");

  const myAvatar = document.getElementById("myAvatar");
  const myName = document.getElementById("myName");
  const signoutBtn = document.getElementById("signoutBtn");

  const messages = document.getElementById("messages");
  const composer = document.getElementById("composer");
  const messageInput = document.getElementById("messageInput");
  const onlineCount = document.getElementById("onlineCount");

  const friendSearchForm = document.getElementById("friendSearchForm");
  const friendSearchInput = document.getElementById("friendSearchInput");
  const searchResults = document.getElementById("searchResults");
  const requestsSection = document.getElementById("requestsSection");
  const requestsList = document.getElementById("requestsList");
  const requestsCount = document.getElementById("requestsCount");
  const friendsList = document.getElementById("friendsList");
  const friendsCount = document.getElementById("friendsCount");

  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const menuBtn = document.getElementById("menuBtn");
  const toast = document.getElementById("toast");

  const replyBar = document.getElementById("replyBar");
  const replyName = document.getElementById("replyName");
  const replyText = document.getElementById("replyText");
  const replyCancel = document.getElementById("replyCancel");

  const stickerBtn = document.getElementById("stickerBtn");
  const stickerPanel = document.getElementById("stickerPanel");
  const stickerGrid = document.getElementById("stickerGrid");
  const stickerUploadInput = document.getElementById("stickerUploadInput");

  let socket = null;
  let me = null;
  let friends = [];
  let pendingAvatar = "";
  let replyTarget = null;
  let allStickers = { builtin: [], custom: [] };
  let currentStickerTab = "builtin";

  /* ---------- UTIL ---------- */
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2000);
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[c]);
  }

  function showError(el, msg) {
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 4000);
  }

  function hideError(el) { el.classList.remove("show"); }

  async function safeJSON(url, options) {
    const res = await fetch(url, options);
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); }
    catch (e) {
      console.error("Non-JSON response from", url, ":", text.slice(0, 200));
      throw new Error("Server returned HTML instead of JSON.");
    }
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  /* ---------- AUTH TABS ---------- */
  authTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      authTabs.forEach(t => t.classList.toggle("active", t === tab));
      const isSignin = tab.dataset.tab === "signin";
      signinForm.hidden = !isSignin;
      signupForm.hidden = isSignin;
      hideError(signinError);
      hideError(signupError);
    });
  });

  /* ---------- AVATAR PICKER ---------- */
  avatarPreview.addEventListener("click", () => avatarInput.click());

  avatarInput.addEventListener("change", function () {
    const file = this.files && this.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showError(signupError, "Image must be under 5MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      pendingAvatar = e.target.result;
      avatarPreview.style.backgroundImage = `url("${pendingAvatar}")`;
      avatarPreview.innerHTML = "";
    };
    reader.readAsDataURL(file);
  });

  /* ---------- SIGN UP ---------- */
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError(signupError);

    const username = document.getElementById("signupUsername").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;

    if (!username) return showError(signupError, "Username required");
    if (username.length < 3) return showError(signupError, "Username must be 3+ characters");
    if (!/^[a-zA-Z0-9_]+$/.test(username)) return showError(signupError, "Letters, numbers, underscores only");
    if (password.length < 6) return showError(signupError, "Password must be 6+ characters");
    if (password !== confirm) return showError(signupError, "Passwords don't match");

    const btn = signupForm.querySelector(".auth-btn");
    btn.disabled = true;
    btn.textContent = "Creating account...";

    try {
      const data = await safeJSON(API + "/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, avatar: pendingAvatar })
      });
      localStorage.setItem("farius_user", JSON.stringify(data.user));
      me = data.user;
      enterChat();
    } catch (err) {
      showError(signupError, err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = "Create account";
    }
  });

  /* ---------- SIGN IN ---------- */
  signinForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    hideError(signinError);

    const username = document.getElementById("signinUsername").value.trim();
    const password = document.getElementById("signinPassword").value;

    if (!username || !password) return showError(signinError, "Fill in all fields");

    const btn = signinForm.querySelector(".auth-btn");
    btn.disabled = true;
    btn.textContent = "Signing in...";

    try {
      const data = await safeJSON(API + "/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      localStorage.setItem("farius_user", JSON.stringify(data.user));
      me = data.user;
      enterChat();
    } catch (err) {
      showError(signinError, err.message);
    } finally {
      btn.disabled = false;
      btn.textContent = "Sign in";
    }
  });

  /* ---------- ENTER CHAT ---------- */
  function enterChat() {
    myAvatar.src = me.avatar || "png/logo.png";
    myName.textContent = me.username;

    authScreen.classList.add("hidden");
    chatApp.hidden = false;
    messageInput.focus();

    connectSocket();
    loadStickers();
  }

  function connectSocket() {
    if (socket) socket.disconnect();

    socket = io();

    socket.on("connect", () => {
      socket.emit("join", { username: me.username, avatar: me.avatar });
      showToast("Connected");
    });

    socket.on("message", renderMessage);
    socket.on("chat-history", renderHistory);
    socket.on("system", renderSystem);
    socket.on("user-list", updateOnlineCount);

    socket.on("friends-update", (list) => {
      friends = list || [];
      renderFriends();
    });

    socket.on("friend-request", () => {
      showToast("New friend request");
      loadFriendRequests();
    });

    socket.on("disconnect", () => showToast("Disconnected"));
  }

  /* ---------- RENDER (PADLET STYLE) ---------- */
  function renderMessage(data, skipScroll) {
    const isOwn = data.username === me.username;
    const isFriend = friends.some(f => f.username === data.username);

    const wrap = document.createElement("div");
    wrap.className = "message" + (isOwn ? " own" : "");
    wrap.dataset.id = data.id || "";

    const time = new Date(data.time).toLocaleTimeString([], {
      hour: "2-digit", minute: "2-digit"
    });

    const ownBadge = isOwn ? '<span class="message-badge-own">You</span>' : "";
    const friendBadge = (!isOwn && isFriend)
      ? '<span class="message-friend-badge">Friend</span>'
      : "";

    let replyHtml = "";
    if (data.replyTo) {
      const rq = data.replyTo;
      const quoted = (rq.stickerUrl && !rq.text)
        ? "📎 Sticker"
        : escapeHtml(rq.text || "");
      replyHtml = `
        <div class="reply-quote">
          <span class="rq-name">${escapeHtml(rq.username)}</span>
          <span class="rq-text">${quoted}</span>
        </div>
      `;
    }

    let bodyHtml = "";
    if (data.text) {
      bodyHtml += `<div class="message-text">${escapeHtml(data.text)}</div>`;
    }
    if (data.stickerUrl) {
      const url = escapeHtml(data.stickerUrl);
      const isVideo = /\.(mp4|webm|mov)$/i.test(data.stickerUrl);
      if (isVideo) {
        bodyHtml += `<video class="sticker-video" src="${url}" autoplay loop muted playsinline></video>`;
      } else {
        bodyHtml += `<img class="sticker-img" src="${url}" alt="">`;
      }
    }

    wrap.innerHTML = `
      <img class="avatar" src="${escapeHtml(data.avatar || 'png/logo.png')}" alt="">
      <div class="message-body">
        <div class="message-head">
          <span class="message-name">${escapeHtml(data.username)}</span>
          ${ownBadge}
          ${friendBadge}
          <span class="message-time">${time}</span>
        </div>
        ${replyHtml}
        ${bodyHtml}
      </div>
      <button class="reply-btn" title="Reply">
        <svg viewBox="0 0 24 24">
          <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4l-5 5z"/>
        </svg>
      </button>
    `;

    wrap.querySelector(".reply-btn").addEventListener("click", () => {
      setReplyTarget({
        id: data.id,
        username: data.username,
        text: data.text || "",
        stickerUrl: data.stickerUrl || null
      });
    });

    messages.appendChild(wrap);

    if (!skipScroll) {
      messages.scrollTop = messages.scrollHeight;
    }
  }

  function renderHistory(history) {
    messages.innerHTML = "";
    if (!history || !history.length) return;
    history.forEach(msg => renderMessage(msg, true));
    messages.scrollTop = messages.scrollHeight;
  }

  function renderSystem(data) {
    const el = document.createElement("div");
    el.className = "system";
    el.textContent = data.text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function updateOnlineCount(users) {
    onlineCount.textContent = users.length + " online";
  }

  /* ---------- REPLY ---------- */
  function setReplyTarget(target) {
    replyTarget = target;
    replyBar.classList.add("active");
    replyName.textContent = "Replying to " + target.username;
    replyText.textContent = target.text || "📎 Sticker";
    messageInput.focus();
  }

  function clearReplyTarget() {
    replyTarget = null;
    replyBar.classList.remove("active");
  }

  replyCancel.addEventListener("click", clearReplyTarget);

  /* ---------- SEND MESSAGE ---------- */
  composer.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = messageInput.value.trim();
    if (!text || !socket) return;

    socket.emit("message", {
      text: text,
      replyTo: replyTarget
    });

    messageInput.value = "";
    clearReplyTarget();
    messageInput.focus();
  });

  /* ---------- STICKERS ---------- */
  async function loadStickers() {
    try {
      const res = await fetch("/api/stickers");
      allStickers = await res.json();
      renderStickerGrid();
    } catch (err) {
      console.warn("Couldn't load stickers:", err);
    }
  }

  function renderStickerGrid() {
    const list = currentStickerTab === "builtin" ? allStickers.builtin : allStickers.custom;
    stickerGrid.innerHTML = "";

    if (!list || !list.length) {
      stickerGrid.innerHTML = '<div class="empty-state" style="grid-column:1/-1;">No stickers yet</div>';
      return;
    }

    list.forEach(s => {
      const cell = document.createElement("div");
      cell.className = "sticker-cell";
      const isVideo = /\.(mp4|webm|mov)$/i.test(s.url);
      cell.innerHTML = isVideo
        ? `<video src="${escapeHtml(s.url)}" autoplay loop muted playsinline></video>`
        : `<img src="${escapeHtml(s.url)}" alt="" onerror="this.style.opacity=0.15;">`;

      if (s.custom) {
        const del = document.createElement("button");
        del.className = "del";
        del.textContent = "✕";
        del.title = "Delete";
        del.onclick = async (e) => {
          e.stopPropagation();
          if (!confirm("Delete this sticker?")) return;
          await fetch("/api/stickers/" + s.id, { method: "DELETE" });
          await loadStickers();
        };
        cell.appendChild(del);
      }

      cell.onclick = (e) => {
        if (e.target.classList.contains("del")) return;
        sendSticker(s.url);
        stickerPanel.classList.remove("open");
      };

      stickerGrid.appendChild(cell);
    });
  }

  document.querySelectorAll(".sticker-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".sticker-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentStickerTab = tab.getAttribute("data-tab");
      renderStickerGrid();
    });
  });

  stickerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    stickerPanel.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!stickerPanel.classList.contains("open")) return;
    if (stickerPanel.contains(e.target)) return;
    if (e.target === stickerBtn || stickerBtn.contains(e.target)) return;
    stickerPanel.classList.remove("open");
  });

  stickerUploadInput.addEventListener("change", async function () {
    const file = this.files && this.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      showToast("Sticker must be under 10MB");
      return;
    }

    if (file.type.startsWith("video/")) {
      const dur = await getVideoDuration(file).catch(() => null);
      if (dur && dur > 10.5) {
        showToast("Video stickers must be 10 seconds or less");
        return;
      }
    }

    const fd = new FormData();
    fd.append("sticker", file);

    try {
      const res = await fetch("/api/stickers/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      showToast("Sticker uploaded!");
      currentStickerTab = "custom";
      document.querySelectorAll(".sticker-tab").forEach(t => {
        t.classList.toggle("active", t.getAttribute("data-tab") === "custom");
      });
      await loadStickers();
    } catch (err) {
      showToast(err.message);
    } finally {
      stickerUploadInput.value = "";
    }
  });

  function getVideoDuration(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const v = document.createElement("video");
      v.preload = "metadata";
      v.onloadedmetadata = () => {
        URL.revokeObjectURL(url);
        resolve(v.duration);
      };
      v.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Couldn't read video"));
      };
      v.src = url;
    });
  }

  function sendSticker(url) {
    if (!socket) return;
    socket.emit("message", {
      text: "",
      stickerUrl: url,
      replyTo: replyTarget
    });
    clearReplyTarget();
  }

  /* ---------- FRIENDS SEARCH ---------- */
  friendSearchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const q = friendSearchInput.value.trim();
    if (!q) return;

    searchResults.innerHTML = '<div class="empty-state">Searching...</div>';

    try {
      const data = await safeJSON(API + "/api/users/search?q=" + encodeURIComponent(q));
      renderSearchResults(data.results || []);
    } catch (err) {
      searchResults.innerHTML = '<div class="empty-state">' + err.message + '</div>';
    }
  });

  function renderSearchResults(results) {
    searchResults.innerHTML = "";

    const filtered = results.filter(r =>
      r.username !== me.username &&
      !friends.some(f => f.username === r.username)
    );

    if (!filtered.length) {
      searchResults.innerHTML = '<div class="empty-state">No users found</div>';
      return;
    }

    filtered.forEach(u => {
      const el = document.createElement("div");
      el.className = "user-item";
      el.innerHTML = `
        <img src="${escapeHtml(u.avatar || 'png/logo.png')}" alt="">
        <div class="user-meta">
          <div class="user-name">${escapeHtml(u.username)}</div>
          <div class="user-sub">${u.friendStatus || 'Not friends'}</div>
        </div>
        <button class="user-action">Add</button>
      `;
      el.querySelector(".user-action").addEventListener("click", () => sendFriendRequest(u.username));
      searchResults.appendChild(el);
    });
  }

  async function sendFriendRequest(username) {
    try {
      await safeJSON(API + "/api/friends/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from: me.username, to: username })
      });
      showToast("Request sent to " + username);
      friendSearchForm.dispatchEvent(new Event("submit"));
    } catch (err) {
      showToast(err.message);
    }
  }

  /* ---------- FRIEND REQUESTS ---------- */
  async function loadFriendRequests() {
    try {
      const data = await safeJSON(API + "/api/friends/requests?user=" + encodeURIComponent(me.username));
      renderFriendRequests(data.requests || []);
    } catch (err) {}
  }

  function renderFriendRequests(requests) {
    requestsList.innerHTML = "";
    requestsCount.textContent = requests.length;

    if (!requests.length) {
      requestsSection.hidden = true;
      return;
    }

    requestsSection.hidden = false;

    requests.forEach(r => {
      const el = document.createElement("div");
      el.className = "user-item";
      el.innerHTML = `
        <img src="${escapeHtml(r.avatar || 'png/logo.png')}" alt="">
        <div class="user-meta">
          <div class="user-name">${escapeHtml(r.from)}</div>
          <div class="user-sub">wants to be friends</div>
        </div>
        <button class="user-action accept">✓</button>
        <button class="user-action decline">✕</button>
      `;

      el.querySelector(".accept").addEventListener("click", () => respondRequest(r.from, true));
      el.querySelector(".decline").addEventListener("click", () => respondRequest(r.from, false));

      requestsList.appendChild(el);
    });
  }

  async function respondRequest(from, accept) {
    try {
      await safeJSON(API + "/api/friends/respond", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: me.username, from, accept })
      });
      showToast(accept ? "Friend added" : "Request declined");
      loadFriendRequests();
      loadFriends();
      if (socket) socket.emit("refresh-friends");
    } catch (err) {
      showToast(err.message);
    }
  }

  /* ---------- FRIENDS LIST ---------- */
  async function loadFriends() {
    try {
      const data = await safeJSON(API + "/api/friends?user=" + encodeURIComponent(me.username));
      friends = data.friends || [];
      renderFriends();
    } catch (err) {}
  }

  function renderFriends() {
    friendsList.innerHTML = "";
    friendsCount.textContent = friends.length;

    if (!friends.length) {
      friendsList.innerHTML = '<div class="empty-state">No friends yet</div>';
      return;
    }

    friends.forEach(f => {
      const el = document.createElement("div");
      el.className = "user-item";
      el.innerHTML = `
        <img src="${escapeHtml(f.avatar || 'png/logo.png')}" alt="">
        <div class="user-meta">
          <div class="user-name">${escapeHtml(f.username)}</div>
          <div class="user-sub">Friend</div>
        </div>
      `;
      friendsList.appendChild(el);
    });
  }

  /* ---------- SIGN OUT ---------- */
  signoutBtn.addEventListener("click", () => {
    if (!confirm("Sign out?")) return;
    localStorage.removeItem("farius_user");
    if (socket) socket.disconnect();
    location.reload();
  });

  /* ---------- MOBILE SIDEBAR ---------- */
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");
  });

  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
  });

  /* ---------- AUTO LOGIN ---------- */
  const saved = localStorage.getItem("farius_user");
  if (saved) {
    try {
      me = JSON.parse(saved);
      enterChat();
      loadFriends();
      loadFriendRequests();
    } catch (e) {
      localStorage.removeItem("farius_user");
    }
  }
})();
</script>

</body>
</html>