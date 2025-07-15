import { cn } from "@codexpa/ui/lib/utils";
import { Button } from "@codexpa/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@codexpa/ui/components/ui/card";
import { Input } from "@codexpa/ui/components/ui/input";
import { Label } from "@codexpa/ui/components/ui/label";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6", className)}
      {...props}
      data-oid="_6m.qwr"
    >
      <Card data-oid="3rkirhy">
        <CardHeader className="text-center" data-oid="onf1f_2">
          <CardTitle className="text-xl" data-oid="z:.s0xt">
            Welcome back
          </CardTitle>
          <CardDescription data-oid="48fgr0w">
            Login with your Github or Google account
          </CardDescription>
        </CardHeader>
        <CardContent data-oid="f13z.fo">
          <form data-oid="l2n1o96">
            <div className="grid gap-6" data-oid="ecbmw65">
              <div className="flex flex-col gap-4" data-oid="yrf3z7:">
                <Button variant="outline" className="w-full" data-oid="-4.f9a6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-oid="7c2438u"
                  >
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                      data-oid="fb54ayh"
                    />
                  </svg>
                  Login with Github
                </Button>
                <Button variant="outline" className="w-full" data-oid="gu-bfp:">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-oid="hgut1ym"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                      data-oid="1hprcw-"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div>
              <div
                className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
                data-oid="_7c-lmc"
              >
                <span
                  className="bg-card text-muted-foreground relative z-10 px-2"
                  data-oid="c9k9fjz"
                >
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6" data-oid="2zwiv8a">
                <div className="grid gap-3" data-oid="sol_5vf">
                  <Label htmlFor="email" data-oid="x8:q.t3">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    data-oid="vex2wn9"
                  />
                </div>
                <div className="grid gap-3" data-oid="c2b94:x">
                  <div className="flex items-center" data-oid="qtonls.">
                    <Label htmlFor="password" data-oid="9wx_.7_">
                      Password
                    </Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                      data-oid="rx9eqt8"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    data-oid="1lf52cy"
                  />
                </div>
                <Button type="submit" className="w-full" data-oid="zph7ple">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm" data-oid="nrapmzc">
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  className="underline underline-offset-4"
                  data-oid=":bq3doi"
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      <div
        className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
        data-oid="sj0i504"
      >
        By clicking continue, you agree to our{" "}
        <a href="#" data-oid="h6p3lx7">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" data-oid="nw4o-di">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
