import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";

import { Header, GetTodayWidget, GetHourlyWidget, Card } from "@/components";

function HomePage() {
    useKakaoLoader();

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start py-6 px-6 bg-black">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-6">
                        <GetTodayWidget />
                        <GetHourlyWidget />
                        <Card className="w-1/4 min-w-[25%] h-full">
                            {/* 지도를 표시할 컨테이너 */}
                            <Map
                                id="map"
                                center={{
                                    /** 지도의 중심좌표 */
                                    lat: 37.5683,
                                    lng: 126.9778,
                                }}
                                style={{
                                    /** 지도의 크기 */
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "8px",
                                }}
                                /** 지도의 확대 레벨 */
                                level={13}
                            />
                        </Card>
                    </div>
                    {/* 하단 2개의 위젯 */}
                    <div className="w-full flex items-center gap-6"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
