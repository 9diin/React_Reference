interface Props {
    highTemp: number;
    lowTemp: number;
}

function GetDayItem({ highTemp, lowTemp }: Props) {
    return (
        <div className="w-full flex items-center gap-7 bg-neutral-50 py-0 px-3 rounded-sm">
            <div className="w-fit h-10 flex items-center gap-2">
                <img src="src/assets/icons/1000d.svg" alt="" className="h-7 w-7" />
                <div className="flex items-center gap-1 w-20">
                    <div className="w-full h-full flex items-start gap-[2px]">
                        <span className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-red-600">
                            {highTemp}
                        </span>
                        <span className="text-xs font-normal mt-[3px]">&#8451;</span>
                    </div>
                    <div className="w-full h-full flex items-start gap-[2px]">
                        <span className="poppins-medium scroll-m-20 text-lg font-semibold tracking-tight text-sky-600">
                            {lowTemp}
                        </span>
                        <span className="text-xs font-normal mt-[3px]">&#8451;</span>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-end gap-5 mb-1">
                <small className="text-sm leading-none">03 Nov</small>
                <small className="text-sm leading-none">일요일</small>
            </div>
        </div>
    );
}

export { GetDayItem };
