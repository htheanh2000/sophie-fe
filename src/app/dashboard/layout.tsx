import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
    children,
    params,
  }: {
    children: React.ReactNode;
    params: {
      tag: string;
      item: string;
    }
  }) {
    return (
        <div className="flex">
            <Sidebar/>
            {children}
        </div>
    )
  }
  
