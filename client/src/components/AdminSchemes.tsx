import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Search } from "lucide-react";

export default function AdminSchemes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newScheme, setNewScheme] = useState({
    name: "",
    category: "",
    description: "",
    eligibility: "",
    amount: "",
    deadline: "",
  });

  const schemes = [
    {
      id: 1,
      name: "National Scholarship for Students with Disabilities",
      category: "Education",
      description: "Financial assistance for students with disabilities",
      applicants: 1234,
      status: "active",
    },
    {
      id: 2,
      name: "Assistive Devices Distribution Scheme",
      category: "Healthcare",
      description: "Free distribution of assistive devices",
      applicants: 892,
      status: "active",
    },
    {
      id: 3,
      name: "Self-Employment Scheme for PwDs",
      category: "Employment",
      description: "Financial support for self-employment",
      applicants: 567,
      status: "active",
    },
    {
      id: 4,
      name: "Accessible Housing Loan Subsidy",
      category: "Housing",
      description: "Interest subsidy on home loans",
      applicants: 423,
      status: "inactive",
    },
  ];

  const handleAddScheme = () => {
    console.log("Adding new scheme:", newScheme);
    setIsAddDialogOpen(false);
    setNewScheme({
      name: "",
      category: "",
      description: "",
      eligibility: "",
      amount: "",
      deadline: "",
    });
  };

  const handleDeleteScheme = (id: number) => {
    console.log("Deleting scheme:", id);
  };

  const filteredSchemes = schemes.filter((scheme) =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-background">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Manage Schemes</h1>
        <p className="text-muted-foreground text-lg">Create, edit, and manage government welfare schemes</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <CardTitle>All Schemes</CardTitle>
              <CardDescription>Manage and monitor all welfare schemes</CardDescription>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button data-testid="button-add-scheme">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Scheme
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Scheme</DialogTitle>
                  <DialogDescription>Create a new government welfare scheme for PwDs</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="scheme-name">Scheme Name</Label>
                    <Input
                      id="scheme-name"
                      placeholder="Enter scheme name"
                      value={newScheme.name}
                      onChange={(e) => setNewScheme({ ...newScheme, name: e.target.value })}
                      data-testid="input-scheme-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scheme-category">Category</Label>
                    <Select value={newScheme.category} onValueChange={(value) => setNewScheme({ ...newScheme, category: value })}>
                      <SelectTrigger data-testid="select-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="employment">Employment</SelectItem>
                        <SelectItem value="housing">Housing</SelectItem>
                        <SelectItem value="financial">Financial Aid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scheme-description">Description</Label>
                    <Textarea
                      id="scheme-description"
                      placeholder="Enter scheme description"
                      value={newScheme.description}
                      onChange={(e) => setNewScheme({ ...newScheme, description: e.target.value })}
                      rows={3}
                      data-testid="input-scheme-description"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scheme-eligibility">Eligibility Criteria</Label>
                    <Textarea
                      id="scheme-eligibility"
                      placeholder="Enter eligibility criteria (comma separated)"
                      value={newScheme.eligibility}
                      onChange={(e) => setNewScheme({ ...newScheme, eligibility: e.target.value })}
                      rows={2}
                      data-testid="input-scheme-eligibility"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="scheme-amount">Amount/Benefit</Label>
                      <Input
                        id="scheme-amount"
                        placeholder="e.g., ₹50,000/year"
                        value={newScheme.amount}
                        onChange={(e) => setNewScheme({ ...newScheme, amount: e.target.value })}
                        data-testid="input-scheme-amount"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="scheme-deadline">Application Deadline</Label>
                      <Input
                        id="scheme-deadline"
                        type="date"
                        value={newScheme.deadline}
                        onChange={(e) => setNewScheme({ ...newScheme, deadline: e.target.value })}
                        data-testid="input-scheme-deadline"
                      />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} data-testid="button-cancel">
                    Cancel
                  </Button>
                  <Button onClick={handleAddScheme} data-testid="button-save-scheme">
                    Save Scheme
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search schemes..."
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
                  <TableHead>Scheme Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Applicants</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSchemes.map((scheme) => (
                  <TableRow key={scheme.id} data-testid={`row-scheme-${scheme.id}`}>
                    <TableCell className="font-medium">{scheme.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{scheme.category}</Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{scheme.description}</TableCell>
                    <TableCell>{scheme.applicants}</TableCell>
                    <TableCell>
                      <Badge variant={scheme.status === "active" ? "default" : "secondary"}>
                        {scheme.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          data-testid={`button-edit-${scheme.id}`}
                          aria-label="Edit scheme"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDeleteScheme(scheme.id)}
                          data-testid={`button-delete-${scheme.id}`}
                          aria-label="Delete scheme"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
