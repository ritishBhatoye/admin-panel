import Sidebar from "@/components/layout/sidebar"

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div >

      <main >
        {children}
      </main>
    </div>
  )
}
