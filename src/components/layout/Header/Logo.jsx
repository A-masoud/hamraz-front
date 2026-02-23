
import React from 'react'
import { Heart } from 'lucide-react'
export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-orange-500 fill-current" />
            <span className="text-2xl font-bold text-orange-500">حال نو</span>
        </div>
    )
}
