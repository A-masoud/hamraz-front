import React from 'react'
import { User } from 'lucide-react'
export default function Account() {
    return (
        <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-4 border border-gray-300 rounded-full hover:bg-blue-800  text-gray-600 hover:text-white ">
                <User className="w-5 h-5" />
            </button>
        </div>
    )
}
