import React from 'react';
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";
import SubscriptionButton from "@/components/SubscriptionButton";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { checkSubscription } from '@/lib/subscription';

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  const isPro = await checkSubscription();
  let firstChat;
  
  if (userId) {
    firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
    
    if (firstChat) {
      firstChat = firstChat[0];
    }
  }
  
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && firstChat && (
              <>
                <Link href={`/chat/${firstChat.id}`}>
                  <Button>
                    Go to Chats <ArrowRight className="ml-2" />
                  </Button>
                </Link>
                <div className="ml-3">
                  <SubscriptionButton isPro={isPro} />
                </div>
              </>
            )}
          </div>

          <div className="max-w-xl mt-1 text-lg text-slate-600">
            {/* Insert the content you provided here */}
            <h1>Welcome to regusync – Your Design Compliance Companion!</h1>
            <p>🌟 Simplify Compliance in Design! Discover seamless compliance with Building Regulations and the innovative Principal Designer role since October 1, 2023.</p>
            <p>More than a platform, regusync is a commitment to excellence in Building Regulation compliance. Evolve with the construction regulations landscape, simplify compliance, elevate your designs, and embark on a journey where design meets compliance effortlessly.</p>
            <p>🚀 Join us today! Explore a future where compliance and design converge seamlessly with regusync.</p>
          </div>

          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
