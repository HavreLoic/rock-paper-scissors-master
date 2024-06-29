import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export const Rules = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='text-right'>
            <button className='border-white border-[1px] font-medium text-white p-2 rounded-md w-[10%] tracking-widest' onClick={() => setIsOpen(true)}>RULES</button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 rounded-lg">
                        <DialogTitle className="font-bold text-[32px] text-dark-text text-center">RULES</DialogTitle>
                        <Description className={"mb-10"}>
                            <img src="images/image-rules.svg" alt="rules" />
                        </Description>
                        <div className="flex justify-center">
                            <button onClick={() => setIsOpen(false)}>
                                <img src="images/icon-close.svg" alt="close" />
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}
