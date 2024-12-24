import Azure from "@/components/icons/Azure";
import Bitbucket from "@/components/icons/Bitbucket";
import Github from "@/components/icons/Github";
import Gitlab from "@/components/icons/Gitlab";
import Logo from "@/components/icons/logo";
import LeftPanel from "@/components/leftPanel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KeyRound } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="flex">
      <LeftPanel />
      <div className="min-h-screen lg:w-1/2 w-full flex flex-col items-center justify-center p-4 bg-[#FAFAFA]">
        <Card className="w-full max-w-md text-center mb-8 h-[28rem]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl justify-center mb-8 font-normal">
              <Logo />
              CodeAnt AI
            </CardTitle>
            <CardDescription className="sm:text-2xl text-xl font-semibold text-gray-900 mb-6">
              Welcome to CodeAnt AI
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="saas" className="mb-8">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  value="saas"
                >
                  SAAS
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  value="self-hosted"
                >
                  Self Hosted
                </TabsTrigger>
              </TabsList>

              <TabsContent value="saas">
                <div className="space-y-3 mt-8">
                  <Link href="/u/repository">
                    <Button variant="outline" className="w-full justify-center max-w-xs">
                      <Github />
                      Sign in with Github
                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className="w-full justify-center max-w-xs"
                  >
                    <Bitbucket />
                    Sign in with Bitbucket
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-center max-w-xs"
                  >
                    <Azure />
                    Sign in with Azure Devops
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-center max-w-xs"
                  >
                    <Gitlab />
                    Sign in with GitLab
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="self-hosted">
                <div className="space-y-3 mt-8">
                  <Button
                    variant="outline"
                    className="w-full justify-center max-w-xs"
                  >
                    <Gitlab />
                    Self Hosted GitLab
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-center max-w-xs"
                  >
                    <KeyRound className="mr-2 h-4 w-4" />
                    Sign in with SSO
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <p className="text-sm text-gray-600 text-center">
          By signing up you agree to the{" "}
          <Link href="/privacy" className="font-bold hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
