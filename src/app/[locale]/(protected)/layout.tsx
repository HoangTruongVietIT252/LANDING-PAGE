import DefaultLayout from "@/layouts/DefaultLayout";

export default function ProtectedLayout(props: { children: React.ReactNode }) {
  return <DefaultLayout>{props.children}</DefaultLayout>;
}
