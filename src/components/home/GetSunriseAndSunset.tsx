interface Props {
    imgUrl: string;
    label: string;
    time: string;
}

function GetSunriseAndSunset({ imgUrl, label, time }: Props) {
    return (
        <div className="w-full flex items-center gap-2">
            <img src={imgUrl} alt="" className="h-14" />
            <div className="flex flex-col">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="poppins-medium scroll-m-20 text-3xl font-semibold tracking-tight">{time}</p>
            </div>
        </div>
    );
}

export { GetSunriseAndSunset };
