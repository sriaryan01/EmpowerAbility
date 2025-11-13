import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, GraduationCap, Heart, Briefcase, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_image_diverse_PwDs_empowered_95af22c9.png";
import educationIcon from "@assets/generated_images/Education_scheme_icon_illustration_14747f18.png";
import healthcareIcon from "@assets/generated_images/Healthcare_scheme_icon_illustration_64f8e8c7.png";
import employmentIcon from "@assets/generated_images/Employment_scheme_icon_illustration_310957d6.png";
import housingIcon from "@assets/generated_images/Housing_scheme_icon_illustration_00c3bad6.png";
import { useState } from "react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Education", icon: GraduationCap, image: educationIcon, count: 24, color: "bg-blue-100 text-blue-700" },
    { name: "Healthcare", icon: Heart, image: healthcareIcon, count: 18, color: "bg-red-100 text-red-700" },
    { name: "Employment", icon: Briefcase, image: employmentIcon, count: 32, color: "bg-green-100 text-green-700" },
    { name: "Housing", icon: Home, image: housingIcon, count: 15, color: "bg-orange-100 text-orange-700" },
  ];

  const featuredSchemes = [
    {
      id: 1,
      name: "National Scholarship for Students with Disabilities",
      category: "Education",
      description: "Financial assistance for students with disabilities pursuing higher education",
      eligibility: ["PwD Certificate", "Student", "Annual Income < ₹8L"],
      amount: "Up to ₹50,000/year",
    },
    {
      id: 2,
      name: "Assistive Devices Scheme",
      category: "Healthcare",
      description: "Free distribution of assistive devices like wheelchairs, hearing aids, and prosthetics",
      eligibility: ["PwD Certificate", "BPL/APL Card", "Medical Report"],
      amount: "100% Subsidy",
    },
    {
      id: 3,
      name: "Self-Employment Scheme for PwDs",
      category: "Employment",
      description: "Financial support for starting own business or self-employment ventures",
      eligibility: ["PwD Certificate", "Age 18-55", "Business Plan"],
      amount: "₹5 Lakhs Loan",
    },
  ];

  const steps = [
    { title: "Browse Schemes", description: "Explore government welfare schemes tailored for your needs" },
    { title: "Check Eligibility", description: "Review detailed eligibility criteria and required documents" },
    { title: "Apply Online", description: "Submit your application with required documents easily" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-background">
      <div
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Lives Through Government Welfare
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover and access government schemes designed for Persons with Disabilities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button size="lg" className="backdrop-blur-sm bg-primary border border-primary-border" data-testid="button-browse-schemes">
                Browse Schemes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-sm bg-white/90 border-white"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for schemes by name, category, or keyword..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  data-testid="input-search-schemes"
                  aria-label="Search for schemes"
                />
              </div>
              <Button type="submit" data-testid="button-search">
                Search
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Scheme Categories</h2>
          <p className="text-muted-foreground text-lg">Explore schemes by category</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} href="/browse">
                <Card className="hover-elevate active-elevate-2 cursor-pointer" data-testid={`card-category-${category.name.toLowerCase()}`}>
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <img src={category.image} alt={category.name} className="w-24 h-24 rounded-lg" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 flex items-center justify-center gap-2">
                      <Icon className="h-5 w-5" />
                      {category.name}
                    </h3>
                    <Badge variant="secondary" data-testid={`badge-count-${category.name.toLowerCase()}`}>
                      {category.count} Schemes
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-2">Featured Schemes</h2>
              <p className="text-muted-foreground text-lg">Popular schemes for you</p>
            </div>
            <Link href="/browse">
              <Button variant="outline" data-testid="button-view-all">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSchemes.map((scheme) => (
              <Card key={scheme.id} className="hover-elevate active-elevate-2" data-testid={`card-scheme-${scheme.id}`}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{scheme.name}</CardTitle>
                    <Badge variant="secondary">{scheme.category}</Badge>
                  </div>
                  <CardDescription>{scheme.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
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
                    <div className="flex items-center justify-between pt-4">
                      <p className="text-sm font-semibold text-primary" data-testid={`text-amount-${scheme.id}`}>{scheme.amount}</p>
                      <Link href={`/scheme/${scheme.id}`}>
                        <Button size="sm" data-testid={`button-view-details-${scheme.id}`}>
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple steps to access welfare schemes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center" data-testid={`step-${idx + 1}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of beneficiaries accessing government welfare schemes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/browse">
              <Button size="lg" variant="secondary" data-testid="button-cta-browse">
                Browse All Schemes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
