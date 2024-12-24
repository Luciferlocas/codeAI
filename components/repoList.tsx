import { Search, RefreshCw, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Repository {
  name: string;
  language: string;
  size: number;
  visibility: "Public" | "Private";
  updatedAt: string;
}

const repositories: Repository[] = [
  {
    name: "design-system",
    language: "React",
    size: 7320,
    visibility: "Public",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    language: "JavaScript",
    size: 5871,
    visibility: "Private",
    updatedAt: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    language: "Python",
    size: 4521,
    visibility: "Private",
    updatedAt: "5 days ago",
  },
  {
    name: "mobile-app",
    language: "Swift",
    size: 3096,
    visibility: "Public",
    updatedAt: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    language: "Java",
    size: 6210,
    visibility: "Private",
    updatedAt: "6 days ago",
  },
  {
    name: "blog-website",
    language: "HTML/CSS",
    size: 1876,
    visibility: "Public",
    updatedAt: "4 days ago",
  },
  {
    name: "social-network",
    language: "PHP",
    size: 5432,
    visibility: "Private",
    updatedAt: "7 days ago",
  },
];

export default function RepositoryList() {
  return (
    <div className="flex-1">
      <div className="md:m-4 border md:shadow-sm md:rounded-xl overflow-hidden bg-white">
        <div className="flex flex-col gap-4 border-b p-4">
          <div className="flex md:flex-row flex-col gap-4 items-start justify-between">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-semibold">Repositories</h1>
              <p className="text-muted-foreground">33 total repositories</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <RefreshCw className="h-5 w-5" />
                Refresh All
              </Button>
              <Button>
                <Plus className="h-5 w-5 mr-2" />
                Add Repository
              </Button>
            </div>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Repositories"
              className="pl-9 max-w-md"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-200px)]">
          <div>
            {repositories.map((repo, index) => (
              <div key={index} className="border-b hover:bg-gray-100">
                <div className="p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h2 className="text-lg font-semibold">{repo.name}</h2>
                          <Badge
                            variant="outline"
                            className="bg-primary-foreground text-primary border-primary"
                          >
                            {repo.visibility}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            {repo.language}
                            <span className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span>{repo.size} KB</span>
                          <span>Updated {repo.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
