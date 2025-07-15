import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div
      className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
      data-oid="f8-qe0q"
    >
      <div className="flex w-full max-w-sm flex-col gap-6" data-oid="8.z:tkz">
        <a
          href="#"
          className="flex items-center gap-2 self-center font-medium"
          data-oid="0.knqop"
        >
          <div
            className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md"
            data-oid="7fp1x0x"
          >
            <GalleryVerticalEnd className="size-4" data-oid="hn2twpn" />
          </div>
          Acme Inc.
        </a>
        <LoginForm data-oid="8zpr0v:" />
      </div>
    </div>
  );
}
