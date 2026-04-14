/**
 * Header workflow pills + right column dynamic task cards with expand/collapse.
 */
(function () {
  "use strict";

  var ICON_PATHS = {
    video: "icons/video-call.svg",
    doc: "icons/document.svg",
    bank: "icons/connect-bank.svg",
    bankComplete: "icons/complete.svg",
    calendar: "icons/calendar.svg",
    calAlert: "icons/cal-alert.svg",
    thumbUp: "icons/thumb-up.svg",
    handMoney: "icons/hand-money.svg",
    tax: "icons/document.svg",
    question: "icons/question.svg",
  };

  var CONNECT_DRAWER_TRIGGERS = {
    "Set up a call": true,
    "Schedule a call": true,
    "Schedule appointment": true,
    Reschedule: true,
  };

  var STATE_CARDS = {
    onboarding: [
      {
        type: "expandable",
        icon: "video",
        title: "Schedule your welcome call",
        badge: "todo",
        section: "To do",
        startOpen: false,
        text: "Your expert will finish setting up your account during your welcome call.",
        actionLabel: "Schedule a call",
      },
      {
        type: "expandable",
        icon: "bank",
        title: "Automate your bank transactions",
        badge: "todo",
        section: null,
        startOpen: false,
        text: "We'll take you to QuickBooks to connect your bank account and import your transactions.",
        actionLabel: "Connect your account",
      },
      {
        type: "expandable",
        icon: "question",
        title: "Answer questions for your expert",
        badge: "optional",
        section: null,
        startOpen: false,
        text: "Give your expert some info before you meet to save time during your call.",
        actionLabel: "Go to questions",
      },
      {
        type: "expandable",
        icon: "thumbUp",
        title: "Your expert will review your books",
        badge: "upcoming",
        section: "Up next",
        startOpen: false,
        text: "You don't have to do anything. If your expert needs more info, they'll reach out.",
      },
      {
        type: "expandable",
        icon: "tax",
        title: "File your 2025 taxes",
        badge: "upcoming",
        section: null,
        startOpen: false,
        text: "We'll let you know when it's time to file\u2014it's included!",
      },
    ],
    welcomeCall: [
      {
        type: "expandable",
        icon: "calAlert",
        title: "Schedule your Q3 check-in",
        badge: "todo",
        section: "To do",
        startOpen: false,
        text: "Get quarterly estimates and discuss ways to optimize your tax strategy with your expert.",
        actionLabel: "Schedule a call",
      },
      {
        type: "expandable",
        icon: "bankComplete",
        title: "You connected your bank account",
        badge: null,
        section: null,
        startOpen: false,
        bgSecondary: true,
        text: "Looks like you've already connected your bank. You can update your info anytime.",
        actionLabel: "Update account info",
      },
      {
        type: "expandable",
        icon: "calendar",
        title: "Your welcome call is coming up",
        badge: "upcoming",
        section: "Up next",
        startOpen: false,
        text: (function() { var d = new Date(); var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]; return "Your appointment is at 11:00am on " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + "."; })(),
        actionLabel: "Reschedule",
      },
      {
        type: "expandable",
        icon: "thumbUp",
        title: "Your expert will review your books",
        badge: "upcoming",
        section: null,
        startOpen: false,
        text: "If your expert needs more info, they'll reach out. You don't have to do anything right now.",
      },
      {
        type: "expandable",
        icon: "tax",
        title: "File your 2025 taxes",
        badge: "upcoming",
        section: null,
        startOpen: false,
        text: "We'll let you know when it's time to file\u2014it's included!",
      },
    ],
    quarterlyReview: [
      {
        type: "expandable",
        icon: "thumbUp",
        title: "Your expert is reviewing your books",
        badge: "progress",
        section: "In progress",
        startOpen: false,
        text: "Sit tight \u2013 your expert is on it! You can reach out if you have questions.",
        actionLabel: "Start a chat",
      },
      {
        type: "expandable",
        icon: "calAlert",
        title: "Schedule your Q3 check-in",
        badge: "todo",
        section: "To do",
        startOpen: false,
        text: "Get quarterly estimates and discuss ways to optimize your tax strategy with your expert.",
        actionLabel: "Schedule a call",
      },
      {
        type: "expandable",
        icon: "bankComplete",
        title: "You completed your welcome call",
        badge: null,
        section: null,
        startOpen: false,
        bgSecondary: true,
        text: "Your expert finished setting up your account. They\u2019ll reach out via chat if they need more info.",
      },
      {
        type: "expandable",
        icon: "tax",
        title: "File your 2025 taxes",
        badge: "upcoming",
        section: "Up next",
        startOpen: false,
        text: "We'll let you know when it's time to file\u2014it's included!",
      },
    ],
    taxFiling: [
      { type: "completed", title: "Your expert reviewed your books" },
      { type: "completed", title: "You completed your Q3 check-in" },
      {
        type: "expandable",
        icon: "handMoney",
        title: "Your expert is working on your taxes",
        badge: "progress",
        section: "To do",
        startOpen: false,
        text: "Rest assured, your taxes are being handled. If you have questions in the meantime, ask them here.",
        actionLabel: "Go to taxes",
      },
      {
        type: "completedOpen",
        title: "Your 2025 taxes are complete!",
        text: "Your expert finished filing your taxes! Check your status anytime.",
        actionLabel: "Check status",
      },
    ],
    subscriptionExpired: [],
  };

  function setExpanded(root, expanded) {
    var trigger = root.querySelector(".expandable__trigger");
    var panel = root.querySelector(".expandable__panel");
    if (!trigger || !panel) return;
    trigger.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (expanded) {
      root.classList.add("is-expanded");
      root.classList.remove("is-collapsed");
      panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      root.classList.remove("is-expanded");
      root.classList.add("is-collapsed");
      panel.style.maxHeight = "0";
    }
  }

  function lockTaskColumnHeight() {
    var col = document.querySelector(".right-column-tasks");
    if (!col) return;
    var current = col.offsetHeight;
    var locked = parseInt(col.style.minHeight, 10) || 0;
    if (current > locked) {
      col.style.minHeight = current + "px";
    }
  }

  function toggle(root) {
    var willExpand = !root.classList.contains("is-expanded");
    if (willExpand) {
      document.querySelectorAll("#js-task-cards [data-expandable]").forEach(function (card) {
        if (card !== root && card.classList.contains("is-expanded")) {
          setExpanded(card, false);
        }
      });
      setExpanded(root, true);
      setTimeout(lockTaskColumnHeight, 160);
    } else {
      setExpanded(root, false);
    }
  }

  function badgeEl(kind) {
    var span = document.createElement("span");
    span.className = "badge";
    if (kind === "todo") {
      span.className += " badge--todo";
      span.textContent = "To do";
    } else if (kind === "upcoming") {
      span.className += " badge--upcoming";
      span.textContent = "Upcoming";
    } else if (kind === "progress") {
      span.className += " badge--progress";
      span.textContent = "In progress";
    } else if (kind === "optional") {
      span.className += " badge--optional";
      span.textContent = "Optional";
    }
    return span;
  }

  function iconWrap(key) {
    var span = document.createElement("span");
    span.className = "expandable__icon";
    span.setAttribute("aria-hidden", "true");
    var img = document.createElement("img");
    img.src = ICON_PATHS[key] || ICON_PATHS.doc;
    img.alt = "";
    img.width = 24;
    img.height = 24;
    span.appendChild(img);
    return span;
  }

  function completeCheckImg() {
    var img = document.createElement("img");
    img.className = "task-card__check-svg";
    img.src = "icons/complete.svg";
    img.alt = "";
    img.width = 24;
    img.height = 24;
    img.setAttribute("aria-hidden", "true");
    return img;
  }

  function createExpandable(card, stateKey, index) {
    var uid = stateKey + "-" + index;
    var root = document.createElement("div");
    root.className =
      "expandable " + (card.startOpen ? "is-expanded" : "is-collapsed") + (card.bgSecondary ? " expandable--secondary" : "");
    root.setAttribute("data-expandable", "");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "expandable__trigger";
    btn.id = "task-trigger-" + uid;
    btn.setAttribute("aria-expanded", card.startOpen ? "true" : "false");

    btn.appendChild(iconWrap(card.icon));

    var label = document.createElement("span");
    label.className = "expandable__label";
    label.textContent = card.title;
    btn.appendChild(label);

    if (card.badge) {
      btn.appendChild(badgeEl(card.badge));
    } else {
      var badgePlaceholder = document.createElement("span");
      btn.appendChild(badgePlaceholder);
    }

    var chev = document.createElement("img");
    chev.className = "expandable__chevron";
    chev.src = "icons/chevron-down.svg";
    chev.alt = "";
    chev.width = 24;
    chev.height = 24;
    chev.setAttribute("aria-hidden", "true");
    btn.appendChild(chev);

    var panel = document.createElement("div");
    panel.className = "expandable__panel";
    panel.setAttribute("role", "region");
    panel.setAttribute("aria-labelledby", "task-trigger-" + uid);

    var inner = document.createElement("div");
    inner.className = "expandable__panel-inner";

    var p = document.createElement("p");
    p.className = "expandable__panel-text";
    p.textContent = card.text;
    inner.appendChild(p);

    if (card.actionLabel) {
      var action = document.createElement("button");
      action.type = "button";
      action.className = "btn btn--outline";
      action.textContent = card.actionLabel;
      if (CONNECT_DRAWER_TRIGGERS[card.actionLabel]) {
        action.className += " js-connect-drawer-open";
      }
      if (card.actionLabel === "Go to docs") {
        action.className += " js-go-docs";
      }
      inner.appendChild(action);
    }

    panel.appendChild(inner);
    root.appendChild(btn);
    root.appendChild(panel);
    return root;
  }

  function createCompletedCard(title) {
    var card = document.createElement("div");
    card.className = "task-card task-card--completed";
    var row = document.createElement("div");
    row.className = "task-card__row";
    var check = document.createElement("span");
    check.className = "task-card__check";
    check.appendChild(completeCheckImg());
    var t = document.createElement("span");
    t.className = "task-card__title";
    t.textContent = title;
    row.appendChild(check);
    row.appendChild(t);
    card.appendChild(row);
    return card;
  }

  function createCompletedOpenCard(card) {
    var root = document.createElement("div");
    root.className = "task-card task-card--completed task-card--completed-open";
    var row = document.createElement("div");
    row.className = "task-card__row";
    var check = document.createElement("span");
    check.className = "task-card__check";
    check.appendChild(completeCheckImg());
    var t = document.createElement("span");
    t.className = "task-card__title";
    t.textContent = card.title;
    row.appendChild(check);
    row.appendChild(t);
    var body = document.createElement("div");
    body.className = "task-card__body";
    var p = document.createElement("p");
    p.className = "task-card__body-text";
    p.textContent = card.text;
    var action = document.createElement("button");
    action.type = "button";
    action.className = "btn btn--outline";
    action.textContent = card.actionLabel;
    body.appendChild(p);
    body.appendChild(action);
    root.appendChild(row);
    root.appendChild(body);
    return root;
  }

  function updateDashboardLayout(stateKey) {
    var defaultDash = document.querySelector(".dashboard-default");
    var expiredPanel = document.getElementById("subscription-expired-panel");
    if (!defaultDash || !expiredPanel) return;
    var isExpired = stateKey === "subscriptionExpired";
    defaultDash.hidden = isExpired;
    expiredPanel.hidden = !isExpired;
  }

  function setWorkflowState(stateKey) {
    var grid = document.querySelector(".dashboard-grid");
    if (grid) {
      grid.setAttribute("data-workflow-state", stateKey);
    }
    var dashView = document.getElementById("dashboard-view");
    if (dashView) {
      dashView.setAttribute("data-workflow-state", stateKey);
    }
    updateDashboardLayout(stateKey);
    renderState(stateKey);
    reorderLearnCards(stateKey);
  }

  function reorderLearnCards(stateKey) {
    var row = document.querySelector(".learn__row");
    if (!row) return;
    var tax = row.querySelector(".mini-card--learn-tax");
    var started = row.querySelector(".mini-card--learn-started");
    var included = row.querySelector(".mini-card--learn-included");
    var checkin = row.querySelector(".mini-card--learn-quarterly-checkin");
    var guarantees = row.querySelector(".mini-card--learn-guarantees");
    if (!tax || !started || !included || !checkin || !guarantees) return;

    if (stateKey === "quarterlyReview") {
      // Quarterly review: tax, checkin, guarantees only
      started.style.display = "none";
      included.style.display = "none";
      checkin.style.display = "";
      guarantees.style.display = "";
      row.appendChild(tax);
      row.appendChild(checkin);
      row.appendChild(guarantees);
    } else {
      // All other states: show started, included, tax (hide quarterly-only cards)
      checkin.style.display = "none";
      guarantees.style.display = "none";
      started.style.display = "";
      included.style.display = "";
      if (stateKey === "onboarding" || stateKey === "welcomeCall") {
        // started → included → tax
        row.appendChild(started);
        row.appendChild(included);
        row.appendChild(tax);
      } else {
        // taxFiling / subscriptionExpired: tax → started → included
        row.appendChild(tax);
        row.appendChild(started);
        row.appendChild(included);
      }
    }
  }

  function renderState(stateKey) {
    var host = document.getElementById("js-task-cards");
    if (!host) return;
    host.innerHTML = "";
    var col = document.querySelector(".right-column-tasks");
    if (col) col.style.minHeight = "";
    var items = STATE_CARDS[stateKey];
    if (!items) return;

    var currentSection = null;
    var sectionEl = null;

    items.forEach(function (card, i) {
      if (card.section && card.section !== currentSection) {
        currentSection = card.section;
        sectionEl = document.createElement("div");
        sectionEl.className = "task-section";
        var heading = document.createElement("h3");
        heading.className = "section-heading";
        heading.textContent = card.section;
        sectionEl.appendChild(heading);
        host.appendChild(sectionEl);
      } else if (card.section === null || card.section === undefined) {
        // card belongs to no new section; keep appending to current sectionEl if one is active
      }

      var node;
      if (card.type === "expandable") {
        node = createExpandable(card, stateKey, i);
      } else if (card.type === "completed") {
        node = createCompletedCard(card.title);
      } else if (card.type === "completedOpen") {
        node = createCompletedOpenCard(card);
      }

      if (node) {
        if (sectionEl) {
          sectionEl.appendChild(node);
        } else {
          host.appendChild(node);
        }
      }
    });
  }

  function openConnectDrawer() {
    var root = document.getElementById("connect-drawer");
    if (!root) return;
    root.classList.add("connect-drawer--open");
    root.setAttribute("aria-hidden", "false");
    document.body.classList.add("connect-drawer-open");
  }

  function closeConnectDrawer() {
    var root = document.getElementById("connect-drawer");
    if (!root) return;
    root.classList.remove("connect-drawer--open");
    root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("connect-drawer-open");
  }

  window.closeCallModal = closeConnectDrawer;

  var LEARN_PANEL_IDS = {
    started: "learn-panel-started",
    included: "learn-panel-included",
    tax: "learn-panel-tax",
    "quarterly-checkin": "learn-panel-quarterly-checkin",
    guarantees: "learn-panel-guarantees",
  };

  function openLearnPanel(key) {
    var panelId = LEARN_PANEL_IDS[key];
    if (!panelId) return;
    var root = document.getElementById("learn-panels");
    if (!root) return;
    root.classList.add("learn-panels--open");
    root.setAttribute("aria-hidden", "false");
    document.body.classList.add("learn-panels-open");
    root.querySelectorAll(".learn-panel").forEach(function (panel) {
      var on = panel.id === panelId;
      panel.classList.toggle("is-active", on);
      panel.setAttribute("aria-hidden", on ? "false" : "true");
    });
  }

  function closeLearnPanel() {
    var root = document.getElementById("learn-panels");
    if (!root) return;
    root.classList.remove("learn-panels--open");
    root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("learn-panels-open");
    root.querySelectorAll(".learn-panel").forEach(function (panel) {
      panel.classList.remove("is-active");
      panel.setAttribute("aria-hidden", "true");
    });
  }

  function initLearnPanels() {
    var root = document.getElementById("learn-panels");
    if (!root) return;

    root.addEventListener("click", function (e) {
      if (e.target.closest("[data-learn-panel-dismiss]")) {
        closeLearnPanel();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!root.classList.contains("learn-panels--open")) return;
      closeLearnPanel();
    });

    document.body.addEventListener("click", function (e) {
      var opener = e.target.closest(".js-learn-panel-open");
      if (!opener) return;
      e.preventDefault();
      var key = opener.getAttribute("data-learn-panel");
      if (key) openLearnPanel(key);
    });
  }

  function initMainView() {
    var dashboardView = document.getElementById("dashboard-view");
    var documentsView = document.getElementById("documents-view");
    var fileInput = document.getElementById("js-docs-file-input");
    if (!dashboardView || !documentsView) {
      window.showDashboard = function () {};
      return;
    }

    function showView(viewId) {
      var isDoc = viewId === "documents";
      dashboardView.hidden = isDoc;
      documentsView.hidden = !isDoc;
      document.querySelectorAll(".js-main-nav").forEach(function (link) {
        var match = link.getAttribute("data-main-view") === viewId;
        link.classList.toggle("nav-item--active", match);
        if (match) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
      window.scrollTo(0, 0);
    }

    window.showDashboard = function () {
      showView("dashboard");
      var dv = document.getElementById("dashboard-view");
      var sk = dv && dv.getAttribute("data-workflow-state");
      if (sk) updateDashboardLayout(sk);
    };

    document.querySelectorAll(".js-main-nav").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var v = link.getAttribute("data-main-view");
        if (v) showView(v);
      });
    });

    document.body.addEventListener("click", function (e) {
      if (e.target.closest(".js-go-docs")) {
        e.preventDefault();
        showView("documents");
      }
    });

    function triggerDocsFilePicker() {
      if (fileInput) fileInput.click();
    }

    documentsView.addEventListener("click", function (e) {
      if (e.target.closest(".js-docs-type-link")) {
        e.preventDefault();
        return;
      }
      if (e.target.closest(".js-docs-browse")) {
        e.preventDefault();
        triggerDocsFilePicker();
        return;
      }
      if (e.target.closest(".docs-dropzone")) {
        triggerDocsFilePicker();
      }
    });

    documentsView.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      if (!e.target.closest(".docs-dropzone")) return;
      e.preventDefault();
      triggerDocsFilePicker();
    });
  }

  function initConnectDrawer() {
    var root = document.getElementById("connect-drawer");
    if (!root) return;

    root.addEventListener("click", function (e) {
      if (e.target.closest("[data-connect-drawer-dismiss]")) {
        window.closeCallModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!root.classList.contains("connect-drawer--open")) return;
      window.closeCallModal();
    });

    document.body.addEventListener("click", function (e) {
      var el = e.target.closest(".js-connect-drawer-open");
      if (!el) return;
      if (el.closest("#connect-drawer")) return;
      e.preventDefault();
      openConnectDrawer();
    });
  }

  function initSwitcher() {
    var buttons = document.querySelectorAll(".state-switcher__btn");
    var host = document.getElementById("js-task-cards");
    if (!host || !buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var documentsView = document.getElementById("documents-view");
        if (documentsView && !documentsView.hidden && typeof window.showDashboard === "function") {
          window.showDashboard();
        }
        var state = btn.getAttribute("data-state");
        if (!state) return;
        buttons.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", on ? "true" : "false");
        });
        setWorkflowState(state);
      });
    });

    host.addEventListener("click", function (e) {
      var trigger = e.target.closest(".expandable__trigger");
      if (!trigger) return;
      var root = trigger.closest("[data-expandable]");
      if (!root) return;
      toggle(root);
    });

    var initial =
      document.querySelector(".state-switcher__btn.is-active") ||
      document.querySelector(".state-switcher__btn");
    if (initial) {
      var sk = initial.getAttribute("data-state") || "onboarding";
      setWorkflowState(sk);
    }
  }

  function initSubscriptionExpiredFaq() {
    document.body.addEventListener("click", function (e) {
      var btn = e.target.closest(".subscription-expired-faq-item__trigger");
      if (!btn) return;
      var panelRoot = document.getElementById("subscription-expired-panel");
      if (!panelRoot || !panelRoot.contains(btn)) return;
      e.preventDefault();
      var item = btn.closest(".subscription-expired-faq-item");
      var answer = item && item.querySelector(".subscription-expired-faq-item__answer");
      if (!answer) return;
      var nextOpen = btn.getAttribute("aria-expanded") !== "true";

      // Collapse all other FAQ items
      panelRoot.querySelectorAll(".subscription-expired-faq-item").forEach(function (otherItem) {
        if (otherItem === item) return;
        var otherBtn = otherItem.querySelector(".subscription-expired-faq-item__trigger");
        var otherAnswer = otherItem.querySelector(".subscription-expired-faq-item__answer");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
        if (otherAnswer) otherAnswer.classList.remove("is-open");
      });

      btn.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      answer.classList.toggle("is-open", nextOpen);
    });
  }

  function initPage() {
    initSwitcher();
    initConnectDrawer();
    initMainView();
    initLearnPanels();
    initSubscriptionExpiredFaq();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
})();
