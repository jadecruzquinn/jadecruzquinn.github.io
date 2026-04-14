(function () {
  'use strict';

  // ===================== PRICING TABS =====================
  function initPricingTabs() {
    var tabs = document.querySelectorAll('.pricing__tab');
    var panels = document.querySelectorAll('.pricing__panel');

    function activateTab(tab) {
      var target = tab.getAttribute('data-tab');

      tabs.forEach(function (t) {
        t.classList.remove('pricing__tab--active');
        t.setAttribute('aria-selected', 'false');
      });

      panels.forEach(function (p) {
        p.hidden = true;
      });

      tab.classList.add('pricing__tab--active');
      tab.setAttribute('aria-selected', 'true');

      var panel = document.getElementById('panel-' + target);
      if (panel) panel.hidden = false;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activateTab(tab);
      });
    });

    // Activate first visible tab on load
    var activeTab = document.querySelector('.pricing__tab--active');
    if (activeTab) activateTab(activeTab);
  }

  // ===================== FAQ ACCORDION =====================
  function initFaq() {
    var triggers = document.querySelectorAll('.faq__trigger');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';

        // Close all
        triggers.forEach(function (t) {
          t.setAttribute('aria-expanded', 'false');
        });

        // Open clicked if it was closed
        if (!isOpen) {
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ===================== INIT =====================
  function init() {
    initPricingTabs();
    initFaq();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
