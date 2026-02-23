import React from 'react'
import { Search } from 'lucide-react'
export default function Searchbox() {
    return (
        <div>
            <div className="flex-1 max-w-xl mx-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="جستجو ..."
                        className="w-full px-4 py-2 pr-10 bg-gray-100 rounded-lg text-right focus:outline-none focus:ring-2 focus:ring-pink-300"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
            </div>
        </div>
    )
}
