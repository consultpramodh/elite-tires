// EasyUI Pill Navigation and UnfoldAccordion interaction patterns,
// adapted for this buildless site with ARIA tabs and native details.
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));

function selectTab(activeTab) {
  for (const tab of tabs) {
    const isActive = tab === activeTab;
    tab.setAttribute('aria-selected', String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !isActive;
  }
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    const nextIndex = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index + tabs.length - 1) % tabs.length,
      Home: 0,
      End: tabs.length - 1
    }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex]);
    tabs[nextIndex].focus();
  });
});
