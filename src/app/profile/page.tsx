'use client';

import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";



const ProfilePage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user

    const [show, setShow] = useState(false)

    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newUserData = Object.fromEntries(formData.entries()) as { name: string, imageL: string }

        await authClient.updateUser({
            ...newUserData
        })

    }

    const handleShowForm = () => {
        setShow(!show)
    }
    return (
        <div className="mt-5">
            <div className="flex flex-col items-center gap-1">

                <Link href={'/profile'}>

                    <div className="avatar">
                        <div className="w-10 rounded">
                            <img alt="Tailwind-CSS-Avatar-component" src={user?.image as string} />
                        </div>
                    </div>
                </Link>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>

                <button className="btn" onClick={handleShowForm}>Edit Profile</button>

                {
                    show && <form onSubmit={handleUpdateProfile}>
                        <fieldset className="fieldset rounded-box w-md ">

                            <label className="label text-black text-[16px] font-semibold">নাম</label>
                            <input name="name" type="text" className="input w-md" placeholder="Name" />

                            <label className="label text-black text-[16px] font-semibold">Image</label>
                            <input name="image" type="url" className="input w-md" placeholder="Image" />

                            <button type='submit' className="btn bg-red-700 text-white mt-4">আপডেট করুন</button>
                        </fieldset>
                    </form>

                }

            </div>

        </div>
    );
};

export default ProfilePage;