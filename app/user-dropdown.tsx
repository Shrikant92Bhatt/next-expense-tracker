"use client"

import { UserButton } from "@clerk/nextjs";
import { ChartColumnBigIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
    const router = useRouter();
    return (
        <div>
            <UserButton showName appearance={{
                elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "w-80",
                    userButtonPopoverCardHeader: "flex flex-col gap-2",
                    userButtonPopoverCardContent: "flex flex-col gap-2",
                    userButtonPopoverCardFooter: "flex flex-col gap-2",
                    userButtonOuterIdentifier: {
                        color: "white !important",
                    },
                }
            }}>
                <UserButton.MenuItems>
                    <UserButton.Action
                        label="Dashboard"
                        labelIcon={<ChartColumnBigIcon size={16} />}
                        onClick={() => {
                            router.push("/dashboard");
                        }}
                    >
                    </UserButton.Action>
                </UserButton.MenuItems>
            </UserButton>
        </div>
    );
};

export default UserDropdown;