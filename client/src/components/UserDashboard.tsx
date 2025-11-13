import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, CheckCircle2, Clock, XCircle, Eye } from "lucide-react";
import { Link } from "wouter";

export default function UserDashboard() {
  const stats = [
    { label: "Total Applications", value: "12", icon: FileText, color: "text-blue-600" },
    { label: "Approved", value: "5", icon: CheckCircle2, color: "text-green-600" },
    { label: "Pending", value: "4", icon: Clock, color: "text-yellow-600" },
    { label: "Rejected", value: "3", icon: XCircle, color: "text-red-600" },
  ];

  const applications = [
    {
      id: 1,
      schemeName: "National Scholarship for Students with Disabilities",
      category: "Education",
      appliedDate: "2024-01-15",
      status: "approved",
      amount: "₹50,000",
    },
    {
      id: 2,
      schemeName: "Assistive Devices Distribution Scheme",
      category: "Healthcare",
      appliedDate: "2024-02-10",
      status: "pending",
      amount: "100% Subsidy",
    },
    {
      id: 3,
      schemeName: "Self-Employment Scheme for PwDs",
      category: "Employment",
      appliedDate: "2024-02-20",
      status: "pending",
      amount: "₹5 Lakhs",
    },
    {
      id: 4,
      schemeName: "Special Education Assistance Program",
      category: "Education",
      appliedDate: "2024-01-05",
      status: "approved",
      amount: "₹30,000",
    },
    {
      id: 5,
      schemeName: "Healthcare Insurance Scheme",
      category: "Healthcare",
      appliedDate: "2023-12-20",
      status: "rejected",
      amount: "₹5 Lakhs",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", label: string }> = {
      approved: { variant: "default", label: "Approved" },
      pending: { variant: "secondary", label: "Pending" },
      rejected: { variant: "destructive", label: "Rejected" },
    };
    const config = variants[status] || variants.pending;
    return (
      <Badge variant={config.variant} data-testid={`badge-status-${status}`}>
        {config.label}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Dashboard</h1>
          <p className="text-muted-foreground text-lg">Track your scheme applications and status</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold" data-testid={`value-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>{stat.value}</p>
                    </div>
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>View and track your scheme applications</CardDescription>
              </div>
              <Link href="/browse">
                <Button data-testid="button-apply-new">Apply for New Scheme</Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Scheme Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id} data-testid={`row-application-${app.id}`}>
                      <TableCell className="font-medium">{app.schemeName}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{app.category}</Badge>
                      </TableCell>
                      <TableCell>{new Date(app.appliedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="font-semibold">{app.amount}</TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          data-testid={`button-view-${app.id}`}
                          aria-label="View application details"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
