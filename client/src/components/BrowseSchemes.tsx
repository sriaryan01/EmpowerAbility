import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, X } from "lucide-react";

export default function BrowseSchemes() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDisabilities, setSelectedDisabilities] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("relevance");

  const categories = ["Education", "Healthcare", "Employment", "Housing", "Financial Aid", "Social Welfare"];
  const disabilities = ["Visual", "Hearing", "Mobility", "Intellectual", "Speech", "Multiple"];

  const schemes = [
    {
      id: 1,
      name: "National Scholarship for Students with Disabilities",
      category: "Education",
      description: "Financial assistance for students with disabilities pursuing higher education in recognized institutions",
      eligibility: ["PwD Certificate", "Student", "Annual Income < ₹8L"],
      amount: "Up to ₹50,000/year",
      deadline: "March 31, 2024",
      applicants: 1234,
    },
    {
      id: 2,
      name: "Assistive Devices Distribution Scheme",
      category: "Healthcare",
      description: "Free distribution of assistive devices like wheelchairs, hearing aids, prosthetics, and other mobility aids",
      eligibility: ["PwD Certificate", "BPL/APL Card", "Medical Report"],
      amount: "100% Subsidy",
      deadline: "Ongoing",
      applicants: 892,
    },
    {
      id: 3,
      name: "Self-Employment Scheme for PwDs",
      category: "Employment",
      description: "Financial support and training for starting own business or self-employment ventures",
      eligibility: ["PwD Certificate", "Age 18-55", "Business Plan"],
      amount: "₹5 Lakhs Loan",
      deadline: "June 30, 2024",
      applicants: 567,
    },
    {
      id: 4,
      name: "Accessible Housing Loan Subsidy",
      category: "Housing",
      description: "Interest subsidy on home loans for constructing or purchasing accessible housing",
      eligibility: ["PwD Certificate", "First-time Home Buyer", "Annual Income < ₹12L"],
      amount: "3% Interest Subsidy",
      deadline: "December 31, 2024",
      applicants: 423,
    },
    {
      id: 5,
      name: "Special Education Assistance Program",
      category: "Education",
      description: "Support for special education needs including tutors, learning materials, and assistive technology",
      eligibility: ["PwD Certificate", "Age 5-18", "School Enrollment"],
      amount: "Up to ₹30,000/year",
      deadline: "April 15, 2024",
      applicants: 756,
    },
    {
      id: 6,
      name: "Healthcare Insurance Scheme",
      category: "Healthcare",
      description: "Comprehensive health insurance coverage for persons with disabilities and their families",
      eligibility: ["PwD Certificate", "Annual Income < ₹10L"],
      amount: "₹5 Lakhs Coverage",
      deadline: "Ongoing",
      applicants: 2341,
    },
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const toggleDisability = (disability: string) => {
    setSelectedDisabilities((prev) =>
      prev.includes(disability) ? prev.filter((d) => d !== disability) : [...prev, disability]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDisabilities([]);
    setSortBy("relevance");
  };

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch = scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(scheme.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Browse Schemes</h1>
          <p className="text-muted-foreground text-lg">Find the right government welfare scheme for you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filters
                  </CardTitle>
                  {(selectedCategories.length > 0 || selectedDisabilities.length > 0) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      data-testid="button-clear-filters"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold mb-3 block">Category</Label>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                          data-testid={`checkbox-category-${category.toLowerCase()}`}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-semibold mb-3 block">Disability Type</Label>
                  <div className="space-y-2">
                    {disabilities.map((disability) => (
                      <div key={disability} className="flex items-center space-x-2">
                        <Checkbox
                          id={`disability-${disability}`}
                          checked={selectedDisabilities.includes(disability)}
                          onCheckedChange={() => toggleDisability(disability)}
                          data-testid={`checkbox-disability-${disability.toLowerCase()}`}
                        />
                        <Label
                          htmlFor={`disability-${disability}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {disability}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search schemes..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search"
                  aria-label="Search schemes"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48" data-testid="select-sort">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="deadline">Deadline</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground" data-testid="text-results-count">
                {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? 's' : ''} found
              </p>
              {selectedCategories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((cat) => (
                    <Badge key={cat} variant="secondary" className="gap-1">
                      {cat}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => toggleCategory(cat)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id} className="hover-elevate active-elevate-2" data-testid={`card-scheme-${scheme.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-2 mb-2">
                          <CardTitle className="text-xl">{scheme.name}</CardTitle>
                          <Badge variant="secondary">{scheme.category}</Badge>
                        </div>
                        <CardDescription>{scheme.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-medium mb-2">Eligibility:</p>
                        <div className="flex flex-wrap gap-2">
                          {scheme.eligibility.map((item, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Amount:</span>
                          <span className="text-sm font-semibold text-primary">{scheme.amount}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Deadline:</span>
                          <span className="text-sm font-medium">{scheme.deadline}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Applicants:</span>
                          <span className="text-sm">{scheme.applicants.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link href={`/scheme/${scheme.id}`}>
                        <Button data-testid={`button-view-${scheme.id}`}>View Details</Button>
                      </Link>
                      <Link href={`/apply/${scheme.id}`}>
                        <Button variant="outline" data-testid={`button-apply-${scheme.id}`}>
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
