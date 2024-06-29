
export const Header = () => {
    return (
        <div className="flex justify-center mb-32">
            <header className='flex p-5 justify-between w-[60%] border-2 border-header-outline rounded-[12px]'>
                <div className='font-extrabold text-[34px] text-white leading-[0.8]'>
                    <p>ROCK</p>
                    <p>PAPER</p>
                    <p>SCISSORS</p>
                </div>

                <div className='font-extrabold p-2 bg-white  w-[120px] rounded-lg text-center'>
                    <p className='text-score-text'>SCORE</p>
                    <p className='text-[32px] text-dark-text'>0</p>
                </div>
            </header>
        </div>
    )
}
