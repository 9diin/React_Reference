import { Header, GetTodayWidget } from "@/components";

function HomePage() {
    return (
        <div className="page">
            <div className="page__container">
                <Header />
                <div className="w-full h-full flex flex-col items-center justify-start py-6 px-6 bg-black">
                    {/* 상단 3개의 위젯 */}
                    <div className="w-full flex items-center gap-6">
                        <GetTodayWidget />
                    </div>
                    {/* 하단 2개의 위젯 */}
                    <div className="w-full flex items-center gap-6"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
