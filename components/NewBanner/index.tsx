export default function NewBanner({
    title,
    description,
}:{
    title: string,
    description: string
}) {
    return (
        <>
            <div className={'h-96 w-3/4 bg-gradient-to-r -z-10 from-blue-300 to-blue-600 absolute right-0 -top-12 opacity-10 dark:opacity-10 !blur-3xl rounded-full'}></div>
            <div className={'flex flex-col w-full justify-start h-24 items-center my-3 mt-12'}>
                <h1 className={'text-5xl font-bold underline decoration-blue-400 underline-offset-4'}>
                    {title}
                </h1>
                <div className={'mt-6'}>
                    {description}
                </div>
            </div>
        </>
    )
}