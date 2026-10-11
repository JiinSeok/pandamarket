import NavBar from "@/components/NavBar";

export default function BoardLayout({ children }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <section>{children}</section>
    </>
  )
}