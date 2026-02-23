import React from 'react'
import { Phone, MapPin } from 'lucide-react'

export default function AddresAndPhone() {
    return (
        <div className=" flex items-center gap-10 text-orange-600">
            <div className='flex gap-1'>
                <Phone className="w-5 h-5" />
                <div className="text-right ">
                    <div className="text-xs text-gray-500 ">تماس:</div>
                    <div className=" text-blue-800">09147300114</div>
                </div>
            </div>
            {/* <div className='flex gap-1'>
                <MapPin className="w-5 h-5" />
                <div className="text-right">
                    <div className="text-xs text-gray-500">آدرس:</div>
                    <div className=" text-blue-800">تبریز-چهارراه شریعتی- ساختمان آناهیتا-طبقه 6</div>
                </div>
            </div> */}

        </div>
    )
}
