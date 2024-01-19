export default function SidebarContainer() {
  return (
    <aside className="sidebar__container min-h-full w-[325px] bg-gray-50 text-gray-700 border-r border-r-gray-200 p-8">
      <div className="sidebar">
        <div className="widget mb-6">
          <div className="widget__content">
            <div className="widget__header">
              <h3 className="widget__title font-bold text-lg mb-4">Clients App</h3>
              <div className="text-sm font-medium">
                <p className="text-gray-500">This is a short description.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="widget mb-6">
          <div className="widget__content">
            <div className="widget__header">
              <h3 className="widget__title font-bold text-lg mb-4">Another Group</h3>
              <div className="text-sm font-medium">
                <p className="text-gray-500">This is another short description.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
