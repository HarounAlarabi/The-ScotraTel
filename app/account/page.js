import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};
export default async function AccountPage() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];
  return (
    <div>
      <h1 className="font-semibold text-xl text-accent-700 mb-7">
        Welcome ,{firstName}!
      </h1>
    </div>
  );
}
