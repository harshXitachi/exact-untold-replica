import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import { 
  RiDashboardLine, 
  RiBriefcaseLine, 
  RiWalletLine, 
  RiFileTextLine, 
  RiSettings4Line,
  RiNotification3Line,
  RiLogoutBoxLine,
  RiMenuLine,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        navigate("/auth");
      }
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }

  const sidebarItems = [
    { icon: RiDashboardLine, label: "Overview", active: true },
    { icon: RiBriefcaseLine, label: "My Tasks" },
    { icon: RiWalletLine, label: "Earnings" },
    { icon: RiFileTextLine, label: "Documents" },
    { icon: RiNotification3Line, label: "Notifications" },
    { icon: RiSettings4Line, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-20" : "w-0"} transition-all duration-300 bg-card border-r border-border flex flex-col items-center py-6 gap-8 overflow-hidden`}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-[hsl(var(--accent-blue))] flex items-center justify-center text-white font-bold text-xl">
          T
        </div>
        
        <nav className="flex-1 flex flex-col gap-4">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                item.active
                  ? "bg-accent text-white shadow-lg"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
              title={item.label}
            >
              <item.icon className="w-6 h-6" />
            </button>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-white transition-all duration-200"
          title="Logout"
        >
          <RiLogoutBoxLine className="w-6 h-6" />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="rounded-xl"
              >
                <RiMenuLine className="w-6 h-6" />
              </Button>
              <h1 className="text-4xl font-bold">Overview</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Welcome back,</div>
                <div className="font-semibold">
                  {user?.user_metadata?.username || user?.email?.split("@")[0]}
                </div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-[hsl(var(--accent-blue))] flex items-center justify-center text-white font-bold">
                {(user?.user_metadata?.username || user?.email)?.[0]?.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent transition-all duration-300">
              <div className="text-sm text-muted-foreground mb-2">Total Earnings</div>
              <div className="text-3xl font-bold text-accent">$0.00</div>
              <div className="text-xs text-muted-foreground mt-2">Start completing tasks</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[hsl(var(--accent-blue))]/10 to-[hsl(var(--accent-blue))]/5 border-[hsl(var(--accent-blue))]/20 hover:border-[hsl(var(--accent-blue))] transition-all duration-300">
              <div className="text-sm text-muted-foreground mb-2">Active Tasks</div>
              <div className="text-3xl font-bold text-[hsl(var(--accent-blue))]">0</div>
              <div className="text-xs text-muted-foreground mt-2">Browse available tasks</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[hsl(var(--accent-green))]/10 to-[hsl(var(--accent-green))]/5 border-[hsl(var(--accent-green))]/20 hover:border-[hsl(var(--accent-green))] transition-all duration-300">
              <div className="text-sm text-muted-foreground mb-2">Completed Tasks</div>
              <div className="text-3xl font-bold text-[hsl(var(--accent-green))]">0</div>
              <div className="text-xs text-muted-foreground mt-2">Just getting started!</div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20 hover:border-purple-500 transition-all duration-300">
              <div className="text-sm text-muted-foreground mb-2">Success Rate</div>
              <div className="text-3xl font-bold text-purple-500">--</div>
              <div className="text-xs text-muted-foreground mt-2">Complete your first task</div>
            </Card>
          </div>

          {/* Welcome Card */}
          <Card className="p-8 bg-gradient-to-br from-accent to-[hsl(var(--accent-blue))] text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to Taskin! 🎉</h2>
            <p className="text-lg mb-6 opacity-90">
              You're all set to start your freelance journey. Browse available tasks, complete them on time, and start earning today!
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">
              Browse Available Tasks
            </Button>
          </Card>

          {/* Recent Activity */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>
            <div className="text-center py-12 text-muted-foreground">
              <RiBriefcaseLine className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No activity yet. Start by browsing tasks!</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;