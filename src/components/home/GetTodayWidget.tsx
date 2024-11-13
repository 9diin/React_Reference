import { Card, CardContent, CardDescription, CardHeader, CardTitle, Separator } from "@/components";
import { CalendarDays, MapPinned } from "lucide-react";

function GetTodayWidget() {
    return (
        <Card className="w-1/4 min-w-[25%]">
            <CardHeader>
                <CardTitle className="text-xl">Today</CardTitle>
                <CardDescription>오늘 현재 날씨를 조회하고 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full h-full flex flex-col">
                    <div className="flex items-center gap-4">
                        {/* 날씨 아이콘 */}
                        <img src="src/assets/icons/1000d.svg" alt="weather-icon" className="h-16 w-16" />
                        <div className="w-full flex items-start gap-1">
                            <span className="poppins-bold scroll-m-20 text-6xl font-extrabold tracking-tight">20</span>
                            <span className="text-4xl font-extrabold">&#8451;</span>
                        </div>
                    </div>
                    <Separator className="mt-2 mb-3" />
                    <div className="w-full flex flex-col">
                        {/* 캘린더 날짜 표시 영역 */}
                        <div className="flex items-center justify-start gap-2">
                            <CalendarDays className="h-4 w-4" />
                            <p className="leading-6">2024-11-13</p>
                        </div>
                        {/* 위치 표시 영역 */}
                        <div className="flex items-center justify-start gap-2">
                            <MapPinned className="h-4 w-4" />
                            <p className="leading-6">Seoul South Korea</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export { GetTodayWidget };
