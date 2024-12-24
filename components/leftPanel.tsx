import React from "react";
import Logo from "./icons/logo";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Pie from "./icons/Pie";
import { ArrowUp } from "lucide-react";

const LeftPanel = () => {
  return (
    <div className="min-h-screen w-1/2 relative lg:flex hidden">
      <Card className="rounded-3xl w-[26rem] shadow-xl absolute top-1/3 left-1/2 -translate-x-1/2">
        <CardHeader className="border-b">
          <CardTitle className="flex gap-2 items-center text-sm">
            <Logo size={20} />
            AI to Detect & Autofix Bad Code
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-around mt-6">
          <div className="flex flex-col items-center">
            <span className="font-bold">30+</span>
            <p className="text-xs">Language Support</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">10K+</span>
            <p className="text-xs">Developers</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">100K+</span>
            <p className="text-xs">Hours Saved</p>
          </div>
        </CardContent>
      </Card>
      <Card className="rounded-3xl w-[16rem] shadow-xl absolute top-2/3 left-1/2 -translate-y-2/3 z-50">
        <CardHeader className="pt-4 pb-2">
          <CardTitle className="flex justify-between items-center text-sm">
            <Pie />
            <div className="flex flex-col items-start font-bold text-xs">
              <span className="font-bold text-primary flex items-center">
                <ArrowUp size={14} /> Issues Fixed
              </span>
              <span>This week</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex pb-4">
          <div className="flex flex-col items-start font-bold">
            <span className="text-xs">Issues Fixed</span>
            <span className="text-3xl">500K+</span>
          </div>
        </CardContent>
      </Card>
      <div className="absolute bottom-0 left-0">
        <Logo color="#818181" size={200} />
      </div>
    </div>
  );
};

export default LeftPanel;
