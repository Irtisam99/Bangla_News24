'use client';

import { authClient } from "@/lib/auth-client";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user

    const handleSignOut=async()=>{
        await authClient.signOut();
    }

    return (
        <div className='absolute right-0 top-1 flex gap-2 items-center text-sm'>
            {
                user ? <div className="flex flex-col items-center gap-1">

                    <div className="avatar">
                        <div className="w-10 rounded">
                            <img alt="Tailwind-CSS-Avatar-component" src={user?.image as string}/>
                        </div>
                    </div>
                    <h2>{user?.name}</h2>

                    <button onClick={handleSignOut} className="btn btn-error btn-xs">Sign Out</button>

                </div> : <div>

                    <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700 ">সাইন ইন</button>
                    <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">সাইন আপ</button>

                </div>

            }

        </div>
    );
};

export default UserInfo;