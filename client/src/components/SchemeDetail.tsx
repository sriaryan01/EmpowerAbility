import { useState } from "react";
import { Link, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  Calendar,
  IndianRupee,
  Users,
  FileText,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Share2,
} from "lucide-react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export default function SchemeDetail() {
  const [, params] = useRoute("/scheme/:id");
  const { speak } = useAccessibility();
  const schemeId = params?.id;

  // Mock data - replace with actual API call
  const schemeData: Record<string, any> = {
    "1": {
      id: 1,
      name: "National Scholarship for Students with Disabilities",
      category: "Education",
      shortDescription: "Financial assistance for students with disabilities pursuing higher education in recognized institutions",
      fullDescription: "The National Scholarship for Students with Disabilities is a flagship program designed to promote inclusive education and remove financial barriers faced by students with disabilities. This comprehensive scholarship program covers tuition fees, maintenance allowance, and additional support for assistive devices and learning materials. The scheme aims to ensure that no deserving student with disabilities is denied quality higher education due to financial constraints.",
      objectives: [
        "Provide financial support to students with disabilities for pursuing higher education",
        "Encourage educational institutions to create accessible and inclusive learning environments",
        "Reduce the dropout rate among students with disabilities",
        "Promote skill development and employment opportunities",
      ],
      amount: "Up to ₹50,000/year",
      deadline: "March 31, 2024",
      applicants: 1234,
      successRate: "78%",
      eligibility: {
        summary: ["PwD Certificate", "Student", "Annual Income < ₹8L"],
        detailed: [
          "Must possess a valid Disability Certificate issued by competent medical authority (minimum 40% disability)",
          "Must be enrolled in a recognized university, college, or institution for a full-time degree, diploma, or certificate course",
          "Family annual income should not exceed ₹8,00,000 from all sources",
          "Must be an Indian citizen",
          "Age limit: No upper age limit for students with disabilities",
          "Must maintain satisfactory academic performance (minimum 50% marks in previous qualifying examination)",
        ],
      },
      benefits: [
        {
          title: "Tuition Fee Coverage",
          description: "Full or partial tuition fee reimbursement up to ₹30,000 per year",
        },
        {
          title: "Maintenance Allowance",
          description: "Monthly stipend of ₹1,200 for day scholars and ₹2,000 for hostellers",
        },
        {
          title: "Book Allowance",
          description: "Annual grant of ₹5,000 for purchasing textbooks and study materials",
        },
        {
          title: "Assistive Device Support",
          description: "Additional ₹10,000 for assistive devices like screen readers, braille displays, etc.",
        },
        {
          title: "Reader Allowance",
          description: "₹3,000 per year for students requiring reader assistance (for visually impaired students)",
        },
      ],
      documents: [
        {
          name: "Disability Certificate",
          description: "Valid disability certificate from competent authority showing minimum 40% disability",
          mandatory: true,
        },
        {
          name: "Income Certificate",
          description: "Annual income certificate from competent authority (not older than 6 months)",
          mandatory: true,
        },
        {
          name: "Educational Documents",
          description: "Mark sheets and certificates of previous qualifying examination",
          mandatory: true,
        },
        {
          name: "Admission Proof",
          description: "Bonafide certificate or admission letter from the institution",
          mandatory: true,
        },
        {
          name: "Bank Account Details",
          description: "Passbook copy showing account number and IFSC code",
          mandatory: true,
        },
        {
          name: "Aadhaar Card",
          description: "Aadhaar card copy for identity verification",
          mandatory: true,
        },
        {
          name: "Passport Size Photographs",
          description: "Recent passport size photographs (2 copies)",
          mandatory: true,
        },
        {
          name: "Fee Receipt",
          description: "Fee receipt from the institution (if applicable)",
          mandatory: false,
        },
      ],
      applicationProcess: [
        {
          step: 1,
          title: "Online Registration",
          description: "Create an account on the National Scholarship Portal (scholarships.gov.in) using your email and mobile number. Verify your account through OTP.",
        },
        {
          step: 2,
          title: "Fill Application Form",
          description: "Login and complete the online application form with accurate personal, educational, and disability details. Save your application as draft to complete later if needed.",
        },
        {
          step: 3,
          title: "Upload Documents",
          description: "Scan and upload all required documents in PDF format (maximum 200KB per document). Ensure documents are clear and readable.",
        },
        {
          step: 4,
          title: "Submit Application",
          description: "Review all details carefully and submit the application. Note down the application reference number for future tracking.",
        },
        {
          step: 5,
          title: "Institute Verification",
          description: "Your institution will verify your enrollment and academic details within 15 working days.",
        },
        {
          step: 6,
          title: "Approval & Disbursement",
          description: "After approval by the scholarship committee, the scholarship amount will be directly credited to your bank account within 30-45 days.",
        },
      ],
      faqs: [
        {
          question: "Can I apply if I'm pursuing a part-time course?",
          answer: "No, this scholarship is only available for students enrolled in full-time regular courses in recognized institutions. Part-time, distance learning, and correspondence courses are not eligible.",
        },
        {
          question: "What is the minimum disability percentage required?",
          answer: "You must have a minimum of 40% disability as certified by a competent medical authority. The disability certificate should clearly mention the percentage and type of disability.",
        },
        {
          question: "Can I apply for this scholarship if I'm already receiving another scholarship?",
          answer: "You cannot receive two scholarships from government sources simultaneously. However, if the other scholarship is from a private organization or NGO, you may be eligible. Please check the specific guidelines or contact the helpline.",
        },
        {
          question: "How will I receive the scholarship amount?",
          answer: "The scholarship amount is directly transferred to your bank account through DBT (Direct Benefit Transfer). Ensure your bank account is linked with your Aadhaar number.",
        },
        {
          question: "What happens if my application is rejected?",
          answer: "If your application is rejected, you will receive an email with the reason for rejection. You may reapply in the next cycle after correcting the issues or providing missing information.",
        },
        {
          question: "Can I track my application status?",
          answer: "Yes, you can track your application status by logging into the National Scholarship Portal using your application reference number. SMS alerts will also be sent to your registered mobile number.",
        },
        {
          question: "Is there any application fee?",
          answer: "No, there is absolutely no application fee for this scholarship. The entire application process is free of cost. Beware of fraudulent websites asking for fees.",
        },
        {
          question: "Can I edit my application after submission?",
          answer: "Once submitted, you cannot edit the application. However, before final submission, you can save it as a draft and make changes. After submission, only the institute can request corrections if needed.",
        },
      ],
      contact: {
        department: "Ministry of Social Justice and Empowerment",
        address: "Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi - 110001",
        phone: "1800-11-8004 (Toll-Free)",
        email: "disabilities-education@gov.in",
        website: "https://scholarships.gov.in",
        helpdesk: "Available Mon-Fri, 9:00 AM - 6:00 PM",
      },
      relatedSchemes: [
        { id: 5, name: "Special Education Assistance Program", category: "Education" },
        { id: 2, name: "Assistive Devices Distribution Scheme", category: "Healthcare" },
      ],
      testimonials: [
        {
          name: "Priya Sharma",
          disability: "Visual Impairment",
          course: "B.Tech Computer Science",
          quote: "This scholarship transformed my life. I could focus on my studies without worrying about financial burden. The additional support for screen readers and assistive technology made my learning journey smooth.",
        },
        {
          name: "Rajesh Kumar",
          disability: "Mobility Impairment",
          course: "MBA",
          quote: "Thanks to this scholarship, I completed my MBA from a premier institution. The maintenance allowance helped me cover my daily expenses and the process was completely transparent and timely.",
        },
      ],
    },
    // Add more schemes with similar detailed structure
  };

  const scheme = schemeData[schemeId || "1"];

  if (!scheme) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Scheme Not Found</CardTitle>
            <CardDescription>The scheme you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/browse">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Browse
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSpeak = (text: string) => {
    speak(text);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/browse">
            <Button variant="ghost" data-testid="button-back">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Browse
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-3">
                      <Badge variant="secondary" className="text-sm">
                        {scheme.category}
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        Success Rate: {scheme.successRate}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl mb-2">{scheme.name}</CardTitle>
                    <CardDescription className="text-base">{scheme.shortDescription}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">About This Scheme</h3>
                  <p className="text-muted-foreground leading-relaxed">{scheme.fullDescription}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Objectives</h3>
                  <ul className="space-y-2">
                    {scheme.objectives.map((objective: string, idx: number) => (
                      <li key={idx} className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {scheme.eligibility.summary.map((item: string, idx: number) => (
                      <Badge key={idx} variant="outline">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-3">Detailed Requirements:</h4>
                    <ul className="space-y-3">
                      {scheme.eligibility.detailed.map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-2">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <IndianRupee className="h-5 w-5" />
                  Benefits & Financial Assistance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheme.benefits.map((benefit: any, idx: number) => (
                    <div key={idx} className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Required Documents
                </CardTitle>
                <CardDescription>Ensure you have all documents ready before applying</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {scheme.documents.map((doc: any, idx: number) => (
                    <div key={idx} className="flex gap-3 p-3 bg-background border rounded-lg">
                      <div className="shrink-0">
                        {doc.mandatory ? (
                          <AlertCircle className="h-5 w-5 text-destructive" />
                        ) : (
                          <FileText className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm">{doc.name}</h4>
                          {doc.mandatory && (
                            <Badge variant="destructive" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{doc.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Apply</CardTitle>
                <CardDescription>Follow these steps to submit your application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheme.applicationProcess.map((process: any, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                          {process.step}
                        </div>
                      </div>
                      <div className="flex-1 pb-4">
                        <h4 className="font-semibold mb-1">{process.title}</h4>
                        <p className="text-sm text-muted-foreground">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {scheme.faqs.map((faq: any, idx: number) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {scheme.testimonials && scheme.testimonials.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Success Stories</CardTitle>
                  <CardDescription>Hear from students who benefited from this scheme</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {scheme.testimonials.map((testimonial: any, idx: number) => (
                    <div key={idx} className="p-4 bg-muted rounded-lg">
                      <p className="text-sm italic mb-3">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.disability}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="lg:col-span-1 space-y-4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href={`/apply/${scheme.id}`}>
                  <Button className="w-full" size="lg" data-testid="button-apply-now">
                    Apply Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full" onClick={() => handleSpeak(scheme.fullDescription)} data-testid="button-read-aloud">
                  Read Aloud
                </Button>
                <Button variant="outline" className="w-full" data-testid="button-download-pdf">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="w-full" data-testid="button-share">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Scheme
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <IndianRupee className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Amount</p>
                    <p className="font-semibold text-primary">{scheme.amount}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Deadline</p>
                    <p className="font-semibold">{scheme.deadline}</p>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Total Applicants</p>
                    <p className="font-semibold">{scheme.applicants.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">{scheme.contact.department}</p>
                  <p className="text-xs text-muted-foreground mb-2">{scheme.contact.helpdesk}</p>
                </div>
                <Separator />
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                  <p className="text-xs text-muted-foreground">{scheme.contact.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                  <p className="text-xs">{scheme.contact.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                  <p className="text-xs">{scheme.contact.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                  <a href={scheme.contact.website} className="text-xs text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {scheme.contact.website}
                  </a>
                </div>
              </CardContent>
            </Card>

            {scheme.relatedSchemes && scheme.relatedSchemes.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Schemes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {scheme.relatedSchemes.map((related: any) => (
                    <Link key={related.id} href={`/scheme/${related.id}`}>
                      <div className="p-3 bg-muted rounded-lg hover-elevate active-elevate-2 cursor-pointer">
                        <p className="font-medium text-sm mb-1">{related.name}</p>
                        <Badge variant="outline" className="text-xs">
                          {related.category}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
