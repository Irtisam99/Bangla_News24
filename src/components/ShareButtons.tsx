
"use client";

type ShareButtonsProps = {
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  async function shareArticle() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (error) {
        // Sharing may be cancelled by the user.
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Unable to share article:", error);
        }
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert("সংবাদের লিংক কপি হয়েছে!");
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("সংবাদের লিংক কপি হয়েছে!");
    } catch {
      alert("লিংক কপি করা যায়নি।");
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={shareArticle}
        className="rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
      >
        শেয়ার করুন
      </button>

      <button
        type="button"
        onClick={copyLink}
        className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100"
      >
        লিংক কপি
      </button>
    </div>
  );
}
