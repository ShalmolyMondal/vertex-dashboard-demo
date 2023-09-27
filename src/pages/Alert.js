import AlertSummary from "../components/AlertSummary";
//import AlertsSummaryTable from "../components/RecentAlerts";
import SidebarLight from "../components/SidebarLight";

const tabs = [
  { name: "Overview", href: "#", current: true },
  { name: "Manage Alerts", href: "#", current: false },
  { name: "Notification Settings", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Alerts() {
  return (
    <div className="border-b border-gray-200 pb-5 sm:pb-0">
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        {" "}
        Alerts and Notifications{" "}
      </h3>
      <div className="mt-3 sm:mt-4">
        <div className="sm:hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            id="current-tab"
            name="current-tab"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div>
        <SidebarLight />
      </div>
      <div>
        <div className="flex flex-wrap justify-between bg-gray-300 py-10 rounded-lg gap-2">
          {/* <div className="h-1/2">
            <AlertsSummaryTable />
          </div> */}

          <div>
            <AlertSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
