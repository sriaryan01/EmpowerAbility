import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Eye, CheckCircle2, XCircle, FileText } from "lucide-react";

export default function AdminApplications() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApplication, setSelectedApplication] = useState<any>(null);
  const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false);

  const applications = [
    {
      id: 1,
      userName: "Rajesh Kumar",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      scheme: "National Scholarship for Students with Disabilities",
      category: "Education",
      appliedDate: "2024-03-10",
      status: "pending",
      amount: "₹50,000",
      disabilityType: "Visual",
      documents: ["PwD Certificate", "Income Certificate", "School ID"],
    },
    {
      id: 2,
      userName: "Priya Patel",
      email: "priya.patel@email.com",
      phone: "+91 98765 43211",
      scheme: "Assistive Devices Distribution Scheme",
      category: "Healthcare",
      appliedDate: "2024-03-10",
      status: "pending",
      amount: "100% Subsidy",
      disabilityType: "Mobility",
      documents: ["PwD Certificate", "Medical Report", "BPL Card"],
    },
    {
      id: 3,
      userName: "Amit Singh",
      email: "amit.singh@email.com",
      phone: "+91 98765 43212",
      scheme: "Self-Employment Scheme for PwDs",
      category: "Employment",
      appliedDate: "2024-03-09",
      status: "approved",
      amount: "₹5 Lakhs",
      disabilityType: "Hearing",
      documents: ["PwD Certificate", "Business Plan", "Bank Statement"],
    },
    {
      id: 4,
      userName: "Sunita Devi",
      email: "sunita.devi@email.com",
      phone: "+91 98765 43213",
      scheme: "Accessible Housing Loan Subsidy",
      category: "Housing",
      appliedDate: "2024-03-09",
      status: "pending",
      amount: "3% Subsidy",
      disabilityType: "Mobility",
      documents: ["PwD Certificate", "Income Certificate", "Property Papers"],
    },
    {
      id: 5,
      userName: "Mohammed Khan",
      email: "mohammed.khan@email.com",
      phone: "+91 98765 43214",
      scheme: "Special Education Assistance Program",
      category: "Education",
      appliedDate: "2024-03-08",
      status: "rejected",
      amount: "₹30,000",
      disabilityType: "Intellectual",
      documents: ["PwD Certificate", "School Certificate"],
    },
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

  const handleViewDetails = (application: any) => {
    setSelectedApplication(application);
    setIsDetailDialogOpen(true);
  };

  const handleApprove = (id: number) => {
    console.log("Approving application:", id);
    setIsDetailDialogOpen(false);
  };

  const handleReject = (id: number) => {
    console.log("Rejecting application:", id);
    setIsDetailDialogOpen(false);
  };

  const filteredApplications = applications.filter((app) => {
    const matchesSearch = app.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.scheme.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === "pending").length,
    approved: applications.filter(a => a.status === "approved").length,
    rejected: applications.filter(a => a.status === "rejected").length,
  };

  return (
    <div className="p-8 bg-background">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Manage Applications</h1>
        <p className="text-muted-foreground text-lg">Review and process scheme applications</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card data-testid="stat-total">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Total Applications</p>
            <p className="text-3xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card data-testid="stat-pending">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Pending Review</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </CardContent>
        </Card>
        <Card data-testid="stat-approved">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Approved</p>
            <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
          </CardContent>
        </Card>
        <Card data-testid="stat-rejected">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground mb-1">Rejected</p>
            <p className="text-3xl font-bold text-red-600">{stats.rejected}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Applications</CardTitle>
          <CardDescription>Review and manage all scheme applications</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="mb-4" onValueChange={setStatusFilter}>
            <TabsList data-testid="tabs-status">
              <TabsTrigger value="all" data-testid="tab-all">All</TabsTrigger>
              <TabsTrigger value="pending" data-testid="tab-pending">Pending</TabsTrigger>
              <TabsTrigger value="approved" data-testid="tab-approved">Approved</TabsTrigger>
              <TabsTrigger value="rejected" data-testid="tab-rejected">Rejected</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search applications..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User Name</TableHead>
                  <TableHead>Scheme</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Applied Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredApplications.map((app) => (
                  <TableRow key={app.id} data-testid={`row-application-${app.id}`}>
                    <TableCell className="font-medium">{app.userName}</TableCell>
                    <TableCell className="max-w-xs truncate">{app.scheme}</TableCell>
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
                        onClick={() => handleViewDetails(app)}
                        data-testid={`button-view-${app.id}`}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDetailDialogOpen} onOpenChange={setIsDetailDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedApplication && (
            <>
              <DialogHeader>
                <DialogTitle>Application Details</DialogTitle>
                <DialogDescription>Review application and take action</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Applicant Name</Label>
                    <p className="text-base font-medium">{selectedApplication.userName}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                    <p className="text-base">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                    <p className="text-base">{selectedApplication.phone}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Disability Type</Label>
                    <p className="text-base">{selectedApplication.disabilityType}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Scheme Name</Label>
                  <p className="text-base font-medium">{selectedApplication.scheme}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Category</Label>
                    <Badge variant="outline">{selectedApplication.category}</Badge>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Amount</Label>
                    <p className="text-base font-semibold text-primary">{selectedApplication.amount}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground mb-2 block">Submitted Documents</Label>
                  <div className="flex flex-wrap gap-2">
                    {selectedApplication.documents.map((doc: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="gap-1">
                        <FileText className="h-3 w-3" />
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <DialogFooter className="gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsDetailDialogOpen(false)}
                  data-testid="button-close-dialog"
                >
                  Close
                </Button>
                {selectedApplication.status === "pending" && (
                  <>
                    <Button
                      variant="destructive"
                      onClick={() => handleReject(selectedApplication.id)}
                      data-testid="button-reject-application"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button
                      onClick={() => handleApprove(selectedApplication.id)}
                      data-testid="button-approve-application"
                    >
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </>
                )}
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}
