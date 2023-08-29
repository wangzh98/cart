import Link from "next/link"

export default function Home() {
    return (
        <>
            <header>
                <h1 className={"text-2xl"}>TODOs</h1>
                <Link href="/about">New</Link>
            </header>
        </>
    )
}
