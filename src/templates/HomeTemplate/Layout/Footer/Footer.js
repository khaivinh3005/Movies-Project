import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer() {
    const { content } = useSelector(state => state.QuanLyRapReducer);
    return (
        <footer className="p-6 bg-gray-300">
            <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Getting started</h2>
                    <div className="flex flex-col space-y-2 text-sm">
                        <span rel="noopener noreferrer" href="#">Installation</span>
                        <span rel="noopener noreferrer" href="#">Release Notes</span>
                        <span rel="noopener noreferrer" href="#">Upgrade Guide</span>
                        <span rel="noopener noreferrer" href="#">Using with Preprocessors</span>
                        <span rel="noopener noreferrer" href="#">Optimizing for Production</span>
                        <span rel="noopener noreferrer" href="#">Browser Support</span>
                        <span rel="noopener noreferrer" href="#">IntelliSense</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Getting started</h2>
                    <div className="flex flex-col space-y-2 text-sm">
                        <span rel="noopener noreferrer" href="#">Installation</span>
                        <span rel="noopener noreferrer" href="#">Release Notes</span>
                        <span rel="noopener noreferrer" href="#">Upgrade Guide</span>
                        <span rel="noopener noreferrer" href="#">Using with Preprocessors</span>
                        <span rel="noopener noreferrer" href="#">Optimizing for Production</span>
                        <span rel="noopener noreferrer" href="#">Browser Support</span>
                        <span rel="noopener noreferrer" href="#">IntelliSense</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium">Getting started</h2>
                    <div className="flex flex-col space-y-2 text-sm">
                        <div className="grid grid-cols-3 gap-2">
                            {content.map((item, index) => {
                                return (
                                    <img src={item.logo} width={50} height={50} alt="" />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm">
                <span>© Copyright 1986. All Rights Reserved.</span>
            </div>
        </footer>
    )
}
