"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Facebook, Link2, Linkedin, Twitter } from "lucide-react";

type BlogShareProps = {
  title: string;
  slug: string;
};

export default function BlogShare({ title, slug }: BlogShareProps) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`${window.location.origin}/blog/${slug}`);
  }, [slug]);

  const shareText = useMemo(() => encodeURIComponent(title), [title]);
  const shareUrl = useMemo(() => encodeURIComponent(url), [url]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied" });
    } catch {
      toast({ title: "Unable to copy link" });
    }
  };

  const open = (targetUrl: string) => {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  const onNativeShare = async () => {
    if (!navigator.share) return false;
    try {
      await navigator.share({ title, url });
      return true;
    } catch {
      return false;
    }
  };

  const shareToX = async () => {
    const shared = await onNativeShare();
    if (shared) return;
    open(`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`);
  };

  const shareToLinkedIn = async () => {
    const shared = await onNativeShare();
    if (shared) return;
    open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`);
  };

  const shareToFacebook = async () => {
    const shared = await onNativeShare();
    if (shared) return;
    open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" variant="outline" size="sm" onClick={shareToX} disabled={!url}>
        <Twitter className="h-4 w-4" />
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={shareToLinkedIn} disabled={!url}>
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={shareToFacebook} disabled={!url}>
        <Facebook className="h-4 w-4" />
      </Button>
      <Button type="button" variant="outline" size="sm" onClick={copyLink} disabled={!url}>
        <Link2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
