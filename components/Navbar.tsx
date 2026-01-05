import Link from "next/link";

const navLinks = [
    { name: "Problem", href: "/#problem" },
    { name: "What It Does", href: "/#what-it-does" },
    { name: "Flow", href: "/#flow" },
    { name: "Modules", href: "/#modules" },
    { name: "Fits Your Stack", href: "/#stack" },
    { name: "Built by Operators", href: "/#operators" },
    { name: "Contact", href: "/#contact" },
].filter(Boolean);

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-charcoal">
                    Sentinel
                </Link>
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
