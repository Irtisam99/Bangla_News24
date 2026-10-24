'use client';

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { ReactEventHandler } from "react";

const SignUpPage = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string }

        const { data, error } = await authClient.signUp.email({
            ...user,
            callbackURL: '/'
        })

        if (data) {
            console.log(data)
            redirect("/")
        }
        if (error) {
            console.log(error)
        }

    }

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    const handleGithubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }
    return (
        <div className='flex flex-col items-center mt-5'>
            <h2 className='text-2xl font-bold text-red-700'>সাইন আপ</h2>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset rounded-box w-md ">

                    <label className="label text-black text-[16px] font-semibold">নাম</label>
                    <input name="name" type="text" className="input w-md" placeholder="Name" />

                    <label className="label text-black text-[16px] font-semibold">Image</label>
                    <input name="image" type="url" className="input w-md" placeholder="Image" />

                    <label className="label text-black text-[16px] font-semibold">ইমেইল</label>
                    <input name="email" type="email" className="input w-md" placeholder="Email" />

                    <label className="label text-black text-[16px] font-semibold">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input w-md" placeholder="Password" />

                    <button type='submit' className="btn bg-red-700 text-white mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>
            <button onClick={handleGoogleSignIn} className="btn bg-blue-500 text-white mt-4 w-md">Sign In With Google</button>
            <button className="btn bg-blue-500 text-white mt-4 w-md" onClick={handleGithubSignIn}>Sign In With Github</button>

        </div>
    );
};

export default SignUpPage;