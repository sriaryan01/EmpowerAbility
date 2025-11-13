import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Users, CheckCircle2, Clock, TrendingUp, Eye } from "lucide-react";
import { Link } from "wouter";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Schemes", value: "89", icon: FileText, color: "text-blue-600", change: "+5" },
    { label: "Total Users", value: "12,456", icon: Users, color: "text-green-600", change: "+234" },
    { label: "Pending Applications", value: "342", icon: Clock, color: "text-yellow-600", change: "+12" },
    { label: "Approved Today", value: "56", icon: CheckCircle2, color: "text-purple-600", change: "+8" },
  ];

  const recentApplications = [
    {
      id: 1,
      userName: "Rajesh Kumar",
      scheme: "National Scholarship",
      category: "Education",
      date: "2024-03-10",
      status: "pending",
    },
    {
      id: 2,
      userName: "Priya Patel",
      scheme: "Assistive Devices",
      category: "Healthcare",
      date: "2024-03-10",
      status: "pending",
    },
    {
      id: 3,
      userName: "Amit Singh",
      scheme: "Self-Employment",
      category: "Employment",
      date: "2024-03-09",
      status: "approved",
    },
    {
      id: 4,
      userName: "Sunita Devi",
      scheme: "Housing Loan",
      category: "Housing",
      date: "2024-03-09",
      status: "pending",
    },
    {
      id: 5,
      userName: "Mohammed Khan",
      scheme: "Special Education",
      category: "Education",
      date: "2024-03-08",
      status: "approved",
    },
  ];

  const popularSchemes = [
    { name: "National Scholarship", applications: 1234, approved: 892 },
    { name: "Healthcare Insurance", applications: 2341, approved: 1876 },
    { name: "Assistive Devices", applications: 892, approved: 654 },
    { name: "Self-Employment", applications: 567, approved: 423 },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive", label: string }> = {
      approved: { variant: "default", label: "Approved" },
      pending: { variant: "secondary", label: "Pending" },
      rejected: { variant: "destructive", label: "Rejected" },
    };
    const config = variants[status] || variants.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="p-8 bg-background">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground text-lg">Overview of schemes and applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold" data-testid={`value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.value}</p>
                  <Badge variant="outline" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Latest scheme applications from users</CardDescription>
              </div>
              <Link href="/admin/applications">
                <Button variant="outline" size="sm" data-testid="button-view-all-applications">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Scheme</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentApplications.map((app) => (
                  <TableRow key={app.id} data-testid={`row-application-${app.id}`}>
                    <TableCell className="font-medium">{app.userName}</TableCell>
                    <TableCell>{app.scheme}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{app.category}</Badge>
                    </TableCell>
                    <TableCell>{new Date(app.date).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(app.status)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" data-testid={`button-review-${app.id}`}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Schemes</CardTitle>
            <CardDescription>Most applied schemes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {popularSchemes.map((scheme, idx) => (
                <div key={idx} className="space-y-2" data-testid={`popular-scheme-${idx}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{scheme.name}</p>
                    <Badge variant="secondary" className="text-xs">
                      {scheme.applications}
                    </Badge>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(scheme.approved / scheme.applications) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {scheme.approved} approved ({Math.round((scheme.approved / scheme.applications) * 100)}%)
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/schemes">
              <Button className="w-full justify-start" variant="outline" data-testid="button-add-scheme">
                <FileText className="h-4 w-4 mr-2" />
                Add New Scheme
              </Button>
            </Link>
            <Link href="/admin/applications">
              <Button className="w-full justify-start" variant="outline" data-testid="button-review-applications">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Review Applications
              </Button>
            </Link>
            <Link href="/admin/users">
              <Button className="w-full justify-start" variant="outline" data-testid="button-manage-users">
                <Users className="h-4 w-4 mr-2" />
                Manage Users
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Database</span>
              <Badge variant="default">Healthy</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">API Response</span>
              <Badge variant="default">Normal</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Server Load</span>
              <Badge variant="secondary">Low</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Last Backup</span>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
