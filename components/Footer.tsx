import Link from "next/link";

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full py-12 px-6 border-t border-gray-100 bg-gray-50/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© {year} Sentinel Decision Systems, Inc.</p>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                    Privacy
                </Link>
            </div>
        </footer>
    );
}
