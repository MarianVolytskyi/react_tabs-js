import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const getCurrentTab = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({
                'is-active': tab.id === currentTab.id,
              })}
            >

              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => getCurrentTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
