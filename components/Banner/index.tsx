import RetroGrid from '../../components/magicui/retro-grid';

export default function Banner({
    title,
    description,
}:{
    title: string,
    description: string
}) {
    return (
        <div className="relative w-full h-max overflow-hidden flex flex-col justify-center items-center py-20 bg-gray-100 dark:bg-gray-800 z-10">
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 z-0"></div>
            <RetroGrid />
            {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: 'url(/background/circle.svg)' }}></div> */}
            <div className="relative z-10 max-w-[90rem] overflow-hidden items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
                <h1 className="text-4xl font-bold text-center text-black dark:text-white">{title}</h1>
                <p className="text-lg text-center mt-3 text-black dark:text-white">{description}</p>
            </div>
        </div>
    )
}