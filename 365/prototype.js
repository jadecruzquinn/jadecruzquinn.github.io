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
        icon: "calendar",
        title: "Your welcome call is coming up",
        badge: "progress",
        section: "In progress",
        startOpen: false,
        text: (function() { var d = new Date(); var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]; return "Your appointment is at 11:00am on " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + "."; })(),
        actionLabel: "Reschedule",
      },
      {
        type: "completedOpen",
        title: "You answered questions for your expert",
        section: "Done",
        text: "We received your response! Next, you\u2019ll have a welcome call with your expert.",
        actionLabel: "Edit responses",
      },
      {
        type: "expandable",
        icon: "bankComplete",
        title: "You connected your bank account",
        badge: null,
        section: null,
        startOpen: false,
        bgSecondary: true,
        text: "Looks like you\u2019ve already connected your bank. You can update your info anytime.",
        actionLabel: "Update account info",
      },
      {
        type: "expandable",
        icon: "thumbUp",
        title: "Your expert will review your books",
        badge: "upcoming",
        section: "Up next",
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
        section: "Done",
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
      {
        type: "expandable",
        icon: "doc",
        title: "Upload docs",
        badge: "todo",
        section: "To do",
        startOpen: false,
        text: "Your expert requested docs in the chat. Here\u2019s your reminder to upload them.",
        actionLabel: "Go to docs",
      },
      {
        type: "expandable",
        icon: "tax",
        title: "Start filing anytime",
        badge: "todo",
        section: null,
        startOpen: false,
        text: "Your expert is ready when you are. Filing is included, at no extra cost.",
        actionLabel: "Start taxes",
      },
      {
        type: "expandable",
        icon: "thumbUp",
        title: "Your expert reviewed your books",
        badge: null,
        section: "Done",
        startOpen: false,
        bgSecondary: true,
        text: "Your expert has reviewed your books and is ready to move forward.",
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

  function closeAllCompletedOpen() {
    document.querySelectorAll("#js-task-cards .task-card--completed-open.is-open").forEach(function(card) {
      card.classList.remove("is-open");
      var sibPanel = card.querySelector(".task-card__panel");
      var sibChevron = card.querySelector(".task-card__chevron");
      if (sibPanel) { sibPanel.style.borderTop = "0"; sibPanel.style.maxHeight = "0"; }
      if (sibChevron) sibChevron.style.transform = "";
    });
  }

  function toggle(root) {
    var willExpand = !root.classList.contains("is-expanded");
    if (willExpand) {
      document.querySelectorAll("#js-task-cards [data-expandable]").forEach(function (card) {
        if (card !== root && card.classList.contains("is-expanded")) {
          setExpanded(card, false);
        }
      });
      closeAllCompletedOpen();
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
    // Start collapsed
    root.className = "task-card task-card--completed task-card--completed-open";
    var row = document.createElement("div");
    row.className = "task-card__row";
    var check = document.createElement("span");
    check.className = "task-card__check";
    check.appendChild(completeCheckImg());
    var t = document.createElement("span");
    t.className = "task-card__title";
    t.textContent = card.title;
    var chevron = document.createElement("img");
    chevron.src = "icons/chevron-down.svg";
    chevron.width = 20;
    chevron.height = 20;
    chevron.setAttribute("aria-hidden", "true");
    chevron.className = "task-card__chevron";
    chevron.style.transform = ""; // collapsed = chevron-down pointing ∨
    row.appendChild(check);
    row.appendChild(t);
    row.appendChild(chevron);

    // Use overflow + max-height for smooth animation (same pattern as .expandable__panel)
    var panel = document.createElement("div");
    panel.className = "task-card__panel";
    panel.style.overflow = "hidden";
    panel.style.maxHeight = "0";
    panel.style.transition = "max-height 0.2s ease-in-out";
    panel.style.borderTop = "0";

    var body = document.createElement("div");
    body.className = "task-card__body";
    var p = document.createElement("p");
    p.className = "task-card__body-text";
    p.textContent = card.text;
    body.appendChild(p);
    if (card.actionLabel) {
      var action = document.createElement("button");
      action.type = "button";
      action.className = "btn btn--outline";
      action.textContent = card.actionLabel;
      body.appendChild(action);
    }
    panel.appendChild(body);
    root.appendChild(row);
    root.appendChild(panel);

    function closeSiblings() {
      // Close all other completedOpen cards globally
      document.querySelectorAll("#js-task-cards .task-card--completed-open").forEach(function(sibling) {
        if (sibling !== root && sibling.classList.contains("is-open")) {
          sibling.classList.remove("is-open");
          var sibPanel = sibling.querySelector(".task-card__panel");
          var sibChevron = sibling.querySelector(".task-card__chevron");
          if (sibPanel) { sibPanel.style.borderTop = "0"; sibPanel.style.maxHeight = "0"; }
          if (sibChevron) sibChevron.style.transform = "";
        }
      });
      // Also close any open expandable cards
      document.querySelectorAll("#js-task-cards [data-expandable].is-expanded").forEach(function(card) {
        setExpanded(card, false);
      });
    }

    // Toggle on row click — ∨ collapsed, ∧ expanded
    row.addEventListener("click", function() {
      var isNowOpen = !root.classList.contains("is-open");
      closeSiblings();
      root.classList.toggle("is-open", isNowOpen);
      if (isNowOpen) {
        panel.style.borderTop = "1px solid var(--container-border-primary)";
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.borderTop = "0";
        panel.style.maxHeight = "0";
      }
      chevron.style.transform = isNowOpen ? "rotate(180deg)" : "";
    });

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
      if (stateKey === "onboarding") {
        // Getting started: started → included → tax
        row.appendChild(started);
        row.appendChild(included);
        row.appendChild(tax);
      } else if (stateKey === "welcomeCall" || stateKey === "taxFiling") {
        // Welcome call / Tax filing: started → included → tax
        row.appendChild(started);
        row.appendChild(included);
        row.appendChild(tax);
      } else {
        // subscriptionExpired: tax → started → included
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
        // Close questions flow if open
        var qFlow = document.getElementById("questions-flow");
        if (qFlow && !qFlow.hidden) {
          qFlow.hidden = true;
          qFlow.setAttribute("aria-hidden", "true");
        }
        // Close billing flow if open
        var bFlow = document.getElementById("billing-flow");
        if (bFlow && !bFlow.hidden) {
          bFlow.hidden = true;
          bFlow.setAttribute("aria-hidden", "true");
        }
        var v = link.getAttribute("data-main-view");
        if (v) showView(v);
      });
    });

    // Also close billing flow when clicking the brand logo
    var brandEl = document.querySelector(".sidebar__brand");
    if (brandEl) {
      brandEl.addEventListener("click", function() {
        var bFlow = document.getElementById("billing-flow");
        if (bFlow && !bFlow.hidden) {
          bFlow.hidden = true;
          bFlow.setAttribute("aria-hidden", "true");
        }
        showView("dashboard");
      });
    }

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

  function initConnectBankModal() {
    var modal = document.getElementById("connect-bank-modal");
    if (!modal) return;
    var closeBtn = document.getElementById("connect-bank-close");
    var scrim = document.getElementById("connect-bank-scrim");

    function openModal() {
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
    }

    // Open when "Connect your account" btn is clicked
    document.body.addEventListener("click", function(e) {
      var btn = e.target.closest(".btn, button");
      if (btn && btn.textContent.trim() === "Connect your account") {
        e.preventDefault();
        openModal();
      }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (scrim) scrim.addEventListener("click", closeModal);

    // Clicking any bank button or Show more closes the modal
    modal.querySelectorAll(".connect-bank-modal__bank-btn, .connect-bank-modal__show-more").forEach(function(btn) {
      btn.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && !modal.hidden) closeModal();
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
        // Close questions flow if open
        var qFlow = document.getElementById("questions-flow");
        if (qFlow && !qFlow.hidden) {
          qFlow.hidden = true;
          qFlow.setAttribute("aria-hidden", "true");
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

  function initQuestionsFlow() {
    var flow = document.getElementById("questions-flow");
    var backBtn = document.getElementById("questions-back");
    var continueBtn = document.getElementById("questions-continue");
    var skipBtn = document.getElementById("questions-skip");
    var footer = document.getElementById("questions-footer");
    if (!flow) return;

    var currentStep = 1;
    var totalSteps = 3;

    function showStep(step) {
      flow.querySelectorAll(".questions-step").forEach(function(el) {
        el.hidden = true;
      });
      var isDone = step === "done";
      if (isDone) {
        flow.querySelector('[data-step="done"]').hidden = false;
        if (skipBtn) skipBtn.hidden = true;
      } else {
        flow.querySelector('[data-step="' + step + '"]').hidden = false;
        if (skipBtn) skipBtn.hidden = false;
      }
    }

    function openFlow() {
      currentStep = 1;
      flow.hidden = false;
      flow.setAttribute("aria-hidden", "false");
      showStep(currentStep);
      flow.scrollTop = 0;
    }

    function closeFlow() {
      flow.hidden = true;
      flow.setAttribute("aria-hidden", "true");
    }

    // Open on "Go to questions" or "Edit responses" button click
    document.body.addEventListener("click", function(e) {
      var btn = e.target.closest(".btn");
      if (btn) {
        var label = btn.textContent.trim();
        if (label === "Go to questions" || label === "Edit responses") {
          openFlow();
        }
      }
    });

    // Q1 conditional sub-options
    var q1OneRadio = document.getElementById("q1-one");
    var q1Suboptions = document.getElementById("q1-suboptions");
    var q1ProtipDefault = document.getElementById("q1-protip-default");
    var q1ProtipSub = document.getElementById("q1-protip-sub");

    function updateQ1Suboptions() {
      var oneSelected = q1OneRadio && q1OneRadio.checked;
      if (q1Suboptions) q1Suboptions.classList.toggle("is-visible", oneSelected);
      if (q1ProtipDefault) q1ProtipDefault.hidden = oneSelected;
      if (q1ProtipSub) q1ProtipSub.hidden = !oneSelected;
    }

    flow.addEventListener("change", function(e) {
      if (e.target.name === "q1") updateQ1Suboptions();
    });

    function advanceStep() {
      if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        flow.scrollTop = 0;
      } else {
        showStep("done");
      }
    }

    continueBtn.addEventListener("click", function() {
      if (flow.querySelector('[data-step="done"]') && !flow.querySelector('[data-step="done"]').hidden) {
        closeFlow();
      } else {
        advanceStep();
      }
    });
    if (skipBtn) skipBtn.addEventListener("click", advanceStep);

    backBtn.addEventListener("click", function() {
      if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        flow.scrollTop = 0;
      } else {
        closeFlow(); // step 1 → back to dashboard
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && !flow.hidden) closeFlow();
    });
  }

  function initBillingFlow() {
    var flow = document.getElementById("billing-flow");
    if (!flow) return;
    var backBtn = document.getElementById("billing-flow-back");
    var placeOrderBtn = document.getElementById("billing-place-order");

    function openFlow() {
      flow.hidden = false;
      flow.setAttribute("aria-hidden", "false");
      flow.scrollTop = 0;
    }

    function closeFlow() {
      flow.hidden = true;
      flow.setAttribute("aria-hidden", "true");
    }

    // Open on "Add a card" or "Update billing info" link clicks
    document.body.addEventListener("click", function(e) {
      var link = e.target.closest("a.link");
      if (!link) return;
      var text = link.textContent.trim();
      if (text === "Add a card" || text === "Update billing info") {
        e.preventDefault();
        openFlow();
      }
    });

    if (backBtn) backBtn.addEventListener("click", closeFlow);
    if (placeOrderBtn) placeOrderBtn.addEventListener("click", closeFlow);

    // Close when clicking left nav items or logo
    document.body.addEventListener("click", function(e) {
      if (flow.hidden) return;
      if (e.target.closest(".js-main-nav") || e.target.closest(".sidebar__brand") || e.target.closest(".sidebar__logo")) {
        closeFlow();
      }
    });

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && !flow.hidden) closeFlow();
    });
  }

  function initNotificationsAndMeeting() {
    var bar = document.getElementById("notifications-bar");
    var toast = document.getElementById("meeting-toast");
    var toastClose = document.getElementById("meeting-toast-close");
    var toastJoin = document.getElementById("meeting-toast-join");
    var videoOverlay = document.getElementById("video-call-overlay");
    var videoEnd = document.getElementById("video-call-end");
    var videoMinimize = document.getElementById("video-minimize");
    var videoXsExpand = document.getElementById("video-xs-expand");
    var resizeHandle = document.getElementById("video-resize-handle");
    var toastTimer = null;

    // Default tile height (px)
    var tileHeight = 180;

    function showToast() {
      if (toast) toast.hidden = false;
    }

    function hideToast() {
      if (toast) toast.hidden = true;
    }

    function showVideoCall() {
      hideToast();
      if (videoOverlay) {
        videoOverlay.hidden = false;
        videoOverlay.classList.remove("is-minimized");
        videoOverlay.style.setProperty("--video-tile-height", tileHeight + "px");
        // Reset position to top-right
        videoOverlay.style.left = "";
        videoOverlay.style.top = "";
      }
    }

    function hideVideoCall() {
      if (videoOverlay) videoOverlay.hidden = true;
      setWorkflowState("quarterlyReview");
      var buttons = document.querySelectorAll(".state-switcher__btn");
      buttons.forEach(function(b) {
        b.classList.toggle("is-active", b.getAttribute("data-state") === "quarterlyReview");
        b.setAttribute("aria-selected", b.getAttribute("data-state") === "quarterlyReview" ? "true" : "false");
      });
    }

    // Minimize / expand
    if (videoMinimize) {
      videoMinimize.addEventListener("click", function(e) {
        e.stopPropagation();
        if (videoOverlay) videoOverlay.classList.add("is-minimized");
      });
    }
    if (videoXsExpand) {
      videoXsExpand.addEventListener("click", function(e) {
        e.stopPropagation();
        if (videoOverlay) videoOverlay.classList.remove("is-minimized");
      });
    }

    // ── Drag to move widget ──
    if (videoOverlay) {
      var dragStartX, dragStartY, widgetStartLeft, widgetStartTop;
      var isDragging = false;

      function getWidgetRect() {
        var r = videoOverlay.getBoundingClientRect();
        return { left: r.left, top: r.top };
      }

      videoOverlay.addEventListener("mousedown", function(e) {
        // Only drag via topbar or xs strip (not controls/tiles)
        var isHandle = e.target.closest(".video-call-overlay__topbar") ||
                       e.target.closest(".video-call-overlay__xs-thumb") ||
                       e.target.closest(".video-call-overlay__xs-name");
        if (!isHandle) return;
        e.preventDefault();
        isDragging = true;
        var rect = getWidgetRect();
        widgetStartLeft = rect.left;
        widgetStartTop = rect.top;
        dragStartX = e.clientX;
        dragStartY = e.clientY;

        // Switch from right-anchored to left-anchored positioning
        videoOverlay.style.right = "";
        videoOverlay.style.left = widgetStartLeft + "px";
        videoOverlay.style.top = widgetStartTop + "px";
      });

      document.addEventListener("mousemove", function(e) {
        if (!isDragging) return;
        var dx = e.clientX - dragStartX;
        var dy = e.clientY - dragStartY;
        videoOverlay.style.left = (widgetStartLeft + dx) + "px";
        videoOverlay.style.top = (widgetStartTop + dy) + "px";
      });

      document.addEventListener("mouseup", function() {
        isDragging = false;
      });
    }

    // ── Resize handle: drag to change video tile height ──
    if (resizeHandle && videoOverlay) {
      var isResizing = false;
      var resizeStartY, resizeStartHeight;

      resizeHandle.addEventListener("mousedown", function(e) {
        e.preventDefault();
        e.stopPropagation();
        isResizing = true;
        resizeStartY = e.clientY;
        resizeStartHeight = tileHeight;
      });

      document.addEventListener("mousemove", function(e) {
        if (!isResizing) return;
        var dy = e.clientY - resizeStartY;
        tileHeight = Math.max(120, Math.min(400, resizeStartHeight + dy));
        videoOverlay.style.setProperty("--video-tile-height", tileHeight + "px");
      });

      document.addEventListener("mouseup", function() {
        isResizing = false;
      });
    }

    // Show/hide bar + trigger toast based on workflow state
    function onStateChange(stateKey) {
      clearTimeout(toastTimer);
      hideToast();
      if (videoOverlay) videoOverlay.hidden = true;

      if (stateKey === "welcomeCall") {
        if (bar) bar.hidden = false;
        toastTimer = setTimeout(showToast, 2500);
      } else {
        if (bar) bar.hidden = true;
      }
    }

    document.querySelectorAll(".state-switcher__btn").forEach(function(btn) {
      btn.addEventListener("click", function() {
        onStateChange(btn.getAttribute("data-state"));
      });
    });

    if (bar) {
      bar.addEventListener("click", function() {
        clearTimeout(toastTimer);
        showToast();
      });
    }

    if (toastClose) toastClose.addEventListener("click", hideToast);
    if (toastJoin) toastJoin.addEventListener("click", function(e) {
      e.stopPropagation();
      showVideoCall();
    });
    if (videoEnd) videoEnd.addEventListener("click", function(e) {
      e.stopPropagation();
      hideVideoCall();
    });

    // Click anywhere outside video overlay to dismiss + transition
    document.addEventListener("click", function(e) {
      if (videoOverlay && !videoOverlay.hidden) {
        if (!videoOverlay.contains(e.target)) {
          hideVideoCall();
        }
      }
    });
  }

  function initChatDrawer() {
    var drawer = document.getElementById("chat-drawer");
    var closeBtn = document.getElementById("chat-drawer-close");
    if (!drawer) return;

    function openDrawer() {
      drawer.hidden = false;
      drawer.setAttribute("aria-hidden", "false");
    }

    function closeDrawer() {
      drawer.hidden = true;
      drawer.setAttribute("aria-hidden", "true");
    }

    // Open on "Chat with your expert" button
    document.body.addEventListener("click", function(e) {
      var btn = e.target.closest("button");
      if (btn && btn.classList.contains("btn--expert-chat")) {
        e.preventDefault();
        openDrawer();
      }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && !drawer.hidden) closeDrawer();
    });
  }

  function initPage() {
    initSwitcher();
    initConnectDrawer();
    initMainView();
    initLearnPanels();
    initSubscriptionExpiredFaq();
    initQuestionsFlow();
    initBillingFlow();
    initConnectBankModal();
    initNotificationsAndMeeting();
    initChatDrawer();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPage);
  } else {
    initPage();
  }
})();
