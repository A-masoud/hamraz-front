import React from 'react';
import { Statistic } from '@/Items/Home';

const Statistics = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" dir="rtl">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {Statistic.map((stat, index) => (
                        <div
                            key={index}
                            className="relative group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
                        >
                            <div
                                className={`absolute top-0 right-0 w-20 h-20 
                                            bg-gradient-to-br ${stat.color}/10
                                            rounded-full 
                                            -mr-10 -mt-10 
                                            flex items-center justify-center
                                            group-hover:scale-150 transition-transform duration-500`}
                            >
                                <div className="text-4xl text-white group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                            </div>

                            <div className="relative z-10 text-center">
                                {/* <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div> */}
                                <div className="text-3xl font-bold text-gray-900 mb-1 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;