import { Search, RefreshCw, Bell, User, Menu } from "lucide-react";

interface Props {
  onSearch: (q: string) => void;
  onRefresh: () => void;
  showNotifications: boolean;
  setShowNotifications: (v: boolean) => void;
  agentName: string;
  onToggleSidebar: () => void;
}

const alerts = [
  { id: "GOV-9921", msg: "Critical fraud detected in MGNREGS Jharkhand", time: "2m ago" },
  { id: "GOV-7703", msg: "Fake claims flagged in Ayushman Bharat Bihar", time: "5m ago" },
  { id: "GOV-4401", msg: "Shell entities found in PMEGP Maharashtra", time: "12m ago" },
];

const DashboardHeader = ({
  onSearch,
  onRefresh,
  showNotifications,
  setShowNotifications,
  agentName, // ✅ FIXED
  onToggleSidebar,
}: Props) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border relative">
      
      {/* LEFT SECTION */}
      <div className="flex items-start gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-secondary text-muted-foreground transition-colors"
          aria-label="Toggle sidebar"
          title="Toggle sidebar"
        >
          <Menu size={16} />
        </button>
        <div>
          <h1 className="text-lg font-bold text-foreground tracking-wide">
            Fraud Detection War Room
          </h1>
          <div className="flex items-center gap-4 mt-1">
            <span className="text-[10px] font-mono text-muted-foreground">
              SESSION_ID: <span className="text-primary">FD-2026-04-14-001</span>
            </span>
            <span className="text-[10px] font-mono text-primary">
              CLASSIFICATION: RESTRICTED
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3">
        
        {/* SEARCH */}
        <div className="flex items-center bg-secondary rounded-md px-3 py-1.5 gap-2">
          <Search size={14} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search accounts, cases..."
            onChange={(e) => onSearch(e.target.value)}
            className="bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none w-48"
          />
        </div>

        {/* REFRESH */}
        <button
          onClick={onRefresh}
          className="p-2 rounded-md hover:bg-secondary text-muted-foreground transition-colors"
        >
          <RefreshCw size={16} />
        </button>

        {/* NOTIFICATIONS */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-md hover:bg-secondary text-muted-foreground relative transition-colors"
          >
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>

          {showNotifications && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 40,
                width: 300,
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: 8,
                zIndex: 100,
              }}
            >
              <div
                style={{
                  padding: "10px 14px",
                  borderBottom: "1px solid #1e1e1e",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                Live Alerts
              </div>

              {alerts.map((a) => (
                <div
                  key={a.id}
                  style={{
                    padding: "10px 14px",
                    borderBottom: "1px solid #1a1a1a",
                  }}
                >
                  <div
                    style={{
                      color: "#cc0000",
                      fontSize: 11,
                      fontFamily: "monospace",
                    }}
                  >
                    {a.id}
                  </div>
                  <div style={{ color: "#ccc", fontSize: 11, marginTop: 2 }}>
                    {a.msg}
                  </div>
                  <div style={{ color: "hsl(var(--muted-foreground))", fontSize: 10, marginTop: 2 }}>
                    {a.time}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* USER */}
        <div className="flex items-center gap-2 ml-2 pl-3 border-l border-border">
          <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
            <User size={14} className="text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs text-foreground leading-none">
              {agentName}
            </p>
            <p className="text-[9px] font-mono text-muted-foreground">
              Clearance L4
            </p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default DashboardHeader;