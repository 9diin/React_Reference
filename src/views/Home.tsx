import {
    Header,
    GetTodayWidget,
    GetHourlyWidget,
    GetKakaoMapWidget,
    GetTodayHighlightsWidget,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    GetDayItem,
} from "@/components";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-5">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-5">
                        <GetTodayWidget />
                        <GetHourlyWidget />
                        <GetKakaoMapWidget />
                    </div>
                    {/* 하단 2개의 위젯 */}
                    <div className="w-full flex items-center gap-5">
                        <GetTodayHighlightsWidget />
                        <Card className="w-1/4 h-full">
                            <CardHeader>
                                <CardTitle>7 Days</CardTitle>
                                <CardDescription>이번주 날씨를 조회하고 있습니다.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-1">
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                                <GetDayItem highTemp={20} lowTemp={10} />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
