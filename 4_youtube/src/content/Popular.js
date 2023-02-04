import { useEffect } from "react"

function Popular(props) {
    const data = props.data.items

    useEffect (()=>{
        days()
    }, [])

    function days(publishedAt) {

        let day = new Date()
        let atDay = new Date(`${publishedAt}`)

        const timeDay = Math.floor((day.getTime()-atDay.getTime())/(1000*60*60*24))
        const timeHour = Math.floor((day.getTime()-atDay.getTime())/(1000*60*60))
        const timeminute = Math.floor((day.getTime()-atDay.getTime())/(1000*60))
        const timesecond = Math.floor((day.getTime()-atDay.getTime())/(1000))
        
        if (0 < timeDay) {return (`${timeDay}일 전`)}
        else if (0 < timeHour) {return (`${timeHour}시간 전`)}
        else if (0 < timeminute) {return (`${timeminute}분 전`)}
        else if (0 < timesecond) {return (`${timesecond}초 전`)}
    }
    
    return (
        <section className="flex flex-wrap pt-4 max-sm:px-20 xl:ml-56 dark:bg-black dark:text-white">
            {data.map(content => (
                <article className="px-2 mb-16 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <img
                        className="w-full object-cover mb-2 rounded-xl"
                        src={content.snippet.thumbnails.medium.url}
                    />
                    <div className="flex">
                        <div className="w-10 h-10 mr-4 rounded-full object-cover bg-zinc-200 overflow-hidden shrink-0">
                            <img
                                className="object-cover h-10"
                                src={content.snippet.thumbnails.medium.url}
                            />
                        </div>
                        <div>
                            <h4 className="mb-1">{content.snippet.localized.title}</h4>
                            <p className="text-xs text-zinc-500">{content.snippet.channelTitle}</p>
                            <p className="text-xs text-zinc-500">조회수 12만회 · {days(content.snippet.publishedAt)}</p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
        
    )
}

export default Popular