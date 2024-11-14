import { useState } from "react";
import axios from "axios";
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
import { Weather } from "@/types";

const defaultWeatherData: Weather = {
    current: {
        cloud: 0,
        condition: { text: "", icon: "", code: 0 },
        dewpoint_c: 0,
        dewpoint_f: 0,
        feelslike_c: 0,
        feelslike_f: 0,
        gust_kph: 0,
        gust_mph: 0,
        heatindex_c: 0,
        heatindex_f: 0,
        humidity: 0,
        is_day: 1,
        last_updated: "",
        last_updated_epoch: 0,
        precip_in: 0,
        precip_mm: 0,
        pressure_in: 0,
        pressure_mb: 0,
        temp_c: 0,
        temp_f: 0,
        uv: 0,
        vis_km: 0,
        vis_miles: 0,
        wind_degree: 0,
        wind_dir: "",
        wind_kph: 0,
        wind_mph: 0,
        windchill_c: 0,
        windchill_f: 0,
    },
    location: {
        country: "",
        lat: 0,
        localtime: "",
        localtime_epoch: 0,
        lon: 0,
        name: "",
        region: "",
        tz_id: "",
    },
    forecast: { forecastday: [] },
};

function HomePage() {
    const [weatherData, setWeatherData] = useState(defaultWeatherData);

    const fetchApi = async () => {
        const API_KEY = "1c7db76ae67a4a77ace135210243110";
        const BASE_URL = "http://api.weatherapi.com/v1";
        //https://api.weatherapi.com/v1/current.json?q=seoul&key=1c7db76ae67a4a77ace135210243110

        try {
            /** Promise 인스턴스 방법을 사용했을 땐, resolve에 해당 */
            const res = await axios.get(`${BASE_URL}/forecast.json?q=seoul&days=7&key=${API_KEY}`);
            console.log(res);

            if (res.status === 200) {
                setWeatherData(res.data);
            }
        } catch (error) {
            /** Promise 인스턴스 방법을 사용했을 땐, reject에 해당 */
            console.error(error);
        } finally {
            /** 비동기 로직이 실행되던 / 되지 않던 무조건 실행되어야만 하는 로직이 작성된다. */
            console.log("fetchApi 호출은 되었습니다.");
        }
    };
    fetchApi();

    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start pb-6 px-6 gap-5">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-5">
                        <GetTodayWidget data={weatherData} />
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
